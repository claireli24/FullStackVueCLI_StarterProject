module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;

    mongoose.connect(config.database, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });

    database.on('error', error => console.log(`Connection to ServerManager database failed: ${error}`));
    database.on('connected', () => console.log('Connected to ServerManager database'));
    database.on('disconnected', () => console.log('Disconnected from ServerManager database'));

    process.on('SIGINT', () => {
        database.close(() => {
        console.log('ServerManager terminated, connection closed');
        process.exit(0);
        })
    });
};
  