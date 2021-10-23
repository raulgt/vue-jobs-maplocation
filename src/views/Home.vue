<template>
  <div>
    <NavBar />
    <div>
      <p>HOLA {{ userDetail.name }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../common-components/footer.vue";
import NavBar from "../common-components/navbar.vue";
import { loginService } from "../shared/login.service";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
  },
  async created () {
    await this.getUserDetails();
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
    };
  },
  methods: {
    async getUserDetails() {
      this.userDetail = await loginService.getUserDetail();
      if (Object.keys(this.userDetail).length !== 0) {
         console.log('userDetail: ', this.userDetail);
      }
    },
  },
};
</script>
