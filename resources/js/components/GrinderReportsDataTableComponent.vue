<template>
    <v-card elevation="2">
        <v-table>
            <thead>
            <tr>
                <th class="text-left">
                    Grinder name
                </th>
                <th class="text-left">
                    Submission date
                </th>
                <th class="text-left">
                    Details
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="report in reports"
                :key="report.id"
            >
                <td>
                    {{ report.grinder.model }}
                </td>
                <td>
                    {{ report.created_at }}
                </td>
                <td>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        :href="this.report_link + '/' + report.id"
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
    props: ["reports","report_link"]
}
</script>

