import express from "express"
// import { paymentRouter } from "../../../modules/payments/infra/http/routes"
// import { walletRouter } from "../../../modules/wallet/infra/htpp/routes"
// import { webhooksRouter } from "../../../modules/webhooks/infra/http/routes"

const v1Router = express.Router()

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" })
})

// v1Router.use("/payment", paymentRouter)
// v1Router.use("/wallet", walletRouter)
// v1Router.use("/webhooks", webhooksRouter)

export { v1Router }
