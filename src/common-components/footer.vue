<template>
   <footer class="footer bg-secondary text-center">     
       <!-- href="mailto:{{userEmail}}       -->
        <p><a href="#">{{userEmail}}</a>Hola</p>
        <p>{{created | date:'short'}}</p> 
</footer>

</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                userEmail: '',
            }
        },
    }
</script>

<style  scoped>
p{
    color: white;
    display: inline;
    word-wrap: break-word
}

a{
    color: white;
}

footer > p:nth-child(1), footer > p:nth-child(2){
    margin-right: 30px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1.5rem;            /* Footer height */
}
</style>