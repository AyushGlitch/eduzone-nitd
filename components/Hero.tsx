import Image from "next/image";
import * as motion from "framer-motion/client";

export default async function Hero() {
    return (
        <div className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip h-screen">
            <div className="flex flex-col h-full gap-6 items-center justify-center w-5/6 md:w-3/5 mx-auto text-center pb-20">
                <h1 className="text-7xl tracking-tighter font-bold bg-gradient-to-r from-blue-500 via-red-400 to-orange-400 text-transparent bg-clip-text">
                    Eduzone NIT Delhi
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
                    Your one stop solution for all your academic needs.
                </h2>
                <h3 className="text-xl font-semibold md:w-4/5">
                    Access previous year papers to enhance your study and
                    preparation. Our comprehensive archive helps you understand
                    exam patterns and improve your performance.
                </h3>

                <motion.div
                    className="absolute left-[5%] top-[18%] hidden md:block"
                    drag
                    dragSnapToOrigin
                >
                    <Image
                        src="/books.png"
                        height={300}
                        width={300}
                        alt="Books"
                        className="max-w-none"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    className="absolute right-[2%] top-[40%] hidden md:block"
                    drag
                    dragSnapToOrigin
                >
                    <Image
                        src="/table.png"
                        height={300}
                        width={300}
                        alt="Table"
                        className="max-w-none"
                        draggable="false"
                    />
                </motion.div>
            </div>

            <div className="absolute top-[calc(100%-90px)] md:top-[calc(100%-150px)] bg-black h-[250px] w-[450px] md:h-[600px] md:w-[2150px] rounded-[100%] left-1/2 -translate-x-1/2 border border-violet-300 bg-[radial-gradient(closest-side,#000_82%,#9560EB)]" />
        </div>
    );
}
