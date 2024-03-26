const router=require('express').Router()
const multer=require('multer')
const {v4:uuidv4}=require('uuid')
const path=require('path')
let User=require('../modals/user.modal')


const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'images')
  },
  filename:function(req,file,cb){
    cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname))
  }
})


const fileFilter=(req,file,cb)=>{
    const allowedFileTypes=['image/jpeg','image/jpg','image/png']
if(allowedFileTypes.includes(file.mimetype)){
    cb(null,true)
}
else{
    cb(null,false)
}

}

const upload=multer({storage,fileFilter})


router.route('/add').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const birthdate= req.body.birthdate;
    const photo = req.file.filename;
    const phone = req.body.phone;
    const desc = req.body.desc;
    const fuel = req.body.fuel;
    const price = req.body.price;
    
    const newUserData = {
    name,
    birthdate,
    photo,
    phone,
    desc,
    fuel,
    price
  
    }
    const newUser = new User (newUserData);
    newUser.save()
    .then(() => res.json ('User Added'))
    .catch(err => res.status(400).json('Error:'+ err));

})
  //   router.route('/rec').get((req, res) => {
  //   const alluser=User.find({})

  //   try{
  //     res.status(200).json({
  //                   status : 'Success',
  //                   data : {
  //                       alluser
  //                   }
  //   })
  // }
  //   catch(err){

  //   }
   

  //   }
  router.route('/rec').get(async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({
            status: 'Success',
            data: {
                allUsers
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
    
   
    module.exports = router;