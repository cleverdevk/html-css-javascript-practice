name = 500;

const kfc = {
    name : "nice",
    size : 38,
    plate : ['GA','TW','VB','AQ'],
    run(){
        console.log(name);
    },
    thisRun(){
        console.log(this.name);
    },
    arrowRun : () => {
        console.log(this.name);
    }
}

kfc.run();
kfc.thisRun();
kfc.arrowRun();