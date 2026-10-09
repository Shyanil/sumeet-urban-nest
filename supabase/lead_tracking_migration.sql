-- Run AFTER sumeeturbannest_leads.sql and BEFORE deploying the tracking changes.
-- Existing leads are intentionally not guessed to be website or landing-page leads.
begin;

alter table public.sumeeturbannest_leads
  add column if not exists lead_type text check (lead_type in ('website_lead', 'landing_page_lead')),
  add column if not exists submission_hash text,
  add column if not exists conversion_claim_hash text,
  add column if not exists tracking_claimed_at timestamptz;

create or replace function public.save_sumeeturbannest_lead(p_lead jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  inserted_id uuid;
  saved public.sumeeturbannest_leads;
begin
  if p_lead->>'lead_type' not in ('website_lead', 'landing_page_lead')
     or p_lead->>'submission_hash' !~ '^[0-9a-f]{64}$'
     or p_lead->>'conversion_claim_hash' !~ '^[0-9a-f]{64}$'
     or p_lead->>'lead_type' is null
     or p_lead->>'submission_hash' is null
     or p_lead->>'conversion_claim_hash' is null then
    raise exception 'Invalid tracking context';
  end if;

  insert into public.sumeeturbannest_leads (
    id, full_name, phone_number, configuration, budget, location_pincode,
    form_source, page_url, landing_page_url, referrer,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content, utm_id,
    gclid, gbraid, wbraid, fbclid, submission_date, submission_time,
    lead_type, submission_hash, conversion_claim_hash
  ) values (
    (p_lead->>'id')::uuid, p_lead->>'full_name', p_lead->>'phone_number',
    p_lead->>'configuration', p_lead->>'budget', p_lead->>'location_pincode',
    p_lead->>'form_source', p_lead->>'page_url', p_lead->>'landing_page_url', p_lead->>'referrer',
    p_lead->>'utm_source', p_lead->>'utm_medium', p_lead->>'utm_campaign',
    p_lead->>'utm_term', p_lead->>'utm_content', p_lead->>'utm_id',
    p_lead->>'gclid', p_lead->>'gbraid', p_lead->>'wbraid', p_lead->>'fbclid',
    p_lead->>'submission_date', p_lead->>'submission_time',
    p_lead->>'lead_type', p_lead->>'submission_hash', p_lead->>'conversion_claim_hash'
  ) on conflict on constraint sumeeturbannest_leads_pkey do nothing
  returning id into inserted_id;

  select * into saved from public.sumeeturbannest_leads
  where id = (p_lead->>'id')::uuid
    and submission_hash = p_lead->>'submission_hash'
    and conversion_claim_hash = p_lead->>'conversion_claim_hash'
    and lead_type = p_lead->>'lead_type'
    and form_source = p_lead->>'form_source';

  if not found then return null; end if;
  return jsonb_build_object('id', saved.id, 'lead_type', saved.lead_type,
    'form_source', saved.form_source, 'inserted', inserted_id is not null);
end;
$$;

create or replace function public.claim_sumeeturbannest_lead_event(p_id uuid, p_claim_hash text)
returns table (lead_id uuid, lead_type text, form_source text)
language sql
security definer
set search_path = ''
as $$
  update public.sumeeturbannest_leads as lead
  set tracking_claimed_at = now()
  where lead.id = p_id
    and lead.conversion_claim_hash = p_claim_hash
    and lead.tracking_claimed_at is null
    and lead.created_at >= now() - interval '15 minutes'
    and lead.lead_type in ('website_lead', 'landing_page_lead')
  returning lead.id, lead.lead_type, lead.form_source;
$$;

revoke all on function public.save_sumeeturbannest_lead(jsonb) from public, anon, authenticated;
revoke all on function public.claim_sumeeturbannest_lead_event(uuid, text) from public, anon, authenticated;
grant execute on function public.save_sumeeturbannest_lead(jsonb) to anon;
grant execute on function public.claim_sumeeturbannest_lead_event(uuid, text) to anon;

commit;
