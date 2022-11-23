import React, { Component } from "react";

class ProductDetails extends Component {
    handleSave = () => {
        // navigate to producct
        this.props.history.replace('/products')

        // this method is used mostly with login pages because .push actually goes back to the login form while .replace doesn't go back
    } 

    render(){
        return (
            <div>
                <h1>Product details - {this.props.match.params.id}</h1>
                {/* <h1>Product details - </h1> */}
                <button onClick={this.handleSave}> Save</button>
            </div>
        )
    }
}
export default ProductDetails