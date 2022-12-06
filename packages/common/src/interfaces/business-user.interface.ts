/**
 * This model holds records of business relationship with business users.
 * A user could have records for multiple businesses.
 * A user could also have multiple records for one business.
 * This is because a user could have access to multiple branches within one business; This user usually has the `admin` role
 */
export interface BusinessUserInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The user ID
   */
  user: string
  /**
   * The business ID
   */
  business: string
  /**
   * The business branch where the permissions set for this user applies to
   */
  branch: string
  /**
   * The user's role
   *
   * owner: The owner of the business
   *
   * admin: An administrator to manage the business operations
   *
   * branch-admin: An administrator to manage the business operations in a branch
   *
   * support: A user that handles support
   *
   * cashier: A user that handles checkout from users
   *
   * developer: A user with IT experience that helps integrate the SDK
   */
  role: "owner" | "admin" | "branch-admin" | "support" | "cashier" | "developer"
  /**
   * The user's permissions
   */
  permissions: string[]
  /**
   * The user is active
   */
  isActive: boolean
  /**
   * The date the user was added to the business
   */
  dateAdded: Date
}
