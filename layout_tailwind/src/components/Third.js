import React from "react";

const Third = () => {
  return (
    <div>
      <p className="text-3xl text-center font-semibold text-green-600">
        Third Layout
      </p>
      <img src="third.PNG" />

      <div>
        <div className="mt-6 p-3 ml-3 mr-3 bg-[#DBDBDB]">
          <p className="text-6xl text-center">Title</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-3">
        <div class="col-span-2 p-2 border border-black">
          <img
            className="p-2 h-[435px] w-[100vh] object-fill"
            src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
          />
        </div>

        <div>
          <p className="border border-black">
            <img
              className="p-2 h-[449px] w-[100vh] object-fill"
              src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
            />
          </p>
        </div>
      </div>

      <div className="mt-1 p-3 ml-3 mr-3 bg-[#DBDBDB]">
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

export default Third;
