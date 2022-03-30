import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserProfileMigration1648634183689 implements MigrationInterface {
  name = 'UserProfileMigration1648634183689';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying, "state" character varying, "address" character varying, "phno" character varying, CONSTRAINT "PK_f44d0cd18cfd80b0fed7806c3b7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_profile"`);
  }
}
