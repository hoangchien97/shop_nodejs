import { Table, Model, PrimaryKey, AutoIncrement, Column, Sequelize, AllowNull, CreatedAt, UpdatedAt, DeletedAt, DataType, BelongsToMany } from "sequelize-typescript";
import { CategoryModel } from "../category/category";


@Table({
    tableName: "products",
})
export class ProductModel extends Model<ProductModel> {
    @PrimaryKey
    @AutoIncrement
    @Column(Sequelize.BIGINT)
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(true)
    @Column(Sequelize.TEXT)
    image: string;

    @AllowNull(true)
    @Column
    description: string;

    @AllowNull(true)
    @Column
    size: string;

    @AllowNull(true)
    @Column
    slug: string;

    @AllowNull(true)
    @Column
    quantity: number;

    @AllowNull(true)
    @Column(Sequelize.BIGINT)
    price: number;

    @AllowNull(true)
    @Column
    cat_id: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

    @DeletedAt
    deleted_at: Date;

    // @BelongsToMany(() => CategoryModel)
}