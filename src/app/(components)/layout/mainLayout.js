"use client";

import { Merienda } from "next/font/google";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MainLayout({ children }) {
  return (
    <div id="window" className="w-full h-lvh flex flex-col bg-white  items-center ">
      {children}
      <div
        className="flex flex-col py-28 px-8 shadow-lg bg-col_9 transition merienda gap-4 items-center w-full"
      >
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl text-col_10 text-center font-bold"
        >
          Build Stunning Websites with Me!
        </motion.p>
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          transition={{ delay: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-col_10 text-center lg:w-[39%]"
        >
          Creating responsive and visually appealing web experiences tailored to
          your needs.
        </motion.p>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}

          viewport={{ once: true }}
          className="flex merienda items-center gap-5"
        >
          <motion.p className="text-col_9  transition-all px-4 py-2 bg-col_10 border-col_10 hover:scale-[1.05] cursor-pointer rounded-full">
            View My Work
          </motion.p>

          <motion.p className="text-col_10  transition-all px-4 py-2 bg-col_9 border-col_10 border-2 hover:scale-[1.05] cursor-pointer rounded-full">
            Contact me
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
