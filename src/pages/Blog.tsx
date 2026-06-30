import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

interface BlogItem {
  id: number;
  title: string;
  author: string;
  image: string;
}

const blogPosts: BlogItem[] = [
  {
    id: 1,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 2,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 3,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 4,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
];

const products: BlogItem[] = [
  {
    id: 1,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 2,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 3,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
  {
    id: 4,
    title: "خاصیت‌های زعفران ایرانی چیست؟",
    author: "مستوفا زرگوش",
    image: "src/assets/images/Rectangle-208.png",
  },
];

function SliderSection({
  title,
  items,
  bg,
}: {
  title: string;
  items: BlogItem[];
  bg?: string;
}) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={`py-8 sm:py-10 ${bg ?? "bg-white"}`} dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-right text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-gray-700 transition hover:bg-gray-50 disabled:opacity-30"
              aria-label="قبلی"
            >
              <ChevronRight size={18} />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-gray-700 transition hover:bg-gray-50 disabled:opacity-30"
              aria-label="بعدی"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          dir="rtl"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== "boolean" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            480: { slidesPerView: 1.4, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-2!"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto"
                />

                <div className="p-3 sm:p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="/images/placeholder-product.svg"
                        alt={item.author}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-500">{item.author}</span>
                  </div>

                  <h3 className="text-right text-sm sm:text-base font-bold leading-6 text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <main dir="rtl" className="min-h-screen">
      <section className="w-full px-2 sm:px-4 lg:w-[90%] lg:px-0 mx-auto mt-4">
        <img
          src="/src/assets/images/Rectangle-200.png"
          alt="زرپران"
          loading="lazy"
          className="w-full h-auto rounded-2xl"
        />
      </section>

      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4">
            <div className="lg:col-span-2 lg:row-span-2">
              <img
                src="/src/assets/images/Rectangle-201.png"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
                loading="lazy"
                alt="طلای سرخ ایران"
              />
            </div>

            <div className="lg:col-span-2">
              <img
                src="src/assets/images/Rectangle-202.png"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
                loading="lazy"
                alt="از مزرعه تا طلای سرخ ایران"
              />
            </div>

            <div className="lg:col-span-2">
              <img
                src="src/assets/images/Rectangle-203.png"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
                loading="lazy"
                alt="زعفران"
              />
            </div>
          </div>
        </div>
      </section>

      <SliderSection title="پیشنهاد ما" items={products} bg="bg-[#EBC51A]/20" />

      <SliderSection title="پر بازدیدترین مقالات" items={blogPosts} />
    </main>
  );
}
