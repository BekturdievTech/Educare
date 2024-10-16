import Image from "next/image"
import { IoCalendarOutline } from "react-icons/io5"
import { IoLogoUsd } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import { GrLocation } from "react-icons/gr"
import { FiChevronRight } from "react-icons/fi"

export default function page() {
  let featuredImageLink = "/example-detail-image.jpg"
  return (
    <div className="container py-12 font-outfit">
      <h1 className="font-bold text-4xl">Mastering UI/UX Design: A Comprehensive Blog for Design Enthusiasts</h1>
      <div className="w-full h-[500px] relative my-6">
        <Image src={featuredImageLink} alt="Detail Example" fill sizes="100%" style={{ objectFit: "cover" }} className="object-top rounded-2xl" />
      </div>
      <main className="w-full flex justify-between relative">
        <section className="w-2/3">
          <div className="w-full border border-[#EEEEEE] bg-white rounded-xl p-10">
            {generalInfo("03/11/2024", "Uzbekistan, Tashkent", "To'liq", "10/12/2024")}
            {/* body */}
            <div className="py-8 text-neutral-grey" id="paragraph-1">
              <h3 className=" text-2xl font-bold py-4 text-dark">Introduction</h3>
              <p>
                Welcome to our UI/UX Design Blog, your ultimate resource for all things related to User Interface (UI) and User Experience (UX) design. Whether you're an
                experienced designer looking to stay updated with the latest trends or a newcomer eager to learn the ropes, this blog is your go-to destination for valuable
                insights, tips, and inspiration. In this post, we'll provide an overview of what you can expect from our blog and why UI/UX design is so crucial in today's digital
                landscape.
              </p>

              <h3 className=" text-2xl font-bold py-4 text-dark">1. The Basics of UI/UX Design</h3>
              <ul className="pl-3">
                <li className="list-disc">
                  Understanding the Difference: We'll start by explaining the distinctions between UI and UX design, highlighting their respective roles and importance in the
                  design process.
                </li>
                <li className="list-disc">
                  Why UI/UX Matters: Delve into the significance of UI/UX design in creating engaging, user-friendly digital experiences and its impact on business success
                </li>
              </ul>

              <h3 className=" text-2xl font-bold py-4 text-dark">2. Principles and Best Practices:</h3>
              <ul className="pl-3">
                <li className="list-disc">
                  The Fundamental Principles: Explore the core principles that underpin effective UI/UX design, including simplicity, consistency, and user-centeredness.
                </li>
                <li className="list-disc">
                  Accessibility and Inclusivity: Learn about the importance of designing for all users, including those with disabilities, and discover practical techniques for
                  ensuring accessibility in your designs.
                </li>
              </ul>
            </div>
            <blockquote className="my-4 py-6 border border-[#eeeeee] px-8 rounded-xl text-xl font-bold text-dark custom-quote relative rounded-s-none border-l-0">
              Pellentesque tincidunt malesuadal nunc dapibus purused dictum ide proin a turpis tempus, ullamcorper dui id faucibus semper quam acc erat convallis volutpat duis
              feugiat
            </blockquote>
            {/* body */}
            <div className="py-8 text-neutral-grey" id="paragraph-2">
              <h3 className=" text-2xl font-bold py-4 text-dark">Requirements</h3>
              <p>
                Our UI/UX Design Blog is here to empower designers and enthusiasts with the knowledge, skills, and inspiration needed to create exceptional digital experiences.
                Whether you're looking to enhance your design portfolio, stay updated with industry trends, or simply feed your passion for design, we've got you covered. Join us
                on this exciting journey as we explore the ever-evolving world of UI/UX design together. Stay tuned for our regular posts, and let's create amazing user
                experiences!
              </p>

              <h3 className=" text-2xl font-bold py-4 text-dark">3. User Research and Testing</h3>
              <ul className="pl-3">
                <li className="list-disc">
                  Conducting User Research: Discover the methodologies and tools for gathering valuable insights from your target audience to inform your design decisions.
                </li>
                <li className="list-disc">
                  Usability Testing: Dive into the world of usability testing and uncover strategies for evaluating your designs through real user feedback.
                </li>
              </ul>

              <h3 className=" text-2xl font-bold py-4 text-dark">4. Design Tools and Resources</h3>
              <ul className="pl-3">
                <li className="list-disc">Popular Design Tools: Explore a comprehensive guide to the most widely used UI/UX design software and their features.</li>
                <li className="list-disc">
                  Must-Read Books and Blogs: We'll recommend essential books, blogs, and online courses to help you continually improve your design skills.
                </li>
              </ul>
            </div>
            <blockquote className="my-4 py-6 border border-[#eeeeee] px-8 rounded-xl text-xl font-bold text-dark custom-quote relative rounded-s-none border-l-0">
              Pellentesque tincidunt malesuadal nunc dapibus purused dictum ide proin a turpis tempus, ullamcorper dui id faucibus semper quam acc erat convallis volutpat duis
              feugiat
            </blockquote>
            {/* body */}
            <div className="py-8 text-neutral-grey" id="paragraph-3">
              <h3 className=" text-2xl font-bold py-4 text-dark">Advantages</h3>
              <ul className="pl-3">
                <li className="list-disc">Stay Updated: Stay in the loop with the latest UI/UX design trends, from minimalist aesthetics to innovative interaction patterns.</li>
                <li className="list-disc">Case Studies: Analyze real-world examples of successful UI/UX design projects, dissecting what makes them effective.</li>
              </ul>

              <h3 className=" text-2xl font-bold py-4 text-dark">6. The significance of Design Thinking for any company</h3>
              <ul className="pl-3 pb-4">
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa
                  odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.
                </li>
                <li className="list-disc">
                  Accessibility and Inclusivity: Learn about the importance of designing for all users, including those with disabilities, and discover practical techniques for
                  ensuring accessibility in your designs.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo
                congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus. Dictum eu maecenas ipsum dolor vel imperdiet. Euismod fermentum sed quisque risus
                malesuada molestie. Aliquam ut vel penatibus eu sit in egestas molestie nisl. Interdum euismod mattis euismod vulputate non.
              </p>
            </div>
            {/* body */}
            <div className="py-8 text-neutral-grey" id="paragraph-4">
              <h3 className=" text-2xl font-bold py-4 text-dark">Documentation</h3>
              <ul className="pl-3">
                <li className="list-disc">Stay Updated: Stay in the loop with the latest UI/UX design trends, from minimalist aesthetics to innovative interaction patterns.</li>
                <li className="list-disc">Case Studies: Analyze real-world examples of successful UI/UX design projects, dissecting what makes them effective.</li>
              </ul>

              <h3 className=" text-2xl font-bold py-4 text-dark">6. The significance of Design Thinking for any company</h3>
              <ul className="pl-3 pb-4">
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa
                  odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.
                </li>
                <li className="list-disc">
                  Accessibility and Inclusivity: Learn about the importance of designing for all users, including those with disabilities, and discover practical techniques for
                  ensuring accessibility in your designs.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo
                congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus. Dictum eu maecenas ipsum dolor vel imperdiet. Euismod fermentum sed quisque risus
                malesuada molestie. Aliquam ut vel penatibus eu sit in egestas molestie nisl. Interdum euismod mattis euismod vulputate non.
              </p>
            </div>
            {/* final */}
            <div className="py-8 text-neutral-grey" id="paragraph-5">
              <h3 className=" text-2xl font-bold py-4 text-dark">Additional</h3>
              <ul className="pl-3">
                <li className="list-disc">Stay Updated: Stay in the loop with the latest UI/UX design trends, from minimalist aesthetics to innovative interaction patterns.</li>
                <li className="list-disc">Case Studies: Analyze real-world examples of successful UI/UX design projects, dissecting what makes them effective.</li>
              </ul>

              <h3 className=" text-2xl font-bold py-4 text-dark">6. The significance of Design Thinking for any company</h3>
              <ul className="pl-3 pb-4">
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa
                  odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.
                </li>
                <li className="list-disc">
                  Accessibility and Inclusivity: Learn about the importance of designing for all users, including those with disabilities, and discover practical techniques for
                  ensuring accessibility in your designs.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo
                congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus. Dictum eu maecenas ipsum dolor vel imperdiet. Euismod fermentum sed quisque risus
                malesuada molestie. Aliquam ut vel penatibus eu sit in egestas molestie nisl. Interdum euismod mattis euismod vulputate non.
              </p>
            </div>
            {/* end */}
          </div>
        </section>
        <div className="absolute z-[-1] w-[10%] h-[15%] top-[3%] right-0 rounded-full primary-gradient"></div>
        <div className="absolute z-[-1] w-[10%] h-[15%] top-[15%] left-0 rounded-full primary-gradient"></div>
        <div className="absolute z-[-1] w-[10%] h-[15%] top-[50%] left-[50%] rounded-full primary-gradient"></div>
        <div className="absolute z-[-1] w-[10%] h-[15%] top-[70%] right-0 rounded-full primary-gradient"></div>
        {/* navigation */}
        <section className="w-[30%] sticky top-4 h-screen">
          <div className="navigation-detail border rounded-xl border-[#eeeeee] bg-white">
            <h4 className="font-medium text-xl p-4 border-b border-[#eeeeee]">Navigation</h4>
            <ul className="px-4 py-4 flex flex-col gap-4 text-neutral-grey">
              <li className="flex gap-2 items-center hover:text-dark">
                <FiChevronRight size={18} />
                <a href="#paragraph-1">Introduction</a>
              </li>
              <li className="flex gap-2 items-center hover:text-dark">
                <FiChevronRight size={18} />
                <a href="#paragraph-2">Requirements</a>
              </li>
              <li className="flex gap-2 items-center hover:text-dark">
                <FiChevronRight size={18} />
                <a href="#paragraph-3">Advantages</a>
              </li>
              <li className="flex gap-2 items-center hover:text-dark">
                <FiChevronRight size={18} />
                <a href="#paragraph-4">Documentation</a>
              </li>
              <li className="flex gap-2 items-center hover:text-dark">
                <FiChevronRight size={18} />
                <a href="#paragraph-5">Additional</a>
              </li>
            </ul>
          </div>
          {SimilarPosts("Almashinuv")}
        </section>
      </main>
      <div className="absolute z-[-1] w-[20%] h-[25%] top-0 rounded-full primary-gradient"></div>
      <div className="absolute z-[-1] w-[30%] h-[35%] top-20% rounded-full primary-gradient"></div>
    </div>
  )
}

