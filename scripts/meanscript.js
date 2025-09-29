let dataset = [];

function updateDisplay() {
    document.getElementById("dataset").textContent = "[" + dataset.join(", ") + "]";
    document.getElementById("message").textContent = ""; // clear message after success
}

function addValue() {
    let input = document.getElementById("numberInput").value.trim();
    let message = document.getElementById("message");

    if (input === "") {
        message.textContent = "Input cannot be empty. Please enter a number.";
        return;
    }

    let num = Number(input);

    if (isNaN(num)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    dataset.push(num);
    updateDisplay();
    document.getElementById("numberInput").value = "";
}

function removeValue() {
    let input = document.getElementById("numberInput").value.trim();
    let message = document.getElementById("message");

    if (input === "") {
        message.textContent = "Input cannot be empty. Please enter a number.";
        return;
    }

    let num = Number(input);

    if (isNaN(num)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    let index = dataset.indexOf(num);
    if (index === -1) {
        message.textContent = "Value not found in dataset.";
        return;
    }

    dataset.splice(index, 1);
    updateDisplay();
    document.getElementById("numberInput").value = "";
}

function computeMean() {
    let message = document.getElementById("message");

    if (dataset.length === 0) {
        document.getElementById("mean").textContent = "N/A (No values in dataset)";
        message.textContent = "Dataset is empty. Cannot compute mean.";
        return;
    }

    let sum = 0;
    for (let i = 0; i < dataset.length; i++) {
        sum += dataset[i];
    }

    let mean = sum / dataset.length;
    document.getElementById("mean").textContent = mean.toFixed(2);
    message.textContent = "";
}