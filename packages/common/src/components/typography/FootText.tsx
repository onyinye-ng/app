/**
 * An optimized p component.
 *
 * @param props
 * @returns p
 */
export const FootText: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`text-[0.625rem] leading-[0.75rem] tracking-[2%] ${props.className}`}
    >
      {props.children}
    </p>
  )
}
