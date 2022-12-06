/**
 * This model holds records of cards
 */
export interface CardInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The unique coupon code generated for each card
   */
  couponCode: string
  /**
   * The business ID of the card.
   * Can be a registered business or Onyinye business.
   */
  business: string
  /**
   * The design ID
   *
   * This is design the business uploaded for the card
   */
  cardDesign: string
  /**
   * The card type.
   *
   * open: The card can be redeemed at any store. i.e Onyinye cards.
   *
   * closed: The card can only be redeemed at the business owned store or an affiliate's store
   */
  cardType: "open" | "closed"
  /**
   * The currency of the card
   */
  currency: "NGN"
  /**
   * The amount the card holds
   */
  amount: number
  /**
   * An option that tells if the card is a physical card
   */
  cardIsPhysical: boolean
  /**
   * An option that tells if the card is refillable after/before being used up.
   */
  cardIsRefillable: boolean
  /**
   * An option that tells if the card was ordered from the store
   */
  orderedFromStore: boolean
  /**
   * The status of the card
   *
   * pending: The card has not been delivered yet
   *
   * inactive: The card has not been activated yet
   *
   * active: The card has been activated and can be used for transactions
   *
   * used: The card's value has been used up and cannot be used for transactions again
   *
   * destroyed: The card was destroyed and cannot be used for transactions
   */
  status: "pending" | "inactive" | "active" | "used" | "destroyed"
  /**
   * The date the card was created
   */
  dateCreated: Date
}
