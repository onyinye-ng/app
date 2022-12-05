export const UserInitials: React.FC<{
  firstname?: string
  lastname?: string
  size?: number
  lighter?: boolean
}> = ({ firstname, lastname, size, lighter }) => {
  return (
    // <div className={`w-[${size}px] h-[${size}px] min-w-[${size}px] text-[calc(${size}px/2)] flex justify-center items-center rounded-full bg-primary100 text-primary800 ${lighter === true ? 'font-bold' : 'font-semibold'}`} >
    <div
      className={`w-8 h-8 min-w-8 text-[16px] flex justify-center items-center rounded-full bg-primary100 text-primary800 ${
        lighter === true ? "font-bold" : "font-semibold"
      }`}
    >
      {firstname?.charAt(0).toUpperCase() ?? firstname?.charAt(0).toUpperCase() ?? "?"}
      {lastname?.charAt(0).toUpperCase() ?? lastname?.charAt(0).toUpperCase() ?? "?"}
    </div>
  )
}
