<template>
    <v-card elevation="2">
        <v-table>
            <thead>
            <tr>
                <th class="text-left">
                    Producer name
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
                v-for="producer in producers"
                :key="producer.name"
            >
                <td>
                    {{ producer.name }}
                </td>
                <td v-if="this.is_admin">
                    {{ producer.is_verified }}
                </td>
                <td>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        :href="this.producer_link + '/' + producer.id"
                    >
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
    props: ["producers","producer_link","is_admin"]
}
</script>

