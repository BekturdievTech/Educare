"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ parameters, dataLength, perPage }) {
  const pathname = usePathname();
  const { faculty, level, page, category } = parameters;

  let pageParam = parseInt(page, 10);
  pageParam = !pageParam || pageParam < 1 ? 1 : pageParam;

  const totalPages = Math.ceil(dataLength / perPage);
  const prevPage = pageParam - 1 > 0 ? pageParam - 1 : 1;
  const nextPage = pageParam + 1;
  pageParam = pageParam > totalPages ? totalPages : pageParam;

  // Number of pages to show before and after the current page
  const pageWindow = 2; // The number of pages to show around the current page (e.g., [1, 2, 3, ...])

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      // Show ellipsis if current page is far from the first page
      if (pageParam > pageWindow + 2) {
        pages.push("...");
      }

      // Show the pages around the current page
      for (let i = Math.max(2, pageParam - pageWindow); i <= Math.min(totalPages - 1, pageParam + pageWindow); i++) {
        pages.push(i);
      }

      // Show ellipsis if current page is far from the last page
      if (pageParam < totalPages - pageWindow - 1) {
        pages.push("...");
      }

      // Always show the last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

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
                ...(category ? { category } : {}),
                ...(level ? { level } : {}),
                ...(faculty ? { faculty } : {}),
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
                ...(category ? { category } : {}),
                ...(level ? { level } : {}),
                ...(faculty ? { faculty } : {}),
                page: pageNumber === "..." ? pageParam : pageNumber,
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
                ...(category ? { category } : {}),
                ...(level ? { level } : {}),
                ...(faculty ? { faculty } : {}),
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

