import Link from "next/link";
import { Opportunities } from "@/data/constants";

export default function Imkoniyatlar() {
  return (
    <div className="py-24">
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-bold text-5xl text-center pb-2">Imkoniyatlar</h2>
        <svg width="330" height="13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,6.5 Q165,-4 330,6.5"
            fill="none"
            stroke="#B6EC3D"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div className="imkoniyatlar-grid pt-20">
        {Opportunities.map((item, index) => (
          <Link href={`imkoniyatlar${item.link}`} key={index}>
            <div className="flex flex-col justify-center items-center gap-2">
              <div
                className="rounded-2xl w-16 h-16 flex justify-center items-center"
                style={{ backgroundColor: item.bgcolor }}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-center px-5 font-outfit text-neutral-grey">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
