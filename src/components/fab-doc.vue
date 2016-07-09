<template>
    <div class="col s12">
        <h4>Hover, Toggle Examples</h4>
        <fab>
            <btn slot="btn" floating large><icon>list</icon></btn>
            <ul slot="items">
                <li>
                    <btn-link floating>
                        <icon>add</icon>
                    </btn-link>
                </li>
                <li>
                    <btn-link floating>
                        <icon>add</icon>
                    </btn-link>
                </li>
                <li>
                    <btn-link floating>
                        <icon>add</icon>
                    </btn-link>
                </li>
            </ul>
        </fab>
        <div style="position: relative; height: 100px;">
            <fab style="position: absolute; display: inline-block; top: 0">
                <btn slot="btn" floating large><icon>list</icon></btn>
                <ul slot="items">
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                </ul>
            </fab>
        </div>
        <div style="position: relative; height: 100px;">
            <fab style="position: absolute; display: inline-block; top: 0" horizontal>
                <btn slot="btn" floating large><icon>list</icon></btn>
                <ul slot="items">
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                </ul>
            </fab>
        </div>
        <div style="position: relative; height: 100px;">
            <fab style="position: absolute; display: inline-block; top: 0" horizontal toggle>
                <btn-link slot="btn" floating large><icon>list</icon></btn-link>
                <ul slot="items">
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                    <li>
                        <btn-link floating>
                            <icon>add</icon>
                        </btn-link>
                    </li>
                </ul>
            </fab>
        </div>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>