import { useEffect } from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { isUserLogued, logout } from '@/auth/congnito'

const LoguedUser = () => {
    const router = useRouter()

    useEffect(() => {
        const validateUserLogin = async () => {
            const user = await isUserLogued()
            if (!user) {
                console.log('No hay usuario logueado')
                router.replace('/')
            } else {
                console.log('Hay usuario logueado')
            }
        }

        validateUserLogin()
    }, [router])

    const signOut = async () => {
        await logout()
        router.replace('/')
    }

    return (
        <div>
            <h1>Solo usuarios logueado</h1>
            {/* <Link href='/'>Home</Link> */}

            <button onClick={signOut}>Logout</button>
        </div>
    )
}

export default LoguedUser
