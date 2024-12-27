import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1735315905500 implements MigrationInterface {
    name = ' $npmConfigName1735315905500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appeal" ("id" SERIAL NOT NULL, "title" character varying, "slug" text NOT NULL, "thumbnailUrl" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f644a99d2dfcff9facb08bd1697" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "content" text NOT NULL, "slug" character varying(255) NOT NULL, "imageUrl" character varying, "publishedDate" date NOT NULL, CONSTRAINT "UQ_d09152c44881b7620e12d6df099" UNIQUE ("slug"), CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "news"`);
        await queryRunner.query(`DROP TABLE "appeal"`);
    }

}
