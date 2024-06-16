<template>
    <div class="container">
      <span class="big-circle"></span>
      <img src="../../assets/images/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
            adipisci recusandae praesentium dicta!
          </p>
  
          <div class="info">
            <div class="information">
              <img src="../../assets/images/location.png" class="icon" alt="" />
              <p>Trujillo</p>
            </div>
            <div class="information">
              <img src="../../assets/images/email.png" class="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src="../../assets/images/phone.png" class="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>
  
          <div class="social-media">
            <p>Conecta Con Nosotros:</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>
  
          <form action="index.html" autocomplete="off">
            <h3 class="title">Contactanos:</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" v-model="formData.name" />
              <label>Nombre</label>
              <span>Nombre</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" v-model="formData.email" />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" v-model="formData.phone" />
              <label>Telefono</label>
              <span>Telefono</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" v-model="formData.message"></textarea>
              <label>Mensaje</label>
              <span>Mensaje</span>
            </div>
            <input type="submit" value="Enviar" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const inputs = ref(null);
  
  const focusFunc = (event) => {
    const parent = event.target.parentNode;
    parent.classList.add('focus');
  };
  
  const blurFunc = (event) => {
    const parent = event.target.parentNode;
    if (event.target.value === '') {
      parent.classList.remove('focus');
    }
  };
  
  onMounted(() => {
    inputs.value = document.querySelectorAll('.input');
    inputs.value.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });
  });
  </script>
  
  <style scoped>
  @import url('./Contact.css');
  </style>