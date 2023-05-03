import mongoose from "mongoose";

const mongooseConnect = async () => {
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }else{
        const uri = process.env.MONGODB_URI;
        return  mongoose.connect(uri);
    }
}

export default mongooseConnect;

// import mongoose from 'mongoose';

// const mongooseConnect = async () => mongoose.connect(process.env.MONGODB_URI);

// export default mongooseConnect;