const MigrationJob = require('dynamodb-mongodb-migrate');

var table_names = [
    'Auction-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Auction-g5gateay2rfuneojj47demcjku-testback',
    'Auction-woce6dfenzhefccq5x6m3ccrae-talis',
    'Auction-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'Bid-g5gateay2rfuneojj47demcjku-testback',
    'Bid-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'Buys-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Buys-woce6dfenzhefccq5x6m3ccrae-talis',
    'CandyMachine-g5gateay2rfuneojj47demcjku-testback',
    'CandyMachine-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'Collection-g5gateay2rfuneojj47demcjku-testback',
    'Collection-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'Edition-g5gateay2rfuneojj47demcjku-testback',
    'Edition-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'LastActions-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'LastActions-woce6dfenzhefccq5x6m3ccrae-talis',
    'Mint-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Mint-woce6dfenzhefccq5x6m3ccrae-talis',
    'Sales-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Sales-woce6dfenzhefccq5x6m3ccrae-talis',
    'TefiUser-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Token-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Token-g5gateay2rfuneojj47demcjku-testback',
    'Token-woce6dfenzhefccq5x6m3ccrae-talis',
    'Token-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'Transaction-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'Transaction-g5gateay2rfuneojj47demcjku-testback',
    'Transaction-woce6dfenzhefccq5x6m3ccrae-talis',
    'Transaction-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'User-2hoxlz4zpjdadjqflzmzyjvrni-tefi',
    'User-g5gateay2rfuneojj47demcjku-testback',
    'User-woce6dfenzhefccq5x6m3ccrae-talis',
    'User-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'WhitelistPhase-g5gateay2rfuneojj47demcjku-testback',
    'WhitelistPhase-zlvlw7edobcujfccrzetmwqqzq-prodenv',
    'WithdrawedToken-g5gateay2rfuneojj47demcjku-testback',
    'WithdrawedToken-zlvlw7edobcujfccrzetmwqqzq-prodenv'
];

let sourceConnectionOptions = {
    region: 'eu-west-2',
    accessKeyId: 'CA1KIARORJINLQL3VKXEXE',
    secretAccessKey: '131GAmDKZaqlLs+6wC1H9cvfH8rgmJAW7FCP6xTIlZ'
};
let targetConnectionOptions = {
    host: 'localhost:27017',
    user: '',
    password: ''
};

run = function()
{
    foreach(table in table_names) 
    {
        console.log('table : ' + table)
        const migrationJob = new MigrationJob('Bid-g5gateay2rfuneojj47demcjku-testback', 'Bid-g5gateay2rfuneojj47demcjku-testback', 'migratioin_from_dynamodb', sourceConnectionOptions, targetConnectionOptions, 100, 100);
        await migrationJob.run()
    }
};

run();