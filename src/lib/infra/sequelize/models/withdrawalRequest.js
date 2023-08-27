module.exports = function (sequelize, DataTypes) {
  const WithdrawalRequest = sequelize.define(
    "withdrawal_request",
    {
      withdrawal_request_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      wallet_transaction_reference: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      account_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      account_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      amount: {
        type: DataTypes.BIGINT,
        allowNull: false
      },

      account_bank: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status:{
        type: DataTypes.ENUM("initiated", "pending", "processing", "successful", "failed"),
        allowNull: false
      },

      owner_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "withdrawal_request",
    },
  )

  return WithdrawalRequest
}
