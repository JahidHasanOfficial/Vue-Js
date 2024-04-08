var app = Vue.createApp({
    data() {
      return {
        aboutMe: {
          Fname: "Jahid",
          Lname: "Hasan",
          Age: 21
        },
        skills: [
          { name: "HTML", experience: 5 },
          { name: "CSS", experience: 10 },
          { name: "JS", experience: 15 }
        ],
      };
    },
  
    methods: {
  
    }
  });
  
  app.mount("#app");