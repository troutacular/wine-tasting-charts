export default function PrintWine({
  onPrint,
  onReset
}: {
  onPrint: () => void;
  onReset: () => void;
}) {
  return (
    <div className="print-hidden fixed bottom-4 right-4 z-50 flex flex-wrap justify-end gap-3 rounded-box bg-base-100/95 p-3 shadow-lg backdrop-blur">
      <button className="btn btn-primary" onClick={onPrint}>
        Print PDF
      </button>
      <button className="btn btn-error" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
