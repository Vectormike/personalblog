---
title: "Heard of JSON Patching?"
description: "The life of JSON Patch"
date: "2020-04-08"
---

![Remember me?](images/hi2.jpeg)

Have you heard about JSON Patch?

![thinking](images/thinking.png)

The first time I came across this "dude" was in an interview, and it took me hours to actually understand why I'd ever want to be needing this for. Turned out to be something important.

Its brother, HTTP PATCH request method; the PUT and the PATCH, are used to update an existing resource. PUT updates the whole resource while PATCH updates only the specified change.

## What is JSON Patch?

It expresses/recounts/depicts a JSON document. It applies operations to a JSON document, this operations with its values to be manipulated are also in a JSON document contained in an array. This document is the JSON Patch document.

Basically, JSON Patch updates a JSON document. It uses the HTTP PATCH method.

### JSON resource example

```javascript
{
    "name": "Victor Jonah",
    "age": "22",
    "gender": "Does not wish to specify",
    "height": "6ft"
}
```

### JSON Patch document example

```javascript
;[
  {
    op: "add",
    path: "/relationship",
    value: "flirting",
  },
  {
    op: "replace",
    path: "/gender",
    value: "unknown",
  },
  {
    op: "remove",
    path: "/height",
  },
  {
    op: "add",
    path: "/jobTitle",
    value: "unemployed",
  },
]
```

### Result (After patching)

```javascript
{
    "name": "Victor Jonah",
    "age": "22",
    "gender": "unknown",
    "relationship": "flirting",
    "jobTitle": "unemployed"
}
```

The JSON Patch document is also a JSON file containing specified operations(add, remove, replace, move, copy, text)

## Libraries available for JSON Patch

#### JavaScript

[jsonpatch.js](http://jsonpatchjs.com/)

[jiff](https://github.com/cujojs/jiff)

#### Python

[python-json-patch](https://github.com/stefankoegl/python-json-patch)

#### PHP

[JSONPatch](https://github.com/gamringer/JSONPatch)

[json-patch-php](https://github.com/mikemccabe/json-patch-php)

#### Ruby

[json_tools](https://github.com/jasnell/json-tools)

[json_patch](https://rubygems.org/gems/json_patch)

#### Perl

[perl-json-patch](https://github.com/zigorou/perl-json-patch)

#### Java

[json-patch](https://github.com/java-json-tools/json-patch)

#### C

[Asp.Net Core JsonPatch](https://github.com/aspnet/JsonPatch)

#### Go

[json-patch](https://github.com/evanphx/json-patch)

![Thank You](<images/thank you.png>)
