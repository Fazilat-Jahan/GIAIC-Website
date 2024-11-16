import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full ">

      <div className="bg-customBlue fixed w-full backdrop-blur-sm top-0 z-30">
        <nav className="flex h-16 items-center w-full justify-between m-auto">
          <div className="px-12 mt-16">
            <Image src="/governor house sindh logo.png" alt="logo" width={80} height={113} />
          </div>
          <div className="text-white opacity-75 font-extrabold text-xl ">
            Tuition Free Education Program
          </div>
          <div>
            <ul className="px-9 flex">
              <li>
                <a href="#home" className="text-white px-5">Home</a>
                <a href="#home" className="text-white px-5">Apply</a>
                <a href="#home" className="text-white px-5">Jobs</a>
                <a href="#home" className="text-white px-5">Result</a>
                <a href="#courses" className="text-white px-5">Courses</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="relative z-0 bg-[url('/GovernorHouseSindh.jpeg')] w-full h-full bg-cover object-contain bg-opacity-50">
        <div className="absolute inset-0 w-full h-full bg-white bg-opacity-80 -z-50"></div>

        <div id="home" className="flex flex-row h-full w-full pt-16">
          <section className="w-1/2 h-full flex flex-col py-10 items-center justify-center">
            <div className="  items-center justify-center pl-14 pt-14  ">
              <h1 className="text-bgcustomBlue text-6xl font-extrabold"> Governor Sindh</h1>
              <h1 className="text-bgcustomBlue text-5xl leading-relaxed"> Kamran Khan Tessori</h1>
              <h1 className="text-sky-500 text-4xl font-extrabold leading-normal "> Certified Cloud</h1>
              <h1 className="text-sky-500 text-4xl font-extrabold leading-normal "> Applied Generative AI</h1>
              <h1 className="text-sky-500 text-4xl font-extrabold leading-relaxed ">Engineering (GenEng) </h1>
              <h1 className="text-bgcustomBlue text-2xl font-extrabold leading-relaxed">Earn Upto $5,000/ month</h1>
              <h1 className="text-bgcustomBlue text-2xl font-extrabold leading-relaxed">Now Admissions Are Open In Hyderabad</h1>
            </div>
          </section>

          <section className="w-1/2 h-full ">
            <div className=" relative w-full h-full items-end mt-7">
              <Image src="/governorsindh.png" alt="Governor Sindh Kamran Khan Tessori" width={0} height={0} sizes="50vw" className="w-full h-full ml-40" />
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 mx-16"></div>

      <div id="courses" className="flex h-auto w-full p-14">
        <section className="w-full h-auto">
          <div>
            <h1 className="text-bgcustomBlue text-4xl font-extrabold">Core Courses Sequences</h1>
          </div>
          <main className="flex py-10">
            <div className=" columns-4 gap-10">
            <div className="hover:scale-105 transition duration-150 ">
            <Link href="/">
                <div className="overflow-hidden flex flex-col h-fit justify-center items-center shadow-2xl rounded-lg text-center text-lg font-bold ">
                  <div >
                    <Image src="/programming_fundamentals.jpg" alt="programming_fundamentals" width={217} height={145} className="rounded-s-none w-full object-cover" />
                  </div>
                  <div className="flex px-4 py-2 justify-center items-center h-auto opacity-65 ">
                    <text>Programming Fundamentals</text>
                  </div>
                </div>
              </Link>
              </div>

              <div className="hover:scale-105 transition duration-150 ">
                  <Link href="/">
                <div className="overflow-hidden flex flex-col h-fit justify-center items-center shadow-2xl rounded-lg text-center text-lg font-bold ">
                  <div >
                    <Image src="/web2-using-nextjs.jpg" alt="web2-using-nextjs" width={217} height={145} className="rounded-s-none w-full object-cover" />
                  </div>
                  <div className="flex px-4 py-5 justify-center items-center h-auto opacity-65 ">
                    <text>Web2 Using NextJS</text>
                  </div>
                </div>
              </Link>
              </div>

            </div>
          </main>


          <div>
            <div>
              <h1 className="text-bgcustomBlue text-4xl font-extrabold py-4">Advance Courses</h1>
            </div>
            <main className="flex py-10">
              <div className=" columns-4 gap-10">
              <div className="hover:scale-105 transition duration-150 ">
              <Link href="/">
                  <div className="overflow-hidden flex flex-col h-fit justify-center items-center shadow-2xl rounded-lg text-center text-lg font-bold ">
                    <div >
                      <Image src="/Artificial Intelligence.jpg" alt="Artificial Intelligence" width={217} height={145} className="rounded-s-none w-full object-cover" />
                    </div>
                    <div className="flex px-4 py-5 justify-center items-center h-auto opacity-65 ">
                      <text>Artificial Intelligence</text>
                    </div>
                  </div>
                </Link>
                </div>

                <div className="hover:scale-105 transition duration-150 ">
                  <Link href="/">
                  <div className="overflow-hidden flex flex-col h-fit justify-center items-center shadow-2xl rounded-lg text-center text-lg font-bold ">
                    <div >
                      <Image src="/CloudComputing.jpg" alt="CloudComputing" width={217} height={145} className="rounded-s-none w-full object-cover" />
                    </div>
                    <div className="flex px-4 py-5 justify-center items-center h-auto opacity-65 ">
                      <text>Cloud Computing</text>
                    </div>
                  </div>
                </Link>
                </div>

                <div className="hover:scale-105 transition duration-150 ">
                  <Link href="/">
                    <div className="overflow-hidden flex flex-col h-fit justify-center items-center shadow-2xl rounded-lg text-center text-lg font-bold  border-black border-double">
                      <div >
                        <Image src="/web3-metaverse.jpg" alt="web3-metaverse" width={217} height={145} className="rounded-s-none w-full object-cover" />
                      </div>
                      <div className="flex px-4 py-5 justify-center items-center h-auto opacity-65 ">
                        <text>Web 3 and Metaverse</text>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </main>
          </div>



        </section>
      </div>


    </div>

  );
}
