const kafka = require('./kafka')

const producer = kafka.producer()
const topic = 'loan-events'

const getRandomNumber = () => Math.round(Math.random(10) * 1000)
const createMessage = num => ({
  key: `key-${num}`,
  value: `value-${num}-${new Date().toISOString()}`,
})

const sendMessage = async (producer, topic) => {
  await producer.connect()

  setInterval(function() {
    payloads = {
      topic,
      messages: Array(getRandomNumber())
        .fill()
        .map(_ => createMessage(getRandomNumber())),
    }
    console.log('payloads=', payloads)
    producer.send(payloads)
  }, 5000)
}

sendMessage(producer, topic)
