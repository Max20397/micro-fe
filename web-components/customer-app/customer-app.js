export default class CustomerApp extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<div class="customer-info">
        <h2>Customer Info</h2>
        <form>
          <label>Name: <input type="text" name="name" /></label><br />
          <label>Email: <input type="email" name="email" /></label><br />
          <button type="submit">Submit</button>
        </form>
      </div>`;
	}
}

customElements.define("customer-app", CustomerApp)