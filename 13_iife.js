// immediately invoked function expression


(
    function chai(){
        console.log(`db connected `)
    }
)(); // this is named immediately invoked function

//--------------------------------------------------------------

(
    () => {
        console.log(`through arrow function `)
    }
)();