import { pyqsData } from "./dataTrail";
import fs from "fs";

const pyqsDataFilePath = "./prisma/dataTrail.ts";

const branchName = "CSE";
const semester = 1;
const courseId = "CSBB101";
const academicYear = "2024-25";
const endSem = true;
const pdfUrl = "https://example.com/new-pyq.pdf";

// Clone the existing pyqsData to ensure immutability
let newData = JSON.parse(JSON.stringify(pyqsData));

let branch = newData[0].data.branches.create.find((b: any) => b.branchName === branchName);
if (!branch) {
    branch = {
        branchName,
        branchCourse: {
            create: [],
        },
    };
    newData[0].data.branches.create.push(branch);
}

let course = branch.branchCourse.create.find((c: any) => c.semester === semester && c.courseId === courseId);
if (!course) {
    course = {
        semester,
        courseId,
        pyqs: {
            create: [],
        },
    };
    branch.branchCourse.create.push(course);
}

course.pyqs.create.push({
    academicYear,
    endSem,
    pdfUrl,
});

// Replace the old pyqsData with the updated newData
const newpyqsData = newData;
console.log(course.pyqs);

// Custom function to stringify JSON without quotes around keys
function stringifyWithoutQuotes(obj: any, indent = 0): any{
    if (Array.isArray(obj)) {
        return '[' + obj.map(item => stringifyWithoutQuotes(item, indent + 2)).join(', ') + ']';
    } else if (typeof obj === 'object' && obj !== null) {
        return '{\n' + Object.entries(obj).map(([key, value]) => ' '.repeat(indent + 2) + key + ': ' + stringifyWithoutQuotes(value, indent + 2)).join(',\n') + '\n' + ' '.repeat(indent) + '}';
    } else {
        return JSON.stringify(obj);
    }
}

// Convert the newData to a JSON string without quotes around keys
const jsonString = stringifyWithoutQuotes(newpyqsData, 4);

// Write the JSON string to the file with TypeScript any type
const fileContent = `export const pyqsData: any[] = ${jsonString};`;

try {
    fs.writeFileSync(pyqsDataFilePath, fileContent);
    console.log('Successfully added new pyq');
} catch (err) {
    console.error('Error writing to pyqsData.ts:', err);
}
