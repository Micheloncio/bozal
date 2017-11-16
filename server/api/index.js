require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')

app.use(bodyParser({ limit: '5mb' }))

app.use(bodyParser.json())

const dogLogic = new(require('./dog/DogLogic'))
const historyLogic = new(require('./history/HistoryLogic'))
const tagLogic = new(require('./tag/TagLogic'))

const dogRouter = express.Router()

dogRouter.route('/')
    .post((req, res) => {
        
        const { name, idUser, idBreed, wheight,birdDate } = req.body
        
        dogLogic.create(name, idUser, idBreed, wheight,birdDate)
            .then(dog => {
                res.json({
                    status: 'OK',
                    message: 'dog created successfully',
                    data: dog
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })


app.use('/dog', dogRouter)

const historyRouter = express.Router()

historyRouter.route('/')
    .post((req, res) => {
        const { nameDog, photo, idDog, tag } = req.body

        tagLogic.createIfNotExistTag(tag)
            .then(() => historyLogic.create(nameDog, photo, idDog, tag)
                .then(history => {
                    res.json({
                        status: 'OK',
                        message: 'history created successfully',
                        data: history
                    })
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

historyRouter.route('/addcomment')
    .post((req, res) => {
        const { idHistory, comment, idDog } = req.body
        historyLogic.addComent(idHistory, comment, idDog)
            .then(comment => {
                res.json({
                    status: 'OK',
                    message: 'comment created successfully',
                    data: comment
                })
            })
        .catch(err => {
            res.json({
                status: 'KO',
                message: err.message
            })
        })
    })

historyRouter.route('/addlike')
    .post((req, res) => {
        const { idHistory, idDog } = req.body
        historyLogic.addLikeIfNotIt(idHistory, idDog)
            .then(like => {
                res.json({
                    status: 'OK',
                    message: 'like pushed successfully',
                    data: like
                })
            })
        .catch(err => {
            res.json({
                status: 'KO',
                message: err.message
            })
        })
    })

historyRouter.route('/adddislike')
    .post((req, res) => {
        const { idHistory, idDog } = req.body
            historyLogic.addDislikeIfNotIt(idHistory, idDog)
                .then(dislike => {
                    res.json({
                        status: 'OK',
                        message: 'like pushed successfully',
                        data: dislike
                    })
                })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

historyRouter.route('/itsliked/:idhistory/:iddog')
    .get((req, res) => {
        const { idhistory, iddog } = req.params
        historyLogic.itsLiked(idhistory, iddog)
            .then(liked => {
                res.json({
                    status: 'OK',
                    message: 'liked true',
                    data: liked
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

historyRouter.route('/itsdisliked/:idhistory/:iddog')
    .get((req, res) => {
        const { idhistory, iddog } = req.params
        historyLogic.itsDisliked(idhistory, iddog)
            .then(disliked => {
                res.json({
                    status: 'OK',
                    message: 'disliked true',
                    data: disliked
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
        historyLogic.listLast24Hours()
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


historyRouter.route('/listByTag/:tag')
    .get((req, res) => {
        const { tag } = req.params
        historyLogic.listByTag(tag)
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


app.use('/history', historyRouter)

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