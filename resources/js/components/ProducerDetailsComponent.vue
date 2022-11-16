<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <v-card class="mx-auto" elevation="2">
                <v-card-title>
                    <h1 class="h5 text-center">Details about producer: {{ producer.name }}</h1>
                </v-card-title>
                <v-card-text>
                    <div class="d-flex justify-content-center mb-4">
                        <v-card elevation="2">
                            <v-table>
                                <thead>
                                <tr>
                                    <th class="text-left">
                                        Grinder model
                                    </th>
                                    <th v-if="this.is_admin" class="text-left">
                                        Is verified
                                    </th>
                                    <th class="text-left">
                                        Grinder page
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="grinder in grinders"
                                    :key="grinder.model"
                                >
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
                                            :href="this.grinder_link + '/' + grinder.id"
                                        >
                                            Details
                                        </v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-card>
                    </div>
                    <v-card class="col-4 mx-auto" v-if="is_admin" elevation="2">
                        <v-card-title>
                            <h5 class="text-center">Producer status:</h5>
                        </v-card-title>
                        <v-select
                            class="px-4"
                            v-model="status"
                            :items="statuses"
                            item-title="name"
                            item-value="value"
                            label="Select"
                            single-line>
                        </v-select>
                        <v-card-actions>
                            <v-btn
                                v-if="is_admin"
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
                        color="primary"
                        rounder="lg"
                        href="/producers"
                        class="mx-2">
                        Go back to the list
                    </v-btn>
                    <v-btn
                        v-if="is_admin"
                        color="danger"
                        rounder="lg"
                        @click="showDeleteModal = true"
                        class="m-2">
                        Remove the producer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <vue-final-modal v-model="showDeleteModal" classes="modal-container" content-class="modal-content">
            <span class="modal__title">Are you sure you want to delete this producer?</span>
            <div class="modal__action">
                <div class="d-flex justify-content-center">
                    <v-btn class="mx-2 text-white" color="danger" @click="removeProducer">
                        confirm
                    </v-btn>
                    <v-btn class="mx-2" color="primary" @click="showDeleteModal = false">
                        cancel
                    </v-btn>
                </div>
            </div>
        </vue-final-modal>
    </div>
</template>
<script>
import {ModalsContainer, VueFinalModal} from "vue-final-modal";

export default {
    components: { VueFinalModal, ModalsContainer},
    props: ['producer','is_admin','grinder_link','grinders'],
    data() {
        return {
            showDeleteModal: false,
            status: this.producer.is_verified,
            statuses: [
                { name: 'Verified', value: 1 },
                { name: 'Unverified', value: 0 },
            ],
        }
    },
    methods: {
        removeProducer: function () {
            axios.delete('/producers/' + this.producer.id)
                .then((response) =>{
                })
                .catch((error) => {
                });
            window.location.href = '/producers';
        },
        saveStatus: function () {
            axios.put('/grinder-producer-status/' + this.producer.id, {
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
