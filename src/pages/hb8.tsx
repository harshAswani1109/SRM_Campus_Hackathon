import Image from "next/image";
import Navbar from "components/navbar";
import Footer from "components/footer";
import tp from "../../public/images/Venkataraman.jpg";
const hb8 = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full mb-8">
        <div className="bg-gray-800 flex flex-col  justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-4   px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center text-white">
              Details
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Event Name</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Host</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col text-gray-400 py-2">
                <label>Start Date</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="date"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label> End Date</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="date"
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col text-gray-400 py-2 w-1/2">
                <label>Time</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="time"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2 w-1/2">
                <label>Duration</label>
                <div className="flex">
                  <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-3/5 rounded-r-none"
                    type="tel"
                  />
                  <label className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-2/5 disabled placeholder:hrs rounded-l-none">
                    hrs
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Purpose</label>
              <input
                className="h-24 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="textarea"
              />
            </div>

            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Request
            </button>
          </form>
        </div>
        <div className="hidden sm:block">
          <Image className="w-full h-full object-cover" src={tp} alt="" />
        </div>
      </div>
    </main>
  );
};
export default hb8;
