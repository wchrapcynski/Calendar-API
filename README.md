# Calendar-API

Calendar-API

This is a RESTful API for an interactive calendar. There are three models: Holidays, Birthdays, and Notes and all three have CRUD functionality. 

## Requirements

- [Node JS](https://nodejs.org/en/)
- [Mongo DB](https://www.mongodb.com/download-center)

## Installation

First install the requirements. Then download this repo to your hard drive. You'll then need to use `npm install` in the root of the amiibo_api folder to install dependencies. It should install cors, body-parse, express, mongoose, and node-fetch. 

There currently is a small set of data in three json files to use as seed data. You can run `node seed.js` from the `/db` folder to send the data into a mongo database. There will be a collection for all three models.

![data sample](images/dataexamples.png)

## Usage

The following routes are currently set to be used. You can test GET by running `nodemon` in the root folder and go to `localhost:3000` in your browser. You can also use [Postman](https://www.getpostman.com/) to test everything out. Replace DOMAIN with either localhost:3000 or whatever domain you have the API installed on.

## Routes

### Holidays

| Route                                                | URL                                                             | Method | Description                                                                    |
| ---------------------------------------------------- | :-------------------------------------------------------------- | :----- | :----------------------------------------------------------------------------- |
| <sub>"/holiday"</sub>                                | <sub>http://DOMAIN/holiday</sub>                                | GET    | <sub>Shows all holidays in the database</sub>                                  |
| <sub>"/holiday/id/:id"</sub>                         | <sub>http://DOMAIN/id/<"id"></sub>                              | GET    | <sub>Searching holiday by ID.</sub>                                            |
| <sub>"/holiday/date/:date"</sub>                     | <sub>http://DOMAIN/date/<"date"></sub>                          | GET    | <sub>Search holiday by date. The date format is YYYY-MM-DD.</sub>              |
| <sub>"/holiday/date/:dateStart/:dateEnd"</sub>       | <sub>http://DOMAIN/date/<"Start Date">/<"End Date"></sub>       | GET    | <sub>Search holidays by a range of dates. The date format is YYYY-MM-DD.</sub> |
| <sub>"/holiday/date-short/:dateStart/:dateEnd"</sub> | <sub>http://DOMAIN/date-short/<"Start Date">/<"End Date"></sub> | GET    | <sub>Search holidays by a range of dates. The date format is MM-DD.</sub>      |
| <sub>"/holiday/name/:name"</sub>                     | <sub>http://DOMAIN/name/<"name"></sub>                          | GET    | <sub>Search by holiday name.</sub>                                             |
| <sub>"/holiday/country/:country"</sub>               | <sub>http://DOMAIN/country/<"country"></sub>                    | GET    | <sub>Search by country (US/CA/MX).</sub>                                       |
| <sub>"/holiday"</sub>                                | <sub>http://DOMAIN/holiday</sub>                                | POST   | <sub>Creates holiday listing.</sub>                                            |
| <sub>"/holiday/id/:id" </sub>                        | <sub>http://DOMAIN/id/<"id"></sub>                              | PUT    | <sub>Edits an holiday listing</sub>                                            |
| <sub>"/holiday/id/:id"</sub>                         | <sub>http://DOMAIN/id/<"id"></sub>                              | DELETE | <sub>Deletes an holiday listing</sub>                                          |

### Birthdays

| Route                                                 | URL                                                             | Method | Description                                                                |
| ----------------------------------------------------- | :-------------------------------------------------------------- | :----- | :------------------------------------------------------------------------- |
| <sub>"/birthday"</sub>                                | <sub>http://DOMAIN/birthday</sub>                               | GET    | <sub>Shows all birthdays in the database</sub>                             |
| <sub>"/birthday/id/:id"</sub>                         | <sub>http://DOMAIN/id/<"id"></sub>                              | GET    | <sub>Searching birthday by ID.</sub>                                       |
| <sub>"/birthday/date/:date"</sub>                     | <sub>http://DOMAIN/date/<"date"></sub>                          | GET    | <sub>Search birthday by date. The date format is YYYY-MM-DD.</sub>         |
| <sub>"/birthday/date-short/:dateStart/:dateEnd"</sub> | <sub>http://DOMAIN/date-short/<"Start Date">/<"End Date"></sub> | GET    | <sub>Search birthdays by a range of dates. The date format is MM-DD.</sub> |
| <sub>"/birthday/name/:name"</sub>                     | <sub>http://DOMAIN/name/<"name"></sub>                          | GET    | <sub>Search by birthday name.</sub>                                        |
| <sub>"/birthday"</sub>                                | <sub>http://DOMAIN/birthday</sub>                               | POST   | <sub>Creates birthday listing.</sub>                                       |
| <sub>"/birthday/id/:id" </sub>                        | <sub>http://DOMAIN/id/<"id"></sub>                              | PUT    | <sub>Edits an birthday listing</sub>                                       |
| <sub>"/birthday/id/:id"</sub>                         | <sub>http://DOMAIN/id/<"id"></sub>                              | DELETE | <sub>Deletes an birthday listing</sub>                                     |

### Notes

| Route                                       | URL                                                       | Method | Description                                                                 |
| ------------------------------------------- | :-------------------------------------------------------- | :----- | :-------------------------------------------------------------------------- |
| <sub>"/note"</sub>                          | <sub>http://DOMAIN/note</sub>                             | GET    | <sub>Shows all notes in the database</sub>                                  |
| <sub>"/note/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | GET    | <sub>Searching note by ID.</sub>                                            |
| <sub>"/note/date/:date"</sub>               | <sub>http://DOMAIN/date/<"date"></sub>                    | GET    | <sub>Search note by date. The date format is YYYY-MM-DD.</sub>              |
| <sub>"/note/date/:dateStart/:dateEnd"</sub> | <sub>http://DOMAIN/date/<"Start Date">/<"End Date"></sub> | GET    | <sub>Search notes by a range of dates. The date format is YYYY-MM-DD.</sub> |
| <sub>"/note/title/:title"</sub>             | <sub>http://DOMAIN/title/<"title"></sub>                  | GET    | <sub>Search by note title.</sub>                                            |
| <sub>"/note"</sub>                          | <sub>http://DOMAIN/note</sub>                             | POST   | <sub>Creates note listing.</sub>                                            |
| <sub>"/note/id/:id" </sub>                  | <sub>http://DOMAIN/id/<"id"></sub>                        | PUT    | <sub>Edits an note listing</sub>                                            |
| <sub>"/note/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | DELETE | <sub>Deletes an note listing</sub>                                          |

## Author

William Chrapcynski: all code