import Image from "next/image";
import tp from "../../public/images/Rectangle24.png";
import bose from "../../public/images/Bose.jpeg";
import hippo from "../../public/images/Hippocrates.jpg";
import radha from "../../public/images/Radhakrishnan.jpg";
import rama from "../../public/images/Ramanujan.jpg";
import turing from "../../public/images/Turing.jpeg";
import venkat from "../../public/images/Venkataraman.jpg";
import ganesh from "../../public/images/Auditorium.jpg";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Link from "next/link";
const Booking = () => {
  return (
    <main className="text-[#0f171e] bg-[url('/images/Background.png')]">
      <Navbar />
      <div className="py-10 text-4xl font-bold text-center">Hall Booking</div>
      <div className="flex items-center justify-center mb-16 gap-28 ">
        <Link href="/hb1">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731] rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110">
              <div className="h-60 w-60">
                <Image
                  src={ganesh}
                  className="w-full h-full"
                  alt="T.P. Ganeshan"
                ></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="">Main Auditorium</span>
                <p className="mx-2 mt-2">Capacity: 3000</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb2">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={bose}
                  className="w-full h-full"
                  alt="J. C. Bose Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="">Sir. J. C. Bose Hall</span>
                <p className="mx-2 mt-2">Capacity: 120</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb3">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={hippo}
                  className="w-full h-full"
                  alt="Hippocrates Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="">Hippocrates Hall</span>
                <p className="mx-2 mt-2">Capacity: 600</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb4">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731] rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={radha}
                  className="w-full h-full"
                  alt="Dr.S.Radhakrishnan Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-2 font-semibold text-white text-m group-hover:block px-14">
                <span className="text-center ">Dr.S.Radhakrishnan Hall</span>
                <p className="mx-2 mt-2">Capacity: 30</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center mb-16 gap-28 ">
        <Link href="/hb5">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={rama}
                  className="w-full h-full"
                  alt="Ramanujan Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="">Ramanujan Hall</span>
                <p className="mx-2 mt-2">Capacity: 60</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb6">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image src={tp} alt="image" className="w-full h-full"></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="px-4">Mini Hall-1</span>
                <p className="mx-2 mt-2">Capacity: 300</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb7">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={turing}
                  className="w-full h-full"
                  alt="Turing Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
                <span className="px-4">Turing Hall</span>
                <p className="mx-2 mt-2">Capacity: 120</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/hb8">
          <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#07C731]  rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
            <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110 ">
              <div className="h-60 w-60">
                <Image
                  src={venkat}
                  className="w-full h-full"
                  alt="Dr. Venkatraman Ramakrishnan Hall"
                ></Image>
              </div>

              <div className="absolute hidden mt-2 text-sm font-semibold text-white group-hover:block px-14">
                <span className="">Dr. Venkatraman Ramakrishnan Hall</span>
                <p className="mx-2 mt-2 mb-4">Capacity: 60</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </main>
  );
};
export default Booking;
