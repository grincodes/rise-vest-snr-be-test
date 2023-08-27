import { Transaction } from "sequelize/types"

  
export interface IUserRepo {

  createUser()
  saveWalletTransaction(walletTransaction: WalletTransaction, transaction: Transaction)
  updateWalletTransaction(walletTransaction: WalletTransaction, transaction: Transaction)
  getAllWalletTransactionByOwnerId(ownerId: string, page: number, size: number)
  getWalletTransactionByRefernce(ref: string)
  paymentRefExists(paymentReference: string): Promise<boolean>
  createTransaction()
}

export class UserRepo implements IUserRepo {
  private models: any

  DEFAULT_PAGE = 0
  DEFAULT_SIZE = 5

  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    const { models } = this
    return {
      where: {},
      include: [],
      order: [],
      limit: 0,
      offset: 0,
    }
  }

  public async saveWalletTransaction(walletTransaction: WalletTransaction, transaction: Transaction): Promise<void> {
    const WalletTransactionModel = this.models.WalletTransaction
    const rawWalletTransaction = WalletTransactionMap.toPersistence(walletTransaction)

    try {
      await WalletTransactionModel.create(rawWalletTransaction, { transaction })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async updateWalletTransaction(walletTransaction: WalletTransaction, transaction: Transaction): Promise<void> {
    const WalletTransactionModel = this.models.WalletTransaction
    const rawWalletTransaction = WalletTransactionMap.toPersistence(walletTransaction)
    const { wallet_transaction_id, ...updateDetails } = rawWalletTransaction

    try {
      await WalletTransactionModel.update(
        updateDetails,
        {
          where: { wallet_transaction_id: wallet_transaction_id },
        },
        { transaction },
      )
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async getAllWalletTransactionByOwnerId(ownerId: string, page: number = this.DEFAULT_PAGE, size: number = this.DEFAULT_SIZE): Promise<WalletTransaction[]> {
    const { limit, offset } = this.getPagination(page, size)
    const baseQuery = this.createBaseQuery()
    baseQuery.limit = limit
    baseQuery.offset = offset
    baseQuery.order = [["updatedAt"]]
    baseQuery.where["owner_id"] = ownerId

    const walletTransactions = (await this.models.WalletTransaction.findAll(baseQuery)).map((record) => record.toJSON())
    return walletTransactions.map((p) => WalletTransactionMap.toView(p))
  }

  public async getWalletTransactionByRefernce(ref: string): Promise<WalletTransaction> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["wallet_transaction_reference"] = ref
    const walletTrans = await this.models.WalletTransaction.findOne(baseQuery)
    return WalletTransactionMap.toDomain(walletTrans)
  }

  public async paymentRefExists(paymentReference: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["payment_reference"] = paymentReference
    const transaction = await this.models.WalletTransaction.findOne(baseQuery)

    return !!transaction === true
  }

  getPagination = (page: number = this.DEFAULT_PAGE, size: number = this.DEFAULT_SIZE) => {
    const limit = +size
    const offset = page * limit

    return { limit, offset }
  }

  public async createTransaction() {
    const t = await this.models.sequelize.transaction()
    return t
  }
}
