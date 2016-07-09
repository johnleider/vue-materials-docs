<template>
    <div>
        <h4>Props</h4>
        <table>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prop in props">
                    <td v-for="value in prop">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['props'],
    }
</script>