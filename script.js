async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const alertsList = document.getElementById("alertsList");
    const suggestionsList = document.getElementById("suggestionsList");

    alertsList.innerHTML = "";
    data.alerts.forEach(a => {
        const li = document.createElement("li");
        li.textContent = `${a.type} – ${a.message}`;
        alertsList.appendChild(li);
    });

    suggestionsList.innerHTML = "";
    data.suggestions.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        suggestionsList.appendChild(li);
    });

    document.getElementById("idAlert").checked = data.settings.id;
    document.getElementById("passportAlert").checked = data.settings.passport;
    document.getElementById("carAlert").checked = data.settings.car;
}

loadData();
