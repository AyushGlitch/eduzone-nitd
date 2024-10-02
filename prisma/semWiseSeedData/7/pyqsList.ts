interface pyqsData {
    academicYear: string;
    endSem: boolean;
    pdfUrl: string;
}

interface pyqsListData {
    semester: number;
    courseId: string;
    pyqs: {
        create: pyqsData[];
    };
}

export const aidsSem7Pyqs: pyqsListData[] = [];

export const cseSem7Pyqs: pyqsListData[] = [];

export const eceSem7Pyqs: pyqsListData[] = [
    {
        semester: 7,
        courseId: "ECBB401",
        pyqs: {
            create: [
                // {
                //     academicYear: "2023-24",
                //     endSem: false,
                //     pdfUrl: "https://drive.google.com/file/d/1AjOOpD8PkmLoQIv0eXhB0IrWIy4YmRIL/view?usp=drive_link",
                // },
                {
                    academicYear: "2023-24",
                    endSem: true,
                    pdfUrl: "https://drive.google.com/file/d/17VhGjFD6CKJIk6WhHQzW5XDLk0TlDlAP/view?usp=drive_link",
                },
                {
                    academicYear: "2022-23",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/1K61u0zY7ePPUOFHCN85qlXqXL9qDa8ym/view?usp=drive_link",
                },
                {
                    academicYear: "2022-23",
                    endSem: true,
                    pdfUrl: "https://drive.google.com/file/d/1cAeMaC9yWb_7U8bH_FqR4uHtck5gcfpi/view?usp=drive_link",
                },
                {
                    academicYear: "2021-22",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/1VUKwRqH8Db6vHif7wd9z5DB-918KQgJm/view?usp=drive_link",
                },
                {
                    academicYear: "2021-22",
                    endSem: true,
                    pdfUrl: "https://drive.google.com/file/d/1LpomEBvWJYk10L3XBDhKitn8A9xuFn_1/view?usp=drive_link",
                },
            ],
        },
    },
];

export const eeSem7Pyqs: pyqsListData[] = [
    {
        semester: 7,
        courseId: "EEL401",
        pyqs: {
            create: [
                // {
                //     academicYear: "2023-24",
                //     endSem: false,
                //     pdfUrl: "https://drive.google.com/file/d/1pGKrO8HX4W2wNJ_I1D8SQlonBAV5JhZj/view?usp=drive_link",
                // },
                // {
                //     academicYear: "2023-24",
                //     endSem: true,
                //     pdfUrl: "https://drive.google.com/file/d/1jD8XjwBFS-lBWMn0xqiyUf-FVV09WcSy/view?usp=drive_link",
                // },
                {
                    academicYear: "2022-23",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/1TyJ6LJM-mDDM1unCPGyHw4lwWCxWNrQu/view?usp=drive_link",
                },
                // {
                //     academicYear: "2022-23",
                //     endSem: true,
                //     pdfUrl: "https://drive.google.com/file/d/1T3O6nEO40o1wZI1iU7vAh6Frzll7CrgO/view?usp=drive_link",
                // },
                {
                    academicYear: "2021-22",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/1-KZ1R24MVic89cA2sReAA0_979uwHaa5/view?usp=drive_link",
                },
                {
                    academicYear: "2021-22",
                    endSem: true,
                    pdfUrl: "https://drive.google.com/file/d/1g8nZgEehILq02ZCAAx39zRJk_3vA-pxS/view?usp=drive_link",
                },
            ],
        },
    },
    {
        semester: 7,
        courseId: "EEL402",
        pyqs: {
            create: [
                // {
                //     academicYear: "2023-24",
                //     endSem: false,
                //     pdfUrl: "https://drive.google.com/file/d/1pGKrO8HX4W2wNJ_I1D8SQlonBAV5JhZj/view?usp=drive_link",
                // },
                // {
                //     academicYear: "2023-24",
                //     endSem: true,
                //     pdfUrl: "https://drive.google.com/file/d/1jD8XjwBFS-lBWMn0xqiyUf-FVV09WcSy/view?usp=drive_link",
                // },
                {
                    academicYear: "2022-23",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/10QAbYlqQzA3pQnfSlgxkPK9EyW3gH74t/view?usp=drive_link",
                },
                // {
                //     academicYear: "2022-23",
                //     endSem: true,
                //     pdfUrl: "https://drive.google.com/file/d/1T3O6nEO40o1wZI1iU7vAh6Frzll7CrgO/view?usp=drive_link",
                // },
                {
                    academicYear: "2021-22",
                    endSem: false,
                    pdfUrl: "https://drive.google.com/file/d/1fMoSZJWMKKrh-2EFKGJ4h7N3q052xYcX/view?usp=drive_link",
                },
                {
                    academicYear: "2021-22",
                    endSem: true,
                    pdfUrl: "https://drive.google.com/file/d/1c4ylz6-OnFgX7cWfdkgSDOQ_7j3TRL5N/view?usp=drive_link",
                },
            ],
        },
    },
];

export const meSem7Pyqs: pyqsListData[] = [];

export const ceSem7Pyqs: pyqsListData[] = [];
