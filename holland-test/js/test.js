/**
 * 霍兰德职业兴趣测试
 * Holland Code Career Test
 */

// 测试题目数据 - 60题，每类10题
const questions = [
    // 现实型 (R) - Realistic
    { id: 1, type: 'R', text: '我喜欢动手修理东西，比如电器、家具或机械设备' },
    { id: 2, type: 'R', text: '我喜欢户外活动，如园艺、木工或机械操作' },
    { id: 3, type: 'R', text: '我喜欢使用工具和机械设备' },
    { id: 4, type: 'R', text: '我喜欢建造或组装物品' },
    { id: 5, type: 'R', text: '我对汽车、机械或电子设备的工作原理感兴趣' },
    { id: 6, type: 'R', text: '我喜欢体力活动，不介意弄脏双手' },
    { id: 7, type: 'R', text: '我喜欢在户外工作或进行体育运动' },
    { id: 8, type: 'R', text: '我喜欢解决机械或技术方面的问题' },
    { id: 9, type: 'R', text: '我喜欢操作重型机械或设备' },
    { id: 10, type: 'R', text: '我喜欢做手工活，如焊接、修理或制作' },

    // 研究型 (I) - Investigative
    { id: 11, type: 'I', text: '我喜欢研究科学问题，探索事物的原理' },
    { id: 12, type: 'I', text: '我喜欢分析数据、解决问题或做实验' },
    { id: 13, type: 'I', text: '我喜欢阅读科学或技术类书籍' },
    { id: 14, type: 'I', text: '我对医学、生物学或化学感兴趣' },
    { id: 15, type: 'I', text: '我喜欢独立工作，深入研究某个主题' },
    { id: 16, type: 'I', text: '我喜欢思考抽象的概念和理论' },
    { id: 17, type: 'I', text: '我喜欢观察和记录自然现象' },
    { id: 18, type: 'I', text: '我喜欢学习新的科学知识和技术' },
    { id: 19, type: 'I', text: '我喜欢解决复杂的数学或逻辑问题' },
    { id: 20, type: 'I', text: '我喜欢做研究并撰写报告' },

    // 艺术型 (A) - Artistic
    { id: 21, type: 'A', text: '我喜欢绘画、写作、音乐或其他艺术创作' },
    { id: 22, type: 'A', text: '我喜欢设计或装饰东西，追求美感' },
    { id: 23, type: 'A', text: '我喜欢表达自己的想法和情感' },
    { id: 24, type: 'A', text: '我喜欢参加戏剧、舞蹈或音乐表演' },
    { id: 25, type: 'A', text: '我喜欢阅读小说、诗歌或欣赏艺术作品' },
    { id: 26, type: 'A', text: '我喜欢创造性地解决问题' },
    { id: 27, type: 'A', text: '我喜欢摄影、 filmmaking 或其他视觉艺术' },
    { id: 28, type: 'A', text: '我喜欢独立创作，不拘泥于规则' },
    { id: 29, type: 'A', text: '我喜欢参观博物馆、画廊或音乐会' },
    { id: 30, type: 'A', text: '我喜欢尝试新的创意和想法' },

    // 社会型 (S) - Social
    { id: 31, type: 'S', text: '我喜欢帮助他人解决问题' },
    { id: 32, type: 'S', text: '我喜欢教导、辅导或培训他人' },
    { id: 33, type: 'S', text: '我喜欢与人交流，善于倾听' },
    { id: 34, type: 'S', text: '我喜欢参与社区服务或志愿活动' },
    { id: 35, type: 'S', text: '我喜欢照顾他人，如儿童、老人或病人' },
    { id: 36, type: 'S', text: '我喜欢团队合作，与他人一起工作' },
    { id: 37, type: 'S', text: '我喜欢调解冲突，帮助他人和解' },
    { id: 38, type: 'S', text: '我喜欢提供咨询或建议' },
    { id: 39, type: 'S', text: '我喜欢组织社交活动或聚会' },
    { id: 40, type: 'S', text: '我对心理学或人类行为感兴趣' },

    // 企业型 (E) - Enterprising
    { id: 41, type: 'E', text: '我喜欢领导和组织团队' },
    { id: 42, type: 'E', text: '我喜欢说服他人接受我的观点' },
    { id: 43, type: 'E', text: '我喜欢做决策并承担责任' },
    { id: 44, type: 'E', text: '我对商业、销售或市场营销感兴趣' },
    { id: 45, type: 'E', text: '我喜欢竞争，追求成功和成就' },
    { id: 46, type: 'E', text: '我喜欢创业或管理项目' },
    { id: 47, type: 'E', text: '我喜欢公开演讲或主持活动' },
    { id: 48, type: 'E', text: '我喜欢制定目标并努力实现' },
    { id: 49, type: 'E', text: '我喜欢与有影响力的人交往' },
    { id: 50, type: 'E', text: '我喜欢谈判和达成交易' },

    // 常规型 (C) - Conventional
    { id: 51, type: 'C', text: '我喜欢有条理地整理文件和数据' },
    { id: 52, type: 'C', text: '我喜欢按照明确的规则和程序工作' },
    { id: 53, type: 'C', text: '我喜欢处理数字和财务记录' },
    { id: 54, type: 'C', text: '我喜欢使用电脑和办公软件' },
    { id: 55, type: 'C', text: '我喜欢注意细节，确保准确性' },
    { id: 56, type: 'C', text: '我喜欢在办公室环境中工作' },
    { id: 57, type: 'C', text: '我喜欢编制清单、表格或报告' },
    { id: 58, type: 'C', text: '我喜欢归档和分类信息' },
    { id: 59, type: 'C', text: '我喜欢遵循既定的工作流程' },
    { id: 60, type: 'C', text: '我喜欢处理数据和信息管理' }
];

