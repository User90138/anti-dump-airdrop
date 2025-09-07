// Компоненты для повторного использования

// Создает карточку с статистикой
function createStatCard(title, value, label, icon = 'fa-coins') {
    return `
        <div class="card">
            <div class="card-title"><i class="fas ${icon}"></i> ${title}</div>
            <div class="stat-value">${value}</div>
            <div class="stat-label">${label}</div>
        </div>
    `;
}

// Создает элемент задачи
function createTaskItem(text, reward, completed = false) {
    return `
        <div class="task-item">
            <div class="task-checkbox ${completed ? 'completed' : ''}"></div>
            <div class="task-text">${text}</div>
            <div class="task-reward">+${reward} ADT</div>
        </div>
    `;
}

// Создает feature карточку
function createFeatureCard(title, description, icon = 'fa-star') {
    return `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas ${icon}"></i>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
}