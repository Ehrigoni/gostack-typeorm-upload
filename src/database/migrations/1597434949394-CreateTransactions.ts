/* eslint-disable import/prefer-default-export */
import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateTransactions1597434949394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy:'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'title',
              type: 'varchar'
            },
            {
              name: 'value',
              type: 'varchar'
            },
            {
              name: 'type',
              type: 'varchar'
            },
            {
              name: 'created_at',
              type: 'varchar'
            },
            {
              name: 'updated_at',
              type: 'varchar'
            }
          ]
        }
      ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transactions');
    }

}
