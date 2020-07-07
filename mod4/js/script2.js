(function (window) {
  var goodbyegreeter = {};
  var greeting = "goodbye ";
  goodbyegreeter.saygoodbye = function (name) {
    console.log(greeting + name);
  }

  window.goodbyegreeter = goodbyegreeter;

})(window);
