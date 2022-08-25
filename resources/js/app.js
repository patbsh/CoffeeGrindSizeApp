import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import TestComponent from './components/TestComponent.vue';

const app = createApp({});

app.component('test-component', TestComponent);


app.mount("#app");
