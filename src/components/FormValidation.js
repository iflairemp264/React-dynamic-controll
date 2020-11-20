import React from 'react';
import './FormValidation.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
toast.configure()

export default function FormValidation() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        console.log("form Data::",data);
    }
    const notify = () =>{
        toast('basic notification')
    }
    return (
        <div className="formValidationMain">
            <h1>Form validation</h1>
           
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>
                        First Name *
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="first-name-input"
                            placeholder="Enter first name"
                            ref={register({required:true})}
                            />
                            {errors.firstName && "First name is required"}
                    </label>
                    <label>
                        Last Name*
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="last-name-input"
                            placeholder="Enter Last Name"
                            ref={register({required:true,pattern: /^[A-Za-z]+$/i })}
                            />
                            {errors.lastName && "Last name is Require"}                            
                    </label>
                    <label>
                        Email*
                        <input 
                            type="email"
                            className="form-control"
                            name="email"
                            id="email-input"
                            placeholder="Enter Email"
                            ref={register({required:true})}
                            
                            />
                            {errors.email && "Require Valid email"}
                    </label>
                    <label>
                        Age*
                        <input
                            className="form-control"
                            name="age"
                            id="age-input"
                            placeholder="Enter Age"
                            ref={register({ pattern: /\d+/ , required:true })}
                            />
                            {errors.age && 'Please enter number for age.'}
                    </label>
                    <button type="submit" className="btn btn-primary" onClick={notify}>Submit</button>
                </div>
            </form>

        </div>
    )
}



