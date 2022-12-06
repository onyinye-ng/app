/**
 * An optimized P3 component.
 *
 * @param props
 * @returns p
 */
export const P3: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`text-[1.125rem] leading-[1.35rem] tracking-[0%] ${props.className}`}
    >
      {props.children}
    </p>
  )
}
