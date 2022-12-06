/**
 * This model holds records of all card operations that occur on the card
 * from the time the card was ordered till it is used up or destroyed
 */
export interface CardOperationInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The card ID
   */
  card: string
  /**
   * The business user that triggered the operation
   */
  businessUser: string
  /**
   * The business branch the operation came from
   */
  businessBranch: string
  /**
   * The operation that was carried out on the card
   *
   * created: The card was created by a business
   *
   * ordered: The card was ordered by a store user
   *
   * activated: The card was activated by a business user (i.e sold).
   *
   * checkout: The card was used to pay for a service in the business store
   *
   * destroyed: The card was destroyed
   */
  operation: "created" | "ordered" | "activated" | "checkout" | "destroyed"
  /**
   * The transaction ID
   *
   * This is optional as not all card operations are related to payments
   */
  cardTransaction?: string
  /**
   * The time the operation was carried out
   */
  timestamp: Date
}
