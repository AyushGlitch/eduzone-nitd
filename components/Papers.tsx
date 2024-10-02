import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import Link from "next/link";

async function getDegrees() {
    const degrees = await prisma.degrees.findMany();
    return degrees;
}

export default async function Papers() {
    const degrees = await getDegrees();
    // console.log(degrees)

    return (
        <div className="relative bg-gradient-to-b from-violet-500 to-black flex flex-col justify-center items-center gap-16 py-20 md:pt-32 overflow-clip">
            <div className="absolute bg-black h-[200px] w-[450px] md:h-[400px] md:w-[2000px] rounded-[100%] top-0 -translate-y-[80%] border border-violet-300 bg-[radial-gradient(closest-side,#000_90%,#9560EB)]" />
            <h1 className="text-4xl font-bold">Start Exploring</h1>
            <div className="flex gap-20">
                {degrees &&
                    degrees.map((degree) => (
                        <Link
                            href={`/search/${degree.degreeId}`}
                            key={degree.degreeId}
                        >
                            <Card className="aspect-video">
                                <CardHeader>
                                    <CardTitle>{degree.degreeName}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-base xl:text-lg">
                                    {degree.compDegreeName}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
