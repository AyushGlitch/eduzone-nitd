interface courseData {
    courseId: string;
    courseName: string;
}

const AIDS7: courseData[]= [

]


const CSE7: courseData[]= [
    {
        courseId: "HMLB401",
        courseName: "Management Principles and Practices",
    },
]


const ECE7: courseData[]= [
    {
        courseId: "ECBB401",
        courseName: "RF and Microwave Engineering",
    },
    {
        courseId: "HMLB401",
        courseName: "Management Principles and Practices",
    },
]


const EE7: courseData[]= [
    {
        courseId: "EEL401",
        courseName: "HVDC & FACTS",
    },
    {
        courseId: "EEL402",
        courseName: "Switchgear & Protection",
    },
]


const ME7: courseData[]= [
    {
        courseId: "MELB401",
        courseName: "Additive Manufacturing",
    },
]


const CE7: courseData[]= [
    {
        courseId: "HMLB402",
        courseName: "Fundamentals of Business Analysis",
    },
]


const sem7Courses: courseData[]= [...AIDS7, ...CSE7, ...ECE7, ...EE7, ...ME7, ...CE7]
export default sem7Courses