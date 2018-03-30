# GraphQL playlist Server

This is just a sample code following [a tutorial on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) thanks to [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

## Running the project
To run this project you need nodejs and npm installed to your system. You should be able to run this on linux, windows and mac machine.

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
