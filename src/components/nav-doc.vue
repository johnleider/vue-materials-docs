<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <v-side-nav id="side" slot="side-nav"></v-side-nav>
        </v-nav>
        <markup html='
        <v-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul slot="items" class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <v-side-nav id="side" slot="side-nav"></v-side-nav>
        </v-nav>'
        ></markup>
        <h4>With Icons</h4>
        <v-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!"><v-icon>done</v-icon></a>
                </li>
                <li>
                    <a href="#!"><v-icon>list</v-icon></a>
                </li>
                <li>
                    <a href="#!" v-dropdown:icon-drop><v-icon>more_vert</v-icon></a>
                </li>
            </ul>
            <v-side-nav id="side2" slot="side-nav"></v-side-nav>
        </v-nav>
        <v-dropdown id="icon-drop">
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
        </v-dropdown>
        <markup html='
        <v-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!"><v-icon>done</v-icon></a>
                </li>
                <li>
                    <a href="#!"><v-icon>list</v-icon></a>
                </li>
                <li>
                    <a href="#!" v-dropdown:v-icon-drop><v-icon>more_vert</v-icon></a>
                </li>
            </ul>
            <v-side-nav id="side2" slot="side-nav"></v-side-nav>
        </v-nav>
        <dropdown id="v-icon-drop">
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
        </dropdown>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {                
                props: [
                    ['fixed', 'boolean']
                ]
            }
        }
    }
</script>
