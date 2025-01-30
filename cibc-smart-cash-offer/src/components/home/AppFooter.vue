<template>
  <footer class="cibc-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About CIBC</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Find a Banking Centre</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Accounts</a></li>
            <li><a href="#">Credit Cards</a></li>
            <li><a href="#">Mortgages</a></li>
            <li><a href="#">Investments</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect with Us</h4>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#" aria-label="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="#" aria-label="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            <a href="#" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 CIBC. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
.cibc-footer {
  background-color: #333;
  color: #fff;
  padding: 3rem 0 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1.5rem;
}

h4 {
  color: #c41f3e;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #c41f3e;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.social-icons svg {
  font-size: 1.2rem;
  color: white;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-links {
    margin-top: 1rem;
  }
}
</style>

