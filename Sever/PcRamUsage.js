const { stat } = require('fs');
const os = require('os');

setInterval(() => {
    
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem() / 1024 / 1024;
    const Fman = freemem() / 1024 / 1024;
    const usage = (Fman / tRam)* 100;
    
    
    
    const stats ={
        Os: platform(),
        Arch: arch(),
        TotalRam:`${parseInt(tRam)} MB`,
        freeMan: `${parseInt(Fman)} MB`,
        Usage: `${usage.toFixed(2)}`, 
    };

    console.clear();
    console.table(stats);
    exports.stats = stats;
   
}, 1000);




