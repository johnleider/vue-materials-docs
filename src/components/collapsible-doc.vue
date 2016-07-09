<template>
    <div class="col s12">
        <h4>Accordion</h4>
        <collapsible>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>
        <markup html='
        <collapsible>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>'
        ></markup>
        <h4>Expandable</h4> 
        <collapsible expandable>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>
        <markup html='
        <collapsible expandable>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>'
        ></markup>
        <h4>Popout</h4>
        <collapsible popout>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header active"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>
        <markup html='
        <collapsible popout>
            <li>
                <div class="collapsible-header"><icon>filter_drama</icon>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header active"><icon>place</icon>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
                <div class="collapsible-header"><icon>whatshot</icon>Third</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
        </collapsible>'
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
                    ['collapsible', 'boolean'],
                    ['expandable', 'boolean'],
                    ['popout', 'boolean']
                ]
            }
        }
    }
</script>