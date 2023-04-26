import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Questionnaire/Result";
import Loading from "./Questionnaire/Loading";
import { GEN_RESPONSE } from "../.././utils/mutation";

const QuestionApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [combinedInput, setCombinedInput] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [generateResponse, { loading, error, data }] =
    useMutation(GEN_RESPONSE);

  useEffect(() => {
    if (data) {
      console.log("data: ", data);
      setGeneratedResponse(data.generateResponse);
    }
  }, [data]);

  const handleUserInputSubmit = (userInput) => {
    // collect, format, and store the user input
    setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleResultSubmit = async (userInput) => {
    const updatedInput = `${combinedInput} ${userInput}`;
    handleUserInputSubmit(userInput);
    console.log("Combined Input = ", updatedInput);
    try {
      await generateResponse({
        variables: {
          prompt: updatedInput,
          model: "text-davinci-003",
          max_tokens: 1100,
        },
      });
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
      {currentStep === 4 && (<Result generatedResponse={generatedResponse} onRegenerate={handleRegenerate} />)}
      {loading && <Loading/>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default QuestionApp;
