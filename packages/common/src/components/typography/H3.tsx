/**
 * An optimized H3 component.
 *
 * @param props
 * @returns h3
 */
export const H3: React.FC<JSX.IntrinsicElements["h3"]> = (props) => {
  return (
    <h3
      {...props}
      className={`text-[2.0625rem] leading-[2.5rem] tracking-[-2%] ${props.className}`}
    >
      {props.children}
    </h3>
  )
}
