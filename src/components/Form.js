import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
const Form = (props) => {
    return(
        <div className="container col-5 mx-auto">
            <h1>This is the form</h1>
        <form onSubmit={props.onSubmitHandler}>
            <div>
                <label  htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" value={props.form.name} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.name && props.errors.name.message}</span>
            </div>
            <div className="form group">
                <label htmlFor="name">Ice_cream</label>
                    <input type="text" className="form-control" name="ice_cream" value={props.form.ice_cream} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.ice_cream && props.errors.ice_cream.message}</span>
            </div>
            <div className="form group">
                <label  htmlFor="name">Sauce</label>
                    <input type="text" className="form-control" name="sauce" value={props.form.sauce} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.sauce && props.errors.sauce.message}</span>
            </div>
            <div className="form-group">
                <label  htmlFor="name">Color</label>
                    <input type="text" className="form-control" name="color" value={props.form.color} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.color && props.errors.color.message}</span>
            </div>
            <div className="form group">
                <label for="name">whipped</label>
                    <input type="checkbox" name="whipped" value={props.form.whipped} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.whipped && props.errors.whipped.message}</span> 
                <label for="name">cherry</label>
                    <input type="checkbox" name="cherry" value={props.form.cherry} onChange={props.onChangeHandler} />
                    <span className="alert-danger">{props.errors.cherry && props.errors.cherry.message}</span>
            </div>
                <input type="submit" className="btn btn-primary mt-3"/>
        </form>
        </div>
        )
}
export default Form;