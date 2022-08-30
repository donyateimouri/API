/*
*  username: 'kminchelle',
    password: '0lelplR',
*/

import './assets/css/Login.css'

export default function Login() {
    async function loginHandler(event) {
        event.preventDefault();
        let result = await fetch('http://localhost:3031/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: event.target.elements.username.value,
                password: event.target.elements.password.value,
            })
        })
        let user = await result.json();
        if(user.id){
            event.target.reset();
            alert(`Wellcome ${user.firstName}`)
        }

    }
    return (
        <section id="login-form">
            <h1>Login Form</h1>
            <form onSubmit={loginHandler}>
                <input type="text" name="username" placeholder='username' />
                <input type="password" name="password" placeholder='password' />

                <button>Login</button>
            </form>
        </section>
    )
}



