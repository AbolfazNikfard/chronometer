class cornometer {
    private _currentTime: number;
    private _duration: number;
    private _status: string;
    constructor() {
        this._duration = 0;
        this._status = "stopped";
    }
    public start() {
        if (this._status == "started")
            throw new Error("The cornometer already started");
        this._currentTime = Date.now();
        this._status = "started";
    }
    public stop() {
        if (this._status == "stopped")
        throw new Error("The cornometer already stopped");
        //this._duration+=1;
        this._duration = this._currentTime + this._duration;
        this.show();
        this._status = "stopped";
    }
    // public checkStatus() : string {
    //     if (this._status == "started")
    //     {
    //         this._duration +=1; //= this._duration + this._currentTime;
    //         //this._currentTime = Date.now();
    //     }
    //     return this.show();
    // }
    public show(){
        let minute, second, milisecond, tempDuration: number;
        tempDuration = this._duration;
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
        console.log(finalDuration);
        
        //return finalDuration;
    }
    public reset() {
        if (this._status == "started")
            this.stop();
        this._duration = 0;
    }
}
function creatCornometerDOM(list : Array<cornometer>, index: number): void {
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
    divShowTime.setAttribute("id", `showTime${index}`);
    /////////////////////////////////////////////////////////////////////
    const startBtn = document.createElement("button");
    startBtn.innerText = "Start";
    startBtn.setAttribute("id", `startBtn${index}`);
    startBtn.addEventListener("click", list[index].start);
    const stopBtn = document.createElement("button");
    stopBtn.innerText = "Stop";
    stopBtn.setAttribute("id", `stopBtn${index}`);
    stopBtn.addEventListener("click", list[index].stop);
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset";
    resetBtn.setAttribute("id", `resetBtn${index}`);
    resetBtn.addEventListener("click", list[index].reset);
    /////////////////////////////////////////////////////////////////////
    divAnyCornometer.appendChild(divShowTime);
    divAnyCornometer.appendChild(startBtn);
    divAnyCornometer.appendChild(stopBtn);
    divAnyCornometer.appendChild(resetBtn);
    document.body.appendChild(divAnyCornometer);
}
document.getElementById("addBtn")?.addEventListener("click", () => {
    const c = new cornometer();
    listofObjects.push(c);
    creatCornometerDOM(listofObjects, objectNumber);
    objectNumber++;
})
let objectNumber: number = 0;
let listofObjects: Array<cornometer> = new Array<cornometer>;
