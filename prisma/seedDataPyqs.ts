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

import { aidsSem1Pyqs, ceSem1Pyqs, cseSem1Pyqs, eceSem1Pyqs, eeSem1Pyqs, meSem1Pyqs } from "./semWiseSeedData/1/pyqsList";
import { aidsSem2Pyqs, ceSem2Pyqs, cseSem2Pyqs, eceSem2Pyqs, eeSem2Pyqs, meSem2Pyqs } from "./semWiseSeedData/2/pyqsList";
import { aidsSem3Pyqs, ceSem3Pyqs, cseSem3Pyqs, eceSem3Pyqs, eeSem3Pyqs, meSem3Pyqs } from "./semWiseSeedData/3/pyqsList";
import { aidsSem4Pyqs, ceSem4Pyqs, cseSem4Pyqs, eceSem4Pyqs, eeSem4Pyqs, meSem4Pyqs } from "./semWiseSeedData/4/pyqsList";
import { aidsSem5Pyqs, ceSem5Pyqs, cseSem5Pyqs, eceSem5Pyqs, eeSem5Pyqs, meSem5Pyqs } from "./semWiseSeedData/5/pyqsList";
import { aidsSem6Pyqs, ceSem6Pyqs, cseSem6Pyqs, eceSem6Pyqs, eeSem6Pyqs, meSem6Pyqs } from "./semWiseSeedData/6/pyqsList";
import { aidsSem7Pyqs, ceSem7Pyqs, cseSem7Pyqs, eceSem7Pyqs, eeSem7Pyqs, meSem7Pyqs } from "./semWiseSeedData/7/pyqsList";
import { aidsSem8Pyqs, ceSem8Pyqs, cseSem8Pyqs, eceSem8Pyqs, eeSem8Pyqs, meSem8Pyqs } from "./semWiseSeedData/8/pyqsList";


export const pyqsData: any[] = [
    {
        data: {
            degreeName: "B.Tech",
            compDegreeName: "Bachelor of Technology",
            numOfSems: 8,
            branches: {
                create: [
                    {
                        branchName: "CSE",
                        compBranchName: "Computer Science and Engineering",
                        branchCourse: {
                            create: [
                                ...cseSem1Pyqs,
                                ...cseSem2Pyqs,
                                ...cseSem3Pyqs,
                                ...cseSem4Pyqs,
                                ...cseSem5Pyqs,
                                ...cseSem6Pyqs,
                                ...cseSem7Pyqs,
                                ...cseSem8Pyqs
                            ],
                        },
                    },

                    {
                        branchName: "AIDS",
                        compBranchName: "Artificial Intelligence and Data Science",
                        branchCourse: {
                            create: [
                                ...aidsSem1Pyqs,
                                ...aidsSem2Pyqs,
                                ...aidsSem3Pyqs,
                                ...aidsSem4Pyqs,
                                ...aidsSem5Pyqs,
                                ...aidsSem6Pyqs,
                                ...aidsSem7Pyqs,
                                ...aidsSem8Pyqs,
                            ],
                        },
                    },

                    {
                        branchName: "ECE",
                        compBranchName: "Electronics and Communication Engineering",
                        branchCourse: {
                            create: [                            
                                ...eceSem1Pyqs,
                                ...eceSem2Pyqs,
                                ...eceSem3Pyqs,
                                ...eceSem4Pyqs,
                                ...eceSem5Pyqs,
                                ...eceSem6Pyqs,
                                ...eceSem7Pyqs,
                                ...eceSem8Pyqs,
                            ],
                        },
                    },

                    {
                        branchName: "EE",
                        compBranchName: "Electrical Engineering",
                        branchCourse: {
                            create: [
                                ...eeSem1Pyqs,
                                ...eeSem2Pyqs,
                                ...eeSem3Pyqs,
                                ...eeSem4Pyqs,
                                ...eeSem5Pyqs,
                                ...eeSem6Pyqs,
                                ...eeSem7Pyqs,
                                ...eeSem8Pyqs,
                            ]
                        }
                    },

                    {
                        branchName: "ME",
                        compBranchName: "Mechanical Engineering",
                        branchCourse: {
                            create: [
                                ...meSem1Pyqs,
                                ...meSem2Pyqs,
                                ...meSem3Pyqs,
                                ...meSem4Pyqs,
                                ...meSem5Pyqs,
                                ...meSem6Pyqs,
                                ...meSem7Pyqs,
                                ...meSem8Pyqs,
                            ]
                        }
                    },
                    
                    {
                        branchName: "CE",
                        compBranchName: "Civil Engineering",
                        branchCourse: {
                            create: [                             
                                ...ceSem1Pyqs,
                                ...ceSem2Pyqs,
                                ...ceSem3Pyqs,
                                ...ceSem4Pyqs,
                                ...ceSem5Pyqs,
                                ...ceSem6Pyqs,
                                ...ceSem7Pyqs,
                                ...ceSem8Pyqs,
                            ]
                        }
                    },
                ],
            },
        },
    },
];
