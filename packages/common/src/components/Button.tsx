/**
 * An optimized button.
 * Pass the `title` props, else `⚠` is returned.
 *
 * @param props
 * @returns button
 */
export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <button
      aria-label={props.title}
      {...props}
      disabled={props.type === "submit" || props.disabled}
      className={`p-3 px-6 text-center rounded-md focus:outline-none focus:shadow-none hover:opacity-90 active:opacity-90 disabled:bg-grey-light ${props.className}`}
    />
  )
}
