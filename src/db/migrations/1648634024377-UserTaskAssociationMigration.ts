import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTaskAssociationMigration1648634024377
  implements MigrationInterface
{
  name = 'UserTaskAssociationMigration1648634024377';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" ADD "userId" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`,
    );
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
  }
}
