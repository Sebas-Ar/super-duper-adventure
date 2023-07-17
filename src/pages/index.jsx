// React
import { useEffect, useState } from 'react'

// Recoil
import { textState } from '@/globalState/atoms'
import { useRecoilValue } from 'recoil'

// componentes
import MainHeader from '@/components/MainHeader'
import MainTitle from '@/components/MainTitle'
import NavBar from '@/components/NavBar'
import SendMQTTMessage from '@/components/sendMQTTMessage'

const Home = () => {
    const [showTitle, setShowTitle] = useState(true)

    const text = useRecoilValue(textState)
    // const setText = useSetRecoilState(textState)

    useEffect(() => {
        console.log('componente montado')
    }, [])

    const toggleTitle = () => {
        setShowTitle(!showTitle)
    }

    return (

        <div>
            <h1>page title: {text}</h1>
            <MainHeader>
                <button onClick={toggleTitle}>toggle title</button>
                {
                    showTitle
                        ? <MainTitle text="RODA" color="red"/>
                        : null
                }

            </MainHeader>

            <NavBar fatherState={showTitle} />

            <SendMQTTMessage />

        </div>
    )
}

export default Home
