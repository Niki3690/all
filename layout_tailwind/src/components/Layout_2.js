import React from "react";

const Layout_2 = () => {
  return (
    <div>
      <p className="text-3xl text-center font-semibold text-green-600">
        Layout_2
      </p>
      <img className="h-[245px]" src="layout_2.PNG" />
      <br />
      <br />

      <div className="bg-[#FCFD97] border-4 border-dashed  border-black">
        <div className="grid grid-cols-4 m-3 p-3 gap-5 ">
          <div className="col-span-3 ">
            <p className="border-4 border-black bg-white">
              <p className="text-center text-xl font-semibold m-6 p-6 ">
                WEBSITE NAME
              </p>
            </p>
          </div>
          <div className="border-4 border-black  bg-white">
            <p className="text-center text-xl font-semibold m-6 p-6">LOGO</p>
          </div>
        </div>

        <div className="grid grid-cols-5 m-3 p-3 gap-5">
          <div className="border-4 border-black text-center text-xl font-semibold m-1 p-1  bg-white">
            BUTTONS
          </div>
          <div className="border-4 border-black text-center text-xl font-semibold m-1 p-1 bg-white">
            BUTTONS
          </div>{" "}
          <div className="border-4 border-black text-center text-xl font-semibold m-1 p-1 bg-white">
            BUTTONS
          </div>{" "}
          <div className="border-4 border-black text-center text-xl font-semibold m-1 p-1 bg-white">
            BUTTONS
          </div>{" "}
          <div className="border-4 border-black text-center text-xl font-semibold m-1 p-1 bg-white">
            BUTTONS
          </div>
        </div>

        <div className="grid grid-cols-5 m-3 p-3 gap-5">
          <div className="border-4 border-black bg-white">
            <p className="text-center text-xl font-semibold  ">
              MENU OF
              <br /> THERS <br /> AREA<br /><br /><br /><br />
            </p>
          </div>

          <div className="border-4 border-black col-span-3 bg-white">
            <p className="text-center text-xl font-semibold h-[25px]">PEOPLE INVOLVED</p>
          </div>

          <div className="border-4 border-black bg-white">
            <p className="text-center text-xl font-semibold m-5">
              WEB <br />
              ADDRESSES
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 m-3 p-3 gap-5">
          <div>
            <div className="border-4 border-black  bg-white">
              <p className="text-center text-xl font-semibold m-5 p-[30px]">
                LINK TO <br /> MAP
              </p>
              <br />
            </div>
            <br />

            <div className="border-4 border-black  bg-white">
              <p className="text-center text-xl font-semibold m-5 p-[30px]">
                LINK TO <br /> MAP
              </p>
              <br />
            </div>
          </div>

          <div className="border-4 border-black col-span-3  bg-white">
            <p className="text-center text-xl font-semibold">
              OTHER INFORMATION
            </p>
          </div>

          <div>
            <div className="border-4 border-black  bg-white">
              <p className="text-center text-xl font-semibold m-5 p-[30px]">
                LINK TO <br /> ADDRESS
              </p>
              <br />
            </div>
            <br />

            <div className="border-4 border-black  bg-white">
              <p className="text-center text-xl font-semibold m-5 p-[30px]">
                LINK TO <br /> ADDRESS
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="bg-[red] h-1.5" />
    </div>
  );
};

export default Layout_2;
