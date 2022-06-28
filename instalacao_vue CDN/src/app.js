const MyNameApp = {
    data() {
        return {
            name: "Audrey",
            input_name: ""
        }
    },
    methods: {
        subimitForm(e) {
            e.preventDefault()

            console.log(this.input_name);
      
            this.name = this.input_name;
        }
    }
}
Vue.createApp(MyNameApp).mount("#app");