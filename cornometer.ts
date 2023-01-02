class cornometer {
    private _currentTime: number;
    private _duration: number;
    private _status: string;
    private _intervalID : number
    constructor() {
        this._duration = 0;
        this._status = "stopped";
        this.render();
    }
    public start() {
        if (this._status == "started")
            throw new Error("The cornometer already started");
        else {
            this._currentTime = Date.now();
            this._status = "started";
        }
    }
    public stop() {
        if (this._status == "stopped")
        throw new Error("The cornometer already stopped");
        else {
            clearInterval(this._intervalID);
            this._duration = (Date.now() - this._currentTime) + this._duration;
            this._status = "stopped";
        }
    }
    public reset() {
        if (this._status == "started")
            this.stop();
        this._duration = 0;
    }
    render() {
        const divAnyCornometer = document.createElement("div");
        divAnyCornometer.style.border = "2px solid black";
        divAnyCornometer.style.width = "300px";
        divAnyCornometer.style.height = "100px";
        //////////////////////////////////////////////////////////////////////
        const divShowTime = document.createElement("div");
        divShowTime.style.border = "1px solid black";
        divShowTime.style.width = "200px";
        divShowTime.style.height = "50px";
        divShowTime.style.margin = "10px";
        //divShowTime.setAttribute("id", `showTime${index}`);
        /////////////////////////////////////////////////////////////////////
        const startBtn = document.createElement("button");
        startBtn.innerText = "Start";

        startBtn.addEventListener("click", () => {
            this.start();
            this._intervalID = setInterval(() => {
                divShowTime.innerHTML = formatTime((Date.now() - this._currentTime) + this._duration);
            }, 10)
        });
        const stopBtn = document.createElement("button");
        stopBtn.innerText = "Stop";

        stopBtn.addEventListener("click", () => {
            this.stop();
            
        });
        const resetBtn = document.createElement("button");
        resetBtn.innerText = "Reset";

        resetBtn.addEventListener("click", () => {
            this.reset();
            divShowTime.innerHTML = formatTime(this._duration);
        });
        /////////////////////////////////////////////////////////////////////
        divAnyCornometer.appendChild(divShowTime);
        divAnyCornometer.appendChild(startBtn);
        divAnyCornometer.appendChild(stopBtn);
        divAnyCornometer.appendChild(resetBtn);
        document.body.appendChild(divAnyCornometer);

    }

   
}
function formatTime(duration: number): string {
    let minute, second, milisecond, tempDuration: number;
    tempDuration = duration;
    minute = Math.floor(tempDuration / 60000);
    tempDuration %= 60000;
    second = Math.floor(tempDuration / 1000);
    milisecond = tempDuration % 1000;
    let finalMinute, finalSecond, finalMilisecond: string;
    if (Math.floor(minute / 10) == 0) {
        finalMinute = "0";
        finalMinute += minute.toString();
    }
    else
        finalMinute = minute.toString();
    if (Math.floor(second / 10) == 0) {
        finalSecond = "0";
        finalSecond += second.toString();
    }
    else
        finalSecond = second.toString();
    finalMilisecond = milisecond.toString()
    const finalDuration = finalMinute + ":" + finalSecond + "." + finalMilisecond;
    return finalDuration;
}
let time :number;
document.getElementById("addBtn")?.addEventListener("click", () => {
    new cornometer();
})
