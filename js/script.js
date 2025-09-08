document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => {
            i.classList.remove('active');
        });
        
        this.classList.add('active');
        
        const pageTitle = this.querySelector('.nav-text').textContent;
        document.getElementById('pageTitle').textContent = pageTitle;
        
        const pageId = this.getAttribute('data-page');
        loadPageContent(pageId);
    });
});

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('hidden');
});

document.addEventListener('click', function(e) {
    if (e.target.closest('.btn') && e.target.closest('.btn').textContent.includes('Копировать')) {
        const code = e.target.closest('.referral-code').querySelector('.code-text').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = e.target.closest('.btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> Копировать';
            }, 2000);
        });
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        e.target.classList.toggle('completed');
        updateProgressBar();
    }
});

function updateProgressBar() {
    const totalTasks = document.querySelectorAll('.task-checkbox').length;
    const completedTasks = document.querySelectorAll('.task-checkbox.completed').length;
    const percentage = (completedTasks / totalTasks) * 100;
    
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
        
        const progressText = document.querySelector('.progress-text span:last-child');
        if (progressText) {
            progressText.textContent = Math.round(percentage) + '%';
        }
    }
}

function loadPageContent(pageId) {
    const pageContainer = document.getElementById('page-content-container');
    
   function loadPageContent(pageId) {
    const pageContainer = document.getElementById('page-content-container');
    
    switch(pageId) {
        case 'dashboard':
            pageContainer.innerHTML = getDashboardContent();
            break;
        case 'about':
            pageContainer.innerHTML = getAboutContent();
            break;
        case 'technology':
            pageContainer.innerHTML = getTechnologyContent();
            break;
        case 'tokenomics':
            pageContainer.innerHTML = getTokenomicsContent();
            break;
        case 'airdrop':
            pageContainer.innerHTML = getAirdropContent();
            break;
        case 'modules':
            pageContainer.innerHTML = getModulesContent();
            break;
        case 'roadmap':
            pageContainer.innerHTML = getRoadmapContent();
            break;
        case 'faq':
            pageContainer.innerHTML = getFaqContent();
            break;
        default:
            pageContainer.innerHTML = `<div class="card"><div class="card-title"><i class="fas fa-cog"></i>${pageId}</div><p>Содержимое страницы</p></div>`;
    }
}
    
    if (pageId === 'tasks') {
        setTimeout(() => {
            document.querySelectorAll('.task-checkbox').forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    this.classList.toggle('completed');
                    updateProgressBar();
                });
            });
        }, 100);
    }
    
    if (pageId === 'dashboard') {
        setTimeout(() => {
            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                let width = 0;
                const targetWidth = 65;
                const interval = setInterval(() => {
                    if (width >= targetWidth) {
                        clearInterval(interval);
                    } else {
                        width++;
                        progressFill.style.width = width + '%';
                    }
                }, 30);
            }
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadPageContent('dashboard');

});
case 'token':
    pageContainer.innerHTML = getTokenContent();
    break;


