<template>
    <div>
        <h4>Waves</h4>
        <table>
            <thead>
                <tr>
                    <th>Wave</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="wave in waves">
                    <td v-for="value in wave">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['waves'],
    }
</script>