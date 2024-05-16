import React, { useEffect, useState } from 'react';
import './Sign.css';

export default function SignUpForm() {
    const data = { FirstName:"", LastName: "",email: "", password: "" }

    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);
    
    //re-render for alert
    useEffect(() =>{
        console.log('Registerd')
    },[flag])

    function handleData(e) {
        setInputData({ ...setInputData, [e.target.value]: e.target.value })
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();   //used to avoid bydefault clearation of data
        if (!inputData.email || !inputData.password  || !inputData.FirstName || !inputData.LastName) {
            alert("All fiels are maditory");
        }
        else {
            setFlag(true);
        }
    }
    return (
        <>
        <prev>{(flag) ? <h2 className='ui-define' >''{inputData.email} ,Signed Successfully'</h2> : " "}</prev>
      
            <form className='container' onSubmit={handleSubmit}>

                <div className='Header'>
                    <h1>Sign Up</h1>
                </div>

                <div className='inputFiled'>
                    <input type='text' placeholder='Enter your First Name' name='first-name' value={inputData.FirstName} 
                    onChange={handleData}></input>
                </div>

                <div className='inputFiled'>
                    <input type='text' placeholder='Enter your last name' name='Last-name' value={inputData.LastName} 
                    onChange={handleData}></input>
                </div>

                <div className='inputFiled'>
                    <input type='text' placeholder='Enter your Email' name='email' value={inputData.email}
                     onChange={handleData}></input>
                </div>

                <div className='inputFiled'>
                    <input type='Password' placeholder='Enter your password' name='password' value={inputData.password} 
                    onChange={handleData}></input>
                </div>

                {/* <input type='checkbox'>remember me</input> */}
                <p>Forget password</p>

                <div>
                    <button type='submit'>Submit</button>
                </div>
        
            </form>
        </>
    );
}
