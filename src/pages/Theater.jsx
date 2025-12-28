import { Link } from 'react-router-dom';

function Theater() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-10 text-center">
          Our Theater
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/images/image1.jpg"
              alt="Memory 1"
              className="w-full rounded-2xl object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center justify-center h-64 bg-gray-100 rounded-2xl">
              <p className="text-gray-500">Image will be available soon</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/images/image2.jpg"
              alt="Memory 2"
              className="w-full rounded-2xl object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center justify-center h-64 bg-gray-100 rounded-2xl">
              <p className="text-gray-500">Image will be available soon</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/images/image3.jpg"
              alt="Memory 3"
              className="w-full rounded-2xl object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center justify-center h-64 bg-gray-100 rounded-2xl">
              <p className="text-gray-500">Image will be available soon</p>
            </div>
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
