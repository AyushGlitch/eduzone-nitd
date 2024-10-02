interface courseData {
    courseId: string;
    courseName: string;
}

const CSE2: courseData[] = [
    {
        courseId: "CSBB151",
        courseName: "Data Structures",
    },
    {
        courseId: "CSLB152",
        courseName: "Discrete Structures",
    },
    {
        courseId: "CSLB153",
        courseName: "System Programming",
    },
    {
        courseId: "MALB152",
        courseName: "Applied Linear Algebra",
    },
];

const AIDS2: courseData[] = [
    {
        courseId: "ADLB151",
        courseName: "Probability and Statistics",
    },

    {
        courseId: "ADBB152",
        courseName: "Computer Organization and Architecture",
    },

    {
        courseId: "ADBB153",
        courseName: "Data Structures and Algorithms",
    },

    {
        courseId: "ADBB154",
        courseName: "Programming using Python",
    },

    {
        courseId: "ADLB155",
        courseName: "System Programming",
    },
];

const ECE2: courseData[] = [
    {
        courseId: "MALB151",
        courseName: "Linear Algebra and Complex Analysis",
    },
    {
        courseId: "ECLB151",
        courseName: "Basic Communication Systems",
    },
    {
        courseId: "CSBB181",
        courseName: "Problem Solving and Computer Programming",
    },
    {
        courseId: "MEBB162",
        courseName: "Engineering Visualization",
    },
    {
        courseId: "ECBB152",
        courseName: "Digital Electronics & Logic Design",
    },
];

const EE2: courseData[] = [
    {
        courseId: "MAL153",
        courseName: "Ordinary Differential Equation and Transforms",
    },
    {
        courseId: "EEL151",
        courseName: "Network Analysis",
    },
    {
        courseId: "CSB181",
        courseName: "Problem Solving and Computer Programming",
    },
    {
        courseId: "MEL151",
        courseName: "Engineering Mechanics",
    },
    {
        courseId: "EEB152",
        courseName: "Electrical Workshop",
    },
];

const ME2: courseData[] = [
    {
        courseId: "MEBB161",
        courseName: "Engineering Materials",
    },
    {
        courseId: "MELB151",
        courseName: "Engineering Mechanics",
    },
    {
        courseId: "MEBB162",
        courseName: "Engineering Visualization",
    },
    {
        courseId: "EEBB161",
        courseName: "Introduction to Electrical & Electronics Engineering",
    },
    {
        courseId: "CELB101",
        courseName: "Environmental Sciences",
    },
];

const CE2: courseData[] = [
    {
        courseId: "CELB106",
        courseName: "Civil Engineering Materials and Construction Technique",
    },
    {
        courseId: "CEBB112",
        courseName: "Mechanics of Solids",
    },
    {
        courseId: "MALB359",
        courseName: "Mathematics for Engineers-II",
    },
    {
        courseId: "CYBB100",
        courseName: "Chemistry for Civil Engineers",
    },
    {
        courseId: "PHBB111",
        courseName: "Engineering Physics",
    },
    {
        courseId: "MEBB163",
        courseName: "Engineering Workshop Practice",
    },
];

const sem2Courses: courseData[] = [
    ...AIDS2,
    ...CSE2,
    ...ECE2,
    ...EE2,
    ...ME2,
    ...CE2,
];
export default sem2Courses;
