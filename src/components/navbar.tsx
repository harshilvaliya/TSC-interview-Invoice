import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <header className="z-30 absolute top-0 left-0 w-full md:w-auto md:h-full bg-purple-600 md:rounded-tr-[20px] md:rounded-br-[20px] flex md:flex-col justify-between">
        <Image
          src="/bill.png"
          alt="logo"
          width={80}
          height={80}
          className="p-2"
        />
        <nav className="flex items-center md:flex-col">
          <div className="w-px md:w-full h-full md:h-px bg-[#494E6E]"></div>
          <Image
            src="/profile-user.png"
            alt="avatar"
            width={60}
            height={60}
            className="p-2"
          />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
