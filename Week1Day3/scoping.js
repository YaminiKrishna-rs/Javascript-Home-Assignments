// var is function scoped
// let and const - block scoped

const browserVersion = 'Chrome'

function getBrowserVersion() {

    if (browserVersion == 'Chrome') 
        {
        var browserVersion1 = "10.22"
        let browserVersion2 = "11.22"
        console.log('Accessing var inside the block and function' ,browserVersion1);  
        console.log('Accessing let inside the block and function' ,browserVersion2);
    }
    console.log('Accessing var outside the block inside function' ,browserVersion1);  
    //console.log('Accessing let outside the block inside function' ,browserVersion2); //.... Error
    
}
getBrowserVersion()
