# SugarCube Glitch Engine
A text glitch engine for **SugarCube**. Uses SugarCube's built-in `random()` function.
Simulates cognitive distortion, dissociation, and time loops.

# Compatibility

Different SugarCube themes use different passage container selectors:
- Default: `tw-passage`
- Some themes: `.passage` or `#passage`

The engine tries `.passage` and `#passage` by default.  
If you see `找不到 passage 容器` in console, change the selector in `runGlitch.js`:

```javascript
let passageEl = document.querySelector("your container name");
```


# Usage

1. Copy `glitch.js` to your project
2. In Story JavaScript: `importScripts("glitch.js")`
3. In passage:

```html
<div id="content">你的文本</div>
<<done>><<run runGlitch("content", [1,2,3])>><</done>>```




