import sem1Courses from "./semWiseSeedData/1/coursesList";
import sem2Courses from "./semWiseSeedData/2/coursesList";
import sem3Courses from "./semWiseSeedData/3/coursesList";
import sem4Courses from "./semWiseSeedData/4/coursesList";
import sem5Courses from "./semWiseSeedData/5/coursesList";
import sem6Courses from "./semWiseSeedData/6/coursesList";
import sem7Courses from "./semWiseSeedData/7/coursesList";
import sem8Courses from "./semWiseSeedData/8/coursesList";


interface courseData {
    courseId: string;
    courseName: string;
}


export const coursesData: courseData[] = [
    ...sem1Courses,
    ...sem2Courses,
    ...sem3Courses,
    ...sem4Courses,
    ...sem5Courses,
    ...sem6Courses,
    ...sem7Courses,
    ...sem8Courses,
];
