/**
 * An optimized text button.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const TextButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading: boolean }
> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <button
      aria-label={props.title}
      {...props}
      disabled={(props.type === "submit" && props.isLoading) || props.disabled}
      className={`p-0 focus:outline-none focus:shadow-none focus:underline active:underline disabled:bg-neutral100 ${props.className}`}
    />
  )
}
