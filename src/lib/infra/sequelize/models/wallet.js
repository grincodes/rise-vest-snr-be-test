module.exports = function (sequelize, DataTypes) {
  const Wallet = sequelize.define(
    "wallet",
    {
      wallet_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      total_balance: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      available_balance: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      owner_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "wallet",
    },
  )

  return Wallet
}
