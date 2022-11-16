<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <v-card class="mx-auto">
                <v-card-title>
                    <h1 class="h5 text-center">Details about: {{ producer + ' ' + grinder.model }}</h1>
                </v-card-title>
                <v-card-text>
                    <v-card class="m-4 p-2" elevation="2">
                        <h5 class="pb-4">Settings for different grind sizes:</h5>
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
                        <div v-if="grinder.notes">
                            <h5>Notes:</h5>
                            <p>
                                {{ grinder.notes }}
                            </p>
                        </div>
                    </v-card>
                    <v-card v-if="is_admin" class="col-4 mx-auto" elevation="2">
                        <v-card-title>
                            <h5 class="text-center">Grinder status:</h5>
                        </v-card-title>
                        <v-select
                            v-model="status"
                            :items="statuses"
                            item-title="name"
                            item-value="value"
                            label="Select"
                            class="px-4"
                            single-line>
                        </v-select>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                rounder="lg"
                                @click="saveStatus"
                                class="m-2 mx-auto">
                                Save status
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        v-if="is_admin"
                        color="primary"
                        rounder="lg"
                        @click="showEditGrinderModal = true"
                        class="m-2">
                        Edit the grinder
                    </v-btn>
                    <v-btn
                        v-if="is_admin"
                        color="danger"
                        rounder="lg"
                        @click="removeGrinder"
                        class="m-2">
                        Remove the grinder
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        href="/grinders"
                        class="mx-2">
                        Go back to the list
                    </v-btn>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        @click="showReportModal = true"
                        class="mx-2">
                        Request changes to the grinder
                    </v-btn>
                </v-card-actions>
            </v-card>
            <grinder-report-form-component v-model="showReportModal"
                                           :grinder="grinder">
            </grinder-report-form-component>
            <grinder-edit-form-component v-model="showEditGrinderModal"
                                         :grinder="grinder"
                                         :producers="producers">
            </grinder-edit-form-component>
        </div>
    </div>
</template>

<script>
export default {
    props: ['grinder', 'producer', 'producers', 'is_admin'],
    data() {
        return {
            showEditGrinderModal: false,
            showReportModal: false,
            status: this.grinder.is_verified,
            statuses: [
                {name: 'Verified', value: 1},
                {name: 'Unverified', value: 0},
            ],
        }
    },
    methods: {
        removeGrinder: function () {
            axios.delete('/grinders/' + this.grinder.id)
                .then((response) => {
                })
                .catch((error) => {
                });
            window.location.href = '/grinders';
        },
        saveStatus: function () {
            axios.put('/grinder-status/' + this.grinder.id, {
                is_verified: this.status
            })
                .then((response) => {
                })
                .catch((error) => {
                });
        }
    },

}
</script>

<style scoped>
</style>
