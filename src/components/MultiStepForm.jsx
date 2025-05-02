import { useState } from "react";
import { multiStepFormData } from "../data/multiStepFormData";

const MultiStepForm = () => {
  const [form] = useState(multiStepFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleStepChange = (index) => {
    setCurrentStep(index);
  };

  const isValidStep = () => {
    for (const field of form[currentStep].fields) {
      if (formData[field.name].trim() === "") return false;
    }
    return true;
  };

  const next = () => {
    if (currentStep < form.length - 1)
      setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    if (
      currentStep !== 0 &&
      currentStep <= form.length - 1
    ) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full px-4">
        <div className="flex items-center justify-between">
          {form.map(({ step, title }, index) => (
            <div
              className="flex flex-col gap-3 items-center"
              key={step}
            >
              <button
                className={`border border-gray-300 rounded-full h-8 w-8 ${
                  currentStep === index
                    ? "bg-blue-500 text-white"
                    : currentStep > index
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handleStepChange(index)}
              >
                {step}
              </button>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-100 rounded-2xl mt-5 relative">
          <div
            className="absolute bg-amber-600 z-10 h-2 rounded-2xl transition-all duration-500"
            style={{
              width: `${
                (currentStep / (form.length - 1)) * 100
              }%`,
            }}
          ></div>
        </div>
        <form
          className="flex flex-col gap-4 mt-5"
          onSubmit={handleSubmit}
        >
          {form[currentStep].fields.map(
            ({
              name,
              label,
              type,
              placeholder,
              validation,
            }) => (
              <div
                className="flex flex-col gap-2"
                key={name}
              >
                <label>{label}</label>
                <input
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  className="border border-gray-300 rounded-md p-2"
                  value={formData[name]}
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
            )
          )}
          <div className="flex justify-between items-center">
            <button
              className="border border-gray-300 rounded-md p-2 cursor-pointer bg-black text-white disabled:opacity-60 disabled:cursor-not-allowed"
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
            >
              Prev
            </button>
            <button
              className="border border-gray-300 rounded-md p-2 cursor-pointer bg-black text-white disabled:opacity-60 disabled:cursor-not-allowed"
              type={
                currentStep === form.length - 1 &&
                isValidStep()
                  ? "submit"
                  : "button"
              }
              onClick={next}
              disabled={!isValidStep()}
            >
              {currentStep === form.length - 1 &&
              isValidStep()
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
