<template>
   <footer class="footer bg-secondary text-center">     
       <!-- href="mailto:{{userEmail}}       -->
        <p><a href="#">{{userEmail}}</a></p>
        <p>{{created | shortDate}}</p> 
</footer>

</template>

<script>

import { format } from 'date-fns';
import { displayDateFormat } from '../shared/constants';

    export default {
        name: 'Footer',       
        props: {
            userEmail: {
                type: String,
                default: '',
            },
            created:{
                type: String,
                default: '',
            }
        },
        filters: {
            shortDate: function(value) {                
               return value ? format(new Date(value), displayDateFormat) : '';
            }
        }
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
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.5rem;            /* Footer height */
}
</style>