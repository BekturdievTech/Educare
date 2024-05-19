import Skeleton from "./skeleton";
export default function BlogPostLoading({ number }) {
  const listItems = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div className="mt-10 flex gap-8">
      {listItems.map((item, index) => (
        <div className="blog-card" key={index}>
          <div className="imgBox bg-gray-300 motion-safe:animate-pulse">
            <div className="font-outfit absolute left-0 bottom-[-1px] w-[130px] h-[52px] border-t-[10px] border-r-[10px] rounded-tr-[25px] border-white border-solid load-date-before bg-white">
              <Skeleton className="rounded-xl w-[120px] h-[34px]" />
            </div>
          </div>
          <div>
            <Skeleton className="h-[60px] w-full rounded-lg" />
            <Skeleton className="h-[48px] w-full rounded-lg mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}
