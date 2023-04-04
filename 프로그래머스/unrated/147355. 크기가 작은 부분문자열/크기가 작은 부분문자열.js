function solution(t, p) {
    const pl = p.length;
    return t = [...t]
        .map((v, i) => t.slice(i, i+pl))
        .filter(v => v.length === pl)
        .map(v => Number(v))
        .filter(v => v <= Number(p))
        .length
}