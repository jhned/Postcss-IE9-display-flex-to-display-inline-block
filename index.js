var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ie9-flex-to-display-inline-block', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {

        var new_rules_array = [];

        root.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {

                if ( 'flex' === decl.value) {

                    var ie9_rule = rule.clone();

                    var current_selector = ie9_rule.selector;
                    ie9_rule.selector = '.ie9 ' + current_selector;

                    var ie9_decl = decl.clone();
                    ie9_decl.value = 'inline-block';

                    ie9_rule.nodes = [ie9_decl];

                    new_rules_array.push(ie9_rule);
                }
            });
        });

        root.append(new_rules_array);

    };
});
