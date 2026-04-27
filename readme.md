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

### 1. Prepare your passage

**Important:** Text and links must be in **separate containers**.

```html
<!-- Text container -->
<div id="glitch-text">
    Your narrative text goes here...
</div>

<!-- Links container -->
<div id="glitch-links">
    <<link "Choice A">><<goto "PathA">><</link>>
    <<link "Choice B">><<goto "PathB">><</link>>
</div>
```

### 2. Call the engine

At the bottom of the same passage:
html

```
<<done>>
    <<run runGlitch("glitch-text", [1,2,3])>>
<</done>>
```

First argument: "glitch-text" — the ID of your text container

Second argument: array of modes (e.g. [1], [2], [1,2], [3])

### 3. Modes
Mode	Effect

[1]	Random character insertion

[2]	UTF-8 corruption (random segment)

[3]	Time Warp (50% repeat current page / 50% rollback to previous page)

    Mode 3 only affects links in #glitch-links. Text remains unchanged.

### 4.Example
**Demo**
input text: 太阳终于完全沉下了西山，天的西边，却像点着巨大的火把似的，烧起一片绚烂的晚霞。
mode: 1,2 (procedure: mode 1 first, 2 next)
output: @)太阳#终于!完@全#$沉*(%下了*西#&@!山)，天的西边(#，却像点着#(!巨大^的)火%把(似的@，%烧%^起#一ç‰‡绚烂的晚^霞。&

**Code**
```
//input your text
<div id = "d">太阳终于完全沉下了西山，天的西边，却像点着巨大的火把似的，烧起一片绚烂的晚霞。</div>

//apply 
<<done>>
<<run runGlitch ("d",[1,2])>>
<</done>>

//separate the link area
<div id = "link-area">
	<<link "r" r>>
	<</link>>
    <<link "b" b>>
    <</link>>

</div>
```