// 类型详细信息
const typeInfo = {
    R: {
        name: '现实型',
        english: 'Realistic',
        color: '#e74c3c',
        description: '动手能力强，喜欢具体的任务和实际操作。偏好使用工具、机械或设备，喜欢在户外工作。',
        characteristics: ['务实', '动手能力强', '喜欢户外活动', '技术导向'],
        careers: ['工程师', '技术员', '建筑师', '机械师', '电工', '农民', '飞行员', '运动员', '厨师', '园艺师']
    },
    I: {
        name: '研究型',
        english: 'Investigative',
        color: '#3498db',
        description: '善于分析和思考，喜欢探索和理解事物。偏好观察、学习、研究和解决问题。',
        characteristics: ['理性', '好奇心强', '善于分析', '独立思考'],
        careers: ['科学家', '研究员', '医生', '程序员', '数据分析师', '心理学家', '药剂师', '大学教授', '实验室技术员', '经济学家']
    },
    A: {
        name: '艺术型',
        english: 'Artistic',
        color: '#9b59b6',
        description: '富有创造力和想象力，追求自我表达。偏好非结构化的环境，喜欢创作和表演。',
        characteristics: ['创意', '感性', '追求美感', '不拘一格'],
        careers: ['设计师', '作家', '音乐家', '演员', '摄影师', '画家', '建筑师', '导演', '编辑', '艺术总监']
    },
    S: {
        name: '社会型',
        english: 'Social',
        color: '#2ecc71',
        description: '乐于助人，善于与人沟通。偏好教导、治疗、服务他人，喜欢团队合作。',
        characteristics: ['友善', '善于沟通', '乐于助人', '有同理心'],
        careers: ['教师', '咨询师', '社工', '护士', '人力资源', '培训师', '客户服务', '公关专员', '治疗师', '牧师']
    },
    E: {
        name: '企业型',
        english: 'Enterprising',
        color: '#f39c12',
        description: '领导力强，善于说服和影响他人。偏好组织、管理、领导和达成目标。',
        characteristics: ['自信', '有领导力', '善于说服', '追求成就'],
        careers: ['经理', '销售', '律师', '企业家', '政治家', '经理', '房地产经纪人', '投资顾问', '公关经理', '制片人']
    },
    C: {
        name: '常规型',
        english: 'Conventional',
        color: '#1abc9c',
        description: '细致认真，喜欢有条理和规律的工作。偏好处理数据、遵循程序和注重细节。',
        characteristics: ['细心', '有条理', '可靠', '注重细节'],
        careers: ['会计', '行政', '数据录入', '银行职员', '秘书', '审计师', '档案管理员', '税务专员', '统计员', '出纳']
    }
};

