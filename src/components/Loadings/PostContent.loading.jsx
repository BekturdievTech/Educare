import Skeleton from "./skeleton";

export default function LatestPostLoading({ number }) {
  const listItems = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div className="mt-10 flex flex-col gap-8">
      {listItems.map((post, index) => (
        <div key={index} className="w-full p-4 border rounded-3xl flex justify-between border-[#eeeeee] items-center gap-8 hover:border-[#FFD452] post-card transition duration-300 ease-in-out font-outfit">
          
          <Skeleton className="min-w-[324px] h-[198px] relative rounded-2xl"/>
          <div className="w-full">            
            <Skeleton className="w-full h-[96px] rounded-xl"/>
            <div className="font-outfit flex items-center gap-6 pt-8">
              <Skeleton className="h-[40px] w-[180px] rounded-lg"/>
              <Skeleton className="h-[40px] w-[180px] rounded-lg"/>
              <Skeleton className="h-[40px] w-[180px] rounded-lg"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
