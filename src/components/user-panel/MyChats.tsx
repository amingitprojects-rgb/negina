import { useState } from "react";

type TabType = "unread" | "myAds" | "others";

const chats = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: "محمدفواد برزویی",
  message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
  time: "۲۱:۰۴",
  unread: i === 0 ? 3 : 0,
  avatar: "https://picsum.photos/200/200",
}));

export default function MyChats() {
  const [activeTab, setActiveTab] = useState<TabType>("unread");

  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="bg-yellow-300 text-gray-800 px-4 py-1 rounded-lg text-sm font-bold">
          چت‌های من
        </h2>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        <TabButton
          active={activeTab === "unread"}
          onClick={() => setActiveTab("unread")}
        >
          خوانده نشده
        </TabButton>

        <TabButton
          active={activeTab === "myAds"}
          onClick={() => setActiveTab("myAds")}
        >
          آگهی‌های من
        </TabButton>

        <TabButton
          active={activeTab === "others"}
          onClick={() => setActiveTab("others")}
        >
          آگهی‌های دیگران
        </TabButton>
      </div>

      <div className="space-y-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-4 bg-[#f3eacf] rounded-xl p-4 hover:bg-[#FFF3D0] transition cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-sm text-gray-800">{chat.name}</p>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-1">
                {chat.message}
              </p>
            </div>

            <div className="w-6 flex justify-center">
              {chat.unread > 0 && (
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-lg text-sm border transition
      ${
        active
          ? "bg-purple-600 text-white border-purple-600"
          : "bg-white text-gray-600 border-gray-300 hover:border-purple-400"
      }`}
    >
      {children}
    </button>
  );
}
