import { CardDesignInterface } from "./card-design.interface"

/**
 * This model holds a record of all the application's configurations
 */
export interface ConfigInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID of the organisation
   */
  businessID: string
  /**
   * Business related configurations
   */
  businesses: {
    /**
     * Business industries record
     */
    industries: {
      /**
       * The industry
       */
      industry: string
      /**
       * The list of categories
       */
      categories: string[]
    }[]
    /**
     * The staff size range
     */
    staffSizeRange: string[]
  }
  /**
   * Card related configurations
   */
  cards: {
    /**
     * The default design templates
     */
    designTemplates: {
      /**
       * The template category
       */
      category: string
      /**
       * The template title
       */
      title: string
      /**
       * The card design ID
       */
      design: CardDesignInterface["id"]
    }[]
    /**
     * Digital cards related configurations
     */
    digitalCards: {
      /**
       * The default message templates
       */
      messageTemplates: {
        /**
         * The template category
         */
        category: string
        /**
         * The template title
         */
        title: string
        /**
         * The message template
         */
        template: string
      }[]
    }
    /**
     * Minimum amount set for card
     */
    minimumAmount: number
    /**
     * Minimum amount set for card
     */
    maximumAmountForUnRegisteredBusiness: number
    /**
     * Minimum amount set for card
     */
    maximumAmountForRegisteredBusiness: number
  }
  /**
   * Order related configurations
   */
  orders: {
    /**
     * The order range for unregistered businesses
     */
    orderRangeForUnRegisteredBusinesses: number[]
    /**
     * The order range for registered businesses
     */
    orderRangeForRegisteredBusinesses: number[]
    /**
     * The order range for store users
     */
    orderRangeForStoreUsers: number[]
    /**
     * The order range for digital cards by businesses
     */
    orderRangeForDigitalCards: number[]
    /**
     * The minimum digital cards that can be ordered by store users
     */
    minimumDigitalCardOrderForStoreUsers: number
  }
  /**
   * Billing related configurations
   */
  billings: {
    /**
     * Billing configurations that are card related
     */
    cards: {
      /**
       * Cost of manufacturing a phyical card
       */
      costOfCardManufacture: number
      /**
       * Cost percentage for maintaining business cards for different amount
       */
      percentageforBusinessCardMaintenance: {
        /**
         * Minimum amount
         */
        minAmount: number
        /**
         * Maximum amount
         */
        maxAmount: number
        /**
         * Percentage
         */
        percentage: number
      }[]
      /**
       * Cost percentage for maintaining Onyinye Cards
       */
      percentageforOnyinyeCardMaintenance: number
    }
    /**
     * Cost percentage for indexing business in Store
     */
    percentageforIndexingBusinessInStore: number
    /**
     * Businesses should be charged for delivery
     */
    chargeBusinessesForDeliveryFee: boolean
    /**
     * Store users should be charged for delivery
     */
    chargeStoreUsersForDeliveryFee: boolean
    /**
     * The range of delivery fees for different states and cities
     */
    deliveryFee: {
      /**
       * The shipping country
       */
      country: string
      /**
       * The shipping state
       */
      state: string
      /**
       * The shipping city
       */
      city: string
      /**
       * The delivery fee
       */
      amount: number
    }[]
    /**
     * The vat percentage
     */
    vatPercentage: number
  }
}
