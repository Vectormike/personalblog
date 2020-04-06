---
title: "Heard of JSON Patching?"
description: "The life of JSON Patch"
date: "2050-04-06"
---

Have you heard about JSON Patch

The first time I came across this "dude" was in an interview, and it took me hours to actually understand why I'd ever want to be needing this for. Turned out to be something important.

Its brother, HTTP PATCH request method; the PUT and the PATCH, are used to update an existing resource. (PUT) updates the whole resource while PATCH updatees only the specified change.

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
[
    { 
        "op": "add",
        "path": "/relationship",
        "value": "flirting"
    },
    { 
        "op": "replace",
        "path": "/gender",
        "value": "unknown"
    },
    { 
        "op": "remove",
        "path": "/height"
    },
    { 
        "op": "add",
        "path": "/jobTitle",
        "value": "unemployed"
    }
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
