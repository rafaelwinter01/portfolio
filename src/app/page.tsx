import AnimatedIcon from "@/components/AnimatedIcon";
import Image from "next/image";

import "./styles.css";

export default function Home() {
  return (
    <main className="w-full max-w-6xl h-screen flex flex-col md:flex-row-reverse items-center justify-center">
      <div className="md:absolute w-full max-w-6xl grid place-items-center md:place-items-end md:flex-grow-0 mt-10 md:-mt-20 ">
        <div className="bg-slate-600/50 w-[480px] h-[370px] rounded-xl grid place-items-center mt-20">
          <div className="bg-slate-500/50 w-[360px] h-[490px] rounded-xl grid place-items-center -mt-14 ml-5">
            <div className="bg-slate-300 w-[400px] h-[450px] rounded-xl grid place-items-center -ml-5">
              <div className="rounded-xl bg-[url('../img/perfil2.png')] bg-bottom bg-no-repeat bg-cover overflow-hidden w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:absolute w-full max-w-6xl flex flex-grow p-6">
        <div className="flex flex-col h-full text-slate-300 gap-2 items-start z-10">
          <h2 className="text-2xl md:text-3xl font-bold">Hello, my name is</h2>
          <p className="text-teal-400 text-6xl md:text-8xl font-bold">
            RAFAEL WINTER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            A software engineer
          </h2>

          <div className="flex flex-col text-xl md:text-2xl">
            <p className="">driven by the challenge of transforming problems</p>
            <p className="">into opportunities through code.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
