/*
  Warnings:

  - Added the required column `imageMetadata` to the `TravelPlace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TravelPlace` ADD COLUMN `imageMetadata` JSON NOT NULL;
