type InputProps = {
  errors?: string[]
  isSubmitting: boolean
}

/**
 * An optimized input.
 *
 * @param props
 * @returns input
 */
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = (
  props
) => {
  return (
    <div>
      <input
        type={props.type ?? "text"}
        {...props}
        disabled={props.isSubmitting}
        className={`rounded-md w-full py-2 px-3 placeholder:text-neutral500 text-neutral600 focus:outline-double focus:outline-neutral100 ${props.className}`}
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
