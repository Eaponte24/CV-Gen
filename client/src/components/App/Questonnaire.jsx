import React, { useState, useEffect } from "react";
// import { useMutation } from "@apollo/client";
import Adjective from "./Questionnaire/Adjective";
import Experience from "./Questionnaire/Experience";
import Listing from "./Questionnaire/Listing";
import Result from "./Questionnaire/Result";
import Loading from "./Questionnaire/Loading";
// import { GEN_RESPONSE } from "../.././utils/mutation";

const QuestionApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [combinedInput, setCombinedInput] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  // const [generateResponse, { loading, error, data }] =
  //   useMutation(GEN_RESPONSE);
  // this is just here for testing purposes
  const placeholderResponse = "Dear [Employer],\n\nI am writing to apply for the position of [Job Title] at [Company]. I am confident that my skills and experience make me a strong candidate for the role. In my current position at [Current Company], I have gained valuable experience in [relevant skills].\n\nThank you for considering my application. I look forward to the opportunity to further discuss my qualifications with you.\n\nSincerely,\n[Your Name]";

  useEffect(() => {
    // if (data) {
    //   console.log("data: ", data);
    //   setGeneratedResponse(data.generateResponse);
    // }
    setGeneratedResponse(placeholderResponse);
  }, []);

  const handleUserInputSubmit = (userInput) => {
    // collect, format, and store the user input
    setCombinedInput((prevInput) => `${prevInput} ${userInput}`);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleResultSubmit = async (userInput) => {
    const updatedInput = `${combinedInput} ${userInput}`;
    handleUserInputSubmit(userInput);
    console.log("Combined Input = ", updatedInput);
    // try {
    //   await generateResponse({
    //     variables: {
    //       prompt: updatedInput,
    //       model: "text-davinci-003",
    //       max_tokens: 1100,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    setGeneratedResponse(placeholderResponse);
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
        <Result generatedResponse={generatedResponse} onRegenerate={handleRegenerate} />
      )}
      {/* {loading && <Loading />} */}
      {/* {error && <p>Error: {error.message}</p>} */}
    </div>
  );
};

export default QuestionApp;
