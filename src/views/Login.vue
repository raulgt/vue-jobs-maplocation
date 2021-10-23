<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <!-- [ngClass]="{'face' : shake}" -->
        <form
          class="login100-form validate-form flex-sb flex-w"
          @submit.prevent="submitLogin"
        >
          <span class="login100-form-title">
            Task mapping
            <p>Using Vue.js</p>
          </span>

          <!-- <span class="text-danger">El correo es obligatorio</span> -->
          <div class="wrap-input100 mt-2">
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Username"
              autocomplete="off"
              v-model="email"
              :class="{ invalid: $v.email.$invalid && $v.email.$dirty }"
            />

            <span class="focus-input100"></span>
          </div>

          <!-- <span class="text-danger">La contraseña debe de ser más de 6 letras</span> -->
          <div class="wrap-input100 mt-2">
            <input
              class="input100"
              type="password"
              name="password"
              placeholder="Password"
              v-model="password"
              autocomplete="off"
              style="padding-left: red"
              :class="{ invalid: $v.password.$invalid && $v.password.$dirty }"
            />
          </div>

          <div class="container-login100-form-btn mt-2">
            <!-- [ngClass]="{'disable-button': !forms.valid}" [disabled]="!forms.valid" -->
            <button
              class="login100-form-btn"
              type="submit"
              :class="{ 'disable-button': $v.$invalid }"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { loginService } from "../shared/login.service";
import { required, email } from 'vuelidate/lib/validators';


export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      credentials: {
        access_token: "",
        expires_in: 0,
        token_type: "",
      },
    };
  },  
  validations: {
     email: {
       required,
       email,
    },  
    password:{
     required,
    }  
  },
  methods: {
     async submitLogin() {
      this.$v.$touch();      
      if (!this.$v.$invalid) {  
          let credential = {
            email: this.email,
            password: this.password,
          };
          this.credentials = await loginService.loginUser(credential);        
          if (Object.keys(this.credentials).length !== 0) {
            this.$router.push({ name: 'home' });
          }        
      }
    },
  },
};
</script>

<style scoped>
@import "../design/main.css";

input.invalid {
  border-left: 10px rgb(251, 31, 31) solid !important;
}

.disable-button {
  background-color: grey;
}

/* Shake */

.face {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

/* Animated */

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fast {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}
</style>