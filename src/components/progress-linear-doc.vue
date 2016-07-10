<template>
    <div class="col s12">
        <h4>Determinate</h4>
        <range v-model="range"></range>
        <progress-linear determinate 
                         v-model="width_l"
        ></progress-linear>
        <markup html='
        <progress-linear determinate 
                         width="50%"
        ></progress-linear>'
        ></markup>
        <h4>Indeterminate</h4>
        <progress-linear indeterminate></progress-linear>
        <markup html='
        <progress-linear indeterminate></progress-linear>'
        ></markup>
        <h4>Model</h4>
        <progress-linear determinate 
                         v-model="width"
        ></progress-linear>
        <markup html='
        <progress-linear determinate 
                         v-model="width"
        ></progress-linear>'
        ></markup>
        <markup html="
        export default {
            data () {
                return {
                    number: 10
                    interval: {}
                }
            },

            computed: {
                width () {
                    return this.number.toString() + '%'
                }
            },

            mounted () {
                clearInterval(this.interval)

                this.interval = setInterval(() => {
                    if (this.number > 100) {
                        this.number = 10
                        return
                    }

                    this.number += Math.random()
                }, 50)
            }
        }"
    ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                number: 10,
                props: [
                    ['determinate', 'boolean'],
                    ['indeterminate', 'boolean'],
                    ['v-model', 'string']
                ],
                interval: {},
                range: 20
            }
        },

        computed: {
            width () {
                return this.number.toString() + '%'
            },

            width_l () {
                return this.range.toString() + '%'
            }
        },

        mounted () {
            clearInterval(this.interval)

            this.interval = setInterval(() => {
                if (this.number > 100) {
                    this.number = 1
                    return
                }

                this.number += Math.random()
            }, 50)
        }
    }
</script>