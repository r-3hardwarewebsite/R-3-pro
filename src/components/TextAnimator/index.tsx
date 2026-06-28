"use client";

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

const MAX_DISTANCE = 300;
const MAX_FONT_WEIGHT = 800;
const MIN_FONT_WEIGHT = 100;

const TextAnimator = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLHeadingElement | null>(null);
    const charsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Split text into characters
        const splitInstance = new SplitType(container, { types: 'chars' });
        const chars = Array.from(container.querySelectorAll('.char')) as HTMLElement[];
        charsRef.current = chars;

        // Mousemove handler
        const handleMouseMove = (event: MouseEvent) => {
            const mouseX = event.pageX;
            const mouseY = event.pageY;

            // Batch DOM reads first
            const updates = chars.map((char) => {
                const rect = char.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2 + window.scrollX;
                const centerY = rect.top + rect.height / 2 + window.scrollY;
                const distance = Math.sqrt(
                    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
                );

                const fontWeight =
                    distance < MAX_DISTANCE
                        ? gsap.utils.mapRange(
                            0,
                            MAX_DISTANCE,
                            MIN_FONT_WEIGHT,
                            MAX_FONT_WEIGHT,
                            Math.max(0, MAX_DISTANCE - distance)
                        )
                        : MIN_FONT_WEIGHT;

                return { char, fontWeight };
            });

            // Then batch DOM writes
            updates.forEach(({ char, fontWeight }) => {
                gsap.to(char, { fontWeight, duration: 0.3, overwrite: 'auto' });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            // Optional: Clean up split text
            splitInstance.revert();
        };
    }, []);

    return (
        <h3 data-animate="true" ref={containerRef}>
            {children}
        </h3>
    );
};

export default TextAnimator;

// "use client";
// import gsap from 'gsap'
// import { useEffect } from 'react';
// import SplitType from 'split-type'

// const TextAnimator = ({ children }: { children: any }) => {

//     const mm = gsap.matchMedia();
//     mm.add("(min-width: 992px)", () => {
//         const fontWeightItems = document.querySelectorAll('[data-animate]');
//         const MAX_DISTANCE = 300;
//         const MAX_FONT_WEIGHT = 800;
//         const MIN_FONT_WEIGHT = 100;

//         fontWeightItems.forEach((item: any) => {
//             new SplitType(item, { types: "chars" }).chars;
//         });

//         document.addEventListener("mousemove", (event) => {
//             // Get the mouse position
//             const mouseX = event.pageX;
//             const mouseY = event.pageY;
//             fontWeightItems.forEach((item) => {
//                 item.querySelectorAll(".char").forEach((char) => {
//                     const itemRect = char.getBoundingClientRect();
//                     const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
//                     const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;
//                     const distance = Math.sqrt(
//                         Math.pow(mouseX - itemCenterX, 2) +
//                         Math.pow(mouseY - itemCenterY, 2)
//                     );

//                     let fontWeight = distance < MAX_DISTANCE ?
//                         gsap.utils.mapRange(
//                             0,
//                             MAX_DISTANCE,
//                             MIN_FONT_WEIGHT,
//                             MAX_FONT_WEIGHT,
//                             Math.max(0, MAX_DISTANCE - distance)
//                         ) : MIN_FONT_WEIGHT;

//                     gsap.to(char, { fontWeight, duration: 0.5 });
//                 });
//             });
//         })
//     });




//     return (<>
//         <h3 data-animate="true">{children}</h3>
//     </>)
// }

// export default TextAnimator