import Navbar from "components/navbar";
import Footer from "components/footer";

import Image from "next/image";
import tp from "../../public/images/Rectangle24.png";
const adminInterface = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#cbe7e3] h-screen ">
        <div className="flex justify-center items-center h-100vh py-20 px-40">
          <div className="bg-[#f7f7f7] h-[600px] w-2/12 rounded-l-3xl ">
            <div className="text-center h-[500px] my-6">
              <span className="text-xl font-bold">HELLO ADMIN</span>
              <hr className="mt-4" />
              <div className="py-4">
                <ul>Activity Log</ul>
                <ul className="my-4">Previous Bookings</ul>
                <ul className="my-4">Upcoming Bookings</ul>
                <ul className="my-4">Previous Event Reports</ul>
                <ul className="my-4">Cancel Bookings</ul>
                <ul>User Manual</ul>
              </div>
            </div>
            <div className="text-center h-[100px] my-8">LOG OUT</div>
          </div>
          <div className="bg-[#fefeff] h-[600px] w-10/12 rounded-r-3xl">
            <h2 className="text-3xl font-bold flex items-center justify-center mt-4">
              Booking Requests
            </h2>
            <hr className="mt-4" />
            <div className="m-8 flex items-center justify-center w-64 h-64 duration-500 bg-[#cbe7e3] rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72 p-8">
              <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110">
                <div className="h-60 w-60">
                  <Image src={tp} className="h-full w-full" alt="" />
                </div>

                <div className="absolute hidden text-white text-m group-hover:block mt-6 font-semibold">
                  <div className="flex justify-center items-center gap-8 px-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-24">
                      Accept
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-24">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default adminInterface;
