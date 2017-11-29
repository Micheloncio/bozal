require('dotenv').config()

const express = require('express')
const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser({ limit: '5mb' }))
app.use(bodyParser.json())

app.use(require('./passport')(process.env.SECRET))

const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('./users/UserSchema')


const deliverBadges = require('./deliverBadges')

deliverBadges()

const dogLogic = new(require('./dog/DogLogic'))
const breedLogic = new(require('./breed/BreedLogic'))
const historyLogic = new(require('./history/HistoryLogic'))
const tagLogic = new(require('./tag/TagLogic'))
const dayphotoLogic = new(require('./dayphoto/DayphotoLogic'))

const authRouter = express.Router()

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body

    const user = new User({ username })

    User.register(user, password, err => {
        if (err) return res.json({
            status: 'KO',
            message: err.message
        })

        res.json({
            status: 'OK',
            message: 'user registered successfully'
        })
    })
})

authRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const { _id: id, username } = req.user

    const token = jwt.sign({ id, username }, process.env.SECRET)

    res.json({
        status: 'OK',
        message: 'user authenticated successfully',
        data: token
    })
})

app.use('/auth', authRouter)


const dogRouter = express.Router()
dogRouter.use(passport.authenticate('jwt', { session: false }))

dogRouter.route('/')
    .post((req, res) => {
        const { name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto } = req.body
        
        dogLogic.createDog(name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto)
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
    .put((req, res) => {
        const { idDog, name, chip, idBreed, gender, weight,birthdate, profilePhoto } = req.body
        
        dogLogic.updateDog(idDog, name, chip, idBreed, gender, weight,birthdate, profilePhoto)
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
    .delete((req, res) => {
        const { idDog } = req.query
        dogLogic.deleteDog(idDog)
            .then(dog => {
                res.json({
                    status: 'OK',
                    message: 'dogs deleted successfully',
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

dogRouter.route('/points')
    .put((req, res) => {
        const { idDog, points } = req.body
        dogLogic.updatePoints(idDog,points)
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

dogRouter.route('/users/:idUser')
    .get((req, res) => {
        const { idUser } = req.params
        dogLogic.listDogsByUser(idUser)
            .then(dogs => {
                res.json({
                    status: 'OK',
                    message: 'dogs listed successfully',
                    data: dogs
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
dogRouter.route('/search/:search')
    .get((req, res) => {
        const { search } = req.params
        dogLogic.searchDog(search)
            .then(dogs => {
                res.json({
                    status: 'OK',
                    message: 'dogs listed successfully',
                    data: dogs
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })


dogRouter.route('/dog/:idDog')
    .get((req, res) => {
        const { idDog } = req.params
        dogLogic.retrieveDogById(idDog)
            .then(dog => {
                res.json({
                    status: 'OK',
                    message: 'dogs listed successfully',
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

const breedRouter = express.Router()
breedRouter.use(passport.authenticate('jwt', { session: false }))

breedRouter.route('/')
    .get((req, res) => {
        breedLogic.listBreeds()
            .then(breeds => {
                res.json({
                    status: 'OK',
                    message: 'breeds listed successfully',
                    data: breeds
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

app.use('/breed', breedRouter)

const dayphotoRouter = express.Router()
dayphotoRouter.use(passport.authenticate('jwt', { session: false }))

dayphotoRouter.route('/')
    .post((req, res) => {
        const { idDog, nameDog, photo } = req.body

        dayphotoLogic.create(idDog, nameDog, photo)
            .then(dayphotos => {
                res.json({
                    status: 'OK',
                    message: 'dayphoto created successfully',
                    data: dayphotos
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    .get((req, res) => {
        dayphotoLogic.retrieveRandomDayphoto()
            .then(dayphoto => {
                res.json({
                    status: 'OK',
                    message: 'dayphotos listed successfully',
                    data: dayphoto
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

dayphotoRouter.route('/gallery/:idDog')
    .get((req, res) => {
        const { idDog } = req.params
        dayphotoLogic.listAllByDogId(idDog)
            .then(dayphotos => {
                res.json({
                    status: 'OK',
                    message: 'dayphotos listed successfully',
                    data: dayphotos
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

dayphotoRouter.route('/random/:id')
    .get((req, res) => {
        const { id } = req.params
        dayphotoLogic.retrieveDifferentRandomDayphoto(id)
            .then(dayphoto => {
                res.json({
                    status: 'OK',
                    message: 'dayphotos listed successfully',
                    data: dayphoto
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

dayphotoRouter.route('/like')
    .put((req, res) => {
        const { idDayphoto } = req.body
        dayphotoLogic.addLike(idDayphoto)
            .then(dayphoto => {
                res.json({
                    status: 'OK',
                    message: 'like added successfully',
                    data: dayphoto
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

app.use('/dayphoto', dayphotoRouter)

const historyRouter = express.Router()
historyRouter.use(passport.authenticate('jwt', { session: false }))

historyRouter.route('/')
    .post((req, res) => {
        const { nameDog, photo, idDog, tag, description } = req.body

        tagLogic.createIfNotExistTag(tag)
            .then(() => historyLogic.create(nameDog, photo, idDog, tag, description)
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

historyRouter.route('/like')
    .post((req, res) => {
        const { idHistory, idDog } = req.body
        historyLogic.addLikeIfNotIt(idHistory, idDog)
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'like pushed successfully',
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
    .delete((req, res) => {
        const { idHistory, idDog } = req.query
        historyLogic.deleteLike(idHistory, idDog)
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'like deleted successfully',
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

historyRouter.route('/dislike')
    .post((req, res) => {
        const { idHistory, idDog } = req.body
            historyLogic.addDislikeIfNotIt(idHistory, idDog)
                .then(histories => {
                    res.json({
                        status: 'OK',
                        message: 'like pushed successfully',
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
    .delete((req, res) => {
        const { idHistory, idDog } = req.query
        historyLogic.deleteDislike(idHistory, idDog)
            .then(histories => {
                res.json({
                    status: 'OK',
                    message: 'dislike deleted successfully',
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
historyRouter.route('/gallery/:idDog')
    .get((req, res) => {
        const { idDog } = req.params
        historyLogic.listByIdDog(idDog)
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

const tagRouter = express.Router()
tagRouter.use(passport.authenticate('jwt', { session: false }))

tagRouter.route('/')
    .get((req, res) => {
        tagLogic.listTags()
            .then(tags => {
                res.json({
                    status: 'OK',
                    message: 'tags listed successfully',
                    data: tags
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })


app.use('/tags', tagRouter)

console.log(`Connecting Yap API db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log(`Starting Yap API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Yap API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping Yap API...')

    process.exit()
})