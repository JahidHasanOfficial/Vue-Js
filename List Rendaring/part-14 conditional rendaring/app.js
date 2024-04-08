var app = Vue.createApp({
    data() {
      return {
       show: false,
       skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 },
        { name: "php", experience: 5 },
        { name: "oop", experience: 8 },
        { name: "c++", experience: 2 },
        { name: "vue js", experience: 4 },
        { name: "laravel", experience: 4 },
        { name: "paython", experience: 4 },
        { name: "react", experience: 9 },
      ],
      };
    },
  
    methods: {
      toggle() {
        this.show = !this.show
      },
    
    }
  });
  
  app.mount("#app");