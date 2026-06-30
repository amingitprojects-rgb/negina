export const bestSellers = [
  {
    id: 1,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
  {
    id: 2,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
  {
    id: 3,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
  {
    id: 4,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
    {
    id: 5,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
    {
    id: 6,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
    {
    id: 7,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
    {
    id: 8,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
    {
    id: 9,
    title: "فروشگاه احمدی",
    tags: ["10 هزار فروش در ماه", "رضایت 97 درصدی مشتریان"],
    image:
      "/images/placeholder-store.svg",
    stars: 4,
  },
];

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  avatar: string;
  image: string;
}

const samplePost = (id: number): BlogPost => ({
  id,
  title: "خاصیت‌های زعفران ایرانی چیست؟",
  author: "محمدباقر بزرگی",
  avatar: "/images/placeholder-product.svg",
  image: "/src/assets/images/slide01-desktop.webp",
});

export const suggestedPosts: BlogPost[] = Array.from({ length: 6 }, (_, i) =>
  samplePost(i + 1)
);

export const mostViewedPosts: BlogPost[] = Array.from({ length: 6 }, (_, i) =>
  samplePost(i + 1)
);
