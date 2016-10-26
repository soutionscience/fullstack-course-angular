/**
 * Created by Vladimir Deminenko on 25.10.2016.
 */

(function () {
    'use strict';

    angular.module('public')
        .service('SignUpService', SignUpService);

    function SignUpService() {
        var service = this;
        var signUpData = {
            firstName: '',
            lastName: '',
            email: '',
            tel: {
                areaCode: '',
                number: ''
            },
            favoriteDish: ''
        };

        service.putSignUp = function (data) {
            signUpData = data;
        }

        service.getSignUp = function () {
            return signUpData;
        }

        service.isSignedUp = function () {
            return !!service.signUpData.email;
        }
    }
})();
