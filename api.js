import config from './config';

const api = {
    // Auth endpoints
    register: async (userData) => {
        const response = await fetch(`${config.apiUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    },

    login: async (credentials) => {
        const response = await fetch(`${config.apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    },

    // Expense endpoints
    logExpense: async (expenseData, token) => {
        const response = await fetch(`${config.apiUrl}/expense/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(expenseData),
        });
        return response.json();
    },

    getExpenses: async (userId, token) => {
        const response = await fetch(`${config.apiUrl}/expense/expenses/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    },

    // Budget endpoints
    setBudget: async (budgetData, token) => {
        const response = await fetch(`${config.apiUrl}/budget/set-budget`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(budgetData),
        });
        return response.json();
    },

    // Alert endpoints
    createAlert: async (alertData, token) => {
        const response = await fetch(`${config.apiUrl}/alert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(alertData),
        });
        return response.json();
    },
};

export default api; 