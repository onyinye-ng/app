/**
 * This model holds record of all the payments that occured in the application.
 * Both successful and failed payments.
 */
export interface PaymentInterface {
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
   * The business user that created this order.
   * Only applicable to business orders
   */
  businessUser?: string
  /**
   * The email of the user who made payment
   */
  email: string
  /**
   * The payment reference.
   * This is gotten from the unique order number
   */
  reference: string
  /**
   * The domain where payment occured
   * live or test
   */
  domain: string
  /**
   * The amount paid in kobo
   */
  amountPaid: number
  /**
   * The ip address of the device that initiated the payment
   */
  ipAddress: string
  /**
   * The payment channel.
   * card, ussd, bank, qr, etc
   */
  channel: string
  /**
   * The currency of payment
   */
  currency: string
  /**
   * The payment gateway response
   */
  gatewayResponse: string
  /**
   * The status of the payment
   */
  status: "pending" | "success" | "failed"
  /**
   * The date time the payment was processed
   */
  paidAt: Date
  /**
   * The date this record was created
   */
  dateCreated: Date
  /**
   * The date this record was updated
   */
  dateUpdated: Date
}
