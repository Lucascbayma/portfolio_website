function update_hour() {
  const now= new Date();
  const hour= now.toLocaleTimeString();
  document.getElementById("clock").textContent= hour;
}

setInterval(update_hour, 1000);
update_hour();
