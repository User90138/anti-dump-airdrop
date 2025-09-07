function getDashboardContent() {
    return `
        <div class="card">
            <div class="card-title">
                <i class="fas fa-rocket"></i>
                Добро пожаловать в AntiDump Tech Airdrop!
            </div>
            <p>Участвуйте в программе и получайте токены за выполнение заданий. Наша антидампинговая технология защищает стоимость токенов от резкого падения.</p>
        </div>
        
        <div class="dashboard-grid">
            <div class="card">
                <div class="card-title"><i class="fas fa-coins"></i> Токены получено</div>
                <div class="stat-value">1,250 ADT</div>
                <div class="stat-label">Текущий баланс</div>
            </div>
            
            <div class="card">
                <div class="card-title"><i class="fas fa-tasks"></i> Задания выполнено</div>
                <div class="stat-value">8/12</div>
                <div class="stat-label">Прогресс выполнения</div>
            </div>
            
            <div class="card">
                <div class="card-title"><i class="fas fa-user-friends"></i> Рефералы</div>
                <div class="stat-value">5</div>
                <div class="stat-label">Приглашенные участники</div>
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
            
            <p>Выполните все задания чтобы получить максимальное количество токенов ADT.</p>
        </div>
    `;
}

function getAirdropContent() {
    return `
        <div class="airdrop-card">
            <div class="airdrop-icon">
                <i class="fas fa-gift"></i>
            </div>
            <div class="airdrop-info">
                <h2 class="airdrop-title">AntiDump Tech Airdrop</h2>
                <p class="airdrop-desc">Участвуйте в раздаче токенов ADT и получите до 5,000 токенов за выполнение заданий.</p>
                <button class="btn"><i class="fas fa-play-circle"></i> Начать участие</button>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-info-circle"></i> Информация о Airdrop</div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-calendar"></i>
                    </div>
                    <h3>Период проведения</h3>
                    <p>1 марта - 30 апреля 2023</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <h3>Общий пул</h3>
                    <p>5,000,000 ADT</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Участников</h3>
                    <p>15,327</p>
                </div>
            </div>
        </div>
    `;
}

function getAntiDumpingContent() {
    return `
        <div class="card">
            <div class="card-title"><i class="fas fa-shield-alt"></i> Антидампинговая технология</div>
            <p>Наша уникальная технология защищает стоимость токенов от резкого падения после листинга на биржах.</p>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>Вестайдинг</h3>
                    <p>Постепенная разблокировка токенов в течение 12 месяцев</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h3>Динамическое распределение</h3>
                    <p>Умное распределение токенов между участниками</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-balance-scale"></i>
                    </div>
                    <h3>Стабильность цены</h3>
                    <p>Механизмы поддержания стоимости токенов</p>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-calculator"></i> Калькулятор вознаграждений</div>
            
            <div class="dashboard-grid">
                <div class="card">
                    <div class="stat-value">1,250 ADT</div>
                    <div class="stat-label">Текущее вознаграждение</div>
                </div>
                
                <div class="card">
                    <div class="stat-value">3,500 ADT</div>
                    <div class="stat-label">Потенциальное вознаграждение</div>
                </div>
            </div>
            
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">
                <span>Прогресс выполнения</span>
                <span>65%</span>
            </div>
        </div>
    `;
}

function getTasksContent() {
    return `
        <div class="card">
            <div class="card-title"><i class="fas fa-tasks"></i> Задания Airdrop</div>
            <p>Выполните задания чтобы получить токены ADT. Каждое задание приносит определенное количество токенов.</p>
            
            <div class="task-list">
                <div class="task-item">
                    <div class="task-checkbox completed"></div>
                    <div class="task-text">Подписаться на Twitter</div>
                    <div class="task-reward">+100 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-checkbox completed"></div>
                    <div class="task-text">Присоединиться к Telegram</div>
                    <div class="task-reward">+100 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-checkbox completed"></div>
                    <div class="task-text">Подписаться на Discord</div>
                    <div class="task-reward">+150 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-checkbox"></div>
                    <div class="task-text">Сделать ретвит</div>
                    <div class="task-reward">+50 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-checkbox"></div>
                    <div class="task-text">Пригласить 5 друзей</div>
                    <div class="task-reward">+500 ADT</div>
                </div>
            </div>
            
            <button class="btn btn-success"><i class="fas fa-check-circle"></i> Завершить все задания</button>
        </div>
    `;
}

