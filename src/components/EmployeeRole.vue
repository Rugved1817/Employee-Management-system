<template>
  <div class="container">
    <!-- <nav class="navbar">
      <h1 class="logo">
        <span>MY</span><span class="highlight">180</span>
      </h1>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/EmployeeRole">Roles</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav> -->
    
    <!-- Corrected Image Binding -->
    <img :src="MeetingImage" alt="Life at My180" class="banner" />
    
    <h2 class="title">Life at My180</h2>
    <p class="subtitle">
      At My180, we believe in innovation, collaboration, and growth. Our teams work together
      to create cutting-edge solutions while maintaining a great work-life balance. With a 
      strong focus on continuous learning and career development, we ensure that every team 
      member thrives in an enriching environment.
    </p>
    
    <hr class="divider" />
    
    <h2 class="title">Explore Our Roles</h2>
    <div class="role-list">
      <div v-for="role in roles" :key="role.id" class="role-card">
        <h3 class="role-name">{{ role.name }}</h3>
        <p class="role-description">{{ role.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ✅ Corrected Image Import
      MeetingImage: require('@/assets/drawing-women-looking-camera.jpg'),
      roles: [
        { id: 1, name: "Software Engineer", description: "Develops and maintains software applications." },
        { id: 2, name: "Senior Software Engineer", description: "Leads software development projects and mentors junior engineers." },
        { id: 3, name: "Tech Lead", description: "Oversees technical solutions and ensures best practices in development." },
        { id: 4, name: "Project Manager", description: "Manages project timelines, scope, and resources to ensure successful delivery." },
        { id: 5, name: "QA Engineer", description: "Ensures software quality through testing and validation processes." },
        { id: 6, name: "DevOps Engineer", description: "Manages deployment, infrastructure, and automation processes." },
        { id: 7, name: "UI/UX Designer", description: "Creates user-friendly interfaces and enhances user experience." },
        { id: 8, name: "Product Manager", description: "Defines product vision and roadmap to align with business goals." },
        { id: 9, name: "Scrum Master", description: "Facilitates Agile processes and ensures team productivity." },
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

.container {
  padding: 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.highlight {
  color: #ff0000;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li {
  position: relative;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-links li a:hover {
  background-color: #000000;
  color: #004080;
}

.banner {
  width: 90%;
  max-height: 300px;
  object-fit: contain ;
  border-radius: 15px;
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

 .banner:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
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
  font-size: 1.1rem;
  line-height: 1.6;
}

.role-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.role-card {
  background: rgb(244, 157, 157);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  text-align: left;
  transition: transform 0.2s ease-in-out;
}

.role-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.role-name {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.role-description {
  color: gray;
  font-size: 1rem;
}
</style>
