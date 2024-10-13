"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ parameters, dataLength }) {
  const pathname = usePathname();
  const { soha, bosqich, page } = parameters;

  let pageParam = parseInt(page, 10);
  pageParam = !pageParam || pageParam < 1 ? 1 : pageParam;
  const perPage = 4;

  const totalPages = Math.ceil(dataLength / perPage);

  const prevPage = pageParam - 1 > 0 ? pageParam - 1 : 1;
  const nextPage = pageParam + 1;
  pageParam = pageParam > totalPages ? totalPages : pageParam;

  const pageNumbers = [];
  const offsetNumber = 4;
  for (let i = pageParam - offsetNumber; i <= pageParam + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="mt-20 font-outfit text-xl">
      <div className="flex justify-center items-center gap-8">
        {pageParam === 1 ? (
          <div className="opacity-60" aria-disabled="true">
            <IoIosArrowBack size={24} />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...(bosqich ? { bosqich } : {}),
                ...(soha ? { soha } : {}),
                page: prevPage,
              },
            }}
            aria-label="Previous Page"
          >
            <IoIosArrowBack size={24} />
          </Link>
        )}

        {pageNumbers.map((pageNumber, index) => (
          <Link
            key={index}
            className={
              pageParam === pageNumber
                ? "bg-primary h-[40px] w-[40px] rounded-full flex justify-center items-center font-semibold"
                : ""
            }
            href={{
              pathname: pathname,
              query: {
                ...(bosqich ? { bosqich } : {}),
                ...(soha ? { soha } : {}),
                page: pageNumber,
              },
            }}
          >
            {pageNumber}
          </Link>
        ))}

        {pageParam === totalPages ? (
          <div className="opacity-60" aria-disabled="true">
            <IoIosArrowForward size={24} />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...(bosqich ? { bosqich } : {}),
                ...(soha ? { soha } : {}),
                page: nextPage,
              },
            }}
            aria-label="Next Page"
          >
            <IoIosArrowForward size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}
