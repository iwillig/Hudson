/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global _*/

var Hudson = Hudson || {};

(function (_) {
    'use strict';

    /* namespace pattern take from the javascript patterns book, page
     * 89
     */

    Hudson.namespace = function (ns_string) {
        var parts = ns_string.split('.'),
            parent = Hudson,
            i;

        if (parts[0] === "Hudson") {
            parts = parts.slice(1);
        }

        _.forEach(parts, function (part, i) {

        });

        for (i = 0; i < parts.length; i += 1) {

            if (typeof parent[parts[i]] === 'undefined') {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }


        return parent;
    };


}(_));
