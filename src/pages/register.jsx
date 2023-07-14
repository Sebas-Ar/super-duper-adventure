import { resgisterUser } from '@/auth/congnito'

const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)

        await resgisterUser(data)
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
