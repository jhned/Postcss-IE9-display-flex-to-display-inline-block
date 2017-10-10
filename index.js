var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ie9-flex-to-display-inline-block', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {

        var conglomerate_ie_9_rule = postcss.rule();
        conglomerate_ie_9_rule.selector = '';
        conglomerate_ie_9_rule.nodes = [
            {
                type: 'decl',
                prop: 'display',
                value: 'inline-block'
            }
        ];

        root.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {

                if ( 'flex' === decl.value) {

                    var current_selector = rule.selector;

                    var separator = ',';

                    if ( conglomerate_ie_9_rule.selector == '') {
                        separator = '';
                    }
                    conglomerate_ie_9_rule.selector += separator + '.ie9 ' + current_selector;

                }
            });
        });

        root.append(conglomerate_ie_9_rule);

    };
});
