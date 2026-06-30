import { useEffect, useState } from "react";
import slideDesktop01 from "../assets/images/slide01-desktop.webp";
import slideDesktop002 from "../assets/images/slide02-desktop.webp";
import slideDesktop003 from "../assets/images/slide03-desktop.webp";
import slideMobile01 from "../assets/images/slide01-mobile.webp";
import slideMobile02 from "../assets/images/slide02-mobile.webp";
import slideMobile03 from "../assets/images/slide03-mobile.webp";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "زعفران؛ طلای سرخ ایران",
    description: "بهترین کیفیت زعفران اصیل ایرانی با رنگ و عطر بی‌نظیر",
    imgDesktop: slideDesktop01,
    imgMobile: slideMobile01,
  },
  {
    id: 2,
    title: "خواص زعفران",
    description: "افزایش انرژی، بهبود روحیه و تقویت سلامت بدن",
    imgDesktop: slideDesktop002,
    imgMobile: slideMobile02,
  },
  {
    id: 3,
    title: "تجربه لذت‌بخش",
    description: "طعم و رنگ زعفران اصیل را در آشپزی و نوشیدنی‌ها تجربه کنید",
    imgDesktop: slideDesktop003,
    imgMobile: slideMobile03,
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[calc(100vh-80px)] overflow-hidden"
      dir="rtl"
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out flex-row-reverse"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full shrink-0 h-full relative">
            <img
              src={isMobile ? slide.imgMobile : slide.imgDesktop}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-l from-black/50 to-black/10" />
            <div className="absolute top-1/2 right-5 md:right-10 -translate-y-1/2 text-white z-10 max-w-lg px-4">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-snug">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl mb-6">{slide.description}</p>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <Button asChild className="bg-primary">
                  <Link to="/ads">خرید کنید</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="bg-white/20 backdrop-blur"
                >
                  <Link to="/ads">مشاهده محصولات</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full z-20 hover:bg-black/60 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={prevSlide}
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full z-20 hover:bg-black/60 transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-transform ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;
