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
export const CheckboxInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = (
  props
) => {
  return (
    <div>
      <input
        {...props}
        disabled={props.isSubmitting}
        type={props.type ?? "checkbox"}
        className={`p-2 border-primary600 text-primary600 checked:bg-primary checked:text-primary50 focus:outline-double focus:outline-neutral100 hover:opacity-95 ${props.className}`}
      />
      {props.errors && props.errors.length > 0 && (
        <div className="text-error500 font-medium text-xs mt-1">
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </div>
      )}

      <div className="relative p-4">
        <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
          <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out" />
        </div>
        <div className="z-0">
          <div className="absolute left-0 -top-full bottom-2/3 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
        </div>
      </div>
    </div>
  )
}
