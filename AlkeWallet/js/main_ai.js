/* Main Script for AlkeWallet */
console.log('AlkeWallet Loaded');

document.addEventListener('DOMContentLoaded', function() {
    
    // --- constants ---
    const DEFAULT_BALANCE = 767680;
    const DEFAULT_TRANSACTIONS = [
        { id: 1, type: 'send', title: 'Services', date: '21 Jan, 2026', amount: 121360, icon: 'bi-lightning-charge-fill', color: 'text-warning' },
        { id: 2, type: 'send', title: 'Groceries', date: '19 Jan, 2026', amount: 245290, icon: 'bi-cart-fill', color: 'text-info' },
        { id: 3, type: 'receive', title: 'Funds Received', date: '01 Jan, 2026', amount: 700000, icon: 'bi-arrow-down-left-circle-fill', color: 'text-success' }
    ];

    // --- Helper Functions ---
    
    // Get Balance
    function getBalance() {
        const stored = localStorage.getItem('totalBalance');
        return stored ? parseFloat(stored) : DEFAULT_BALANCE;
    }

    // Set Balance
    function setBalance(amount) {
        localStorage.setItem('totalBalance', amount);
    }

    // Get Transactions
    function getTransactions() {
        const stored = localStorage.getItem('transactions');
        return stored ? JSON.parse(stored) : DEFAULT_TRANSACTIONS;
    }

    // Add Transaction
    function addTransaction(type, title, amount) {
        const transactions = getTransactions();
        const newTx = {
            id: Date.now(),
            type: type,
            title: title,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            amount: amount,
            icon: type === 'receive' ? 'bi-arrow-down-left-circle-fill' : 'bi-send-fill',
            color: type === 'receive' ? 'text-success' : 'text-danger'
        };
        transactions.unshift(newTx); // Add to beginning
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // Format Currency
    function formatCurrency(amount) {
        return '$' + amount.toLocaleString('en-US');
    }

    // --- Login Logic ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const email = document.getElementById('emailInput').value;
            const name = email.split('@')[0];
            const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'User';
            
            localStorage.setItem('userName', formattedName);
            // Init data if missing
            if (!localStorage.getItem('totalBalance')) setBalance(DEFAULT_BALANCE);
            if (!localStorage.getItem('transactions')) localStorage.setItem('transactions', JSON.stringify(DEFAULT_TRANSACTIONS));
            
            window.location.href = 'menu.html';
        });
    }

    // --- Dashboard Logic (Reference: menu.html) ---
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        const storedName = localStorage.getItem('userName');
        if (storedName) userNameElement.textContent = storedName;
    }

    const userBalanceElement = document.getElementById('userBalance');
    if (userBalanceElement) {
        const currentBalance = getBalance();
        userBalanceElement.textContent = formatCurrency(currentBalance);
    }

    // --- Deposit Logic ---
    const depositForm = document.getElementById('depositForm');
    if (depositForm) {
        const depositInput = document.getElementById('depositAmount');
        
        depositForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = parseFloat(depositInput.value);

            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount');
                return;
            }

            const current = getBalance();
            setBalance(current + amount);
            addTransaction('receive', 'Deposit', amount);
            
            alert(`Deposit of ${formatCurrency(amount)} successful!`);
            window.location.href = 'menu.html';
        });

        // Quick Amount Buttons
        const quickButtons = document.querySelectorAll('.btn-quick-amount');
        quickButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const val = this.textContent.replace('$','');
                depositInput.value = val;
            });
        });
    }

    // --- Send Money Logic ---
    const sendMoneyForm = document.getElementById('sendMoneyForm');
    if (sendMoneyForm) {
        sendMoneyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const recipient = document.getElementById('recipientInput').value;
            const amount = parseFloat(document.getElementById('sendAmount').value);
            const current = getBalance();

            if (isNaN(amount) || amount <= 0) return alert('Please enter a valid amount');
            if (amount > current) return alert('Insufficient funds!');

            setBalance(current - amount);
            addTransaction('send', `Sent to ${recipient}`, amount);

            alert(`Sent ${formatCurrency(amount)} to ${recipient} successfully!`);
            window.location.href = 'menu.html';
        });
    }

    // --- Transaction List Logic ---
    const transactionList = document.querySelector('.transaction-list');
    if (transactionList) {
        const transactions = getTransactions();
        transactionList.innerHTML = ''; // Clear static content

        transactions.forEach(tx => {
            const isNegative = tx.type === 'send';
            const sign = isNegative ? '-' : '+';
            const amountClass = isNegative ? 'negative' : 'positive';
            
            const html = `
            <div class="transaction-item">
                <div class="t-icon">
                    <i class="bi ${tx.icon} ${tx.color}"></i>
                </div>
                <div class="t-details">
                    <span class="t-title">${tx.title}</span>
                    <span class="t-date">${tx.date}</span>
                </div>
                <div class="t-amount ${amountClass}">${sign}${formatCurrency(tx.amount)}</div>
            </div>`;
            
            transactionList.innerHTML += html;
        });
    }
});
