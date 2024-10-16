import PostCard from "@/components/Card/postCard"
import { posts } from "@/data/postsdata"
import Pagination from "@/components/Pagination"

export default function Posts({ parameters }) {
  const { level, faculty, category } = parameters

  const filteredPosts = posts.filter((post) => {
    const matchesBosqich = level ? post.level === level : true
    const matchesSoha = faculty ? post.soha === faculty : true
    const matchesCategory = category ? post.category === category : true

    return matchesBosqich && matchesSoha && matchesCategory
  })

  const postsPerPage = 4
  const page = parameters.page ? Number(parameters.page) : 1 // Get current page from parameters, default to 1

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  // Slice the filtered posts based on the current page
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <>
      <div className="mt-20 flex flex-col gap-8">
        {paginatedPosts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      {filteredPosts.length > postsPerPage && <Pagination parameters={parameters} dataLength={filteredPosts.length} perPage={4} />}
    </>
  )
}
