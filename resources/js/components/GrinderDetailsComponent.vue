<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card text-center">
                <div class="card-header">
                    <h1 class="h5">{{ producer + ' ' + grinder.model }}</h1>
                </div>
                <div class="card-body">
                    <h5>Settings for different grind sizes:</h5>

                    <div class="ms-5 text-start">
                        <p v-if="grinder.very_fine_min">
                            <span class="fw-bold">Very fine (Espresso grind):</span>
                            {{ grinder.very_fine_min + ' to ' + grinder.very_fine_max }}
                        </p>
                        <p>
                            <span class="fw-bold">Fine (Moka pot):</span>
                            {{ grinder.fine_min + ' to ' + grinder.fine_max }}
                        </p>
                        <p>
                            <span class="fw-bold">Medium (Drip coffee (v60, Kalita), aeropress, syphon):</span>
                            {{ grinder.medium_min + ' to ' + grinder.medium_max }}
                        </p>
                        <p>
                            <span class="fw-bold">Medium coarse(Clever dripper, Chemex):</span>
                            {{ grinder.medium_coarse_min + ' to ' + grinder.medium_coarse_max }}
                        </p>
                        <p>
                            <span class="fw-bold">Coarse(French press):</span>
                            {{ grinder.coarse_min + ' to ' + grinder.coarse_max }}
                        </p>
                        <p>
                            <span class="fw-bold">Very coarse (Cold brew): from</span>
                            {{ grinder.very_coarse_min }}+
                        </p>
                    </div>
                    <div v-if="grinder.notes">
                        <h5>Notes:</h5>
                        <p>
                            {{ grinder.notes }}
                        </p>
                    </div>

                    <a href="/grinders" class="btn btn-primary mx-2">Go back to the list</a>
                    <a @click="showReportModal = true" class="btn btn-primary mx-2">Request changes to the grinder</a>
                </div>
                <grinder-report-form-component v-model="showReportModal" :grinder="grinder"></grinder-report-form-component>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['grinder', 'producer'],
    data() {
        return {
            showReportModal: false,
        }
    },
    mounted() {
    },
    created() {
    },
    computed: {},
    methods: {},

}
</script>

<style scoped>
</style>
