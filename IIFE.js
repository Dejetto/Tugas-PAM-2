var myVar = (function closureInsideIIFE() { 
    var x = 20;
    function add(num) {
       x = x + num;
    }
    return {
       publicMethod: function(num) {
          add(num);
          console.log(x);
       }
    }
})()

myVar.publicMethod(5); // 25