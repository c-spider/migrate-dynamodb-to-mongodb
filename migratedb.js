const MigrationJob = require('dynamodb-mongodb-migrate');

let sourceConnectionOptions = {
    region: 'eu-west-2',
    accessKeyId: 'CAKIARORJINLQL3VKXEXE',
    secretAccessKey: '13GAmDKZaqlLs+6wC1H9cvfH8rgmJAW7FCP6xTIlZ'
};
let targetConnectionOptions = {
    host: '3.8.117.18:27017',
    user: '',
    password: ''
};
// let targetConnectionOptions = {
//     host: '127.0.0.1:27017',
//     user: '',
//     password: ''
// };

const migrationJob = new MigrationJob('Bid-g5gateay2rfuneojj47demcjku-testback', 'Bid-g5gateay2rfuneojj47demcjku-testback', 'migratioin_from_dynamodb', sourceConnectionOptions, targetConnectionOptions, 100, 100);

migrationJob.run()
