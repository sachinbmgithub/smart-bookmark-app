
# Smart Bookmark Manager

A simple, modern full-stack Bookmark Manager built using **Next.js, Supabase, and Tailwind CSS**.
This app allows users to securely save, manage, and access their personal bookmarks from anywhere.

---

## 🌐 Live Demo

🔗 https://smart-bookmark-app-sachin.vercel.app

## 💻 GitHub Repository

🔗 https://github.com/sachinbmgithub/smart-bookmark-app

---------------------------------------------------

#  Features

* 🔐 **Google OAuth Login** (Signup & Login)
* ➕ **Add Bookmarks** (Title + URL)
* 🗑️ **Delete Bookmarks**
* 👤 **Private Bookmarks per User**
* ⚡ **Realtime Sync Across Tabs**
* 🚪 **Logout Functionality**
* ⏳ **Loading Spinner for Better UX**

---------------------------------------------------

# 🛠️ Tech Stack

* **Next.js (App Router)** – Frontend
* **Supabase** – Backend (Auth + Database)
* **Tailwind CSS** – Styling
* **Vercel** – Deployment

---------------------------------------------------
# ⚙️ How It Works

1. Users log in using **Google OAuth** via Supabase.
2. Each bookmark is stored with a unique **user_id**.
3. **Row Level Security (RLS)** ensures users only see their own bookmarks.
4. **Supabase Realtime** updates bookmarks instantly across multiple tabs.

---------------------------------------------------

#  Problems Faced & Solutions

##  1) Google OAuth Redirect Issue

**Problem:**
After login, the app was not redirecting correctly.

**Solution:**
Added the correct redirect URL in Supabase Authentication settings and used `redirectTo` in the login function.

---

##  2) Realtime Not Working Across Tabs

**Problem:**
Bookmarks were not updating automatically in another tab.

**Solution:**

* Enabled **Realtime** for the bookmarks table in Supabase Table Editor
* Added a realtime subscription in the dashboard page

---

##  3) UI Not Updating After Add/Delete

**Problem:**
Bookmarks appeared only after refreshing the page.

**Solution:**
Called `fetchBookmarks()` after insert/delete to update state instantly.

---

##  4) Deployment Error on Vercel

**Problem:**
Build failed with error:

```
supabaseUrl is required
```

**Solution:**
Added environment variables in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

# 📌 Key Highlights

* 🔐 Secure authentication using Supabase
* 🧠 Clean state management
* ⚡ Realtime database updates
* 📱 Responsive UI with Tailwind CSS
* 🌍 Fully deployed on Vercel

---

# 👨‍💻 Author

**Sachin B M**

* GitHub: https://github.com/sachinbmgithub
* Project: Smart Bookmark Manager
