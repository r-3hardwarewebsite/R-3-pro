import React from "react";
import { motion } from "framer-motion";
import TextAnimator from "../TextAnimator";

type Props = {
  data: any;
};
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className=" flex flex-col">
      <AnimatedText
        className=" spacing overflow-hidden text-[#D5D5D6]"
        data={data?.location}
      />
      <AnimatedText
        className=" my-0 text-3xl font-semibold md:my-3 md:text-7xl md:leading-[100px]"
        data={data?.title}
        animate={true}
      />
      <AnimatedText
        className=" my-1 text-3xl font-semibold md:my-3 md:text-7xl md:leading-[100px]"
        data={data?.subtitle}
        animate={true}
      />
      <AnimatedText
        className=" text-normal text-[#D5D5D6]"
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
  animate,
}: {
  data?: string;
  className?: string;
  animate?: boolean
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {animate && <TextAnimator>{data}</TextAnimator>}
        {!animate && <>{data}</>}
      </motion.p>
    </span>
  );
};
