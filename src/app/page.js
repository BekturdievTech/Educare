import BlogPosts from "@/components/Home/BlogPosts"
import Imkoniyatlar from "@/components/Home/Imkoniyatlar"
import Landing from "@/components/Home/Landing"
import LatestPosts from "@/components/Home/LatestPosts"
import UrgentPosts from "@/components/Home/UrgentPosts"
import BlogPostLoading from "@/components/Loadings/BlogPost.loading"
import LatestPostLoading from "@/components/Loadings/PostContent.loading"
import UrgentPostLoading from "@/components/Loadings/UrgentPost.loading"
import TitleBtn from "@/components/TitleBtn"
import { Suspense } from "react"

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <Landing />
          {/*  */}
          <Imkoniyatlar />
          {/*  */}
          <div className="py-24">
            <TitleBtn title="Events" />
            <h2 className="text-5xl font-bold">Upcoming Education Events</h2>
            <div className="flex justify-between w-full items-end">
              <p className="font-outfit w-3/5 pt-3">
                Choose from 213,000 online video courses with <br />
                new additions published every month
              </p>
              <a href="/imkoniyatlar" className="font-medium py-3 px-4 hover:bg-primary bg-dark text-white hover:text-dark rounded-lg transition ease-in duration-300 delay-150">
                Explore all
              </a>
            </div>
            <Suspense fallback={<LatestPostLoading number={3} />}>
              <LatestPosts />
            </Suspense>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-dark py-24">
        <div className="container">
          <h2 className="text-white text-center font-bold text-5xl">Muhlati Yaqin Qolganlar</h2>
          <Suspense fallback={<UrgentPostLoading number={3} />}>
            <UrgentPosts />
          </Suspense>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="container mx-auto py-24">
          <TitleBtn title="Our Blog" />
          <div className="flex justify-between w-full items-end">
            <h2 className="text-5xl font-bold">Upcoming Education Events</h2>
            <a href="/blog" className="font-medium py-3 px-4 hover:bg-primary bg-dark text-white hover:text-dark rounded-lg transition ease-in duration-300 delay-150">
              Explore all
            </a>
          </div>
          <Suspense fallback={<BlogPostLoading number={3} />}>
            <BlogPosts />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
