interface courseData {
    courseId: string;
    courseName: string;
}

const CSE5: courseData[] = [
    {
        courseId: "CSBB301",
        courseName: "Computer Networks",
    },
    {
        courseId: "CSLB302",
        courseName: "Theory of Computation",
    },
    {
        courseId: "CSBB303",
        courseName: "Data Mining",
    },
    {
        courseId: "CSBB304",
        courseName: "Quantum Computing",
    },
];

const AIDS5: courseData[] = [];

const ECE5: courseData[] = [
    {
        courseId: "ECBB301",
        courseName: "Microprocessor and Microcontroller",
    },
    {
        courseId: "ECBB302",
        courseName: "Computer Networks",
    },
    {
        courseId: "ECBB303",
        courseName: "Digital Communication",
    },
    {
        courseId: "ECLB304",
        courseName: "IC Applications",
    },
];

const EE5: courseData[] = [
    {
        courseId: "EEB301",
        courseName: "Electrical Machines-II",
    },
    {
        courseId: "EEL302",
        courseName: "Power System Analysis",
    },
    {
        courseId: "EEB303",
        courseName: "Microprocessors and Microcontrollers",
    },
    {
        courseId: "EEB304",
        courseName: "Power Electronics",
    },
];

const ME5: courseData[] = [
    {
        courseId: "MEBB311",
        courseName: "IC Engines & Gas Turbines",
    },
    {
        courseId: "MEBB312",
        courseName: "Fluid Machinery",
    },
    {
        courseId: "MEBB313",
        courseName: "CAD/CAM",
    },
    {
        courseId: "MEBB314",
        courseName: "Industrial Engineering",
    },
    {
        courseId: "EEBB311",
        courseName: "Control Systems & Engineering",
    },
];

const CE5: courseData[] = [
    {
        courseId: "CELB301",
        courseName: "Structural Analysis -II",
    },
    {
        courseId: "CELB302",
        courseName: "Environmental Engineering - II",
    },
    {
        courseId: "CELB303",
        courseName: "Hydraulic Structures & Open Channel Flow",
    },
    {
        courseId: "CELB304",
        courseName: "Transportation Engineering-II",
    },
    {
        courseId: "CEBB311",
        courseName: "Advanced Surveying",
    },
    {
        courseId: "HMLB302",
        courseName: "Value Education Program",
    },
];

const sem5Courses: courseData[] = [
    ...AIDS5,
    ...CSE5,
    ...ECE5,
    ...EE5,
    ...ME5,
    ...CE5,
];
export default sem5Courses;
