import AuthLayout from "@/components/AuthPage";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopPillReg: React.FC<{
  text: string;
  linkText?: string;
  link?: string;
}> = ({ text }) => {
  return (
    <div className="mb-6 flex justify-end">
      <div className="relative inline-flex items-center bg-yellow-200 text-yellow-900 rounded-full px-6 py-3 shadow-md">
        <span className="text-sm">{text}</span>
        <Link to="/login" className="hover:underline">
          وارد شوید
        </Link>
        <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-8 bg-violet-600 rounded-l-full shadow" />
      </div>
    </div>
  );
};

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ثبت نام (شبیه‌سازی)");
  };

  return (
    <AuthLayout>
      <div className="bg-[#f2da67] rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <TopPillReg text="قبلاً ثبت نام کرده اید؟" />

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="text-right">
            <label className="block mb-2 text-sm text-gray-800">نام</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <div className="text-right">
            <label className="block mb-2 text-sm text-gray-800">موبایل</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <div className="text-right">
            <label className="block mb-2 text-sm text-gray-800">رمز عبور</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <div className="text-right">
            <label className="block mb-2 text-sm text-gray-800">
              تکرار رمز
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-[0.995] transition"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterForm;
