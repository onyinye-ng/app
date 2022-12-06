import { CardTransactionInterface } from "./card-transaction.interface"

/**
 * This model holds record of all payments remitted to businesses.
 * Both successful and failed payouts.
 */
export interface PaymentRemitInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The payout reference.
   * This number is auto-generated
   */
  reference: string
  /**
   * The business associated with this payout
   */
  business: string
  /**
   * The amount to be remitted in kobo
   */
  amount: number
  /**
   * This payout was triggered by the successful purchase of a business giftcard
   */
  purchaseOfBusinessGiftCard: boolean
  /**
   * The purchase order number that triggered this payout
   */
  purchaseOrderNumber?: string
  /**
   * This payout was triggered by a card transaction completed by a custom card
   */
  transactionWithCustomGiftCard: boolean
  /**
   * The card transaction that triggered this payout
   */
  cardTransaction?: CardTransactionInterface["id"]
  /**
   * A readable text the explains this payout.
   * It references the operation that triggered this payout.
   */
  reason: string
  /**
   * The currency of payment
   */
  currency: string
  /**
   * The status of the remittance
   */
  status: "pending" | "completed"
  /**
   * The date this record was created
   */
  dateAdded: Date
}
