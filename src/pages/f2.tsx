import { MdAttachEmail } from "react-icons/md";
import { FcPhone } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Image from "next/image";
import menu from "../../public/images/menu.jpg";
export default function ContactUs() {
  return (
    <main>
      <Navbar />

      <div className="text-[#30449e] text-4xl">
        <div className="flex justify-center items-center flex-col text-2xl">
          <div className="flex w-full">
            <div className="w-3/5 my-10 mx-10 p-4  border-4 border-black border-solid">
              <div className="mb-6">
                <b>Enter Your Needs -</b>
                <div>
                  <hr className="w-full mt-2" />
                </div>
              </div>

              <div>
                <form className="ml-4">
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="name">
                        <b>Item Name x Quantity</b>
                      </label>
                    </div>
                    <div className="flex justify-center items-center w-96 gap-6">
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                      <label>x</label>
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                    </div>
                  </div>
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="name">
                        <b>Item x Quantity</b>
                      </label>
                    </div>
                    <div className="flex justify-center items-center w-96 gap-6">
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                      <label>x</label>
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                    </div>
                  </div>
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="name">
                        <b>Item x Quantity</b>
                      </label>
                    </div>
                    <div className="flex justify-center items-center w-96 gap-6">
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                      <label>x</label>
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                    </div>
                  </div>
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="name">
                        <b>Item x Quantity</b>
                      </label>
                    </div>
                    <div className="flex justify-center items-center w-96 gap-6">
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                      <label>x</label>
                      <input
                        type="text"
                        className="h-10 border-[#e3e3e3] border-2 border-solid w-40 mt-1.5 p-2"
                      />
                    </div>
                  </div>
                  <div className="text-lg text-center">
                    <button className="bg-[#04aa6d] mt-5 mb-2 border-white rounded-lg border-none decoration-white w-1/5 h-10 text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-2/5 my-10 p-4  mx-10 border-4 border-solid">
              <div className="mb-6">
                <b>Menu :-</b>
                <div>
                  <hr className="w-full mt-2" />
                </div>
              </div>
              <div>
                <div
                  id="carouselExampleCaptions"
                  className="relative"
                  data-te-carousel-init
                  data-te-carousel-slide
                >
                  <div
                    className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators
                  >
                    <button
                      type="button"
                      data-te-target="#carouselExampleCaptions"
                      data-te-slide-to="0"
                      data-te-carousel-active
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleCaptions"
                      data-te-slide-to="1"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleCaptions"
                      data-te-slide-to="2"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-active
                      data-te-carousel-item
                      //   style="backface-visibility: hidden"
                    >
                      <Image src={menu} className="block w-full" alt="..." />
                    </div>
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                      //   style="backface-visibility: hidden"
                    >
                      <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                        className="block w-full"
                        alt="..."
                      />
                      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                      //   style="backface-visibility: hidden"
                    >
                      <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                        className="block w-full"
                        alt="..."
                      />
                      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="prev"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Previous
                    </span>
                  </button>
                  <button
                    className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="next"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Next
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
