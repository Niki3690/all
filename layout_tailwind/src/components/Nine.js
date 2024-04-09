import React from "react";

const Nine = () => {
  return (
    <div>
       <p className="text-3xl text-center font-semibold text-green-600">
        Nine Layout
      </p>
        <img src="nine.PNG"/>
     
      <div className="grid grid-cols-2">
        <div className="border border-black  p-5 m-12 bg-[#DBDBDB] ">
          <center>
            <img
              className="h-[300px] w-[50vh]"
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            />
          </center>
        </div>

        <div className="border border-black  p-5 m-12 bg-[#DBDBDB] ">
          <center>
            <img
              className="h-[300px] w-[50vh]"
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            />
          </center>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div className="border border-black  p-5 m-12 bg-[#DBDBDB] ">
          <center>
            <img
              className="h-[300px] w-[50vh]"
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            />
          </center>
        </div>
        <div className="border border-black  p-5 m-12 bg-[#DBDBDB] ">
          <center>
            <img
              className="h-[300px] w-[50vh]"
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            />
          </center>
        </div>
      </div>
      <br />
      <hr className="bg-[red] h-1.5" />
    </div>
  );
};

export default Nine;
