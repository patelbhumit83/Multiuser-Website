var db = require('./userDBRef.js')
const users = require('./userTourHash.json');

async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} Users`);
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} Users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();
