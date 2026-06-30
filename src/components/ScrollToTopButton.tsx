import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-br from-purple-500 to-purple-700
        text-white shadow-xl
        transform transition-all duration-300
        ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        hover:scale-110 hover:shadow-2xl
        focus:outline-none focus:ring-4 focus:ring-purple-300
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="animate-bounce-slow" />
    </Button>
  );
}
