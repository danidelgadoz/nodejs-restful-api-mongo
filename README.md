# NodeJS Restful API

The goal of this demo is to provide an example of how to create a Restful API with Node.js using MongoDB.

## Prerequisites

Make sure you have installed the latest LTS version of [Node.js](https://nodejs.org) and [MongoDB](https://mongodb.com).

If you want to start with data run (optional):

```
mongo bookAPI < dbSeeder.js
```

## Running the Application

1. Run `npm i`.

1. Run `npm run start`.

API is running on `http://localhost:3080/`.

## Tests with curl

**Get all resources**:

```
curl --location --request GET 'http://localhost:3000/books' \
--header 'apiKey: 123456'
```

**Get one resource by ID**:

```
http://localhost:3000/books/614192ccc50031cdfb1e6f9f
```

**Create a resource**:

```
curl --location --request POST 'http://localhost:3000/books' \
--header 'Content-Type: application/json' \
--data-raw '{
    "favorite": false,
    "title": "Game of thrones",
    "description": "About wars and dragons",
    "author": "Robert W. Martin"
}'
```

**Update a resource (all fiels)**:

```
curl --location --request PUT 'http://localhost:3000/books/614192ccc50031cdfb1e6f9f' \
--header 'Content-Type: application/json' \
--data-raw '{
    "favorite": false,
    "title": "Game of thronesx",
    "description": "About wars and dragons",
    "author": "Robert W. Martin",
    "posterImgPath": "https://i.picsum.photos/id/101/200/200.jpg"
}'
```

**Update a resource (partial fields)**:

```
curl --location --request PATCH 'http://localhost:3000/books/614192ccc50031cdfb1e6f9f' \
--header 'Content-Type: application/json' \
--data-raw '{
    "favorite": true
}'
```

**Delete a reource**:

```
curl --location --request DELETE 'http://localhost:3000/books/614192ccc50031cdfb1e6f9f'
```
