/**
 * An optimized icon button.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }
> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <button
      // className={`p-2 flex justify-center items-center rounded-full focus:outline-none focus:shadow-none hover:opacity-95 active:opacity-95 disabled:bg-neutral100 ${props.className}`}
      aria-label={props.title}
      {...props}
      disabled={(props.type === "submit" && props?.isLoading) || props.disabled}
      className={`p-2 flex justify-center items-center rounded-full text-center focus:outline-none focus:shadow-none ${props.className}`}
    />
  )
}
