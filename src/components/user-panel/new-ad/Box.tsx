export default function Box({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-yellow-300 rounded-xl p-4 mb-6">
      <p className="text-sm font-semibold mb-4">{title}</p>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}