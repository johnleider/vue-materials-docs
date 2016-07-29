<template>
    <div class="col s12">
        <h4>Example</h4>
        <v-btn-link v-side-nav:demo="{ edge: 'right' }">Click Me</v-btn-link>
        <v-side-nav id="demo">
            <ul>
                <li v-for="n in 5">
                    <a href="#!">Link</a>
                </li>
            </ul>
        </v-side-nav>
        <markup html='
        <v-btn-link v-side-nav:demo="nav">Click Me</v-btn-link>
        <v-side-nav id="demo">
            <ul>
                <li v-for="n in 5">
                    <a href="#!">Link</a>
                </li>
            </ul>
        </v-side-nav>'
        ></markup>
        <markup html="
        export default {
            data () {
                return {
                    nav: {
                        edge: 'right'
                    }
                }
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
                nav: {
                    edge: 'right'
                },
                
                props: [
                    ['fixed', 'boolean'],
                    ['id', 'string']
                ]
            }
        }
    }
</script>