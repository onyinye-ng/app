/**
 * An optimized P2 component.
 *
 * @param props
 * @returns p
 */
export const P2: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`text-[1rem] leading-[1.5rem] tracking-[0%] ${props.className}`}
    >
      {props.children}
    </p>
  )
}
