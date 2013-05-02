/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global QUnit, jQuery, Hudson */

(function (Q, $, H) {
    'use strict';

    Q.module('Hudson Common Namespace fn');
    Q.test('The name space function should return an object', function () {
        var ns = H.namespace('test.is.a.test');


        Q.ok(
            typeof ns === 'object',
            'The namespace object should return a object'
        );

        Q.ok(
            Hudson.hasOwnProperty('test'),
            'Namespace should have correct properties'
        );

        Q.ok(
            ns === Hudson.test.is.a.test,
            'The return object and the property should pass an === test'
        );


    });


}(QUnit, jQuery, Hudson));
