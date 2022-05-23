import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
    const [capt, setCapt] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const handleOnChange = ()=>{ setCapt(true)};
  return (
    <React.Fragment>
    
    
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
    <h4 >Adoption Form</h4>
   <div> <label>First name</label>
      <input  type="text" placeholder="First name: *" {...register("First name: *", {required: true, maxLength: 80})} /></div>
      <div> <label>Last name</label>
      <input type="text" placeholder="Last name: *" {...register("Last name: *", {required: true, maxLength: 100})} /></div>
     <div><label></label>Adress Line 1:<input type="text" placeholder="Adress Line 1: *" {...register("Adress Line 1: *", {required: true})} /><label>Adress Line 2:</label>
      <input type="text" placeholder="Adress Line 2:" {...register("Adress Line 2:", {})} ></input></div>
     <div> <label>City:</label> <input type="text" placeholder="City: *" {...register("City: *", {required: true})} /></div>
     <div><label>State:</label> <select {...register("State: * ", { required: true })}>
        <option value="Romania">Romania</option>
        <option value="California">California</option>
        <option value="UK">UK</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
      </select></div>
      
     <div><label>Phone number: *</label> <input type="tel" placeholder="Phone number : *" {...register("Phone number : *", {required: true, maxLength: 12})} /></div>
     <div><label>Email address : *</label> <input type="email" placeholder="Email address : *" {...register("Email address : *", {required: true, pattern: "//^+$//i"})} /> </div>

     <div><label>Do you have children ? *</label>
     <div>
     <input {...register("Do you have children ?", { required: true })} type="radio" value="Yes" /><label>Yes</label>
    <input {...register("Do you have children ?", { required: true })} type="radio" value="No" /><label>No</label>
    </div></div>
    <div><label>If you answered "Yes", please tell us a little bit about their experience and confort level around animals.</label></div>
    
    <div>
    <textarea {...register("experience and confort level around animals", {})} />
    </div>
    
      
    <div><label>Do you have other pets at home ? *</label>
   <div>   <input {...register("Do you have other pets at home ? *", { required: true })} type="radio" value="Yes" /> <label>Yes</label>
      <input {...register("Do you have other pets at home ? *", { required: true })} type="radio" value="No" /> <label>No</label>
      </div>
      </div>
      <div><label>If you answered "Yes", please describe their experience and confort level around other animals.</label></div>
      <div>
    <textarea {...register("experience and confort level around other animals", {})} />
    </div>
      <div><label>Fields marked with * are mandatory</label></div>
      <div><ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={handleOnChange}
    theme='dark'
  /></div>
      <div><input type="submit"  disabled={!capt} onClick={console.log('The adoption form is ready .')}/></div>
    </form>
    
    <Footer />
    </React.Fragment>
  )
}

export default Form


