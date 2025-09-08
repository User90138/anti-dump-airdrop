function getDashboardContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-rocket"></i>
                Добро пожаловать в VexShield (VXH)!
            </div>
            <p>Инновационный токен с технологией AntiDump, который защищает инвесторов от резких обвалов цен.</p>
        </div>
        
        <div class="dashboard-grid">
            <div class="card">
                <div class="card-title"><i class="fas fa-coins"></i> Токены VXH</div>
                <div class="stat-value">0 VXH</div>
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
            
            <p>Участвуйте в airdrop и получайте токены VXH с защитой от демпинга.</p>
        </div>
    `;
}

function getAirdropContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-gift"></i>
                VXH Airdrop программа
            </div>
            
            <div class="info-block">
                <h3>🎁 Участвуй в Airdrop</h3>
                <p><strong>Получите до 5,000 VXH</strong> за выполнение простых заданий и станьте частью сообщества.</p>
                <p><strong>30% от аирдропа</strong> автоматически уходит в пул ликвидности для поддержки цены.</p>
            </div>
            
            <div class="airdrop-card">
                <div class="airdrop-icon">
                    <i class="fas fa-gift"></i>
                </div>
                <div class="airdrop-info">
                    <h2 class="airdrop-title">VexShield Airdrop</h2>
                    <p class="airdrop-desc">Распространение токенов VXH с защитой от дампа и бонусами для ранних участников.</p>
                    <button class="btn"><i class="fas fa-play-circle"></i> Присоединиться к Airdrop</button>
                </div>
            </div>
            
            <h3 style="margin: 30px 0 15px; color: var(--accent-color);">Условия защиты при продаже airdrop-токенов:</h3>
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

function getTokenContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-shield-alt"></i>
                О токене VexShield (VXH)
            </div>
            
            <div class="info-block">
                <h3>🔹 Основные параметры</h3>
                <p><strong>Название:</strong> VexShield Token</p>
                <p><strong>Тикер:</strong> VXH</p>
                <p><strong>Сеть:</strong> Binance Smart Chain (BEP-20)</p>
                <p><strong>Максимальное предложение:</strong> 1,000,000 VXH</p>
            </div>
            
            <div class="info-block">
                <h3>🎯 Назначение</h3>
                <p>VexShield Token создан для защиты инвесторов и формирования устойчивой криптоэкосистемы, где ценность токена растет вместе с активностью сообщества.</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-ban"></i></div>
                    <h3>AntiDump</h3>
                    <p>Динамическая комиссия защищает от резких обвалов цены.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-water"></i></div>
                    <h3>Auto-Liquidity</h3>
                    <p>Автоматическое пополнение ликвидности стабилизирует цену.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-fire"></i></div>
                    <h3>Burn-механизм</h3>
                    <p>Сжигание части токенов увеличивает ценность VXH.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-robot"></i></div>
                    <h3>Anti-Bot защита</h3>
                    <p>Блокировка флэш-атак и манипуляций с помощью ботов.</p>
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
                        <p>Запуск программы распределения токенов с защитой от дампинга</p>
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
function getAboutContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-info-circle"></i>
                О проекте VexShield
            </div>
            
            <div class="info-block">
                <h3>📌 О проекте</h3>
                <p><strong>VexShield (VSH)</strong> — инновационный токен с технологией <strong>AntiDump</strong>, которая защищает монеты и токены от резких падений цены. Мы создаём новый стандарт стабильности и доверия в криптомире.</p>
            </div>
        </div>
    `;
}

function getTechnologyContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-shield-alt"></i>
                Технология AntiDump
            </div>
            
            <div class="info-block">
                <h3>🔒 Технология AntiDump</h3>
                <p>Наша система защищает токены от резких падений цены через многоуровневую систему защиты.</p>
            </div>
        </div>
    `;
}

function getTokenomicsContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-chart-pie"></i>
                Токеномика VexShield
            </div>
            
            <div class="info-block">
                <h3>📊 Токеномика</h3>
                <p>Общий объём: <strong>1,000,000,000 VSH</strong></p>
            </div>
        </div>
    `;
}

function getFaqContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-question-circle"></i>
                Часто задаваемые вопросы
            </div>
            
            <div class="info-block">
                <h3>❓ FAQ</h3>
                <p>Ответы на самые популярные вопросы о VexShield</p>
            </div>
        </div>
    `;
}
