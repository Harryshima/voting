document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-sidebar');

    // Event listener for the toggle button
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });
});
