const express = require("express")
const app = express()
const morgan = require('morgan');
app.set('port',process.env.PORT || 3001);
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
})
app.use(morgan('dev'));  
app.use(express.json()); 
app.listen(app.get('port'), () => {
console.log(`Server running on port ${app.get('port')}`);
});

let colorArray = []
 app.get("/colorArray", (req, res) => {
            try {
                for(let i = 0;i < 5;i++){
                    colorArray[i] = []
                    for(let j = 0; j < 5;j++){
                        colorArray[i][j] = Math.floor(Math.random()*16777215).toString(16);
                    }
                }
          
            
            res.status(200).json({
                colorArray
            });
            } catch (error) {
            res.status(500).json({
            message: "Failed to retrieve colors",
            });
            }
            });