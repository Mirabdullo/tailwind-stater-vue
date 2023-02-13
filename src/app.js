const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {},
  mounted() {
    console.log("Hello Vue.Js");
  },
});

app.mount("#root");
