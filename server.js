const express = require('express')
const mongoose = require('mongoose')
const Libri = require('./models/users')
require('dotenv').config()

const app = express()
let mongouri = process.env.MONGO_URI

mongoose
    .connect(mongouri) // diqka me bo console qe eshte konektu
    .then(console.log('mongodb u konektua me sukses!')) // masi qe jemi lidh qka me bo
    .catch((err)=>{console.log(`keni error edhe errori eshte ${err}`)}) // me e bo ni parameter err edhe me e shfaq gabimin

app.use(express.json()) 

app.post('/librat', async (req, res)=>{
    try {
        // masi qe jemi lidh me ja dhan tdhanat
        const { autori, faqet } = req.body; 
        const Libri = new Libri({ autori, faqet });
        await Libri.save()

        res.status(201).json({message: 'sukses', libri: Libri})
    }

    catch {
        // me i bo display errorat 
        res.status(404, (error)=>{console.log('sukses')})
    }


})

app.listen(process.env.PORT, ()=>{console.log('porta u lidh me sukses')})