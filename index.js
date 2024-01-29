const start = Date.now();
while (Date.now() - start < 2000) {
  console.log('stalling');
}