function getRewardsContent() {
    return `
        <div class="card">
            <div class="card-title"><i class="fas fa-gift"></i> Система наград</div>
            <p>Получайте награды за активность и выполнение заданий.</p>
            
            <div class="dashboard-grid">
                <div class="card">
                    <div class="card-title"><i class="fas fa-coins"></i> Доступно для вывода</div>
                    <div class="stat-value">1,250 ADT</div>
                    <div class="stat-label">Текущий баланс</div>
                    <button class="btn" style="margin-top: 15px;"><i class="fas fa-download"></i> Вывести</button>
                </div>
                
                <div class="card">
                    <div class="card-title"><i class="fas fa-lock"></i> Заблокировано</div>
                    <div class="stat-value">3,500 ADT</div>
                    <div class="stat-label">Будет разблокировано через 30 дней</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-history"></i> История наград</div>
            
            <div class="task-list">
                <div class="task-item">
                    <div class="task-text">Задание: Подписка на Twitter</div>
                    <div class="task-reward">+100 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-text">Задание: Присоединение к Telegram</div>
                    <div class="task-reward">+100 ADT</div>
                </div>
                
                <div class="task-item">
                    <div class="task-text">Реферальная программа</div>
                    <div class="task-reward">+250 ADT</div>
                </div>
            </div>
        </div>
    `;
}

function getReferralContent() {
    return `
        <div class="card">
            <div class="card-title"><i class="fas fa-users"></i> Реферальная программа</div>
            <p>Приглашайте друзей и получайте бонусы</p>
            
            <div class="referral-code">
                <div class="code-text">https://antidump.tech/ref?code=ADT2023</div>
                <button class="btn"><i class="fas fa-copy"></i> Копировать</button>
            </div>
            
            <div class="dashboard-grid">
                <div class="card">
                    <div class="card-title"><i class="fas fa-user-plus"></i> Приглашено друзей</div>
                    <div class="stat-value">5</div>
                    <div class="stat-label">Активные рефералы</div>
                </div>
                
                <div class="card">
                    <div class="card-title"><i class="fas fa-coins"></i> Заработано</div>
                    <div class="stat-value">1,250 ADT</div>
                    <div class="stat-label">С реферальной программы</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-chart-line"></i> Статистика рефералов</div>
            
            <div class="progress-bar">
                <div class="progress-fill" style="width: 30%;"></div>
            </div>
            <div class="progress-text">
                <span>Прогресс до следующего бонуса</span>
                <span>30%</span>
            </div>
            
            <p>Пригласите еще 3 друзей чтобы получить бонус 500 ADT</p>
        </div>
    `;
}

function getWalletContent() {
    return `
        <div class="card">
            <div class="card-title"><i class="fas fa-wallet"></i> Мой кошелек</div>
            <p>Управление вашими токенами ADT</p>
            
            <div class="dashboard-grid">
                <div class="card">
                    <div class="card-title"><i class="fas fa-coins"></i> Общий баланс</div>
                    <div class="stat-value">4,750 ADT</div>
                    <div class="stat-label">Эквивалент: $237.50</div>
                </div>
                
                <div class="card">
                    <div class="card-title"><i class="fas fa-unlock"></i> Доступно</div>
                    <div class="stat-value">1,250 ADT</div>
                    <div class="stat-label">Можно вывести</div>
                </div>
                
                <div class="card">
                    <div class="card-title"><i class="fas fa-lock"></i> Заблокировано</div>
                    <div class="stat-value">3,500 ADT</div>
                    <div class="stat-label">Вестайдинг</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-title"><i class="fas fa-exchange-alt"></i> Операции</div>
            
            <div class="task-list">
                <div class="task-item">
                    <div class="task-text">Вывод токенов</div>
                    <button class="btn"><i class="fas fa-download"></i> Вывести</button>
                </div>
                
                <div class="task-item">
                    <div class="task-text">Пополнить баланс</div>
                    <button class="btn"><i class="fas fa-upload"></i> Пополнить</button>
                </div>
            </div>
        </div>
    `;
}

