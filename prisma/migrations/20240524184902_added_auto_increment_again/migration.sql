-- AlterTable
CREATE SEQUENCE branches_branchid_seq;
ALTER TABLE "branches" ALTER COLUMN "branchId" SET DEFAULT nextval('branches_branchid_seq');
ALTER SEQUENCE branches_branchid_seq OWNED BY "branches"."branchId";

-- AlterTable
CREATE SEQUENCE degrees_degreeid_seq;
ALTER TABLE "degrees" ALTER COLUMN "degreeId" SET DEFAULT nextval('degrees_degreeid_seq');
ALTER SEQUENCE degrees_degreeid_seq OWNED BY "degrees"."degreeId";
