// JavaScript functions for handling form actions and modal

function showOpenAccount() {
    document.getElementById('screen-content').innerHTML = `
        <h2 style="color: white;">Open Account</h2>
        <form id="openAccountForm">
            <input type="text" id="accnum" placeholder="Account Number" required><br>
            <input type="text" id="acctype" placeholder="Account Type" required><br>
            <input type="text" id="name" placeholder="Name" required><br>
            <input type="number" id="balance" placeholder="Balance" required><br>
            <button type="button" onclick="openAccount()">Submit</button>
            <button type="button" onclick="showMainMenu()">Back</button>
        </form>
    `;
}

function openAccount() {
    const accnum = document.getElementById('accnum').value;
    const acctype = document.getElementById('acctype').value;
    const name = document.getElementById('name').value;
    const balance = document.getElementById('balance').value;

    if (accnum && acctype && name && balance) {
        fetch('/api/open', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ accnum, acctype, name, balance })
        })
        .then(response => response.json())
        .then(data => showMessage('Account opened successfully!'))
        .catch(error => showMessage('Error opening account: ' + error));
    } else {
        showMessage('All fields are required!');
    }
}

function showDeposit() {
    document.getElementById('screen-content').innerHTML = `
        <h2 style="color: white;">Deposit</h2>
        <form id="depositForm">
            <input type="text" id="depositAccnum" placeholder="Account Number" required><br>
            <input type="number" id="depositAmount" placeholder="Amount" required><br>
            <button type="button" onclick="deposit()">Submit</button>
            <button type="button" onclick="showMainMenu()">Back</button>
        </form>
    `;
}

function deposit() {
    const accnum = document.getElementById('depositAccnum').value;
    const amount = document.getElementById('depositAmount').value;

    if (accnum && amount) {
        fetch(`/api/deposit/${accnum}?amount=${amount}`, {
            method: 'PUT'
        })
        .then(response => response.json())
        .then(data => showMessage('Deposit successful!'))
        .catch(error => showMessage('Error during deposit: ' + error));
    } else {
        showMessage('All fields are required!');
    }
}

function showWithdraw() {
    document.getElementById('screen-content').innerHTML = `
        <h2 style="color: white;">Withdraw</h2>
        <form id="withdrawForm">
            <input type="text" id="withdrawAccnum" placeholder="Account Number" required><br>
            <input type="number" id="withdrawAmount" placeholder="Amount" required><br>
            <button type="button" onclick="withdraw()">Submit</button>
            <button type="button" onclick="showMainMenu()">Back</button>
        </form>
    `;
}

function withdraw() {
    const accnum = document.getElementById('withdrawAccnum').value;
    const amount = document.getElementById('withdrawAmount').value;

    if (accnum && amount) {
        fetch(`/api/withdraw/${accnum}?amount=${amount}`, {
            method: 'PUT'
        })
        .then(response => response.json())
        .then(data => showMessage('Withdrawal successful!'))
        .catch(error => showMessage('Error during withdrawal: ' + error));
    } else {
        showMessage('All fields are required!');
    }
}

function showDisplay() {
    document.getElementById('screen-content').innerHTML = `
        <h2 style="color: white;">Display Account Details</h2>
        <form id="displayForm">
            <input type="text" id="displayAccnum" placeholder="Account Number" required><br>
            <button type="button" onclick="displayAccount()">Submit</button>
            <button type="button" onclick="showMainMenu()">Back</button>
        </form>
    `;
}

function displayAccount() {
    const accnum = document.getElementById('displayAccnum').value;

    if (accnum) {
        fetch(`/api/account/${accnum}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('screen-content').innerHTML = `
                <h2 style="color: white;">Account Details</h2>
                <p style="color: white;">Account Number: ${data.accnum}</p>
                <p style="color: white;">Account Type: ${data.acctype}</p>
                <p style="color: white;">Name: ${data.name}</p>
                <p style="color: white;">Balance: ${data.balance}</p>
                <button onclick="showMainMenu()">Back</button>
            `;
        })
        .catch(error => showMessage('Error retrieving account: ' + error));
    } else {
        showMessage('Account number is required!');
    }
}

function showSearch() {
    document.getElementById('screen-content').innerHTML = `
        <h2 style="color: white;">Search for Account</h2>
        <form id="searchForm">
            <input type="text" id="searchAccnum" placeholder="Account Number" required><br>
            <button type="button" onclick="searchAccount()">Submit</button>
            <button type="button" onclick="showMainMenu()">Back</button>
        </form>
    `;
}

function searchAccount() {
    const accnum = document.getElementById('searchAccnum').value;

    if (accnum) {
        fetch(`/api/account/${accnum}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('screen-content').innerHTML = `
                <h2 style="color: white;">Account Details</h2>
                <p style="color: white;">Account Number: ${data.accnum}</p>
                <p style="color: white;">Account Type: ${data.acctype}</p>
                <p style="color: white;">Name: ${data.name}</p>
                <p style="color: white;">Balance: ${data.balance}</p>
                <button onclick="showMainMenu()">Back</button>
            `;
        })
        .catch(error => showMessage('Error retrieving account: ' + error));
    } else {
        showMessage('Account number is required!');
    }
}

function showMessage(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showMainMenu() {
    document.getElementById('screen-content').innerHTML = `
        <h1 style="color: white;">Welcome to ATM</h1>
        <button onclick="showOpenAccount()">Open Account</button>
        <button onclick="showDeposit()">Deposit</button>
        <button onclick="showWithdraw()">Withdraw</button>
        <button onclick="showDisplay()">Display Account Details</button>
        <button onclick="showSearch()">Search for Account</button>
    `;
}
