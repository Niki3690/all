import React from "react";

const Layout = () => {
  return (
    <div>
      <p className="text-3xl text-center font-semibold text-green-600">
        Layout_1
      </p>
      <img className="h-[245px]" src="layout_1.PNG" />
      <br />
      <br />

      <div className="border-4 border-[#3434CC] m-3 p-3 bg-[#64CCFC] ">
        <p className="text-center text-3xl font-semibold">HEADER</p>
      </div>

      <div className="border-4 border-[#FC34CC] m-3 p-3 mt-0 bg-[#FCCCFC] h-28">
        <p className="text-center text-3xl font-semibold">PATH</p>
      </div>

      <div className="border-4 border-[#FCCC04] m-3 p-3 mt-0 bg-[#FCFCCC] h-18">
        <p className="text-center text-3xl font-semibold content-center hover:text-top">
          DOCKTOP
        </p>
      </div>

      <div className="grid grid-rows-3 grid-flow-col m-3 content-center text-center ">
        <div className="border-4 border-[#CC0404] row-span-3 bg-[#FCCCCC] ">
          <p className="text-center text-3xl justify-start font-semibold hover:text-left">
            DOCKLEFT
          </p>
        </div>
        <div className="col-span-2">
          <div className="border-4 border-[#9C34FC] bg-[#CCCCFC]">
            <p className="text-center text-3xl m-2 p-2 font-semibold">ERROR</p>
          </div>

          <div className="border-4 border-[black] bg-[#B4B4B4] ">
            <p className="text-center text-3xl m-2 p-2 font-semibold h- ">
              CONTENT
            </p>
          </div>
        </div>

        <div className="border-4 border-[#008000] row-span-3 bg-[#CCFC9C]">
          <p className="text-center text-3xl font-semibold hover:text-right ">
            DOCKRIGHT
          </p>
        </div>
      </div>

      <div className="border-4 border-[#34CCCC] m-3 p-3 mt-0 bg-[#CCFCFC] h-18">
        <p className="text-center text-3xl font-semibold hover:text-bottom align-middle">
          DOCKBOTTOM
        </p>
      </div>

      <div className="border-4 border-[orange] m-3 p-3 mt-0 bg-[#FCCC9C] h-28">
        <p className="text-center text-3xl font-semibold hover:text-bottom">
          FOOTER
        </p>
      </div>
      <br />
      <hr className="bg-[red] h-1.5" />
    </div>
  );
};

export default Layout;
