/**
 * This model holds record of all payouts to businesses.
 * Both successful and failed payouts.
 */
export interface PayoutInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The payment reference.
   * This is gotten from the payment-remit model
   */
  reference: string
  /**
   * The transfer code.
   * This is gotten from Paystack after initiating the transfer
   */
  transferCode: string
  /**
   * The recipient code of the business.
   * This is gotten from Paystack
   */
  recipient: string
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
   * The currency of payment
   */
  currency: string
  /**
   * The payment source.
   * Defaulted to balance
   */
  source: string
  /**
   * The payment reason
   */
  reason: string
  /**
   * The status of the payment
   */
  status: "pending" | "otp" | "success" | "failed"
  /**
   * The date time the payment was transfered
   */
  transferedAt: Date
  /**
   * The date this record was created
   */
  dateCreated: Date
  /**
   * The date this record was updated
   */
  dateUpdated: Date
}
