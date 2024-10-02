import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import Link from "next/link";

export async function generateStaticParams() {
    const res = await prisma.branches.findMany({
        select: {
            branchId: true,
            degreeId: true,
            degrees: {
                select: {
                    numOfSems: true,
                },
            },
        },
    });

    const data = res.flatMap((d) =>
        Array.from({ length: d.degrees.numOfSems }, (_, i) => ({
            degreeId: d.degreeId.toString(),
            semNum: (i + 1).toString(),
            branchId: d.branchId.toString(),
        }))
    );

    const promises: Promise<any>[] = [];

    data.forEach((d) => {
        const promise = prisma.branchCourse.findMany({
            select: {
                branchId: true,
                semester: true,
                courseId: true,
                branch: {
                    select: {
                        degreeId: true,
                    },
                },
            },
            where: {
                branchId: parseInt(d.branchId),
                semester: parseInt(d.semNum),
            },
        });
        promises.push(promise);
    });

    const data2 = await Promise.all(promises);
    const data3 = data2
        .filter((d) => d.length > 0)
        .flatMap((d) =>
            d.map((r: any) => ({
                degreeId: r.branch.degreeId.toString(),
                branchId: r.branchId.toString(),
                semNum: r.semester.toString(),
                courseId: r.courseId.toString(),
            }))
        );

    // console.log(data3);

    return data3;
}

async function getPyqs(branchId: number, semNum: number, courseId: string) {
    const res = await prisma.pyqs.findMany({
        where: {
            branchId,
            semester: semNum,
            courseId,
        },
        orderBy: {
            academicYear: "desc",
        },
    });

    // console.log(res)
    return res;
}

export default async function Page({
    params,
}: {
    params: {
        degreeId: string;
        branchId: string;
        semNum: string;
        courseId: string;
    };
}) {
    const degreeId = parseInt(params.degreeId);
    const branchId = parseInt(params.branchId);
    const semNum = parseInt(params.semNum);
    const courseId = params.courseId;

    const pyqs = await getPyqs(branchId, semNum, courseId);

    return (
        <>
            <div className="pt-24 xl:pt-28 w-full flex flex-col items-center">
                <div className="w-11/12 xl:w-2/3 mx-auto flex flex-col gap-5 items-center">
                    <h1 className="text-3xl xl:text-5xl font-semibold xl:font-bold">
                        Explore the {courseId} Content
                    </h1>
                    {/* <h3 className="font-medium text-2xl">
                        You want to explore
                    </h3> */}
                </div>

                <div className="w-11/12 xl:w-3/4 mt-7 xl:mt-14 mx-auto flex flex-col border-slate-400 border-4 gap-5 p-2 xl:p-5 mb-10">
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <div className="w-full flex items-center justify-center border-4 border-orange-300 p-2">
                            <p className="font-bold text-3xl">Books</p>
                        </div>

                        <div className="w-full xl:w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-5 p-5 border-4 border-green-200 mb-10">
                            <Link href={`/pdfUrl`} key={1}>
                                <Card className="h-full w-full">
                                    <CardHeader>
                                        <CardTitle>Book 1</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-lg">
                                        Book 1
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href={`/pdfUrl`} key={2}>
                                <Card className="h-full w-full">
                                    <CardHeader>
                                        <CardTitle>Book 2</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-lg">
                                        Book 2
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>

                        <div className="w-full flex items-center justify-center border-4 border-orange-300 p-2">
                            <p className="font-bold text-3xl">PYQS</p>
                        </div>

                        <div className="w-full xl:w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-5 p-5 border-4 border-green-200 mb-5">
                            {pyqs &&
                                pyqs.map((pyq) => (
                                    <Link
                                        href={pyq.pdfUrl}
                                        key={pyq.paperId}
                                        target="_blank"
                                    >
                                        <Card className="h-full w-full">
                                            <CardHeader>
                                                <CardTitle>
                                                    {pyq.endSem
                                                        ? "End Sem"
                                                        : "Mid Sem"}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-base xl:text-lg">
                                                <p>
                                                    <span className="font-medium">
                                                        Semester:{" "}
                                                    </span>{" "}
                                                    {pyq.semester}
                                                </p>
                                                <p>
                                                    <span className="font-medium">
                                                        Academic Year:{" "}
                                                    </span>
                                                    {pyq.academicYear}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
