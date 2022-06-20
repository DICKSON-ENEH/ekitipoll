const mongoose = require("mongoose")

const electionSchema=mongoose.Schema({
    aspirants:{
        type:String
    },
    politicalParty:{
        type:String
    },
    ife:{
        type:Number
    },
    ido:{
        type:Number
    },
    ise:{
        type:Number
    },
    oye:{
        type:Number
    },
    ekitiSouth:{
        type:Number
    },
    ekitiWest:{
        type:Number
    },
    Efon:{
        type:Number
    },
    Emure:{
        type:Number
    },
    ijero:{
        type:Number
    },
    ikere:{
        type:Number
    },
    illejemeje:{
        type:Number
    },
    moba:{
        type:Number
    },
    adoEkiti:{
        type:Number
    },
    ikole:{
        type:Number
    },
    gboyin:{
        type:Number
    },
    ekitiEast:{
        type:Number
    },
    total:{
        type:Number
          
    },
}, {timestamps:true})

module.exports=mongoose.model("election", electionSchema)