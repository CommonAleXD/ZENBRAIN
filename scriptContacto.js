document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = icon.getAttribute('data-tooltip');
        icon.appendChild(tooltip);
    });

    icon.addEventListener('mouseleave', () => {
        const tooltip = icon.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

