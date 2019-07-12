import { Table, Model, PrimaryKey, AutoIncrement, Column, Sequelize, AllowNull, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";

@Table({
    tableName : "categories",
})
export class CategoryModel extends Model<CategoryModel> {
    @PrimaryKey
    @AutoIncrement
    @Column(Sequelize.BIGINT)
    id: number;

    @AllowNull(true)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    parent_id: number;

    @AllowNull(false)
    @Column
    slug: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

    // @BelongsTo(() => CategoryModel, { foreignKey : "parent_id"});
}