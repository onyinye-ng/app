/**
 * An optimized H1 component.
 *
 * @param props
 * @returns h1
 */
export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <h1
      {...props}
      className={`text-5xl leading-[3.5rem] tracking-[-4%] ${props.className}`}
    >
      {props.children}
    </h1>
  )
}
