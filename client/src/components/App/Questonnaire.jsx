import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Questionnaire/Result";
import { GEN_RESPONSE } from "../.././utils/mutation";

const QuestionApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [combinedInput, setCombinedInput] = useState("");

  const [generateResponse, { loading, error, data }] = useMutation(GEN_RESPONSE);

  useEffect(() => {
    if (data) {
      console.log("data = ", data);
    }
  }, [data]);

  const handleUserInputSubmit = (userInput) => {
    // collect, format, and store the user input
    setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleResultSubmit = async (userInput) => {
    handleUserInputSubmit(userInput);
    console.log("user Input = ", userInput);
    console.log("Combined Input = ", combinedInput);
    try {
      const { data } = await generateResponse({
        variables: {
          prompt: combinedInput,
        },
      });
      console.log(data);
      // TODO: update the result page with the response
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegenerate = async () => {
    console.log("regenerate");
  };

  return (
    <div className="App">
      {currentStep === 1 && <Adjective onSubmit={handleUserInputSubmit} />}
      {currentStep === 2 && <Experience onSubmit={handleUserInputSubmit} />}
      {currentStep === 3 && <Listing onSubmit={handleResultSubmit} />}
      {currentStep === 4 && (
        <Result combinedInput={combinedInput} data={data} onRegenerate={handleRegenerate} />
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default QuestionApp;
