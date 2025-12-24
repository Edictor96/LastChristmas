import { useLocation, Link } from 'react-router-dom';

function Confession() {
  const location = useLocation();
  const fromPuzzle = location.state?.fromPuzzle;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-orange-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-8">
        {fromPuzzle && (
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-8">
            <video
              autoPlay
              controls
              className="w-full rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            >
              <source src="/videos/VID_20251224161733.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hidden items-center justify-center h-64 bg-gray-100 rounded-2xl">
              <p className="text-gray-500">Video will be available soon</p>
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            It's You.
          </h1>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-xl md:text-2xl leading-relaxed">
              You are my answer, every time.
            </p>
            
            <p className="text-lg leading-relaxed max-w-lg mx-auto pt-4">
              In every moment, in every thought, it's always been you.
              This is my heart speaking, unfiltered and true.
            </p>
          </div>

          <div className="pt-6">
            <div className="inline-block">
              <svg
                className="w-16 h-16 text-red-400 mx-auto animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center pt-6">
          <Link
            to="/"
            className="inline-block text-red-500 hover:text-red-600 font-medium underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confession;
