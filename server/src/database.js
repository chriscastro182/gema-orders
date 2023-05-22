import mongoose from 'mongoose'

/* mongoose.connect('mongodb+srv://lccccastro:1G0FRFpGvXeaUCbp@webapi.szbzzhy.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(error=>console.log(error)) */

mongoose.connect('mongodb+srv://lccccastro:1G0FRFpGvXeaUCbp@webapi.szbzzhy.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(error=>console.log(error))