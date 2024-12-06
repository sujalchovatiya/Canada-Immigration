import React from "react";

function Request() {
  return (
    <>
      <div className="mt-3">
        <div className="bg-[#26374a]">
          <div className="container  text-white px-5  py-4  ">
            <h2 className="text-2xl underline sm:text-4xl mt-2 ">Canada.Ca</h2>
            <p className="sm:text-2xl mt-8 mb-5 ">
              The official website of the Government of Canada
            </p>
          </div>
        </div>
        <div className="bg-gray-200 sm:p-14 p-6">
          <h2 className="text-xl font-semibold text-[#26374a] tracking-wide sm:text-2xl mt-3">
            Most requested
          </h2>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-4 sm:gap-10 mt-5">
            <a
              href="#"
              className="text-purple-700 underline font-semibold text-lg"
            >
              Sign in an account
            </a>
            <p className="underline text-blue-500 font-semibold text-lg">
              Employment Insurence and leave
            </p>
            <p className="underline text-blue-500 font-semibold text-lg">
              Public pensions (CPP and OAS)
            </p>
            <p className="underline text-blue-500 font-semibold text-lg">
              Get a support
            </p>
            <p className="underline text-blue-500 font-semibold text-lg">
              Find a job
            </p>
            <p className="underline text-blue-500 font-semibold text-lg">
              Visit Canada
            </p>
            <p className="underline text-blue-500 font-semibold text-lg">
              Get a work permit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
