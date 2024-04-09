import React from "react";

const Reminder = ({ people }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-2">
        {people.map((person) => {
          return (
            <>
              <div key={person.id}>
                <img
                  src={person.image}
                  className="h-20 w-20 rounded-full ml-8"
                />
              </div>
              <div>
                <p className="font-bold -ml-6 text-xl">{person.name}</p>
                <p className="font-normal -ml-6">{person.age} years</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Reminder;
