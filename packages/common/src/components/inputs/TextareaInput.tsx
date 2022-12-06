type InputProps = {
  errors?: string[]
  isSubmitting: boolean
}

/**
 * An optimized textarea input.
 *
 * @param props
 * @returns textarea
 */
export const TextareaInput: React.FC<
  React.InputHTMLAttributes<HTMLTextAreaElement> & InputProps
> = (props) => {
  return (
    <div>
      <textarea
        rows={2}
        {...props}
        disabled={props.isSubmitting}
        className={`rounded-sm w-full py-2 px-3 placeholder:text-neutral500 text-neutral600 focus:outline-double focus:outline-neutral100 ${props.className}`}
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
