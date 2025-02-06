const loadMicroFrontend = async (url, containerId) => {
	try {
		const {default: MicroFrontend} = await import(url);
		const container = document.getElementById(containerId);
		container.appendChild(new MicroFrontend());

	} catch (error) {
		console.log({error})
	}
}

const microFrontends = [
    { url: "http://127.0.0.1:3001/home-app.js", containerId: "home" },
    { url: "http://127.0.0.1:3002/product-app.js", containerId: "product" },
    { url: "http://127.0.0.1:3003/cart-app.js", containerId: "cart" },
    { url: "http://127.0.0.1:3004/customer-app.js", containerId: "customer" }
];

microFrontends.forEach(({ url, containerId }) => loadMicroFrontend(url, containerId));