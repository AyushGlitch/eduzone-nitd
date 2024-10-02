import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default async function Page() {
    return (
        <div className="pt-24 w-full flex flex-col overflow-hidden">
            <div className="w-11/12 xl:w-2/3 mx-auto flex flex-col gap-5 items-center">
                <h2 className="text-3xl xl:text-5xl font-medium">
                    Welcome to <span className="font-bold">Eduzone</span>{" "}
                    NIT-Delhi
                </h2>
                <p className="text-lg xl:text-xl">
                    Explore our archive of books, past year papers and more,
                    maintained by NIT-Delhi community.
                </p>
            </div>

            <div className="w-11/12 xl:w-3/4 mx-auto flex flex-col border-slate-400 border-4 gap-5 p-2 xl:p-5 my-10">
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <div className="w-full flex items-center justify-center border-4 border-orange-300 p-2">
                        <p className="font-bold text-3xl">About</p>
                    </div>

                    <div className="w-full xl:w-11/12 flex flex-col gap-5 p-5 border-4 border-green-200 mb-10">
                        <p className="text-sm font-normal xl:text-lg">
                            Welcome to Eduzone NIT-Delhi! I&apos;m{" "}
                            <span className="font-bold">
                                Ayush Aryan Singh (221210026)
                            </span>
                            , a student of Computer Science and Engineering from
                            the batch of 2026, and I&apos;m excited to introduce
                            you to this platform.
                        </p>

                        <p className="text-base font-bold xl:text-2xl mt-4">
                            Our Mission
                        </p>
                        <p className="font-normal text-sm xl:text-lg -mt-3">
                            At Eduzone NIT-Delhi, our mission is clear: to make
                            essential study materials easily accessible to
                            students like you. Being a student myself, I
                            understand the struggles of finding the right
                            resources, especially during the stressful exam
                            periods. That&apos;s why I created this platform—to
                            provide a centralized hub where you can access past
                            year question papers, textbooks, and other relevant
                            materials tailored to the courses and branches
                            offered at the National Institute of Technology,
                            Delhi.
                        </p>

                        <p className="text-base font-bold xl:text-2xl mt-4">
                            Our Technology Stack
                        </p>
                        <p className="font-normal text-sm xl:text-lg -mt-3">
                            To bring Eduzone NIT-Delhi to life, I&apos;ve relied
                            on a range of technologies.
                        </p>
                        <ul className="font-normal text-sm xl:text-lg -mt-3 list-disc list-inside">
                            <li>
                                Leveraging Next.js for seamless navigation and
                                user experience through server-side rendering.
                            </li>
                            <li>
                                Prisma provides a robust ORM for efficient data
                                management.
                            </li>
                            <li>
                                PostgreSQL ensures data reliability and
                                scalability.
                            </li>
                            <li>
                                Tailwind CSS facilitates crafting sleek and
                                responsive user interfaces, enhancing the
                                overall browsing experience.
                            </li>
                            <li>
                                Google Drive is used to store the study
                                materials, ensuring easy access and quick
                                downloads.
                            </li>
                            <li>
                                ShadcnUI is used for the simple and clean UI
                                components like Cards &amp; Buttons.
                            </li>
                            <li>
                                Prettier and ESLint are used for code formatting
                                and linting, ensuring clean and consistent code.
                            </li>
                            <li>
                                Docker is used to containerize the PostGres
                                database.
                            </li>
                        </ul>

                        <p className="text-base font-bold xl:text-2xl mt-4">
                            Why Static Site Generation?
                        </p>
                        <p className="font-normal text-sm xl:text-lg -mt-3">
                            I chose to implement static site generation (SSG)
                            for Eduzone NIT-Delhi to ensure consistent
                            accessibility and reliability. Since all users have
                            access to the same pages with the same data, and
                            there&apos;s no need for personalized data such as
                            logins, SSG was the optimal choice. By pre-rendering
                            static HTML files for each page, I minimize server
                            load and optimize performance, particularly during
                            peak periods such as exam seasons. Hosting on free
                            servers from platforms like GoogieHost and
                            FreeWebHostMost enables me to maintain our services
                            without incurring costs.
                        </p>

                        <p className="text-base font-bold xl:text-2xl mt-4">
                            Open Source Initiative
                        </p>
                        <p className="font-normal text-sm xl:text-lg -mt-3">
                            Eduzone NIT-Delhi is a personal project that
                            I&apos;m passionate about. That&apos;s why the
                            codebase is open-sourced on GitHub, allowing for
                            transparency, collaboration, and community-driven
                            development. I invite my fellow college mates from
                            NIT Delhi to contribute to this project, as
                            together, we can continuously enhance and refine our
                            platform to meet the evolving needs of the student
                            community.
                        </p>
                    </div>

                    
                        <Button variant={"default"} size={"lg"} className="bg-emerald-400 text-lg font-semibold" asChild>
                            <Link href={"https://github.com/AyushGlitch/eduzone-nitd"} target="_blank" >
                                Github
                            </Link>
                        </Button>
                    
                </div>
            </div>
        </div>
    );
}
