/**
 * This model holds record of all the notifications.
 */
export interface NotificationInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The user ID
   * Only applicable to notifications made for users
   */
  user?: string
  /**
   * The business ID
   * Only applicable to notifications made for businesses
   */
  business?: string
  /**
   * The notification subject
   */
  subject: string
  /**
   * The notification message
   */
  message: string
  /**
   * An admin notification for onyinye administrators
   */
  isAdmin: boolean
  /**
   * The notification has been read
   */
  isRead: boolean
  /**
   * The timestamp of the notfication
   */
  timestamp: Date
}
