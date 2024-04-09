import React from "react";

const Eleven = () => {
  return (
    <div>
      <div>
      <p className="text-3xl text-center font-semibold text-green-600">
          Eleven Layout
        </p>
      <img src="eleven.PNG"/>
      
        <div className="mt-6 p-3 ml-3 mr-3 bg-[#DBDBDB]">
          <p className="text-xl text-center">
            {" "}
            Although details about the evolution of dogs are uncertain, the
            first dogs were hunters with keen senses of sight and smell. Humans
            developed these instincts and created new breeds as need or desire
            arose.
          </p>
        </div>

        <div className="grid grid-cols-3 m-3 p-3 gap-4">
          <div className="border border-black">
            <img src="https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000" />
          </div>
          <div className="border border-black">
            <p className="text-xl  bg-[#E2E8F0] h-full p-3">
              The dog evolved from the gray wolf into more than 400 distinct
              breeds. Human beings have played a major role in creating dogs
              that fulfill distinct societal needs. Through the most rudimentary
              form of genetic engineering, dogs were bred to accentuate
              instincts that were evident from their earliest encounters with
              humans. Although details about the evolution of dogs are
              uncertain, the first dogs were hunters with keen senses of sight
              and smell. Humans developed these instincts and created new breeds
              as need or desire arose. Although details about the
            </p>
          </div>
          <div className="border border-black">
            <img
              className="p-2 h-[449px] w-[100vh] object-fill"
              src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
            />
          </div>
        </div>

        <div className="mt-1 p-3 ml-3 mr-3 bg-[#DBDBDB]">
          <p className="text-xl text-center">
            {" "}
            Although details about the evolution of dogs are uncertain, the
            first dogs were hunters developed these instincts and created new
            breeds as need or desire arose.
          </p>
        </div>
        <br />
        <hr className="bg-[red] h-1.5" />
      </div>
    </div>
  );
};

export default Eleven;
