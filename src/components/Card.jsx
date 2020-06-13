import React, { Component } from 'react'



export class Item extends Component {
    constructor(props){
        super(props)

        this.price = props.product.price.split('.')
    }

    render() {
        const [f,s] = this.price;
        return (
            <div class="col-md-4 col-lg-3 col-sm-6">
                <div class="items">
                    <div class="image" style={ {
                        backgroundImage: `url(assets/images/${this.props.product.image})`,
                        backgroundSize: 'cover', 
                        marginBottom: '20px',
                        backgroundPosition: 'center 0',
                     } } ></div>

                    <p class="text-center" >{this.props.product.name}</p>
                    <div class="hr"></div>
                    <p class="text-center"><small>$</small><span style={styles.span}>{f}</span><small>.{s}</small></p>
                    <p class="text-center">or 9 x$1.21</p>
                    <button style={styles.button}>Add to cart</button>
                </div>
		    </div>
        )
        
    }
}

 const styles = {
    image: {
        backgroundSize: 'cover', 
        marginBottom: '20px',
        backgroundPosition: 'center',
    },
    button: {
        width: '100%', 
        backgroundColor: 'black',
        border: 'none',
        padding: '10px',
        color: 'white',
    },
    span: {
        fontSize: '20px',
        fontWeight: 'bold'
    }

 } 
