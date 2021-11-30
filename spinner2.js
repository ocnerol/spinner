let delay = 100
const spinnerCharacters = ['|', '/', '—', '\\', '|', '/', '—', '\\', '|'];

for (let i = 0; i < spinnerCharacters.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerCharacters[i]}   `);
    if (i === (spinnerCharacters.length - 1)) {
      process.stdout.write(`\n`)
    }
  }, delay);

  delay += 200;

};
