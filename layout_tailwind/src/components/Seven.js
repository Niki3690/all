import React from "react";

const Seven = () => {
  return (
    <div>
      <div>
      <p className="text-3xl text-center font-semibold text-green-600">
          Seven Layout
        </p>
      <img src="seven.PNG"/>
       
        <div className="mt-6 p-3 ml-3 mr-3 bg-[#DBDBDB]">
          <p className="text-xl text-center">
            {" "}
            Although details about the evolution of dogs are uncertain, the
            first dogs were hunters with keen senses of sight and smell. Humans
            developed these instincts and created new breeds as need or desire
            arose.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-14 p-3">
        <div className="border border-black  ">
          <img src="https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000" />
        </div>

        <div className="col-span-2 border border-black">
          <center>
            <img
              className="h-[500px] w-[60vh]"
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            />
          </center>
        </div>
      </div>

      <div className="mt-2 p-3 ml-3 mr-3 bg-[#DBDBDB]">
        <p className="text-xl text-center">
          {" "}
          Although details about the evolution of dogs are uncertain, the first
          dogs were hunters with keen senses of sight and smell. Humans
          developed these instincts and created new breeds as need or desire
          arose.
        </p>
      </div>
      <br />
      <hr className="bg-[red] h-1.5" />
    </div>
  );
};

export default Seven;
