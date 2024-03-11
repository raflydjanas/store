const Button = ({ type, classname, children, onClick = () => {} }) => {

    return (
        <button 
            type={type}
            className={`bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 ${classname} text-white`}
            onClick={onClick} 
            >
            {children}
        </button>
    )
}

export default Button;