/**
 * An optimized H6 component.
 *
 * @param props
 * @returns h6
 */
export const H6: React.FC<JSX.IntrinsicElements["h6"]> = (props) => {
  return (
    <h6
      {...props}
      className={`text-[1.1875rem] leading-[1.4375rem] tracking-[-2%] ${props.className}`}
    >
      {props.children}
    </h6>
  )
}
