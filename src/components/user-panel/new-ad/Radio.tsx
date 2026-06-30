interface RadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function Radio({ label, checked, onChange }: RadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
        transition-colors
        ${checked ? "border-purple-600" : "border-gray-400"}`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-purple-600" />}
      </span>

      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
