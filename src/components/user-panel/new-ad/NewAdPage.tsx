import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { initialFormData, type NewAdFormData } from "./types";

export default function NewAdPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<NewAdFormData>(initialFormData);

  return (
    <>
      {step === 1 && (
        <StepOne
          data={formData}
          setData={setFormData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          data={formData}
          setData={setFormData}
          onNext={() => setStep(3)}
          onPrev={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <StepThree
          onPrev={() => setStep(2)}
          onSubmit={() => console.log(formData)}
        />
      )}
    </>
  );
}
