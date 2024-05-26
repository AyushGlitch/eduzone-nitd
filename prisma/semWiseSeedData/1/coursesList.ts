interface courseData {
    courseId: string;
    courseName: string;
}


const CSE1: courseData[]= [
    {
        courseId: "CSBB101",
        courseName: "Problem Solving & Computer Programming",
    },
    {
        courseId: "CSBB102",
        courseName: "Introduction to Computer Systems",
    },
    {
        courseId: "MALB101",
        courseName: "Advanced Calculus",
    },
    {
        courseId: "HMBB101",
        courseName: "Theory and Practices of Human Ethics",
    },
    {
        courseId: "MEBB162",
        courseName: "Engineering Visualization",
    },
]


const AIDS1: courseData[]= [
    {
        courseId: "ADLB101",
        courseName: "Mathematical Foundations for Data Science",
    },
    {
        courseId: "ADLB102",
        courseName: "Discrete Mathematics",
    },
    {
        courseId: "ADBB103",
        courseName: "Computer Programming-I",
    },
    {
        courseId: "ADBB104",
        courseName: "Computer Fundamentals",
    },
    {
        courseId: "PHBB112",
        courseName: "Quantum Physics",
    },
    {
        courseId: "HMLB102",
        courseName: "Theory and Practices of Human Ethics",
    },
]


const ECE1: courseData[]= [
    {
        courseId: "MALB101",
        courseName: "Advanced Calculus",
    },
    {
        courseId: "PHBB101",
        courseName: "Engineering Physics",
    },
    {
        courseId: "ECBB101",
        courseName: "Basics of Electronics and Electrical Engineering",
    },
    {
        courseId: "HMBB101",
        courseName: "Theory and Practices of Human Ethics",
    },
    {
        courseId: "CELB101",
        courseName: "Environmental Sciences",
    },
]


const EE1: courseData[]= [
    {
        courseId: "PHL102",
        courseName: "Electrical Engineering Materials",
    },
    {
        courseId: "EEB102",
        courseName: "Basic Electrical Engineering",
    },
    {
        courseId: "MEBB162",
        courseName: "Engineering Visualization",
    },
    {
        courseId: "MALB101",
        courseName: "Advanced Calculus",
    },
    {
        courseId: "HML101",
        courseName: "Communication Skills",
    },
    {
        courseId: "EVL101",
        courseName: "Environmental Sciences",
    },
]


const ME1: courseData[]= [
    {
        courseId: "MALB101",
        courseName: "Engineering Mathematics-I",
    },
    {
        courseId: "PHBB111",
        courseName: "Engineering Physics",
    },
    {
        courseId: "MEBB111",
        courseName: "Introduction to Manufacturing Technology",
    },
    {
        courseId: "HMLB101",
        courseName: "Communication Skills",
    },
    {
        courseId: "CSBB111",
        courseName: "Computer Programming",
    },
    {
        courseId: "MELB101",
        courseName: "Introduction to Sensors, Actuators & IoT",
    },
]


const CE1: courseData[]= [
    {
        courseId: "CELB102",
        courseName: "Fundamentals of Engineering Mechanics",
    },
    {
        courseId: "CELB103",
        courseName: "Introduction to Civil Engineering",
    },
    {
        courseId: "CELB104",
        courseName: "Introduction to Environmental Studies",
    },
    {
        courseId: "ECBB101",
        courseName: "Basics of Electronics & Electrical Engineering",
    },
    {
        courseId: "MEBB119",
        courseName: "Engineering Graphics",
    },
    {
        courseId: "MALB159",
        courseName: "Mathematics for Engineers-I",
    },
]


const sem1Courses: courseData[]= [...AIDS1, ...CSE1, ...ECE1, ...EE1, ...ME1, ...CE1]
export default sem1Courses