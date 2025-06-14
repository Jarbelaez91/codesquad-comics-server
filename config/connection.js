const mongoose = require ("mongoose")


async function main () {

    try{
    await mongoose.connect(process.env.DB_URL)
    console.log("MongoDb database is connected.")
} catch (error) {
    console.error(`there was an error connecting to the database: ${error}`)
    }
}

main()

