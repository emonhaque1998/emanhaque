export default function HorizontalRowDotted({ padding }: { padding?: string }) {
  return (
    <div className={`${padding ? padding : "py-5"} w-full`}>
      <div className="border-t-gray-500 border-dotted border-t border"></div>
    </div>
  );
}
