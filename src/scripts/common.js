/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global _*/

/** Common functions for the Hudson project
 * @namespace Hudson
 */
var Hudson = Hudson || {};

(function (_) {
    'use strict';

    /** @function
     *  @name namespace
     *  @memberof Hudson
     *  @param {string} ns_string string of the name of the namespace
     *   to be added to the global
     *  @returns {object}
     */
    Hudson.namespace = function (ns_string) {
        var parts = ns_string.split('.'),
            parent = Hudson;

        if (parts[0] === "Hudson") {
            parts = parts.slice(1);
        }

        _.forEach(parts, function (part) {
            if (typeof parent[part] === 'undefined') {
                parent[part] = {};
            }
            parent = parent[part];
        });

        return parent;
    };


}(_));
