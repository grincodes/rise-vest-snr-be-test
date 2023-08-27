module.exports = function (sequelize, DataTypes) {
    const WalletTransaction = sequelize.define(
      "wallet_transaction",
      {
        wallet_transaction_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        wallet_transaction_type:{
            type: DataTypes.ENUM('withdrawal','deposit','reversal',"payment","withdrawal-request","admin-topup","initiate-wallet"),
            allowNull: false
        },
  
        wallet_transaction_reference: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        payment_reference:{
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        },
  
        source: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "EDK-WALLET",
        },
  
        amount: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },

        charges: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
          },
      
        status: {
            type: DataTypes.ENUM("initiated", "pending", "processing", "successful", "failed"),
            allowNull: false
        },
  
        balance_before: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
  
        balance_after: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
  
        platform: {
          type: DataTypes.STRING,
          allowNull: false,
        },
  
        owner_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
      },
      {
        timestamps: true,
        underscored: true,
        tableName: "wallet_transaction",
      },
    )
  
    return WalletTransaction
  }
  