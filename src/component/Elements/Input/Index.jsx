
import Input from "./Input";
import Label from "./Label";


const InputForm = ({ label, name, placeholder, type  }) => {
    return (
        <div className="mb-6">
         <Label htmlFor={name}>{label}</Label>
         <Input 
            name={name} 
            placeholder={placeholder}
            type={type}
        />
        </div>
    )
}

export default InputForm;