import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import BackgroundImage from "@/components/AnimationSlider/BackgroundImage";
import Slides from "@/components/AnimationSlider/Slides";
import SlideInfo from "@/components/AnimationSlider/SlideInfo";
import Controls from "@/components/AnimationSlider/Controls";
import { sliderData } from "@/store/slider";

export type Data = {
    img: string;
    title: string;
    subtitle: string;
    description: string;
    location: string;
    buttonText?: string;
    url?: string
};

export type CurrentSlideData = {
    data: Data;
    index: number;
};

export default function AnimationSlider() {
    const initData = sliderData[0];
    const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = React.useState<Data>(
        sliderData[0]
    );
    const [currentSlideData, setCurrentSlideData] =
        React.useState<CurrentSlideData>({
            data: initData,
            index: 0,
        });

    const changeSlide = (ix: any) => {
        // clicked slide index = ix
    };

    return (
        <main className={`relative min-h-screen select-none overflow-hidden text-white antialiased`}>
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}

                />
                <div className=" absolute z-20  h-full w-full">
                    {/* begin::header */}

                    {/* end::header */}
                    <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
                        <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-end md:p-10">
                            <Slides data={data} handleData={changeSlide} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </main>
    );
}




