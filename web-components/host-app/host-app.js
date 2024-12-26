const loadMicroFrontend = async (url, containerId) => {
	try {
		const {default: MicroFrontend} = await import(url);
		const container = document.getElementById(containerId);
		container.appendChild(new MicroFrontend());

	} catch (error) {
		console.log({error})
	}
}

loadMicroFrontend("http://127.0.0.1:3001/home-app.js","home");
loadMicroFrontend("http://127.0.0.1:3002/product-app.js","product");
loadMicroFrontend("http://127.0.0.1:3003/cart-app.js","cart");
loadMicroFrontend("http://127.0.0.1:3004/customer-app.js","customer");
