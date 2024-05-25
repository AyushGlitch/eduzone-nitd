// export const degreesData: any[] = [
//     {
//         data: {
//             degreeName: "B.Tech",
//             numOfSems: 8,
//             branches: {
//                 create: [
//                     {
//                         branchName: "CSE",
//                         branchCourse: {
//                             create: [
//                                 {
//                                     semester: 1,
//                                     course: {
//                                         create: {
//                                             courseId: "CSE101",
//                                             courseName: "Introduction to Programming"
//                                         }
//                                     },
//                                     pyqs: {
//                                         create: [
//                                             {
//                                                 academicYear: "2020-21",
//                                                 endSem: true,
//                                                 pdfUrl: "https://example.com"
//                                             },
//                                             {
//                                                 academicYear: "2020-21",
//                                                 endSem: false,
//                                                 pdfUrl: "https://example.com"
//                                             }
//                                         ]
//                                     }
//                                 },
//                                 {
//                                     semester: 2,
//                                     course: {
//                                         create: {
//                                             courseId: "CSE201",
//                                             courseName: "Data Structures"
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }
//         }
//     }
// ]



export const coursesData: any[] = [
    {
        courseId: "CSE101",
        courseName: "Introduction to Programming",
    },
    {
        courseId: "CSE201",
        courseName: "Data Structures",
    }
]


export const degreesData2: any[] = [
    {
        data: {
            degreeName: "B.Tech",
            numOfSems: 8,
            branches: {
                create: [
                    {
                        branchName: "CSE",
                        branchCourse: {
                            create: [
                                {
                                    semester: 1,
                                    courseId: "CSE101",
                                    pyqs: {
                                        create: [
                                            {
                                                academicYear: "2020-21",
                                                endSem: true,
                                                pdfUrl: "https://example.com"
                                            },
                                            {
                                                academicYear: "2020-21",
                                                endSem: false,
                                                pdfUrl: "https://example.com"
                                            }
                                        ]
                                    }
                                },
                                {
                                    semester: 2,
                                    courseId: "CSE201"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
]