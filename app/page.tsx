import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import Link from "next/link";


async function getDegrees() {
    const degrees = await prisma.degrees.findMany()
    return degrees
}


export default async function Home() {

    const degrees = await getDegrees()
    // console.log(degrees)

    return (
        <>
            <div className="mt-28 w-full flex flex-col overflow-hidden">
                <div className="w-2/3 mx-auto flex flex-col gap-5 items-center">
                    <h2 className="text-5xl font-medium">
                        Welcome to <span className="font-bold">Eduzone</span>{" "}
                        NIT-Delhi
                    </h2>
                    <p className="text-xl">
                        Explore our archive of books, past year papers and more,
                        maintained by NIT-Delhi community.
                    </p>
                </div>

                <div className="w-2/3 mx-auto mt-24">
                    <div className="flex gap-5 justify-evenly">
                        {
                            degrees && degrees.map( (degree) => (
                                <Link href={`/search/${degree.degreeId}`} key={degree.degreeId}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{degree.degreeName}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-lg">
                                            {degree.compDegreeName}
                                        </CardContent>
                                    </Card>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
