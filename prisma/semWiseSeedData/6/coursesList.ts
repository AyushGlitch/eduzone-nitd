interface courseData {
    courseId: string;
    courseName: string;
}

const AIDS6: courseData[] = [];

const CSE6: courseData[] = [
    {
        courseId: "CSBB351",
        courseName: "Compiler Design",
    },
    {
        courseId: "CSBB352",
        courseName: "Theory of App Development",
    },
];

const ECE6: courseData[] = [
    {
        courseId: "ECLB351",
        courseName: "Antenna and Wave Propagation",
    },
    {
        courseId: "ECBB352",
        courseName: "Basics of VLSI",
    },
    {
        courseId: "ECBB353",
        courseName: "Digital Signal Processing",
    },
];

const EE6: courseData[] = [
    {
        courseId: "EEB351",
        courseName: "Electric Drives",
    },
    {
        courseId: "CSB310",
        courseName: "Artificial Intelligence & Machine Learning",
    },
    {
        courseId: "HML352",
        courseName: "Engineering Economics and Accountancy",
    },
];

const ME6: courseData[] = [
    {
        courseId: "MELB351",
        courseName: "Optimization & Simulation in Engineering Applications",
    },
    {
        courseId: "MEBB361",
        courseName: "Manufacturing Automation & Robotics",
    },
    {
        courseId: "MEBB362",
        courseName: "Mechatronics Engineering",
    },
    {
        courseId: "MEBB363",
        courseName: "Heating, Ventilation & Air conditioning (HVAC)",
    },
];

const CE6: courseData[] = [
    {
        courseId: "CELB351",
        courseName: "Design of Steel Structures",
    },
    {
        courseId: "CELB352",
        courseName: "Earthquake Engineering",
    },
    {
        courseId: "CELB353",
        courseName: "Geotechnical Engineering-II",
    },
    {
        courseId: "CELB354",
        courseName: "Construction Technology and Project Management",
    },
    {
        courseId: "HMLB359",
        courseName: "Economics for Engineers",
    },
];

const sem6Courses: courseData[] = [
    ...AIDS6,
    ...CSE6,
    ...ECE6,
    ...EE6,
    ...ME6,
    ...CE6,
];
export default sem6Courses;
