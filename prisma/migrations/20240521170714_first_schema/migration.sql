-- CreateTable
CREATE TABLE "degrees" (
    "degreeId" SERIAL NOT NULL,
    "degreeName" TEXT NOT NULL,
    "numOfSems" INTEGER NOT NULL,

    CONSTRAINT "degrees_pkey" PRIMARY KEY ("degreeId")
);

-- CreateTable
CREATE TABLE "branches" (
    "branchId" SERIAL NOT NULL,
    "branchName" TEXT NOT NULL,
    "degreeId" INTEGER NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("branchId")
);

-- CreateTable
CREATE TABLE "courses" (
    "courseId" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "branchCourse" (
    "branchId" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "branchCourse_pkey" PRIMARY KEY ("branchId","courseId")
);

-- CreateTable
CREATE TABLE "pyqs" (
    "paperId" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "branchId" INTEGER NOT NULL,
    "academicYear" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "endSem" BOOLEAN NOT NULL,
    "pdfUrl" TEXT NOT NULL,

    CONSTRAINT "pyqs_pkey" PRIMARY KEY ("paperId")
);

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "degrees"("degreeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchCourse" ADD CONSTRAINT "branchCourse_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("branchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchCourse" ADD CONSTRAINT "branchCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pyqs" ADD CONSTRAINT "pyqs_branchId_courseId_fkey" FOREIGN KEY ("branchId", "courseId") REFERENCES "branchCourse"("branchId", "courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
