"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1693295973552 = void 0;
class Migration1693295973552 {
    constructor() {
        this.name = 'Migration1693295973552';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "comments" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL DEFAULT '0', "id" character varying NOT NULL, "postId" character varying NOT NULL, "userId" character varying NOT NULL, "comment" character varying NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL DEFAULT '0', "id" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL DEFAULT '0', "id" character varying NOT NULL, "userId" character varying NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }
}
exports.Migration1693295973552 = Migration1693295973552;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5MzI5NTk3MzU1Mi1taWdyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2RiL21pZ3JhdGlvbnMvMTY5MzI5NTk3MzU1Mi1taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxzQkFBc0I7SUFBbkM7UUFDSSxTQUFJLEdBQUcsd0JBQXdCLENBQUE7SUFvQm5DLENBQUM7SUFsQlUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsK1dBQStXLENBQUMsQ0FBQztRQUN6WSxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsb2RBQW9kLENBQUMsQ0FBQztRQUM5ZSxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsd1dBQXdXLENBQUMsQ0FBQztRQUNsWSxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsZ0tBQWdLLENBQUMsQ0FBQztRQUMxTCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsZ0tBQWdLLENBQUMsQ0FBQztRQUMxTCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsNkpBQTZKLENBQUMsQ0FBQztJQUMzTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztRQUNoRyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMseUVBQXlFLENBQUMsQ0FBQztRQUNuRyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMseUVBQXlFLENBQUMsQ0FBQztRQUNuRyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBRUo7QUFyQkQsd0RBcUJDIn0=