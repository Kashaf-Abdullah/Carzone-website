// const express=require('express')
// const cors=require('cors')
// const PhoneBook = require('./model/PhoneBook')
// const mongoose = require('mongoose')
// const app=express()

// app.use(express.json())
// app.use(cors())
// const password = 'hello';
// const encodedPassword = encodeURIComponent(password);
// const DB = `mongodb+srv://admin:${encodedPassword}@cluster0.uccqcwt.mongodb.net/vehicledb`

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//      useUnifiedTopology: true,
// }).then(() =>{
//     console.log('Database connected..')
// })
// app.post('/add-phone', async(req,res) => {
//     const phoneNumber = new PhoneBook(req.body)
//     try{
//         await phoneNumber.save()
//         res.status(201).json({
//             status: 'Success',
//             data : {
//                 phoneNumber
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })
// app.get('/get-phone', async (req,res) => {
//     const phoneNumbers = await PhoneBook.find({})
//     try{
//         res.status(200).json({
//             status : 'Success',
//             data : {
//                 phoneNumbers
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })


// app.patch('/update-phone/:id', async (req,res) =>{
//     const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
//         new : true,
//         runValidators : true
//       })
//     try{

//         console.log(req.params.id)
//         res.status(200).json({
//             status : 'Success',
//             data : {
//               updatedPhone
//             }
//           })
//     }catch(err){
//         console.log(err)
//     }
// })


// app.delete('/delete-phone/:id', async(req,res) => {
//     await PhoneBook.findByIdAndDelete(req.params.id)
    
//     try{
//       res.status(204).json({
//           status : 'Success',
//           data : {}
//       })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })
// const PORT=8080

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}...`)
// })
const express=require('express')
const cors=require('cors')
const mongoose = require('mongoose')
const app=express()

// app.use(cors())
// Allow all origins for image requests
app.use(cors());

app.use('/images', express.static('images'));
app.use(express.json())
const password = 'hello';
const encodedPassword = encodeURIComponent(password);
const DB = `mongodb+srv://admin:${encodedPassword}@cluster0.uccqcwt.mongodb.net/vehicledb`

mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

const userRouter=require('./routes/user')
app.use('/users',userRouter)
const PORT=8080

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})