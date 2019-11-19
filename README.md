# Calendar-API

Calendar-API

## Routes

### Holidays

| Route                                          | URL                                                       | Method | Description                                                                    |
| ---------------------------------------------- | :-------------------------------------------------------- | :----- | :----------------------------------------------------------------------------- |
| <sub>"/holiday"</sub>                          | <sub>http://DOMAIN/holiday</sub>                          | GET    | <sub>Shows all holidays in the database</sub>                                  |
| <sub>"/holiday/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | GET    | <sub>Searching holiday by ID.</sub>                                            |
| <sub>"/holiday/date/:date"</sub>               | <sub>http://DOMAIN/date/<"date"></sub>                    | GET    | <sub>Search holiday by date. The date format is YYYY-MM-DD.</sub>              |
| <sub>"/holiday/date/:dateStart/:dateEnd"</sub> | <sub>http://DOMAIN/date/<"Start Date">/<"End Date"></sub> | GET    | <sub>Search holidays by a range of dates. The date format is YYYY-MM-DD.</sub> |
| <sub>"/holiday/name/:name"</sub>               | <sub>http://DOMAIN/name/<"name"></sub>                    | GET    | <sub>Search by holiday name.</sub>                                             |
| <sub>"/holiday/country/:country"</sub>         | <sub>http://DOMAIN/country/<"country"></sub>              | GET    | <sub>Search by country (US/CA/MX).</sub>                                       |
| <sub>"/holiday"</sub>                          | <sub>http://DOMAIN/holiday</sub>                          | POST   | <sub>Creates holiday listing.</sub>                                            |
| <sub>"/holiday/id/:id" </sub>                  | <sub>http://DOMAIN/id/<"id"></sub>                        | PUT    | <sub>Edits an holiday listing</sub>                                            |
| <sub>"/holiday/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | DELETE | <sub>Deletes an holiday listing</sub>                                          |

### Birthdays

| Route                                           | URL                                                       | Method | Description                                                                     |
| ----------------------------------------------- | :-------------------------------------------------------- | :----- | :------------------------------------------------------------------------------ |
| <sub>"/birthday"</sub>                          | <sub>http://DOMAIN/birthday</sub>                         | GET    | <sub>Shows all birthdays in the database</sub>                                  |
| <sub>"/birthday/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | GET    | <sub>Searching birthday by ID.</sub>                                            |
| <sub>"/birthday/date/:date"</sub>               | <sub>http://DOMAIN/date/<"date"></sub>                    | GET    | <sub>Search birthday by date. The date format is YYYY-MM-DD.</sub>              |
| <sub>"/birthday/date/:dateStart/:dateEnd"</sub> | <sub>http://DOMAIN/date/<"Start Date">/<"End Date"></sub> | GET    | <sub>Search birthdays by a range of dates. The date format is YYYY-MM-DD.</sub> |
| <sub>"/birthday/name/:name"</sub>               | <sub>http://DOMAIN/name/<"name"></sub>                    | GET    | <sub>Search by birthday name.</sub>                                             |
| <sub>"/birthday"</sub>                          | <sub>http://DOMAIN/birthday</sub>                         | POST   | <sub>Creates birthday listing.</sub>                                            |
| <sub>"/birthday/id/:id" </sub>                  | <sub>http://DOMAIN/id/<"id"></sub>                        | PUT    | <sub>Edits an birthday listing</sub>                                            |
| <sub>"/birthday/id/:id"</sub>                   | <sub>http://DOMAIN/id/<"id"></sub>                        | DELETE | <sub>Deletes an birthday listing</sub>                                          |

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
