export default class CartApp extends HTMLElement{
	constructor(){
		super();
		this.cart = [];
	}
	connectedCallback() {
		this.render();
		document.addEventListener("add-to-cart", e => {
			this.cart.push(e.detail);
			this.render();
		})
	}

	render(){
		const total = this.cart.reduce((sum, item) => sum + parseInt(item.price), 0);
		this.innerHTML = `<div class="cart">
        <h2>Your Cart</h2>
        <ul>
          ${this.cart.map((item) => `<li>${item.product} - $${item.price}</li>`).join('')}
        </ul>
        <p>Total: $${total}</p>
      </div>`
	}
}

customElements.define("cart-app", CartApp)