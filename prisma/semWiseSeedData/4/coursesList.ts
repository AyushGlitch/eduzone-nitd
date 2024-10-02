interface courseData {
    courseId: string;
    courseName: string;
}

const CSE4: courseData[] = [
    {
        courseId: "CSBB251",
        courseName: "Computer Architecture and Organization",
    },
    {
        courseId: "CSBB252",
        courseName: "Artificial Intelligence",
    },
    {
        courseId: "CSBB254",
        courseName: "Software Engineering",
    },
    {
        courseId: "HMBB251",
        courseName: "Professional Communication",
    },
    {
        courseId: "ECBB254",
        courseName: "Communication Systems",
    },
];

const AIDS4: courseData[] = [];

const ECE4: courseData[] = [
    {
        courseId: "ECBB251",
        courseName: "Analog Electronics",
    },
    {
        courseId: "ECBB252",
        courseName: "Analog Communication",
    },
    {
        courseId: "ECBB253",
        courseName: "Electronic Measurement and Instrumentation",
    },
    {
        courseId: "CSBB255",
        courseName: "Data Structures",
    },
    {
        courseId: "HMBB251",
        courseName: "Professional Communication",
    },
];

const EE4: courseData[] = [
    {
        courseId: "EEB251",
        courseName: "Electrical Machines-I",
    },
    {
        courseId: "EEB252",
        courseName: "Control Systems",
    },
    {
        courseId: "EEL253",
        courseName: "Power Transmission and Distribution",
    },
    {
        courseId: "ECB206",
        courseName: "Digital Electronics and Logic Design",
    },
    {
        courseId: "EEB254",
        courseName: "Electrical Measurements",
    },
];

const ME4: courseData[] = [
    {
        courseId: "MEBB261",
        courseName: "Kinematics & Dynamics of Machines",
    },
    {
        courseId: "MEBB262",
        courseName: "Heat and Mass Transfer",
    },
    {
        courseId: "MEBB263",
        courseName: "Engineering Metrology & Instrumentation",
    },
    {
        courseId: "MELB251",
        courseName: "Manufacturing Sciences-II",
    },
    {
        courseId: "MELB252",
        courseName: "Design of Machine Elements",
    },
];

const CE4: courseData[] = [
    {
        courseId: "CELB251",
        courseName: "Estimation, Costing and Valuation",
    },
    {
        courseId: "CEBB261",
        courseName: "Transportation Engineering-I",
    },
    {
        courseId: "CEBB262",
        courseName: "Design of Concrete Structures",
    },
    {
        courseId: "CEBB263",
        courseName: "Environmental Engineering-I",
    },
    {
        courseId: "CEBB264",
        courseName: "Hydrology and Irrigation Engineering",
    },
    {
        courseId: "CEBB265",
        courseName: "Surveying",
    },
];

const sem4Courses: courseData[] = [
    ...AIDS4,
    ...CSE4,
    ...ECE4,
    ...EE4,
    ...ME4,
    ...CE4,
];
export default sem4Courses;
