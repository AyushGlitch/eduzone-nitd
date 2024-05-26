-- AlterTable
ALTER TABLE "branches" ALTER COLUMN "branchId" DROP DEFAULT;
DROP SEQUENCE "branches_branchId_seq";

-- AlterTable
ALTER TABLE "degrees" ALTER COLUMN "degreeId" DROP DEFAULT;
DROP SEQUENCE "degrees_degreeId_seq";
