import { useState } from "react";

export default function PriceRange() {
  const [value, setValue] = useState(5000000);

  return (
    <div>
      <input
        type="range"
        min={0}
        max={10000000}
        step={100000}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-purple-600"
      />
      <div className="flex justify-between text-xs mt-1 text-gray-500">
        <span>0</span>
        <span>{value.toLocaleString()}</span>
      </div>
    </div>
  );
}
