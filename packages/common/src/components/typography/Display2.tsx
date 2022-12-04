/**
 * An optimized Display component.
 *
 * @param props
 * @returns h1
 */
export const Display2: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <h1
      {...props}
      className={`text-6xl leading-[4.5rem] tracking-[-4%] ${props.className}`}
    >
      {props.children}
    </h1>
  )
}
