import Image from "next/image";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

export default function BlogCard({ post }) {
  const { id, title, featuredImageLink, muddat, mukofot, location } = post;
  const truncateTitle = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <div className="blog-card">
      <div className="imgBox">
        <Image
          src={featuredImageLink}
          alt="Belgiyida Oqigin Toy Bola"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="object-top rounded-2xl"
        />
        <div className="date font-outfit">
          <span>13 Apr 2024</span>
        </div>
      </div>
      <Link href={"/"}>
        <h3 className="font-bold text-[20px]">
          The Art Of Taking Right Decission To Success
        </h3>
        <p className="font-outfit pt-1">{truncateTitle(title, 80)}</p>
      </Link>
    </div>
  );
}
