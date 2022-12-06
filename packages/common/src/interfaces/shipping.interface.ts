/**
 * This models holds records of store user's shipping details.
 */
export interface ShippingInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID
   */
  user: string
  /**
   * The country of delivery
   */
  country: string
  /**
   * The state of delivery in the country
   */
  state: string
  /**
   * The city of delivery in the state
   */
  city: string
  /**
   * The apartment number in the street
   */
  apartmentNumber: string
  /**
   * The street name of the location in the city
   */
  address: string
  /**
   * The closest notable building or bus stop
   */
  landmark?: string
  /**
   * An additional telephone number for contact
   */
  additionalTelepone?: string
}
