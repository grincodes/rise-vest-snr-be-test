import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1693322452951 implements MigrationInterface {
    name = 'Migration1693322452951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "comment" TO "content"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "content" TO "comment"`);
    }

}
