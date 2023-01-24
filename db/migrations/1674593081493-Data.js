module.exports = class Data1674593081493 {
    name = 'Data1674593081493'

    async up(db) {
        await db.query(`CREATE TABLE "rdpx_token_supply_event" ("id" character varying NOT NULL, "index" integer NOT NULL, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "address" text NOT NULL, "supply_amount" numeric NOT NULL, "supply_when_finished" numeric NOT NULL, "root_txn_hash" text NOT NULL, "root_txn_from" text NOT NULL, "root_txn_to" text NOT NULL, "root_txn_input" text NOT NULL, CONSTRAINT "PK_c80976fc956ff2242744daf265f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d588f59bd2f7585120547dd7cc" ON "rdpx_token_supply_event" ("index") `)
        await db.query(`CREATE INDEX "IDX_07a66bf84274e762817bf06916" ON "rdpx_token_supply_event" ("block") `)
        await db.query(`CREATE INDEX "IDX_743934c9a6f34e3ff9ba84a5f3" ON "rdpx_token_supply_event" ("timestamp") `)
        await db.query(`CREATE TABLE "ssov_option_purchase_event" ("id" character varying NOT NULL, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "base_asset" text NOT NULL, "side" text NOT NULL, "periodicity" text NOT NULL, "epoch" numeric NOT NULL, "strike" numeric NOT NULL, "amount" numeric NOT NULL, "premium" numeric NOT NULL, "fee" numeric NOT NULL, "to" text NOT NULL, "sender" text NOT NULL, CONSTRAINT "PK_f2339c2357ad6801a3d6cb2a7a7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ef405221c8598f2ae990034647" ON "ssov_option_purchase_event" ("block") `)
        await db.query(`CREATE INDEX "IDX_d8ea67e59d5415101b8fc432dc" ON "ssov_option_purchase_event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_c4b11ad6e9142c35fa35b2e23e" ON "ssov_option_purchase_event" ("epoch") `)
        await db.query(`CREATE INDEX "IDX_3e529b296af1c471efada7d2a1" ON "ssov_option_purchase_event" ("strike") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "rdpx_token_supply_event"`)
        await db.query(`DROP INDEX "public"."IDX_d588f59bd2f7585120547dd7cc"`)
        await db.query(`DROP INDEX "public"."IDX_07a66bf84274e762817bf06916"`)
        await db.query(`DROP INDEX "public"."IDX_743934c9a6f34e3ff9ba84a5f3"`)
        await db.query(`DROP TABLE "ssov_option_purchase_event"`)
        await db.query(`DROP INDEX "public"."IDX_ef405221c8598f2ae990034647"`)
        await db.query(`DROP INDEX "public"."IDX_d8ea67e59d5415101b8fc432dc"`)
        await db.query(`DROP INDEX "public"."IDX_c4b11ad6e9142c35fa35b2e23e"`)
        await db.query(`DROP INDEX "public"."IDX_3e529b296af1c471efada7d2a1"`)
    }
}
