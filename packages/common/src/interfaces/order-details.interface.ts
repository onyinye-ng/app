import { CardInterface } from "./card.interface"

/**
 * This model holds details of the orders made by businesses and store users
 */
export interface OrderDetailsInterface {
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
   * The quantity of cards the business wants
   */
  quantity: number
  /**
   * The design ID
   *
   * This is design the business uploaded for the card
   */
  cardDesign: CardInterface["cardDesign"]
  /**
   * The card type.
   *
   * open: The card can be redeemed at any store
   *
   * closed: The card can only be redeemed at the business owned store or an affiliate's store (default)
   */
  cardType: CardInterface["cardType"]
  /**
   * The currency of the card
   */
  currency: CardInterface["currency"]
  /**
   * The amount the card holds
   */
  amount: CardInterface["amount"]
  /**
   * An option that tells if the card is a physical card
   */
  cardIsPhysical: CardInterface["cardIsPhysical"]
  /**
   * An option that tells if the card is refillable after/before being used up.
   */
  cardIsRefillable: CardInterface["cardIsRefillable"]
  /**
   * The business branch the card is to be delivered to.
   * Only applicable to business orders
   */
  deliveryBranch?: string
  /**
   * The number of cards that have been delivered from this order.
   * Only applicable to digital card orders
   */
  quantityDelivered?: number
  /**
   * The unique number that ties transactions to orders
   */
  orderNumber: string
  /**
   * The status of the order
   *
   * pending: The cards have not been paid for
   *
   * paid: The cards have been paid for
   *
   * processing: The cards are being generated or manufactured
   *
   * packed-and-ready: The cards have been packed and are ready to be delivered
   *
   * out-for-delivery: The cards are currently being delivered
   *
   * delivered: The cards have been delivered
   */
  status: "pending" | "paid" | "processing" | "packed-and-ready" | "out-for-delivery" | "delivered"
  /**
   * The date the order was made
   */
  dateCreated: Date
}
