var appCreated = Vue.createApp({
    data() {
        return {
            count: 0
        };
          
        },
        methods: {

           Increment($evt, amount){
               this.count = this.count + amount;
               console.log($evt);
           },
           Decrement(amount){
               this.count = this.count - amount;
           },
           test(ev){
               console.log('test');
               console.log(ev);
           }
        },
    
}).mount('#app')





