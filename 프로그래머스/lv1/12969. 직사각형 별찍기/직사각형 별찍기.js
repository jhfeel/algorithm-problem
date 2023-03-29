process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const int = data.split(" ");
    const n = Number(int[0]), m = Number(int[1]);
    const result = ("*".repeat(n) + '\n').repeat(m-1) + "*".repeat(n);
    
    console.log(result);
});