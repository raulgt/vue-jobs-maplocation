<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="isOpen = false">&times;</span>
        <h2>Confirm</h2>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="isOpen = false">No</button>
        <button type="button" class="btn btn-primary" @click="onYes()">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    message: {
      type: String,
      default: () => "",
    },
    isOpen: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {   
    onYes() {   
      this.isOpen = false; 
      this.$emit("handleYes");    
    },
    onNo(){    
      this.$emit("handleNo");
    },
    openClose(flag) {
      let modal = document.getElementById('myModal');
      if (flag) {       
       modal.setAttribute('style', 'display: block');
      } else {
       this.onNo();
       modal.setAttribute('style', 'display: none');    
      }
    },
  },
  watch: {
    isOpen: {      
      handler(newValue) {
        this.openClose(newValue);
      },
    },
  },
};
</script>


<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #d3baf8;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-body p{
  font-size: 20px;
  color:rgb(83, 79, 79);
}

.modal-footer {
  padding: 2px 16px;
  background-color: #d3baf8;
  color: white;
}
</style>


