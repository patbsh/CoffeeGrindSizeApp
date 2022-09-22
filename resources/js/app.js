import './bootstrap';
window.Form = Form;

import Form from './form';
import { createApp } from 'vue/dist/vue.esm-bundler';

import GrindSizeComponent from './components/GrindSizeComponent.vue';
import GrinderDetailsComponent from './components/GrinderDetailsComponent.vue';

const app = createApp({});

app.component('grind-size-component', GrindSizeComponent);
app.component('grinder-details-component', GrinderDetailsComponent);

app.mount("#app");
