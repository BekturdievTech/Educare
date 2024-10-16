import Image from "next/image"

export default function page() {
  let featuredImageLink = "/example-detail-image.jpg"
  return (
    <>
      <div className="container font-outfit relative">
        <div className="w-full h-[500px] relative my-6">
          <Image src={featuredImageLink} alt="Detail Example" fill sizes="100%" style={{ objectFit: "cover" }} className="object-top rounded-2xl" />
        </div>
        <section className="relative -translate-y-24 rounded-xl mx-auto w-[calc(100%-100px)]">
          <div className="border border-[#EEEEEE] bg-white rounded-xl p-10 top-[-100px] w-full">
            <h1 className="font-bold text-4xl font-sans">Mastering UI/UX Design: A Comprehensive Blog for Design Enthusiasts</h1>
            <div className="border-t-2 border-[#eee] mt-4 py-6">
              <p>
                Education is a fundamental pillar of any society, serving as a pathway to individual growth, societal progress, and economic development. To ensure that education
                truly fulfills its potential, it must be characterized by both equity and high standards. This combination creates an educational system that is fair, inclusive,
                and effective in preparing all students for success in an ever-changing world.
              </p>
              <div className="grid justify-between w-full grid-cols-2 gap-8 my-12">
                <div className="w-full h-[312px] relative">
                  <Image src={featuredImageLink} alt="Detail Example" fill sizes="100%" style={{ objectFit: "cover" }} className="object-top rounded-2xl" />
                </div>
                <div className="w-full h-[312px] relative">
                  <Image src={featuredImageLink} alt="Detail Example" fill sizes="100%" style={{ objectFit: "cover" }} className="object-top rounded-2xl" />
                </div>
              </div>

              <p>
                These four major elements reflect our organization's dedication to excellence, sustainability, and customer satisfaction. We are committed to providing you with
                top-notch products, outstanding support, eco-friendly practices, and innovative solutions that will help you thrive in your endeavors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
