import { Auth } from 'aws-amplify'

export const resgisterUser = async (data) => {
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

export const loginUser = async (data) => {
    try {
        const user = await Auth.signIn(data.email, data.password)
        return user
    } catch (error) {
        console.log(error.message)
    }
}

export const isUserLogued = async () => {
    try {
        const user = await Auth.currentSession()
        return user
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = async () => {
    try {
        await Auth.signOut()
    } catch (error) {
        console.log('error signing out: ', error)
    }
}
