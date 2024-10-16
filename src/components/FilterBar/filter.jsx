"use client";

import FacultySelect from "./FacultySelect";
import LevelSelect from "./LevelSelect";
import { usePathname } from "next/navigation";
import CategorySelect from "./CategorySelect";

export default function FilterBar({parameters}) {
  const pathname = usePathname();

  return (
    <div className="w-full flex gap-4 border border-neutral-grey-light p-5 justify-between rounded-2xl font-outfit bg-white z-10">
      <div className="flex gap-1 w-full">
        <CategorySelect parameters={parameters} pathname={pathname}/>
        <LevelSelect parameters={parameters} pathname={pathname}/>
        <FacultySelect parameters={parameters} pathname={pathname}/>
      </div>
      <button className="bg-primary h-[60px] min-w-[200px] rounded-xl">Watch</button>
    </div>
  );
}
