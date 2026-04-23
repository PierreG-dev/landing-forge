-- CreateTable
CREATE TABLE "Landing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "logoUrl" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "tagline" TEXT,
    "service1" TEXT,
    "service2" TEXT,
    "service3" TEXT,
    "themeId" TEXT NOT NULL,
    "colorComboId" TEXT NOT NULL,
    "primaryHex" TEXT NOT NULL,
    "secondaryHex" TEXT NOT NULL,
    "fontComboId" TEXT NOT NULL,
    "seed" INTEGER NOT NULL,
    "blocks" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "savedVia" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Landing_slug_key" ON "Landing"("slug");
