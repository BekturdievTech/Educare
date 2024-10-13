import FilterBar from "@/components/FilterBar/filter";
import Posts from "./Post";
import { Suspense } from "react";
import LatestPostLoading from "@/components/Loadings/PostContent.loading";

export default function page({ searchParams }) {
  const parameters = searchParams;
  
  return (
    <div className="container py-24">
      <FilterBar parameters={parameters} />
      <Suspense fallback={<LatestPostLoading number={3}/>}>
        <Posts parameters={parameters}/>
      </Suspense>      
    </div>
  );
}
