-- Run this entire file in the Supabase SQL Editor before enabling the forms.
begin;

create table if not exists public.sumeeturbannest_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 150),
  phone_number text not null check (phone_number ~ '^[6-9][0-9]{9}$'),
  configuration text not null check (configuration in ('2 BHK', '3 BHK', 'Not Sure')),
  budget text not null check (char_length(trim(budget)) between 1 and 150),
  location_pincode text check (location_pincode is null or char_length(location_pincode) <= 150),
  form_source text not null check (form_source in ('contact-section', 'enquiry-panel', 'site-visit', 'home-2')),
  page_url text,
  landing_page_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  utm_id text,
  gclid text,
  gbraid text,
  wbraid text,
  fbclid text,
  submission_date text not null,
  submission_time text not null
);

create index if not exists sumeeturbannest_leads_created_at_idx
  on public.sumeeturbannest_leads (created_at desc);

alter table public.sumeeturbannest_leads enable row level security;

-- The anon key can submit leads, but cannot read, edit, or delete lead data.
revoke all on table public.sumeeturbannest_leads from public, anon, authenticated;
grant usage on schema public to anon;
grant insert on table public.sumeeturbannest_leads to anon;
grant all on table public.sumeeturbannest_leads to service_role;

drop policy if exists "sumeeturbannest_anon_insert" on public.sumeeturbannest_leads;
create policy "sumeeturbannest_anon_insert"
  on public.sumeeturbannest_leads
  for insert to anon
  with check (true);

commit;
