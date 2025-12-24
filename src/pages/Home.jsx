import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-red-50 to-orange-50">
      <div className="text-center space-y-8 px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-red-500 mb-4 tracking-tight">
          Last Christmas
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          A journey made just for you
        </p>
        
        <nav className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
          <Link
            to="/theater"
            className="px-8 py-3 bg-white/70 backdrop-blur-sm text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg min-w-[160px]"
          >
            Theater
          </Link>
          <Link
            to="/puzzle"
            className="px-8 py-3 bg-white/70 backdrop-blur-sm text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg min-w-[160px]"
          >
            Puzzle
          </Link>
          <Link
            to="/confession"
            className="px-8 py-3 bg-white/70 backdrop-blur-sm text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg min-w-[160px]"
          >
            Confession
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
