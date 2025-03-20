<template>
  <div class="employee-details-container">
    <h1 class="header">Employee Details</h1>

    <div v-if="employee" class="employee-card">
      <div class="input-group">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="employee.employeeName" disabled />
      </div>

      <div class="input-group">
        <label for="roleId">Role ID</label>
        <input id="roleId" type="text" v-model="employee.employeeRoleId" disabled />
      </div>

      <div class="input-group">
        <label for="experience">Past Experience (Years)</label>
        <input id="experience" type="text" v-model="employee.pastExperience" disabled />
      </div>

      <div class="input-group">
        <label for="joinedOn">Joined On</label>
        <input id="joinedOn" type="text" :value="formatDate(employee.joinedOn)" disabled />
      </div>
    </div>

    <p v-else class="loading">Loading employee details...</p>

    <button class="back-button" @click="$router.push('/')">Back to Employee List</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      employee: null,
    };
  },
  methods: {
    async fetchEmployeeDetails() {
      try {
        const response = await axios.get(`https://localhost:7159/api/employees/${this.id}`);
        this.employee = response.data;
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
  mounted() {
    this.fetchEmployeeDetails();
  },
};
</script>

<style scoped>
/* Container */
.employee-details-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Header */
.header {
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

/* Employee Card */
.employee-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}

/* Input Groups */
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
  text-align: left;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #f5f5f5;
  color: #333;
  cursor: not-allowed;
  outline: none;
}

/* Loading Text */
.loading {
  font-size: 18px;
  color: #777;
}

/* Back Button */
.back-button {
  margin-top: 20px;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.back-button:hover {
  background: linear-gradient(135deg, #ff4b2b, #ff416c);
}
</style>
