function paceConverter() {
  const units = document.getElementById("units").value;
  const distance = parseFloat(document.getElementById("distance").value);
  const durationHour = parseFloat(document.getElementById("duration-hours").value) || 0;
  const durationMin = parseFloat(document.getElementById("duration-mins").value) || 0;
  const durationSec = parseFloat(document.getElementById("duration-secs").value) || 0;
  
  const totalMinutes = (durationHour * 60) + durationMin + (durationSec / 60);
  let pace;

  if (units === "Mi") {
    pace = totalMinutes / distance;
  } else if (units === "Km") {
    pace = totalMinutes / distance;
  }

  let formattedPace;

  if (pace >= 60) {
    const hours = Math.floor(pace / 60);
    const minutes = Math.floor(pace % 60);
    const seconds = Math.floor((pace % 1) * 60);
    formattedPace = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    formattedPace = `${Math.floor(pace)}:${Math.floor((pace % 1) * 60).toString().padStart(2, '0')}`;

  }
  document.getElementById("pace").value = formattedPace + ` /${units}`;
}

function numbersOnly(input) {
  input.value = input.value.replace(/[^0-9.]/g, '');
}

const raceSelect = document.getElementById("races");
let distanceInput = document.getElementById("distance");

raceSelect.addEventListener("change", function () {
  switch (raceSelect.value) {
    case "5k":
      distanceInput.value = "3.106";
      break;
    case "8k":
      distanceInput.value = "4.971";
      break;
    case "10k":
      distanceInput.value = "6.213";
      break;
    case "half-marathon":
      distanceInput.value = "13.109";
      break;
    case "marathon":
      distanceInput.value = "26.219";
      break;
    default:
      distanceInput.value = "";
  }
});