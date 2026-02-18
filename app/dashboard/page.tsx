export const dynamic = "force-dynamic";
"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Dashboard() {
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookmarks()

    const channel = supabase
      .channel("bookmarks")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => fetchBookmarks()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchBookmarks = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()

    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false })

    setBookmarks(data || [])
    setLoading(false)
  }

  const addBookmark = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    await supabase.from("bookmarks").insert([
      { title, url, user_id: user?.id }
    ])

    setTitle("")
    setUrl("")
    fetchBookmarks() 
  }

  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id)
    fetchBookmarks()
  }
    const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/"
  }


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Bookmarks</h1>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 mb-4">
        Logout
      </button>
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2"
        />
        <button onClick={addBookmark} className="bg-blue-500 text-white px-4">
          Add
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        bookmarks.map((b) => (
          <div key={b.id} className="border p-3 mb-2 flex justify-between">
            <div>
              <p className="font-bold">{b.title}</p>
              <a href={b.url} target="_blank">{b.url}</a>
            </div>
            <button
              onClick={() => deleteBookmark(b.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  )
}
