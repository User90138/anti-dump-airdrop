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