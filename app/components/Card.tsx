export default function Card({
  title,
  classes,
  children
}: {
  title: string;
  classes: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`card bg-base-100 p-4 shadow section ${classes}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
}