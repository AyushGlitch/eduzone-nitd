import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/prisma/dbClient"
import Link from "next/link"

export async function generateStaticParams() {
    const res= await prisma.degrees.findMany()
    const data = res.flatMap(degree => 
        Array.from({ length: degree.numOfSems }, (_, i) => ({
            degreeId: degree.degreeId.toString(),
            semNum: (i + 1).toString()
        }))
    );
    // console.log(data)
    return data
}


async function getBranches(degreeId: number) {
    const res= await prisma.branches.findMany({
        where: {
            degreeId
        }
    })
    return res
}


export default async function Page( {params}: {params: {
    degreeId: string,
    semNum: string
}} ) {

    const degreeId= parseInt(params.degreeId)
    const semNum= parseInt(params.semNum)
    const branches= await getBranches(degreeId)

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-evenly items-center">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <h1 className="font-extrabold text-6xl">
                        Choose the Branch
                    </h1>
                    <h3 className="font-medium text-2xl">
                        You want to explore
                    </h3>
                </div>

                <div className="w-2/3 mx-auto">
                    <div className="grid grid-cols-3 gap-5 justify-evenly">
                        {
                            branches && branches.map( branch => (
                                <Link href={`/${degreeId}/${semNum}/${branch.branchId}`} key={branch.branchId}>
                                    <Card className="h-full w-full">
                                        <CardHeader>
                                            <CardTitle>{branch.branchName}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-lg">
                                            {branch.compBranchName}
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