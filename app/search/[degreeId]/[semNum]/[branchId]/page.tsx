import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/dbClient";
import { get } from "http";
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


async function getSyllabusTeachingScheme(branchId: number) {
    const res= await prisma.courseSyllabusTeachingScheme.findFirst({
        where: {
            branchId: branchId
        },
        select: {
            syllabusUrl: true,
            teachingSchemeUrl: true,
            syllabusId: true
        }
    })

    return res
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
    const syllabusTeachingScheme= await getSyllabusTeachingScheme(branchId)

    return (
        <>
            <div className="mt-14 xl:mt-28 w-full flex flex-col items-center">
                <div className="w-11/12 xl:w-2/3 mx-auto flex flex-col gap-5 items-center">
                    <h1 className="text-3xl xl:text-5xl font-semibold">
                        Choose the Course
                    </h1>
                    <h3 className="font-medium text-lg xl:text-2xl">
                        You want to explore
                    </h3>
                </div>


                <div className="w-11/12 xl:w-2/3 mt-14 xl:mt-24 mx-auto mb-3">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                        {
                            <Link href={`${syllabusTeachingScheme?.syllabusUrl}`} key={syllabusTeachingScheme?.syllabusId} target="_blank" className="xl:col-start-2" >
                                <Card className="h-full w-full aspect-video">
                                    <CardHeader>
                                        <CardTitle className="text-base xl:text-lg">Click to get Syllabus</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-base xl:text-lg">
                                            {syllabusTeachingScheme?.syllabusUrl.substring(0, 15) + "..."}
                                    </CardContent>
                                </Card>
                            </Link>
                        }

                        {
                            <Link href={`${syllabusTeachingScheme?.teachingSchemeUrl}`} key={syllabusTeachingScheme?.syllabusId} target="_blank">
                                <Card className="h-full w-full aspect-video">
                                    <CardHeader>
                                        <CardTitle className="text-base xl:text-lg">Click to get Teaching Scheme</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-base xl:text-lg">
                                            {syllabusTeachingScheme?.syllabusUrl.substring(0, 15) + "..."}
                                    </CardContent>
                                </Card>
                            </Link>
                        }
                    </div>
                </div>
                


                <div className="w-2/3 mt-14 xl:mt-24 mx-auto mb-10">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 justify-evenly">
                        {
                            courses && courses.map( course => (
                                <Link href={`/search/${degreeId}/${semNum}/${branchId}/${course.courseId}`} key={course.courseId}>
                                    <Card className="h-full w-full aspect-video">
                                        <CardHeader>
                                            <CardTitle>{course.courseId}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-base xl:text-lg">
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