/**
 * An optimized H2 component.
 *
 * @param props
 * @returns h2
 */
export const H2: React.FC<JSX.IntrinsicElements["h2"]> = (props) => {
  return (
    <h2
      {...props}
      className={`text-[2.4375rem] leading-[2.5rem] tracking-[-4%] ${props.className}`}
    >
      {props.children}
    </h2>
  )
}
