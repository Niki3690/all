import React from "react";
import SingleQuestion from "./Question";
import Data from "./Data";
import { useState } from "react";

const PlusMinusApp = () => {
  const [questions, setQuestions] = useState(Data);
  return (
    <div>
      <div className="columns is-centered">
        <div className="column is-8"></div>
      </div>
      <div className="box">
        <h4 className="is-size-4 text-center mt-14 font-semibold">
          Questions and answers about login
        </h4>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
      {/* <Question/> */}
    </div>
  );
};

export default PlusMinusApp;
