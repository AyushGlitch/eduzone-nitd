interface courseData {
    courseId: string;
    courseName: string;
}

const CSE3: courseData[] = [
    {
        courseId: "CSBB202",
        courseName: "Design and Analysis of Algorithms",
    },
    {
        courseId: "CSBB203",
        courseName: "Operating System",
    },
    {
        courseId: "CSBB204",
        courseName: "Database Management Systems",
    },
    {
        courseId: "MALB202",
        courseName: "Probability and Statistics",
    },
    {
        courseId: "ECBB206",
        courseName: "Digital Electronics and Logic Design",
    },
];

const AIDS3: courseData[] = [];

const ECE3: courseData[] = [
    {
        courseId: "ECBB201",
        courseName: "Solid State Devices",
    },
    {
        courseId: "ECLB202",
        courseName: "Network Analysis and Synthesis",
    },
    {
        courseId: "ECLB203",
        courseName: "Electromagnetic Theory",
    },
    {
        courseId: "ECBB204",
        courseName: "Signals and Systems",
    },
    {
        courseId: "ECLB205",
        courseName: "Control Theory",
    },
];

const EE3: courseData[] = [
    {
        courseId: "MAB203",
        courseName: "Numerical & Engineering Optimization Methods",
    },
    {
        courseId: "CSB231",
        courseName: "Data Structures",
    },
    {
        courseId: "EEL201",
        courseName: "Electromagnetic Field Theory",
    },
    {
        courseId: "ECB207",
        courseName: "Electronic Devices and Circuits",
    },
    {
        courseId: "EEB202",
        courseName: "Signal & Systems",
    },
];

const ME3: courseData[] = [
    {
        courseId: "MALB201",
        courseName: "Engineering Mathematics-II",
    },
    {
        courseId: "MEBB211",
        courseName: "Fluid Mechanics",
    },
    {
        courseId: "MELB201",
        courseName: "Engineering Thermodynamics",
    },
    {
        courseId: "MELB202",
        courseName: "Mechanics of Materials",
    },
    {
        courseId: "MEBB212",
        courseName: "Manufacturing Sciences-I",
    },
];

const CE3: courseData[] = [
    {
        courseId: "CELB201",
        courseName: "Structural Analysis - I",
    },
    {
        courseId: "CEBB211",
        courseName: "Fluid Mechanics",
    },
    {
        courseId: "CEBB212",
        courseName: "Concrete Technology",
    },
    {
        courseId: "CEBB213",
        courseName: "Geotechnical Engineering-1",
    },
    {
        courseId: "CEBB214",
        courseName: "Building Planning, Drawing and Construction",
    },
    {
        courseId: "CSBB111",
        courseName: "Computer Programming",
    },
];

const sem3Courses: courseData[] = [
    ...AIDS3,
    ...CSE3,
    ...ECE3,
    ...EE3,
    ...ME3,
    ...CE3,
];
export default sem3Courses;
