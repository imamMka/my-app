import React from "react";

export default function home() {
  return (
    <main className="bg-[#2d2d2d] text-white flex justify-center items-center">
      <section className="flex flex-col justify-center items-center h-screen w-[596px]">
        <div className=" w-full flex justify-between m-4 p-4 items-center border-b border-gray-200">
          <input
            type="text"
            placeholder="Insert your place name"
            className="w-full"
          />
          <img src="/search.svg" alt="" />
        </div>

        <div className=" w-full flex gap-3 m-4 p-4 items-center border-b border-gray-200">
          <div>
            <h2 className="font-bold text-[24px]">monday</h2>
            <p className="text-[24px]">04 September</p>
          </div>
          <h1 className="font-bold text-[50px]">JAKARTA</h1>
        </div>

        <div className="w-full flex gap-2 m-4 p-4 items-center border-b border-gray-200">
          <div>
            <h1 className="text-[98px] font-bold">29°</h1>
            <p className="text-[23px]">Cloudy</p>
          </div>
          <img src="/cloudy.svg" alt="" />
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-start">
            <div>
              <img src="/wind.svg" alt="" />
              <p className="text-[15px]">Wind</p>
            </div>
            <h2 className="text-[25px]">6.69/ms</h2>
          </div>

          <div className="flex gap-2 items-start">
            <div>
              <img src="/humidity.svg" alt="" />
              <p className="text-[15px]">Humidity</p>
            </div>
            <h2 className="text-[25px]">70%</h2>
          </div>

          <div className="flex gap-2 items-start ">
            <div>
              <img src="/cloud.svg" alt="" />
              <p className="text-[15px]">Clouds</p>
            </div>
            <h2 className="text-[25px]">40%</h2>
          </div>

          <div className="flex gap-2 items-start ">
            <div>
              <img src="/thermo.svg" alt="" />
              <p className="text-[15px]">Real feel</p>
            </div>
            <h2 className="text-[25px]">40%</h2>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-4 items-start">
          <h2 className="text-[21px]">Weekly Forecast</h2>
          <div className="flex justify-between w-full">
            <div className="bg-black/35 w-[100px] p-2.5">
              <p>Tuesday</p>
              <div className="flex gap-2 items-center">
                <img src="/cloudy.svg" alt="" className="w-[28px]" />
                <p className="text-[22px]">26°</p>
              </div>
              <p>Cloudy</p>
            </div>

            <div className="bg-black/35 w-[100px] p-2.5">
              <p>Wednesday</p>
              <div className="flex gap-2 items-center">
                <img src="/rainy.svg" alt="" className="w-[28px]" />
                <p className="text-[22px]">14°</p>
              </div>
              <p>Rainy</p>
            </div>

            <div className="bg-black/35 w-[100px] p-2.5">
              <p>Thursday</p>
              <div className="flex gap-2 items-center">
                <img src="/cloudy.svg" alt="" className="w-[28px]" />
                <p className="text-[22px]">25°</p>
              </div>
              <p>Cloudy</p>
            </div>

            <div className="bg-black/35 w-[100px] p-2.5">
              <p>Friday</p>
              <div className="flex gap-2 items-center">
                <img src="/sun.svg" alt="" className="w-[28px]" />
                <p className="text-[22px]">32°</p>
              </div>
              <p>Clear</p>
            </div>

            <div className="bg-black/35 w-[100px] p-2.5">
              <p>Saturday</p>
              <div className="flex gap-2 items-center">
                <img src="/cloudy.svg" alt="" className="w-[28px]" />
                <p className="text-[22px]">22°</p>
              </div>
              <p>Cloudy</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
