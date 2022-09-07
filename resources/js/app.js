import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import TestComponent from './components/TestComponent.vue';
import GrindSizeComponent from './components/GrindSizeComponent.vue';
import vSelect from 'vue-select';

const app = createApp({});

app.component('test-component', TestComponent);
app.component('grind-size-component', GrindSizeComponent);
app.component('v-select', vSelect);

app.mount("#app");
