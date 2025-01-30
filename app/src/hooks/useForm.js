import { useState } from "react";

const useForm = (initialState) => {
    const [ formData, setFormData ] = useState(initialState);

    const handleInputChange = (e) => {
        const { name , value } = e.target;

        setFormData( (prevState) => ({
            ...prevState , 
            [name] : value
        }));
    };

    return { formData , handleInputChange , setFormData };
};
export default useForm;