function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = () => {
        if (running)
            throw new Error('Stopwatch is already started');

        running = true;

        startTime = new Date();
    };

    this.stop = () => {
        if (!running)
            throw new Error('Stopwatch is not started');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = () => {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: () => {
            return duration;
        }
    })
}