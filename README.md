# kjua
Wrapper for https://larsjung.de/kjua providing helper template

## Installation

`meteor add bchrobot:kjua`

## Use

The `kjuaImage` template accepts either a string or an object for its data-context.

### String

Passing a string will generate the QR code using kjua default options.

```
{{> kjuaImage "foo"}}
```
or

```
Template.container.helpers({
  fooHelper() {
    return "Foo";
  },
});

<template name="container">
    {{> kjuaImage fooHelper}}
</template>
```

### Object

An object-type data-context will be passed as options to kjua. See their website for explanations of these options.

```
{{> kjuaImage text="foo" width=20 height=20}}
```
or

```
Template.container.helpers({
  fooHelper() {
    return {
        text: "foo",
        width: 20,
        height: 20,
    };
  },
});

<template name="container">
    {{> kjuaImage fooHelper}}
</template>
```
