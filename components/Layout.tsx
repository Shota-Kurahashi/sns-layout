import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";
import { CommentBoxIcon, HomeIcon, BellIcon, UserIcon } from "./Icons/Icons";

type Title = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = "Title" }) => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const pathName = useRouter().pathname;

  const spring = {
    type: "spring",
    bounce: 0.3,
    duration: 0.5,
  };

  return (
    <div className=" font-en h-screen w-screen bg-white ">
      <Head>
        <title>{title}</title>
      </Head>
      <header
        className={`fixed z-20 flex h-16 w-full items-center justify-center border-b bg-white/[0.97]
        p-6 drop-shadow-md`}
      >
        <button
          type="button"
          onClick={() => setIsOpenSide(!isOpenSide)}
          className="absolute left-0 flex h-16 w-24  cursor-pointer items-center justify-center  overflow-hidden bg-white"
        >
          <span
            className={`absolute left-[12px] h-1  cursor-pointer rounded bg-black duration-[0.2s] ${
              isOpenSide
                ? "w-[40px] translate-y-[0] rotate-45 delay-100 "
                : "w-[25px] translate-y-[-15px]"
            }`}
          />
          <span
            className={`absolute left-[12px] h-1 cursor-pointer rounded bg-black duration-[0.2s] ${
              isOpenSide
                ? "w-[40px] translate-y-[0] rotate-[315deg] delay-100 "
                : "w-[15px] translate-y-[15px]"
            }`}
          />
          <span
            className={`absolute left-[12px] h-1 w-10 cursor-pointer rounded bg-black duration-[0.1s]	${
              isOpenSide && "translate-x-[96px]"
            }`}
          />
        </button>
        <h1 className="font-ja text-xl font-bold">なんだろう</h1>
        <div className="absolute right-0 flex h-16 w-[5rem] cursor-pointer items-center justify-center">
          <div className="relative flex h-12 w-12 rounded-full bg-red-500">
            <img
              className="	h-full w-full rounded-full object-cover"
              src="https://api.lorem.space/image/face?hash=92310"
              alt=""
            />
            <span className="absolute right-0 flex h-3 w-3 items-center  justify-center rounded-full bg-green-500 outline outline-2 outline-white">
              <span className="absolute  inline-flex h-3 w-3	animate-ping rounded-full bg-green-400 opacity-75 " />
            </span>
          </div>
        </div>
      </header>
      <motion.aside
        layout
        className={`fixed left-0 z-10  h-full w-24  flex-col  overflow-scroll border-r pt-[5.5rem]  ${
          isOpenSide && "w-3/4"
        }`}
        transition={spring}
      >
        <Link href="/">
          <motion.div
            layout
            className=" min-h-16 group relative flex h-24 w-24 cursor-pointer items-center justify-center"
          >
            {pathName === "/" ? (
              <motion.div
                layoutId="IconBackground"
                className="absolute h-20 w-20 rounded-full bg-[#ffcc00] "
              />
            ) : null}

            <HomeIcon />
          </motion.div>
        </Link>
        <Link href="user">
          <motion.div
            layout
            className="min-h-16 group relative flex h-24 w-24 cursor-pointer items-center  justify-center  "
          >
            {pathName === "/user" ? (
              <motion.div
                layoutId="IconBackground"
                className="absolute h-20 w-20 rounded-full bg-[#ffcc00] "
              />
            ) : null}
            <UserIcon />
          </motion.div>
        </Link>
        <Link href="notification">
          <motion.div
            layout
            className="min-h-16 group relative flex h-24 w-24 cursor-pointer items-center  justify-center  "
          >
            {pathName === "/notification" ? (
              <motion.div
                layoutId="IconBackground"
                className="absolute h-20 w-20 rounded-full bg-[#ffcc00]"
              />
            ) : null}
            <BellIcon />
          </motion.div>
        </Link>
        <Link href="usage">
          <motion.div
            layout
            className="min-h-16 group relative flex h-24 w-24 cursor-pointer items-center  justify-center  "
          >
            {pathName === "/usage" ? (
              <motion.div
                layoutId="IconBackground"
                className="absolute h-20 w-20 rounded-full bg-[#ffcc00] "
              />
            ) : null}
            <CommentBoxIcon />
          </motion.div>
        </Link>
      </motion.aside>
      <motion.main
        layout
        transition={spring}
        onClick={() => setIsOpenSide(false)}
        className={` ${
          isOpenSide && "left-3/4 ml-0"
        } relative left-0 ml-24 flex flex-col justify-center bg-white px-4 pt-[5.5rem]`}
      >
        {children}
      </motion.main>
      <footer className="fixed bottom-0 z-30 h-16 w-full border-t bg-white/[0.97] " />
    </div>
  );
};
