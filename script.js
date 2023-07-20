Vue.createApp({

    data() {
        return {
            text: "Hello To Vue di mio fratello Salvo!",
            titleClasses: "text-center display-1 text-danger mt-5",
            image: "imgs/circus.jpg",
            imgClasses: "d-block w-50 m-auto"
        };
    },
    methods: {
        changeImg() {
            if (this.text.includes("POPI")) {
                this.image = "imgs/circus.jpg";
                this.text = "Hello To Vue di mio fratello Salvo!";
            }
            else if (this.text.includes("Hello")) {
                this.image = "imgs/clown1.jpg";
                this.text = "SALVO SEI UN CLOWN!!!";
            }
            else if (this.text.includes("SALVO")){
                this.image = "imgs/clown.jpg";
                this.text = "SALVO SEI UN CLOWN!!! POPI POPI";
            }

        },
    },
}).mount("#app");
