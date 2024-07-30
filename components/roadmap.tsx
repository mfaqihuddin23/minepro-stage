"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";

interface RoadmapItem {
  number: number;
  items: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    number: 1,
    items: [
      "Team internally purchases two 1.5 megawatt containers. Once filled each earning 10%-20% ROI per month.",
      "Brand and go to market strategy development.",
      "Visit Logic Mining headquarters in Alberta.",
      "Site, socials, and white paper launch.",
    ],
  },
  {
    number: 2,
    items: [
      "Social FI campaign launch.",
      "Seed Round launch.",
      "Massive multi platform marketing campaign kickoff.",
      "Private ICO sale start",
      "Pre TGE Staking launch",
      "TGE",
    ],
  },
  {
    number: 3,
    items: [
      "Token Launch",
      "Play To Earn Game development begins",
      "Hosting Business Channel Opens",
      "Containers & Operational Expansion",
    ],
  },
  {
    number: 4,
    items: [
      "Play To Earn game launch",
      "Second phase marketing push",
      "Strategic Partnership Expansion",
    ],
  },
];

export default function Roadmap() {
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: roadmapRef });

  const dotOneRef = useRef<HTMLDivElement | null>(null);
  const dotTwoRef = useRef<HTMLDivElement | null>(null);
  const dotThreeRef = useRef<HTMLDivElement | null>(null);
  const dotFourRef = useRef<HTMLDivElement | null>(null);

  const [hasReachedDotOne, setHasReachedDotOne] = useState(false);
  const [hasReachedDotTwo, setHasReachedDotTwo] = useState(false);
  const [hasReachedDotThree, setHasReachedDotThree] = useState(false);
  const [hasReachedDotFour, setHasReachedDotFour] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === dotOneRef.current) {
          setHasReachedDotOne(entry.isIntersecting);
        }
        if (entry.target === dotTwoRef.current) {
          setHasReachedDotTwo(entry.isIntersecting);
        }
        if (entry.target === dotThreeRef.current) {
          setHasReachedDotThree(entry.isIntersecting);
        }
        if (entry.target === dotFourRef.current) {
          setHasReachedDotFour(entry.isIntersecting);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // observe the dots
    if (dotOneRef.current) {
      observer.observe(dotOneRef.current);
    }
    if (dotTwoRef.current) {
      observer.observe(dotTwoRef.current);
    }
    if (dotThreeRef.current) {
      observer.observe(dotThreeRef.current);
    }
    if (dotFourRef.current) {
      observer.observe(dotFourRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // const [height, setHeight] = React.useState(0);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("scroll Y progress: ", scrollYProgress);
  //   console.log("Page scroll: ", latest);
  //   setHeight(latest * 100);
  // });

  return (
    <div ref={roadmapRef} className="w-full mt-8 sm:mt-12 sm:mb-32">
      {/* mobile ver */}
      <div className="lg:hidden flex justify-center gap-12 mx-4 relative">
        <div className="roadmapDotsMobile"></div>
        {/* left side - progress */}

        {/* right side - cards */}
        <div className="flex flex-col items-center gap-12 px-4">
          {roadmapItems.map((item, index) => (
            <div key={index} className="w-full lg:w-auto max-w-[600px]">
              <h4 className="pl-4 creamTextGradient text-[24px]">Q{item.number} 2024</h4>
              {/* card */}
              <div
                ref={dotOneRef}
                className="mt-4 roadmapItemCard"
              >
                {/* gradients */}
                <div className="roadmapItemCardGradient1"></div>
                <div className="roadmapItemCardGradient2"></div>

                {/* content */}
                <div className="flex flex-col gap-4 justify-start items-center">
                  {item.items.map((item, index) => (
                    <div key={index} className="w-full flex items-center gap-3">
                      <div className="flex items-center gap-2 text-white/60 text-[14px]">
                        <div className="shrink-0 glassButtonSmall ">
                          <p className="text-left">{index + 1}</p>
                        </div>
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* desktop ver */}
      <div className="hidden lg:flex max-w-7xl mx-auto justify-center gap-16 relative">
        <div className="roadmapDots"></div>
        {/* left side */}
        <div className="w-1/2 pt-16 pl-8 lg:pl-16">
          {/* card 1 */}
          <h4 className="w-fit ml-auto pr-4 creamTextGradient text-[24px]">Q1 2024</h4>
          <div ref={dotOneRef} className="mt-2 roadmapItemCard max-w-[600px]">
            {/* gradients */}
            <div className="roadmapItemCardGradient1"></div>
            <div className="roadmapItemCardGradient2"></div>

            {/* content */}
            <div className="flex flex-col gap-4 justify-start items-center">
              {roadmapItems[0].items.map((item, index) => (
                <div key={index} className="w-full flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white/60 text-[14px]">
                    <div className="shrink-0 glassButtonSmall ">
                      <p className="text-left">{index + 1}</p>
                    </div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* gap */}
          <div className="w-0 h-80"></div>

          {/* card 3 */}
          <h4 className="w-fit ml-auto pr-4 creamTextGradient text-[24px]">Q3 2024</h4>
          <div ref={dotOneRef} className="mt-2 roadmapItemCard max-w-[600px]">
            {/* gradients */}
            <div className="roadmapItemCardGradient1"></div>
            <div className="roadmapItemCardGradient2"></div>

            {/* content */}
            <div className="flex flex-col gap-4 justify-start items-center">
              {roadmapItems[2].items.map((item, index) => (
                <div key={index} className="w-full flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white/60 text-[14px]">
                    <div className="shrink-0 glassButtonSmall ">
                      <p className="text-left">{index + 1}</p>
                    </div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* center */}
        <div className="bg-white bg-opacity-[12%] w-2 rounded-full relative">
          <motion.div
            className="absolute top-0 w-full rounded-full bg-[#0184E6]" /* roadmapProgressBar */
            // style={{ height: `${height}%` }}
            // style={{ scaleY: scrollYProgress }}
          ></motion.div>
          {/* dots */}
          {/* item 1 number circle */}
          <div className="z-[1] absolute top-10 left-1/2 transform -translate-x-1/2">
            <div className="glassContainerContainerRoundHowToBuy">
              <div className="howToBuyOrangeCircle">
                <p className="text-white text-[16px]">1</p>
              </div>
            </div>
          </div>
          {/* item 2 number circle */}
          <div className="z-[1] absolute top-[360px] left-1/2 transform -translate-x-1/2">
            <div className="glassContainerContainerRoundHowToBuy">
              <div className="howToBuyOrangeCircle">
                <p className="text-white text-[16px]">2</p>
              </div>
            </div>
          </div>
          {/* item 3 number circle */}
          <div className="z-[1] absolute top-[680px] xl:top-[630px] left-1/2 transform -translate-x-1/2">
            <div className="glassContainerContainerRoundHowToBuy">
              <div className="howToBuyOrangeCircle">
                <p className="text-white text-[16px]">3</p>
              </div>
            </div>
          </div>
          {/* item 4 number circle */}
          <div className="z-[1] absolute top-[970px] xl:top-[948px] left-1/2 transform -translate-x-1/2">
            <div className="glassContainerContainerRoundHowToBuy">
              <div className="howToBuyOrangeCircle">
                <p className="text-white text-[16px]">3</p>
              </div>
            </div>
          </div>
          {/* <div
            className={`${
              hasReachedDotOne ? "roadmapDot1Filled" : "roadmapDot1Empty"
            }`}
          ></div>
          <div
            className={`${
              hasReachedDotTwo ? "roadmapDot2Filled" : "roadmapDot2Empty"
            }`}
          ></div>
          <div
            className={`${
              hasReachedDotThree ? "roadmapDot3Filled" : "roadmapDot3Empty"
            }`}
          ></div>
          <div
            className={`${
              hasReachedDotFour ? "roadmapDot4Filled" : "roadmapDot4Empty"
            }`}
          ></div> */}
          {/* <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <div className="z-[0] w-4 h-full bg-[#fe7b1e] rounded-full"></div>
          </div> */}
        </div>

        {/* right side */}
        <div className="w-1/2 py-16 pr-8 lg:pr-16 ">
          {/* gap */}
          <div className="w-0 h-80"></div>

          {/* card 2 */}
          <h4 className="w-fit mr-auto pl-4 creamTextGradient text-[24px]">Q2 2024</h4>
          <div ref={dotOneRef} className="mt-2 roadmapItemCard max-w-[600px]">
            {/* gradients */}
            <div className="roadmapItemCardGradient1"></div>
            <div className="roadmapItemCardGradient2"></div>

            {/* content */}
            <div className="flex flex-col gap-4 justify-start items-center">
              {roadmapItems[1].items.map((item, index) => (
                <div key={index} className="w-full flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white/60 text-[14px]">
                    <div className="shrink-0 glassButtonSmall ">
                      <p className="text-left">{index + 1}</p>
                    </div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* gap */}
          <div className="w-0 h-64"></div>

          {/* card 4 */}
          <h4 className="w-fit mr-auto pl-4 creamTextGradient text-[24px]">Q4 2024</h4>
          <div ref={dotOneRef} className="mt-2 roadmapItemCard max-w-[600px]">
            {/* gradients */}
            <div className="roadmapItemCardGradient1"></div>
            <div className="roadmapItemCardGradient2"></div>

            {/* content */}
            <div className="flex flex-col gap-4 justify-start items-center">
              {roadmapItems[3].items.map((item, index) => (
                <div key={index} className="w-full flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white/60 text-[14px]">
                    <div className="shrink-0 glassButtonSmall ">
                      <p className="text-left">{index + 1}</p>
                    </div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
