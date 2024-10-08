import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import Link from "next/link";

export async function generateStaticParams() {
    const res = await prisma.degrees.findMany();
    const degreeIds = res.map((degree) => ({
        degreeId: degree.degreeId.toString(),
    }));
    console.log(degreeIds);
    return degreeIds;
}

async function getNumOfSems(degreeId: number) {
    const res = await prisma.degrees.findUnique({
        where: {
            degreeId,
        },
    });
    return res?.numOfSems;
}

export default async function Page({
    params,
}: {
    params: { degreeId: string };
}) {
    const degreeId = parseInt(params.degreeId);
    const numOfSems = await getNumOfSems(degreeId);

    return (
        <>
            <div className="pt-24 lg:pt-28 w-full flex flex-col items-center">
                <div className="w-11/12 lg:w-2/3 mx-auto flex flex-col gap-5 items-center">
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        Choose the semester
                    </h1>
                    <h3 className="font-medium text-lg lg:text-2xl">
                        You want to explore
                    </h3>
                </div>

                <div className="w-2/3 mt-14 lg:mt-24 mx-auto mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 justify-evenly">
                        {numOfSems &&
                            Array.from({ length: numOfSems }).map(
                                (_, index) => (
                                    <Link
                                        href={`/search/${degreeId}/${index + 1}`}
                                        key={index}
                                    >
                                        <Card className="h-full w-full">
                                            <CardHeader>
                                                <CardTitle>{`Semester ${index + 1}`}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-lg">
                                                {`Semester ${index + 1}`}
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}
