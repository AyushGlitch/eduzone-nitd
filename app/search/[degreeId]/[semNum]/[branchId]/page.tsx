import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import Link from "next/link";

export async function generateStaticParams() {
    const res= await prisma.branches.findMany({
        select: {
            branchId: true,
            degreeId: true,
            degrees: {
                select: {
                    numOfSems: true
                }
            }
        }
    })

    const data= res.flatMap( d => (
        Array.from( {length: d.degrees.numOfSems}, (_, i) => (
            {
                degreeId: d.degreeId.toString(),
                semNum: (i+1).toString(),
                branchId: d.branchId.toString()
            }
        ) )
    ) )
    // console.log(data)

    return data
}


async function getCourses(semNum: number, branchId: number) {
    const res= await prisma.branchCourse.findMany({
        where: {
            branchId: branchId,
            semester: semNum,
        },
        select: {
            courseId: true,
            course: {
                select: {
                    courseName: true
                }
            }
        }
    })

    const data= res.flatMap( r => (
        {
            courseId: r.courseId,
            courseName: r.course.courseName
        }
    ) )

    // console.log(data)
    return data
}


export default async function Page ( {params} : {params: {
    degreeId: string,
    semNum: string,
    branchId: string
}} ) {

    const degreeId= parseInt(params.degreeId)
    const semNum= parseInt(params.semNum)
    const branchId= parseInt(params.branchId)

    const courses= await getCourses(semNum, branchId)

    return (
        <>
            <div className="mt-28 w-full flex flex-col items-center">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <h1 className="font-extrabold text-6xl">
                        Choose the Course
                    </h1>
                    <h3 className="font-medium text-2xl">
                        You want to explore
                    </h3>
                </div>

                <div className="w-2/3 mt-24 mb-10 mx-auto">
                    <div className="grid grid-cols-3 gap-5 justify-evenly">
                        {
                            courses && courses.map( course => (
                                <Link href={`/search/${degreeId}/${semNum}/${branchId}/${course.courseId}`} key={course.courseId}>
                                    <Card className="h-full w-full aspect-video">
                                        <CardHeader>
                                            <CardTitle>{course.courseId}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-lg">
                                            {course.courseName}
                                        </CardContent>
                                    </Card>
                                </Link>
                            ) )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}