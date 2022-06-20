const createModel = require("../model/model")
const express = require("express")
const router = express.Router()

router.post("/create" ,async(req, res)=>{
    try {
       const { aspirants,
        politicalParty,
        ife,
        ido,
        ise,
        oye,
        ekitiSouth,
        ekitiWest,
        Efon,
        Emure,
        ijero,
        ikere,
        illejemeje,
        moba,
        adoEkiti,
        ikole,
        gboyin,
        ekitiEast,
        total
    } = req.body
    const sums =ife+
    ido
    ise+
    oye+
    ekitiSouth+
    ekitiWest
    +
    Efon+
    Emure+
    ijero+
    ikere+
    illejemeje+
    moba+
    adoEkiti+
    ikole+
    gboyin+
    ekitiEast

    
        createOne = await createModel.create(
            { aspirants,
                politicalParty,
                ife,
                ido,
                ise,
                oye,
                ekitiSouth,
                ekitiWest,
                Efon,
                Emure,
                ijero,
                ikere,
                illejemeje,
                moba,
                adoEkiti,
                ikole,
                gboyin,
                ekitiEast,
                total:sums
            } 
        )
        res.status(201).json({
            message:"created",
            data:createOne
        })
    } catch (error) {
        console.log(error.message)
    }
})

router.get("/getall" ,async(req, res)=>{
    try {
        const getall = await createModel.find()
        res.status(200).json({
            message:"all data",
            data:getall
        })
    } catch (error) {
        console.log(error.message)
    }
})
router.get("/:id/getone" ,async(req, res)=>{
    try {
        const getone = await createModel.findById(req.params.id)
        res.status(200).json({
            message:"single data",
            data:getone
        })
    } catch (error) {
        console.log(error.message)
    }
})

router.patch("/:id/edit" ,async(req, res)=>{
    try {
        const editing = await createModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json({
            message:"editeddata",
            data:editing
        }) 
    } catch (error) {
        console.log(error.message)
    }
})
router.delete("/:id/clear" ,async(req, res)=>{
    try {
        const clearData = await createModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"deleted"
           
        })
    } catch (error) {
        console.log(error.message)
    }
})

module.exports=router