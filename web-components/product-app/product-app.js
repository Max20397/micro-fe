class ProductApp extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="product">
				<h2>Product List</h2>
				<ul>
				<li>
					Dog - $100
					<button data-product="Dog" data-price="100">Add to Cart</button>
				</li>
				<li>
					Cat - $80
					<button data-product="Cat" data-price="80">Add to Cart</button>
				</li>
				</ul>
			</div>
			`;
		
			this.querySelectorAll("button").forEach(button => {
				button.addEventListener("click", e => {
					const product = e.target.dataset.product;
					const price = e.target.dataset.price;

					this.dispatchEvent(
						new CustomEvent("add-to-cart", {
							detail: {product, price},
							bubbles: true
						})
					)
				})
			})
	}
}


customElements.define("product-app", ProductApp)
