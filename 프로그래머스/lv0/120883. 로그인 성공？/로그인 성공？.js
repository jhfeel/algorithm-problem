function solution(id_pw, db) {
    let idDB = [];
    for(let i=0; i<db.length; i++){
        idDB.push(db[i][0]);
    }
    
    const idx = idDB.indexOf(id_pw[0]);

    if(idDB.includes(id_pw[0])){
        if(db[idx][1] === id_pw[1]){
            return 'login';
        } else {
            return 'wrong pw';   
        }
    } else {
        return 'fail';
    }
}