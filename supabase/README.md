# Lead storage setup

1. Open the SQL Editor in your Supabase project and run all of
   `sumeeturbannest_leads.sql`. The table name is `public.sumeeturbannest_leads`.
2. Add these runtime variables in Cloudflare Workers → your worker → Settings →
   Variables and Secrets:
   - `SUPABASE_URL`: `https://emzrahoqkuimiaxsqpnm.supabase.co`
   - `SUPABASE_ANON_KEY`: the anon/public key supplied for this project
   - `PABBLY_WEBHOOK_URL`: optional; retains the existing notification integration
3. Deploy the updated application. For dashboard-managed Cloudflare variables,
   run `npm run cf:build`, then
   `npx opennextjs-cloudflare deploy -- --keep-vars` to preserve them on deployment.

Local development uses the same names in the gitignored `.env.local` file.
The application reads these variables only in the server enquiry endpoint;
no `NEXT_PUBLIC_` prefix is needed.

All four forms save through `/api/enquiry`. A successful database insert is
required before redirecting to `/thank-you`. If Pabbly is configured, it receives
the enquiry after the lead is saved; its failure does not reject the saved lead.

Saved data includes name, phone, configuration, budget, location/pincode, form
source, submission time, current URL, landing URL, original referrer, the six UTM
fields, and Google/Meta click IDs. Attribution is retained in session storage
when visitors navigate away from the campaign landing URL. New campaign values
override matching saved fields. No name or phone is stored in session storage.

The SQL enables RLS and grants the anon role INSERT only. It does not allow
public SELECT, UPDATE, or DELETE. Inserts use `Prefer: return=minimal`, so no
read permission is needed. View leads in Supabase's Table Editor.
