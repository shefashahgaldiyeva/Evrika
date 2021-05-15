import React,{ useState} from 'react';
import stil from  "./Form.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Formm() {

    const [user,setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [error,setError] = useState({
        field: '',
        message: ''
    })

    function changeHandle(e, k){
        const d = e.target.value
        setUser({
            ...user,
            [k]: d
        });
        console.log(user) ; 
    }

   
    function submit(s){
        s.preventDefault();
        // if(user.name.trim() !== '' && user.lastName.trim() !== '' && user.email.trim() !== '' && user.password.trim() !== ''){
        //     setError('')
        // }
        // else{
        //     setError('Formu Tamamlayin!')
        // }
     
        if (user.name.trim() === '') {
            setError({
                field: 'name',
                message: "Formu Tamamlayin!"
            })
           
        }
         else  if (user.lastName.trim() === '') {
            setError({
                field: 'lastName',
                message: "Formu Tamamlayin!"
            })
        }
        else  if (user.email.trim() === '') {
            setError({
                field: 'email',
                message: "Formu Tamamlayin!"
            })
        }
        else if (user.password.trim() === '') {
            setError({
                field: 'password',
                message: "Formu Tamamlayin!"
            })
        }
     
    }

    return (
        <div className={stil.main}>
                <form onSubmit={submit}>
                    <div className={stil.sign}>
                        <p>Qeydiyyat / Daxil ol</p>
                    </div>
                    <div className={stil.fbgoogle}>
                        <div className={stil.fb}>
                            <span><FaFacebookF/></span>
                            <span>Facebook</span>
                        </div>
                        <div className={stil.google}>
                            <span><FaGoogle/></span>
                            <span>Google</span>
                        </div>
                    </div>
                    <p>və ya</p>
                    <input style={error.field === 'name' ? {border: "1px solid red"} : null} type='text' placeholder='Ad' value={user.name} onChange={(e) => {changeHandle(e,'name')}}/>
                    { error.field === 'name' ? <i><span>{error.message}</span></i> : null }
                    <input  style={error.field === 'lastName' ?  {border: "1px solid red"} : null} type='text' placeholder='Soyad' value={user.lastName} onChange={(e) => {changeHandle(e,'lastName')}}/>
                    { error.field === 'lastName' ? <i><span>{error.message}</span></i> : null }
                    <input  style={error.field === 'email' ?  {border: "1px solid red"} : null} type='email' placeholder='Email' value={user.email} onChange={(e) => {changeHandle(e,'email')}}/>
                    { error.field === 'email' ? <i><span>{error.message}</span></i> : null }
                    <input  style={error.field === 'password' ?  {border: "1px solid red"} : null} type='password' placeholder='Şifrə seçin' value={user.password} onChange={(e) => {changeHandle(e,'password')}}/>
                    { error.field === 'password' ? <i><span>{error.message}</span></i> : null }
                    <input  style={error.field === 'password' ?  {border: "1px solid red"} : null} type='password' placeholder='Şifrəni təkrarlayın' value={user.password} onChange={(e) => {changeHandle(e,'password')}}/>
                    { error.field === 'password' ? <i><span>{error.message}</span></i> : null }
                    <div className={stil.check}>
                        <input type='checkbox'/>
                        <p>Şərtləri qəbul edirəm</p>
                    </div>
                    <button type='submit'>Hesab Yarat</button>
                </form>
        </div>
    )
}
export default Formm;