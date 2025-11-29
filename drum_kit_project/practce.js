function a(){
    var k=90;
    b(); 
    function b(){
        console.log(k);
    }
}
var ab=110;
a();
console.log(ab);