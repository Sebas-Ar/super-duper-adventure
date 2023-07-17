import AWS from 'aws-sdk'

const SendMQTTMessage = () => {
    const sendMessage = async () => {
        AWS.config.update({
            accessKeyId: 'AKIA3JS7X4BGL7KJDAUM',
            secretAccessKey: '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'
        })

        const endpoint = 'a33lelep6oufus-ats.iot.us-east-2.amazonaws.com'
        const region = 'us-east-2'
        const publisherIoT = new AWS.IotData({ endpoint, region })

        const bikerData = {
            name: 'sebas',
            age: 30
        }
        const bikerDataString = JSON.stringify(bikerData)

        await publisherIoT.publish({
            topic: 'RODA/biker/cualquiercosa',
            payload: bikerDataString,
            qos: 1
        }).promise()

        console.log('enviando mensaje')
    }

    return (
        <div>
            <h1>Hello MQTT</h1>
            <button onClick={sendMessage}>Enviar Mensaje</button>
        </div>
    )
}

export default SendMQTTMessage
