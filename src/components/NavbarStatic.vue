<template>
    <nav class="navbar">
      <h1 class="logo">
        <span>MY</span><span class="highlight">180</span>
      </h1>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/EmployeeRole">Roles</router-link></li>
        <li><router-link to="/DepartmentList">Departments</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "NavbarStatic",
};
</script>

<style>
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
</style>
