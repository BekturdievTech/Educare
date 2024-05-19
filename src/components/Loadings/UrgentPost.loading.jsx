import Skeleton from "./skeleton";

export default function UrgentPostLoading({ number }) {
  const listItems = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div className="grid grid-cols-3 pt-8">
      {listItems.map((post, index) => (
        <div
          key={index}
          className="w-[380px] h-[495px] rounded-[20px] border border-[#eeeeee] bg-white p-4 hover:border-primary post-card transition duration-300 ease-in-out"
        >
          <Skeleton className="relative w-[346px] h-[232px] rounded-2xl" />

          <div className=" pt-2">
            <Skeleton className="w-1/2 h-5 rounded-lg" />

            <div className="flex flex-col justify-between h-[120px] pt-4">
              <Skeleton className="w-full h-5 rounded-2xl" />
              <Skeleton className="w-full h-5 rounded-2xl" />
              <Skeleton className="w-full h-5 rounded-2xl" />
              <Skeleton className="w-full h-5 rounded-2xl" />
            </div>
            <Skeleton className="h-12 w-28 rounded-xl mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
