import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constans/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="border-solid border-2 border-green-500">
      <header className="relative">
        <img src={resident?.image} alt="" />
        {/* status */}
        <div className="border-solid border-2 border-green-500 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-1  flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className=" border-t-4 border-green-500">
        <div className=" flex border-b border-green-950 justify-center  ">
          <h4 className="text-2xl font-bold p-2">{resident?.name}</h4>
        </div>

        <ul className="p-2 px-4">
          <li>
            <span className="font-serif text-[#938686]">species</span>{" "}
            {resident?.species}
          </li>
          <li>
            <span className="font-serif text-[#938686]">Origin</span>{" "}
            {resident?.origin.name}
          </li>
          <li>
            <span className="font-serif text-[#938686]">times appear</span>{" "}
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ResidentCard;
