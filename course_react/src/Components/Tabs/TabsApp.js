import React, { useEffect, useState } from "react";
let url = "https://course-api.com/react-tabs-project";

const TabsApp = () => {
  let [loading, setloading] = useState(true);
  let [jobs, setJobs] = useState([]);
  let [value, setValue] = useState(2);

  let fetchJobs = async () => {
    let response = await fetch(url);
    let newJobs = await response.json();
    setJobs(newJobs);
    setloading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <>
        <h4 className="is-size-4 text-center font-bold mt-2">Loading...</h4>
      </>
    );
  }
  let { company, dates, duties, title } = jobs[value];
  return (
    <div>
      <h3 className="is-size-3 text-center font-bold mt-6 mb-2">Experience</h3>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValue(index)}
            className="text-center ml-48 mt-4 font-bold bg-[#5ADEFF] w-18 pt-1 pb-1 pl-2 pr-2 rounded"
          >
            {item.company}
          </button>
        );
      })}
      <div className="columns is-centered mt-2">
        <div className="column is-6">
          <div
            className="box"
            style={{ backgroundColor: "#F0F5FC", border: "2px solid #5ADEFF" }}
          >
            <h5 className="is-size-5 ml-16 mt-12 font-bold">{title}</h5>
            <p className="text-xs ml-20 mt-2 font-bold bg-[#5ADEFF] w-16 pt-1 pb-1 pl-1 pr-1 text-center rounded">
              {company}
            </p>
            <p className="ml-16 mt-2 text-xs">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index}>
                  <div className="flex mt-6">
                    <div>
                      <i class="fas fa-angle-double-right ml-10  text-[#5ADEFF]"></i>
                    </div>
                    <div>
                      <p className="text-xs mt-1 ml-2">{duty}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsApp;
