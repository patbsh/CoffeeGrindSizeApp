import './bootstrap';
window.Form = Form;

import Form from './form';
import { createApp } from 'vue/dist/vue.esm-bundler';

import GrindSizeComponent from './components/GrindSizeComponent.vue';

const app = createApp({});

app.component('grind-size-component', GrindSizeComponent);

app.mount("#app");
