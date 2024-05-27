/*
  Warnings:

  - You are about to drop the `courseSyllabus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `courseTeachingScheme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "courseSyllabus" DROP CONSTRAINT "courseSyllabus_branchName_fkey";

-- DropForeignKey
ALTER TABLE "courseSyllabus" DROP CONSTRAINT "courseSyllabus_degreeName_fkey";

-- DropForeignKey
ALTER TABLE "courseTeachingScheme" DROP CONSTRAINT "courseTeachingScheme_branchId_fkey";

-- DropForeignKey
ALTER TABLE "courseTeachingScheme" DROP CONSTRAINT "courseTeachingScheme_degreeId_fkey";

-- DropTable
DROP TABLE "courseSyllabus";

-- DropTable
DROP TABLE "courseTeachingScheme";

-- CreateTable
CREATE TABLE "courseSyllabusTeachingScheme" (
    "syllabusId" SERIAL NOT NULL,
    "syllabusUrl" TEXT NOT NULL,
    "teachingSchemeUrl" TEXT NOT NULL,
    "degreeId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,

    CONSTRAINT "courseSyllabusTeachingScheme_pkey" PRIMARY KEY ("syllabusId")
);

-- CreateIndex
CREATE UNIQUE INDEX "courseSyllabusTeachingScheme_branchId_key" ON "courseSyllabusTeachingScheme"("branchId");

-- CreateIndex
CREATE UNIQUE INDEX "courseSyllabusTeachingScheme_degreeId_branchId_key" ON "courseSyllabusTeachingScheme"("degreeId", "branchId");

-- AddForeignKey
ALTER TABLE "courseSyllabusTeachingScheme" ADD CONSTRAINT "courseSyllabusTeachingScheme_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "degrees"("degreeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseSyllabusTeachingScheme" ADD CONSTRAINT "courseSyllabusTeachingScheme_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("branchId") ON DELETE RESTRICT ON UPDATE CASCADE;
