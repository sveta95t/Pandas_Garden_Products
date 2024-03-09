import styles from "./styles.module.css"
import Img from "../../assets/img/disc.png"
// import styled from "styled-components";
import {useForm} from "react-hook-form"
import { useState } from "react";

const Discount =()=>{ 

const onSubmit =(data) =>{
  setSubmitted(true);
};
const{
  register,
  handleSubmit, 
  formState: {errors}
} = useForm();
 const [isSubmitted, setSubmitted] = useState(false);
 console.log("errors");


return (
    <div className={styles.div_discount}>
      <p className={styles.p_title}>5% off on the first order </p>
        <div className={styles.div_img_form}> 
        <img className={styles.image} src={Img}alt ="img"/>
      <div className={styles.div_Form}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
          <input 
          type="text"
          placeholder="Name" 
          {...register("name", {required: 'this is requiered', minLength: {value: 3, message: "Minimum length is 3 symbols!"},
          maxLength: {value: 10, message: "Maximum length is 20 symbols!"}})}
       />
       <p className={styles.error}>
        {errors.name && <p>{errors.name.message}
        </p>}
        </p>
          <input 
          type="text"
          placeholder="Phone number"
          {...register("Phone number", 
          {required: "this is requiered.",
           minLength: {
            value: 6, meessage: "Min lenght is 6"
          },
          maxLength: {
            value:10,
            message: "Maximum 8 numbers"}})}
          />
           <p className={styles.error}>
            {errors.name && <p> this fiield is required </p>}</p>

         <input 
         type = "text"
         placeholder="Email"
         {...register("Email", 
         {required: "this is required", 
         minLength: {
          value: 7,
          message: "Min lenght is 5"
        },
        maxLength:{
          value:8,
          message: "Maximum is 8"}}
        )} 
        />
         <p className={styles.error}>
         {errors.name && <p> this fiield is required </p>}</p>
         <button> Get a discount </button>
   </form>
   </div>
    </div>
    </div>
 );
 }


export default Discount;

//как работает errors - это обект с ключами 
//где каждый ключ это элеиент из формы 