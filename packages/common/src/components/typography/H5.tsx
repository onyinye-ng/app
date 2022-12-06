/**
 * An optimized H5 component.
 *
 * @param props
 * @returns h5
 */
export const H5: React.FC<JSX.IntrinsicElements["h5"]> = (props) => {
  return (
    <h5
      {...props}
      className={`text-[1.4375rem] leading-[1.75rem] tracking-[-2%] ${props.className}`}
    >
      {props.children}
    </h5>
  )
}
