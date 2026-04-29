ALTER TABLE "support_tickets"
ADD COLUMN "public_reference" TEXT;

UPDATE "support_tickets"
SET "public_reference" = CONCAT('TK-', UPPER(SUBSTRING(REPLACE("id", '-', '') FROM 1 FOR 10)))
WHERE "public_reference" IS NULL;

ALTER TABLE "support_tickets"
ALTER COLUMN "public_reference" SET NOT NULL;

CREATE UNIQUE INDEX "support_tickets_public_reference_key" ON "support_tickets"("public_reference");
