import { posts } from "@/data/constants"
import Pagination from "@/components/Pagination"
import BlogCard from "@/components/Card/blogCard"

export default async function Posts({ parameters }) {
  const blog = await getBlogPosts()
  const filteredPosts = posts

  const postsPerPage = 6
  const page = parameters.page ? Number(parameters.page) : 1 // Get current page from parameters, default to 1

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  // Slice the filtered posts based on the current page
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <>
      <div className=" flex justify-between gap-y-8 flex-wrap">
        {paginatedPosts.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      {filteredPosts.length > postsPerPage && <Pagination parameters={parameters} dataLength={filteredPosts.length} perPage={6} />}
    </>
  )
}

async function getBlogPosts() {
  await delay(1700)
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  if (!res.ok) {
    throw new Error("Failed to fetch the data")
  }

  return res.json()
}

function delay(n) {
  return new Promise((r) => setTimeout(r, n))
}
