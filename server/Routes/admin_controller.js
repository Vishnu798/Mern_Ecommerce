const { v4: uuidv4 } = require("uuid");
const db = require("../helper/db_helper");

const uploadProduct = async (req, res) => {
  try {
    console.log("url is : " + req.url + "req body is : " + req.body);
    console.log(uuidv4());
    const docId = uuidv4();
    const docRef = db.collection("Product").doc(docId);
    const data = req.body;
    req.body.id = docId;
    await docRef.set(req.body);
    return res.status(201).json({
      status: "success",
    });
  } catch (error) {
    return res.status(501).json({
      status: "error",
      message: error,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    console.log("url is : " + req.url);
    
    let products = [];
    const snapshot = await db.collection("Product").get();
    snapshot.forEach((doc) => {
      products.push(doc.data());
    });
   return res.status(200).json({
        status:"success",
        data:products
    })
  } catch (error) {
    console.log("error",error)
    return res.status(501).json({
        status:"fail",
    })
  }
};
module.exports = {
  uploadProduct,
  getProducts
};
