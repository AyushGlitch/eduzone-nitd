export const degreesData: any[] = [
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
                                    course: {
                                        create: {
                                            courseId: "CSE101",
                                            courseName: "Introduction to Programming"
                                        }
                                    },
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
                                    course: {
                                        create: {
                                            courseId: "CSE201",
                                            courseName: "Data Structures"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
]