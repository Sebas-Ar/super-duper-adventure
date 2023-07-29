// React
import { useEffect, useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// AWS Amplify
import { API, graphqlOperation } from 'aws-amplify'

// GraphQL
import { getRODATest } from '@/graphql/queries'
import { updateRODATest } from '../graphql/mutations'
import { onUpdateRODATest } from '../graphql/subscriptions'


const RealTime = () => {

    const [bikerName, setbikerName] = useState('')

    const { register, handleSubmit } = useForm()

    useEffect(() => {
        getBikerName()
    }, [])

    const getBikerName = async () => {
        try {
            const response = await API.graphql(graphqlOperation(getRODATest, {
                entity: 'biker',
                id: '1'
            }))

            setbikerName(response?.data?.getRODATest?.name)

            console.log('initializing subscription')
            await API.graphql(graphqlOperation(onUpdateRODATest, {
                input: {
                    entity: 'biker',
                    id: '1'
                }
            })).subscribe({
                next: ({ value }) => {

                    console.log('Subscription called', value.data.onUpdateRODATest.name)
                    setbikerName(value.data.onUpdateRODATest.name)
                },
                error: (err) => {
                    console.log('Subscription error: ', err.message)
                }
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }
    

    const onSubmit = async (data) => {
        console.log(data)

        const response = await API.graphql(graphqlOperation(updateRODATest, {
            input: {
                entity: 'biker',
                id: '1',
                name: data.name
            }
        }))

        console.log(response)
    }


    return (
        <div>
            <h1>Real Time Page</h1>

            <h2>Biker name: {bikerName}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="new name" {...register('name')}/>
                <button>Update name</button>
            </form>



        </div>
    )
}

export default RealTime