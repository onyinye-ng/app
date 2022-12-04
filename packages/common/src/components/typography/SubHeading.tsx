/**
 * An optimized SubHeading component.
 *
 * @param props
 * @returns h6
 */
export const SubHeading: React.FC<JSX.IntrinsicElements["h6"]> = (props) => {
  return (
    <h6
      {...props}
      className={`text-[1.25rem] leading-[1.75rem] tracking-[0%] ${props.className}`}
    >
      {props.children}
    </h6>
  )
}
