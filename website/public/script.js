document.getElementById('fetchGreeting').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/greeting');
        const data = await response.json();
        document.getElementById('greeting').textContent = data.message;
    } catch (error) {
        console.error('Error fetching greeting:', error);
    }
});