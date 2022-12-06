import { Link } from "react-router-dom"

type LinkProps = {
  children: any
  title: string
  className?: string
  to: string
}

/**
 * An optimized icon link.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const IconLink: React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <Link
      aria-label={props.title}
      {...props}
      className={`p-2 w-auto flex justify-center items-center rounded-full focus:outline-none focus:shadow-none hover:opacity-90 active:opacity-90 ${props.className}`}
    />
  )
}
