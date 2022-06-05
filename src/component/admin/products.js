import React, {useEffect,useState} from "react";
import { faAdd, faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography, TextField, InputAdornment,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ApiRequest from '../../config/apiRequest';
import './styles.css'
import URL from "../../utils/urls";
import StatusCode from "../../config/status";
import { toast,ToastContainer } from "react-toastify";

const iconStyle = {
    height:20,
    width: 20,
    color:'orange'
}

const headerText = {
    fontSize:18,
    fontWeight: 'bold',
    color: 'orange',
    padding: '20px'
}

const bodyText = {
    fontSize:17,
    fontWeight: '500',
    padding: '20px',

}

const cardStyle = {
    marginLeft:'10px',
    marginBottom:'10px',
    marginTop:'10px',
    backgroundColor:'white',
    boxShadow: '1px 1px 3px grey',
    radius:'5px'
}

const searchField = {
    style:{
        margin:'10px 10px 10px 10px',
        // size:'gl',
        borderWidth: 1,
        borderColor:'orange',
        borderRadius: '20px'
    },
    inputProp:{
        classes:{
            notchedOutline:{
                borderWidth:'1px',
                borderColor:'orange'
            }
        },
        endAdornment:(
            <InputAdornment position='end'>
                <IconButton>
                <FontAwesomeIcon icon={faSearch} style={iconStyle}/>
                </IconButton>
            </InputAdornment>
        
        )
      
    }
}


function Header() {
    return (<thead>
                <tr> 
                   <td style={headerText}>No</td>
                    <td style={headerText}>Product Name</td>
                    <td style={headerText}>Price</td>
                    <td style={headerText}>Weight</td>
                    <td style={headerText}>Type</td>
                    <td style={headerText}>Company</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>);
}


function ProductScreen() {
    const [products, setProduct ] = useState([]); 
    const [allProduct, setShowProduct] = useState([]);
    const navigate = useNavigate();
    
    async function getAllProducts(){
     const data = await ApiRequest.call('GET',URL.getAllProducts);
     if((data.code === StatusCode.success) && (data.data.length > 0)){
        setProduct(data.data);
        setShowProduct(data.data);
     }
    }

    async function deleteProduct(id){
        console.log(`${URL.deleteProduct}?id=${id}`);
       const response = await ApiRequest.call('GET',`${URL.deleteProduct}?id=${id}`);
       console.log(response);
       if(response.code === StatusCode.success){
           toast('Successfully Deleted');
           getAllProducts();
       } else {
           toast('Failed');
       }
    }

    function filterIt(e){
     
     if(e.target.value === '' || e.target.value === null){
        setShowProduct(products);
        return;
     }
     
     const sorted = products.filter((obj)=> {
         return obj.productName.includes(e.target.value) || 
         obj.company.includes(e.target.value) || 
         obj.productType.includes(e.target.value) ||
         obj.price.toString().includes(e.target.value)
        });
     setShowProduct(sorted);
    }


    useEffect(()=>{
        getAllProducts();
    },[]);

    return <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            
            <TextField id='search' label='Search' InputProps={searchField.inputProp} style={searchField.style} onChange={(e)=>filterIt(e)} />
            
            <div className="collapse navbar-collapse"></div>
            <Button onClick={() => navigate('/admin/addProduct')}>
                <FontAwesomeIcon icon={faAdd} style={iconStyle}/>
                <Typography variant='h6' color='orange' paddingRight='10px'>Add New</Typography>
            </Button>
            
        </nav>
        <table width="100%" margin="10px" >
            <Header/>
            <tbody>
            {allProduct.map((p,i)=>{
            return <tr style={cardStyle}>
                <td style={bodyText}>{i+1}.</td>
                <td style={bodyText}>{p.productName}</td>
                <td style={bodyText}>{p.price} Rs</td>
                <td style={bodyText}>{p.weight} grams</td>
                <td style={bodyText}>{p.productType}</td>
                <td style={bodyText}>{p.company}</td>
                <td>
                    <IconButton onClick={()=> navigate(`/admin/addProduct?id=${p._id}`)}>
                        <FontAwesomeIcon icon={faEdit} style={iconStyle}/>
                    </IconButton>
                </td>
                <td>
                    <IconButton onClick={()=> deleteProduct(p._id)}>
                        <FontAwesomeIcon icon={faTrash} style={{color:'red'}}/>
                    </IconButton>
                </td>
            </tr> 
        })}
            </tbody>
        </table> 
        <ToastContainer/>
        </div>

}

export default ProductScreen;



