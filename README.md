Smart Bookmark Manager

A simple full-stack bookmark manager built using Next.js, Supabase, and Tailwind CSS.

Live Demo

https://smart-bookmark-app-sachin.vercel.app

GitHub Repo
https://github.com/sachinbmgithub/smart-bookmark-app

Features

Google OAuth login (Signup & Login)

Add bookmarks (Title + URL)

Delete bookmarks

Bookmarks are private per user

Real-time sync across tabs

Logout functionality

Loading spinner for better UX

Tech Stack

Next.js (App Router)

Supabase (Auth, Database, Realtime)

Tailwind CSS

Vercel (Deployment)

How It Works

Users log in using Google OAuth via Supabase.

Each bookmark is stored with a user_id.

Row Level Security ensures users only see their own bookmarks.

Supabase Realtime updates bookmarks across multiple tabs instantly.

Problems Faced & Solutions

1) Google OAuth redirect issue
Problem: After login, the app was not redirecting correctly.

Solution: Added the correct redirect URL in Supabase Authentication settings and used redirectTo in the login function.

2) Realtime not working across tabs

Problem: Bookmarks were not updating automatically in another tab.

Solution: Enabled Realtime for the bookmarks table in Supabase Table Editor and added a realtime subscription in the dashboard.

3) UI not updating after add/delete

Problem: Bookmarks appeared only after page refresh.

Solution: Called fetchBookmarks() after insert/delete to update state instantly.

4) Deployment error on Vercel

Problem: Build failed with: supabaseUrl is required

Solution:
Added environment variables in Vercel:
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
