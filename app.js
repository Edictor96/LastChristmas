import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Jigsaw from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function RadioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [i, setI] = useState(0);
  const tracks = [
    {src:"/songs/be_my_baby.mp3", start:8, duration:44},
    {src:"/songs/cant_take_my_eyes.mp3", start:80, duration:45},
    {src:"/songs/autotuned_love.mp3", start:10, duration:40},
    {src:"/songs/rakhlo_tum.mp3", start:30, duration:76},
    {src:"/songs/high_on_you.mp3", start:104, duration:36},
    {src:"/songs/velocity.mp3", start:7, duration:43},
    {src:"/songs/dms.mp3", start:36, duration:42},
    {src:"/songs/cant_help_falling.mp3", start:82, duration:93}
  ];
  const next = () => setI((i+1)%tracks.length);

  return (
    <div className="fixed top-4 right-4 bg-white/60 backdrop-blur-lg px-4 py-2 rounded-2xl shadow-md">
      <button onClick={()=>setPlaying(!playing)} className="text-sm text-red-600 font-medium">
        {playing?"Pause":"Radio"}
      </button>
      {playing && (
        <audio autoPlay src={tracks[i].src} onEnded={next}
          onTimeUpdate={e=>{
            if(e.target.currentTime>=tracks[i].start+tracks[i].duration) next();
          }}
        />
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-red-50 text-gray-900">
      <h1 className="text-4xl font-semibold text-red-500 mb-6">Last Christmas</h1>
      <div className="flex gap-8 text-lg text-gray-700">
        <Link to="/theater" className="hover:text-red-500">Theater</Link>
        <Link to="/puzzle" className="hover:text-red-500">Puzzle</Link>
        <Link to="/confession" className="hover:text-red-500">Confession</Link>
      </div>
    </div>
  );
}

function PuzzlePage() {
  const [done,setDone] = useState(false);
  const nav = useNavigate();
  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-900">
      <h2 className="text-3xl font-semibold text-red-600 mb-6">Puzzle</h2>
      {!done && (
        <div className="w-full max-w-md">
          <Jigsaw
            imageSrc="/images/couple.png"
            rows={3}
            columns={3}
            onSolved={()=>setDone(true)}
          />
        </div>
      )}
      {done && (
        <div className="flex flex-col items-center gap-4 mt-6">
          <p className="text-xl font-medium text-red-700">Solved.</p>
          <button onClick={()=>nav("/confession",{state:{reveal:true}})} className="bg-red-500 text-white px-5 py-2 rounded-2xl shadow-lg text-lg font-medium">
            Continue
          </button>
        </div>
      )}
      <button onClick={()=>nav("/")} className="mt-10 text-sm text-red-600 underline">Back</button>
    </div>
  );
}

function Theater() {
  const nav = useNavigate();
  return (
    <div className="p-6 min-h-screen bg-red-50">
      <h2 className="text-3xl font-semibold text-red-600 mb-5">Video Theater</h2>
      <div className="grid gap-6 max-w-lg mx-auto">
        <video controls className="rounded-2xl shadow-md w-full"><source src="/videos/VID20251122200919.mp4"/></video>
        <video controls className="rounded-2xl shadow-md w-full"><source src="/videos/VID_20251224161733.mp4"/></video>
      </div>
      <button onClick={()=>nav("/")} className="mt-8 text-sm text-red-600 underline">Back</button>
    </div>
  );
}

function Confession() {
  const nav = useNavigate();
  const loc = useLocation();
  const reveal = loc.state?.reveal;
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-100 to-pink-100 text-gray-900 p-4">
      {reveal && (
        <video autoPlay controls className="rounded-2xl shadow-lg w-full max-w-md mb-6"><source src="/videos/VID_20251224161733.mp4"/></video>
      )}
      <h2 className="text-5xl font-semibold text-red-600 mb-4">It’s You.</h2>
      <p className="text-lg max-w-sm text-center text-gray-800">You are my answer, every time.</p>
      <button onClick={()=>nav("/")} className="mt-8 text-sm text-red-700 underline">Back</button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/theater" element={<Theater/>}/>
      <Route path="/puzzle" element={<PuzzlePage/>}/>
      <Route path="/confession" element={<Confession/>}/>
    </Routes>
  );
}
