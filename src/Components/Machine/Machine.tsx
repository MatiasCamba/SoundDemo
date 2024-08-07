import Sound from "../Sound/Sound";
import { AudioClip } from "../../Types";

function Machine() {
  const audios: AudioClip[] = [
    {
      keyTrigger: "Q",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      description: "Heater 1",
    },
    {
      keyTrigger: "W",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
      description: "Heater 2",
    },
    {
      keyTrigger: "E",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
      description: "Heater 3",
    },
    {
      keyTrigger: "A",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
      description: "Heater 4",
    },
    {
      keyTrigger: "S",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
      description: "Clap",
    },
    {
      keyTrigger: "D",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
      description: "Open-HH",
    },
    {
      keyTrigger: "Z",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
      description: "Kick-n'-Hat",
    },
    {
      keyTrigger: "X",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      keyTrigger: "C",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
      description: "Closed-HH",
    },
  ];

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const audio = audios.find((audio)=> audio.keyTrigger === e.key.toUpperCase())
    console.log("mi audio", audio)

    if(!audio){
      return
    }
    const audioElement = document.getElementById(audio.keyTrigger) as HTMLAudioElement;

    if (audioElement) {
      audioElement.play().catch((e) => console.error(e));
    }
    document.getElementById("drum-"+ audio.keyTrigger)?.focus();
    const display = document.getElementById("display");
    if(display){
      display.innerText = audio.description;
    }
  };

  return (
    <div className="h-screen bg-blue-300 container place-content-center" id="drum-machine" onKeyDown={playAudio} tabIndex={0}>
      <h1 className="text-slate-600 text-center align-center font-semibold text-3xl font-sans mt-8">
        Sound Machine
      </h1>
      <div className="whole drum grid grid-cols-3 gap-4 mt-12 m-auto">{
        audios.map((file)=>(
            <Sound audioClip={file} key={file.keyTrigger}/>
        ))
        }
        </div>
        <div id="display" className="text-slate-600 font-bold text-3xl mt-40"></div>
    </div>
  );
}

export default Machine;
