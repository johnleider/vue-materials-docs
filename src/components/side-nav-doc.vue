<template>
    <div class="col s12">
        <h4>Example</h4>
        <btn-link v-side-nav:demo="{ edge: 'right' }">Click Me</btn-link>
        <app-side-nav id="demo">
            <ul>
                <li v-for="n in 5">
                    <a href="#!">Link</a>
                </li>
            </ul>
        </app-side-nav>
        <markup html='
        <btn-link v-side-nav:demo="nav">Click Me</btn-link>
        <app-side-nav id="demo">
            <ul>
                <li v-for="n in 5">
                    <a href="#!">Link</a>
                </li>
            </ul>
        </app-side-nav>'
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