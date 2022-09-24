<template>
    <vue-final-modal classes="modal-container" content-class="modal-content">
        <span class="modal__title">Submit a new grinder report</span>
        <span class="text-success" v-if="reportFormMessage" v-text="reportFormMessage"></span>
        <form @submit="submitNewReport" @keydown="reportForm.errors.clear($event.target.name)">
            <div class="my-3">
                <label>Select the grinder you want to report</label>
                <v-select label="item_data" :options="grinders"
                          :reduce="grinders => grinders.id" v-model="reportForm.grinder_id"/>
                <span class="text-danger" v-if="reportForm.errors.has('grinder_id')"
                      v-text="reportForm.errors.get('grinder_id')"></span>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">What do you want to report?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                          v-model="reportForm.report">
                    </textarea>
                <span class="text-danger" v-if="reportForm.errors.has('report')"
                      v-text="reportForm.errors.get('report')"></span>
            </div>
            <button
                @click.prevent="submitNewReport()"
                class="btn btn-primary mx-2">
                Submit
            </button>
        </form>
    </vue-final-modal>
</template>

<script>
import vSelect from 'vue-select';
import {ModalsContainer, VueFinalModal} from "vue-final-modal";

export default {
    components: {vSelect, VueFinalModal, ModalsContainer},
    props: ["grinders"],
    data() {
        return {
            reportForm: new Form({
                report: null,
                grinder_id: null
            }),
            reportFormMessage: null,
        }
    },
    mounted() {
    },
    created() {
    },
    computed: {},
    methods: {
        submitNewReport() {
            this.reportFormMessage = null;
            axios.post('/grinder-reports',
                {
                    report: this.reportForm.report,
                    grinder_id: this.reportForm.grinder_id,
                })
                .then((response) => {
                    this.reportFormMessage = response.data.message;
                    this.reportForm.reset();
                })
                .catch(error => this.reportForm.errors.record(error.response.data));
        }
    },
    watch: {}
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
