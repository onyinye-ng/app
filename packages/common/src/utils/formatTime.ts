export const formatTime = (date: string) => {
  const dateObj = new Date(date)
  const hour = dateObj.getHours()
  const meridiem = hour >= 12 ? "PM" : "AM"
  const currentTime = `${(((hour + 11) % 12) + 1).toString().padStart(2, "0")}:${dateObj
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${meridiem}`
  return currentTime
}
