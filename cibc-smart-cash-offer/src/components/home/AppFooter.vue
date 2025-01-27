<template>
    <footer class=" text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>About CIBC</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white-50">Corporate Profile</a></li>
              <li><a href="#" class="text-white-50">Careers</a></li>
              <li><a href="#" class="text-white-50">Investor Relations</a></li>
              <li><a href="#" class="text-white-50">Media Centre</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>Support</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white-50">Contact Us</a></li>
              <li><a href="#" class="text-white-50">Find a Banking Centre</a></li>
              <li><a href="#" class="text-white-50">Security</a></li>
              <li><a href="#" class="text-white-50">Accessibility</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Connect with Us</h5>
            <div class="d-flex">
              <a href="#" class="me-3 text-white"><i class="bi bi-facebook"></i></a>
              <a href="#" class="me-3 text-white"><i class="bi bi-twitter"></i></a>
              <a href="#" class="me-3 text-white"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="me-3 text-white"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} CIBC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background: linear-gradient(135deg, #c41e3d, #8b1c41);

  }
  
  footer a {
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: white !important;
    text-decoration: none;
  }
  
  .bi {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }
  
  .bi:hover {
    transform: scale(1.2);
  }
  </style>
  
  