/**
 * This models holds records of business branches.
 */
export interface BusinessStoreInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID
   */
  business: string
  /**
   * Display the business on the store.
   * And allow users to place orders for business cards
   */
  indexBusinessInStore: boolean
  /**
   * A detailed description of the business that is shown to the user
   */
  description: string
  /**
   * Gallery images to be displayed to the users on the business profile
   */
  galleryImages: string[]
  /**
   * The card design to be used for digital cards created on the store
   */
  digitalCardDesign: string
  /**
   * The card design to be used for physical cards created on the store
   */
  physicalCardDesign: string
  /**
   * Business has an online store where the cards can be redeemed
   */
  linkOnlineStore: boolean
  /**
   * The URL of the online store
   */
  onlineStoreUrl: string
}
