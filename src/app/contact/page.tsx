import ContactCard from "@/components/ContactCard";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-5xl text-slate-100 font-semibold">CONTACT</h1>
      <div className="rounded border border-slate-600 p-10 w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6 text-white bg-slate-800">
        <ContactCard
          label="rafaelwinter00@gmail.com"
          link="mailto:rafaelwinter00@gmail.com"
          icon={<FaEnvelope size={48} />}
        />
        <ContactCard
          label="https://www.linkedin.com/in/rafaelwinter1/"
          link="https://www.linkedin.com/in/rafaelwinter1/"
          icon={<FaLinkedinIn size={48} />}
        />
        <ContactCard
          label="https://github.com/rafaelwinter01/"
          link="https://github.com/rafaelwinter01/"
          icon={<FaGithub size={48} />}
        />
      </div>
    </main>
  );
}

export default Contact;
