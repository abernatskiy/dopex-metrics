import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class RdpxTokenSupplyEvent {
    constructor(props?: Partial<RdpxTokenSupplyEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    index!: number

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("text", {nullable: false})
    address!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supplyAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supplyWhenFinished!: bigint

    @Column_("text", {nullable: false})
    rootTxnHash!: string

    @Column_("text", {nullable: false})
    rootTxnFrom!: string

    @Column_("text", {nullable: false})
    rootTxnTo!: string

    @Column_("text", {nullable: false})
    rootTxnInput!: string
}
