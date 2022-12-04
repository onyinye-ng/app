type InputProps = {
  errors?: string[]
  isSubmitting: boolean
}

/**
 * An optimized checkbox input.
 *
 * @param props
 * @returns checkbox
 */
export const RadioInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = (
  props
) => {
  return (
    <div>
      <input
        {...props}
        disabled={props.isSubmitting}
        type={props.type ?? "radio"}
        className={`p-2 border-primary600 text-primary600 checked:bg-primary checked:text-primary50 focus:outline-double focus:outline-neutral100 hover:opacity-95 ${props.className}`}
      />
      {props.errors && props.errors.length > 0 && (
        <div className="text-error500 font-medium text-xs mt-1">
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </div>
      )}
    </div>
  )
}
