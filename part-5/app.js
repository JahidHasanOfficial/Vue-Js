var appCreated = Vue.createApp({
    data() {
        return {
            count: 0
        };
          
        },
        methods: {
            setTime() {
                let ct = new Date();
                return ct;
            },
      
       
           Increment(){
               this.count++;
           },
           Decrement(){
               this.count--;
           }
        },
    
}).mount('#app')





