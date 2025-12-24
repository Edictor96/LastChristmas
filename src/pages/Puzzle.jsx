import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Puzzle() {
  const navigate = useNavigate();
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(8);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Initialize puzzle
  useEffect(() => {
    const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // Shuffle tiles
    const shuffled = shuffle([...initialTiles]);
    setTiles(shuffled);
    setEmptyIndex(shuffled.indexOf(8));
  }, []);

  // Shuffle function that ensures solvability
  const shuffle = (array) => {
    let shuffled = [...array];
    for (let i = 0; i < 100; i++) {
      const emptyIdx = shuffled.indexOf(8);
      const validMoves = getValidMoves(emptyIdx);
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      [shuffled[emptyIdx], shuffled[randomMove]] = [shuffled[randomMove], shuffled[emptyIdx]];
    }
    return shuffled;
  };

  const getValidMoves = (emptyIdx) => {
    const moves = [];
    const row = Math.floor(emptyIdx / 3);
    const col = emptyIdx % 3;

    if (row > 0) moves.push(emptyIdx - 3); // Can move from above
    if (row < 2) moves.push(emptyIdx + 3); // Can move from below
    if (col > 0) moves.push(emptyIdx - 1); // Can move from left
    if (col < 2) moves.push(emptyIdx + 1); // Can move from right

    return moves;
  };

  const handleTileClick = (index) => {
    if (isSolved) return;

    const validMoves = getValidMoves(emptyIndex);
    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
      setEmptyIndex(index);
      setMoves(moves + 1);

      // Check if solved
      const solved = newTiles.every((tile, idx) => tile === idx);
      if (solved) {
        setIsSolved(true);
        setTimeout(() => setShowVideo(true), 500);
      }
    }
  };

  const handleVideoEnd = () => {
    setShowMessage(true);
  };

  const progress = moves > 0 ? Math.min((moves / 20) * 100, 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
          Puzzle Time
        </h2>

        {!isSolved && (
          <>
            <div className="mb-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-full h-4 overflow-hidden shadow-md">
                <div
                  className="bg-gradient-to-r from-red-400 to-red-500 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-center text-gray-600 mt-2 text-sm">
                Moves: {moves}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-xl">
              <div className="grid grid-cols-3 gap-1 w-full aspect-square max-w-md mx-auto">
                {tiles.map((tile, index) => (
                  <div
                    key={index}
                    onClick={() => handleTileClick(index)}
                    className={`
                      relative overflow-hidden rounded-lg cursor-pointer transition-all duration-200
                      ${tile === 8 ? 'bg-transparent' : 'bg-white shadow-md hover:shadow-lg hover:scale-105'}
                      ${getValidMoves(emptyIndex).includes(index) && tile !== 8 ? 'ring-2 ring-red-300' : ''}
                    `}
                    style={{
                      backgroundImage: tile !== 8 ? `url('/images/couple.png')` : 'none',
                      backgroundSize: '300%',
                      backgroundPosition: `${(tile % 3) * 50}% ${Math.floor(tile / 3) * 50}%`,
                    }}
                  >
                    {tile === 8 && <div className="w-full h-full" />}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {isSolved && !showVideo && (
          <div className="text-center py-12">
            <div className="animate-pulse">
              <p className="text-3xl font-bold text-red-500">🎉 Solved! 🎉</p>
            </div>
          </div>
        )}

        {showVideo && !showMessage && (
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <video
              autoPlay
              controls
              onEnded={handleVideoEnd}
              className="w-full rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                setShowMessage(true);
              }}
            >
              <source src="/videos/VID_20251224161733.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {showMessage && (
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center space-y-6">
            <p className="text-3xl md:text-4xl font-bold text-red-500">
              KISMAT badal de
            </p>
            <p className="text-2xl md:text-3xl text-gray-700">
              Yaar tu mujhe genuinely bohot pasand hai
            </p>
            <button
              onClick={() => navigate('/confession', { state: { fromPuzzle: true } })}
              className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        )}

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

export default Puzzle;
