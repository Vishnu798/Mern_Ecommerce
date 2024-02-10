const getData = (req,res)=>{
    try {
        console.log("reuesu url is : ",req.url)
        
        return res.send("new data res");
    } catch (error) {
        console.log("error on backend is :", error)
    }
}

module.exports = {
    getData
}