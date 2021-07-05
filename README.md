# Realtime ChatApp

### Setup & Run &nbsp; :car:

1. Install dependencies

```
yarn install / npm install
```

2.  Start backend server (express)

```
yarn start / npm start
```

3. Initiate the front end (React)

```
node server.js
```

4. You should now be able to connect at the designated port.

### Build &nbsp; :hammer:

1. Build the front-end

```
yarn build / npm build
```

2. Move server.js into the same directory as the build folder

3. Setup package

```
yarn init / npm init
```

4. Install **server** dependencies (client side have already been built)

```
yarn add express socket.io / npm install express socket.io
```

5. Launch server

```
node server.js
```

### Deployment &nbsp; :package:

The active [example](https://instant-chatapp-react-socketio.herokuapp.com/) is deployed using [Heroku](https://www.heroku.com/).For more information visit their [documentation](https://devcenter.heroku.com/categories/deployment) to learn how to deploy.

**Note:** Varying approaches could be taken. Ie, deploying the front end and back end individually + using CORS. The active [example](https://instant-chatapp-react-socketio.herokuapp.com/) dishes the built html as well as socketio server.

### Tech Stack &nbsp; :toolbox:

1. [Express](https://expressjs.com/)
2. [Socket.IO](https://socket.io/)
3. [React](https://reactjs.org/)
4. [tailwindcss](https://tailwindcss.com/)
