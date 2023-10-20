"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  data: function data() {
    return {
      validationErrors: [],
      showAlert: false,
      alertMessage: "",
      user_details: {
        first_name: "demo",
        last_name: "test",
        email: "demo@test.com",
        gender: "male",
        country_code: "IN",
        password: "demo@123",
        c_password: "demo@123"
      },
      gender_options: [{
        text: 'Male',
        value: 'male'
      }, {
        text: 'Female',
        value: 'female'
      }],
      countries: [{
        value: 'AF',
        text: 'Afghanistan'
      }, {
        value: 'AX',
        text: 'Aland Islands'
      }, {
        value: 'AL',
        text: 'Albania'
      }, {
        value: 'DZ',
        text: 'Algeria'
      }, {
        value: 'AS',
        text: 'American Samoa'
      }, {
        value: 'AD',
        text: 'Andorra'
      }, {
        value: 'AO',
        text: 'Angola'
      }, {
        value: 'AI',
        text: 'Anguilla'
      }, {
        value: 'AQ',
        text: 'Antarctica'
      }, {
        value: 'AG',
        text: 'Antigua and Barbuda'
      }, {
        value: 'AR',
        text: 'Argentina'
      }, {
        value: 'AM',
        text: 'Armenia'
      }, {
        value: 'AW',
        text: 'Aruba'
      }, {
        value: 'AU',
        text: 'Australia'
      }, {
        value: 'AT',
        text: 'Austria'
      }, {
        value: 'AZ',
        text: 'Azerbaijan'
      }, {
        value: 'BS',
        text: 'Bahamas'
      }, {
        value: 'BH',
        text: 'Bahrain'
      }, {
        value: 'BD',
        text: 'Bangladesh'
      }, {
        value: 'BB',
        text: 'Barbados'
      }, {
        value: 'BY',
        text: 'Belarus'
      }, {
        value: 'BE',
        text: 'Belgium'
      }, {
        value: 'BZ',
        text: 'Belize'
      }, {
        value: 'BJ',
        text: 'Benin'
      }, {
        value: 'BM',
        text: 'Bermuda'
      }, {
        value: 'BT',
        text: 'Bhutan'
      }, {
        value: 'BO',
        text: 'Bolivia'
      }, {
        value: 'BQ',
        text: 'Bonaire, Sint Eustatius and Saba'
      }, {
        value: 'BA',
        text: 'Bosnia and Herzegovina'
      }, {
        value: 'BW',
        text: 'Botswana'
      }, {
        value: 'BV',
        text: 'Bouvet Island'
      }, {
        value: 'BR',
        text: 'Brazil'
      }, {
        value: 'IO',
        text: 'British Indian Ocean Territory'
      }, {
        value: 'BN',
        text: 'Brunei Darussalam'
      }, {
        value: 'BG',
        text: 'Bulgaria'
      }, {
        value: 'BF',
        text: 'Burkina Faso'
      }, {
        value: 'BI',
        text: 'Burundi'
      }, {
        value: 'KH',
        text: 'Cambodia'
      }, {
        value: 'CM',
        text: 'Cameroon'
      }, {
        value: 'CA',
        text: 'Canada'
      }, {
        value: 'CV',
        text: 'Cape Verde'
      }, {
        value: 'KY',
        text: 'Cayman Islands'
      }, {
        value: 'CF',
        text: 'Central African Republic'
      }, {
        value: 'TD',
        text: 'Chad'
      }, {
        value: 'CL',
        text: 'Chile'
      }, {
        value: 'CN',
        text: 'China'
      }, {
        value: 'CX',
        text: 'Christmas Island'
      }, {
        value: 'CC',
        text: 'Cocos (Keeling) Islands'
      }, {
        value: 'CO',
        text: 'Colombia'
      }, {
        value: 'KM',
        text: 'Comoros'
      }, {
        value: 'CG',
        text: 'Congo'
      }, {
        value: 'CD',
        text: 'Congo, Democratic Republic'
      }, {
        value: 'CK',
        text: 'Cook Islands'
      }, {
        value: 'CR',
        text: 'Costa Rica'
      }, {
        value: 'CI',
        text: 'Cote D\'Ivoire'
      }, {
        value: 'HR',
        text: 'Croatia'
      }, {
        value: 'CU',
        text: 'Cuba'
      }, {
        value: 'CW',
        text: 'Curaçao'
      }, {
        value: 'CY',
        text: 'Cyprus'
      }, {
        value: 'CZ',
        text: 'Czech Republic'
      }, {
        value: 'DK',
        text: 'Denmark'
      }, {
        value: 'DJ',
        text: 'Djibouti'
      }, {
        value: 'DM',
        text: 'Dominica'
      }, {
        value: 'DO',
        text: 'Dominican Republic'
      }, {
        value: 'EC',
        text: 'Ecuador'
      }, {
        value: 'EG',
        text: 'Egypt'
      }, {
        value: 'SV',
        text: 'El Salvador'
      }, {
        value: 'GQ',
        text: 'Equatorial Guinea'
      }, {
        value: 'ER',
        text: 'Eritrea'
      }, {
        value: 'EE',
        text: 'Estonia'
      }, {
        value: 'ET',
        text: 'Ethiopia'
      }, {
        value: 'FK',
        text: 'Falkland Islands (Malvinas)'
      }, {
        value: 'FO',
        text: 'Faroe Islands'
      }, {
        value: 'FJ',
        text: 'Fiji'
      }, {
        value: 'FI',
        text: 'Finland'
      }, {
        value: 'FR',
        text: 'France'
      }, {
        value: 'GF',
        text: 'French Guiana'
      }, {
        value: 'PF',
        text: 'French Polynesia'
      }, {
        value: 'TF',
        text: 'French Southern Territories'
      }, {
        value: 'GA',
        text: 'Gabon'
      }, {
        value: 'GM',
        text: 'Gambia'
      }, {
        value: 'GE',
        text: 'Georgia'
      }, {
        value: 'DE',
        text: 'Germany'
      }, {
        value: 'GH',
        text: 'Ghana'
      }, {
        value: 'GI',
        text: 'Gibraltar'
      }, {
        value: 'GR',
        text: 'Greece'
      }, {
        value: 'GL',
        text: 'Greenland'
      }, {
        value: 'GD',
        text: 'Grenada'
      }, {
        value: 'GP',
        text: 'Guadeloupe'
      }, {
        value: 'GU',
        text: 'Guam'
      }, {
        value: 'GT',
        text: 'Guatemala'
      }, {
        value: 'GG',
        text: 'Guernsey'
      }, {
        value: 'GN',
        text: 'Guinea'
      }, {
        value: 'GW',
        text: 'Guinea-Bissau'
      }, {
        value: 'GY',
        text: 'Guyana'
      }, {
        value: 'HT',
        text: 'Haiti'
      }, {
        value: 'HM',
        text: 'Heard Island and Mcdonald Islands'
      }, {
        value: 'VA',
        text: 'Holy See (Vatican City State)'
      }, {
        value: 'HN',
        text: 'Honduras'
      }, {
        value: 'HK',
        text: 'Hong Kong'
      }, {
        value: 'HU',
        text: 'Hungary'
      }, {
        value: 'IS',
        text: 'Iceland'
      }, {
        value: 'IN',
        text: 'India'
      }, {
        value: 'ID',
        text: 'Indonesia'
      }, {
        value: 'IR',
        text: 'Iran, Islamic Republic Of'
      }, {
        value: 'IQ',
        text: 'Iraq'
      }, {
        value: 'IE',
        text: 'Ireland'
      }, {
        value: 'IM',
        text: 'Isle Of Man'
      }, {
        value: 'IL',
        text: 'Israel'
      }, {
        value: 'IT',
        text: 'Italy'
      }, {
        value: 'JM',
        text: 'Jamaica'
      }, {
        value: 'JP',
        text: 'Japan'
      }, {
        value: 'JE',
        text: 'Jersey'
      }, {
        value: 'JO',
        text: 'Jordan'
      }, {
        value: 'KZ',
        text: 'Kazakhstan'
      }, {
        value: 'KE',
        text: 'Kenya'
      }, {
        value: 'KI',
        text: 'Kiribati'
      }, {
        value: 'KP',
        text: 'Korea, Democratic People\'s Republic Of'
      }, {
        value: 'KR',
        text: 'Korea'
      }, {
        value: 'XK',
        text: 'Kosovo'
      }, {
        value: 'KW',
        text: 'Kuwait'
      }, {
        value: 'KG',
        text: 'Kyrgyzstan'
      }, {
        value: 'LA',
        text: 'Lao People\'s Democratic Republic'
      }, {
        value: 'LV',
        text: 'Latvia'
      }, {
        value: 'LB',
        text: 'Lebanon'
      }, {
        value: 'LS',
        text: 'Lesotho'
      }, {
        value: 'LR',
        text: 'Liberia'
      }, {
        value: 'LY',
        text: 'Libya'
      }, {
        value: 'LI',
        text: 'Liechtenstein'
      }, {
        value: 'LT',
        text: 'Lithuania'
      }, {
        value: 'LU',
        text: 'Luxembourg'
      }, {
        value: 'MO',
        text: 'Macao'
      }, {
        value: 'MK',
        text: 'Macedonia'
      }, {
        value: 'MG',
        text: 'Madagascar'
      }, {
        value: 'MW',
        text: 'Malawi'
      }, {
        value: 'MY',
        text: 'Malaysia'
      }, {
        value: 'MV',
        text: 'Maldives'
      }, {
        value: 'ML',
        text: 'Mali'
      }, {
        value: 'MT',
        text: 'Malta'
      }, {
        value: 'MH',
        text: 'Marshall Islands'
      }, {
        value: 'MQ',
        text: 'Martinique'
      }, {
        value: 'MR',
        text: 'Mauritania'
      }, {
        value: 'MU',
        text: 'Mauritius'
      }, {
        value: 'YT',
        text: 'Mayotte'
      }, {
        value: 'MX',
        text: 'Mexico'
      }, {
        value: 'FM',
        text: 'Micronesia, Federated States Of'
      }, {
        value: 'MD',
        text: 'Moldova'
      }, {
        value: 'MC',
        text: 'Monaco'
      }, {
        value: 'MN',
        text: 'Mongolia'
      }, {
        value: 'ME',
        text: 'Montenegro'
      }, {
        value: 'MS',
        text: 'Montserrat'
      }, {
        value: 'MA',
        text: 'Morocco'
      }, {
        value: 'MZ',
        text: 'Mozambique'
      }, {
        value: 'MM',
        text: 'Myanmar'
      }, {
        value: 'NA',
        text: 'Namibia'
      }, {
        value: 'NR',
        text: 'Nauru'
      }, {
        value: 'NP',
        text: 'Nepal'
      }, {
        value: 'NL',
        text: 'Netherlands'
      }, {
        value: 'NC',
        text: 'New Caledonia'
      }, {
        value: 'NZ',
        text: 'New Zealand'
      }, {
        value: 'NI',
        text: 'Nicaragua'
      }, {
        value: 'NE',
        text: 'Niger'
      }, {
        value: 'NG',
        text: 'Nigeria'
      }, {
        value: 'NU',
        text: 'Niue'
      }, {
        value: 'NF',
        text: 'Norfolk Island'
      }, {
        value: 'MP',
        text: 'Northern Mariana Islands'
      }, {
        value: 'NO',
        text: 'Norway'
      }, {
        value: 'OM',
        text: 'Oman'
      }, {
        value: 'PK',
        text: 'Pakistan'
      }, {
        value: 'PW',
        text: 'Palau'
      }, {
        value: 'PS',
        text: 'Palestinian Territory, Occupied'
      }, {
        value: 'PA',
        text: 'Panama'
      }, {
        value: 'PG',
        text: 'Papua New Guinea'
      }, {
        value: 'PY',
        text: 'Paraguay'
      }, {
        value: 'PE',
        text: 'Peru'
      }, {
        value: 'PH',
        text: 'Philippines'
      }, {
        value: 'PN',
        text: 'Pitcairn'
      }, {
        value: 'PL',
        text: 'Poland'
      }, {
        value: 'PT',
        text: 'Portugal'
      }, {
        value: 'PR',
        text: 'Puerto Rico'
      }, {
        value: 'QA',
        text: 'Qatar'
      }, {
        value: 'RE',
        text: 'Reunion'
      }, {
        value: 'RO',
        text: 'Romania'
      }, {
        value: 'RU',
        text: 'Russian Federation'
      }, {
        value: 'RW',
        text: 'Rwanda'
      }, {
        value: 'BL',
        text: 'Saint Barthelemy'
      }, {
        value: 'SH',
        text: 'Saint Helena'
      }, {
        value: 'KN',
        text: 'Saint Kitts and Nevis'
      }, {
        value: 'LC',
        text: 'Saint Lucia'
      }, {
        value: 'MF',
        text: 'Saint Martin'
      }, {
        value: 'PM',
        text: 'Saint Pierre and Miquelon'
      }, {
        value: 'VC',
        text: 'Saint Vincent and Grenadines'
      }, {
        value: 'WS',
        text: 'Samoa'
      }, {
        value: 'SM',
        text: 'San Marino'
      }, {
        value: 'ST',
        text: 'Sao Tome and Principe'
      }, {
        value: 'SA',
        text: 'Saudi Arabia'
      }, {
        value: 'SN',
        text: 'Senegal'
      }, {
        value: 'RS',
        text: 'Serbia'
      }, {
        value: 'SC',
        text: 'Seychelles'
      }, {
        value: 'SL',
        text: 'Sierra Leone'
      }, {
        value: 'SG',
        text: 'Singapore'
      }, {
        value: 'SX',
        text: 'Sint Maarten (Dutch part)'
      }, {
        value: 'SK',
        text: 'Slovakia'
      }, {
        value: 'SI',
        text: 'Slovenia'
      }, {
        value: 'SB',
        text: 'Solomon Islands'
      }, {
        value: 'SO',
        text: 'Somalia'
      }, {
        value: 'ZA',
        text: 'South Africa'
      }, {
        value: 'GS',
        text: 'South Georgia and Sandwich Isl.'
      }, {
        value: 'SS',
        text: 'South Sudan'
      }, {
        value: 'ES',
        text: 'Spain'
      }, {
        value: 'LK',
        text: 'Sri Lanka'
      }, {
        value: 'SD',
        text: 'Sudan'
      }, {
        value: 'SR',
        text: 'Suriname'
      }, {
        value: 'SJ',
        text: 'Svalbard and Jan Mayen'
      }, {
        value: 'SZ',
        text: 'Swaziland'
      }, {
        value: 'SE',
        text: 'Sweden'
      }, {
        value: 'CH',
        text: 'Switzerland'
      }, {
        value: 'SY',
        text: 'Syrian Arab Republic'
      }, {
        value: 'TW',
        text: 'Taiwan'
      }, {
        value: 'TJ',
        text: 'Tajikistan'
      }, {
        value: 'TZ',
        text: 'Tanzania'
      }, {
        value: 'TH',
        text: 'Thailand'
      }, {
        value: 'TL',
        text: 'Timor-Leste'
      }, {
        value: 'TG',
        text: 'Togo'
      }, {
        value: 'TK',
        text: 'Tokelau'
      }, {
        value: 'TO',
        text: 'Tonga'
      }, {
        value: 'TT',
        text: 'Trinidad and Tobago'
      }, {
        value: 'TN',
        text: 'Tunisia'
      }, {
        value: 'TR',
        text: 'Turkey'
      }, {
        value: 'TM',
        text: 'Turkmenistan'
      }, {
        value: 'TC',
        text: 'Turks and Caicos Islands'
      }, {
        value: 'TV',
        text: 'Tuvalu'
      }, {
        value: 'UG',
        text: 'Uganda'
      }, {
        value: 'UA',
        text: 'Ukraine'
      }, {
        value: 'AE',
        text: 'United Arab Emirates'
      }, {
        value: 'GB',
        text: 'United Kingdom'
      }, {
        value: 'US',
        text: 'United States'
      }, {
        value: 'UM',
        text: 'United States Outlying Islands'
      }, {
        value: 'UY',
        text: 'Uruguay'
      }, {
        value: 'UZ',
        text: 'Uzbekistan'
      }, {
        value: 'VU',
        text: 'Vanuatu'
      }, {
        value: 'VE',
        text: 'Venezuela'
      }, {
        value: 'VN',
        text: 'Vietnam'
      }, {
        value: 'VG',
        text: 'Virgin Islands, British'
      }, {
        value: 'VI',
        text: 'Virgin Islands, U.S.'
      }, {
        value: 'WF',
        text: 'Wallis and Futuna'
      }, {
        value: 'EH',
        text: 'Western Sahara'
      }, {
        value: 'YE',
        text: 'Yemen'
      }, {
        value: 'ZM',
        text: 'Zambia'
      }, {
        value: 'ZW',
        text: 'Zimbabwe'
      }]
    };
  },
  mounted: function mounted() {
    console.log('register component mounted.');
  },
  methods: {
    registrationProcess: function registrationProcess() {
      var _this = this;

      this.$store.dispatch('auth/user_register', this.user_details).then(function (response) {
        _this.validationErrors = [];

        if (response.data.success == true) {
          if (response.data.message != "") {
            _this.alertMessage = response.data.message;
            _this.showAlert = true;
          }

          var userdetails = JSON.stringify({
            islogin: true,
            login_user_token: response.data.data.token
          });
          localStorage.setItem('userdetails', userdetails);
          _this.user_details = {};
          setTimeout(function () {
            this.alertMessage = "";
            this.showAlert = false;
            this.$router.push({
              name: 'Frames'
            });
          }.bind(_this), 5000);
        } else if (response.data.success == false) {
          if (response.data != "" && response.data.errors != "") {
            _this.validationErrors = response.data.errors;
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "registration-page" } },
    [
      _c(
        "b-container",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "8" } },
                [
                  _c("b-alert", {
                    attrs: { variant: "success" },
                    domProps: { textContent: _vm._s(_vm.alertMessage) },
                    model: {
                      value: _vm.showAlert,
                      callback: function($$v) {
                        _vm.showAlert = $$v
                      },
                      expression: "showAlert"
                    }
                  }),
                  _vm._v(" "),
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
                                _vm._v(
                                  _vm._s(_vm.validationErrors.first_name[0])
                                )
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
                                _vm._v(
                                  _vm._s(_vm.validationErrors.last_name[0])
                                )
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
                            attrs: { options: _vm.gender_options },
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
                            attrs: { options: _vm.countries },
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
                                _vm._v(
                                  _vm._s(_vm.validationErrors.country_code[0])
                                )
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
                                _vm._v(
                                  _vm._s(_vm.validationErrors.c_password[0])
                                )
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