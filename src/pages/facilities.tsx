import { facilityData, fields } from "@/constants/constant";
import Footer from "components/footer";
import Navbar from "components/navbar";

const Facilities = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center my-10 bg-[url('/images/Background.png')]">
        <div className="pb-8 text-4xl font-bold text-center ">Facilities</div>
        <div className="flex gap-1 border-2 border-solid">
          {fields.map((el) => {
            return (
              <div
                key={el.Name}
                className={`border-l-2 p-5 border-solid ${el.class}`}
              >
                {el.Name}
              </div>
            );
          })}
        </div>
        <div className="border-2 border-solid">
          {facilityData.map((el) => {
            return (
              <div className="flex gap-1" key={el.no}>
                <div className="w-20 p-5 border-b-2 border-l-2">{el.no}</div>
                <div className="w-40 p-5 border-b-2 border-l-2 ">{el.name}</div>
                <div className="w-40 p-5 border-b-2 border-l-2">
                  {el.location}
                </div>
                <div className="w-40 p-5 border-b-2 border-l-2">
                  {el.capacity}
                </div>
                <div className="p-5 border-b-2 border-l-2 w-96">
                  {el.facility}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Facilities;
