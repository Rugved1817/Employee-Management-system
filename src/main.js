import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/routes'; // Ensure the correct path

const app = createApp(App);

app.use(router);
app.mount('#app');