function generalInfo(date, venue, award, deadline) {
  return (
    <div className="grid grid-cols-2 justify-between gap-y-4">
      <div className="flex gap-4">
        <span className="bg-[#FFEDB6] w-10 h-10 rounded-full flex justify-center items-center">
          <IoCalendarOutline size={22} />
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{date}</span>
          Qabul boshlanishi
        </div>
      </div>
      <div className="flex gap-4">
        <span className="bg-[#FFCBC4] w-10 h-10 rounded-full flex justify-center items-center">
          <IoLogoUsd size={22} />
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{award}</span>
          Moliyalash turi
        </div>
      </div>
      <div className="flex gap-4">
        <span className="bg-[#C7CCFF] w-10 h-10 rounded-full flex justify-center items-center">
          <GrLocation size={22} />
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{venue}</span>
          Joylashuv
        </div>
      </div>
      <div className="flex gap-4">
        <span className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
          <IoTimeOutline size={22} />
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{deadline}</span>
          Muddati
        </div>
      </div>
    </div>
  )
}

function SimilarPosts(category) {
  let featuredImageLink = "/example-detail-image.jpg"

  return (
    <div className="border rounded-xl border-[#eeeeee] mt-4 bg-white">
      <h4 className="font-medium text-xl p-4 border-b border-[#eeeeee]">Similar Posts</h4>
      <div className="p-4 flex flex-col gap-y-2">
        <div className="flex gap-6">
          <div className="relative min-w-[90px] min-h-[90px]">
            <Image
              src={featuredImageLink}
              alt="Belgiyida Oqigin Toy Bola"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              className="object-top rounded-2xl border border-[#eeeeee] hover:border-[#FFD452]"
            />
          </div>
          <div className="flex flex-col items-start justify-around">
            <h3 className="font-bold">Our encounter at the New York WordCamp</h3>
            <span className="flex items-center gap-1 text-neutral-grey">
              <IoCalendarOutline />
              05/12/2024
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative min-w-[90px] min-h-[90px]">
            <Image
              src={featuredImageLink}
              alt="Belgiyida Oqigin Toy Bola"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              className="object-top rounded-2xl border border-[#eeeeee] hover:border-[#FFD452]"
            />
          </div>
          <div className="flex flex-col items-start justify-around">
            <h3 className="font-bold">Our encounter at the New York WordCamp</h3>
            <span className="flex items-center gap-1 text-neutral-grey">
              <IoCalendarOutline />
              05/12/2024
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative min-w-[90px] min-h-[90px]">
            <Image
              src={featuredImageLink}
              alt="Belgiyida Oqigin Toy Bola"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              className="object-top rounded-2xl border border-[#eeeeee] hover:border-[#FFD452]"
            />
          </div>
          <div className="flex flex-col items-start justify-around">
            <h3 className="font-bold">Our encounter at the New York WordCamp</h3>
            <span className="flex items-center gap-1 text-neutral-grey">
              <IoCalendarOutline />
              05/12/2024
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
