import { useState } from "react";

interface Props {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  label,
  defaultChecked = false,
  onChange,
}: Props) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <span className="text-sm">{label}</span>

      <button
        type="button"
        onClick={toggle}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 
        ${checked ? "bg-purple-600" : "bg-gray-300"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 bg-white rounded-full shadow-md 
          transition-all duration-300
          ${checked ? "right-0.5" : "right-[calc(100%-1.25rem)]"}`}
        />
      </button>
    </label>
  );
}
