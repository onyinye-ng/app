/**
 * This model holds records of a business relationship with another business as an affiliate
 */
export interface BusinessAffiliateInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID
   */
  business: string
  /**
   * The affiliate business ID
   *
   * The affiliate is the business that wants to be added as an affiliate
   */
  affiliate: string
  /**
   * The option that indicates if the affiliate can activate the business cards
   *
   * Defaults to True
   */
  affiliateCanActivateCard: boolean
  /**
   * The option that indicates if the affiliate can checkout the business cards
   */
  affiliateCanCheckoutCard: boolean
  /**
   * The affiliate was requested for affiliation and is yet to accept
   */
  isPending: boolean
  /**
   * The affiliate is active
   */
  isActive: boolean
  /**
   * The date the affiliate was added
   */
  dateAdded: Date
}
