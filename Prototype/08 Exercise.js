// convert the instance methods of stopwatch exercise to prototype methods
// making instance methods to prototype methods is an optimization technique

// but here this technique does not help as it is causing harm to the abstraction of the Stopwatch constructor as anybody can now modify duration and all the data members are exposed 

function Stopwatch() {
    let startTime, endTime, running, duration = 0;


    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: (value) => { duration = value; }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; },
        set: (value) => { startTime = value; }
    })
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; },
        set: (value) => { endTime = value; }
    })
    Object.defineProperty(this, 'running', {
        get: function () { return running; },
        set: (value) => { running = value; }
    })
}

Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch is already started');

    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started');

    this.running = false;

    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

const obj = new Stopwatch();
// console.log(obj.duration());