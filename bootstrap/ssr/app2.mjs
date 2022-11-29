import _ from "lodash";
import "bootstrap";
import axios$1 from "axios";
import { createApp } from "vue/dist/vue.esm-bundler";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withDirectives, vModelText, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import vSelect from "vue-select";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
window._ = _;
window.axios = axios$1;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
class Errors {
  constructor() {
    this.errors = {};
  }
  has(field) {
    return this.errors.hasOwnProperty(field);
  }
  any() {
    return Object.keys(this.errors).length > 0;
  }
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }
  record(errors) {
    this.errors = errors.errors;
  }
  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }
    this.errors = {};
  }
}
class Form$1 {
  constructor(data) {
    this.originalData = data;
    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }
  data() {
    let data = {};
    for (let property in this.originalData) {
      data[property] = this[property];
    }
    return data;
  }
  reset() {
    for (let field in this.originalData) {
      this[field] = "";
    }
    this.errors.clear();
  }
  post(url) {
    return this.submit("post", url);
  }
  put(url) {
    return this.submit("put", url);
  }
  patch(url) {
    return this.submit("patch", url);
  }
  delete(url) {
    return this.submit("delete", url);
  }
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data()).then((response) => {
        this.onSuccess(response.data);
        resolve(response.data);
      }).catch((error) => {
        this.onFail(error.response.data);
        reject(error.response.data);
      });
    });
  }
  onSuccess(data) {
    alert(data.message);
    this.reset();
  }
  onFail(errors) {
    this.errors.record(errors);
  }
}
const GrindSizeComponent_vue_vue_type_style_index_0_scoped_74215d6c_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {
  name: "GrindSizeComponent",
  props: ["grinders", "producers"],
  data() {
    return {
      userGrinder: null,
      userGrindMin: null,
      userGrindMax: null,
      recipeGrinder: null,
      recipeGrindNumber: null,
      recipeGrindGeneral: null,
      recipeGrinderMode: false,
      generalGrindSizes: ["very fine", "fine", "medium", "medium coarse", "coarse", "very coarse"],
      selectedGeneralGrindSize: null,
      showNewGrinderModal: false,
      showReportModal: false
    };
  },
  updated() {
    if (this.recipeGrinderMode) {
      this.selectedGeneralGrindSize = null;
    }
    if (this.userGrinder && (this.recipeGrinder && this.recipeGrindNumber != null || this.selectedGeneralGrindSize)) {
      if (this.selectedGeneralGrindSize === "very fine" || this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.very_fine_max) {
        this.recipeGrindGeneral = "very fine";
        this.userGrindMin = this.userGrinder.very_fine_min;
        this.userGrindMax = this.userGrinder.very_fine_max;
      } else if (!this.recipeGrinder && this.selectedGeneralGrindSize === "fine" || this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.fine_max) {
        this.recipeGrindGeneral = "fine";
        this.userGrindMin = this.userGrinder.fine_min;
        this.userGrindMax = this.userGrinder.fine_max;
      } else if (this.selectedGeneralGrindSize === "medium" || this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium_max) {
        this.recipeGrindGeneral = "medium";
        this.userGrindMin = this.userGrinder.medium_min;
        this.userGrindMax = this.userGrinder.medium_max;
      } else if (this.selectedGeneralGrindSize === "medium coarse" || this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium_coarse_max) {
        this.recipeGrindGeneral = "medium coarse";
        this.userGrindMin = this.userGrinder.medium_coarse_min;
        this.userGrindMax = this.userGrinder.medium_coarse_max;
      } else if (this.selectedGeneralGrindSize === "coarse" || this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.coarse_max) {
        this.recipeGrindGeneral = "coarse";
        this.userGrindMin = this.userGrinder.coarse_min;
        this.userGrindMax = this.userGrinder.coarse_max;
      } else if (this.selectedGeneralGrindSize === "very coarse" || this.recipeGrinder && this.recipeGrindNumber > this.recipeGrinder.very_coarse_min) {
        this.recipeGrindGeneral = "very coarse";
        this.userGrindMin = this.userGrinder.very_coarse_min;
      }
    }
  },
  computed: {},
  methods: {}
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_select = resolveComponent("v-select");
  const _component_new_grinder_form_component = resolveComponent("new-grinder-form-component");
  const _component_grinder_report_form_component = resolveComponent("grinder-report-form-component");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))} data-v-74215d6c><h1 data-v-74215d6c>Grind setting wizard `);
  _push(ssrRenderComponent(_component_v_icon, { color: "deep-purple" }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-wizard-hat`);
      } else {
        return [
          createTextVNode("mdi-wizard-hat")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><div class="form-check form-switch mt-2 mb-2 d-flex justify-content-center" data-v-74215d6c><input class="form-check-input mx-2" type="checkbox" id="flexSwitchCheckDefault"${ssrIncludeBooleanAttr(Array.isArray($data.recipeGrinderMode) ? ssrLooseContain($data.recipeGrinderMode, null) : $data.recipeGrinderMode) ? " checked" : ""} data-v-74215d6c><label for="flexSwitchCheckDefault" data-v-74215d6c>Recipe uses a specific grinder</label></div><div class="row d-flex justify-content-around" data-v-74215d6c><div class="col-5" data-v-74215d6c><label data-v-74215d6c>Your grinder</label>`);
  _push(ssrRenderComponent(_component_v_select, {
    label: "Select your grinder",
    items: $props.grinders,
    "item-title": "full_name",
    "item-value": "id",
    modelValue: $data.userGrinder,
    "onUpdate:modelValue": ($event) => $data.userGrinder = $event,
    "return-object": ""
  }, null, _parent));
  _push(`</div><div class="col-5" data-v-74215d6c>`);
  if ($data.recipeGrinderMode) {
    _push(`<div data-v-74215d6c><label data-v-74215d6c>Recipe grinder</label>`);
    _push(ssrRenderComponent(_component_v_select, {
      label: "Select recipe grinder",
      items: $props.grinders,
      "item-title": "full_name",
      "item-value": "id",
      modelValue: $data.recipeGrinder,
      "onUpdate:modelValue": ($event) => $data.recipeGrinder = $event,
      "return-object": ""
    }, null, _parent));
    if ($data.recipeGrinderMode && $data.recipeGrinder) {
      _push(`<div class="input-group mt-2 mb-4" data-v-74215d6c><span class="input-group-text" id="inputGroup-sizing-default" data-v-74215d6c>Setting</span><input type="number" min="1"${ssrRenderAttr("value", $data.recipeGrindNumber)} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-v-74215d6c></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.recipeGrinderMode) {
    _push(`<div data-v-74215d6c><label data-v-74215d6c>What is the general grind size in the recipe?</label>`);
    _push(ssrRenderComponent(_component_v_select, {
      label: "Select general grind size",
      items: $data.generalGrindSizes,
      modelValue: $data.selectedGeneralGrindSize,
      "onUpdate:modelValue": ($event) => $data.selectedGeneralGrindSize = $event
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.userGrinder && $data.recipeGrinder && $data.recipeGrindNumber && $data.recipeGrinderMode) {
    _push(`<p data-v-74215d6c>${ssrInterpolate($data.recipeGrindNumber)} clicks on ${ssrInterpolate($data.recipeGrinder.grinder_producer.name)} ${ssrInterpolate($data.recipeGrinder.model)} is considered a ${ssrInterpolate($data.recipeGrindGeneral)} grind and it will be around the setting of `);
    if ($data.recipeGrindGeneral !== "very coarse") {
      _push(`<span data-v-74215d6c>${ssrInterpolate($data.userGrindMin)} to ${ssrInterpolate($data.userGrindMax)}</span>`);
    } else {
      _push(`<span data-v-74215d6c>${ssrInterpolate($data.userGrindMin)}+</span>`);
    }
    _push(` on ${ssrInterpolate($data.userGrinder.grinder_producer.name)} ${ssrInterpolate($data.userGrinder.model)}. </p>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.userGrinder && !$data.recipeGrinderMode && $data.selectedGeneralGrindSize) {
    _push(`<p data-v-74215d6c>${ssrInterpolate($data.selectedGeneralGrindSize)} is around the setting of `);
    if ($data.recipeGrindGeneral !== "very coarse") {
      _push(`<span data-v-74215d6c>${ssrInterpolate($data.userGrindMin)} to ${ssrInterpolate($data.userGrindMax)}</span>`);
    } else {
      _push(`<span data-v-74215d6c>${ssrInterpolate($data.userGrindMin)}+</span>`);
    }
    _push(` on ${ssrInterpolate($data.userGrinder.grinder_producer.name)} ${ssrInterpolate($data.userGrinder.model)}. </p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p data-v-74215d6c>Is the grinder you&#39;re looking for not on the list? <a href="#" data-v-74215d6c>click here</a> to add a new one.</p><p data-v-74215d6c>If you want to request changes to an existing grinder <a href="#" data-v-74215d6c>click here</a>.</p>`);
  _push(ssrRenderComponent(_component_new_grinder_form_component, {
    modelValue: $data.showNewGrinderModal,
    "onUpdate:modelValue": ($event) => $data.showNewGrinderModal = $event,
    grinders: $props.grinders,
    producers: $props.producers
  }, null, _parent));
  _push(ssrRenderComponent(_component_grinder_report_form_component, {
    modelValue: $data.showReportModal,
    "onUpdate:modelValue": ($event) => $data.showReportModal = $event,
    grinders: $props.grinders
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrindSizeComponent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const GrindSizeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-74215d6c"]]);
const GrinderDetailsComponent_vue_vue_type_style_index_0_scoped_af3d90f4_lang = "";
const _sfc_main$8 = {
  components: { VueFinalModal, ModalsContainer },
  props: ["grinder", "producer", "producers", "is_admin"],
  data() {
    return {
      showEditGrinderModal: false,
      showReportModal: false,
      showDeleteModal: false,
      status: this.grinder.is_verified,
      statuses: [
        { name: "Verified", value: 1 },
        { name: "Unverified", value: 0 }
      ]
    };
  },
  methods: {
    removeGrinder: function() {
      axios.delete("/grinders/" + this.grinder.id).then((response) => {
      }).catch((error) => {
      });
      window.location.href = "/grinders";
    },
    saveStatus: function() {
      axios.put("/grinder-status/" + this.grinder.id, {
        is_verified: this.status
      }).then((response) => {
      }).catch((error) => {
      });
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_select = resolveComponent("v-select");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_grinder_report_form_component = resolveComponent("grinder-report-form-component");
  const _component_grinder_edit_form_component = resolveComponent("grinder-edit-form-component");
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center" }, _attrs))} data-v-af3d90f4><div class="col-md-8" data-v-af3d90f4>`);
  _push(ssrRenderComponent(_component_v_card, { class: "mx-auto" }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="h5 text-center" data-v-af3d90f4${_scopeId2}>Details about: ${ssrInterpolate($props.producer + " " + $props.grinder.model)}</h1>`);
            } else {
              return [
                createVNode("h1", { class: "h5 text-center" }, "Details about: " + toDisplayString($props.producer + " " + $props.grinder.model), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, {
                class: "m-4 p-2",
                elevation: "2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5 class="pb-4" data-v-af3d90f4${_scopeId3}>Settings for different grind sizes:</h5>`);
                    if ($props.grinder.very_fine_min) {
                      _push4(`<p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Very fine (Espresso grind):</span> ${ssrInterpolate($props.grinder.very_fine_min + " to " + $props.grinder.very_fine_max)}</p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Fine (Moka pot):</span> ${ssrInterpolate($props.grinder.fine_min + " to " + $props.grinder.fine_max)}</p><p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Medium (Drip coffee (v60, Kalita), aeropress, syphon):</span> ${ssrInterpolate($props.grinder.medium_min + " to " + $props.grinder.medium_max)}</p><p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Medium coarse(Clever dripper, Chemex):</span> ${ssrInterpolate($props.grinder.medium_coarse_min + " to " + $props.grinder.medium_coarse_max)}</p><p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Coarse(French press):</span> ${ssrInterpolate($props.grinder.coarse_min + " to " + $props.grinder.coarse_max)}</p><p data-v-af3d90f4${_scopeId3}><span class="fw-bold" data-v-af3d90f4${_scopeId3}>Very coarse (Cold brew): from</span> ${ssrInterpolate($props.grinder.very_coarse_min)}+ </p>`);
                    if ($props.grinder.notes) {
                      _push4(`<div data-v-af3d90f4${_scopeId3}><h5 data-v-af3d90f4${_scopeId3}>Notes:</h5><p data-v-af3d90f4${_scopeId3}>${ssrInterpolate($props.grinder.notes)}</p></div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("h5", { class: "pb-4" }, "Settings for different grind sizes:"),
                      $props.grinder.very_fine_min ? (openBlock(), createBlock("p", { key: 0 }, [
                        createVNode("span", { class: "fw-bold" }, "Very fine (Espresso grind):"),
                        createTextVNode(" " + toDisplayString($props.grinder.very_fine_min + " to " + $props.grinder.very_fine_max), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("p", null, [
                        createVNode("span", { class: "fw-bold" }, "Fine (Moka pot):"),
                        createTextVNode(" " + toDisplayString($props.grinder.fine_min + " to " + $props.grinder.fine_max), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("span", { class: "fw-bold" }, "Medium (Drip coffee (v60, Kalita), aeropress, syphon):"),
                        createTextVNode(" " + toDisplayString($props.grinder.medium_min + " to " + $props.grinder.medium_max), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("span", { class: "fw-bold" }, "Medium coarse(Clever dripper, Chemex):"),
                        createTextVNode(" " + toDisplayString($props.grinder.medium_coarse_min + " to " + $props.grinder.medium_coarse_max), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("span", { class: "fw-bold" }, "Coarse(French press):"),
                        createTextVNode(" " + toDisplayString($props.grinder.coarse_min + " to " + $props.grinder.coarse_max), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("span", { class: "fw-bold" }, "Very coarse (Cold brew): from"),
                        createTextVNode(" " + toDisplayString($props.grinder.very_coarse_min) + "+ ", 1)
                      ]),
                      $props.grinder.notes ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("h5", null, "Notes:"),
                        createVNode("p", null, toDisplayString($props.grinder.notes), 1)
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              if ($props.is_admin) {
                _push3(ssrRenderComponent(_component_v_card, {
                  class: "col-4 mx-auto",
                  elevation: "2"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_title, null, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<h5 class="text-center" data-v-af3d90f4${_scopeId4}>Grinder status:</h5>`);
                          } else {
                            return [
                              createVNode("h5", { class: "text-center" }, "Grinder status:")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_select, {
                        modelValue: $data.status,
                        "onUpdate:modelValue": ($event) => $data.status = $event,
                        items: $data.statuses,
                        "item-title": "name",
                        "item-value": "value",
                        label: "Select",
                        class: "px-4",
                        "single-line": ""
                      }, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_actions, null, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_btn, {
                              color: "primary",
                              rounder: "lg",
                              onClick: $options.saveStatus,
                              class: "m-2 mx-auto"
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(` Save status `);
                                } else {
                                  return [
                                    createTextVNode(" Save status ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                rounder: "lg",
                                onClick: $options.saveStatus,
                                class: "m-2 mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save status ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-center" }, "Grinder status:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_select, {
                          modelValue: $data.status,
                          "onUpdate:modelValue": ($event) => $data.status = $event,
                          items: $data.statuses,
                          "item-title": "name",
                          "item-value": "value",
                          label: "Select",
                          class: "px-4",
                          "single-line": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              rounder: "lg",
                              onClick: $options.saveStatus,
                              class: "m-2 mx-auto"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save status ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_v_card, {
                  class: "m-4 p-2",
                  elevation: "2"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "pb-4" }, "Settings for different grind sizes:"),
                    $props.grinder.very_fine_min ? (openBlock(), createBlock("p", { key: 0 }, [
                      createVNode("span", { class: "fw-bold" }, "Very fine (Espresso grind):"),
                      createTextVNode(" " + toDisplayString($props.grinder.very_fine_min + " to " + $props.grinder.very_fine_max), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("p", null, [
                      createVNode("span", { class: "fw-bold" }, "Fine (Moka pot):"),
                      createTextVNode(" " + toDisplayString($props.grinder.fine_min + " to " + $props.grinder.fine_max), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("span", { class: "fw-bold" }, "Medium (Drip coffee (v60, Kalita), aeropress, syphon):"),
                      createTextVNode(" " + toDisplayString($props.grinder.medium_min + " to " + $props.grinder.medium_max), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("span", { class: "fw-bold" }, "Medium coarse(Clever dripper, Chemex):"),
                      createTextVNode(" " + toDisplayString($props.grinder.medium_coarse_min + " to " + $props.grinder.medium_coarse_max), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("span", { class: "fw-bold" }, "Coarse(French press):"),
                      createTextVNode(" " + toDisplayString($props.grinder.coarse_min + " to " + $props.grinder.coarse_max), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("span", { class: "fw-bold" }, "Very coarse (Cold brew): from"),
                      createTextVNode(" " + toDisplayString($props.grinder.very_coarse_min) + "+ ", 1)
                    ]),
                    $props.grinder.notes ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("h5", null, "Notes:"),
                      createVNode("p", null, toDisplayString($props.grinder.notes), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                $props.is_admin ? (openBlock(), createBlock(_component_v_card, {
                  key: 0,
                  class: "col-4 mx-auto",
                  elevation: "2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-center" }, "Grinder status:")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: $data.status,
                      "onUpdate:modelValue": ($event) => $data.status = $event,
                      items: $data.statuses,
                      "item-title": "name",
                      "item-value": "value",
                      label: "Select",
                      class: "px-4",
                      "single-line": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounder: "lg",
                          onClick: $options.saveStatus,
                          class: "m-2 mx-auto"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save status ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($props.is_admin) {
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  onClick: ($event) => $data.showEditGrinderModal = true,
                  class: "m-2"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Edit the grinder `);
                    } else {
                      return [
                        createTextVNode(" Edit the grinder ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              if ($props.is_admin) {
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "danger",
                  rounder: "lg",
                  onClick: ($event) => $data.showDeleteModal = true,
                  class: "m-2"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Remove the grinder `);
                    } else {
                      return [
                        createTextVNode(" Remove the grinder ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                  key: 0,
                  color: "primary",
                  rounder: "lg",
                  onClick: ($event) => $data.showEditGrinderModal = true,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Edit the grinder ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                  key: 1,
                  color: "danger",
                  rounder: "lg",
                  onClick: ($event) => $data.showDeleteModal = true,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove the grinder ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/grinders",
                class: "mx-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Go back to the list `);
                  } else {
                    return [
                      createTextVNode(" Go back to the list ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                onClick: ($event) => $data.showReportModal = true,
                class: "mx-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Request changes to the grinder `);
                  } else {
                    return [
                      createTextVNode(" Request changes to the grinder ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: "/grinders",
                  class: "mx-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go back to the list ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  onClick: ($event) => $data.showReportModal = true,
                  class: "mx-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Request changes to the grinder ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createVNode("h1", { class: "h5 text-center" }, "Details about: " + toDisplayString($props.producer + " " + $props.grinder.model), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_component_v_card, {
                class: "m-4 p-2",
                elevation: "2"
              }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "pb-4" }, "Settings for different grind sizes:"),
                  $props.grinder.very_fine_min ? (openBlock(), createBlock("p", { key: 0 }, [
                    createVNode("span", { class: "fw-bold" }, "Very fine (Espresso grind):"),
                    createTextVNode(" " + toDisplayString($props.grinder.very_fine_min + " to " + $props.grinder.very_fine_max), 1)
                  ])) : createCommentVNode("", true),
                  createVNode("p", null, [
                    createVNode("span", { class: "fw-bold" }, "Fine (Moka pot):"),
                    createTextVNode(" " + toDisplayString($props.grinder.fine_min + " to " + $props.grinder.fine_max), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("span", { class: "fw-bold" }, "Medium (Drip coffee (v60, Kalita), aeropress, syphon):"),
                    createTextVNode(" " + toDisplayString($props.grinder.medium_min + " to " + $props.grinder.medium_max), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("span", { class: "fw-bold" }, "Medium coarse(Clever dripper, Chemex):"),
                    createTextVNode(" " + toDisplayString($props.grinder.medium_coarse_min + " to " + $props.grinder.medium_coarse_max), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("span", { class: "fw-bold" }, "Coarse(French press):"),
                    createTextVNode(" " + toDisplayString($props.grinder.coarse_min + " to " + $props.grinder.coarse_max), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("span", { class: "fw-bold" }, "Very coarse (Cold brew): from"),
                    createTextVNode(" " + toDisplayString($props.grinder.very_coarse_min) + "+ ", 1)
                  ]),
                  $props.grinder.notes ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("h5", null, "Notes:"),
                    createVNode("p", null, toDisplayString($props.grinder.notes), 1)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              $props.is_admin ? (openBlock(), createBlock(_component_v_card, {
                key: 0,
                class: "col-4 mx-auto",
                elevation: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-center" }, "Grinder status:")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_select, {
                    modelValue: $data.status,
                    "onUpdate:modelValue": ($event) => $data.status = $event,
                    items: $data.statuses,
                    "item-title": "name",
                    "item-value": "value",
                    label: "Select",
                    class: "px-4",
                    "single-line": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounder: "lg",
                        onClick: $options.saveStatus,
                        class: "m-2 mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save status ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                key: 0,
                color: "primary",
                rounder: "lg",
                onClick: ($event) => $data.showEditGrinderModal = true,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Edit the grinder ")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                key: 1,
                color: "danger",
                rounder: "lg",
                onClick: ($event) => $data.showDeleteModal = true,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Remove the grinder ")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/grinders",
                class: "mx-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Go back to the list ")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                onClick: ($event) => $data.showReportModal = true,
                class: "mx-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Request changes to the grinder ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_grinder_report_form_component, {
    modelValue: $data.showReportModal,
    "onUpdate:modelValue": ($event) => $data.showReportModal = $event,
    grinder: $props.grinder
  }, null, _parent));
  _push(ssrRenderComponent(_component_grinder_edit_form_component, {
    modelValue: $data.showEditGrinderModal,
    "onUpdate:modelValue": ($event) => $data.showEditGrinderModal = $event,
    grinder: $props.grinder,
    producers: $props.producers
  }, null, _parent));
  _push(ssrRenderComponent(_component_vue_final_modal, {
    modelValue: $data.showDeleteModal,
    "onUpdate:modelValue": ($event) => $data.showDeleteModal = $event,
    classes: "modal-container",
    "content-class": "modal-content"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-af3d90f4${_scopeId}>Are you sure you want to delete this grinder?</span><div class="modal__action" data-v-af3d90f4${_scopeId}><div class="d-flex justify-content-center" data-v-af3d90f4${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2 text-white",
          color: "danger",
          onClick: $options.removeGrinder
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` confirm `);
            } else {
              return [
                createTextVNode(" confirm ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2",
          color: "primary",
          onClick: ($event) => $data.showDeleteModal = false
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` cancel `);
            } else {
              return [
                createTextVNode(" cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Are you sure you want to delete this grinder?"),
          createVNode("div", { class: "modal__action" }, [
            createVNode("div", { class: "d-flex justify-content-center" }, [
              createVNode(_component_v_btn, {
                class: "mx-2 text-white",
                color: "danger",
                onClick: $options.removeGrinder
              }, {
                default: withCtx(() => [
                  createTextVNode(" confirm ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_btn, {
                class: "mx-2",
                color: "primary",
                onClick: ($event) => $data.showDeleteModal = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" cancel ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrinderDetailsComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const GrinderDetailsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-af3d90f4"]]);
const ProducerDetailsComponent_vue_vue_type_style_index_0_scoped_c11138e0_lang = "";
const _sfc_main$7 = {
  components: { VueFinalModal, ModalsContainer },
  props: ["producer", "is_admin", "grinder_link", "grinders"],
  data() {
    return {
      showDeleteModal: false,
      status: this.producer.is_verified,
      statuses: [
        { name: "Verified", value: 1 },
        { name: "Unverified", value: 0 }
      ]
    };
  },
  methods: {
    removeProducer: function() {
      axios.delete("/producers/" + this.producer.id).then((response) => {
      }).catch((error) => {
      });
      window.location.href = "/producers";
    },
    saveStatus: function() {
      axios.put("/grinder-producer-status/" + this.producer.id, {
        is_verified: this.status
      }).then((response) => {
      }).catch((error) => {
      });
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_table = resolveComponent("v-table");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_select = resolveComponent("v-select");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center" }, _attrs))} data-v-c11138e0><div class="col-md-8" data-v-c11138e0>`);
  _push(ssrRenderComponent(_component_v_card, {
    class: "mx-auto",
    elevation: "2"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="h5 text-center" data-v-c11138e0${_scopeId2}>Details about producer: ${ssrInterpolate($props.producer.name)}</h1>`);
            } else {
              return [
                createVNode("h1", { class: "h5 text-center" }, "Details about producer: " + toDisplayString($props.producer.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex justify-content-center mb-4" data-v-c11138e0${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { elevation: "2" }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_table, null, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<thead data-v-c11138e0${_scopeId4}><tr data-v-c11138e0${_scopeId4}><th class="text-left" data-v-c11138e0${_scopeId4}> Grinder model </th>`);
                          if (this.is_admin) {
                            _push5(`<th class="text-left" data-v-c11138e0${_scopeId4}> Is verified </th>`);
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`<th class="text-left" data-v-c11138e0${_scopeId4}> Grinder page </th></tr></thead><tbody data-v-c11138e0${_scopeId4}><!--[-->`);
                          ssrRenderList($props.grinders, (grinder) => {
                            _push5(`<tr data-v-c11138e0${_scopeId4}><td data-v-c11138e0${_scopeId4}>${ssrInterpolate(grinder.model)}</td>`);
                            if (this.is_admin) {
                              _push5(`<td data-v-c11138e0${_scopeId4}>${ssrInterpolate(grinder.is_verified)}</td>`);
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`<td data-v-c11138e0${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_v_btn, {
                              color: "primary",
                              rounder: "lg",
                              href: this.grinder_link + "/" + grinder.id
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(` Details `);
                                } else {
                                  return [
                                    createTextVNode(" Details ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`</td></tr>`);
                          });
                          _push5(`<!--]--></tbody>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left" }, " Grinder model "),
                                this.is_admin ? (openBlock(), createBlock("th", {
                                  key: 0,
                                  class: "text-left"
                                }, " Is verified ")) : createCommentVNode("", true),
                                createVNode("th", { class: "text-left" }, " Grinder page ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                                return openBlock(), createBlock("tr", {
                                  key: grinder.model
                                }, [
                                  createVNode("td", null, toDisplayString(grinder.model), 1),
                                  this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                                  createVNode("td", null, [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      rounder: "lg",
                                      href: this.grinder_link + "/" + grinder.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Details ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_table, null, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left" }, " Grinder model "),
                              this.is_admin ? (openBlock(), createBlock("th", {
                                key: 0,
                                class: "text-left"
                              }, " Is verified ")) : createCommentVNode("", true),
                              createVNode("th", { class: "text-left" }, " Grinder page ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                              return openBlock(), createBlock("tr", {
                                key: grinder.model
                              }, [
                                createVNode("td", null, toDisplayString(grinder.model), 1),
                                this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                                createVNode("td", null, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    rounder: "lg",
                                    href: this.grinder_link + "/" + grinder.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Details ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              if ($props.is_admin) {
                _push3(ssrRenderComponent(_component_v_card, {
                  class: "col-4 mx-auto",
                  elevation: "2"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_title, null, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<h5 class="text-center" data-v-c11138e0${_scopeId4}>Producer status:</h5>`);
                          } else {
                            return [
                              createVNode("h5", { class: "text-center" }, "Producer status:")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_select, {
                        class: "px-4",
                        modelValue: $data.status,
                        "onUpdate:modelValue": ($event) => $data.status = $event,
                        items: $data.statuses,
                        "item-title": "name",
                        "item-value": "value",
                        label: "Select",
                        "single-line": ""
                      }, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_actions, null, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if ($props.is_admin) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                rounder: "lg",
                                onClick: $options.saveStatus,
                                class: "m-2 mx-auto"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save status `);
                                  } else {
                                    return [
                                      createTextVNode(" Save status ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              _push5(`<!---->`);
                            }
                          } else {
                            return [
                              $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                color: "primary",
                                rounder: "lg",
                                onClick: $options.saveStatus,
                                class: "m-2 mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save status ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-center" }, "Producer status:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_select, {
                          class: "px-4",
                          modelValue: $data.status,
                          "onUpdate:modelValue": ($event) => $data.status = $event,
                          items: $data.statuses,
                          "item-title": "name",
                          "item-value": "value",
                          label: "Select",
                          "single-line": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                              key: 0,
                              color: "primary",
                              rounder: "lg",
                              onClick: $options.saveStatus,
                              class: "m-2 mx-auto"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save status ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "d-flex justify-content-center mb-4" }, [
                  createVNode(_component_v_card, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_table, null, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left" }, " Grinder model "),
                              this.is_admin ? (openBlock(), createBlock("th", {
                                key: 0,
                                class: "text-left"
                              }, " Is verified ")) : createCommentVNode("", true),
                              createVNode("th", { class: "text-left" }, " Grinder page ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                              return openBlock(), createBlock("tr", {
                                key: grinder.model
                              }, [
                                createVNode("td", null, toDisplayString(grinder.model), 1),
                                this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                                createVNode("td", null, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    rounder: "lg",
                                    href: this.grinder_link + "/" + grinder.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Details ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                $props.is_admin ? (openBlock(), createBlock(_component_v_card, {
                  key: 0,
                  class: "col-4 mx-auto",
                  elevation: "2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-center" }, "Producer status:")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      class: "px-4",
                      modelValue: $data.status,
                      "onUpdate:modelValue": ($event) => $data.status = $event,
                      items: $data.statuses,
                      "item-title": "name",
                      "item-value": "value",
                      label: "Select",
                      "single-line": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                          key: 0,
                          color: "primary",
                          rounder: "lg",
                          onClick: $options.saveStatus,
                          class: "m-2 mx-auto"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save status ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/producers",
                class: "mx-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Go back to the list `);
                  } else {
                    return [
                      createTextVNode(" Go back to the list ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              if ($props.is_admin) {
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "danger",
                  rounder: "lg",
                  onClick: ($event) => $data.showDeleteModal = true,
                  class: "m-2"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Remove the producer `);
                    } else {
                      return [
                        createTextVNode(" Remove the producer ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: "/producers",
                  class: "mx-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go back to the list ")
                  ]),
                  _: 1
                }),
                $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                  key: 0,
                  color: "danger",
                  rounder: "lg",
                  onClick: ($event) => $data.showDeleteModal = true,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove the producer ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createVNode("h1", { class: "h5 text-center" }, "Details about producer: " + toDisplayString($props.producer.name), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex justify-content-center mb-4" }, [
                createVNode(_component_v_card, { elevation: "2" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_table, null, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-left" }, " Grinder model "),
                            this.is_admin ? (openBlock(), createBlock("th", {
                              key: 0,
                              class: "text-left"
                            }, " Is verified ")) : createCommentVNode("", true),
                            createVNode("th", { class: "text-left" }, " Grinder page ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                            return openBlock(), createBlock("tr", {
                              key: grinder.model
                            }, [
                              createVNode("td", null, toDisplayString(grinder.model), 1),
                              this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                              createVNode("td", null, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  rounder: "lg",
                                  href: this.grinder_link + "/" + grinder.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Details ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              $props.is_admin ? (openBlock(), createBlock(_component_v_card, {
                key: 0,
                class: "col-4 mx-auto",
                elevation: "2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-center" }, "Producer status:")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_select, {
                    class: "px-4",
                    modelValue: $data.status,
                    "onUpdate:modelValue": ($event) => $data.status = $event,
                    items: $data.statuses,
                    "item-title": "name",
                    "item-value": "value",
                    label: "Select",
                    "single-line": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                        key: 0,
                        color: "primary",
                        rounder: "lg",
                        onClick: $options.saveStatus,
                        class: "m-2 mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save status ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/producers",
                class: "mx-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Go back to the list ")
                ]),
                _: 1
              }),
              $props.is_admin ? (openBlock(), createBlock(_component_v_btn, {
                key: 0,
                color: "danger",
                rounder: "lg",
                onClick: ($event) => $data.showDeleteModal = true,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Remove the producer ")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_vue_final_modal, {
    modelValue: $data.showDeleteModal,
    "onUpdate:modelValue": ($event) => $data.showDeleteModal = $event,
    classes: "modal-container",
    "content-class": "modal-content"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-c11138e0${_scopeId}>Are you sure you want to delete this producer?</span><div class="modal__action" data-v-c11138e0${_scopeId}><div class="d-flex justify-content-center" data-v-c11138e0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2 text-white",
          color: "danger",
          onClick: $options.removeProducer
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` confirm `);
            } else {
              return [
                createTextVNode(" confirm ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2",
          color: "primary",
          onClick: ($event) => $data.showDeleteModal = false
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` cancel `);
            } else {
              return [
                createTextVNode(" cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Are you sure you want to delete this producer?"),
          createVNode("div", { class: "modal__action" }, [
            createVNode("div", { class: "d-flex justify-content-center" }, [
              createVNode(_component_v_btn, {
                class: "mx-2 text-white",
                color: "danger",
                onClick: $options.removeProducer
              }, {
                default: withCtx(() => [
                  createTextVNode(" confirm ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_btn, {
                class: "mx-2",
                color: "primary",
                onClick: ($event) => $data.showDeleteModal = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" cancel ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProducerDetailsComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProducerDetailsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-c11138e0"]]);
const GrinderReportFormComponent_vue_vue_type_style_index_0_scoped_78ba2c60_lang = "";
const _sfc_main$6 = {
  components: { vSelect, VueFinalModal, ModalsContainer },
  props: ["grinders", "grinder"],
  data() {
    return {
      reportForm: new Form({
        report: null,
        grinder_id: null
      }),
      reportFormMessage: null
    };
  },
  mounted() {
  },
  created() {
  },
  computed: {},
  methods: {
    submitNewReport() {
      var _a;
      this.reportFormMessage = null;
      axios.post(
        "/grinder-reports",
        {
          report: this.reportForm.report,
          grinder_id: (_a = this.reportForm.grinder_id) != null ? _a : this.grinder.id
        }
      ).then((response) => {
        this.reportFormMessage = response.data.message;
        this.reportForm.reset();
      }).catch((error) => this.reportForm.errors.record(error.response.data));
    }
  },
  watch: {}
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_vue_final_modal, mergeProps({
    classes: "modal-container",
    "content-class": "modal-content"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-78ba2c60${_scopeId}>Submit a new grinder report</span>`);
        if ($data.reportFormMessage) {
          _push2(`<span class="text-success" data-v-78ba2c60${_scopeId}>${ssrInterpolate($data.reportFormMessage)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form data-v-78ba2c60${_scopeId}>`);
        if ($props.grinders) {
          _push2(`<div class="my-3" data-v-78ba2c60${_scopeId}><label data-v-78ba2c60${_scopeId}>Select the grinder you want to report</label>`);
          _push2(ssrRenderComponent(_component_v_select, {
            label: "item_data",
            options: $props.grinders,
            reduce: (grinders) => grinders.id,
            modelValue: $data.reportForm.grinder_id,
            "onUpdate:modelValue": ($event) => $data.reportForm.grinder_id = $event
          }, null, _parent2, _scopeId));
          if ($data.reportForm.errors.has("grinder_id")) {
            _push2(`<span class="text-danger" data-v-78ba2c60${_scopeId}>${ssrInterpolate($data.reportForm.errors.get("grinder_id"))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="mb-3" data-v-78ba2c60${_scopeId}><label for="exampleFormControlTextarea1" class="form-label" data-v-78ba2c60${_scopeId}>What do you want to report?</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" data-v-78ba2c60${_scopeId}>${ssrInterpolate($data.reportForm.report)}</textarea>`);
        if ($data.reportForm.errors.has("report")) {
          _push2(`<span class="text-danger" data-v-78ba2c60${_scopeId}>${ssrInterpolate($data.reportForm.errors.get("report"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><button class="btn btn-primary mx-2" data-v-78ba2c60${_scopeId}> Submit </button></form>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Submit a new grinder report"),
          $data.reportFormMessage ? (openBlock(), createBlock("span", {
            key: 0,
            class: "text-success",
            textContent: toDisplayString($data.reportFormMessage)
          }, null, 8, ["textContent"])) : createCommentVNode("", true),
          createVNode("form", {
            onSubmit: $options.submitNewReport,
            onKeydown: ($event) => $data.reportForm.errors.clear($event.target.name)
          }, [
            $props.grinders ? (openBlock(), createBlock("div", {
              key: 0,
              class: "my-3"
            }, [
              createVNode("label", null, "Select the grinder you want to report"),
              createVNode(_component_v_select, {
                label: "item_data",
                options: $props.grinders,
                reduce: (grinders) => grinders.id,
                modelValue: $data.reportForm.grinder_id,
                "onUpdate:modelValue": ($event) => $data.reportForm.grinder_id = $event
              }, null, 8, ["options", "reduce", "modelValue", "onUpdate:modelValue"]),
              $data.reportForm.errors.has("grinder_id") ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-danger",
                textContent: toDisplayString($data.reportForm.errors.get("grinder_id"))
              }, null, 8, ["textContent"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createVNode("div", { class: "mb-3" }, [
              createVNode("label", {
                for: "exampleFormControlTextarea1",
                class: "form-label"
              }, "What do you want to report?"),
              withDirectives(createVNode("textarea", {
                class: "form-control",
                id: "exampleFormControlTextarea1",
                rows: "3",
                "onUpdate:modelValue": ($event) => $data.reportForm.report = $event
              }, "\n                    ", 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.reportForm.report]
              ]),
              $data.reportForm.errors.has("report") ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-danger",
                textContent: toDisplayString($data.reportForm.errors.get("report"))
              }, null, 8, ["textContent"])) : createCommentVNode("", true)
            ]),
            createVNode("button", {
              onClick: withModifiers(($event) => $options.submitNewReport(), ["prevent"]),
              class: "btn btn-primary mx-2"
            }, " Submit ", 8, ["onClick"])
          ], 40, ["onSubmit", "onKeydown"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrinderReportFormComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const GrinderReportFormComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-78ba2c60"]]);
const GrinderReportDetailsComponent_vue_vue_type_style_index_0_scoped_878e28b8_lang = "";
const _sfc_main$5 = {
  components: { VueFinalModal, ModalsContainer },
  props: ["report", "grinder", "producers"],
  data() {
    return {
      showDeleteModal: false,
      showEditGrinderModal: false
    };
  },
  methods: {
    removeGrinderReport: function() {
      axios.delete("/grinder-reports/" + this.report.id).then((response) => {
      }).catch((error) => {
      });
      window.location.href = "/grinder-reports";
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_grinder_edit_form_component = resolveComponent("grinder-edit-form-component");
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center" }, _attrs))} data-v-878e28b8><div class="col-md-8" data-v-878e28b8>`);
  _push(ssrRenderComponent(_component_v_card, null, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="h5 text-center" data-v-878e28b8${_scopeId2}>Details about report id: ${ssrInterpolate($props.report.id)}</h1>`);
            } else {
              return [
                createVNode("h1", { class: "h5 text-center" }, "Details about report id: " + toDisplayString($props.report.id), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, { class: "text-center" }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p data-v-878e28b8${_scopeId2}>${ssrInterpolate($props.report.report)}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString($props.report.report), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                onClick: ($event) => $data.showEditGrinderModal = true,
                class: "m-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Edit the grinder `);
                  } else {
                    return [
                      createTextVNode(" Edit the grinder ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "danger",
                rounder: "lg",
                onClick: ($event) => $data.showDeleteModal = true,
                class: "m-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Remove the report `);
                  } else {
                    return [
                      createTextVNode(" Remove the report ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  onClick: ($event) => $data.showEditGrinderModal = true,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Edit the grinder ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_v_btn, {
                  color: "danger",
                  rounder: "lg",
                  onClick: ($event) => $data.showDeleteModal = true,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove the report ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/producers",
                class: "mx-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Go back to the list `);
                  } else {
                    return [
                      createTextVNode(" Go back to the list ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/grinders/" + $props.report.grinder_id,
                class: "m-2"
              }, {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Go to the grinder `);
                  } else {
                    return [
                      createTextVNode(" Go to the grinder ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: "/producers",
                  class: "mx-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go back to the list ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: "/grinders/" + $props.report.grinder_id,
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go to the grinder ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createVNode("h1", { class: "h5 text-center" }, "Details about report id: " + toDisplayString($props.report.id), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode("p", null, toDisplayString($props.report.report), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                onClick: ($event) => $data.showEditGrinderModal = true,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Edit the grinder ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_btn, {
                color: "danger",
                rounder: "lg",
                onClick: ($event) => $data.showDeleteModal = true,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Remove the report ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/producers",
                class: "mx-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Go back to the list ")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                color: "primary",
                rounder: "lg",
                href: "/grinders/" + $props.report.grinder_id,
                class: "m-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Go to the grinder ")
                ]),
                _: 1
              }, 8, ["href"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_grinder_edit_form_component, {
    modelValue: $data.showEditGrinderModal,
    "onUpdate:modelValue": ($event) => $data.showEditGrinderModal = $event,
    grinder: $props.grinder,
    producers: $props.producers
  }, null, _parent));
  _push(ssrRenderComponent(_component_vue_final_modal, {
    modelValue: $data.showDeleteModal,
    "onUpdate:modelValue": ($event) => $data.showDeleteModal = $event,
    classes: "modal-container",
    "content-class": "modal-content"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-878e28b8${_scopeId}>Are you sure you want to delete this report?</span><div class="modal__action" data-v-878e28b8${_scopeId}><div class="d-flex justify-content-center" data-v-878e28b8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2 text-white",
          color: "danger",
          onClick: $options.removeGrinderReport
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` confirm `);
            } else {
              return [
                createTextVNode(" confirm ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "mx-2",
          color: "primary",
          onClick: ($event) => $data.showDeleteModal = false
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` cancel `);
            } else {
              return [
                createTextVNode(" cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Are you sure you want to delete this report?"),
          createVNode("div", { class: "modal__action" }, [
            createVNode("div", { class: "d-flex justify-content-center" }, [
              createVNode(_component_v_btn, {
                class: "mx-2 text-white",
                color: "danger",
                onClick: $options.removeGrinderReport
              }, {
                default: withCtx(() => [
                  createTextVNode(" confirm ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_btn, {
                class: "mx-2",
                color: "primary",
                onClick: ($event) => $data.showDeleteModal = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" cancel ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrinderReportDetailsComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const GrinderReportDetailsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-878e28b8"]]);
const NewGrinderFormComponent_vue_vue_type_style_index_0_scoped_3d867557_lang = "";
const _sfc_main$4 = {
  components: { vSelect, VueFinalModal, ModalsContainer },
  props: ["grinders", "producers"],
  data() {
    return {
      newProducerSwitch: false,
      newGrinderForm: new Form({
        model: null,
        producer_id: null,
        producer_name: null,
        very_fine_min: null,
        very_fine_max: null,
        fine_min: null,
        fine_max: null,
        medium_min: null,
        medium_max: null,
        medium_coarse_min: null,
        medium_coarse_max: null,
        coarse_min: null,
        coarse_max: null,
        very_coarse_min: null,
        notes: null
      }),
      newGrinderFormMessage: null
    };
  },
  mounted() {
  },
  created() {
  },
  computed: {},
  methods: {
    submitNewGrinder() {
      this.newGrinderFormMessage = null;
      axios.post(
        "/grinders",
        {
          model: this.newGrinderForm.model,
          grinder_producer_id: this.newGrinderForm.producer_id,
          producer_name: this.newGrinderForm.producer_name,
          notes: this.newGrinderForm.notes,
          very_fine_min: this.newGrinderForm.very_fine_min,
          very_fine_max: this.newGrinderForm.very_fine_max,
          fine_min: this.newGrinderForm.fine_min,
          fine_max: this.newGrinderForm.fine_max,
          medium_min: this.newGrinderForm.medium_min,
          medium_max: this.newGrinderForm.medium_max,
          medium_coarse_min: this.newGrinderForm.medium_coarse_min,
          medium_coarse_max: this.newGrinderForm.medium_coarse_max,
          coarse_min: this.newGrinderForm.coarse_min,
          coarse_max: this.newGrinderForm.coarse_max,
          very_coarse_min: this.newGrinderForm.very_coarse_min
        }
      ).then((response) => {
        this.newGrinderFormMessage = response.data.message;
        this.newGrinderForm.reset();
      }).catch((error) => this.newGrinderForm.errors.record(error.response.data));
    }
  },
  watch: {}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_vue_final_modal, mergeProps({
    classes: "modal-container",
    "content-class": "modal-content"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-3d867557${_scopeId}>Add a new grinder</span>`);
        if ($data.newGrinderFormMessage) {
          _push2(`<span class="text-success" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderFormMessage)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form data-v-3d867557${_scopeId}><div class="row" data-v-3d867557${_scopeId}><div class="col-6" data-v-3d867557${_scopeId}><div class="mb-3" data-v-3d867557${_scopeId}><label for="exampleFormControlInput1" class="form-label" data-v-3d867557${_scopeId}>Grinder Model</label><input type="text" class="form-control" id="exampleFormControlInput1"${ssrRenderAttr("value", $data.newGrinderForm.model)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("model")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("model"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-3d867557${_scopeId}>`);
        if (!$data.newProducerSwitch) {
          _push2(`<div class="mb-3" data-v-3d867557${_scopeId}><label for="grinderProducer" class="form-label" data-v-3d867557${_scopeId}>Grinder producer</label>`);
          _push2(ssrRenderComponent(_component_v_select, {
            modelValue: $data.newGrinderForm.producer_id,
            "onUpdate:modelValue": ($event) => $data.newGrinderForm.producer_id = $event,
            options: $props.producers,
            reduce: (producers) => producers.id,
            label: "name"
          }, null, _parent2, _scopeId));
          _push2(`<a href="#" data-v-3d867557${_scopeId}>Click here if the producer is not on the list.</a>`);
          if ($data.newGrinderForm.errors.has("producer_id")) {
            _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("producer_id"))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newProducerSwitch) {
          _push2(`<div class="mb-3" data-v-3d867557${_scopeId}><label for="exampleFormControlInput1" class="form-label" data-v-3d867557${_scopeId}>Producer name</label><input type="text" class="form-control" id="exampleFormControlInput1"${ssrRenderAttr("value", $data.newGrinderForm.producer_name)} data-v-3d867557${_scopeId}><a href="#" data-v-3d867557${_scopeId}>Go back to producers list.</a>`);
          if ($data.newGrinderForm.errors.has("producer_name")) {
            _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("producer_name"))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="row" data-v-3d867557${_scopeId}><div class="col-6" data-v-3d867557${_scopeId}><label for="veryFine" class="form-label" data-v-3d867557${_scopeId}>Very fine setting (optional)</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><input type="number" class="form-control text-center w-25" min="1"${ssrRenderAttr("value", $data.newGrinderForm.very_fine_min)} data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.very_fine_min + 1)}${ssrRenderAttr("value", $data.newGrinderForm.very_fine_max)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("very_fine_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("very_fine_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newGrinderForm.errors.has("very_fine_max")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("very_fine_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-3d867557${_scopeId}><label for="fine" class="form-label" data-v-3d867557${_scopeId}>Fine setting</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.very_fine_max + 1)}${ssrRenderAttr("value", $data.newGrinderForm.fine_min)} data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.fine_min + 1)}${ssrRenderAttr("value", $data.newGrinderForm.fine_max)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("fine_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("fine_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newGrinderForm.errors.has("fine_max")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("fine_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row" data-v-3d867557${_scopeId}><div class="col-6" data-v-3d867557${_scopeId}><label for="medium" class="form-label" data-v-3d867557${_scopeId}>Medium setting</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.fine_max + 1)}${ssrRenderAttr("value", $data.newGrinderForm.medium_min)} data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.medium_min + 1)}${ssrRenderAttr("value", $data.newGrinderForm.medium_max)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("medium_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("medium_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newGrinderForm.errors.has("medium_max")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("medium_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-3d867557${_scopeId}><label for="mediumCoarse" class="form-label" data-v-3d867557${_scopeId}>Medium coarse setting</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.medium_max + 1)}${ssrRenderAttr("value", $data.newGrinderForm.medium_coarse_min)} data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.medium_coarse_min + 1)}${ssrRenderAttr("value", $data.newGrinderForm.medium_coarse_max)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("medium_coarse_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("medium_coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newGrinderForm.errors.has("medium_coarse_max")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("medium_coarse_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row" data-v-3d867557${_scopeId}><div class="col-6" data-v-3d867557${_scopeId}><label for="coarse" class="form-label" data-v-3d867557${_scopeId}>Coarse setting</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.medium_coarse_max + 1)}${ssrRenderAttr("value", $data.newGrinderForm.coarse_min)} data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.coarse_min + 1)}${ssrRenderAttr("value", $data.newGrinderForm.coarse_max)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("coarse_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.newGrinderForm.errors.has("coarse_max")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("coarse_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-3d867557${_scopeId}><label for="veryCoarse" class="form-label" data-v-3d867557${_scopeId}>Very coarse setting</label><div class="input-group mb-3" data-v-3d867557${_scopeId}><span class="input-group-text" data-v-3d867557${_scopeId}>from</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.newGrinderForm.coarse_max + 1)}${ssrRenderAttr("value", $data.newGrinderForm.very_coarse_min)} data-v-3d867557${_scopeId}>`);
        if ($data.newGrinderForm.errors.has("very_coarse_min")) {
          _push2(`<span class="text-danger" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.errors.get("very_coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="mb-3" data-v-3d867557${_scopeId}><label for="exampleFormControlTextarea1" class="form-label" data-v-3d867557${_scopeId}>Notes (optional)</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" data-v-3d867557${_scopeId}>${ssrInterpolate($data.newGrinderForm.notes)}</textarea></div><button class="btn btn-primary mx-2" data-v-3d867557${_scopeId}> Submit </button></form>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Add a new grinder"),
          $data.newGrinderFormMessage ? (openBlock(), createBlock("span", {
            key: 0,
            class: "text-success",
            textContent: toDisplayString($data.newGrinderFormMessage)
          }, null, 8, ["textContent"])) : createCommentVNode("", true),
          createVNode("form", {
            onSubmit: $options.submitNewGrinder,
            onKeydown: ($event) => $data.newGrinderForm.errors.clear($event.target.name)
          }, [
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("div", { class: "mb-3" }, [
                  createVNode("label", {
                    for: "exampleFormControlInput1",
                    class: "form-label"
                  }, "Grinder Model"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control",
                    id: "exampleFormControlInput1",
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.model = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.model]
                  ]),
                  $data.newGrinderForm.errors.has("model") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("model"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                !$data.newProducerSwitch ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-3"
                }, [
                  createVNode("label", {
                    for: "grinderProducer",
                    class: "form-label"
                  }, "Grinder producer"),
                  createVNode(_component_v_select, {
                    modelValue: $data.newGrinderForm.producer_id,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.producer_id = $event,
                    options: $props.producers,
                    reduce: (producers) => producers.id,
                    label: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "reduce"]),
                  createVNode("a", {
                    href: "#",
                    onClick: ($event) => $data.newProducerSwitch = true
                  }, "Click here if the producer is not on the list.", 8, ["onClick"]),
                  $data.newGrinderForm.errors.has("producer_id") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("producer_id"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                $data.newProducerSwitch ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-3"
                }, [
                  createVNode("label", {
                    for: "exampleFormControlInput1",
                    class: "form-label"
                  }, "Producer name"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control",
                    id: "exampleFormControlInput1",
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.producer_name = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.producer_name]
                  ]),
                  createVNode("a", {
                    href: "#",
                    onClick: ($event) => $data.newProducerSwitch = false
                  }, "Go back to producers list.", 8, ["onClick"]),
                  $data.newGrinderForm.errors.has("producer_name") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("producer_name"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "veryFine",
                  class: "form-label"
                }, "Very fine setting (optional)"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: "1",
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.very_fine_min = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.very_fine_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.very_fine_min + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.very_fine_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.very_fine_max]
                  ]),
                  $data.newGrinderForm.errors.has("very_fine_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("very_fine_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.newGrinderForm.errors.has("very_fine_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("very_fine_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "fine",
                  class: "form-label"
                }, "Fine setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.very_fine_max + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.fine_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.fine_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.fine_min + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.fine_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.fine_max]
                  ]),
                  $data.newGrinderForm.errors.has("fine_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("fine_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.newGrinderForm.errors.has("fine_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("fine_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "medium",
                  class: "form-label"
                }, "Medium setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.fine_max + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.medium_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.medium_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.medium_min + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.medium_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.medium_max]
                  ]),
                  $data.newGrinderForm.errors.has("medium_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("medium_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.newGrinderForm.errors.has("medium_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("medium_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "mediumCoarse",
                  class: "form-label"
                }, "Medium coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.medium_max + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.medium_coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.medium_coarse_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.medium_coarse_min + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.medium_coarse_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.medium_coarse_max]
                  ]),
                  $data.newGrinderForm.errors.has("medium_coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("medium_coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.newGrinderForm.errors.has("medium_coarse_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("medium_coarse_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "coarse",
                  class: "form-label"
                }, "Coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.medium_coarse_max + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.coarse_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.coarse_min + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.coarse_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.coarse_max]
                  ]),
                  $data.newGrinderForm.errors.has("coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.newGrinderForm.errors.has("coarse_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("coarse_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "veryCoarse",
                  class: "form-label"
                }, "Very coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "from"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.newGrinderForm.coarse_max + 1,
                    "onUpdate:modelValue": ($event) => $data.newGrinderForm.very_coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.newGrinderForm.very_coarse_min]
                  ]),
                  $data.newGrinderForm.errors.has("very_coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.newGrinderForm.errors.get("very_coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "mb-3" }, [
              createVNode("label", {
                for: "exampleFormControlTextarea1",
                class: "form-label"
              }, "Notes (optional)"),
              withDirectives(createVNode("textarea", {
                class: "form-control",
                id: "exampleFormControlTextarea1",
                rows: "3",
                "onUpdate:modelValue": ($event) => $data.newGrinderForm.notes = $event
              }, "\n                    ", 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.newGrinderForm.notes]
              ])
            ]),
            createVNode("button", {
              onClick: withModifiers(($event) => $options.submitNewGrinder(), ["prevent"]),
              class: "btn btn-primary mx-2"
            }, " Submit ", 8, ["onClick"])
          ], 40, ["onSubmit", "onKeydown"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NewGrinderFormComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NewGrinderFormComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-3d867557"]]);
const GrinderEditFormComponent_vue_vue_type_style_index_0_scoped_c7c7cc3b_lang = "";
const _sfc_main$3 = {
  components: { vSelect, VueFinalModal, ModalsContainer },
  props: ["grinder", "producers"],
  data() {
    return {
      newProducerSwitch: false,
      updateGrinderForm: new Form({
        model: this.grinder.model,
        producer_id: this.grinder.grinder_producer_id,
        producer_name: null,
        very_fine_min: this.grinder.very_fine_min,
        very_fine_max: this.grinder.very_fine_max,
        fine_min: this.grinder.fine_min,
        fine_max: this.grinder.fine_max,
        medium_min: this.grinder.medium_min,
        medium_max: this.grinder.medium_max,
        medium_coarse_min: this.grinder.medium_coarse_min,
        medium_coarse_max: this.grinder.medium_coarse_max,
        coarse_min: this.grinder.coarse_min,
        coarse_max: this.grinder.coarse_max,
        very_coarse_min: this.grinder.very_coarse_min,
        notes: this.grinder.notes
      }),
      updateGrinderFormMessage: null
    };
  },
  mounted() {
  },
  created() {
  },
  computed: {},
  methods: {
    updateGrinder() {
      this.updateGrinderFormMessage = null;
      axios.put(
        "/grinders/" + this.grinder.id,
        {
          model: this.updateGrinderForm.model,
          grinder_producer_id: this.updateGrinderForm.producer_id,
          notes: this.updateGrinderForm.notes,
          very_fine_min: this.updateGrinderForm.very_fine_min,
          very_fine_max: this.updateGrinderForm.very_fine_max,
          fine_min: this.updateGrinderForm.fine_min,
          fine_max: this.updateGrinderForm.fine_max,
          medium_min: this.updateGrinderForm.medium_min,
          medium_max: this.updateGrinderForm.medium_max,
          medium_coarse_min: this.updateGrinderForm.medium_coarse_min,
          medium_coarse_max: this.updateGrinderForm.medium_coarse_max,
          coarse_min: this.updateGrinderForm.coarse_min,
          coarse_max: this.updateGrinderForm.coarse_max,
          very_coarse_min: this.updateGrinderForm.very_coarse_min
        }
      ).then((response) => {
        this.updateGrinderFormMessage = response.data.message;
        this.updateGrinderForm.reset();
      }).catch((error) => this.updateGrinderForm.errors.record(error.response.data));
    }
  },
  watch: {}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_final_modal = resolveComponent("vue-final-modal");
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_vue_final_modal, mergeProps({
    classes: "modal-container",
    "content-class": "modal-content"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="modal__title" data-v-c7c7cc3b${_scopeId}>Make changes to the grinder</span>`);
        if ($data.updateGrinderFormMessage) {
          _push2(`<span class="text-success" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderFormMessage)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form data-v-c7c7cc3b${_scopeId}><div class="row" data-v-c7c7cc3b${_scopeId}><div class="col-6" data-v-c7c7cc3b${_scopeId}><div class="mb-3" data-v-c7c7cc3b${_scopeId}><label for="exampleFormControlInput1" class="form-label" data-v-c7c7cc3b${_scopeId}>Grinder Model</label><input type="text" class="form-control" id="exampleFormControlInput1"${ssrRenderAttr("value", $data.updateGrinderForm.model)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("model")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("model"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-c7c7cc3b${_scopeId}><div class="mb-3" data-v-c7c7cc3b${_scopeId}><label for="grinderProducer" class="form-label" data-v-c7c7cc3b${_scopeId}>Grinder producer</label>`);
        _push2(ssrRenderComponent(_component_v_select, {
          modelValue: $data.updateGrinderForm.producer_id,
          "onUpdate:modelValue": ($event) => $data.updateGrinderForm.producer_id = $event,
          options: $props.producers,
          reduce: (producers) => producers.id,
          label: "name"
        }, null, _parent2, _scopeId));
        if ($data.updateGrinderForm.errors.has("producer_id")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("producer_id"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row" data-v-c7c7cc3b${_scopeId}><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="veryFine" class="form-label" data-v-c7c7cc3b${_scopeId}>Very fine setting (optional)</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><input type="number" class="form-control text-center w-25" min="1"${ssrRenderAttr("value", $data.updateGrinderForm.very_fine_min)} data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.very_fine_min + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.very_fine_max)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("very_fine_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("very_fine_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.updateGrinderForm.errors.has("very_fine_max")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("very_fine_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="fine" class="form-label" data-v-c7c7cc3b${_scopeId}>Fine setting</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.very_fine_max + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.fine_min)} data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.fine_min + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.fine_max)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("fine_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("fine_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.updateGrinderForm.errors.has("fine_max")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("fine_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row" data-v-c7c7cc3b${_scopeId}><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="medium" class="form-label" data-v-c7c7cc3b${_scopeId}>Medium setting</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.fine_max + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.medium_min)} data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.medium_min + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.medium_max)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("medium_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("medium_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.updateGrinderForm.errors.has("medium_max")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("medium_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="mediumCoarse" class="form-label" data-v-c7c7cc3b${_scopeId}>Medium coarse setting</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.medium_max + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.medium_coarse_min)} data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.medium_coarse_min + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.medium_coarse_max)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("medium_coarse_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("medium_coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.updateGrinderForm.errors.has("medium_coarse_max")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("medium_coarse_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row" data-v-c7c7cc3b${_scopeId}><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="coarse" class="form-label" data-v-c7c7cc3b${_scopeId}>Coarse setting</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.medium_coarse_max + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.coarse_min)} data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>to</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.coarse_min + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.coarse_max)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("coarse_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.updateGrinderForm.errors.has("coarse_max")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("coarse_max"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-6" data-v-c7c7cc3b${_scopeId}><label for="veryCoarse" class="form-label" data-v-c7c7cc3b${_scopeId}>Very coarse setting</label><div class="input-group mb-3" data-v-c7c7cc3b${_scopeId}><span class="input-group-text" data-v-c7c7cc3b${_scopeId}>from</span><input type="number" class="form-control text-center w-25"${ssrRenderAttr("min", $data.updateGrinderForm.coarse_max + 1)}${ssrRenderAttr("value", $data.updateGrinderForm.very_coarse_min)} data-v-c7c7cc3b${_scopeId}>`);
        if ($data.updateGrinderForm.errors.has("very_coarse_min")) {
          _push2(`<span class="text-danger" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.errors.get("very_coarse_min"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="mb-3" data-v-c7c7cc3b${_scopeId}><label for="exampleFormControlTextarea1" class="form-label" data-v-c7c7cc3b${_scopeId}>Notes (optional)</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" data-v-c7c7cc3b${_scopeId}>${ssrInterpolate($data.updateGrinderForm.notes)}</textarea></div><button class="btn btn-primary mx-2" data-v-c7c7cc3b${_scopeId}> Submit </button></form>`);
      } else {
        return [
          createVNode("span", { class: "modal__title" }, "Make changes to the grinder"),
          $data.updateGrinderFormMessage ? (openBlock(), createBlock("span", {
            key: 0,
            class: "text-success",
            textContent: toDisplayString($data.updateGrinderFormMessage)
          }, null, 8, ["textContent"])) : createCommentVNode("", true),
          createVNode("form", {
            onSubmit: $options.updateGrinder,
            onKeydown: ($event) => $data.updateGrinderForm.errors.clear($event.target.name)
          }, [
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("div", { class: "mb-3" }, [
                  createVNode("label", {
                    for: "exampleFormControlInput1",
                    class: "form-label"
                  }, "Grinder Model"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control",
                    id: "exampleFormControlInput1",
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.model = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.model]
                  ]),
                  $data.updateGrinderForm.errors.has("model") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("model"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("div", { class: "mb-3" }, [
                  createVNode("label", {
                    for: "grinderProducer",
                    class: "form-label"
                  }, "Grinder producer"),
                  createVNode(_component_v_select, {
                    modelValue: $data.updateGrinderForm.producer_id,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.producer_id = $event,
                    options: $props.producers,
                    reduce: (producers) => producers.id,
                    label: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "reduce"]),
                  $data.updateGrinderForm.errors.has("producer_id") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("producer_id"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "veryFine",
                  class: "form-label"
                }, "Very fine setting (optional)"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: "1",
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.very_fine_min = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.very_fine_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.very_fine_min + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.very_fine_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.very_fine_max]
                  ]),
                  $data.updateGrinderForm.errors.has("very_fine_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("very_fine_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.updateGrinderForm.errors.has("very_fine_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("very_fine_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "fine",
                  class: "form-label"
                }, "Fine setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.very_fine_max + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.fine_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.fine_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.fine_min + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.fine_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.fine_max]
                  ]),
                  $data.updateGrinderForm.errors.has("fine_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("fine_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.updateGrinderForm.errors.has("fine_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("fine_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "medium",
                  class: "form-label"
                }, "Medium setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.fine_max + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.medium_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.medium_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.medium_min + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.medium_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.medium_max]
                  ]),
                  $data.updateGrinderForm.errors.has("medium_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("medium_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.updateGrinderForm.errors.has("medium_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("medium_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "mediumCoarse",
                  class: "form-label"
                }, "Medium coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.medium_max + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.medium_coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.medium_coarse_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.medium_coarse_min + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.medium_coarse_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.medium_coarse_max]
                  ]),
                  $data.updateGrinderForm.errors.has("medium_coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("medium_coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.updateGrinderForm.errors.has("medium_coarse_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("medium_coarse_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "coarse",
                  class: "form-label"
                }, "Coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.medium_coarse_max + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.coarse_min]
                  ]),
                  createVNode("span", { class: "input-group-text" }, "to"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.coarse_min + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.coarse_max = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.coarse_max]
                  ]),
                  $data.updateGrinderForm.errors.has("coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true),
                  $data.updateGrinderForm.errors.has("coarse_max") ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("coarse_max"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-6" }, [
                createVNode("label", {
                  for: "veryCoarse",
                  class: "form-label"
                }, "Very coarse setting"),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "from"),
                  withDirectives(createVNode("input", {
                    type: "number",
                    class: "form-control text-center w-25",
                    min: $data.updateGrinderForm.coarse_max + 1,
                    "onUpdate:modelValue": ($event) => $data.updateGrinderForm.very_coarse_min = $event
                  }, null, 8, ["min", "onUpdate:modelValue"]), [
                    [vModelText, $data.updateGrinderForm.very_coarse_min]
                  ]),
                  $data.updateGrinderForm.errors.has("very_coarse_min") ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger",
                    textContent: toDisplayString($data.updateGrinderForm.errors.get("very_coarse_min"))
                  }, null, 8, ["textContent"])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createVNode("div", { class: "mb-3" }, [
              createVNode("label", {
                for: "exampleFormControlTextarea1",
                class: "form-label"
              }, "Notes (optional)"),
              withDirectives(createVNode("textarea", {
                class: "form-control",
                id: "exampleFormControlTextarea1",
                rows: "3",
                "onUpdate:modelValue": ($event) => $data.updateGrinderForm.notes = $event
              }, "\n                    ", 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.updateGrinderForm.notes]
              ])
            ]),
            createVNode("button", {
              onClick: withModifiers(($event) => $options.updateGrinder(), ["prevent"]),
              class: "btn btn-primary mx-2"
            }, " Submit ", 8, ["onClick"])
          ], 40, ["onSubmit", "onKeydown"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrinderEditFormComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GrinderEditFormComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c7c7cc3b"]]);
const _sfc_main$2 = {
  components: {},
  props: ["grinders", "grinder_link", "is_admin"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_table = resolveComponent("v-table");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "2" }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_table, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-left"${_scopeId2}> Grinder producer </th><th class="text-left"${_scopeId2}> Grinder model </th>`);
              if (this.is_admin) {
                _push3(`<th class="text-left"${_scopeId2}> Is verified </th>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<th class="text-left"${_scopeId2}> Details </th></tr></thead><tbody${_scopeId2}><!--[-->`);
              ssrRenderList($props.grinders, (grinder) => {
                _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(grinder.grinder_producer.name)}</td><td${_scopeId2}>${ssrInterpolate(grinder.model)}</td>`);
                if (this.is_admin) {
                  _push3(`<td${_scopeId2}>${ssrInterpolate(grinder.is_verified)}</td>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<td${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: this.grinder_link + "/" + grinder.id
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Details `);
                    } else {
                      return [
                        createTextVNode(" Details ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</td></tr>`);
              });
              _push3(`<!--]--></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, " Grinder producer "),
                    createVNode("th", { class: "text-left" }, " Grinder model "),
                    this.is_admin ? (openBlock(), createBlock("th", {
                      key: 0,
                      class: "text-left"
                    }, " Is verified ")) : createCommentVNode("", true),
                    createVNode("th", { class: "text-left" }, " Details ")
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                    return openBlock(), createBlock("tr", {
                      key: grinder.model
                    }, [
                      createVNode("td", null, toDisplayString(grinder.grinder_producer.name), 1),
                      createVNode("td", null, toDisplayString(grinder.model), 1),
                      this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                      createVNode("td", null, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounder: "lg",
                          href: this.grinder_link + "/" + grinder.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Details ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_table, null, {
            default: withCtx(() => [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Grinder producer "),
                  createVNode("th", { class: "text-left" }, " Grinder model "),
                  this.is_admin ? (openBlock(), createBlock("th", {
                    key: 0,
                    class: "text-left"
                  }, " Is verified ")) : createCommentVNode("", true),
                  createVNode("th", { class: "text-left" }, " Details ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.grinders, (grinder) => {
                  return openBlock(), createBlock("tr", {
                    key: grinder.model
                  }, [
                    createVNode("td", null, toDisplayString(grinder.grinder_producer.name), 1),
                    createVNode("td", null, toDisplayString(grinder.model), 1),
                    this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(grinder.is_verified), 1)) : createCommentVNode("", true),
                    createVNode("td", null, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounder: "lg",
                        href: this.grinder_link + "/" + grinder.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Details ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrindersDataTableComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GrindersDataTableComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {},
  props: ["producers", "producer_link", "is_admin"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_table = resolveComponent("v-table");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "2" }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_table, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-left"${_scopeId2}> Producer name </th>`);
              if (this.is_admin) {
                _push3(`<th class="text-left"${_scopeId2}> Is verified </th>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<th class="text-left"${_scopeId2}> Details </th></tr></thead><tbody${_scopeId2}><!--[-->`);
              ssrRenderList($props.producers, (producer) => {
                _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(producer.name)}</td>`);
                if (this.is_admin) {
                  _push3(`<td${_scopeId2}>${ssrInterpolate(producer.is_verified)}</td>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<td${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: this.producer_link + "/" + producer.id
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Details `);
                    } else {
                      return [
                        createTextVNode(" Details ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</td></tr>`);
              });
              _push3(`<!--]--></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, " Producer name "),
                    this.is_admin ? (openBlock(), createBlock("th", {
                      key: 0,
                      class: "text-left"
                    }, " Is verified ")) : createCommentVNode("", true),
                    createVNode("th", { class: "text-left" }, " Details ")
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList($props.producers, (producer) => {
                    return openBlock(), createBlock("tr", {
                      key: producer.name
                    }, [
                      createVNode("td", null, toDisplayString(producer.name), 1),
                      this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(producer.is_verified), 1)) : createCommentVNode("", true),
                      createVNode("td", null, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounder: "lg",
                          href: this.producer_link + "/" + producer.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Details ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_table, null, {
            default: withCtx(() => [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Producer name "),
                  this.is_admin ? (openBlock(), createBlock("th", {
                    key: 0,
                    class: "text-left"
                  }, " Is verified ")) : createCommentVNode("", true),
                  createVNode("th", { class: "text-left" }, " Details ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.producers, (producer) => {
                  return openBlock(), createBlock("tr", {
                    key: producer.name
                  }, [
                    createVNode("td", null, toDisplayString(producer.name), 1),
                    this.is_admin ? (openBlock(), createBlock("td", { key: 0 }, toDisplayString(producer.is_verified), 1)) : createCommentVNode("", true),
                    createVNode("td", null, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounder: "lg",
                        href: this.producer_link + "/" + producer.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Details ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProducersDataTableComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProducersDataTableComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {},
  props: ["reports", "report_link"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_table = resolveComponent("v-table");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "2" }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_table, null, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-left"${_scopeId2}> Grinder name </th><th class="text-left"${_scopeId2}> Submission date </th><th class="text-left"${_scopeId2}> Details </th></tr></thead><tbody${_scopeId2}><!--[-->`);
              ssrRenderList($props.reports, (report) => {
                _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(report.grinder.model)}</td><td${_scopeId2}>${ssrInterpolate(report.created_at)}</td><td${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_btn, {
                  color: "primary",
                  rounder: "lg",
                  href: this.report_link + "/" + report.id
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Details `);
                    } else {
                      return [
                        createTextVNode(" Details ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</td></tr>`);
              });
              _push3(`<!--]--></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, " Grinder name "),
                    createVNode("th", { class: "text-left" }, " Submission date "),
                    createVNode("th", { class: "text-left" }, " Details ")
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList($props.reports, (report) => {
                    return openBlock(), createBlock("tr", {
                      key: report.id
                    }, [
                      createVNode("td", null, toDisplayString(report.grinder.model), 1),
                      createVNode("td", null, toDisplayString(report.created_at), 1),
                      createVNode("td", null, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounder: "lg",
                          href: this.report_link + "/" + report.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Details ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_table, null, {
            default: withCtx(() => [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Grinder name "),
                  createVNode("th", { class: "text-left" }, " Submission date "),
                  createVNode("th", { class: "text-left" }, " Details ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.reports, (report) => {
                  return openBlock(), createBlock("tr", {
                    key: report.id
                  }, [
                    createVNode("td", null, toDisplayString(report.grinder.model), 1),
                    createVNode("td", null, toDisplayString(report.created_at), 1),
                    createVNode("td", null, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounder: "lg",
                        href: this.report_link + "/" + report.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Details ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/GrinderReportsDataTableComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GrinderReportsDataTableComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const materialdesignicons = "";
const main = "";
window.Form = Form$1;
const vuetify = createVuetify({
  components,
  directives
});
const app = createApp({});
app.component("grind-size-component", GrindSizeComponent);
app.component("grinder-details-component", GrinderDetailsComponent);
app.component("producer-details-component", ProducerDetailsComponent);
app.component("grinder-report-details-component", GrinderReportDetailsComponent);
app.component("grinder-report-form-component", GrinderReportFormComponent);
app.component("new-grinder-form-component", NewGrinderFormComponent);
app.component("grinder-edit-form-component", GrinderEditFormComponent);
app.component("grinders-data-table-component", GrindersDataTableComponent);
app.component("producers-data-table-component", ProducersDataTableComponent);
app.component("grinder-reports-data-table-component", GrinderReportsDataTableComponent);
app.use(vuetify).mount("#app");
