import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, User, ShoppingCart, ChevronLeft, MenuIcon } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";

const navLinks = [
  { title: "خانه", href: "/" },
  { title: "آگهی ها", href: "/ads" },
  { title: "محصولات", href: "/products" },
  { title: "بلاگ", href: "/blog" },
  { title: "استان ها", href: "/provinces" },
  { title: "پنل کاربری", href: "/user-panel" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="باز کردن منو"
      >
        <MenuIcon size={36} />
      </Button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <Logo />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="بستن منو">
            <X />
          </Button>
        </div>

        <div className="flex flex-col p-4 gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-gray-700 text-base hover:text-yellow-600 transition"
              >
                {item.title}
                <ChevronLeft size={16} />
              </Link>
            ))}
          </nav>

          <hr />

          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-600"
            >
              <User size={18} />
              ورود / ثبت نام
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-600"
            >
              <ShoppingCart size={18} />
              سبد خرید
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Menu;
