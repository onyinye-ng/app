/**
 * This model holds records of all card designed
 */
export interface CardDesignInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The user ID.
   * Holds record for the store user
   */
  user?: string
  /**
   * The business user that added this design.
   * Only applicable to businesses
   */
  businessUser?: string
  /**
   * The business ID
   */
  business?: string
  /**
   * The design title
   */
  title: string
  /**
   * The design category
   */
  category: string
  /**
   * The design is for a physical card
   */
  cardIsPhysical: boolean
  /**
   * The orientation of the card
   *
   * Card can either be in landscape or portrait format.
   * Only applicable to physical cards.
   */
  imageOrientation: "landscape" | "portrait"
  /**
   * The card front design
   */
  cardFrontDesign?: string
  /**
   * The card front design
   */
  cardBackDesign?: string
  /**
   * The card holder front design
   */
  cardHolderFrontDesign?: string
  /**
   * The card holder back design
   */
  cardHolderBackDesign?: string
  /**
   * The digital card design
   */
  digitalCardDesign?: string
  /**
   * An option that indicates that design has been deleted
   */
  isDeleted: boolean
  /**
   * The status of the card design
   */
  status: "pending" | "active"
  /**
   * The time the deisgn was added
   */
  timestamp: Date
}
