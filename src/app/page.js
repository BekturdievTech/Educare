import BlogPosts from "@/components/Home/BlogPosts";
import Imkoniyatlar from "@/components/Home/Imkoniyatlar";
import Landing from "@/components/Home/Landing";
import LatestPosts from "@/components/Home/LatestPosts";
import UrgentPosts from "@/components/Home/UrgentPosts";
import BlogPostLoading from "@/components/Loadings/BlogPost.loading";
import LatestPostLoading from "@/components/Loadings/PostContent.loading";
import UrgentPostLoading from "@/components/Loadings/UrgentPost.loading";
import { Suspense } from "react";

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
            <h2 className="text-5xl font-bold">Upcoming Education Events</h2>
            <p className="font-outfit w-3/5 pt-3">
              Are you eager to expand your knowledge, gain new skills, and
              connect with like-minded individuals? Look no further! We're
              thrilled to announce a series of upcoming educational events that
              promise to be both informative and engaging.
            </p>
            <Suspense fallback={<LatestPostLoading number={3}/>}>
              <LatestPosts />
            </Suspense>            
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-dark py-24">
        <div className="container">
          <h2 className="text-white text-center font-bold text-5xl">
            Muhlati Yaqin Qolganlar
          </h2>
          <Suspense fallback={<UrgentPostLoading number={3}/>}>
            <UrgentPosts />
          </Suspense>          
        </div>
      </section>
      {/*  */}
      <section>
        <div className="container mx-auto py-24">
          <h2 className="text-5xl font-bold text-center">Our Latest Blog</h2>
          <Suspense fallback={<BlogPostLoading number={3}/>}>
            <BlogPosts />
          </Suspense>                    
        </div>
      </section>
    </main>
  );
}
