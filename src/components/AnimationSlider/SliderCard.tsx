import React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'
import type { Data } from "@/components/AnimationSlider";

type Props = {
  data: Data;
  handleData: (ix: number) => void;
  ix: number;
};

function SliderCard({ data, ix: _ix }: Props) {
  const navigate = useRouter();
  const changeSlide = () => {
    // handleData(ix)
    navigate.push(`${data?.url}`)
  };

  return (
    <motion.div
      className="cursor-pointer relative sm:h-50 min-w-[150px] rounded-2xl shadow-md md:min-w-[200px] above1400:min-w-[280px] below1400:h-60 above1400:min-h-[360px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      onClick={changeSlide}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className=" absolute h-full w-full  rounded-2xl  object-cover "
      />
      <motion.div className=" absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=" mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={data.location} className="text-xs text-[#D5D5D6]">
            {data.location}
          </motion.p>
          <motion.h1
            layoutId={data.title}
            className="text-xl leading-6 text-white"
          >
            {data.title} <br />
            {data?.subtitle}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
