var db = require('./tourDBRef.js')
const tours = require('./tours.json');

 async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} Tours`);
        let newDocs = await db.insert(tours);
        console.log(`Added ${newDocs.length} Tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();
module.export = initialize;
