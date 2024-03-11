

const Label = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="block text-slate-400 text-sm font-bold mb-2">
            {children}
        </label>
    )
}

export default Label;