/**
 * An optimized P1 component.
 *
 * @param props
 * @returns p
 */
export const P1: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`text-[0.875rem] leading-[1.0625rem] tracking-[0%] ${props.className}`}
    >
      {props.children}
    </p>
  )
}
