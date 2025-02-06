import { defineCustomElement } from '@vue/web-component-wrapper';
import App from './App.vue';

 const CustomElement = defineCustomElement(App);

 customElements.define('mfe-vue', CustomElement);
