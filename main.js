//creating a function for StopWatch 
//in console.log-> create var for stopwatch 
//and instantiate new StopWatch()
function StopWatch(){

    //declare initial value for all variables in equation.
    let startTime, endTime, running, display = 0

    //create methods that reflect all variables.
    this.start = function(){
        //start= the start of running
        //create a console.log error when multiple starts are inputted
        if(running){
            //have fun with the message, you're developing this program.
            //throw new Error('')
            throw new Error('Chill shorty hasbeen you already started the stopwatch')
        }
        running= true;
        //running will switch to false when sw has been stopped

        //reassign startTime var to date method by instantiating (?)object(?)
        startTime= new Date()
        //is Date() prototype of a String? Wow,..
    }
    this.stop = function(){
        //stop === not runnning 
        if(!running){
            //Throw Them a New Error//**Throw them a new error */
            //when you throw em a new Error, get jiggy widdit
            //Throw a new Error widdit **
            throw new Error('start it before you stop it, like damn, she in ha mood.')
        }
        running= false
        //instantiating end date 
        endTime= new Date();
        //endTime now has the inherited .getTime() method
        //.getTime() will return milliseconds, divide product by 1,000
        //create var to store info
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        //declare display that adds stored value to display
        display += seconds
    }
    //create a new method for reset
    this.reset = function(){
       startTime= null;
       endTime= null;
       running= false;
       display= 0;
    }
    Object.defineProperty(this, 'display', {

        //why is it get and not set?
        get: function(){
            return display
        }
    })
}






// function Stopwatch(){
//     let startTime, endTime, running, display = 0;

//     this.start = function(){
//         if(running)
//             throw new Error('Stopwatch has already started.');
        
//         running = true;
        
//         startTime = new Date();

//     }

//     this.stop = function(){
//         if (!running)
//             throw new Error('Stopwatch is not started.');
        
//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         display += seconds;
//     }

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         display = 0; 
//     }

//     Object.defineProperty(this, 'display', {
//         get: function() { return display; }
//     })    

    

// }

