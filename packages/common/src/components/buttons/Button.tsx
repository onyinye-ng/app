import { LoadingIndicator } from "../layouts/StatusBar"

/**
 * An optimized button.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading: boolean }
> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <button
      aria-label={props.title}
      {...props}
      disabled={(props.type === "submit" && props.isLoading) || props.disabled}
      autoFocus={props.isLoading}
      className={`py-[0.875rem] px-[1.125rem] text-center font-semibold rounded-[0.25rem] bg-primary400 text-white hover:bg-primary500 active:bg-primary500 focus:bg-primary500 disabled:bg-primary400/20 focus:outline-none focus:shadow-none ${props.className}`}
    >
      {props.type === "submit" && props.isLoading ? (
        <LoadingIndicator borderColor="text-white" />
      ) : (
        props.children
      )}
    </button>
  )
}
