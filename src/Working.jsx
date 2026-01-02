import React, { useState } from "react";

const Working = () => {
  const [output, setOutput] = useState(null);
  const [customCSS, setCustomCSS] = useState("");
  const [appliedCSS, setAppliedCSS] = useState({});

  // -------------------------------------------------
  // BIG CSS PROPERTY DATA: title, description, css, demo
  // -------------------------------------------------
  // NOTE: keys use standard CSS property names (kebab-case)
  const cssProperties = {
    /* -------------------------
       TEXT & TYPOGRAPHY
       ------------------------- */
    color: {
      title: "color",
      desc: "Sets the text color.",
      css: "color: red;",
      demo: `<p style="color:red;">Red text</p>`
    },
    "font-size": {
      title: "font-size",
      desc: "Sets the font size.",
      css: "font-size: 20px;",
      demo: `<p style="font-size:20px;">20px text</p>`
    },
    "font-weight": {
      title: "font-weight",
      desc: "Sets the weight (boldness).",
      css: "font-weight: 700;",
      demo: `<p style="font-weight:700;">Bold text</p>`
    },
    "font-family": {
      title: "font-family",
      desc: "Sets the font family.",
      css: "font-family: Arial, sans-serif;",
      demo: `<p style="font-family:Arial,sans-serif;">Arial text</p>`
    },
    "font-style": {
      title: "font-style",
      desc: "Italic or normal.",
      css: "font-style: italic;",
      demo: `<p style="font-style:italic;">Italic text</p>`
    },
    "line-height": {
      title: "line-height",
      desc: "Line spacing.",
      css: "line-height: 1.8;",
      demo: `<p style="line-height:1.8;">Line height example<br/>Second line</p>`
    },
    "letter-spacing": {
      title: "letter-spacing",
      desc: "Spacing between letters.",
      css: "letter-spacing: 2px;",
      demo: `<p style="letter-spacing:2px;">Spaced letters</p>`
    },
    "word-spacing": {
      title: "word-spacing",
      desc: "Spacing between words.",
      css: "word-spacing:8px;",
      demo: `<p style="word-spacing:8px;">Spaced words example</p>`
    },
    "text-align": {
      title: "text-align",
      desc: "Horizontal text alignment.",
      css: "text-align: center;",
      demo: `<p style="text-align:center;">Centered</p>`
    },
    "text-transform": {
      title: "text-transform",
      desc: "Uppercase, lowercase, etc.",
      css: "text-transform: uppercase;",
      demo: `<p style="text-transform:uppercase;">uppercase</p>`
    },
    "text-decoration": {
      title: "text-decoration",
      desc: "Underline/line-through.",
      css: "text-decoration: underline;",
      demo: `<p style="text-decoration:underline;">Underlined</p>`
    },
    "text-shadow": {
      title: "text-shadow",
      desc: "Shadow behind text.",
      css: "text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
      demo: `<p style="text-shadow:2px 2px 4px rgba(0,0,0,0.3);">Text shadow</p>`
    },
    "white-space": {
      title: "white-space",
      desc: "How whitespace is handled.",
      css: "white-space: nowrap;",
      demo: `<p style="white-space:nowrap;">No wrap text</p>`
    },
    "text-overflow": {
      title: "text-overflow",
      desc: "How overflowed text is shown.",
      css: "width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
      demo: `<div style="width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">This is a very long text that will be truncated</div>`
    },
    "text-indent": {
      title: "text-indent",
      desc: "Indent first line.",
      css: "text-indent: 30px;",
      demo: `<p style="text-indent:30px;">Indented paragraph for demonstration.</p>`
    },
    "direction": {
      title: "direction",
      desc: "Text direction (ltr/rtl).",
      css: "direction: rtl;",
      demo: `<p style="direction:rtl;">مرحبا بالعالم</p>`
    },
    "vertical-align": {
      title: "vertical-align",
      desc: "Align inline-level elements vertically.",
      css: "vertical-align: middle;",
      demo: `<span style="vertical-align:middle;">Middle aligned</span>`
    },

    /* -------------------------
       BOX MODEL & SIZING
       ------------------------- */
    margin: {
      title: "margin",
      desc: "Space outside an element.",
      css: "margin: 20px;",
      demo: `<div style="margin:20px;background:#eee;padding:6px;">Margin box</div>`
    },
    "margin-top": {
      title: "margin-top",
      desc: "Top margin.",
      css: "margin-top: 10px;",
      demo: `<div style="margin-top:10px;background:#eee;padding:6px;">Top margin</div>`
    },
    padding: {
      title: "padding",
      desc: "Space inside an element.",
      css: "padding: 16px;",
      demo: `<div style="padding:16px;background:#eee;">Padding box</div>`
    },
    "padding-left": {
      title: "padding-left",
      desc: "Left padding.",
      css: "padding-left: 30px;",
      demo: `<div style="padding-left:30px;background:#eee;">Left padded</div>`
    },
    width: {
      title: "width",
      desc: "Element width.",
      css: "width:200px;",
      demo: `<div style="width:200px;background:#f3f4f6;">200px wide</div>`
    },
    height: {
      title: "height",
      desc: "Element height.",
      css: "height:80px;",
      demo: `<div style="height:80px;background:#f3f4f6;">80px tall</div>`
    },
    "min-width": {
      title: "min-width",
      desc: "Minimum width.",
      css: "min-width:100px;",
      demo: `<div style="min-width:100px;background:#f3f4f6;">Min width</div>`
    },
    "max-width": {
      title: "max-width",
      desc: "Maximum width.",
      css: "max-width:150px;",
      demo: `<div style="max-width:150px;background:#f3f4f6;">Max width example</div>`
    },
    "box-sizing": {
      title: "box-sizing",
      desc: "How width/height are calculated.",
      css: "box-sizing: border-box;",
      demo: `<div style="box-sizing:border-box;padding:20px;border:4px solid #ddd;width:150px;">Box sizing</div>`
    },

    /* -------------------------
       BACKGROUNDS
       ------------------------- */
    background: {
      title: "background",
      desc: "Shorthand for background properties.",
      css: "background: linear-gradient(90deg,#06b6d4,#3b82f6);",
      demo: `<div style="background:linear-gradient(90deg,#06b6d4,#3b82f6);padding:10px;color:white;">Gradient background</div>`
    },
    "background-color": {
      title: "background-color",
      desc: "Background color.",
      css: "background-color: #3b82f6;",
      demo: `<div style="background-color:#3b82f6;padding:10px;color:white;">Blue background</div>`
    },
    "background-image": {
      title: "background-image",
      desc: "Background image URL.",
      css: "background-image: url('https://via.placeholder.com/150');",
      demo: `<div style="background-image:url('https://via.placeholder.com/150');height:80px;background-size:cover;">Image bg</div>`
    },
    "background-size": {
      title: "background-size",
      desc: "Size of background image.",
      css: "background-size: cover;",
      demo: `<div style="background-image:url('https://via.placeholder.com/200');height:80px;background-size:cover;">Cover</div>`
    },
    "background-position": {
      title: "background-position",
      desc: "Position of background image.",
      css: "background-position: center;",
      demo: `<div style="background-image:url('https://via.placeholder.com/200');height:80px;background-position:center;background-repeat:no-repeat;">Centered</div>`
    },

    /* -------------------------
       BORDERS & OUTLINE
       ------------------------- */
    border: {
      title: "border",
      desc: "Shorthand border.",
      css: "border: 2px solid #3b82f6;",
      demo: `<div style="border:2px solid #3b82f6;padding:8px;">Border</div>`
    },
    "border-radius": {
      title: "border-radius",
      desc: "Rounded corners.",
      css: "border-radius: 8px;",
      demo: `<div style="border-radius:8px;border:1px solid #ddd;padding:8px;">Rounded</div>`
    },
    "border-width": {
      title: "border-width",
      desc: "Width of border.",
      css: "border-width:4px;",
      demo: `<div style="border:4px solid #ddd;padding:6px;">Border width</div>`
    },
    "border-style": {
      title: "border-style",
      desc: "Border style (solid/dashed).",
      css: "border-style: dashed;",
      demo: `<div style="border:2px dashed #ccc;padding:6px;">Dashed border</div>`
    },
    outline: {
      title: "outline",
      desc: "Outline around element.",
      css: "outline: 2px solid orange;",
      demo: `<div style="outline:2px solid orange;padding:6px;">Outline</div>`
    },
    "box-shadow": {
      title: "box-shadow",
      desc: "Drop shadow.",
      css: "box-shadow: 0 4px 8px rgba(0,0,0,0.15);",
      demo: `<div style="box-shadow:0 4px 8px rgba(0,0,0,0.15);padding:10px;">Shadow box</div>`
    },

    /* -------------------------
       LAYOUT & POSITIONING
       ------------------------- */
    display: {
      title: "display",
      desc: "Display type block/inline/flex/grid.",
      css: "display: block;",
      demo: `<div style="display:block;">Block element</div>`
    },
    visibility: {
      title: "visibility",
      desc: "Visible or hidden (space kept).",
      css: "visibility: hidden;",
      demo: `<div style="visibility:hidden;">Hidden (space kept)</div>`
    },
    opacity: {
      title: "opacity",
      desc: "Opacity/transparency.",
      css: "opacity: 0.6;",
      demo: `<div style="opacity:0.6;">Semi transparent</div>`
    },
    position: {
      title: "position",
      desc: "Positioning: static/relative/absolute/fixed/sticky.",
      css: "position: relative; top: 6px;",
      demo: `<div style="position:relative;top:6px;">Relatively positioned</div>`
    },
    top: {
      title: "top",
      desc: "Top offset for positioned elements.",
      css: "top: 10px;",
      demo: `<div style="position:relative;top:10px;">Top 10px</div>`
    },
    left: {
      title: "left",
      desc: "Left offset for positioned elements.",
      css: "left: 10px;",
      demo: `<div style="position:relative;left:10px;">Left 10px</div>`
    },
    "z-index": {
      title: "z-index",
      desc: "Stacking order.",
      css: "z-index: 10;",
      demo: `<div style="position:relative;z-index:10;background:#fff;padding:6px;border:1px solid #eee;">Z-index</div>`
    },
    float: {
      title: "float",
      desc: "Float element left or right.",
      css: "float: left;",
      demo: `<div style="float:left;width:80px;background:#e5e7eb;padding:6px;margin-right:8px;">Floated</div><div style="clear:both">Cleared</div>`
    },
    clear: {
      title: "clear",
      desc: "Clear floats.",
      css: "clear: both;",
      demo: `<div style="clear:both;">Cleared</div>`
    },

    /* -------------------------
       OVERFLOW & CLIP
       ------------------------- */
    overflow: {
      title: "overflow",
      desc: "How overflow is handled.",
      css: "overflow: auto;",
      demo: `<div style="width:120px;height:40px;overflow:auto;border:1px solid #ddd;">Long content that will scroll if needed</div>`
    },
    "overflow-x": {
      title: "overflow-x",
      desc: "Horizontal overflow.",
      css: "overflow-x: scroll;",
      demo: `<div style="width:120px;overflow-x:scroll;border:1px solid #ddd;">Some horizontal content that is long</div>`
    },
    "overflow-y": {
      title: "overflow-y",
      desc: "Vertical overflow.",
      css: "overflow-y: auto;",
      demo: `<div style="height:40px;overflow-y:auto;border:1px solid #ddd;">Tall content<br/>Second line<br/>Third line</div>`
    },
    "clip-path": {
      title: "clip-path",
      desc: "Clip shape for element.",
      css: "clip-path: circle(50% at 50% 50%);",
      demo: `<div style="width:80px;height:80px;background:#60a5fa;clip-path:circle(50%);"></div>`
    },

    /* -------------------------
       FLEXBOX
       ------------------------- */
    flex: {
      title: "flex",
      desc: "Shorthand flex property.",
      css: "display:flex;gap:8px;align-items:center;",
      demo: `<div style="display:flex;gap:8px;align-items:center;"><div style="background:#60a5fa;padding:8px;">A</div><div style="background:#3b82f6;padding:8px;">B</div></div>`
    },
    "flex-direction": {
      title: "flex-direction",
      desc: "row/column direction.",
      css: "display:flex;flex-direction:column;",
      demo: `<div style="display:flex;flex-direction:column;gap:6px;"><div>A</div><div>B</div></div>`
    },
    "flex-wrap": {
      title: "flex-wrap",
      desc: "Wrap flex items.",
      css: "display:flex;flex-wrap:wrap;",
      demo: `<div style="display:flex;flex-wrap:wrap;width:120px;"><div style="width:70px;background:#ddd;margin:2px;">1</div><div style="width:70px;background:#ddd;margin:2px;">2</div></div>`
    },
    "justify-content": {
      title: "justify-content",
      desc: "Align items horizontally.",
      css: "display:flex;justify-content:center;",
      demo: `<div style="display:flex;justify-content:center;"><div style="background:#ddd;padding:6px;">Centered</div></div>`
    },
    "align-items": {
      title: "align-items",
      desc: "Align items vertically in flex.",
      css: "display:flex;align-items:center;height:60px;",
      demo: `<div style="display:flex;align-items:center;height:60px;"><div style="background:#ddd;padding:6px;">Centered vertically</div></div>`
    },
    gap: {
      title: "gap",
      desc: "Space between grid/flex items.",
      css: "display:flex;gap:12px;",
      demo: `<div style="display:flex;gap:12px;"><div style="background:#ddd;padding:6px;">1</div><div style="background:#ddd;padding:6px;">2</div></div>`
    },

    /* -------------------------
       GRID
       ------------------------- */
    "display-grid": {
      // using a separate key to avoid collision with `display`
      title: "display: grid",
      desc: "Enable grid layout.",
      css: "display:grid;grid-template-columns:1fr 1fr;gap:8px;",
      demo: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div style="background:#e6f0ff;padding:6px;">1</div><div style="background:#e6f0ff;padding:6px;">2</div></div>`
    },
    "grid-template-columns": {
      title: "grid-template-columns",
      desc: "Define columns.",
      css: "grid-template-columns: 1fr 2fr;",
      demo: `<div style="display:grid;grid-template-columns:1fr 2fr;gap:6px;"><div style="background:#f0fdf4;padding:6px;">Col1</div><div style="background:#dcfce7;padding:6px;">Col2</div></div>`
    },
    "grid-gap": {
      title: "grid-gap",
      desc: "Gap between grid items.",
      css: "grid-gap: 10px;",
      demo: `<div style="display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px;"><div style="background:#eee;padding:6px;">A</div><div style="background:#eee;padding:6px;">B</div></div>`
    },
    "grid-area": {
      title: "grid-area",
      desc: "Place an item in named area.",
      css: "grid-area: header;",
      demo: `<div style="display:grid;grid-template-areas:'header header' 'main side';grid-template-columns:2fr 1fr;gap:6px;"><div style="grid-area:header;background:#fef3c7;padding:6px;">Header</div></div>`
    },

    /* -------------------------
       TRANSFORMS & TRANSITIONS
       ------------------------- */
    transform: {
      title: "transform",
      desc: "Apply 2D/3D transforms.",
      css: "transform: rotate(6deg) scale(1.05);",
      demo: `<div style="transform:rotate(6deg) scale(1.05);display:inline-block;padding:6px;background:#e0f2fe;">Transformed</div>`
    },
    "transform-origin": {
      title: "transform-origin",
      desc: "Origin point for transform.",
      css: "transform-origin: 0 0;",
      demo: `<div style="transform:scale(1.1);transform-origin:0 0;display:inline-block;padding:6px;background:#fee2e2;">Origin</div>`
    },
    transition: {
      title: "transition",
      desc: "Animate property changes.",
      css: "transition: all 0.3s ease;",
      demo: `<div style="transition:all .3s ease;padding:6px;background:#e6f7ff;">Hover me</div>`
    },
    "transition-duration": {
      title: "transition-duration",
      desc: "How long transition lasts.",
      css: "transition-duration: .6s;",
      demo: `<div style="transition:all .6s;padding:6px;background:#f1f5f9;">Transition duration</div>`
    },
    animation: {
      title: "animation",
      desc: "Apply keyframe animation shorthand.",
      css: "animation: spin 2s linear infinite;",
      demo: `<div style="display:inline-block;padding:6px;background:#eef2ff;">Animated (see CSS)</div>`
    },

    /* -------------------------
       FILTERS & BLEND
       ------------------------- */
    filter: {
      title: "filter",
      desc: "CSS filter effects.",
      css: "filter: grayscale(50%);",
      demo: `<img src="https://via.placeholder.com/80" style="filter:grayscale(50%);" alt="filtered"/>`
    },
    "backdrop-filter": {
      title: "backdrop-filter",
      desc: "Filter applied to backdrop.",
      css: "backdrop-filter: blur(4px);",
      demo: `<div style="background:rgba(255,255,255,0.6);backdrop-filter:blur(4px);padding:6px;">Backdrop filter</div>`
    },
    "mix-blend-mode": {
      title: "mix-blend-mode",
      desc: "Blend element with background.",
      css: "mix-blend-mode: multiply;",
      demo: `<div style="background:#fef3c7;padding:6px;"><span style="mix-blend-mode:multiply;background:#60a5fa;padding:6px;display:inline-block;">Blend</span></div>`
    },

    /* -------------------------
       FONTS (ADVANCED)
       ------------------------- */
    "font-variant": {
      title: "font-variant",
      desc: "Alternate glyph forms.",
      css: "font-variant: small-caps;",
      demo: `<p style="font-variant:small-caps;">Small caps example</p>`
    },
    "font-feature-settings": {
      title: "font-feature-settings",
      desc: "Low-level typographic features.",
      css: "font-feature-settings: 'liga' 1;",
      demo: `<p style="font-feature-settings:'liga' 1;">Ligatures on (if available)</p>`
    },

    /* -------------------------
       TABLES
       ------------------------- */
    "border-collapse": {
      title: "border-collapse",
      desc: "Table border collapse.",
      css: "border-collapse: collapse;",
      demo: `<table style="border-collapse:collapse;border:1px solid #ddd;"><tr><td style="border:1px solid #ddd;padding:6px;">Cell</td></tr></table>`
    },
    "border-spacing": {
      title: "border-spacing",
      desc: "Space between table cells.",
      css: "border-spacing: 8px;",
      demo: `<table style="border-spacing:8px;"><tr><td style="background:#f8fafc;padding:6px;">A</td><td style="background:#f8fafc;padding:6px;">B</td></tr></table>`
    },

    /* -------------------------
       INTERACTION & POINTER
       ------------------------- */
    cursor: {
      title: "cursor",
      desc: "Cursor type on hover.",
      css: "cursor: pointer;",
      demo: `<button style="cursor:pointer;padding:6px;">Pointer cursor</button>`
    },
    "pointer-events": {
      title: "pointer-events",
      desc: "Whether element reacts to pointer events.",
      css: "pointer-events: none;",
      demo: `<div style="pointer-events:none;background:#f8fafc;padding:6px;">No pointer events</div>`
    },
    "user-select": {
      title: "user-select",
      desc: "Allow text selection.",
      css: "user-select: none;",
      demo: `<p style="user-select:none;">Cannot select this text</p>`
    },
    resize: {
      title: "resize",
      desc: "Resizing for elements (textarea).",
      css: "resize: both;",
      demo: `<textarea style="resize:both;width:120px;height:60px;">Resize me</textarea>`
    },
    "caret-color": {
      title: "caret-color",
      desc: "Color of the text caret.",
      css: "caret-color: red;",
      demo: `<input placeholder="caret-color demo" style="caret-color:red;padding:6px;" />`
    },

    /* -------------------------
       MISCELLANEOUS
       ------------------------- */
    content: {
      title: "content",
      desc: "Used with ::before/::after.",
      css: "content: '»';",
      demo: `<div style="position:relative;padding-left:14px;">Pseudo content (see CSS)</div>`
    },
    "box-decoration-break": {
      title: "box-decoration-break",
      desc: "How fragments are rendered across breaks.",
      css: "box-decoration-break: clone;",
      demo: `<div style="box-decoration-break:clone;padding:6px;border:1px solid #ddd;">Decoration break</div>`
    },
    "appearance": {
      title: "appearance",
      desc: "Native UI appearance.",
      css: "appearance: none;",
      demo: `<input style="appearance:none;padding:6px;border:1px solid #ddd;" placeholder="appearance:none" />`
    },
    "filter-origin": {
      title: "filter-origin",
      desc: "Where filter is applied (experimental).",
      css: "filter-origin: border-box;",
      demo: `<div style="padding:6px;background:#fff;border:1px solid #ddd;">Filter origin demo (browser dependent)</div>`
    },

    /* -------------------------
       ACCESSIBILITY & PRINT / AT-RULES (NOTE)
       ------------------------- */
    "@media": {
      title: "@media",
      desc: "Media queries (use in CSS files).",
      css: "@media (max-width:600px){ /* rules */ }",
      demo: `<div>Use @media in stylesheet</div>`
    },
    "@supports": {
      title: "@supports",
      desc: "Feature queries (CSS).",
      css: "@supports (display:grid){ /* rules */ }",
      demo: `<div>Use @supports in stylesheet</div>`
    },

    /* -------------------------
       ADDITIONAL COMMON PROPERTIES
       ------------------------- */
    "list-style": {
      title: "list-style",
      desc: "Shorthand for list-style properties.",
      css: "list-style: disc inside;",
      demo: `<ul style="list-style:disc inside;"><li>Item</li><li>Item</li></ul>`
    },
    "overflow-wrap": {
      title: "overflow-wrap",
      desc: "Wrap long words.",
      css: "overflow-wrap: break-word;",
      demo: `<div style="width:120px;border:1px solid #ddd;overflow-wrap:break-word;">averyveryveryverylongwordthatwillwrap</div>`
    },
    "word-break": {
      title: "word-break",
      desc: "How to break words.",
      css: "word-break: break-all;",
      demo: `<div style="width:120px;border:1px solid #ddd;word-break:break-all;">averyveryveryverylongword</div>`
    },
    "isolation": {
      title: "isolation",
      desc: "Create stacking context isolation.",
      css: "isolation: isolate;",
      demo: `<div style="isolation:isolate;padding:6px;background:#fff;border:1px solid #eee;">Isolation</div>`
    },
    "backface-visibility": {
      title: "backface-visibility",
      desc: "Show/hide back face of transformed elements.",
      css: "backface-visibility: hidden;",
      demo: `<div style="transform:rotateY(180deg);backface-visibility:hidden;">Backface</div>`
    },

    /* -------------------------
       RESPONSIVE / PRINT HELPERS (placeholders)
       ------------------------- */
    "min-height": {
      title: "min-height",
      desc: "Minimum height.",
      css: "min-height: 40px;",
      demo: `<div style="min-height:40px;background:#f8fafc;padding:6px;">Min height</div>`
    },
    "max-height": {
      title: "max-height",
      desc: "Maximum height.",
      css: "max-height: 80px;overflow:auto;",
      demo: `<div style="max-height:80px;overflow:auto;border:1px solid #ddd;">Long<br/>content<br/>here</div>`
    },

    /* -------------------------
       MORE PROPERTIES (useful list)
       ------------------------- */
    "pointer-events-none": {
      // helper key to illustrate pointer-events none
      title: "pointer-events: none",
      desc: "Disable pointer events.",
      css: "pointer-events: none;",
      demo: `<div style="pointer-events:none;padding:6px;background:#fff;border:1px solid #ddd;">No pointer</div>`
    },
    "mix-blend": {
      title: "mix-blend-mode (alias)",
      desc: "Blend modes.",
      css: "mix-blend-mode: screen;",
      demo: `<div style="background:#111;color:#fff;padding:6px;"><span style="mix-blend-mode:screen;background:#f97316;padding:6px;display:inline-block;">Blend</span></div>`
    },
    "filter-grayscale": {
      title: "filter: grayscale",
      desc: "Grayscale filter example.",
      css: "filter: grayscale(100%);",
      demo: `<img src="https://via.placeholder.com/80" style="filter:grayscale(100%);" alt="g" />`
    },
    "scroll-behavior": {
      title: "scroll-behavior",
      desc: "Smooth or auto scrolling.",
      css: "scroll-behavior: smooth;",
      demo: `<div style="height:60px;overflow:auto;scroll-behavior:smooth;"><a href='#'>anchor</a><div style="height:300px"></div></div>`
    },
    "object-fit": {
      title: "object-fit",
      desc: "How replaced content like <img> fits.",
      css: "object-fit: cover;",
      demo: `<img src="https://via.placeholder.com/120x80" style="width:120px;height:80px;object-fit:cover;" />`
    },
    "object-position": {
      title: "object-position",
      desc: "Position inside replaced element.",
      css: "object-position: center center;",
      demo: `<img src="https://via.placeholder.com/120x80" style="width:120px;height:80px;object-fit:cover;object-position:center;" />`
    },

    /* -------------------------
       UTILITY / SHORTHANDS (examples)
       ------------------------- */
    "shorthand-padding": {
      title: "padding (shorthand)",
      desc: "padding: top right bottom left",
      css: "padding: 8px 12px 8px 12px;",
      demo: `<div style="padding:8px 12px 8px 12px;background:#fff;border:1px solid #ddd;">Shorthand padding</div>`
    },
    "shorthand-margin": {
      title: "margin (shorthand)",
      desc: "margin: top right bottom left",
      css: "margin:8px 12px 8px 12px;",
      demo: `<div style="margin:8px 12px 8px 12px;background:#fff;border:1px solid #ddd;">Shorthand margin</div>`
    },

    /* -------------------------
       LAST-FEW (less common but useful)
       ------------------------- */
    "scroll-snap-type": {
      title: "scroll-snap-type",
      desc: "Control snapping for scroll containers.",
      css: "scroll-snap-type: x mandatory;",
      demo: `<div style="display:flex;overflow:auto;scroll-snap-type:x mandatory;width:200px;"><div style="scroll-snap-align:start;min-width:200px;background:#e2f0cb;padding:14px;">1</div><div style="scroll-snap-align:start;min-width:200px;background:#c7f0ff;padding:14px;">2</div></div>`
    },
    "scroll-snap-align": {
      title: "scroll-snap-align",
      desc: "Element snap alignment.",
      css: "scroll-snap-align: start;",
      demo: `<div style="min-width:200px;scroll-snap-align:start;">Snap align</div>`
    }
  };

  // -------------------------
  // Note: The object above includes many common properties.
  // If you want more (every single CSS property), I can extend further.
  // -------------------------

  const runDemo = (key) => {
    // Safeguard: if key not found, ignore
    if (!cssProperties[key]) return;
    setOutput(cssProperties[key]);
    setAppliedCSS({});
    setCustomCSS("");
  };

  const applyCustomCSS = () => {
    // Convert user CSS into object
    const styleObj = {};
    customCSS.split(";").forEach((rule) => {
      const [prop, val] = rule.split(":");
      if (prop && val) {
        // Convert kebab-case to camelCased JS style keys for React inline style
        const jsProp = prop
          .trim()
          .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        // Try to coerce numeric values where appropriate (but keep strings too)
        const value = val.trim();
        styleObj[jsProp] = /^\d+$/.test(value) ? Number(value) : value;
      }
    });
    setAppliedCSS(styleObj);
  };

  return (
    <>
      <div className="navbar" style={{ padding: 12, fontWeight: 700 }}>
        CSS PLAYGROUND
      </div>

      <div className="wrapper" style={{ display: "flex", gap: 16 }}>
        {/* LEFT SIDEBAR */}
        <div
          className="sidebar-left"
          style={{
            width: 320,
            maxHeight: "80vh",
            overflow: "auto",
            padding: 12,
            borderRight: "1px solid #eee"
          }}
        >
          {/* Dynamically render categories by grouping keys */}
          <div className="section">
            <h2>Text & Typography</h2>
            <div className="content-box">
              {[
                "color",
                "font-size",
                "font-weight",
                "font-family",
                "font-style",
                "line-height",
                "letter-spacing",
                "word-spacing",
                "text-align",
                "text-transform",
                "text-decoration",
                "text-shadow",
                "white-space",
                "text-overflow",
                "text-indent",
                "direction",
                "vertical-align"
              ].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Box Model</h2>
            <div className="content-box">
              {[
                "margin",
                "margin-top",
                "padding",
                "padding-left",
                "width",
                "height",
                "min-width",
                "max-width",
                "box-sizing"
              ].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Background</h2>
            <div className="content-box">
              {["background", "background-color", "background-image", "background-size", "background-position"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Border & Shadow</h2>
            <div className="content-box">
              {["border", "border-radius", "border-width", "border-style", "outline", "box-shadow"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Layout & Position</h2>
            <div className="content-box">
              {["display", "visibility", "opacity", "position", "top", "left", "z-index", "float", "clear"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Overflow & Clip</h2>
            <div className="content-box">
              {["overflow", "overflow-x", "overflow-y", "clip-path"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Flexbox</h2>
            <div className="content-box">
              {["flex", "flex-direction", "flex-wrap", "justify-content", "align-items", "gap"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Grid</h2>
            <div className="content-box">
              {["display-grid", "grid-template-columns", "grid-gap", "grid-area"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Transform & Animation</h2>
            <div className="content-box">
              {["transform", "transform-origin", "transition", "transition-duration", "animation"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Filters & Blend</h2>
            <div className="content-box">
              {["filter", "backdrop-filter", "mix-blend-mode"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Interaction</h2>
            <div className="content-box">
              {["cursor", "pointer-events", "user-select", "resize", "caret-color"].map((k) => (
                <div key={k} className="method" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{k}</span>
                  <button onClick={() => runDemo(k)}>Run</button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <small>Tip: use the textbox on the right to try custom CSS (kebab-case).</small>
          </div>
        </div>

        {/* RIGHT OUTPUT PANEL */}
        <div className="output-panel" style={{ flex: 1, padding: 12 }}>
          <h2>Output / Result Panel</h2>

          {!output ? (
            <p>Select a CSS property from the left and click <strong>Run</strong>.</p>
          ) : (
            <>
              <div className="output-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>{output.title}</h3>
                <button className="clear-btn" onClick={() => setOutput(null)}>Clear</button>
              </div>

              <p className="output-desc">{output.desc}</p>

              <h4>Demo Preview</h4>
              <div
                className="preview-box"
                style={{ padding: 8, border: "1px solid #eee", marginBottom: 8 }}
                dangerouslySetInnerHTML={{ __html: output.demo }}
              />

              <h4>CSS Code</h4>
              <pre className="code-box" style={{ background: "#f8fafc", padding: 8 }}>{output.css}</pre>

              <h4>Try Custom CSS</h4>
              <textarea
                className="css-editor"
                placeholder="Type CSS here... e.g. color: yellow; padding: 10px;"
                value={customCSS}
                onChange={(e) => setCustomCSS(e.target.value)}
                style={{ width: "100%", minHeight: 80, marginBottom: 8 }}
              />

              <button className="apply-btn" onClick={applyCustomCSS}>
                Apply CSS
              </button>

              <div className="preview-box" style={{ marginTop: 12, padding: 12, border: "1px dashed #ddd", ...appliedCSS }}>
                Custom CSS Preview Box
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Working;
