function giveItBackLater(value,callback) {
    setTimeout(() => {
        callback(value)
    }, 2);
}


function promiseToGiveItBackLater(value) {
    return new Promise((resolve,reject)=>{
        resolve(value)
        })
}

function addSomePromises(){

}

module.exports.giveItBackLater = giveItBackLater
module.exports.promiseToGiveItBackLater= promiseToGiveItBackLater
module.exports.addSomePromises=addSomePromises