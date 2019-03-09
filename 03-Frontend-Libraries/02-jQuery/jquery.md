# Introduction to jQuery

jQuery is one of the many libraries for JavaScript. It is designed to simplify scripting done on the client side. jQuery's most recognizable characteristic is its dollar sign (`$`) syntax. With it, you can easily manipulate elements, create animations and handle input events.

## Learn How Script Tags and Document Ready Work

```html
<script>
  // prepare document
  $(document).ready(function() {});
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

```js
$(document).ready(function() {
  //Target HTML Elements with Selectors Using jQuery
  // grab buttons
  // add class, animated and bounce
  $("button").addClass("animated bounce");

  // Target Elements by Class Using jQuery
  $(".well").addClass("animated shake");

  // Target Elements by id Using jQuery
  $("#target3").addClass("animated fadeout");
});
```

`.addClass()` function, which allows you to add classes to elements.

## Delete Your jQuery Functions

```js
$(document).ready(function() {
  // Target the Same Element with Multiple jQuery Selectors
  $("button").addClass("animated");
  $(".btn").addClass("shake");
  // $("#target1").addClass("btn-primary");

  // Remove Classes from an Element with jQuery
  $("button").removeClass("btn-primary");

  // Change the CSS of an Element Using jQuery
  $("#target1").css("color", "red");

  // Disable an Element Using jQuery
  $("#target1").prop("disabled", true);

  // Change Text Inside an Element Using jQuery
  $("h3").html("<em>jQuery Playground</em>");

  // Remove an Element Using jQuery
  $("#target4").remove();

  // Use appendTo to Moive Elements with jQuery
  $("#target2").appendTo("#right-well");

  // Clone an Element Using jQuery
  $("#target5")
    .clone()
    .appendTo("#left-well");

  // Target the Parent of an Element Using jQuery
  $("#target1")
    .parent()
    .css("background-color", "red");

  // Target the Children of an Element Using jQuery
  $("#right-well")
    .children()
    .css("color", "orange");

  // Target a Specific Child of an Element Using jQuery
  $(".target:nth-child(2)").addClass("animated bounce");

  // Target Even Elements Using jQuery
  $(".target:even").addClass("animated shake");

  // Use jQuery to Modify the Entire Page
  $("body").addClass("animated hinge");
});
```
