// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

//create a while loop
//set as a condition that it must double 16 times starting at 2

var i = 2
for (; i < 131072; i *=2){
    console.log(i);
}