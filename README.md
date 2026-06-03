# LearnOS — Student Dashboard

## Tech Stack
- Next.js 15 (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase keys
4. Run `npm run dev`

## Architecture
Data fetching uses Next.js Server Components — Supabase runs on the server so keys never reach the browser. Client Components handle animations and interactions only. Suspense boundaries show skeleton loaders while data loads. Falls back to mock data if Supabase is unreachable.

## Supabase Schema
```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);
```