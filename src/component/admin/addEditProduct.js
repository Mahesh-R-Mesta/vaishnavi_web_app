import { Button, FormLabel, TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import './styles_all/addProduct.css'
import { faMoneyBill, faWeight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import ApiRequest from '../../config/apiRequest';
import URL from './../../utils/urls';
import StatusCode from "../../config/status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const inputProps = (icon) => {
   return {
    endAdornment: (
        <InputAdornment position='end'>
        <FontAwesomeIcon icon={icon}/>
        </InputAdornment>
    )
   }
};


const isEmpty = (obj, msg)=>{
    if(obj.value === ''){
        toast(msg);
        return false;
    } else {
        return true;
    }  
}
function clear(){
    const productName = document.getElementById('productName');
    const type = document.getElementById('productType');
    const weight = document.getElementById('weight');
    const price = document.getElementById('price');
    const company = document.getElementById('company');
    const checkbox = document.getElementById('checkBox');
    productName.value='';
    type.value='';
    weight.value='';
    price.value='';
    company.value='';
    checkbox.value=false;
}

function validate(){
    const productName = document.getElementById('productName');
    const type = document.getElementById('productType');
    const price = document.getElementById('price');
    return isEmpty(productName,'Please Enter Product Name') &&
    isEmpty(type,'Please Enter Product Type') &&
    isEmpty(price,'Please Enter Price');
}



 function AddProduct(props){
    const [isNew, setNew] = useState(true);
    const navigate = useNavigate()
    const productName = document.getElementById('productName');
    const type = document.getElementById('productType');
    const weight = document.getElementById('weight');
    const price = document.getElementById('price');
    const company = document.getElementById('company');
    const checkbox = document.getElementById('checkBox');
    let productId;
    if(!window.location.href.includes('?=id')) {
         productId = window.location.href.split('?')[1].split('=')[1];
    }
    useEffect(()=>{
            getProductById();     
    },[]);
    
    async function addNewProduct() {  
    if(!validate()) return;
        const sendObj = {
            productName: productName.value,
            productType: type.value,
            weight: weight.value,
            price: price.value,
            company: company.value,
            isAvailable: checkbox.value || true
        }    
        const response = await ApiRequest.call('POST' ,URL.addProduct, sendObj);
        if(response.code === StatusCode.success) {
            clear();
            toast('Successfully Added');
        } else {
            toast('Failed To Added Product');
        }
  }

  async function getProductById(){
    const productName = document.getElementById('productName');
    const type = document.getElementById('productType');
    const weight = document.getElementById('weight');
    const price = document.getElementById('price');
    const company = document.getElementById('company');
    const checkbox = document.getElementById('checkBox');
    if(!window.location.href.includes('?=id')) {
      const product = await ApiRequest.call('GET',`${URL.getAllProducts}?id=${productId}`);
      console.log(product);
      if(product.code === StatusCode.success){
          productName.value =product.data.productName;
          type.value = product.data.productType;
          price.value = product.data.price;
          weight.value = product.data.weight;
          company.value = product.data.company;
          checkbox.value = product.data.isAvailable;
          setNew(false);
      }
    }
  }

  async function updateProduct(){
 
      const update = await ApiRequest.call('POST',`${URL.updateProduct}?id=${productId}`,{
        productName: productName.value,
        productType: type.value,
        weight: weight.value,
        price: price.value,
        company: company.value,
        isAvailable: checkbox.value || true
      },{validate:true});
      if(update.code === StatusCode.success){
          toast('Successfully Updated');
      } else {
        toast('Failed to Update');
      }

  }
    return (
        <div className="productScreen">
            <div className="row d-grid-gap-2 p-3"> 
            
                <h4 className="col subhead">
                <IconButton className='mb-2' style={{marginRight:'10px'}} onClick={()=>navigate(-1)}>
                   <FontAwesomeIcon icon={faArrowLeft}/>
                </IconButton>
                ADD YOUR NEW PRODUCT</h4>
            </div>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                <TextField id="productName" type='text' className='col m-3' width='20px' label='Product Name'/>
                <TextField id="productType" className='col m-3' width='20px'  label='Product Type *'/>
                <TextField id="weight" className='col m-3' width='20px'type='number' label='Weight (grams)' InputProps={inputProps(faWeight)}/>
                <TextField id="price" className='col m-3' width='0px' type='number'  label="Price ₹" InputProps={inputProps(faMoneyBill)}/>
                <TextField id="company" className='col m-3' width='20px'  label="Company"/>
                
            </div>  
            <div className="col m-3">
               <input id="checkBox" className="checkbox" type='checkbox' value={true}/>
                <FormLabel style={{fontSize:'18px',color:"black"}}>Product Available</FormLabel>
            </div>
            <div style={{margin:'20px',alignSelf:'baseline'}}>
                <input className="btn btn-primary submitButton" type='button' value={isNew ? "ADD" : "UPDATE"} onClick={()=> isNew ? addNewProduct(): updateProduct()} />
                <input className="btn btn-danger submitButton" type='button' value="CLEAR" onClick={()=> clear()}/>
            </div>
            <ToastContainer/>
        </div>
        );
}





export default AddProduct; 