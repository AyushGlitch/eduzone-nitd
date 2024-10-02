import { stringify } from "querystring";
import prisma from "./dbClient";
import { coursesData } from "./seedDataCourses";
import { pyqsData } from "./seedDataPyqs";

async function deleteIfDataExists(model: string) {
    // @ts-ignore
    const dataExists = await prisma[model].findMany();
    if (dataExists.length > 0) {
        // @ts-ignore
        await prisma[model].deleteMany();
    }
}

async function main() {
    await deleteIfDataExists("pyqs");
    await deleteIfDataExists("branchCourse");
    await deleteIfDataExists("courses");
    await deleteIfDataExists("branches");
    await deleteIfDataExists("degrees");
    await deleteIfDataExists("courseSyllabusTeachingScheme");

    console.log("Deleted all data");

    await prisma.courses.createMany({
        data: coursesData,
        skipDuplicates: true,
    });

    const promises: Promise<any>[] = [];

    pyqsData.forEach((degree) => {
        const promise = prisma.degrees.create(degree);
        promises.push(promise);
    });

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
