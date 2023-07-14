
import { loginUser } from '@/auth/congnito'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSumitForm = async (data) => {
        const user = await loginUser(data)
        if (user) {
            router.push('/logued-user')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSumitForm)}>
                <input type="email" placeholder='email' {...register('email')}/>
                <input type="password" placeholder='password' {...register('password')}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
