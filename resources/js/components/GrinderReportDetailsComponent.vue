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
                        @click="showDeleteModal = true"
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
            <grinder-edit-form-component v-model="showEditGrinderModal" :grinder="grinder" :producers="producers">
            </grinder-edit-form-component>
            <vue-final-modal v-model="showDeleteModal" classes="modal-container" content-class="modal-content">
                <span class="modal__title">Are you sure you want to delete this report?</span>
                <div class="modal__action">
                    <div class="d-flex justify-content-center">
                        <v-btn class="mx-2 text-white" color="danger" @click="removeGrinderReport">
                            confirm
                        </v-btn>
                        <v-btn class="mx-2" color="primary" @click="showDeleteModal = false">
                            cancel
                        </v-btn>
                    </div>
                </div>
            </vue-final-modal>
        </div>
    </div>
</template>
<script>
import {ModalsContainer, VueFinalModal} from "vue-final-modal";

export default {
    components: { VueFinalModal, ModalsContainer},
    props: ['report','grinder','producers'],
    data() {
        return {
            showDeleteModal: false,
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
<style scoped>
:deep(.modal-container) {
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.modal-content) {
    position: relative;
    display: flex;
    flex-direction: column;
    /*margin: 0 5rem;*/
    max-width: 500px;
    max-height: 90%;
    padding: 1rem;
    background: #fff;
    overflow-y: auto;
    border-radius: 5px;
}

.modal__title {
    font-size: 1.5rem;
    font-weight: 700;
}
</style>
