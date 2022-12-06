import { Link } from "react-router-dom"

type LinkProps = {
  children: any
  title: string
  className?: string
  to: string
}

/**
 * An optimized text link.
 * Pass the `title` props, else `⚠` is returned
 *
 * @param props
 * @returns button
 */
export const TextLink: React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>> = (props) => {
  if (!props["title"]) return <span children={"⚠"} />
  return (
    <Link
      aria-label={props.title}
      {...props}
      className={`p-0 decoration-solid hover:underline focus:underline active:underline ${props.className}`}
    />
  )
}
