type PrefixInputProps = {
  affix: JSX.Element
  errors?: string[]
  isSubmitting: boolean
}

/**
 * An optimized input.
 *
 * @param props
 * @returns input
 */
export const PrefixInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & PrefixInputProps
> = (props) => {
  return (
    <div>
      <div
        className={`rounded-sm w-full py-2 px-3 bg-white placeholder:text-neutral500 text-neutral600 focus:outline-double focus:outline-neutral100 flex justify-between ${props.className}`}
      >
        <div className="">{props.affix}</div>
        <input
          type={props.type ?? "text"}
          {...props}
          disabled={props.isSubmitting}
          className={`w-full pl-3 border-none placeholder:text-neutral500 text-neutral600 focus:outline-double focus:outline-neutral100 ${props.className}`}
        />
      </div>
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
