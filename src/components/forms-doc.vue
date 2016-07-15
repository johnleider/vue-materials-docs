<template>
    <form>
        <h4 class="col s12">Examples</h4>

        <grid s6>
            <div class="input-field">
                <text-input name="first"
                            id="first"
                            placeholder="First Name"
                ></text-input>
                <label for="first"
                       class="active"
                >First Name</label>
            </div>
        </grid>
        <grid s6>
            <div class="input-field">
                <text-input name="last"
                            id="last"
                ></text-input>
                <label for="last">Last Name</label>
            </div>
        </grid>
        <grid s12>
            <markup html='
            <div class="input-field">
                <text-input name="first"
                            id="first"
                            placeholder="First Name"
                ></text-input>
                <label for="first">First Name</label>
            </div>'
            ></markup>
        </grid>
        <grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <icon prefix>account_circle</icon>
                <text-input name="username"
                            id="username"
                ></text-input>
                <label for="username">Username</label>
            </div>
            <markup html='
            <div class="input-field">
                <icon prefix>account_circle</icon>
                <text-input name="username"
                            id="username"
                ></text-input>
                <label for="username">Username</label>
            </div>'
            ></markup>
        </grid>
        <grid s12>
            <h4>Text Area</h4>
            <div class="input-field">
                <text-area name="ta"
                           id="ta"
                ></text-area>
                <label for="ta">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <text-area name="ta"
                           id="ta"
                ></text-area>
                <label for="ta">Text Area</label>
            </div>'
            ></markup>
        </grid>
        <grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <icon prefix>mode_edit</icon>
                <text-area name="ta2"
                           id="ta2"
                ></text-area>
                <label for="ta2">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <icon prefix>mode_edit</icon>
                <text-area name="ta2"
                           id="ta2"
                ></text-area>
                <label for="ta2">Text Area</label>
            </div>'
            ></markup>
            <props :props="[['length', 'string, number (works on input or text-area)']]"></props>
        </grid>
        <grid s12>
            <h4>Select</h4>
            <div class="input-field">
                <m-select name="select"
                          id="select"
                          :items="items"
                ></m-select>
                <label for="select">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-select name="select"
                          id="select"
                          :items="items"
                ></m-select>
                <label for="select">Select</label>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <m-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></m-select>
                <label for="select2">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <m-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></m-select>
                <label for="select2">Select</label>
            </div>'
            ></markup>
            <props :props="[['items', 'array'], ['v-model', 'string, number, array (multiple)']]"></props>
        </grid>
        <grid s12>
            <h4>Radios</h4>
            <div class="input-field">
                <radio name="radio"
                       id="radio"
                       val="1"
                       checked
                >Red</radio>
            </div>
            <div class="input-field">
                <radio name="radio"
                       id="radio2"
                >Yellow</radio>
            </div>
            <div class="input-field">
                <radio name="radio"
                       id="radio3"
                       with-gap
                >Green</radio>
            </div>
            <div class="input-field">
                <radio name="radio"
                       id="radio4"
                       disabled
                >Brown</radio>
            </div>
            <markup html='
            <div class="input-field">
                <radio name="radio"
                       id="radio3"
                       with-gap
                       val="1"
                       v-model="radio1"
                >Green</radio>
            </div>'
            ></markup>
            <p>In order to accommodate v-model on Materialize.css components, to set what the value of the radio is, use the :val property.</p>
            <props :props="radio_props"></props>
        </grid>
        <grid s12>
            <h4>Checkboxes</h4>
            <div class="input-field">
                <checkbox name="checkbox"
                          id="checkbox"
                >Red</checkbox>
            </div>
            <div class="input-field">
                <checkbox name="checkbox2"
                          id="checkbox2"
                          checked
                >Yellow</checkbox>
            </div>
            <div class="input-field">
                <checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</checkbox>
            </div>
            <div class="input-field">
                <checkbox name="checkbox"
                          id="checkbox"
                          indeterminate
                >Indeterminate</checkbox>
            </div>
            <div class="input-field">
                <checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                          checked
                >Green</checkbox>
            </div>
            <div class="input-field">
                <checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                >Brown</checkbox>
            </div>
            <markup html='
            <div class="input-field">
                <checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</checkbox>
            </div>'
            ></markup>
            <props :props="checkbox_props"></props>
        </grid>
        <grid s12>
            <h4>Switches</h4>
            <switch></switch>
            <p></p><p></p>
            <switch checked
                    on="Accept"
                    off="Deny"
            ></switch>
            <markup html='
            <switch checked
                    on="Accept"
                    off="Deny"
            ></switch>'
            ></markup>
            <props :props="switch_props"></props>
        </grid>
        <grid s12>
            <h4>File Input</h4>
            <div class="input-field">
                <file-input></file-input>
            </div>
            <markup html='
            <div class="input-field">
                <file-input></file-input>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <file-input multiple></file-input>
            </div>
            <markup html='
            <div class="input-field">
                <file-input multiple></file-input>
            </div>'
            ></markup>
            <props :props="file_props"></props>
        </grid>
        <grid s12>
            <h4>Range</h4>
            <div class="input-field">
                <range></range>
            </div>
            <markup html='
            <div class="input-field">
                <range></range>
            </div>'
            ></markup>
            <props :props="range_props"></props>
        </grid>
        <grid s12>
            <h4>Date Picker</h4>
            <label for="birthdate">Birthdate</label>
            <date-input id="birthdate"
                        name="birthdate"
            ></date-input>
            <markup html='
            <label for="birthdate">Birthdate</label>
            <date-input id="birthdate"
                        name="birthdate"
            ></date-input>'
            ></markup>
            <props :props="[['v-model', 'string']]"></props>
        </grid>
        <grid s12>
            <h4>Character Counter</h4>
            <div class="input-field">
                <text-input name="text"
                            id="text"
                            length="50"
                ></text-input>
                <label for="text">Text Input</label>
            </div>
            <markup html='
            <div class="input-field">
                <text-input name="text"
                            id="text"
                            length="50"
                ></text-input>
                <label for="text">Text Input</label>
            </div>'
            ></markup>
            <div class="input-field">
                <text-area name="textarea"
                            id="textarea"
                            length="150"
                ></text-area>
                <label for="text">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <text-area name="textarea"
                            id="textarea"
                            length="50"
                ></text-area>
                <label for="text">Text Area</label>
            </div>'
            ></markup>
        </grid>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                range_props: [
                    ['min', 'string, number'],
                    ['max', 'string, number'],
                    ['v-model', 'string, number']
                ],
                radio_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['val', 'number, string'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['with-gap', 'boolean']
                ],
                checkbox_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['indeterminate', 'boolean'],
                    ['filled-in', 'boolean']
                ],
                switch_props: [
                    ['on', 'string'],
                    ['off', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'boolean']
                ],
                file_props: [
                    ['multiple', 'boolean']
                ],
                items: [
                    {
                        id: 1,
                        text: 'Select 1'
                    },
                    {
                        id: 2,
                        text: 'Select 2'
                    },
                    {
                        id: 3,
                        text: 'Select 3'
                    },
                ]
            }
        }
    }
</script>