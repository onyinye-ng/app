/**
 * React Hooks triggers requests twice on every page.
 * To prevent it from doing this, call this function.
 * Throttle makes sure a function is called only once within the timeframe.
 * Always unsubscribe from this function by returning the function.
 *
 * @param fn function to be executed
 * @returns unsubscribe function
 */
export const throttle = (fn: Function, unsubscribe?: Function) => {
  const id = setTimeout(() => {
    fn()
  }, 0)

  return () => {
    if (unsubscribe) unsubscribe()
    clearTimeout(id)
  }
}
