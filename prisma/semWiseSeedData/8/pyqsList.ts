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

export const aidsSem8Pyqs: pyqsListData[] = [];

export const cseSem8Pyqs: pyqsListData[] = [];

export const eceSem8Pyqs: pyqsListData[] = [];

export const eeSem8Pyqs: pyqsListData[] = [];

export const meSem8Pyqs: pyqsListData[] = [];

export const ceSem8Pyqs: pyqsListData[] = [];
