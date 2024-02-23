import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1708326269541 implements MigrationInterface {
  name = 'CreateTables1708326269541';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`mockpi_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`totalBuget\` int NOT NULL, \`budgetPercentInc\` int NOT NULL, \`coveragePercenttInc\` int NOT NULL, \`year\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdById\` int NULL, \`updatedById\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`locationId\` varchar(255) NOT NULL, \`access\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`mockpi_entity\` ADD CONSTRAINT \`FK_d017408e463cdce68a65e2f0548\` FOREIGN KEY (\`createdById\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`mockpi_entity\` ADD CONSTRAINT \`FK_bea5dc69a5778650e388fff7b4a\` FOREIGN KEY (\`updatedById\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`mockpi_entity\` DROP FOREIGN KEY \`FK_bea5dc69a5778650e388fff7b4a\``);
    await queryRunner.query(`ALTER TABLE \`mockpi_entity\` DROP FOREIGN KEY \`FK_d017408e463cdce68a65e2f0548\``);
    await queryRunner.query(`DROP INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` ON \`user_entity\``);
    await queryRunner.query(`DROP TABLE \`user_entity\``);
    await queryRunner.query(`DROP TABLE \`mockpi_entity\``);
  }
}
