<template>
  <div class="configure-container">
    <h2>Add Employee</h2>
    <form @submit.prevent="addEmployee">
      <div class="form-group">
        <label for="employeeName">Employee Name</label>
        <input type="text" id="employeeName" v-model="employee.employeeName" required />
      </div>

      <div class="form-group">
        <label for="roleName">Role Name</label>
        <select id="roleName" v-model="employee.roleName" required>
          <option value="" disabled>Select a role</option>
          <option v-for="role in roles" :key="role.roleId" :value="role.roleName">
            {{ role.roleName }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="pastExperience">Past Experience (Years)</label>
        <input type="number" id="pastExperience" v-model.number="employee.pastExperience" required min="0" />
      </div>

      <button type="submit" class="submit-btn">Add Employee</button>

      <p v-if="message" :class="{ success: success, error: !success }">
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employee: {
        employeeName: "",
        roleName: "", // Sending roleName instead of roleId
        pastExperience: 0,
      },
      roles: [],
      success: null,
      message: "",
    };
  },
  methods: {
    async fetchRoles() {
      try {
        const response = await axios.get("https://localhost:7159/api/employees/roles");
        this.roles = response.data; // API returns an array of { roleId, roleName }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    },
    async addEmployee() {
      try {
        const payload = {
          employeeName: this.employee.employeeName.trim(),
          roleName: this.employee.roleName.trim(), // Send roleName
          pastExperience: Number(this.employee.pastExperience),
        };

        console.log("Final Payload:", payload); // Debugging

        const response = await axios.post("https://localhost:7159/api/employees", payload, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200 || response.status === 201) {
          this.success = true;
          this.message = "Employee added successfully!";
          this.resetForm();
          setTimeout(() => this.$router.push("/"), 1500);
        } else {
          throw new Error("Unexpected server response.");
        }
      } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        this.success = false;
        this.message =
          error.response?.data?.message ||
          (error.response?.status === 400 ? "Invalid input. Please check your data." : "Failed to add employee.");
      }
    },
    resetForm() {
      this.employee = {
        employeeName: "",
        roleName: "",
        pastExperience: 0,
      };
    },
  },
  mounted() {
    this.fetchRoles();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.configure-container {
  max-width: 450px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.2rem;
  text-align: left;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 0.3rem;
  display: block;
}

input,
select {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s ease-in-out;
  outline: none;
}

input:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #0056b3, #003c80);
}

p {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
}

.success {
  color: #28a745;
}

.error {
  color: #dc3545;
}

@media (max-width: 500px) {
  .configure-container {
    max-width: 90%;
    padding: 1.5rem;
  }
}
</style>
