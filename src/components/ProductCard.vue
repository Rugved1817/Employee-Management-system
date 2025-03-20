<template>
  <div>
    <!-- Navbar -->
    <!-- <nav class="navbar">
      <h1 class="logo">
        <span>MY</span><span class="highlight">180</span>
      </h1>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/EmployeeRole">Roles</router-link></li>
        <li><router-link to="/departments">Departments</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </nav> -->

    <div class="container">
      <hr class="divider" />
      <h2 class="title">Employee Management System</h2>
      <p class="subtitle">Winjit Technologies Where Interns are paid well !!</p>
      <hr class="divider" />

      <!-- New Employee Card -->
      <div class="product-grid">
        <router-link to="/ConfigureProduct" class="product-card primary-button">
          <div style="display: flex; flex-direction: column; justify-content: space-between">
            <img :src="newIcon" style="max-width: 160px;" alt="New Product" class="product-image" />
            <span class="product-title" style="padding: 10px; font-size: 20px">New Employee</span>
          </div>
        </router-link>
      </div>

      <!-- Employee List -->
      <div class="employee-list">
        <h3 class="employee-title">Current Employees</h3>
        <div v-if="employees.length" class="employee-grid">
          <div v-for="employee in employees" :key="employee.employeeId" class="employee-card" @click="handleEmployeeClick(employee)">
            <p class="employee-name">{{ employee.employeeName }}</p>
          </div>
        </div>
        <p v-else class="no-employees">No employees found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import newIcon from "@/assets/financial-profit.png";

export default {
  data() {
    return {
      newIcon,
      employees: []
    };
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await axios.get("https://localhost:7159/api/employees");
        this.employees = response.data;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    handleEmployeeClick(employee) {
      this.$router.push(`/employee/${employee.employeeId}`);
    }
  },
  mounted() {
    this.fetchEmployees();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000000;
  color: white;
  font-family: 'Inter', sans-serif;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff416c;
}

.container {
  padding: 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.highlight {
  color: #e60000;
}

.divider {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 1.5rem 0;
}

.title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 1rem;
}

.subtitle {
  color: gray;
  margin-bottom: 1.5rem;
}

.product-grid {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  width: 200px;
  height: 200px;
  text-align: center;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.primary-button {
  background: linear-gradient(135deg, #ff4b2b, #ff416c);
  color: white;
  font-weight: 600;
}

.employee-list {
  margin-top: 2rem;
  text-align: left;
}

.employee-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.employee-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.employee-card {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: 200px;
  height: 200px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.employee-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.employee-name {
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
}

.no-employees {
  color: gray;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
