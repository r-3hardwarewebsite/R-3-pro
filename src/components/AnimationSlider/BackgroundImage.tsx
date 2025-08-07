
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/components/AnimationSlider";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [currentSlideData.data.img, transitionData?.img]);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className={cn(
            "absolute left-0 top-0 z-10 h-full w-full my-cover brightness-50 transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          src={transitionData.img}
          onLoad={() => setIsLoading(false)}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className={cn(
          "absolute left-0 top-0 h-full w-full object-cover brightness-50 transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default BackgroundImage;
