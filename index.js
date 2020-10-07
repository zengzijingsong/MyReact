const MyReact={};

MyReact.createElement=function(){
    console.log(arguments);
}

let element=<h1>Hello world</h1>