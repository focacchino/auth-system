import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Forget() {
const [email, setEmail] = useState('');
const [newPassword, setPassword] = useState('');
const navigator = useNavigate()
useEffect(() => {
    console.log('email is:', email);
    console.log('password is:', newPassword);
}, [email, newPassword])

const handleSubmit = async () => {
const response = await axios.post('http://localhost:2000/forget', {
    email, newPassword
})
if(response.data){
    console.log(response.data);
    navigator('/login')
}
}

return (
    <div className="auth-container-wrapper">
        <div className="auth-container">
        <h1 className="auth-header">Update Password</h1>
        <input type="text" name="email" className="input-box" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" name="newPassword" className="input-box" placeholder="Enter your new password" onChange={(e) => setPassword(e.target.value)}/>
        <button className="submit-btn" onClick={handleSubmit}> Update Password</button>
        </div>
    </div>
)
}

export default Forget;