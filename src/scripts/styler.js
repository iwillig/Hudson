/*jslint browser: true, nomen: true, indent: 4, maxlen: 80 */
/*global jQuery, Backbone, _, Hudson*/

/**
 * @module Hudson/styler
 */
(function ($, _, Backbone, H) {
    'use strict';
    var Rule, Rules;

    H.namespace('Hudson.styler');

    H.styler.Rule = Rule = Backbone.Model.extend({});
    H.styler.RuleList = Backbone.Collection.extend({
        model: Rule
    });

    Rules = new H.styler.RuleList();
    Rules.add([
        {
            sybmolizers: [
                {
                    polgyon: {
                        fill: {
                            color: '#fff'
                        },
                        stroke: {
                            color: '#000'
                        }
                    }
                }
            ]
        }
    ]);

    H.styler.Style = Backbone.Model.extend({
        defaults: {
            title: 'Default title',
            type: 'Polygon',
            rules: []
        }
    });

    /**
     *
     */
    H.styler.RuleView = Backbone.View.extend({
        tagName: 'li',
        className: 'styler-rule'
    });

    H.styler.EditForm = Backbone.View.extend({
        tagName: 'div',
        className: 'hudson-styler-form',
        events: {
            'click input': 'saveStyle'
        },
        render: function () {
            this.$el.append();
            return this;
        }
    });

    H.styler.StyleEditor = Backbone.View.extend({
        tagName: 'div',
        className: 'hudson-styler hudson-widget',
        template: _.template($('#styler-template').html()),
        editTemplate: _.template($('#styler-edit').html()),
        events: {
            'click .style-title a': 'editTitle',
            'click .add-rule': 'addRule',
            'submit .style-form': 'saveStyle'
        },

        addRule: function () {
            console.log('hello');
        },

        saveStyle: function (evt) {
            evt.preventDefault();
            var form = this.$el.find('form').serializeArray();
            this.model.set('title', form[0].value);

            this.$('.style-form').remove();
            this.render();
        },

        editTitle: function () {
            this.$('.style-title a').remove();
            this.$('.style-title').append(this.editTemplate({
                style: this.model.toJSON()
            }));
        },

        initialize: function () {
            this.model.set('rules', Rules);
            this.model.on('change', this.render, this);
        },

        render: function () {
            this.$el.html(this.template({
                style: this.model.toJSON()
            }));
            return this;
        }
    });

    H.styler.main = function (options) {

        $('.showSidebar').click(function () {
            $('#sidepanel').panel('open');
        });
        console.log('hello');
    };

}(jQuery, _, Backbone, Hudson));
