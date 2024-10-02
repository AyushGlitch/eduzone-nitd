import React from "react";
import * as motion from "framer-motion/client";

const tickerPts = [
    "Revise smarter, not harder!",
    "New papers added for 2023!",
    "Organized by semester and subject!",
    "Improve your exam performance",
    "Prepare better with our comprehensive archive",
    "Access papers from the last 4 years",
];

const coursesAvailable = [
    "B.Tech (UG)",
    "M.Tech (PG)",
    "PhD (Doctorate)",
    "PDF (Post Doctorate)",
];

const btechBranches = [
    "Artificial Intelligence and Data Science",
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Aerospace Engineering",
    "VLSI Design",
];

const mtechBranches = [
    "Computer Science and Engineering (Analytics)",
    "Computer Science and Engineering",
    "Mathematics and Computing",
    "Computer Aided Design and Manufacturing",
    "VLSI Design",
    "Power Electronics and Drives",
    "Power and Energy Systems",
    "Electronics and Communication Engineering",
    "Industrial Chemistry",
    "Civil and Infrastructure Engineering",
];

const ScrollingList = ({ items }: any) => (
    <div className="overflow-hidden flex w-fit text-nowrap items-center justify-center relative">
        <div className="absolute h-full w-10 left-0 top-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute h-full w-10 right-0 top-0 bg-gradient-to-l from-black to-transparent z-10" />
        <motion.div
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-14 flex-none pr-14"
        >
            {items.map((pt: any, i: any) => (
                <h1
                    key={i}
                    className="text-lg font-medium text-slate-400 flex-none"
                >
                    {pt}
                </h1>
            ))}
            {items.map((pt: any, i: any) => (
                <h1
                    key={i}
                    className="text-lg font-medium text-slate-400 flex-none"
                >
                    {pt}
                </h1>
            ))}
        </motion.div>
    </div>
);

const Ticker = async () => {
    return (
        <div className="text-white flex flex-col gap-20 my-20">
            <ScrollingList items={tickerPts} />

            <div className="flex flex-col items-center justify-center gap-10 px-10 w-screen">
                <h1 className="text-2xl font-bold">Programmes Offered</h1>
                <div className="flex flex-wrap items-center justify-around w-full">
                    {coursesAvailable.map((pt, i) => (
                        <h1
                            key={i}
                            className="text-xl font-medium text-slate-400"
                        >
                            {pt}
                        </h1>
                    ))}
                </div>
            </div>

            <h1 className="text-xl font-bold text-center -mb-14">
                B.Tech Courses
            </h1>
            <ScrollingList items={btechBranches} />

            <h1 className="text-xl font-bold text-center -mb-14">
                M.Tech Courses
            </h1>
            <ScrollingList items={mtechBranches} />
        </div>
    );
};

export default Ticker;
