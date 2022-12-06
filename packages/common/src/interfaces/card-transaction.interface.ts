/**
 * This model holds records of all payment transactions that occur on the card.
 * The records are added for both successful and failed transactions.
 */
export interface CardTransactionInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The card ID
   */
  card: string
  /**
   * The business user that triggered the transaction
   */
  businessUser: string
  /**
   * The business branch the operation came from
   */
  businessBranch: string
  /**
   * The currency of the card
   */
  currency: "NGN"
  /**
   * The amount to deducted from the card
   */
  amount: number
  /**
   * The code indicates the status of the transaction.
   *
   * 200: Successful transaction
   *
   * 400: Failed transaction
   */
  statusCode: 200 | 400
  /**
   * The readable status of the transaction
   *
   * Payment successful: The transaction was successful
   *
   * Insufficient funds: The amount to be deducted is larger than the amount in the card
   *
   * Card has not been activated: The card cannot be used for transactions because the card has not been activated
   *
   * Card has been destroyed: The card cannot be used for transactions because the card has been destroyed
   *
   * Unknown Error: Every other error
   */
  statusText:
    | "Payment successful"
    | "Card has not been activated"
    | "Insufficient funds"
    | "Card has been destroyed"
    | "Unknown Error"
  /**
   * The time the transaction occured
   */
  timestamp: Date
}
