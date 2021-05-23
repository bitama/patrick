import React,{useState} from "react" 
import Form from "../components/Form"
import axios from "axios"

const Main=()=> {
    const [form, setForm] = useState({
    name: "",
    ice_cream: "",
    sauce: "",
    color: "",
    whipped: false,
    cherry: false,
    
    });
    const [errors,setErrors] = useState({})
    
    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]:event.target.type=="checkbox" ? event.target.checked:event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/api/sundaes/create", form)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors)
                }
            })
        .catch(err=>console.log(err))
    }
    
    return (
        <div className="App">
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errors={errors} form={form}/>
        </div>
    );
}

export default Main