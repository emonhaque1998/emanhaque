export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="text-white text-xl font-semibold">Loading...</div>
    </div>
  );
}
