import {
  FilePlus,
  HelpCircle,
  LogOut,
  Megaphone,
  MessageCircle,
  ScrollText,
  Settings,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";
import userImg from "../assets/images/bg-authpage.jpg";
import { NavLink, Outlet } from "react-router-dom";

export default function UserPanelLayout() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-2xl shadow-sm border p-4 md:p-6 h-fit">
          <div className="flex justify-between items-center gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={userImg} alt="profile" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">فروشگاه احمدی</p>
                <p className="text-gray-500 text-sm">09123456789</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Settings />
              <LogOut />
            </div>
          </div>

          <ul className="space-y-5 mt-8 text-gray-700">
            {[
              { to: "/user-panel", icon: <User />, label: "پنل کاربری" },
              {
                to: "/user-panel/my-ads",
                icon: <Megaphone />,
                label: "آگهی‌های من",
              },
              {
                to: "/user-panel/new-ad",
                icon: <FilePlus />,
                label: "ثبت آگهی",
              },
              {
                to: "/user-panel/wallet",
                icon: <Wallet />,
                label: "کیف پول من",
              },
              {
                to: "/user-panel/chats",
                icon: <MessageCircle />,
                label: "چت‌های من",
              },
              {
                to: "/user-panel/support",
                icon: <HelpCircle />,
                label: "پشتیبانی",
              },
              {
                to: "/user-panel/authentication",
                icon: <ShieldCheck />,
                label: "احراز هویت",
              },
              {
                to: "/user-panel/rules",
                icon: <ScrollText />,
                label: "قوانین",
              },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  end
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-bold transition ${
                      isActive ? "text-purple-600" : "text-gray-700"
                    }`
                  }
                >
                  <span>|</span>
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 w-full overflow-hidden mt-6 md:mt-0">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
