import mongoose from "mongoose"


const connectMongo = (mongoLink:string) => {
    mongoose.connect(mongoLink).then(()=> console.log("Mongodb connected")).catch(()=> console.log('connection error'))
}

export default connectMongo 