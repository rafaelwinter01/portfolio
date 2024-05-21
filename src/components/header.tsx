import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const link = "transition-all text-slate-300 hover:text-white";

function Header() {
  return (
    <header className="bg-slate-800 h-32 md:h-20 flex justify-center items-center text-slate-200">
      <div className="w-full max-w-6xl flex justify-center md:justify-between items-center">
        <div className="absolute md:relative m-4 bg-[url('../img/logoicon.png')] bg-center bg-no-repeat bg-contain md:bg-fit opacity-40 md:opacity-80 z-0 h-28 md:h-20 w-72 md:w-56 md:grid place-items-center pointer-events-none"></div>
        <div className="flex items-center gap-4 z-1 pointer-events-auto ">
          <Link href="/" className={cn(link)}>
            Home
          </Link>
          <Separator orientation="vertical" className="bg-slate-700 h-4" />
          <Link href="/about" className={cn(link)}>
            About me
          </Link>
          <Separator orientation="vertical" className="bg-slate-700 h-4" />
          <Link href="/projects" className={cn(link)}>
            Projects
          </Link>
          <Separator orientation="vertical" className="bg-slate-700 h-4" />
          <Link href="/contact" className={cn(link)}>
            Contact
          </Link>
        </div>
        <div className="fixed md:relative bottom-16 md:bottom-auto right-8 md:right-auto z-50 flex items-center gap-4">
          <a href="/r_rafael_winter.pdf" download="rw-resume.pdf">
            <Button className="border border-slate-600">Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
