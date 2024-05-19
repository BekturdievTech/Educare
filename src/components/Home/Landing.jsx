import Image from "next/image";
export default function Landing() {
  return (
    <div className="flex py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="mb-4 font-bold text-6xl">
          Find the Perfect Course and develop your skills
        </h1>
        <p className="mb-8 leading-relaxed font-outfit text-neutral-grey">
          Want to raise your grade point average? To increase your success at
          school, you must study more diligently with the assistance of a superb
          teacher.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex font-medium font-outfit text-dark bg-primary border-0 py-2 px-6 focus:outline-none rounded-[10px] text-lg">
            Become a Student
          </button>
          <button className="ml-4 inline-flex border-dark border py-2 px-6 focus:outline-none rounded-[10px] text-lg">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  );
}
