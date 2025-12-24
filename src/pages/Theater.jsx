import { Link } from 'react-router-dom';

function Theater() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-10 text-center">
          Our Theater
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <video
              controls
              className="w-full rounded-2xl"
            >
              <source src="/videos/VID20251122200919.mp4" type="video/mp4" />
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-2xl">
                <p className="text-gray-500">Video will be available soon</p>
              </div>
            </video>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <video
              controls
              className="w-full rounded-2xl"
            >
              <source src="/videos/VID_20251224161733.mp4" type="video/mp4" />
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-2xl">
                <p className="text-gray-500">Video will be available soon</p>
              </div>
            </video>
          </div>
        </div>

        <div className="mt-12 text-center">
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

export default Theater;
