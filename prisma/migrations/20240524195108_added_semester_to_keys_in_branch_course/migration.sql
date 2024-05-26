/*
  Warnings:

  - The primary key for the `branchCourse` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "pyqs" DROP CONSTRAINT "pyqs_branchId_courseId_fkey";

-- AlterTable
ALTER TABLE "branchCourse" DROP CONSTRAINT "branchCourse_pkey",
ADD CONSTRAINT "branchCourse_pkey" PRIMARY KEY ("branchId", "courseId", "semester");

-- AddForeignKey
ALTER TABLE "pyqs" ADD CONSTRAINT "pyqs_branchId_courseId_semester_fkey" FOREIGN KEY ("branchId", "courseId", "semester") REFERENCES "branchCourse"("branchId", "courseId", "semester") ON DELETE RESTRICT ON UPDATE CASCADE;