function getSettingsContent() {
    return `
        <div class="card">
            <div class="card-title
// ===== VEXSHIELD CONTENT - ДОБАВИТЬ В КОНЕЦ ФАЙЛА =====

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
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>Защита</h3>
                    <p>Динамическая система комиссий предотвращает резкие продажи</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Стабильность</h3>
                    <p>Поддержание цены через механизмы buyback и сжигания</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-gift"></i>
                    </div>
                    <h3>Вознаграждения</h3>
                    <p>Холдеры получают часть комиссий от транзакций</p>
                </div>
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
                <p>Наша система защищает токены от резких падений цены через многоуровневую систему защиты:</p>
            </div>
            
            <h3 style="margin: 20px 0 10px; color: var(--accent-color);">📉 Динамическая комиссия при продаже:</h3>
            <table class="commission-table">
                <tr>
                    <th>День</th>
                    <th>Комиссия</th>
                    <th>Назначение</th>
                </tr>
                <tr>
                    <td>1-й день</td>
                    <td><span style="color: var(--danger-color);">30%</span></td>
                    <td>Защита от мгновенного демпинга</td>
                </tr>
                <tr>
                    <td>2-й день</td>
                    <td><span style="color: var(--warning-color);">20%</span></td>
                    <td>Постепенное снижение защиты</td>
                </tr>
                <tr>
                    <td>3-й день</td>
                    <td><span style="color: var(--success-color);">10%</span></td>
                    <td>Стандартная защита</td>
                </tr>
            </table>
            
            <div class="features-grid" style="margin-top: 30px;">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-ban"></i>
                    </div>
                    <h3>Ограничение продаж</h3>
                    <p>🚫 <strong>Не более 0.5%</strong> от пула ликвидности в сутки</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Автоматический выкуп</h3>
                    <p>🔄 <strong>50% комиссии</strong> идёт на buyback и сжигание токенов</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-hand-holding-usd"></i>
                    </div>
                    <h3>Вознаграждение холдерам</h3>
                    <p>💰 <strong>Часть комиссий</strong> распределяется между держателями</p>
                </div>
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
            
            <div style="text-align: center; margin: 20px 0;">
                <div class="stat-value">1,000,000,000 VSH</div>
                <div class="stat-label">Общий объём эмиссии</div>
            </div>
            
            <div class="tokenomics-chart">
                <div class="chart-item" style="background: #7e57c2; flex: 30;" data-percent="30% - Airdrop">Airdrop</div>
                <div class="chart-item" style="background: #5e35b1; flex: 30;" data-percent="30% - Ликвидность">Liquidity</div>
                <div class="chart-item" style="background: #4527a0; flex: 20;" data-percent="20% - Маркетинг">Marketing</div>
                <div class="chart-item" style="background: #311b92; flex: 10;" data-percent="10% - Команда">Team</div>
                <div class="chart-item" style="background: #1a237e; flex: 10;" data-percent="10% - Резерв">Reserve</div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="padding: 15px; background: var(--secondary-color); border-radius: 8px;">
                    <div style="color: #7e57c2; font-weight: bold;">🔹 30%</div>
                    <div>Airdrop</div>
                </div>
                <div style="padding: 15px; background: var(--secondary-color); border-radius: 8px;">
                    <div style="color: #5e35b1; font-weight: bold;">🔹 30%</div>
                    <div>Ликвидность</div>
                </div>
                <div style="padding: 15px; background: var(--secondary-color); border-radius: 8px;">
                    <div style="color: #4527a0; font-weight: bold;">🔹 20%</div>
                    <div>Маркетинг и партнёрства</div>
                </div>
                <div style="padding: 15px; background: var(--secondary-color); border-radius: 8px;">
                    <div style="color: #311b92; font-weight: bold;">🔹 10%</div>
                    <div>Команда</div>
                </div>
                <div style="padding: 15px; background: var(--secondary-color); border-radius: 8px;">
                    <div style="color: #1a237e; font-weight: bold;">🔹 10%</div>
                    <div>Резерв</div>
                </div>
            </div>
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
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Защита цены</h3>
                    <p>Автоматическая стабилизация стоимости токенов</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>Безопасность</h3>
                    <p>Постепенное снижение комиссий предотвращает панику</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Стабильность</h3>
                    <p>Поддержание здоровой экономики токена</p>
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
                    <p>Автоматическое сжигание части комиссий</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <h3>Динамическая комиссия</h3>
                    <p>Адаптивная система комиссий</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-ban"></i>
                    </div>
                    <h3>Лимит на продажи</h3>
                    <p>Ограничение крупных продаж</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Buyback & Liquidity</h3>
                    <p>Автоматическое пополнение ликвидности</p>
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
                        <p>Запуск программы распределения токенов</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-id-card"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 NFT ShieldPass</h3>
                        <p>Выпуск NFT для премиум-доступа</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 Интеграция с DEX & CEX</h3>
                        <p>Листинг на биржах</p>
                    </div>
                </div>
                
                <div class="roadmap-item">
                    <div class="roadmap-icon">
                        <i class="fas fa-link"></i>
                    </div>
                    <div class="roadmap-content">
                        <h3>🔜 Bonding-механизм</h3>
                        <p>Запуск системы бондинга</p>
                    </div>
                </div>
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
            
            <div style="margin: 20px 0;">
                <div style="background: var(--secondary-color); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <h4>🤔 Что такое VexShield?</h4>
                    <p>VexShield - это токен с технологией AntiDump, защищающей от резких падений цены.</p>
                </div>
                
                <div style="background: var(--secondary-color); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <h4>💰 Как работает защита от демпинга?</h4>
                    <p>Система использует динамические комиссии: 30% в первый день, 20% во второй, 10% в третий.</p>
                </div>
                
                <div style="background: var(--secondary-color); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <h4>🎁 Как участвовать в airdrop?</h4>
                    <p>Выполняйте задания на платформе и получайте токены VSH.</p>
                </div>
            </div>
        </div>
    `;
}


