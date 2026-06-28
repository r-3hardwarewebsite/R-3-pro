import { Data } from "@/components/AnimationSlider";
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: Data[];
  handleData: (ix: number) => void;
};

function Slides({ data, handleData }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data, ix) => {
        return <SliderCard key={data.img} data={data} handleData={handleData} ix={ix} />;
      })}
    </div>
  );
}

export default Slides;
