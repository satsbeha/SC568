import React from 'react';
import axios from 'axios';
import NewProduct from '../components/NewProduct';
class UpdateBookApp extends React.Component {
    state={
        updateProduct:{}
    }
 async componentDidMount(){
    const response = await axios.get("/products/" + this.props.match.params.id);
    const copy={...this.state}
    copy.updateProduct=response.data
    this.setState(copy)
 }
 updateProductChange=(event)=>{
    const copy={...this.state}
    copy.updateProduct[event.target.name]=event.target.value 
    this.setState(copy)
 }
 updateProduct=async()=>{
     await axios.put("/products/"+this.props.match.params.id,this.state.updateProduct);
     this.props.history.push('/view-products')
 }
    render() { 
        return <div>
            <NewProduct
            name={this.state.updateProduct.name}
            price={this.state.updateProduct.price}
            model={this.state.updateProduct.model}
            manufacturer={this.state.updateProduct.manufacturer}
            description={this.state.updateProduct.description}
            newProductChange={(event)=>this.updateProductChange(event)}
            saveProduct={this.updateProduct}
            ></NewProduct>
        </div>;
    }
}
 
export default UpdateBookApp;