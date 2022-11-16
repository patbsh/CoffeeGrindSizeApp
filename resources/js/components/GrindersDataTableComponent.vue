<template>
    <v-card elevation="2">
        <v-table>
            <thead>
            <tr>
                <th class="text-left">
                    Grinder producer
                </th>
                <th class="text-left">
                    Grinder model
                </th>
                <th v-if="this.is_admin" class="text-left">
                    Is verified
                </th>
                <th class="text-left">
                    Details
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="grinder in grinders"
                :key="grinder.model">
                <td>
                    {{ grinder.grinder_producer.name }}
                </td>
                <td>
                    {{ grinder.model }}
                </td>
                <td v-if="this.is_admin">
                    {{ grinder.is_verified }}
                </td>
                <td>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        :href="this.grinder_link + '/' + grinder.id">
                        Details
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
<script>
export default {
    components: {},
    props: ["grinders", "grinder_link", "is_admin"]
}
</script>

