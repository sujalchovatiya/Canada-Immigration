import React from "react";
import photo from "../../assets/Toranto/toronto.jpg";

function Goverment() {
  return (
    <>
      <div className="bg-gray-100 mt-8 ">
        <div className="container py-6">
            
          <p className="text-2xl font-semibold mb-5">Your Goverment</p>
          <div className="flex  gap-10">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:gap-x-32 ">
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                All contacts
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                News
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                Prime Minister
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                Department and agencies
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                {" "}
                About goverment
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                {" "}
                Open govermentand data
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                Working for the goverment{" "}
              </p>
              <p className="font-bold text-lg text-[#26374a] underline tracking-wide cursor-pointer hover:text-blue-700">
                Treaties, laws and regulation{" "}
              </p>
            </div>
            {/* photo */}
            <div className="hidden sm:block  " >
                
              <img src={photo} alt="" className="w-[500px] ml-[100px] h-[full]" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goverment;
