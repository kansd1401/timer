const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beep = (time) => {
  const t = parseInt(time);
  if (t >= 0 && Number.isInteger(t)) {
    setTimeout(() => process.stdout.write('\x07'), t * 1000);
  }
};

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    beep(0);
  }
  if (parseInt(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    beep(key);
  }
});

