/*
  Warnings:

  - You are about to drop the column `degreeId` on the `courseSyllabusTeachingScheme` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courseSyllabusTeachingScheme" DROP CONSTRAINT "courseSyllabusTeachingScheme_degreeId_fkey";

-- DropIndex
DROP INDEX "courseSyllabusTeachingScheme_degreeId_branchId_key";

-- AlterTable
ALTER TABLE "courseSyllabusTeachingScheme" DROP COLUMN "degreeId";
