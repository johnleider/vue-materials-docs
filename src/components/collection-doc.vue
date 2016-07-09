<template>
    <div class="col s12">
        <h4>Examples</h4>
        <collection>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
        </collection>
        <markup html='
        <collection>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
        </collection>'
        ></markup>
        <collection>
            <collection-link>Alvin</collection-link>
            <collection-link active>Alvin</collection-link>
            <collection-link>Alvin</collection-link>
            <collection-link>Alvin</collection-link>
        </collection>
        <markup html='
        <collection>
            <collection-link>Alvin</collection-link>
            <collection-link active>Alvin</collection-link>
            <collection-link>Alvin</collection-link>
            <collection-link>Alvin</collection-link>
        </collection>'
        ></markup>
        <h4>With Header</h4>
        <collection with-header>
            <collection-item header>
                <h3>First Name</h3>
            </collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
        </collection>
        <markup html='
        <collection with-header>
            <collection-item header>
                <h3>First Name</h3>
            </collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
            <collection-item>Alvin</collection-item>
        </collection>'
        ></markup>
        <h4>Secondary Content</h4>
        <collection>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
        </collection>
        <markup html='
        <collection>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
            <collection-item>
                Alvin
                <span slot="secondary"><icon>send</icon></span>
            </collection-item>
        </collection>'
        ></markup>
        <h4>Avatar</h4>
        <collection>
            <collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><icon>star</icon></span>
            </collection-avatar>
            <collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><icon>star</icon></span>
            </collection-avatar>
        </collection>
        <markup html='
        <collection>
            <collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><icon>star</icon></span>
            </collection-avatar>
            <collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><icon>star</icon></span>
            </collection-avatar>
        </collection>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['with-header', 'boolean']
                ]
            }
        }
    }
</script>