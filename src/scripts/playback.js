/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global jQuery, Backbone, _, Hudson*/


(function ($, _, Backbone, H) {
    'use strict';
    var Playback;

    H.namespace('Hudson.playback');

    H.playback.PlaybackTool = Backbone.View.extend({
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


}(jQuery, _, Backbone, Hudson));
