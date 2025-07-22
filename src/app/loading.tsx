export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-16 h-16 border-8 border-white border-rounded border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
