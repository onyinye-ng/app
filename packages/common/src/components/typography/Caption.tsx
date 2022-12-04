/**
 * An optimized caption component.
 *
 * @param props
 * @returns caption
 */
export const Caption: React.FC<JSX.IntrinsicElements["caption"]> = (props) => {
  return (
    <caption
      {...props}
      className={`text-[0.75rem] leading-[0.875rem] tracking-[0%] ${props.className}`}
    >
      {props.children}
    </caption>
  )
}
