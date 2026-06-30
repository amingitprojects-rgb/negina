import { useState } from "react";
import { Trash2, Plus, Minus, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

interface CartItem {
  id: number;
  title: string;
  weight: string;
  location: string;
  price: number;
  oldPrice: number;
  discount: number;
  quantity: number;
  image: string;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    title: "زعفران ممتاز",
    weight: "25 گرم",
    location: "تهران",
    price: 15000000,
    oldPrice: 17000000,
    discount: 15,
    quantity: 1,
    image: "/images/placeholder-product.svg",
  },
];

function formatPrice(value: number) {
  return value.toLocaleString("en-US");
}

function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const itemsPrice = items.reduce((sum, i) => sum + i.oldPrice * i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = itemsPrice - totalPrice;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Container className="py-8 md:py-12">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-right">
          سبد خرید
        </h1>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <p className="text-base font-bold text-gray-800">
                سبد خرید شما
                <span className="text-gray-500 font-normal">
                  {items.length} عدد کالا
                </span>
              </p>
              <button
                onClick={clearCart}
                disabled={items.length === 0}
                className="flex items-center gap-1 text-red-500 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:text-red-600"
              >
                <Trash2 size={16} />
                حذف کل سبد خرید
              </button>
            </div>
            {items.length === 0 ? (
              <p className="text-center text-gray-400 py-16">
                سبد خرید شما خالی است
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border border-gray-100 rounded-xl p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-xl object-cover bg-gray-100 shrink-0"
                    />
                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        عمده | {item.weight}
                      </p>
                      <div className="flex items-center gap-1 text-gray-500 mt-1">
                        <MapPin size={14} />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          {item.discount}%
                        </span>
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price)} تومان
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 line-through decoration-2 decoration-red-500">
                        {formatPrice(item.oldPrice)}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 text-red-500 border-red-200 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-6 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4 text-right">
              صورت‌حساب
            </h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold">
                  {formatPrice(itemsPrice)} تومان
                </span>
                <span className="text-gray-500">قیمت کالا(ها)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-semibold">
                  {formatPrice(discount)} تومان
                </span>
                <span className="text-gray-500">سود شما از خرید</span>
              </div>
              <hr className="border-gray-100" />
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-base">
                  {formatPrice(totalPrice)} تومان
                </span>
                <span className="text-gray-700 font-semibold">قیمت کل</span>
              </div>
            </div>
            <Button
              disabled={items.length === 0}
              className="w-full bg-primary hover:bg-primary/90 mt-6 disabled:opacity-40"
            >
              ثبت نهایی
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <p className="text-sm font-bold text-gray-800">
                سبد خرید شما
                <span className="text-gray-500 font-normal">
                  {items.length} عدد کالا
                </span>
              </p>
              <button
                onClick={clearCart}
                disabled={items.length === 0}
                className="flex items-center gap-1 text-red-500 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Trash2 size={14} />
                حذف کل سبد خرید
              </button>
            </div>
            {items.length === 0 ? (
              <p className="text-center text-gray-400 py-16">
                سبد خرید شما خالی است
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl p-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-xl object-cover bg-gray-100 shrink-0"
                      />
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-gray-900 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          عمده | {item.weight}
                        </p>
                        <div className="flex items-center justify-end gap-1 text-gray-500 mt-1">
                          <span className="text-xs">{item.location}</span>
                          <MapPin size={12} />
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-2">
                          <span className="text-xs text-gray-400 line-through decoration-red-500">
                            {formatPrice(item.oldPrice)}
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="bg-yellow-400 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                            {item.discount}%
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            {formatPrice(item.price)} تومان
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 text-red-500 border-red-200 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-6 text-center font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h2 className="font-bold text-gray-900 mb-4 text-right">
              صورت‌حساب
            </h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold">
                  {formatPrice(itemsPrice)} تومان
                </span>
                <span className="text-gray-500">قیمت کالا(ها)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-semibold">
                  {formatPrice(discount)} تومان
                </span>
                <span className="text-gray-500">سود شما از خرید</span>
              </div>
              <hr className="border-gray-100" />
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-base">
                  {formatPrice(totalPrice)} تومان
                </span>
                <span className="text-gray-700 font-semibold">قیمت کل</span>
              </div>
            </div>
            <Button
              disabled={items.length === 0}
              className="w-full bg-primary hover:bg-primary/90 mt-6 disabled:opacity-40"
            >
              ثبت سفارش
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
