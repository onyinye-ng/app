/**
 * This model holds business records
 */
export interface BusinessInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The unique business ID
   */
  businessId: string
  /**
   * The business profile
   */
  profile: {
    /**
     * The business name
     */
    businessName: string
    /**
     * The business bio info
     */
    businessBio?: string
    /**
     * The business industry
     */
    industry: string
    /**
     * The business category
     */
    category: string
    /**
     * The country the business was registered in
     */
    country: string
    /**
     * The staff size of the business
     */
    staffSize?: string
    /**
     * The business logo
     */
    businessLogo?: string
    /**
     * Business legal details
     */
    legal?: {
      /**
       * Business is a registered business
       */
      businessIsRegistered: boolean
      /**
       * The legal business name
       */
      legalBusinessName: string
      /**
       * The type of business registration
       */
      registrationType: string
    }
  }
  /**
   * Business contact details
   */
  contact?: {
    /**
     * Business general email
     */
    generalEmail: string
    /**
     * Business support email
     */
    supportEmail: string
    /**
     * Business dispute email
     */
    disputeEmail: string
    /**
     * Business telephone number
     */
    telephone: string
    /**
     * Business website
     */
    website: string
    /**
     * Business twitter social account
     */
    twitter: string
    /**
     * Business facebook social account
     */
    facebook: string
    /**
     * Business intagram social account
     */
    instagram: string
  }
  /**
   * Business pay-out bank details
   */
  payoutBankDetails?: {
    /**
     * Business bank ID
     */
    bankId: number
    /**
     * The bank code gotten from Paystack
     */
    bankCode: string
    /**
     * Business bank name
     */
    bankName: string
    /**
     * Business account number
     */
    accountNumber: string
    /**
     * Business account name
     */
    accountName: string
    /**
     * The recipient code assigned by Paystack
     */
    recipientCode: string
  }
  /**
   * Date business was added
   */
  dateCreated: Date
  /**
   * Business is closed
   */
  businessIsClosed: boolean
}
