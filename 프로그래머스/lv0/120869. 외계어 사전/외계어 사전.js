function solution(spell, dic) {
    const spellSortedStr = spell.sort().join('');
    
    for(let v of dic){
        if([...v].sort().join('') === spellSortedStr){
            return 1;
        }
    }
    return 2;   
}
