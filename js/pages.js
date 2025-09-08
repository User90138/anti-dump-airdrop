function getDashboardContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-rocket"></i>
                Добро пожаловать в VexShield (VSH)!
            </div>
            <p>Инновационный токен с технологией AntiDump, которая защищает от резких падений цены.</p>
        </div>
        
        <div class="dashboard-grid">
            <div class="card">
                <div class="card-title"><i class="fas fa-coins"></i> Токены VSH</div>
                <div class="stat-value">0 VSH</div>
                <div class="stat-label">Текущий баланс</div>
            </div>
            
            <div class="card">
                <div class="card-title"><i class="fas fa-shield-alt"></i> Защита</div>
                <div class="stat-value">Active</div>
                <div class="stat-label">AntiDump система</div>
            </div>
            
            <div class="card">
                <div class="card-title"><i class="fas fa-users"></i> Холдеры</div>
                <div class="stat-value">1,247</div>
                <div class="stat-label">Активные держатели</div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-chart-line"></i> Прогресс Airdrop</div>
            
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">
                <span>Завершено заданий</span>
                <span>65%</span>
            </div>
            
            <p>Участвуйте в airdrop и получайте токены VSH с защитой от демпинга.</p>
        </div>
    `;
}

function getAirdropContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-gift"></i>
                Airdrop программа
            </div>
            
            <div class="info-block">
                <h3>🎁 Airdrop</h3>
                <p><strong>30% от аирдропа</strong> автоматически уходит в пул ликвидности для поддержки цены.</p>
            </div>
            
            <div class="airdrop-card">
                <div class="airdrop-icon">
                    <i class="fas fa-gift"></i>
                </div>
                <div class="airdrop-info">
                    <h2 class="airdrop-title">VexShield Airdrop</h2>
                    <p class="airdrop-desc">Участвуйте в раздаче токенов VSH и получите до 5,000 токенов за выполнение заданий.</p>
                    <button class="btn"><i class="fas fa-play-circle"></i> Участвовать в Airdrop</button>
                </div>
            </div>
            
            <h3 style="margin: 30px 0 15px; color: var(--accent-color);">Условия защиты при продаже аирдроп-монет:</h3>
            <div style="background: var(--secondary-color); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>1-й день после получения</span>
                    <span style="color: var(--danger-color); font-weight: bold;">Комиссия 30%</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>2-й день после получения</span>
                    <span style="color: var(--warning-color); font-weight: bold;">Комиссия 20%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>3-й день после получения</span>
                    <span style="color: var(--success-color); font-weight: bold;">Комиссия 10%</span>
                </div>
            </div>
        </div>
    `;
}

function getModulesContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-cube"></i>
                Модули защиты
            </div>
            
            <div class="info-block">
                <h3>⚡ Модули защиты (Demo)</h3>
                <p>В демо-версии доступна базовая функциональность. Активация реальных модулей будет включаться позднее.</p>
            </div>
            
            <div class="module-demo">
                <h3>Демо-версия включает:</h3>
                <p>• 🔥 Сжигание токенов</p>
                <p>• 💸 Динамическая комиссия</p>
                <p>• 🚫 Лимит на продажи</p>
                <p>• 🔄 Buyback & Liquidity</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-fire"></i>
                    </div>
                    <h3>Сжигание токенов</h3>
                    <p>Автоматическое сжигание части комиссий для уменьшения supply</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <h3>Динамическая комиссия</h3>
                    <p>Адаптивная система комиссий в зависимости от времени</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-ban"></i>
                    </div>
                    <h3>Лимит на продажи</h3>
                    <p>Ограничение крупных продаж для защиты цены</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Buyback & Liquidity</h3>
                    <p>Автоматическое пополнение ликвидности из комиссий</p>
                </div>
            </div>
        </div>
    `;
}

function getRoadmapContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-map-marked-alt"></i>
                Дорожная карта
            </div>
            
            <div class="info-block">
                <h3>🚀 Дорожная карта</h3>
            </div>
            
            <div class="roadmap">
                <div class="roadmap-item completed">
                    <div class="roadmap-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>✅ Запуск сайта</h3>
                        <p>Создание и запуск официального сайта VexShield</p>
                    </div>
                </div>
                
                <div class="roadmap-item completed">
                    <div class="roadmap-icon">
                        <i class="fas fa-gift"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>✅ Airdrop</h3>
                        <p>Запуск программы распределения токенов с защитой от демпинга</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-id-card"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 NFT ShieldPass</h3>
                        <p>Выпуск NFT для премиум-доступа к эксклюзивным функциям</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 Интеграция с DEX & CEX</h3>
                        <p>Листинг на децентрализованных и централизованных биржах</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-link"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 Bonding-механизм</h3>
                        <p>Запуск системы бондинга для стабильного роста экосистемы</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Остальные функции оставьте без изменений (getRewardsContent, getReferralContent, getWalletContent, getSettingsContent)
// или добавьте их из предыдущей версии если нужно
