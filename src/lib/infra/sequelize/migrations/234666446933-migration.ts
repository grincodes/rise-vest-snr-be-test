"use strict"
import runner from "../runner"

export default {
  up: (queryInterface, Sequelize) => {
    const CREATE_UPDATE_TIMESTAMP = {
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    }

    const CREATE_PAYMENT = () =>
      queryInterface.createTable("payment", {
        payment_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        transaction_reference: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },

        transaction_source: {
          type: Sequelize.ENUM("card", "edk-wallet", "merchant-edk-wallet"),
          allowNull: false,
        },

        transaction_source_reference: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        platform: {
          type: Sequelize.ENUM("api", "mobile", "web"),
          allowNull: false,
        },

        processed_by: {
          type: Sequelize.ENUM("flutterwave", "paystack"),
          allowNull: false,
        },

        amount: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        status: {
          type: Sequelize.ENUM("initiated", "pending", "processing", "successful", "failed"),
          allowNull: false,
        },

        meta_data: {
          type: Sequelize.JSON,
          allowNull: true,
        },

        comments: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        // todo change to uuid reference

        owner_id: {
          type: Sequelize.UUID,
          allowNull: false,
        },

        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_WALLET = () =>
      queryInterface.createTable("wallet", {
        wallet_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        total_balance: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        available_balance: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        version: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        owner_id: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_WALLET_TRANSACTION = () =>
      queryInterface.createTable("wallet_transaction", {
        wallet_transaction_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        wallet_transaction_type: {
          type: Sequelize.ENUM("withdrawal", "deposit", "reversal", "payment", "withdrawal-request", "admin-topup", "initiate-wallet"),
          allowNull: false,
        },

        wallet_transaction_reference: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        payment_reference: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },

        source: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "EDK-WALLET",
        },

        status: {
          type: Sequelize.ENUM("initiated", "pending", "processing", "successful", "failed"),
          allowNull: false,
        },

        amount: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        charges: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },

        balance_before: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        balance_after: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        platform: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        owner_id: {
          type: Sequelize.UUID,
          allowNull: false,
        },

        comment: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_WITHDRAWAL_REQUEST = () =>
      queryInterface.createTable("withdrawal_request", {
        withdrawal_request_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        wallet_transaction_reference: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        account_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        account_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        amount: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },

        account_bank: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        status: {
          type: Sequelize.ENUM("initiated", "pending", "processing", "successful", "failed"),
          allowNull: false,
        },

        owner_id: {
          type: Sequelize.UUID,
          allowNull: false,
        },

        ...CREATE_UPDATE_TIMESTAMP,
      })

    // const CREATE_WITHDRAWAL_REQUEST = () =>
    //   queryInterface.createTable("withdrawal_request", {
    //     withdrawal_request_id: {
    //       type: Sequelize.UUID,
    //       defaultValue: Sequelize.UUIDV4,
    //       allowNull: false,
    //       primaryKey: true,
    //     },

    //     wallet_transaction_reference: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //     },

    //     account_name: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //     },

    //     account_number: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //     },
    //     amount: {
    //       type: Sequelize.BigInt,
    //       allowNull: false,
    //     },

    //     account_bank: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //     },

    //     owner_id: {
    //       type: Sequelize.UUID,
    //       allowNull: false,
    //     },
    //     ...CREATE_UPDATE_TIMESTAMP,
    //   })

    return runner.run([() => CREATE_PAYMENT(), () => CREATE_WALLET(), () => CREATE_WITHDRAWAL_REQUEST(), () => CREATE_WALLET_TRANSACTION()])
  },

  down: (queryInterface, Sequelize) => {
    return runner.run([
      () => queryInterface.dropTable("payment"),
      () => queryInterface.dropTable("wallet"),
      () => queryInterface.dropTable("wallet_transaction"),
      () => queryInterface.dropTable("withdrawal_request"),
    ])
  },
}
