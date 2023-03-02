import React from "react";
import { useForm } from "react-hook-form";
import '../App.css'

const Signup = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
return (
    <div className="form-container">
        <div className="form-section">
            <h3>Fiber</h3>
            <h2>Create your Fiber account</h2>
            <form onSubmit={handleSubmit(onSubmit)} action="post">

                <label htmlFor="name">Your Name</label>
                <input {...register("name", { required: true,  maxLength: 20 })} id="name" placeholder="John Doe" />

                <label htmlFor="email">E-mail</label>
                <input type="email" {...register("email")} id="email" placeholder="john@example.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} id="password" placeholder="At least 8 characters" />

                <div className="terms"><input type="checkbox" name="terms" id="terms" />
                <p>By creating an account on Fiber, you agree to the <span>Terms & Conditions.</span></p></div>
                <input type="submit" value="Create Fiber Account" className="btn up fiber-btn"/>
            </form>
            <p className="sign-in">Already have an account? <span>Sign in</span></p>
        </div>

        <div className="image-section">
            <img src="#" className="img-up" alt="examples" />
            <h2>Unparalleled Templates</h2>
            <p>Crafted by a team of professional designers, our templates are eunparalleled in the market.</p> 
            <div className="scroll">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    )
}

export default Signup;