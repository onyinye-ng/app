/**
 * The business roles
 */
export type Role = "owner" | "admin" | "branch-admin" | "support" | "cashier" | "developer"

/**
 * The permissions attached to roles
 */
export type Permission =
  | "business:manage-business"
  | "business:manage-branches"
  | "business:manage-profile"
  | "business:manage-affiliates"
  | "business:manage-store"
  | "business:manage-users"
  | "business:manage-roles-and-permissions"
  | "cards:manage-cards"
  | "cards:manage-card-designs"
  | "cards:order-cards"
  | "cards:view-card-metrics"
  | "cards:view-card-operations"
  | "cards:view-card-transactions"
  | "orders:track-orders"
  | "orders:view-order-transactions"
  | "billing:manage-payment-cards"
  | "settings:update-api-keys"

/**
 * Roles mapped to permissions
 */
export type Roles = {
  role: Role
  permissions: Record<Permission, boolean>
}

// TODO: Update the AdminRole with more roles
/**
 * The business roles
 */
export type AdminRole = "super-admin" | "admin" | "support" | "cashier" | "developer" | "printer"

// TODO: Update the AdminPermissions with more permissions
/**
 * The permissions attached to roles
 */
export type AdminPermission =
  | "business:manage-business"
  | "business:manage-branches"
  | "business:manage-profile"
  | "business:manage-affiliates"
  | "business:manage-store"
  | "business:manage-users"
  | "business:manage-roles-and-permissions"
  | "cards:manage-cards"
  | "cards:manage-card-designs"
  | "cards:order-cards"
  | "cards:view-card-metrics"
  | "cards:view-card-operations"
  | "cards:view-card-transactions"
  | "orders:track-orders"
  | "orders:view-order-transactions"
  | "billing:manage-payment-cards"
  | "settings:update-api-keys"

/**
 * Admin roles mapped to admin permissions
 */
export type AdminRoles = {
  role: AdminRole
  permissions: Record<AdminPermission, boolean>
}

/**
 * This model holds records of business roles and permissions for their users
 */
export interface BusinessRoleAndPermissionInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID
   */
  business: string
  /**
   * A list of roles mapped to permissions
   */
  roles?: Roles[]
  /**
   * This record is for the organisation's business
   */
  isOrganisationBusiness: boolean
  /**
   * A list of admin roles mapped to admin permissions
   */
  adminRoles?: AdminRoles[]
  /**
   * The date it was last modified
   */
  lastModified: Date
}
