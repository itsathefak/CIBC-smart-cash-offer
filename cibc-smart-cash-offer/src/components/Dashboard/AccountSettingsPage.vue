<template>
  <div class="account-settings-page">
    <h1>Account Settings</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Personal Information</h5>
            <form>
              <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" value="John Doe">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" value="john.doe@example.com">
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" value="(123) 456-7890">
              </div>
              <button type="submit" class="btn btn-primary">Update Information</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Security Settings</h5>
            <form>
              <div class="mb-3">
                <label for="currentPassword" class="form-label">Current Password</label>
                <input type="password" class="form-control" id="currentPassword">
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="newPassword">
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control" id="confirmPassword">
              </div>
              <button type="submit" class="btn btn-primary">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Notification Preferences</h5>
            <form>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="emailNotifications" checked>
                <label class="form-check-label" for="emailNotifications">
                  Receive email notifications
                </label>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="smsNotifications" checked>
                <label class="form-check-label" for="smsNotifications">
                  Receive SMS notifications
                </label>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="pushNotifications">
                <label class="form-check-label" for="pushNotifications">
                  Receive push notifications
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Save Preferences</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  // Add any necessary imports and logic here
  </script>
  
  <style scoped>
  .account-settings-page {
    padding: 20px;
  }
  </style>
  
  