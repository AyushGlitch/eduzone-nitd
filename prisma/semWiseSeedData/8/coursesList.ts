interface courseData {
    courseId: string;
    courseName: string;
}

const AIDS8: courseData[] = [];

const CSE8: courseData[] = [];

const ECE8: courseData[] = [];

const EE8: courseData[] = [];

const ME8: courseData[] = [];

const CE8: courseData[] = [];

const sem8Courses: courseData[] = [
    ...AIDS8,
    ...CSE8,
    ...ECE8,
    ...EE8,
    ...ME8,
    ...CE8,
];
export default sem8Courses;
