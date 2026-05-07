export default function PrintWine({
  onPrint,
  onReset
}: {
  onPrint: () => void;
  onReset: () => void;
}) {
  return (
    <div className="print-hidden flex gap-4">
      <button className="btn btn-primary" onClick={onPrint}>
        Print PDF
      </button>
      <button className="btn btn-error" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
