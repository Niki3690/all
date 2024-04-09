import React from "react";

const Twelth = () => {
  return (
    <div>
       <p className="text-3xl text-center font-semibold text-green-600">
          Twelth Layout
        </p>
      <img src="tweleve.PNG" />
     
      <div className="grid grid-cols-3 m-3 p-3 gap-4">
        <div className="border border-black">
          <img src="https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000" />
        </div>
        <div className="border border-black">
          <img src="https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000" />
        </div>
        <div className="border border-black">
          <img src="https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000" />
        </div>
      </div>

      <div className="grid grid-cols-2 m-3 p-3 gap-6">
        <div className="border border-black">
          <img
            className="p-2 h-[449px] w-[100vh] object-fill"
            src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
          />
        </div>
        <div className="border border-black">
          <img
            className="p-2 h-[449px] w-[100vh] object-fill"
            src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Twelth;
