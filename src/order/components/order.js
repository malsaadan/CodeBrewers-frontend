import React from 'react';
class Order extends React.Component {
       constructor (props) { 
           super(props);

            this.state={ 
                itemPrice:this.props.itemPrice, 
                itemID:this.props.itemID,
               // orderList: [this.props.orderList],
                totalPrice:0 
                        }
       }


    //    totalPrice = () =>{
    //        if (this.props.itemID === this.props.itemID) {
    //         const n=this.props.price
    //         var total = 0;
    //           for(var i = 0; i < n.length; i++){
    //             total += i;
    //           }
    //           return total;
    //        }
       
    //     }
    
    render() { 

        return ( 
            <div>
                <h2>================================ </h2>
            <h2>{this.props.discount}</h2>
        <p> TOTAL :: { this.props.totalPrice} </p>

            </div>
         );
    }
}
export default Order;