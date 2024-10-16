import Posts from "./Post"
import { Suspense } from "react"
import BlogPostLoading from "@/components/Loadings/BlogPost.loading"

export default async function page({ searchParams }) {
  const parameters = searchParams

  return (
    <div className="container py-24">
      <h2 className="text-center text-4xl text-dark mb-8 font-bold">Blog</h2>
      <Suspense fallback={<BlogPostLoading number={6} />}>
        <Posts parameters={parameters} />
      </Suspense>
    </div>
  )
}
