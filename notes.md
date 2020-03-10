# Routing Notes

## REST vs Non REST
| Non REST         | Rest                       | Action    |
| :--------------- | :------------------------- | :-------- |
| /listAllLessons  | /api/lessons               | GET       |
| /createLesson    | /api/lessons               | POST      |
| /deleteLesson    | /api/lessons/{id}          | DELETE    |
| /updateUser      | /api/users/{id}            | PATCH/PUT |
| /listHubMessages | /api/lessons/{id}/messages | GET       |
| /viewMessages    | /api/messages/{id}         | GET       |


## Menu

- CommonJS modules (require/export)
- Express Router (break up a server into sub component)
- Different ways to read data from the client
  - body --> req.body
  - query string --> req.query
  - URL parameter --> req.params
  - 
- using sub-routes

## Requirements
- list all hubs
- add a hub
- update a hub
- remove a hub
- view hub mesages
- post a message to a hub


## DATA Access
- use `hubs-model.js` to talk to the database
  - find(query)
  - findById(id)
  - add(hub)
  - remove(id)
  - updata(id, changes)
  - findHubMesages(hubId)
  - findMessageById(mesageId)
  - addMessage(message)

**Everyone of those methods returns a promise**


## Basic Application Architecture
- UI layer/code
- Business Logic layer/code
- Database layer/code
  

## Using Query String Parameters

https://www.google.com
/search
?               ----> marks the beginning of the query string
source=hp       ------> key/value pair
&               ----> separates key/value paris

Express will parse the query string into an object

```js
req.query = {
    source: hp,
    ei: I10394130941834019,
    q: mdn+query+string+parameters
}
```

client_age -----> age