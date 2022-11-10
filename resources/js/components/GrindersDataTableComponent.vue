<template>
    <v-table>
        <thead>
        <tr>
            <th class="text-left">
                Grinder producer
            </th>
            <th class="text-left">
                Grinder model
            </th>
            <th class="text-left">
                Details
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="grinder in grinders"
            :key="grinder.model"
        >
            <td>
                {{ grinder.grinder_producer.name }}
            </td>
            <td>
                {{ grinder.model }}
            </td>
            <td>
                <v-btn
                    color="primary"
                    rounder="lg"
                    :href="this.grinder_link + '/' + grinder.id"
                >
                    Details
                </v-btn>
            </td>
        </tr>
        </tbody>
    </v-table>
</template>
<script>
export default {
    components: {},
    props: ["grinders","grinder_link"],
    data() {
        return {
        }
    },
    mounted() {},
    created() {},
    computed: {},
    methods: {},
    watch: {}
}
</script>

<style scoped>

</style>
