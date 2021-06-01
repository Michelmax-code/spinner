process.stdout.write('hello from spinner1.js...\rheyyy\n');

let spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r*   ', '\r$   ', '\r?   ', '\r#   ']
let seconds = 100;

for (let spin of spinners) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, seconds)
  seconds += 200;
}


