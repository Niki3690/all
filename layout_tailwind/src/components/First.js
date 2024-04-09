import React from "react";
const First = () => {
  return (
    <div>
      <p className="text-3xl text-center font-semibold text-green-600">
        First Layout
      </p>
      <img src="first.PNG" />

      <div>
        <div className="mt-6 p-3 ml-3 mr-3 bg-[#DBDBDB]">
          <p className="text-6xl text-center">Title</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 ml-3 mr-3">
        <div>
          <p className="border border-black">
            <img
              className="p-2 h-[449px] w-[150vh] object-fill"
              src="https://a-z-animals.com/media/2023/01/10-Incredible-Bulldog-Facts-Cover-image.jpg"
            />
          </p>
        </div>

        <div>
          <p className="text-xl leading-9 bg-[#E2E8F0] h-full p-3">
            The dog evolved from the gray wolf into more than 400 distinct
            breeds. Human beings have played a major role in creating dogs that
            fulfill distinct societal needs. Through the most rudimentary form
            of genetic engineering, dogs were bred to accentuate instincts that
            were evident from their earliest encounters with humans. Although
            details about the evolution of dogs are uncertain, the first dogs
            were hunters with keen senses of sight and smell. Humans developed
            these instincts and created new breeds as need or desire arose.
          </p>
        </div>
      </div>

      <div className="mt-6 p-3 ml-3 mr-3 bg-[#DBDBDB]">
        <p className="text-6xl text-center">Footer</p>
      </div>
      <br />
      <hr className="bg-[red] h-1.5" />
    </div>
  );
};

export default First;
