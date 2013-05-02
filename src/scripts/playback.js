/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global jQuery, Backbone, _*/

var Hudson = Hudson || {};

(function ($, _, Backbone) {
    'use strict';
    var Playback;


    Playback = Hudson.Playback = Backbone.View.extend({
        el: '#playback',
        className: 'hudson-playback',
        template: _.template($('#playback-template').html()),

        setWidth: function () {
            this.$el.width($(window).width() - 20);
        },

        render: function () {
            this.setWidth();
            this.$el.append(this.template({}));
            return this;
        }
    });


}(jQuery, _, Backbone));
