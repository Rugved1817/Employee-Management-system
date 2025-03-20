import { createRouter, createWebHistory } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import ConfigureProduct from '../components/ConfigureProduct.vue';
import employeeDetails from '../components/employeeDetails.vue';
import EmployeeRole from '../components/EmployeeRole.vue';
import DepartmentList from '../components/DepartmentList.vue'; // ✅ Corrected import

const routes = [
  {
    path: '/',
    component: ProductCard,
  },
  {
    path: '/ConfigureProduct',
    component: ConfigureProduct,
  },
  {
    path: '/employee/:id', 
    component: employeeDetails,
    props: true, 
  },
  {
    path: '/EmployeeRole',
    component: EmployeeRole,
  },
  {
    path: '/DepartmentList',  // ✅ Fixed route definition
    component: DepartmentList, // ✅ Used the imported component correctly
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
