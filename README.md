# Text Building Effect
A small plugin that makes text changing less lame than usual.

![caret](https://github.com/tpkn/text-building-effect/blob/master/caret.gif)


### Usage (long)

```javascript
var config = {
  div: document.getElementById('text'),
  caret: '_',
  acceleration: true,
  build_speed: 20,
  remove_speed: 10
}

var tbe = new TextBuildingEffect(config);
    tbe.build('Hello world!');
```

##### Usage (short)

```javascript
var tbe = new TextBuildingEffect({div: document.getElementById('text')});
    tbe.build('Hello world!');
```
<br />


### Settings
- `div`: container which _**innerHTML**_ property would be used for our text transformations
- `caret`: any symbol that would be placed at the end of text **|**
    - if not set, tool runs in **Replace mode**
    - _default = false_
- `build_speed`: building new text speed
    - _default = 15_
- `remove_speed`: removing old text speed
    - _default = 15_
<br />

### Replace mode
![replacing](https://github.com/tpkn/text-building-effect/blob/master/replacing.gif)

<br />

### Change Log
 - v1.1.20170217 - acceleration replaced by `easeInOutCubic` easing
 - v1.0.20161111
