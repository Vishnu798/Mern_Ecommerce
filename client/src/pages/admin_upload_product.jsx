import { useState } from "react";
import AdminService from "../service/admin_services";
const AdminUploadProduct = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    discount: "",
    main_category: "Women",
    sub_category: "",
    quantity: "",
    product_image: "",
  });
  const [showAlert,setShowAlert] = useState(false);
  const [showErrorAlert,setShowErrorAlert] = useState(false);
  const handleChange = (e) => {
    console.log("e value is  :", e.target.name);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  // const handleChangeFile = (e) => {
  //   console.log("e value is  :", e)
  //   //    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    console.log("handling click")
    const {data} = await AdminService.uploadProduct(formData)
    console.log("res is : ",data.status)
    if(data.status === "success"){
        setShowAlert(true);
        setFormData({
          product_name: "",
    price: "",
    discount: "",
    main_category: "Women",
    sub_category: "",
    quantity: "",
    product_image: "",
        });
        setTimeout(()=>{
          setShowAlert(false);
        },3000)
    }
    else{
      setShowErrorAlert(true);
        setFormData({
          product_name: "",
    price: "",
    discount: "",
    main_category: "Women",
    sub_category: "",
    quantity: "",
    product_image: "",
        });
        setTimeout(()=>{
          setShowErrorAlert(false);
        },3000)
    }
  }
  return (
    <>
     <div style={{height:'20px'}} className="container mb-5">
     {showAlert && 
      <div className="alert alert-success" role="alert">
      Product successfully uploaded.
    </div>
      }
    {
      showErrorAlert && <div className="alert alert-danger" role="alert">
      Something went wrong please try again after sometime.
    </div>
    }
</div>
<div className="container mt-5">
  
  <form onSubmit={handleSubmit} className="row g-3 needs-validation">
    <div className="col-md-12">
      <label htmlFor="validationCustom01" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        name="product_name"
        id="validationCustom01"
        value={formData.product_name}
        onChange={handleChange}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-12">
      <label htmlFor="validationCustom02" className="form-label">
        Price
      </label>
      <input
        type="text"
        className="form-control"
        name="price"
        id="validationCustom02"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-12">
      <label htmlFor="validationCustom03" className="form-label">
        Quantity
      </label>
      <input
        type="text"
        className="form-control"
        name="quantity"
        id="validationCustom03"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>
    <div className="col-md-12">
      <label htmlFor="validationCustom04" className="form-label">
        Main Category
      </label>
      <select
        onChange={handleChange}
        name="main_category"
        value={formData.main_category}
        className="form-select"
        id="validationCustom04"
        required
      >
        <option>Choose Main Category</option>
        <option>Men</option>
        <option>Women</option>
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
    {(() => {
      if (formData.main_category === "Men") {
        return (
          <div className="col-md-12">
            <label htmlFor="validationCustom04" className="form-label">
              Sub Category
            </label>
            <select
              onChange={handleChange}
              name="sub_category"
              value={formData.sub_category}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option>tshirt</option>
              <option>shirt</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-md-12">
            <label htmlFor="validationCustom04" className="form-label">
              Sub Category
            </label>
            <select
              onChange={handleChange}
              name="sub_category"
              value={formData.sub_category}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option>tshirt</option>
              <option>top</option>
              <option>skirt</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
        );
      }
    })()}

    <div className="col-md-12">
      <label htmlFor="validationCustom03" className="form-label">
        Discount (optional)
      </label>
      <input
        type="text"
        className="form-control"
        name="discount"
        id="validationCustom03"
        value={formData.discount}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>

    <div className="col-md-12">
      <label htmlFor="validationCustom03" className="form-label">
        Product Image
      </label>
      <input
        type="text"
        className="form-control"
        name="product_image"
        id="validationCustom03"
        value={formData.product_image}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>

    <div className="col-12">
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </div>
  </form>
</div>
    
    </>
   
  );
};

export default AdminUploadProduct;
