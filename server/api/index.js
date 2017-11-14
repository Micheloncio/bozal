require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')

app.use(bodyParser({limit: '5mb'}))

app.use(bodyParser.json())

const historyData = new(require('./history/HistoryData'))
const tagLogic = new(require('./tag/TagLogic'))

const historyRouter = express.Router()

historyRouter.route('/')
    .post((req, res) => {
        const { nameDog, photo, idDog, tag } = req.body

        tagLogic.existTagByName(tag)
                .then(_tag => {
                    if(!_tag)
                        tagLogic.create(tag)
                            .then(tagCreated)
                            .catch(err)
                .catch(err)
                })


        historyData.create(nameDog, photo, idDog, tag)
            .then(history => {
                res.json({
                    status: 'OK',
                    message: 'history created successfully',
                    data: history
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

historyRouter.route('/last24hours')
	.get((req, res) => {
        historyData.listLast24Hours()
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'histories listed successfully',
                    data: histories
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })


historyRouter.route('/last24hoursbytag/:tag')
    .get((req, res) => {
        const {tag} = req.params
        historyData.listLast24HoursByTag(tag)
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'histories listed successfully',
                    data: histories
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
historyRouter.route('/tags')
    .get((req, res) => {
        historyData.listTags()
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'histories listed successfully',
                    data: histories
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })


app.use('/history',historyRouter)

console.log(`Connecting History API db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log(`Starting History API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('History API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping History API...')

    process.exit()
})
