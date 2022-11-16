<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <v-card>
                <v-card-title>
                    <h1 class="h5 text-center">Details about report id: {{ report.id }}</h1>
                </v-card-title>
                <v-card-text class="text-center">
                    <p>
                        {{ report.report }}
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        @click="showEditGrinderModal = true"
                        class="m-2">
                        Edit the grinder
                    </v-btn>
                    <v-btn
                        color="danger"
                        rounder="lg"
                        @click="removeGrinderReport"
                        class="m-2">
                        Remove the report
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        href="/producers"
                        class="mx-2">
                        Go back to the list
                    </v-btn>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        :href="'/grinders/' + report.grinder_id"
                        class="m-2">
                        Go to the grinder
                    </v-btn>
                </v-card-actions>
            </v-card>
            <grinder-edit-form-component v-model="showEditGrinderModal" :grinder="grinder" :producers="producers"></grinder-edit-form-component>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: ['report','grinder','producers'],
    data() {
        return {
            showEditGrinderModal: false,
        }
    },
    methods: {
        removeGrinderReport: function () {
            axios.delete('/grinder-reports/' + this.report.id)
                .then((response) =>{
                })
                .catch((error) => {
                });
                window.location.href = '/grinder-reports';
        }
    }
}
</script>
