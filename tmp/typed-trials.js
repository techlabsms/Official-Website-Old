<style type="text/css">
        .typed-cursor{
          opacity: 1;
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
          -webkit-animation: 0;
                  animation: 0;
        }
</style>
      
<div class="type-wrap">
    <div id="typed-strings" style="display: none;">
      <span>Typed.js^10 is a <strong>JavaScript</strong> library.</span>
      <p>It <em>types</em> out sentences.</p>
      <p>And then deletes them.</p>
      <p>Try it out!</p>
    </div>
    <span id="typed" style="white-space:pre;">Try it out!</span><span class="typed-cursor" style="animation-iteration-count: infinite;">|</span>
</div>
  
  
  <span class="typed-cursor" style="animation-iteration-count: 0;">|</span>

<script>
  var typed = new Typed('.element', {
    stringsElement: '#typed-strings'
  });
</script>

<div id="typed-strings">
    <p>Typed.js is a <strong>JavaScript</strong> library.</p>
    <p>It <em>types</em> out sentences.</p>
</div>
<span id="typed"></span>

<script>
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
</script>