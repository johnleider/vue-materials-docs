<template>
    <div class="col s12">
        <h4>Examples</h4>
        <btn>Primary</btn>
        <btn class="red">Red</btn>
        <btn class="blue">Blue</btn>
        <btn class="pink" large>Large</btn>
        <btn disabled>Disabled</btn>
        <btn class="purple white-text" flat>Flat</btn>
        <btn class="yellow" waves-light>Waves</btn>
        <btn class="red darken-2" waves-red>Red Waves</btn>
        <btn class="green">Icon <icon class="right">build</icon></btn>
        <btn class="yellow darken-3" v-dropdown:dropdown>Dropdown</btn>
        <btn floating><icon>list</icon></btn>
        <btn floating large class="green lighten-2"><icon>lightbulb_outline</icon></btn>
        <dropdown id="dropdown">
            <li>
                <a href="#!">Option 1</a>
            </li>
            <li>
                <a href="#!">Option 2</a>
            </li>
            <li>
                <a href="#!">Option 3</a>
            </li>
        </dropdown>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style scoped>
    .btn {
        margin-bottom: 1rem;
    }
</style>