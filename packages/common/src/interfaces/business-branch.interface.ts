/**
 * This models holds records of business branches.
 */
export interface BusinessBranchInterface {
  /**
   * The record ID
   */
  id: string
  /**
   * The business ID
   */
  business: string
  /**
   * The branch name
   */
  branchName: string
  /**
   * The country the branch is located at
   */
  country: string
  /**
   * The state the branch is located at in the country
   */
  state?: string
  /**
   * The city the branch is located at in the state
   */
  city?: string
  /**
   * The apartment number of the branch
   */
  apartmentNumber?: string
  /**
   * The street name of the branch
   */
  streetName?: string
  /**
   * The closest notable building or bus stop
   */
  landmark?: string
  /**
   * A proof of branch address
   *
   * This could be an electricity bill, waste bill, etc
   */
  proofOfAddress?: string
}
