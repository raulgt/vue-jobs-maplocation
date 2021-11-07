<template>
<span>
 <NavBar
 :currentUser="userDetail.name"
  />
  <div class="container-fluid">   
    <router-view />
  </div>
 <Footer 
 :userEmail="userDetail.email"
 :created="userDetail.created_at"
 />
</span>
</template>

<script>
import Footer from "../../common-components/footer.vue";
import NavBar from "../../common-components/navbar.vue";

import { loginService } from "../../shared/login.service";

export default {
  name: "Template",
  components: {
    NavBar,
    Footer,
  }, 
   async created () {
     await this.getLsUserDetails();
  },
  data() {
    return {
       userDetail: {
        id: 0,
        name: '',
        email: '',
        email_verified_at: '',
        created_at: '',
        updated_at: '',
      },
    }
  },
   methods: {
   async getLsUserDetails() {
      this.userDetail = await loginService.getLocalStorageUserDetail();
    },
  },
};
</script>

