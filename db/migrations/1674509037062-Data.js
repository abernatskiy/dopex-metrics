module.exports = class Data1674509037062 {
    name = 'Data1674509037062'

    async up(db) {
        await db.query(`CREATE TABLE "rdpx_token_supply_event" ("id" character varying NOT NULL, "index" integer NOT NULL, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "address" text NOT NULL, "supply_amount" numeric NOT NULL, "supply_when_finished" numeric NOT NULL, "root_txn_hash" text NOT NULL, "root_txn_from" text NOT NULL, "root_txn_to" text NOT NULL, "root_txn_input" text NOT NULL, CONSTRAINT "PK_c80976fc956ff2242744daf265f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d588f59bd2f7585120547dd7cc" ON "rdpx_token_supply_event" ("index") `)
        await db.query(`CREATE INDEX "IDX_07a66bf84274e762817bf06916" ON "rdpx_token_supply_event" ("block") `)
        await db.query(`CREATE INDEX "IDX_743934c9a6f34e3ff9ba84a5f3" ON "rdpx_token_supply_event" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "rdpx_token_supply_event"`)
        await db.query(`DROP INDEX "public"."IDX_d588f59bd2f7585120547dd7cc"`)
        await db.query(`DROP INDEX "public"."IDX_07a66bf84274e762817bf06916"`)
        await db.query(`DROP INDEX "public"."IDX_743934c9a6f34e3ff9ba84a5f3"`)
    }
}
