# GraphQL playlist Server

This is just a sample code following [a tutorial on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) thanks to [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

## Running the project
To run this project you'll need nodejs and npm installed on your system. You should be able to run this on your linux, windows and mac machine.

### 1. Clone the project, than cd into the project directory:

```
$ git clone https://github.com/nagyfej/graphql-playlist-server.git
$ cd graphql-playlist-server
```

### 2. Install dependencies
```
npm install
```

### 3. Set up a database

Set up your local MongoDB instance or [follow the tutorial](https://www.youtube.com/watch?v=3NdgP6AVYYs&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=16) to use [mlab](https://mlab.com).

### 4. Set up database connection

Create a local copy from the .env file:
```
$ cp default.env .env
```
and overwrite the default settings with your own development MongoDB settings.

### 5. Start the server
```
node app
```

### 6. Try out the web interface
Visit `http://localhost:4000/graphql` to play around with your new graphql server.

### 7. Check out the graphQL client sample project

The second half of the tutorial is to build a client application using react and apollo-client. To set up the client application, [follow the install instructions](https://github.com/nagyfej/graphql-booklist-client).
