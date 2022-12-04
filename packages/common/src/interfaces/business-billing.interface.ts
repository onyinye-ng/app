/**
 * This model holds business billing credentials records
 */
export interface BusinessBillingInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The unique business ID
   */
  business: string
  /**
   * The authorization code generated by payment service (Paystack) for recurring payment
   */
  authorizationCode: string
  /**
   * The payment channel for the recurring payments
   */
  channel: "card"
  /**
   * The type of card. mastercard, visa or verve
   */
  cardType: string
  /**
   * The initial 6 digits of the card number
   */
  bin: string
  /**
   * The last 4 digits of the card number
   */
  last4: string
  // TODO:
  // Setup a cron job to check for cards that are expiring every month
  // and send out reminder notifications 3 months earlier
  // TODO:
  // Setup a cron job to check for cards that are expiring this month
  // and set their isActive status to false and send out a notification
  /**
   * The expiry month on the card
   */
  expMonth: string
  /**
   * Card token generated by payment service (Paystack)
   */
  expYear: string
  /**
   * Indicates if the card is still active
   */
  isActive: boolean
  /**
   * Date the credentials was added
   */
  dateAdded: Date
}
