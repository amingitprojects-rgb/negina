import { useState, useRef } from "react";
import {
  MapPin,
  Star,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Gem,
  Undo2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Container from "@/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const productImages = [
  "/images/Rectangle-208.png",
  "/images/Rectangle-200.png",
  "/images/Rectangle-201.png",
  "/images/Rectangle-202.png",
];

interface RelatedProduct {
  id: number;
  title: string;
  weight: string;
  location: string;
  price: number;
  oldPrice: number;
  discount: number;
}

const relatedProducts: RelatedProduct[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "زعفران ممتاز",
  weight: "25 گرم",
  location: "تهران",
  price: 15000000,
  oldPrice: 17000000,
  discount: 15,
}));

const specs = [
  { label: "نوع زعفران", value: "نگین" },
  { label: "کیفیت", value: "صادراتی" },
  { label: "سال برداشت", value: "۱۴۰۱" },
  { label: "وزن", value: "۱۰۰ گرم" },
  { label: "نوع بسته‌بندی", value: "خانم" },
  { label: "فروش بصورت", value: "خرده" },
];

const badges = [
  {
    icon: RefreshCw,
    title: "پشتیبانی ۲۴ ساعته",
    desc: "پشتیبانی و راهنمایی در خرید عمده",
  },
  { icon: Gem, title: "تضمین کیفیت", desc: "بهترین کیفیت زعفران برای شما" },
  {
    icon: Undo2,
    title: "ضمانت بازگشت وجه",
    desc: "در صورت نارضایتی، وجه برمی‌گردد",
  },
];

function formatPrice(value: number) {
  return value.toLocaleString("fa-IR");
}

function RelatedProductCard({ product }: { product: RelatedProduct }) {
  return (
    <div
      dir="rtl"
      className="
        group bg-white rounded-2xl border border-gray-100
        p-3 sm:p-4
        shadow-sm
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30
      "
    >
      <div
        className="
          relative
          bg-linear-to-br from-gray-50 to-gray-100
          rounded-xl
          aspect-square
          flex items-center justify-center
          overflow-hidden
        "
      >
        <svg
          className="w-10 h-10 sm:w-14 sm:h-14 text-gray-300 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 100 100"
        >
          <rect x="15" y="20" width="65" height="55" rx="12" strokeWidth="4" />
          <circle cx="35" cy="38" r="8" strokeWidth="4" />
          <path d="M22 70 L42 48 L55 62 L78 45" strokeWidth="4" />
        </svg>
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-[9px] sm:text-[11px] px-2 py-0.5 rounded-full font-bold shadow-sm">
          {product.discount}%
        </span>
      </div>

      <div className="mt-3 text-right">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-5 truncate">
          {product.title}
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
          عمده | {product.weight}
        </p>
        <div className="flex items-center justify-end gap-1 text-gray-400 mt-1">
          <span className="text-[10px] sm:text-xs">{product.location}</span>
          <MapPin size={11} />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <Button
          size="sm"
          className="
            bg-linear-to-r from-primary to-purple-600
            text-[10px] sm:text-xs
            px-2.5 sm:px-3.5
            h-auto py-1.5
            rounded-lg
            whitespace-nowrap
            shadow-sm
            active:scale-95
          "
        >
          افزودن +
        </Button>

        <div className="text-right">
          <p className="text-xs sm:text-base font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          <p className="text-[9px] sm:text-[11px] text-gray-400 line-through decoration-red-500 decoration-2">
            {formatPrice(product.oldPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceBlock() {
  return (
    <div className="border-t border-gray-100 pt-3">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          15%
        </span>
        <span className="text-sm text-gray-400 line-through decoration-red-500 decoration-2">
          ۱۷,۰۰۰,۰۰۰
        </span>
      </div>
      <div className="flex items-center gap-1.5 justify-end mb-3">
        <span className="text-lg sm:text-xl font-bold text-gray-900">
          ۱۵,۰۰۰,۰۰۰
        </span>
        <span className="text-sm text-gray-500">تومان</span>
      </div>
      <Button className="w-full bg-primary text-white rounded-2xl h-12 text-base font-bold hover:bg-primary/90">
        افزودن به سبد خرید
      </Button>
    </div>
  );
}

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div dir="rtl" className="bg-background min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4">
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="rounded-2xl overflow-hidden bg-gray-100 w-full aspect-square flex items-center justify-center mb-3">
              <img
                src={productImages[activeImage]}
                alt="زعفران ممتاز"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`rounded-xl overflow-hidden border-2 aspect-square transition-all ${
                    activeImage === i ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                زعفران ممتاز
              </h1>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Share2 size={16} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Heart size={16} className="text-gray-600" />
                </button>
              </div>
            </div>

            <Link to="#" className="flex items-center gap-2 text-sm">
              <span className="font-medium text-gray-800">فروشگاه احمدی</span>
              <div className="flex items-center gap-0.5">
                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-500">(۴.۲)</span>
              </div>
            </Link>

            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <MapPin size={13} />
              <span>تهران</span>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2">ویژگی‌ها</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-0.5 border border-gray-200 rounded-xl py-2 px-2 bg-white"
                  >
                    <span className="text-[10px] text-gray-400">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-2 mt-1">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <b.icon size={16} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">
                      {b.title}
                    </p>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:hidden bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mt-1">
              <PriceBlock />
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-[22%] shrink-0">
            <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col gap-3 h-fit sticky top-24">
              <div className="flex items-center justify-end gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Share2 size={15} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Heart size={15} className="text-gray-600" />
                </button>
              </div>

              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 bg-gray-50 border border-gray-100 rounded-2xl px-3 py-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                    <b.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800 leading-5">
                      {b.title}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-4 mt-0.5">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}

              <PriceBlock />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-right">
              محصولات دیگر فروشگاه احمدی
            </h2>
            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                type="button"
                disabled={isBeginning}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 transition hover:bg-gray-50 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="قبلی"
              >
                <ChevronRight size={18} />
              </button>
              <button
                ref={nextRef}
                type="button"
                disabled={isEnd}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 transition hover:bg-gray-50 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="بعدی"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>

          <Swiper
            onBeforeInit={(swiper) => {
              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 14 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
              1280: { slidesPerView: 5, spaceBetween: 16 },
            }}
            dir="rtl"
            className="pb-2!"
          >
            {relatedProducts.map((p) => (
              <SwiperSlide key={p.id}>
                <RelatedProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
