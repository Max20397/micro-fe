class HomeApp extends HTMLElement {
	connectedCallback() {
	  this.innerHTML = `
		<div style="padding: 16px; border: 1px solid #ccc;">
		  <h1>Welcome to the Home Page</h1>
		  <p>This is the Home Micro Frontend.</p>
		</div>
	  `;
	}
  }
  
  customElements.define('home-app', HomeApp);
  