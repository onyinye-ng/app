/**
 * An optimized label.
 *
 * @param props
 * @returns label
 */
export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return (
    <label
      {...props}
      className={`${props.className}`}
    />
  )
}