// 应用状态
let currentQuestion = 0;
let answers = {};

// DOM 元素
const welcomeSection = document.getElementById('welcome-section');
const testSection = document.getElementById('test-section');
const loadingSection = document.getElementById('loading-section');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const currentQuestionEl = document.getElementById('current-question');
const progressFill = document.getElementById('progress-fill');
const optionInputs = document.querySelectorAll('input[name="answer"]');
const optionLabels = document.querySelectorAll('.option');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
});

function initEventListeners() {
    // 开始测试按钮
    startBtn.addEventListener('click', startTest);
    
    // 上一题/下一题按钮
    prevBtn.addEventListener('click', goToPrevQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    
    // 选项点击事件
    optionLabels.forEach((label, index) => {
        label.addEventListener('click', () => {
            selectOption(index + 1);
        });
    });
    
    // 键盘导航
    document.addEventListener('keydown', handleKeyboard);
}

function startTest() {
    welcomeSection.classList.remove('active');
    testSection.classList.add('active');
    currentQuestion = 0;
    answers = {};
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestion];
    
    // 更新题目文本
    questionText.textContent = `${currentQuestion + 1}. ${question.text}`;
    
    // 更新进度
    currentQuestionEl.textContent = currentQuestion + 1;
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // 重置选项状态
    optionInputs.forEach(input => {
        input.checked = false;
    });
    optionLabels.forEach(label => {
        label.classList.remove('selected');
    });
    
    // 恢复已选答案
    if (answers[question.id]) {
        const selectedValue = answers[question.id];
        optionInputs[selectedValue - 1].checked = true;
        optionLabels[selectedValue - 1].classList.add('selected');
    }
    
    // 更新按钮状态
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = '查看结果';
        nextBtn.disabled = !answers[question.id];
    } else {
        nextBtn.textContent = '下一题';
        nextBtn.disabled = !answers[question.id];
    }
}

function selectOption(value) {
    const question = questions[currentQuestion];
    answers[question.id] = value;
    
    // 更新UI
    optionLabels.forEach((label, index) => {
        if (index + 1 === value) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
    
    nextBtn.disabled = false;
    
    // 自动进入下一题（可选）
    // setTimeout(goToNextQuestion, 300);
}

function goToPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        // 最后一题，提交结果
        submitTest();
    }
}

function handleKeyboard(e) {
    // 数字键 1-5 选择选项
    if (e.key >= '1' && e.key <= '5') {
        const value = parseInt(e.key);
        selectOption(value);
    }
    // 方向键导航
    else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        goToPrevQuestion();
    }
    else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        goToNextQuestion();
    }
}

function submitTest() {
    testSection.classList.remove('active');
    loadingSection.classList.add('active');
    
    // 计算结果
    const results = calculateResults();
    
    // 保存结果到 localStorage
    localStorage.setItem('hollandResults', JSON.stringify(results));
    
    // 模拟加载延迟
    setTimeout(() => {
        window.location.href = 'result.html';
    }, 1500);
}

function calculateResults() {
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    // 计算各类型总分
    questions.forEach(question => {
        const answer = answers[question.id] || 3; // 默认中间值
        scores[question.type] += answer;
    });
    
    // 转换为百分制（每类10题，每题最高5分，满分50分）
    const maxScore = 50;
    const percentages = {};
    for (let type in scores) {
        percentages[type] = Math.round((scores[type] / maxScore) * 100);
    }
    
    // 排序获取前三类型
    const sortedTypes = Object.keys(percentages).sort((a, b) => {
        return percentages[b] - percentages[a];
    });
    
    const hollandCode = sortedTypes.slice(0, 3).join('');
    
    return {
        scores: percentages,
        sortedTypes: sortedTypes,
        hollandCode: hollandCode,
        topType: sortedTypes[0],
        answers: answers,
        timestamp: new Date().toISOString()
    };
}

// 导出函数供结果页面使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions, typeInfo, calculateResults };
}
