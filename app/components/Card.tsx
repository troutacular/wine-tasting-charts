export default function Card({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card bg-base-100 p-4 shadow section">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
}