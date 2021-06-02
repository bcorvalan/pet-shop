import React from 'react'


function ProductCardWithProps(props) {
    return (
        <div className="product-card">
		<div className="product-tumb">
			<img src="https://http2.mlstatic.com/D_NQ_NP_780319-MLA30086383985_042019-V.jpgg" alt=""/>
		</div>
		<div className="product-details">
			<h4>Royal Canin Feline</h4>
			<p>{props.peso}</p>
			<div className="product-bottom-details">
				<div className="product-price">{props.precio}</div>
			</div>
		</div>
	</div>
    )
}

export default ProductCardWithProps

