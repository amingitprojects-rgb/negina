import { Instagram, Twitter, Youtube } from "lucide-react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#FEF3C7] overflow-hidden pb-6">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-[#FEF3C7] rounded-[50%]" />
      <Container className="relative z-10">
        <div className="flex justify-center mb-8">
          <Logo imgClassName="w-40 h-40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="rtl">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-gray-800 mb-3">زرپران</h3>
            <p className="text-gray-600 text-sm leading-7 max-w-sm text-center md:text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex gap-3 mt-4">
              <Link to="#">
                <Youtube className="text-gray-600 hover:text-red-600 transition w-5 h-5" />
              </Link>
              <Link to="#">
                <Twitter className="text-gray-600 hover:text-blue-500 transition w-5 h-5" />
              </Link>
              <Link to="#">
                <Instagram className="text-gray-600 hover:text-pink-500 transition w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              لینک‌های مهم
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm text-center md:text-right">
              <li>
                <Link to="#" className="hover:text-gray-900">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold text-gray-800 mb-3">مجوزهای ما</h3>
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm" />
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm" />
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm" />
            </div>
          </div>
        </div>

        <div
          className="mt-10 border-t border-yellow-300 pt-5 text-sm text-gray-600 text-center md:text-right"
          dir="rtl"
        >
          <p>© {new Date().getFullYear()} زرپران - تمامی حقوق محفوظ است.</p>
        </div>
      </Container>
    </footer>
  );
}
