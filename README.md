[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

[![MongoDB](https://github.com/Iggy-Codes/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)

<img src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" href="http://reactjs.org" width="150" height="42" />


[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![npm](https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)

# Yap Yap

This repo contains full-stack project of a social network about dogs.

## Motivation

Yap Yap is a social network for dogs. Thanks to the gaming system deployed, users can interact with other pets to share experiences and/or like or dislike their experiences or photos. 

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/)

To run the server: 
```
XXXXX npm start
```
All dependencies will be installed automatically

You will need a ```.env``` files containing
```
PORT=XXXX (Port where the server will listen petitions)
DB_URL=XXXXXX (URl of your DB)
SECRET=XXXXXXXXXXXX (seed for your web token)
```
## Parts

#### 1. Restfull API
The project constaint a restfull API with these endpoints:
* ```/auth``` for managing users
* ```/dog``` for managing dog profiles
* ```/dayphoto``` for managing the photos of your dogs
* ```/history``` for managing the histories of your dogs

#### 2. React application
The project serves a React applicattion to interact with your endpoints

## Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor

## Authors

* [Michel Escolano](https://github.com/Micheloncio) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
