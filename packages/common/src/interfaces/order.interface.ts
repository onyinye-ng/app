/**
 * This model holds record of all the orders made by businesses and store users
 */
export interface OrderInterface {
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
   * The business ID
   */
  business: string
  /**
   * The unique number that ties payments to orders
   */
  orderNumber: string
  /**
   * The total charge on the card.
   * This could include the:
   * - Total cost of manufacturing each card
   * - Total commision charges for maintaining each card
   */
  subTotal: number
  /**
   * The Value Added Tax on the card
   */
  vatFee: number
  /**
   * The discount value gotten from a coupon code
   */
  discount: number
  /**
   * The amount payable by the business or user after
   * summing subTotal and vat and then subtracting the
   * discount
   */
  total: number
  /**
   * The shipping address where the card is to be delivered to.
   * Only applicable to store orders.
   * Business orders delivery would only show on the order details.
   */
  shipping?: string
  /**
   * The status of the order
   *
   * pending: The cards have not been paid for
   *
   * paid: The cards have been paid for
   */
  paymentStatus: "pending" | "paid"
  /**
   * The date the order was made
   */
  dateCreated: Date
}
