<template>
    <div class="col s12">
        <h4>Examples</h4>
        <m-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <m-side-nav slot="side-nav"></m-side-nav>
        </m-nav>
        <markup html='
        <m-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul slot="items" class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <m-side-nav slot="side-nav"></m-side-nav>
        </m-nav>'
        ></markup>
        <h4>With Icons</h4>
        <m-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!"><icon>done</icon></a>
                </li>
                <li>
                    <a href="#!"><icon>list</icon></a>
                </li>
                <li>
                    <a href="#!" v-dropdown:icon-drop><icon>more_vert</icon></a>
                </li>
            </ul>
            <m-side-nav slot="side-nav"></m-side-nav>
        </m-nav>
        <dropdown id="icon-drop">
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
            <li>
                <a href="#!">Click me</a>
            </li>
        </dropdown>
        <markup html='
        <m-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!"><icon>done</icon></a>
                </li>
                <li>
                    <a href="#!"><icon>list</icon></a>
                </li>
                <li>
                    <a href="#!" v-dropdown:icon-drop><icon>more_vert</icon></a>
                </li>
            </ul>
            <m-side-nav slot="side-nav"></m-side-nav>
        </m-nav>
        <dropdown id="icon-drop">
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
