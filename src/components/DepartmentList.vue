<template>
  <div class="department-container">
    <h2>Company Departments</h2>
    <div class="department-grid">
      <div v-for="department in departments" :key="department.id" class="department-card">
        <h3>{{ department.name }}</h3>
        <p><strong>Head:</strong> {{ department.hod }}</p>
        <p><strong>Employees:</strong> {{ department.totalEmployees }}</p>
        <p class="description">{{ department.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DepartmentsList",
  data() {
    return {
      departments: [
        {
          id: 1,
          name: "Human Resources",
          hod: "Sophia Patel",
          totalEmployees: 3,
          description: "Responsible for employee management, recruitment, and workplace culture.",
        },
        {
          id: 2,
          name: "Information Technology",
          hod: "Aryan Mehta",
          totalEmployees: 8,
          description: "Handles software development, cybersecurity, and IT infrastructure.",
        },
        {
          id: 3,
          name: "Marketing",
          hod: "Aisha Khan",
          totalEmployees: 2,
          description: "Oversees branding, advertising, and digital marketing strategies.",
        },
        {
          id: 4,
          name: "Finance",
          hod: "Rahul Deshmukh",
          totalEmployees: 4,
          description: "Manages budgeting, accounting, and financial analysis.",
        },
        {
          id: 5,
          name: "Operations",
          hod: "Kavita Sharma",
          totalEmployees: 2,
          description: "Ensures smooth business operations and supply chain management.",
        },
        {
           id: 6,
          name: "Reaserch",
          hod: "Rohit Sharma",
          totalEmployees: 1,
          description: "Ensures smooth business Reaserch and other works related to reaserch.",   
        }
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap");

.department-container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: rgb(244, 157, 157);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
}

.department-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.department-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out;
}

.department-card:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #007bff;
}

p {
  font-size: 1rem;
  color: #555;
  margin: 0.3rem 0;
}

.description {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.8rem;
}
</style>
