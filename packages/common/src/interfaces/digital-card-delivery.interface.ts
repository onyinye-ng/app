/**
 * This model holds records of digital card delivery
 */
export interface DigitalCardDeliveryInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The user ID.
   * Holds record for both business user and store user
   */
  user: string
  /**
   * The business user that added this cart.
   * Only applicable to business orders
   */
  businessUser?: string
  /**
   * The business ID
   */
  business: string
  /**
   * The unique number that ties transactions to orders
   */
  orderNumber: string
  /**
   * The ID of the order details
   */
  batchNumber: string
  /**
   * The card ID
   */
  card: string
  /**
   * The card recipient. Examples:
   * - Email: johndoe@example.com
   * - Fullname and Email: John Doe < johndoe@example.com>
   */
  cardRecipient: string
  /**
   * The message to be rendered on the digital card
   */
  cardMessage: string
  /**
   * The card has been delivered
   */
  isDelivered: boolean
  /**
   * The date the card was added for delivery
   */
  timestamp: Date
}
