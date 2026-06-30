import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowUpDown } from "lucide-react";
import Button from "../ui/Button";

export default function SortDropdown() {
  const [selectedSort, setSelectedSort] = useState("کمترین قیمت");

  const sortOptions = [
    { value: "کمترین قیمت", label: "کمترین قیمت" },
    { value: "بیشترین قیمت", label: "بیشترین قیمت" },
    { value: "پرفروش‌ترین", label: "پرفروش‌ترین" },
    { value: "جدیدترین", label: "جدیدترین" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-xl"
        >
          مرتب‌سازی: {selectedSort}
          <ArrowUpDown className="h-4 w-4 text-gray-500" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-64 p-4 rounded-2xl shadow-2xl">
        <RadioGroup
          value={selectedSort}
          onValueChange={setSelectedSort}
          className="space-y-3"
        >
          {sortOptions.map((option) => (
            <div key={option.value} className="flex items-center gap-3">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="cursor-pointer text-sm">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
