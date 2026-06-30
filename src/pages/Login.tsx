import AuthLayout from "@/components/AuthPage";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopPill: React.FC<{ text: string; linkText?: string; link?: string }> = ({
  text,
}) => {
  return (
    <div className="mb-6 flex justify-end">
      <div className="relative inline-flex items-center bg-yellow-200 text-yellow-900 rounded-full px-6 py-3 shadow-md">
        <span className="text-sm">{text}</span>
        <Link to="/register" className="hover:underline">
          اینجا کلیک کنید
        </Link>
        <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-8 bg-violet-600 rounded-l-full shadow" />
      </div>
    </div>
  );
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ورود (شبیه‌سازی)");
  };

  return (
    <AuthLayout>
      <div className="bg-[#f2da67] rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <TopPill text="هنوز ثبت نام نکرده اید؟" />

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="text-right">
            <label htmlFor="user" className="block mb-2 text-sm text-gray-800">
              موبایل/نام کاربری/ایمیل
            </label>
            <input
              id="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
              placeholder="09xxxxxxxx"
            />
          </div>

          <div className="text-right">
            <label htmlFor="pass" className="block mb-2 text-sm text-gray-800">
              رمز عبور
            </label>
            <input
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
              placeholder="رمز عبور"
            />
          </div>

          <p className="text-xs text-gray-700">
            با ورود یا ثبت‌نام شما شرایط و قوانین استفاده از سرویس‌های سایت را
            می‌پذیرید.
          </p>

          <button
            type="submit"
            className="mt-2 w-full bg-linear-to-r from-violet-600 to-indigo-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-[0.995] transition"
          >
            ورود
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;

