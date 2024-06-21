const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const currentMode = toggleModeButton.textContent;
    const newMode = currentMode === '🌞' ? '🌜' : '🌞';
    toggleModeButton.textContent = newMode;
});