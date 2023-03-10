import Image from "next/image";
import ub from "../../public/images/UB.jpg";
import Link from "next/link";
import Navbar from "components/navbar";
import Footer from "components/footer";

const about = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[url('/images/Background.png')]">
        <div className="py-10 text-2xl font-bold text-center">
          SRM Hall Booking Facility
        </div>
        <div className="flex flex-cols">
          <Image src={ub} alt="image" className="mb-24 ml-20 h-800 w-400" />
          <div className="pl-32 mt-4 text-4xl font-bold">
            ABOUT
            <div className="text-sm font-normal pr-28">
              SRM Institute of Science and Technology (SRMIST) offers hall
              booking facilities for various events and functions on its campus.
              The university has multiple halls and auditoriums that are
              available for both internal and external events. The halls at
              SRMIST are equipped with modern facilities and amenities including
              air-conditioning, audio-visual equipment, and seating
              arrangements. To book a hall at SRMIST, interested parties can
              visit the university website and fill out the online booking form.
              The form requires details such as the name of the organization,
              the purpose of the event, the preferred hall, the date and time of
              the event, and the number of attendees. Once the form is
              submitted, the concerned authorities at SRMIST will review the
              request and respond to the booking inquiry. Overall, SRMIST hall
              booking facilities provide a convenient option for hosting events
              on its campus. With modern amenities and a supportive staff,
              SRMIST is an ideal venue for hosting a wide range of events.
            </div>
            <div className="flex text-lg font-medium text-white flex-cols">
              <Link href="/hallbooking">
                <button className="px-8 py-1 mt-12 ml-20 mr-10 text-white bg-black rounded-2xl">
                  Hall Booking
                </button>
              </Link>
              <button className="px-8 py-1 mt-12 ml-5 mr-10 text-white bg-black rounded-2xl">
                User Manual
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default about;
