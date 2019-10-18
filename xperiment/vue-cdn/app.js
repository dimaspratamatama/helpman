new Impack({
    js: [
        {
            from: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
            on: "head"
        }
    ]
}).next(() => {
    new Vue({
        el: "#root",
        data: function() {
            return {
                time: new Date().toLocaleTimeString()
            }
        },
        mounted: function() {
            this.runTimer()
        },
        methods: {
            runTimer() {
                const self = this

                this.time = new Date().toLocaleTimeString()

                setTimeout(() => { self.runTimer() }, 1000)
            }
        }
    })
})