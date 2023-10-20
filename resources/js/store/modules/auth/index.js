import axiosapi from '../../../axiosapi';

const state = {
    islogin:false,
    login_user_token:"",
    gender_options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
    ],
    countries: [
        { value: 'AF', text : 'Afghanistan' },
        { value: 'AX', text : 'Aland Islands' },
        { value: 'AL', text : 'Albania' },
        { value: 'DZ', text : 'Algeria' },
        { value: 'AS', text : 'American Samoa' },
        { value: 'AD', text : 'Andorra' },
        { value: 'AO', text : 'Angola' },
        { value: 'AI', text : 'Anguilla' },
        { value: 'AQ', text : 'Antarctica' },
        { value: 'AG', text : 'Antigua and Barbuda' },
        { value: 'AR', text : 'Argentina' },
        { value: 'AM', text : 'Armenia' },
        { value: 'AW', text : 'Aruba' },
        { value: 'AU', text : 'Australia' },
        { value: 'AT', text : 'Austria' },
        { value: 'AZ', text : 'Azerbaijan' },
        { value: 'BS', text : 'Bahamas' },
        { value: 'BH', text : 'Bahrain' },
        { value: 'BD', text : 'Bangladesh' },
        { value: 'BB', text : 'Barbados' },
        { value: 'BY', text : 'Belarus' },
        { value: 'BE', text : 'Belgium' },
        { value: 'BZ', text : 'Belize' },
        { value: 'BJ', text : 'Benin' },
        { value: 'BM', text : 'Bermuda' },
        { value: 'BT', text : 'Bhutan' },
        { value: 'BO', text : 'Bolivia' },
        { value: 'BQ', text : 'Bonaire, Sint Eustatius and Saba' },
        { value: 'BA', text : 'Bosnia and Herzegovina' },
        { value: 'BW', text : 'Botswana' },
        { value: 'BV', text : 'Bouvet Island' },
        { value: 'BR', text : 'Brazil' },
        { value: 'IO', text : 'British Indian Ocean Territory' },
        { value: 'BN', text : 'Brunei Darussalam' },
        { value: 'BG', text : 'Bulgaria' },
        { value: 'BF', text : 'Burkina Faso' },
        { value: 'BI', text : 'Burundi' },
        { value: 'KH', text : 'Cambodia' },
        { value: 'CM', text : 'Cameroon' },
        { value: 'CA', text : 'Canada' },
        { value: 'CV', text : 'Cape Verde' },
        { value: 'KY', text : 'Cayman Islands' },
        { value: 'CF', text : 'Central African Republic' },
        { value: 'TD', text : 'Chad' },
        { value: 'CL', text : 'Chile' },
        { value: 'CN', text : 'China' },
        { value: 'CX', text : 'Christmas Island' },
        { value: 'CC', text : 'Cocos (Keeling) Islands' },
        { value: 'CO', text : 'Colombia' },
        { value: 'KM', text : 'Comoros' },
        { value: 'CG', text : 'Congo' },
        { value: 'CD', text : 'Congo, Democratic Republic' },
        { value: 'CK', text : 'Cook Islands' },
        { value: 'CR', text : 'Costa Rica' },
        { value: 'CI', text : 'Cote D\'Ivoire' },
        { value: 'HR', text : 'Croatia' },
        { value: 'CU', text : 'Cuba' },
        { value: 'CW', text : 'Curaçao' },
        { value: 'CY', text : 'Cyprus' },
        { value: 'CZ', text : 'Czech Republic' },
        { value: 'DK', text : 'Denmark' },
        { value: 'DJ', text : 'Djibouti' },
        { value: 'DM', text : 'Dominica' },
        { value: 'DO', text : 'Dominican Republic' },
        { value: 'EC', text : 'Ecuador' },
        { value: 'EG', text : 'Egypt' },
        { value: 'SV', text : 'El Salvador' },
        { value: 'GQ', text : 'Equatorial Guinea' },
        { value: 'ER', text : 'Eritrea' },
        { value: 'EE', text : 'Estonia' },
        { value: 'ET', text : 'Ethiopia' },
        { value: 'FK', text : 'Falkland Islands (Malvinas)' },
        { value: 'FO', text : 'Faroe Islands' },
        { value: 'FJ', text : 'Fiji' },
        { value: 'FI', text : 'Finland' },
        { value: 'FR', text : 'France' },
        { value: 'GF', text : 'French Guiana' },
        { value: 'PF', text : 'French Polynesia' },
        { value: 'TF', text : 'French Southern Territories' },
        { value: 'GA', text : 'Gabon' },
        { value: 'GM', text : 'Gambia' },
        { value: 'GE', text : 'Georgia' },
        { value: 'DE', text : 'Germany' },
        { value: 'GH', text : 'Ghana' },
        { value: 'GI', text : 'Gibraltar' },
        { value: 'GR', text : 'Greece' },
        { value: 'GL', text : 'Greenland' },
        { value: 'GD', text : 'Grenada' },
        { value: 'GP', text : 'Guadeloupe' },
        { value: 'GU', text : 'Guam' },
        { value: 'GT', text : 'Guatemala' },
        { value: 'GG', text : 'Guernsey' },
        { value: 'GN', text : 'Guinea' },
        { value: 'GW', text : 'Guinea-Bissau' },
        { value: 'GY', text : 'Guyana' },
        { value: 'HT', text : 'Haiti' },
        { value: 'HM', text : 'Heard Island and Mcdonald Islands' },
        { value: 'VA', text : 'Holy See (Vatican City State)' },
        { value: 'HN', text : 'Honduras' },
        { value: 'HK', text : 'Hong Kong' },
        { value: 'HU', text : 'Hungary' },
        { value: 'IS', text : 'Iceland' },
        { value: 'IN', text : 'India' },
        { value: 'ID', text : 'Indonesia' },
        { value: 'IR', text : 'Iran, Islamic Republic Of' },
        { value: 'IQ', text : 'Iraq' },
        { value: 'IE', text : 'Ireland' },
        { value: 'IM', text : 'Isle Of Man' },
        { value: 'IL', text : 'Israel' },
        { value: 'IT', text : 'Italy' },
        { value: 'JM', text : 'Jamaica' },
        { value: 'JP', text : 'Japan' },
        { value: 'JE', text : 'Jersey' },
        { value: 'JO', text : 'Jordan' },
        { value: 'KZ', text : 'Kazakhstan' },
        { value: 'KE', text : 'Kenya' },
        { value: 'KI', text : 'Kiribati' },
        { value: 'KP', text : 'Korea, Democratic People\'s Republic Of' },
        { value: 'KR', text : 'Korea' },
        { value: 'XK', text : 'Kosovo' },
        { value: 'KW', text : 'Kuwait' },
        { value: 'KG', text : 'Kyrgyzstan' },
        { value: 'LA', text : 'Lao People\'s Democratic Republic' },
        { value: 'LV', text : 'Latvia' },
        { value: 'LB', text : 'Lebanon' },
        { value: 'LS', text : 'Lesotho' },
        { value: 'LR', text : 'Liberia' },
        { value: 'LY', text : 'Libya' },
        { value: 'LI', text : 'Liechtenstein' },
        { value: 'LT', text : 'Lithuania' },
        { value: 'LU', text : 'Luxembourg' },
        { value: 'MO', text : 'Macao' },
        { value: 'MK', text : 'Macedonia' },
        { value: 'MG', text : 'Madagascar' },
        { value: 'MW', text : 'Malawi' },
        { value: 'MY', text : 'Malaysia' },
        { value: 'MV', text : 'Maldives' },
        { value: 'ML', text : 'Mali' },
        { value: 'MT', text : 'Malta' },
        { value: 'MH', text : 'Marshall Islands' },
        { value: 'MQ', text : 'Martinique' },
        { value: 'MR', text : 'Mauritania' },
        { value: 'MU', text : 'Mauritius' },
        { value: 'YT', text : 'Mayotte' },
        { value: 'MX', text : 'Mexico' },
        { value: 'FM', text : 'Micronesia, Federated States Of' },
        { value: 'MD', text : 'Moldova' },
        { value: 'MC', text : 'Monaco' },
        { value: 'MN', text : 'Mongolia' },
        { value: 'ME', text : 'Montenegro' },
        { value: 'MS', text : 'Montserrat' },
        { value: 'MA', text : 'Morocco' },
        { value: 'MZ', text : 'Mozambique' },
        { value: 'MM', text : 'Myanmar' },
        { value: 'NA', text : 'Namibia' },
        { value: 'NR', text : 'Nauru' },
        { value: 'NP', text : 'Nepal' },
        { value: 'NL', text : 'Netherlands' },
        { value: 'NC', text : 'New Caledonia' },
        { value: 'NZ', text : 'New Zealand' },
        { value: 'NI', text : 'Nicaragua' },
        { value: 'NE', text : 'Niger' },
        { value: 'NG', text : 'Nigeria' },
        { value: 'NU', text : 'Niue' },
        { value: 'NF', text : 'Norfolk Island' },
        { value: 'MP', text : 'Northern Mariana Islands' },
        { value: 'NO', text : 'Norway' },
        { value: 'OM', text : 'Oman' },
        { value: 'PK', text : 'Pakistan' },
        { value: 'PW', text : 'Palau' },
        { value: 'PS', text : 'Palestinian Territory, Occupied' },
        { value: 'PA', text : 'Panama' },
        { value: 'PG', text : 'Papua New Guinea' },
        { value: 'PY', text : 'Paraguay' },
        { value: 'PE', text : 'Peru' },
        { value: 'PH', text : 'Philippines' },
        { value: 'PN', text : 'Pitcairn' },
        { value: 'PL', text : 'Poland' },
        { value: 'PT', text : 'Portugal' },
        { value: 'PR', text : 'Puerto Rico' },
        { value: 'QA', text : 'Qatar' },
        { value: 'RE', text : 'Reunion' },
        { value: 'RO', text : 'Romania' },
        { value: 'RU', text : 'Russian Federation' },
        { value: 'RW', text : 'Rwanda' },
        { value: 'BL', text : 'Saint Barthelemy' },
        { value: 'SH', text : 'Saint Helena' },
        { value: 'KN', text : 'Saint Kitts and Nevis' },
        { value: 'LC', text : 'Saint Lucia' },
        { value: 'MF', text : 'Saint Martin' },
        { value: 'PM', text : 'Saint Pierre and Miquelon' },
        { value: 'VC', text : 'Saint Vincent and Grenadines' },
        { value: 'WS', text : 'Samoa' },
        { value: 'SM', text : 'San Marino' },
        { value: 'ST', text : 'Sao Tome and Principe' },
        { value: 'SA', text : 'Saudi Arabia' },
        { value: 'SN', text : 'Senegal' },
        { value: 'RS', text : 'Serbia' },
        { value: 'SC', text : 'Seychelles' },
        { value: 'SL', text : 'Sierra Leone' },
        { value: 'SG', text : 'Singapore' },
        { value: 'SX', text : 'Sint Maarten (Dutch part)' },
        { value: 'SK', text : 'Slovakia' },
        { value: 'SI', text : 'Slovenia' },
        { value: 'SB', text : 'Solomon Islands' },
        { value: 'SO', text : 'Somalia' },
        { value: 'ZA', text : 'South Africa' },
        { value: 'GS', text : 'South Georgia and Sandwich Isl.' },
        { value: 'SS', text : 'South Sudan' },
        { value: 'ES', text : 'Spain' },
        { value: 'LK', text : 'Sri Lanka' },
        { value: 'SD', text : 'Sudan' },
        { value: 'SR', text : 'Suriname' },
        { value: 'SJ', text : 'Svalbard and Jan Mayen' },
        { value: 'SZ', text : 'Swaziland' },
        { value: 'SE', text : 'Sweden' },
        { value: 'CH', text : 'Switzerland' },
        { value: 'SY', text : 'Syrian Arab Republic' },
        { value: 'TW', text : 'Taiwan' },
        { value: 'TJ', text : 'Tajikistan' },
        { value: 'TZ', text : 'Tanzania' },
        { value: 'TH', text : 'Thailand' },
        { value: 'TL', text : 'Timor-Leste' },
        { value: 'TG', text : 'Togo' },
        { value: 'TK', text : 'Tokelau' },
        { value: 'TO', text : 'Tonga' },
        { value: 'TT', text : 'Trinidad and Tobago' },
        { value: 'TN', text : 'Tunisia' },
        { value: 'TR', text : 'Turkey' },
        { value: 'TM', text : 'Turkmenistan' },
        { value: 'TC', text : 'Turks and Caicos Islands' },
        { value: 'TV', text : 'Tuvalu' },
        { value: 'UG', text : 'Uganda' },
        { value: 'UA', text : 'Ukraine' },
        { value: 'AE', text : 'United Arab Emirates' },
        { value: 'GB', text : 'United Kingdom' },
        { value: 'US', text : 'United States' },
        { value: 'UM', text : 'United States Outlying Islands' },
        { value: 'UY', text : 'Uruguay' },
        { value: 'UZ', text : 'Uzbekistan' },
        { value: 'VU', text : 'Vanuatu' },
        { value: 'VE', text : 'Venezuela' },
        { value: 'VN', text : 'Vietnam' },
        { value: 'VG', text : 'Virgin Islands, British' },
        { value: 'VI', text : 'Virgin Islands, U.S.' },
        { value: 'WF', text : 'Wallis and Futuna' },
        { value: 'EH', text : 'Western Sahara' },
        { value: 'YE', text : 'Yemen' },
        { value: 'ZM', text : 'Zambia' },
        { value: 'ZW', text : 'Zimbabwe' },
    ]
};

