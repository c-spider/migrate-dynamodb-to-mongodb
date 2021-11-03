const MigrationJob = require('dynamodb-mongodb-migrate');

var table_names = [
    'djqflzmzyjvrni-tefi',
    'rfuneojj47demcjku-testback',
    'efccq5x6m3ccrae-talis'
];

let sourceConnectionOptions = {
    region: 'eu-west-2',
    accessKeyId: '1A1KIARORJINLQL3VKXEXE',
    secretAccessKey: '131GAmDKZaqlLs+6wC1H9cvfH8rgmJAW7FCP6xTIlZ'
};
let targetConnectionOptions = {
    host: 'localhost:27017',
    user: '',
    password: ''
};

async function run()
{
    for(let i = 0; i < table_names.length; i++)
    {
        console.log('table : ' + table_names[i])
        try {
            const migrationJob = new MigrationJob(table_names[i], table_names[i], 'migratioin_from_dynamodb', sourceConnectionOptions, targetConnectionOptions, 100, 100);
            await migrationJob.run()
        }
        catch (err) {
            console.log("cannot connect database");
        }
    }
};

run();