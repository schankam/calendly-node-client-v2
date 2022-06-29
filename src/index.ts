import { Calendly } from './calendly';

const calendly = new Calendly('eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjU1NzE0NDM2LCJqdGkiOiIxYTE1NjI4Yy1mZWMwLTQ5NGMtOWM5OS1hNTc1ZThhZTY1ODgiLCJ1c2VyX3V1aWQiOiI5NDRlMzMxYS02NmRkLTQ0OTItOGNmOC0yZGM2ZTQxOGQ5NzAifQ.Q62tdWjly1Jp8LGD1YZ1prVpa_QgkZHOqEoEqhmMUP4');

async function main() {
  const user = await calendly.user.getCurrentUser();
  console.log(user);  
}

main();