# Image Processing API
Image Processing API built with NodeJS/Express and Sharp
## Scripts
### Install all dependencies
```
npm run install
```
### Builds the project and runs tests with Jasmine
```
npm run test
```
### Format all .ts files with Prettier
```
npm run prettier
```
### Runs ESlint on .ts files
```
npm run lint
```
### Builds the project to ./dist folder
```
npm run build
```
### Starts app with nodemon
```
npm run start
```
## Usage
Upon visiting the endpoint 'api/image' and providing a query parameter with the Filename, height, and width. You will be served the image with the dimensions you provided in the query parameter. Requesting the same image again will serve a cached version of the image.
### Example:
`localhost:3000/api/images?filename=fjord&height=500&width=500`







