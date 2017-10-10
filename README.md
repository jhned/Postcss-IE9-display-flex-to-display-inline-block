# PostCSS Ie9 Flex To Display Inline Block [![Build Status][ci-img]][ci]

[PostCSS] plugin for inserting a display:inline-block setting for IE9 every time display flex is used..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jhned/postcss-ie9-flex-to-display-inline-block.svg
[ci]:      https://travis-ci.org/jhned/postcss-ie9-flex-to-display-inline-block

```css
.foo {
    display: flex;
}
```

```css
.foo {
    display: flex;
}
.ie9 .foo {
    display: inline-block;
}
```

## Usage

```js
postcss([ require('postcss-ie9-flex-to-display-inline-block') ])
```

See [PostCSS] docs for examples for your environment.
