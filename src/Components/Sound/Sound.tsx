import { AudioClip } from "../../Types";

interface SoundProps {
  audioClip: AudioClip;
}
const Sound = ({ audioClip }: SoundProps) => {
  const playSound = (clip: AudioClip) => {
    const audioElement = document.getElementById(
      clip.keyTrigger
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play().catch((e) => console.error(e));
      const displayElement = document.getElementById("display");
      if (displayElement) {
        displayElement.innerText = clip.description; 
    }
  }
    
  };

  return (
    <div>
      <button
        className="btn drum-pad justify-center hover:bg-slate-400 hover:text-white w-30 h-30 bg-sky-400 text-black"
        id={`drum-${audioClip.keyTrigger}`}
        onClick={() => playSound(audioClip)}
      >
        <audio
          src={audioClip.url}
          id={audioClip.keyTrigger}
          className="clip"
        ></audio>
        {audioClip.keyTrigger}
      </button>
    </div>
  );
};

export default Sound;
