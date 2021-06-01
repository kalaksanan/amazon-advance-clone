const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51IwNulCan25RaqHhLB0Jrt5Sshx54CV5XpO2ibWd69ELv1CqIFlTAtNfyLSKwaaXAx5hs7kZDIsDFKqj7ZYIrpQt0093AMslGW'
)

//API

// - APP Config
const app = express()

// - Middle wares
app.use(cors({ origin: true }))
app.use(express.json())

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  })

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/advance-clone/us-central1/api
