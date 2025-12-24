import { useState, useRef, useEffect } from 'react';

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    { src: '/songs/be_my_baby.mp3', title: 'Be My Baby - The Ronettes' },
    { src: '/songs/cant_take_my_eyes.mp3', title: "Can't Take My Eyes Off You - Frankie Valli" },
    { src: '/songs/autotuned_love.mp3', title: 'AUTOTUNED LOVE - Raghav for Bharat' },
    { src: '/songs/rakhlo_tum.mp3', title: 'Rakhlo Tum Chupaake - Arpit Bala and Adil' },
    { src: '/songs/high_on_you.mp3', title: 'High On You - Jind Universe' },
    { src: '/songs/velocity.mp3', title: 'Velocity - Nanku' },
    { src: '/songs/dms.mp3', title: 'DMs - Nanku' },
    { src: '/songs/cant_help_falling.mp3', title: "Can't Help Falling In Love - Elvis Presley" },
  ];

  // Shuffle songs on mount
  const [shuffledSongs, setShuffledSongs] = useState([]);

  useEffect(() => {
    const shuffled = [...songs].sort(() => Math.random() - 0.5);
    setShuffledSongs(shuffled);
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Playback failed:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    // Move to next song in shuffled list
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledSongs.length);
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(err => console.log('Playback failed:', err));
    }
  }, [currentIndex]);

  if (shuffledSongs.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-lg border border-red-100">
        <button
          onClick={handlePlayPause}
          className="text-red-500 font-medium text-sm hover:text-red-600 transition-colors"
        >
          {isPlaying ? '⏸ Pause' : '▶ Radio'}
        </button>
        {shuffledSongs.length > 0 && (
          <audio
            ref={audioRef}
            src={shuffledSongs[currentIndex]?.src}
            onEnded={handleEnded}
          />
        )}
      </div>
    </div>
  );
}

export default RadioPlayer;
