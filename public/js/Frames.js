"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Frames"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Frames",
  data: function data() {
    return {
      validationErrors: [],
      showFrameModal: false,
      src_url: "",
      showLoginModalStatus: false,
      showRegisterModalStatus: false,
      showEditFrameModalStatus: false,
      showEditFrameNotAuthModalStatus: false,
      user_details: {},
      frame_details: {},
      editframe_details: {}
    };
  },
  computed: {
    checkLogin: function checkLogin() {
      return this.$store.state.auth.islogin;
    },
    getFrameList: function getFrameList() {
      return this.$store.state.frame.framelist;
    },
    getCountries: function getCountries() {
      return this.$store.state.auth.countries;
    },
    getGenderOptions: function getGenderOptions() {
      return this.$store.state.auth.gender_options;
    }
  },
  mounted: function mounted() {
    console.log('Frame component mounted.');
    this.$store.dispatch("auth/check_user_login");
    this.$store.dispatch("frame/get_frame_list");
  },
  methods: {
    showFrameDetails: function showFrameDetails(id) {
      var _this = this;

      this.$store.dispatch("frame/get_single_frame", id).then(function (response) {
        if (response.data.success == true) {
          if (response.data.data != "") {
            _this.frame_details = response.data.data[0];
            _this.src_url = response.data.data[0].file;
            _this.showFrameModal = true;
          }
        }
      });
    },
    resetFrameModal: function resetFrameModal() {
      this.showFrameModal = false;
      this.src_url = ''; //this.frame_details = {};
    },
    logout: function logout() {
      this.$store.dispatch('auth/user_logout').then(function (response) {
        if (response.data.success == true) {
          localStorage.removeItem('userdetails');
        }
      });
    },
    showLoginModal: function showLoginModal() {
      this.user_details = {};
      this.showLoginModalStatus = true;
    },
    loginProcess: function loginProcess() {
      var _this2 = this;

      this.$store.dispatch('auth/user_login', this.user_details).then(function (response) {
        _this2.validationErrors = [];

        if (response.data.success == true) {
          var userdetails = JSON.stringify({
            islogin: true,
            login_user_token: response.data.data.token
          });
          localStorage.setItem('userdetails', userdetails);
          _this2.user_details = {};

          _this2.hideLoginModal();

          _this2.$store.dispatch('auth/check_user_login');
        } else if (response.data.success == false) {
          if (response.data != "" && response.data.errors != "") {
            _this2.validationErrors = response.data.errors;
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    hideLoginModal: function hideLoginModal() {
      this.user_details = {};
      this.showLoginModalStatus = false;
    },
    showRegistrationModal: function showRegistrationModal() {
      this.user_details = {};
      this.showRegisterModalStatus = true;
    },
    registrationProcess: function registrationProcess() {
      var _this3 = this;

      this.$store.dispatch('auth/user_register', this.user_details).then(function (response) {
        _this3.validationErrors = [];

        if (response.data.success == true) {
          var userdetails = JSON.stringify({
            islogin: true,
            login_user_token: response.data.data.token
          });
          localStorage.setItem('userdetails', userdetails);
          _this3.user_details = {};

          _this3.hideRegisterModal();

          _this3.$store.dispatch('auth/check_user_login');
        } else if (response.data.success == false) {
          if (response.data != "" && response.data.errors != "") {
            _this3.validationErrors = response.data.errors;
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    hideRegisterModal: function hideRegisterModal() {
      this.user_details = {};
      this.showRegisterModalStatus = false;
    },
    showEditFrameModal: function showEditFrameModal(id) {
      var _this4 = this;

      if (this.checkLogin == false) {
        this.showEditFrameNotAuthModalStatus = true;
        setTimeout(function () {
          this.showEditFrameNotAuthModalStatus = false;
        }.bind(this), 5000);
      } else if (this.checkLogin == true) {
        this.$store.dispatch("frame/get_single_frame", id).then(function (response) {
          if (response.data.success == true) {
            _this4.editframe_details = {
              'id': response.data.data[0].id,
              'title': response.data.data[0].title,
              'description': response.data.data[0].description
            };
            _this4.showEditFrameModalStatus = true;
          }
        });
      }
    },
    editFrameProcess: function editFrameProcess() {
      var _this5 = this;

      var form = new FormData();
      form.append('id', this.editframe_details.id);
      form.append('title', this.editframe_details.title);
      form.append('description', this.editframe_details.description);
      form.append('file', this.editframe_details.file);
      form.append('icon', this.editframe_details.icon);
      this.$store.dispatch("frame/update_single_frame", form).then(function (response) {
        _this5.validationErrors = [];

        if (response.data.success == true) {
          _this5.editframe_details = {};
          _this5.showEditFrameModalStatus = false;
        } else if (response.data.success == false) {
          if (response.data != "" && response.data.errors != "") {
            _this5.validationErrors = response.data.errors;
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    uploadFile: function uploadFile(event) {
      var file = event.target.files[0];
      this.editframe_details.file = file;
    },
    uploadIcon: function uploadIcon(event) {
      var icon = event.target.files[0];
      this.editframe_details.icon = icon;
    },
    resetEditFrameModal: function resetEditFrameModal() {
      this.editframe_details = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#frames{\n    background: red;\n    background: url('/images/wall.jpg') no-repeat;\n    background-position: center;\n}\n.frame-wrapper{\n    /*background: red;*/\n    /*background: url('/images/bg.jpg') no-repeat;*/\n    /*background-position: center;*/\n    min-height: 800px;\n}\n.frame{\n    border: 1px solid;\n    height: 200px;\n    margin: 10px;\n    background: url('/images/image_150_150.jpg') no-repeat;\n    background-position: center;\n}\n#frame_detail_modal .modal-body {\n    text-align: center;\n}\n#frame_detail_modal .modal-body > iframe > img {\n    text-align: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frames.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Frames.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Frames.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frames.vue?vue&type=template&id=b12f08f6& */ "./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6&");
/* harmony import */ var _Frames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frames.vue?vue&type=script&lang=js& */ "./resources/js/views/Frames.vue?vue&type=script&lang=js&");
/* harmony import */ var _Frames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Frames.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Frames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Frames.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Frames.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Frames.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frames.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frames.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frames_vue_vue_type_template_id_b12f08f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frames.vue?vue&type=template&id=b12f08f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frames.vue?vue&type=template&id=b12f08f6& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "frames" } },
    [
      _c(
        "b-container",
        { staticClass: "frame-wrapper" },
        [
          _vm.checkLogin == false
            ? _c(
                "b-row",
                [
                  _c("b-col", { attrs: { md: "2", offset: "9" } }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: { click: _vm.showLoginModal }
                      },
                      [_vm._v("Login")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: { click: _vm.showRegistrationModal }
                      },
                      [_vm._v("Register")]
                    )
                  ])
                ],
                1
              )
            : _vm.checkLogin == true
            ? _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "2", offset: "10" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "success" },
                          on: {
                            click: function($event) {
                              return _vm.logout()
                            }
                          }
                        },
                        [_vm._v("Logout")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-row",
            _vm._l(this.getFrameList, function(item, index) {
              return _c("b-col", {
                key: index,
                staticClass: "frame",
                attrs: { md: "2" },
                on: {
                  click: function($event) {
                    return _vm.showFrameDetails(item.id)
                  }
                }
              })
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "frame_detail_modal",
            "no-close-on-backdrop": "",
            size: "lg",
            "hide-footer": !_vm.checkLogin,
            "ok-only": "",
            "ok-variant": "primary",
            "ok-title": "Edit",
            centered: "",
            title: "Frame"
          },
          on: {
            ok: function($event) {
              return _vm.showEditFrameModal(_vm.frame_details.id)
            },
            hidden: _vm.resetFrameModal
          },
          model: {
            value: _vm.showFrameModal,
            callback: function($$v) {
              _vm.showFrameModal = $$v
            },
            expression: "showFrameModal"
          }
        },
        [
          _vm.src_url != ""
            ? _c("iframe", {
                attrs: { width: "700", height: "315", src: _vm.src_url }
              })
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "edit_frame_modal",
            "no-close-on-backdrop": "",
            size: "lg",
            "hide-footer": "",
            centered: "",
            title: "Edit Frame"
          },
          on: { hidden: _vm.resetEditFrameModal },
          model: {
            value: _vm.showEditFrameModalStatus,
            callback: function($$v) {
              _vm.showEditFrameModalStatus = $$v
            },
            expression: "showEditFrameModalStatus"
          }
        },
        [
          _c(
            "b-form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editFrameProcess($event)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "frame-title-group",
                    label: "Title:",
                    "label-for": "frame-title"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "frame-title",
                      type: "text",
                      placeholder: "Enter Title"
                    },
                    model: {
                      value: _vm.editframe_details.title,
                      callback: function($$v) {
                        _vm.$set(_vm.editframe_details, "title", $$v)
                      },
                      expression: "editframe_details.title"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.title
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.title[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "frame-file-group",
                    label: "File:",
                    "label-for": "frame-file"
                  }
                },
                [
                  _c("b-form-file", {
                    attrs: { placeholder: "Choose a file or drop it here..." },
                    on: { change: _vm.uploadFile }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.file
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.file[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "frame-icon-group",
                    label: "Icon:",
                    "label-for": "frame-icon"
                  }
                },
                [
                  _c("b-form-file", {
                    attrs: { placeholder: "Choose a file or drop it here..." },
                    on: { change: _vm.uploadIcon }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.icon
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.icon[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "frame-description-group",
                    label: "Description:",
                    "label-for": "frame-description"
                  }
                },
                [
                  _c("b-form-textarea", {
                    attrs: {
                      id: "frame-description",
                      placeholder: "Enter something...",
                      rows: "3",
                      "max-rows": "6"
                    },
                    model: {
                      value: _vm.editframe_details.description,
                      callback: function($$v) {
                        _vm.$set(_vm.editframe_details, "description", $$v)
                      },
                      expression: "editframe_details.description"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.description
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.description[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Update")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "edit_frame_modal_not_auth",
            "no-close-on-backdrop": "",
            size: "lg",
            "hide-footer": "",
            centered: "",
            title: "Not Login"
          },
          model: {
            value: _vm.showEditFrameNotAuthModalStatus,
            callback: function($$v) {
              _vm.showEditFrameNotAuthModalStatus = $$v
            },
            expression: "showEditFrameNotAuthModalStatus"
          }
        },
        [_c("h1", [_vm._v("Please login to edit this details")])]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "login_modal",
            "no-close-on-backdrop": "",
            size: "lg",
            "hide-footer": "",
            centered: "",
            title: "Login"
          },
          on: { hidden: _vm.hideLoginModal },
          model: {
            value: _vm.showLoginModalStatus,
            callback: function($$v) {
              _vm.showLoginModalStatus = $$v
            },
            expression: "showLoginModalStatus"
          }
        },
        [
          _c(
            "b-form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.loginProcess($event)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "email-group",
                    label: "Email address:",
                    "label-for": "email"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "email",
                      type: "email",
                      placeholder: "Enter email",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.email,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "email", $$v)
                      },
                      expression: "user_details.email"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.email
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.email[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "password-group",
                    label: "Password:",
                    "label-for": "password"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "password",
                      type: "password",
                      placeholder: "Enter password",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.password,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "password", $$v)
                      },
                      expression: "user_details.password"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.password
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.password[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Submit")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "registration_modal",
            "no-close-on-backdrop": "",
            size: "lg",
            "hide-footer": "",
            centered: "",
            title: "Registration"
          },
          on: { hidden: _vm.hideRegisterModal },
          model: {
            value: _vm.showRegisterModalStatus,
            callback: function($$v) {
              _vm.showRegisterModalStatus = $$v
            },
            expression: "showRegisterModalStatus"
          }
        },
        [
          _c(
            "b-form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.registrationProcess($event)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "first-name-group",
                    label: "First Name:",
                    "label-for": "first_name"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "first_name",
                      type: "text",
                      placeholder: "Enter First Name",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.first_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "first_name", $$v)
                      },
                      expression: "user_details.first_name"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.first_name
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.first_name[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "last-name-group",
                    label: "Last Name:",
                    "label-for": "last_name"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "last_name",
                      type: "text",
                      placeholder: "Enter Last Name",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "last_name", $$v)
                      },
                      expression: "user_details.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.last_name
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.last_name[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "email-group",
                    label: "Email address:",
                    "label-for": "email"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "email",
                      type: "text",
                      placeholder: "Enter Email",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.email,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "email", $$v)
                      },
                      expression: "user_details.email"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.email
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.email[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { attrs: { id: "gender-group", label: "Gender" } },
                [
                  _c("b-form-radio-group", {
                    attrs: { required: "", options: _vm.getGenderOptions },
                    model: {
                      value: _vm.user_details.gender,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "gender", $$v)
                      },
                      expression: "user_details.gender"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.gender
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.gender[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { attrs: { id: "country-group", label: "Country" } },
                [
                  _c("b-form-select", {
                    attrs: { required: "", options: _vm.getCountries },
                    model: {
                      value: _vm.user_details.country_code,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "country_code", $$v)
                      },
                      expression: "user_details.country_code"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.country_code
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.country_code[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "password-group",
                    label: "Password:",
                    "label-for": "password"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "password",
                      type: "password",
                      placeholder: "Enter Password",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.password,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "password", $$v)
                      },
                      expression: "user_details.password"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.password
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.password[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "confirm-password-group",
                    label: "Confirm Password:",
                    "label-for": "confirm_password"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "confirm_password",
                      type: "password",
                      placeholder: "Enter Confirm Password",
                      required: ""
                    },
                    model: {
                      value: _vm.user_details.c_password,
                      callback: function($$v) {
                        _vm.$set(_vm.user_details, "c_password", $$v)
                      },
                      expression: "user_details.c_password"
                    }
                  }),
                  _vm._v(" "),
                  _vm.validationErrors.c_password
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.validationErrors.c_password[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Submit")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);