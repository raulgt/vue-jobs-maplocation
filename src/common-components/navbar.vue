<template>
  <div>
    <nav class="navbar navbar-expand-lg bd-navbar navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand">{{ currentUser }}</a>
          <button class="btn btn-bd-download" type="button" @click="askToLogout()">
            <span class="button-text">Logout</span>
          </button>
      </div>
    </nav>
    <Modal      
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="setLogout"
    >
    </Modal>
  </div>
</template>

<script>
import Modal from "../common-components/modal.vue";
import { loginService } from "../shared/login.service";

export default {
  name: "NavBar",
  data() {
    return {    
      modalMessage: "Please, confirm the logout..!!",
      showModal: false,
    };
  },
  props: {
    currentUser: {
      type: String,
      default: ''
    },
  },
  components: {
    Modal,
  },
  methods: {
    askToLogout(){     
       this.showModal = true;
    }, 
    closeModal(){
       this.showModal = false;
    },
    setLogout() {   
      loginService.logOutUser();
    },
  },
};
</script>

<style scoped>
.bd-navbar {
  min-height: 4 rem;
  background-color: #563d7c;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 10%);
}

.btn-bd-download {
  font-weight: 500;
  color: #ffe484;
  border-color: #ffe484;  
}

button.btn-bd-download:hover {
  background-color: #ffe484;
}

button.btn-bd-download:hover span {
  color: black;
}

a.navbar-brand{
  color:whitesmoke;
}

</style>