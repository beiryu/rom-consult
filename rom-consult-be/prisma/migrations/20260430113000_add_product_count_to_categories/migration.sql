ALTER TABLE "product_categories"
ADD COLUMN "product_count" INTEGER NOT NULL DEFAULT 0;

UPDATE "product_categories" pc
SET "product_count" = counts.active_count
FROM (
  SELECT "category_id", COUNT(*)::INTEGER AS active_count
  FROM "products"
  WHERE "is_active" = true
  GROUP BY "category_id"
) counts
WHERE counts."category_id" = pc."id";
