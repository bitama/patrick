import React,{useState,useEffect} from "react" 
import Form from "../components/Form"
import axios from "axios"

const Edit = (props) => {
    const [errors,setErrors] = useState({})
    const [form, setForm] = useState({
    name: "",
    ice_cream: "",
    sauce: "",
    color: "",
    whipped: false,
    cherry: false,
    
  });
    useEffect(() => {
        axios.get(`http://localhost:8000/api/sundaes/${props._id}/find`)
        .then(res =>setForm(res.data.sundae))
        .catch(err=>console.log(err))
    },[props._id])
    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]:event.target.type=="checkbox" ? event.target.checked:event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:8000/api/sundaes/${props._id}/update`,form)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors)
                }
                console.log(res)
            })
            
        .catch(err=>console.log(err))
    }
    
    return (
        <div className="App">
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}  errors={errors} form={form}/>
        </div>
    );
}

export default Edit;