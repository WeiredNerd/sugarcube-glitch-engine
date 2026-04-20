# SugarCube Glitch Engine
A text glitch engine for **SugarCube**. Uses SugarCube's built-in `random()` function.
Simulates cognitive distortion, dissociation, and time loops.

## Usage

1. Copy `glitch.js` to your project
2. In Story JavaScript: `importScripts("glitch.js")`
3. In passage:

```html
<div id="content">你的文本</div>
<<done>><<run runGlitch("content", [1,2,3])>><</done>>
