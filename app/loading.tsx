export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Spinning Circle */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#FE6500] rounded-full border-t-transparent animate-spin"></div>
          
          {/* Inner Pulse */}
          <div className="absolute inset-4 bg-[#FE6500]/20 rounded-full animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we prepare your content</p>
      </div>
    </div>
  );
}
