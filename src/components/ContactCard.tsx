import Link from "next/link";
import React, { ReactNode } from "react";

interface IContactCardProps {
  label: string;
  link: string;
  icon: ReactNode;
}

function ContactCard({ label, link, icon }: IContactCardProps) {
  return (
    <div className="w-full max-w-2xl h-32 flex justify-stretch items-stretch text-md md:text-xl bg-slate-700 rounded overflow-hidden">
      <div className="w-32 flex-shrink-0 grid place-content-center bg-slate-600">
        {icon}
      </div>
      <div className="flex items-center p-5 truncate ">
        <Link href={link}>{label}</Link>
      </div>
    </div>
  );
}

export default ContactCard;
