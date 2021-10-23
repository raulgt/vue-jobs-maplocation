<template>
   <div class="container mt-5">
    <div class="section content-title-group">
      <h2 class="title">About Vue Map List</h2>
      <p>Here are some helpful resources for this project.</p>
      <p>
        by
        <a href="https://www.linkedin.com/in/carlos-ra%C3%BAl-abreu-30193433/">Carlos Abreu</a>
      </p>
      <br />
      <h3 class="title sub-title">Source Code</h3>
      <p>You can find the source code for this project at the link below</p>
      <p>
        <a
          href="https://github.com/johnpapa/vue-getting-started"
          target="_blank"
          >https://github.com/raulgt</a
        >
      </p>
      <br />
    </div>
  </div>
</template>

<style scoped>
.title {
   font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  word-break: break-word;
}

.sub-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  word-break: break-word;
}

.content-title-group {
  margin-bottom: 16px;  
}

 .content-title-group h2 {
    border-left: 16px solid #42b883;
    border-bottom: 2px solid #42b883;
    padding-right: 16px;
    display: inline-block;
    text-transform: uppercase;
    color: #555;
    letter-spacing: 0px;   
  }

 .content-title-group h3 {
    border-left: 16px solid #42b883;
    border-bottom: 2px solid #42b883;
    padding-left: 8px;
    padding-right: 16px;
    display: inline-block;
    text-transform: uppercase;
    color: #555;
    letter-spacing: 0px;  
  }

  h2.title{
   padding-left: 8px;
  }

  .content-title-group p, .content-title-group a{
    font-size: 18px;
  }
</style>
