import prisma from "./dbClient";
import { coursesData } from "./seedDataCourses";
import { pyqsData } from "./seedDataPyqs";

async function main() {
    await prisma.pyqs.deleteMany();
    await prisma.branchCourse.deleteMany();
    await prisma.courses.deleteMany();
    await prisma.branches.deleteMany();
    await prisma.degrees.deleteMany();

    console.log("Deleted all data");

    await prisma.courses.createMany({
        data: coursesData,
        skipDuplicates: true,
    });

    const promises: Promise<any>[] = [];

    pyqsData.forEach( (degree) => {
        const promise= prisma.degrees.create(degree)
        promises.push(promise)
    } )

    await Promise.all(promises);
}

main()
    .then(() => {
        console.log("Data seeded successfully");
        process.exit(0);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
