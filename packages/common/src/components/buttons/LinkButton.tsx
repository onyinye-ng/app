import { Link } from "react-router-dom"

type LinkProps = {
  children: any
  title: string
  className?: string
  to: string
}

/**
 * An optimized link button.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const LinkButton: React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <Link
      aria-label={props.title}
      {...props}
      className={`p-3 px-6 text-center rounded-md focus:outline-none focus:shadow-none hover:opacity-95 active:opacity-95 ${props.className}`}
    />
  )
}