// getters
const getters = {

};

// actions
const actions = {
    user_register(context,userDetails){
        return new Promise((resolve,reject)=>{
            axiosapi.post('/register',userDetails,{headers:{"Content-Type" : "application/json"}})
            .then(response=>{
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    },
    user_login(context,userDetails){
        return new Promise((resolve,reject)=>{
            axiosapi.post('/login',userDetails,{headers:{"Content-Type" : "application/json"}})
            .then(response=>{
                if(response.data.success == true){
                    var user = {
                        islogin:true,
                        login_user_token:response.data.data.token
                    }
                    context.commit('SET_USERDETAILS',user);
                }
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    },
    check_user_login(context){
        var userdetails = localStorage.getItem('userdetails');
        if(userdetails != null){
            var user = JSON.parse( userdetails );
            context.commit('SET_USERDETAILS',user);
        }
    },
    user_logout(context){
        return new Promise((resolve,reject)=>{
            axiosapi.post('/logout',{},{
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${context.state.login_user_token}`
                }
            }).then(response=>{
                if(response.data.success == true){
                    var user = {
                        islogin:false,
                        login_user_token:""
                    }
                    context.commit('SET_USERDETAILS',user);
                }
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    }
};

// mutations
const mutations = {
    SET_USERDETAILS(state,user){
        state.islogin = user.islogin;
        state.login_user_token = user.login_user_token;
    },
};

export default {
    namespaced: true,
    name: 'auth',
    state,
    getters,
    actions,
    mutations
}
