/**
 *
 * @param id input element id to clear
 */
export const clearInput = (id: string) => {
  const element = document.getElementById(id) as any
  if (element) element.value = ""
}
