/**
 * This model holds user account records.
 *
 * This record holds for merchants, merchant users, administrators and store users.
 */
export interface UserInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * User's first name
   */
  firstname: string
  /**
   * User's last name
   */
  lastname: string
  /**
   * User's telephone number
   */
  telephone?: string
  /**
   * User's email
   */
  email: string
  /**
   * User's password
   */
  password: string
  /**
   * User registered with single sign-on
   */
  isSSO: boolean
  /**
   * User is an admin
   */
  isAdmin: boolean
  /**
   * User's admin role.
   *
   * user: A regular user
   *
   * admin: A regular administrator
   *
   * super-admin: The singular super administrator
   */
  role?: "super-admin" | "admin" | "user"
  /**
   * User's admin peprmissions
   */
  permissions?: string[]
  /**
   * User enabled 2 factor authentication
   */
  enabled2FA: boolean
  /**
   * User's email is verified
   */
  emailVerified: boolean
  /**
   * User's telephone number is verified
   */
  telephoneVerified: boolean
  /**
   * User verification token
   */
  verificationToken: string
  /**
   * Verification token expiry date
   */
  tokenExpirationDate: Date
  /**
   * Date user was created
   */
  dateCreated: Date
  /**
   * User access has been blocked
   */
  isBlocked: boolean
}
