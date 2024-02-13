import axios from 'axios';

const AdminService = {
     async uploadProduct(formData){
        console.log("form data is :",formData);
        try {
            const response = await axios.post('https://ecommerce-web-iqde.onrender.com/upload_product',formData)
            return response;
        } catch (error) {
           console.log("error on uploading product",error); 
        }
    },

    async getProducts(){
        try {
            console.log("requesting to backend")
            const response = await axios.get('https://ecommerce-web-iqde.onrender.com/get_product')
            return response;
        } catch (error) {
            console.log("error in getProducts function",error)
        }
    }
}



export default AdminService;