/**
 * An optimized H4 component.
 *
 * @param props
 * @returns h4
 */
export const H4: React.FC<JSX.IntrinsicElements["h4"]> = (props) => {
  return (
    <h4
      {...props}
      className={`text-[1.75rem] leading-[2.125rem] tracking-[-2%] ${props.className}`}
    >
      {props.children}
    </h4>
  )
}
