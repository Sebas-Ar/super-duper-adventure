import { Auth } from 'aws-amplify'

const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)

        try {
            const { user } = await Auth.signUp({
                username: data.email,
                password: data.password,
                attributes: {
                    email: data.email,
                    phone_number: '+573203709957'
                }
            })

            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register
