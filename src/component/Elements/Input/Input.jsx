

const Input = ({ type, placeholder, name }) => {
    
    return (
        <input 
            type={type} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder={placeholder}
            name={name}
        />
    )
}

export default Input;