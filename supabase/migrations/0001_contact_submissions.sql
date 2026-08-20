-- Contact form submissions for Morrison Handyman Services
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  town text,
  service text,
  message text not null,
  handled boolean not null default false
);

-- Lock the table down: only the service role (used by the API route) may
-- read/write. No anon or authenticated access.
alter table public.contact_submissions enable row level security;

comment on table public.contact_submissions is
  'Estimate requests submitted through the website contact form.';
