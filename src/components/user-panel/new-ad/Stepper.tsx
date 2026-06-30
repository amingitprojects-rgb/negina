import { Check } from "lucide-react";

type Step = 1 | 2 | 3;

interface Props {
  currentStep: Step;
}

const steps = [
  { id: 1, label: "مشخصات محصول" },
  { id: 2, label: "اطلاعات تماس" },
  { id: 3, label: "بازبینی نهایی" },
];

export default function Stepper({ currentStep }: Props) {
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 mb-10 flex-wrap">
      {steps.map((step, index) => {
        const done = step.id < currentStep;
        const active = step.id === currentStep;

        return (
          <div key={step.id} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1 min-w-[72px]">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
                ${done || active ? "bg-purple-600" : "bg-gray-300"}`}
              >
                {done ? <Check size={14} /> : step.id}
              </div>

              <span
                className={`text-xs text-center leading-tight
                ${done || active ? "text-purple-600" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`hidden sm:block w-10 h-px
                ${step.id < currentStep ? "bg-purple-600" : "bg-gray-300"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
