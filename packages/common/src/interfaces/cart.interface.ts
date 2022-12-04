import { CardInterface } from "./card.interface"

/**
 * This model holds record of all the intending orders held in a cart for businesses and for store users
 */
export interface CartInterface {
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
   * The date the cart was created
   */
  dateCreated: Date
  /**
   * The date the cart was last modified
   */
  lastModified: Date
  /**
   * This indicates that the order is deleted
   */
  isDeleted: boolean
}
