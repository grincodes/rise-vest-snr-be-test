module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define(
      "payment",
      {
        payment_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },

        transaction_reference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },

        transaction_source: {
            type: DataTypes.ENUM('card','edk-wallet','merchant-edk-wallet'),
            allowNull: false
        },

        transaction_source_reference: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        platform: {
            type: DataTypes.ENUM('api','mobile','web'),
            allowNull: false
        },

  
        processed_by: {
          type: DataTypes.ENUM('flutterwave','paystack'),
          allowNull: false
        },
  
        amount: {
          type: DataTypes.BIGINT,
          allowNull: false
        },


        status: {
            type: DataTypes.ENUM('initiated','pending','processing','succesful','failed'),
            allowNull: false
        },

        meta_data:{
          type: DataTypes.JSON,
          allowNull: true,
        },
        
        comments: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // todo change to uuid reference

        owner_id:{
            type:DataTypes.UUID,
            allowNull: false
        }
  

      },
      {
        timestamps: true,
        underscored: true,
        tableName: "payment"
      }
    )
  
    // Payment.associate = (models) => {
    //   Product.hasOne(models.Product360Video, { foreignKey: "product_id" })
    //   Product.belongsTo(models.ProductCategory, { as: "ProductCategories", foreignKey: "category_id" })
    //   Product.belongsTo(models.Shop, { foreignKey: "shop_id" })
    // }
  
    return Payment
  }
  