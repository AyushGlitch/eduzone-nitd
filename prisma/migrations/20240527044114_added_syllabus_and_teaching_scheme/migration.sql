/*
  Warnings:

  - A unique constraint covering the columns `[branchName]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[degreeName]` on the table `degrees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "courseTeachingScheme" (
    "teachingSchemeId" SERIAL NOT NULL,
    "teachingSchemeUrl" TEXT NOT NULL,
    "degreeId" INTEGER NOT NULL,
    "degreeName" TEXT NOT NULL,
    "branchId" INTEGER NOT NULL,
    "branchName" TEXT NOT NULL,

    CONSTRAINT "courseTeachingScheme_pkey" PRIMARY KEY ("teachingSchemeId")
);

-- CreateTable
CREATE TABLE "courseSyllabus" (
    "syllabusId" SERIAL NOT NULL,
    "syllabusUrl" TEXT NOT NULL,
    "degreeId" INTEGER NOT NULL,
    "degreeName" TEXT NOT NULL,
    "branchId" INTEGER NOT NULL,
    "branchName" TEXT NOT NULL,

    CONSTRAINT "courseSyllabus_pkey" PRIMARY KEY ("syllabusId")
);

-- CreateIndex
CREATE UNIQUE INDEX "courseTeachingScheme_branchId_key" ON "courseTeachingScheme"("branchId");

-- CreateIndex
CREATE UNIQUE INDEX "courseTeachingScheme_degreeId_branchId_key" ON "courseTeachingScheme"("degreeId", "branchId");

-- CreateIndex
CREATE UNIQUE INDEX "courseSyllabus_branchName_key" ON "courseSyllabus"("branchName");

-- CreateIndex
CREATE UNIQUE INDEX "courseSyllabus_degreeId_branchId_key" ON "courseSyllabus"("degreeId", "branchId");

-- CreateIndex
CREATE UNIQUE INDEX "branches_branchName_key" ON "branches"("branchName");

-- CreateIndex
CREATE UNIQUE INDEX "degrees_degreeName_key" ON "degrees"("degreeName");

-- AddForeignKey
ALTER TABLE "courseTeachingScheme" ADD CONSTRAINT "courseTeachingScheme_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "degrees"("degreeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseTeachingScheme" ADD CONSTRAINT "courseTeachingScheme_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("branchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseSyllabus" ADD CONSTRAINT "courseSyllabus_degreeName_fkey" FOREIGN KEY ("degreeName") REFERENCES "degrees"("degreeName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseSyllabus" ADD CONSTRAINT "courseSyllabus_branchName_fkey" FOREIGN KEY ("branchName") REFERENCES "branches"("branchName") ON DELETE RESTRICT ON UPDATE CASCADE;
