var app = Vue.createApp({
    data() {
      return {
        review: "",
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
       // newSkill: { name: "", experience: 0 }
      };
    },

    computed: {
      totalCount1() {
        console.log("Count from computed property")
        return this.skills.length;
      },
      experiencedSkills() {
        let ex = this.skills.filter(item =>{
          return item.experience >= 12
        });
        return ex;
      }
    },
  
    methods: {
      addSkill() {
        this.skills.push(this.newSkill);
        this.newSkill = {};
      },
      removeSkill(i) {
        this.skills.splice(i, 1);
      },
      totalCount() {
        console.log("Count from method")
        return this.skills.length;
      }
    }
  });
  
  app.mount("#app");