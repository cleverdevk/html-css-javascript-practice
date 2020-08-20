function sleep(ms, callback){
    setTimeout(()=>callback("HI"), ms);
}
//sleep(1000, e => console.log(e));

function sleepP(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("HI"), ms);
    });
};
//sleepP(1000).then(result => console.log(result));

async function run(){
    let res;
    try{
        res = await sleepP(1000);
        console.log(res,1);

        res = await sleepP(1000);
        console.log(res,2);

        res = await sleepP(1000);
        console.log(res,3);
    }catch(err){
        console.log(err);
    }
}

run();