import { MigrationInterface, QueryRunner } from 'typeorm';

export class CommunityUserAssociationMigration1648634772670
  implements MigrationInterface
{
  name = 'CommunityUserAssociationMigration1648634772670';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_communities_community" ("userId" uuid NOT NULL, "communityId" uuid NOT NULL, CONSTRAINT "PK_6368016a7df4f4261c80cd54b89" PRIMARY KEY ("userId", "communityId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b4e18e70486964dce0b5df55eb" ON "user_communities_community" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5f4039bc59f09b637582f1614b" ON "user_communities_community" ("communityId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_communities_community" ADD CONSTRAINT "FK_b4e18e70486964dce0b5df55eb5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_communities_community" ADD CONSTRAINT "FK_5f4039bc59f09b637582f1614b1" FOREIGN KEY ("communityId") REFERENCES "community"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_communities_community" DROP CONSTRAINT "FK_5f4039bc59f09b637582f1614b1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_communities_community" DROP CONSTRAINT "FK_b4e18e70486964dce0b5df55eb5"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5f4039bc59f09b637582f1614b"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b4e18e70486964dce0b5df55eb"`,
    );
    await queryRunner.query(`DROP TABLE "user_communities_community"`);
  }
}
