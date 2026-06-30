import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { bestSellers } from "@/constants";
import Button from "@/components/ui/Button";

export default function BestSellers() {
  return (
    <div className="relative bg-[#FACC15] pb-16 mt-16">
      <Container className="relative z-10">
        <div className="flex flex-col justify-center items-center py-20 text-center">
          <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-3xl text-sm bg-white text-yellow-800 shadow-md">
            <Star />
            <p>فروشندگان برتر</p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">
            بهترین عرضه‌کنندگان زعفران
          </h2>
          <p className="text-white/90 mt-3 text-sm md:text-base max-w-md text-center">
            معرفی معتبرترین برندها و فروشندگان زعفران اصیل ایرانی با کیفیت ممتاز
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="prev-btn w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:bg-gray-100 shadow-md"
            >
              <ChevronRight size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="next-btn w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:bg-gray-100 shadow-md"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            loop
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mt-10 w-full px-4"
          >
            {bestSellers.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <Link to="">
                    <div className="w-full h-44 sm:h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center text-center">
                      <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            color={i < item.stars ? "#FACC15" : "#E5E7EB"}
                          />
                        ))}
                      </div>

                      <hr className="text-gray-300 my-2" />

                      <ul className="text-gray-700 font-medium text-sm space-y-1 mt-2">
                        {item.tags.map((tag, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-center gap-1"
                          >
                            <Check size={14} className="text-green-600" />
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-primary text-white rounded-2xl mt-5 hover:bg-purple-900">
                        مشاهده فروشگاه
                      </Button>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
