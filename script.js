// ===== 샘플 데이터 =====
const booksData = {
    bestsellers: [
        {
            id: 1,
            title: "불편한 편의점",
            author: "김호연",
            originalPrice: 14000,
            salePrice: 12600,
            discount: 10,
            rating: 4.8,
            reviewCount: 15234,
            category: "소설",
            cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            description: "야근 후 쓰러진 청년을 구해준 인연으로 청년의 편의점에서 야간 아르바이트를 하게 된 독고라는 이름의 이상한 노인. 무뚝뚝하지만 따뜻한 사람들이 모여드는 편의점 이야기."
        },
        {
            id: 2,
            title: "역행자",
            author: "자청",
            originalPrice: 17500,
            salePrice: 15750,
            discount: 10,
            rating: 4.6,
            reviewCount: 8923,
            category: "자기계발",
            cover: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            description: "평범한 사람이 비범한 성과를 내는 7가지 법칙. 경제적 자유를 얻고 싶은 사람들을 위한 현실적인 조언을 담았습니다."
        },
        {
            id: 3,
            title: "물고기는 존재하지 않는다",
            author: "룰루 밀러",
            originalPrice: 17000,
            salePrice: 15300,
            discount: 10,
            rating: 4.7,
            reviewCount: 12456,
            category: "과학",
            cover: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            description: "사랑, 집착, 그리고 분류에 대한 이야기. 과학자 데이비드 스타 조던의 놀라운 이야기를 통해 우리의 세계관을 뒤흔든다."
        },
        {
            id: 4,
            title: "아버지의 해방일지",
            author: "정지아",
            originalPrice: 15000,
            salePrice: 13500,
            discount: 10,
            rating: 4.5,
            reviewCount: 6789,
            category: "소설",
            cover: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            description: "한국 현대사를 관통하는 한 가족의 이야기. 빨치산 아버지를 둔 가족이 겪는 고난과 사랑, 용서의 서사시."
        },
        {
            id: 5,
            title: "세이노의 가르침",
            author: "세이노",
            originalPrice: 6480,
            salePrice: 5832,
            discount: 10,
            rating: 4.9,
            reviewCount: 25678,
            category: "자기계발",
            cover: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            description: "세이노가 20년간 써온 글들을 모은 책. 인생, 돈, 성공에 관한 냉철하고 현실적인 조언."
        },
        {
            id: 6,
            title: "원씽",
            author: "게리 켈러",
            originalPrice: 14000,
            salePrice: 12600,
            discount: 10,
            rating: 4.4,
            reviewCount: 9876,
            category: "경영",
            cover: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            description: "복잡한 세상을 이기는 단순함의 힘. 당신의 삶에서 가장 중요한 한 가지에 집중하라."
        },
        {
            id: 7,
            title: "데일 카네기 인간관계론",
            author: "데일 카네기",
            originalPrice: 15800,
            salePrice: 14220,
            discount: 10,
            rating: 4.7,
            reviewCount: 34567,
            category: "자기계발",
            cover: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
            description: "80년간 전 세계인의 인생을 바꾼 자기계발 바이블. 사람을 움직이는 30가지 원칙."
        },
        {
            id: 8,
            title: "작은 땅의 야수들",
            author: "김주혜",
            originalPrice: 16000,
            salePrice: 14400,
            discount: 10,
            rating: 4.6,
            reviewCount: 4567,
            category: "소설",
            cover: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
            description: "한국전쟁을 배경으로 한 자매의 이야기. 전쟁의 상처와 여성의 삶을 섬세하게 그려냈다."
        },
        {
            id: 9,
            title: "미드나잇 라이브러리",
            author: "매트 헤이그",
            originalPrice: 15800,
            salePrice: 14220,
            discount: 10,
            rating: 4.8,
            reviewCount: 18765,
            category: "소설",
            cover: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
            description: "죽음과 삶 사이의 도서관에서 다른 삶을 경험하는 여자. 후회와 가능성에 대한 감동적인 이야기."
        },
        {
            id: 10,
            title: "트렌드 코리아 2024",
            author: "김난도",
            originalPrice: 19800,
            salePrice: 17820,
            discount: 10,
            rating: 4.3,
            reviewCount: 7654,
            category: "경영",
            cover: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            description: "2024년 대한민국 소비 트렌드 전망. 10대 트렌드 키워드로 살펴보는 미래의 시장."
        }
    ],
    newReleases: [
        {
            id: 11,
            title: "퓨처 셀프",
            author: "벤저민 하디",
            originalPrice: 18000,
            salePrice: 16200,
            discount: 10,
            rating: 4.5,
            reviewCount: 1234,
            category: "자기계발",
            cover: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)",
            isNew: true,
            description: "미래의 나와 대화하며 현재를 변화시키는 방법. 과학적으로 증명된 자기 변화의 기술."
        },
        {
            id: 12,
            title: "마흔에 읽는 니체",
            author: "장재형",
            originalPrice: 17000,
            salePrice: 15300,
            discount: 10,
            rating: 4.4,
            reviewCount: 2345,
            category: "인문학",
            cover: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            isNew: true,
            description: "인생의 절반을 살아온 이들을 위한 철학 에세이. 니체의 말로 위로받는 인생 2막."
        },
        {
            id: 13,
            title: "언어의 온도",
            author: "이기주",
            originalPrice: 13800,
            salePrice: 12420,
            discount: 10,
            rating: 4.6,
            reviewCount: 28765,
            category: "에세이",
            cover: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
            isNew: true,
            description: "말과 글에 담긴 온기에 대하여. 일상 속 따뜻한 언어의 힘을 전하는 에세이."
        },
        {
            id: 14,
            title: "채식주의자",
            author: "한강",
            originalPrice: 14000,
            salePrice: 12600,
            discount: 10,
            rating: 4.7,
            reviewCount: 45678,
            category: "소설",
            cover: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
            isNew: true,
            description: "부커상 수상작. 고기를 거부하기 시작한 한 여자의 이야기를 통해 인간의 욕망과 폭력성을 탐구한다."
        },
        {
            id: 15,
            title: "돈의 심리학",
            author: "모건 하우절",
            originalPrice: 18000,
            salePrice: 16200,
            discount: 10,
            rating: 4.5,
            reviewCount: 12345,
            category: "경제",
            cover: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
            isNew: true,
            description: "당신이 생각하는 돈에 대한 모든 것이 틀렸다. 돈에 대한 생각을 바꾸는 19가지 이야기."
        },
        {
            id: 16,
            title: "클루지",
            author: "게리 마커스",
            originalPrice: 16000,
            salePrice: 14400,
            discount: 10,
            rating: 4.3,
            reviewCount: 3456,
            category: "과학",
            cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            isNew: true,
            description: "뇌과학자가 밝히는 인간 뇌의 허술한 구조와 인간다움의 비밀."
        },
        {
            id: 17,
            title: "빛의 과거",
            author: "은희경",
            originalPrice: 15000,
            salePrice: 13500,
            discount: 10,
            rating: 4.4,
            reviewCount: 2345,
            category: "소설",
            cover: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
            isNew: true,
            description: "기억과 망각, 그리고 사랑에 대한 이야기. 은희경 작가의 신작 장편소설."
        },
        {
            id: 18,
            title: "초격차",
            author: "권오현",
            originalPrice: 18000,
            salePrice: 16200,
            discount: 10,
            rating: 4.6,
            reviewCount: 8765,
            category: "경영",
            cover: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            isNew: true,
            description: "삼성전자 회장이 전하는 세계 1등의 비결. 넘볼 수 없는 차이를 만드는 격의 경영."
        }
    ],
    recommendations: [
        {
            id: 19,
            title: "아몬드",
            author: "손원평",
            originalPrice: 13000,
            salePrice: 11700,
            discount: 10,
            rating: 4.8,
            reviewCount: 38765,
            category: "소설",
            cover: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            description: "감정을 느끼지 못하는 소년이 세상과 연결되어 가는 이야기. 감동적인 성장 소설."
        },
        {
            id: 20,
            title: "고요할수록 밝아지는 것들",
            author: "혜민",
            originalPrice: 16800,
            salePrice: 15120,
            discount: 10,
            rating: 4.5,
            reviewCount: 5678,
            category: "에세이",
            cover: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            description: "혜민 스님이 전하는 고요한 위로의 메시지. 마음의 평화를 찾는 명상 에세이."
        },
        {
            id: 21,
            title: "부의 추월차선",
            author: "엠제이 드마코",
            originalPrice: 15800,
            salePrice: 14220,
            discount: 10,
            rating: 4.4,
            reviewCount: 23456,
            category: "경제",
            cover: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
            description: "부자가 되는 빠른 길은 따로 있다. 젊은 부자들의 비밀을 밝히는 책."
        },
        {
            id: 22,
            title: "사피엔스",
            author: "유발 하라리",
            originalPrice: 24000,
            salePrice: 21600,
            discount: 10,
            rating: 4.9,
            reviewCount: 67890,
            category: "인문학",
            cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            description: "인류 역사를 새로운 시각으로 바라보다. 전 세계 1,200만 부 판매된 역작."
        },
        {
            id: 23,
            title: "정의란 무엇인가",
            author: "마이클 샌델",
            originalPrice: 15000,
            salePrice: 13500,
            discount: 10,
            rating: 4.6,
            reviewCount: 45678,
            category: "철학",
            cover: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            description: "하버드대 마이클 샌델 교수의 전설적인 강의. 정의에 대한 깊은 사유."
        },
        {
            id: 24,
            title: "총, 균, 쇠",
            author: "재레드 다이아몬드",
            originalPrice: 28000,
            salePrice: 25200,
            discount: 10,
            rating: 4.7,
            reviewCount: 34567,
            category: "역사",
            cover: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            description: "인류 문명의 불평등을 설명하는 거대한 역사서. 퓰리처상 수상작."
        }
    ]
};

const reviewsData = [
    {
        id: 1,
        userName: "책벌레",
        userInitial: "책",
        bookTitle: "불편한 편의점",
        rating: 5,
        text: "따뜻한 위로가 필요할 때 읽으면 좋은 책입니다. 독고 할아버지의 묵묵한 행동 하나하나가 마음을 울립니다.",
        date: "2024.01.15"
    },
    {
        id: 2,
        userName: "독서광",
        userInitial: "독",
        bookTitle: "세이노의 가르침",
        rating: 5,
        text: "인생을 바꾸는 책이라고 하면 과장일까요? 현실적이고 냉철한 조언이 가득합니다. 여러 번 읽어도 좋습니다.",
        date: "2024.01.12"
    },
    {
        id: 3,
        userName: "밤독서",
        userInitial: "밤",
        bookTitle: "미드나잇 라이브러리",
        rating: 5,
        text: "죽음 직전에 다른 삶을 살아볼 수 있다면? 상상만 해도 설레는 이야기가 펼쳐집니다. 위로가 되는 소설.",
        date: "2024.01.10"
    }
];

// ===== DOM Elements =====
const bestsellerGrid = document.getElementById('bestsellerGrid');
const sliderTrack = document.getElementById('sliderTrack');
const recommendGrid = document.getElementById('recommendGrid');
const reviewGrid = document.getElementById('reviewGrid');
const modal = document.getElementById('bookModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tabButtons = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('searchInput');

// ===== Utility Functions =====
function formatPrice(price) {
    return price.toLocaleString() + '원';
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalf) stars += '☆';
    return stars;
}

// ===== Book Card Creation =====
function createBookCard(book, showRank = false, rank = 0) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <div class="book-cover">
            <div style="width:100%;height:100%;background:${book.cover}"></div>
            ${showRank ? `<span class="book-rank">${rank}</span>` : ''}
            ${book.isNew ? '<span class="book-badge">NEW</span>' : ''}
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <div class="book-price">
                <span class="price-original">${formatPrice(book.originalPrice)}</span>
                <span class="price-sale">${formatPrice(book.salePrice)}</span>
            </div>
            <div class="book-rating">
                <span class="stars">${createStars(book.rating)}</span>
                <span class="rating-count">(${book.reviewCount.toLocaleString()})</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openModal(book));
    return card;
}

function createRecommendCard(book) {
    const card = document.createElement('div');
    card.className = 'recommend-card';
    card.innerHTML = `
        <div class="recommend-cover">
            <div style="width:100%;height:100%;background:${book.cover}"></div>
        </div>
        <div class="recommend-info">
            <span class="recommend-category">${book.category}</span>
            <h3 class="recommend-title">${book.title}</h3>
            <p class="recommend-author">${book.author}</p>
            <span class="recommend-price">${formatPrice(book.salePrice)}</span>
        </div>
    `;

    card.addEventListener('click', () => openModal(book));
    return card;
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div class="review-header">
            <div class="review-avatar">${review.userInitial}</div>
            <div class="review-user">
                <h4 class="review-name">${review.userName}</h4>
                <span class="review-date">${review.date}</span>
            </div>
            <span class="review-rating">${'★'.repeat(review.rating)}</span>
        </div>
        <p class="review-book">「${review.bookTitle}」</p>
        <p class="review-text">${review.text}</p>
    `;
    return card;
}

// ===== Render Functions =====
function renderBestsellers() {
    bestsellerGrid.innerHTML = '';
    booksData.bestsellers.slice(0, 10).forEach((book, index) => {
        bestsellerGrid.appendChild(createBookCard(book, true, index + 1));
    });
}

function renderNewReleases() {
    sliderTrack.innerHTML = '';
    booksData.newReleases.forEach(book => {
        sliderTrack.appendChild(createBookCard(book));
    });
}

function renderRecommendations() {
    recommendGrid.innerHTML = '';
    booksData.recommendations.forEach(book => {
        recommendGrid.appendChild(createRecommendCard(book));
    });
}

function renderReviews() {
    reviewGrid.innerHTML = '';
    reviewsData.forEach(review => {
        reviewGrid.appendChild(createReviewCard(review));
    });
}

// ===== Modal Functions =====
function openModal(book) {
    document.getElementById('modalCover').innerHTML = `<div style="width:100%;height:100%;background:${book.cover}"></div>`;
    document.getElementById('modalCategory').textContent = book.category;
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalDesc').textContent = book.description;
    document.getElementById('modalOriginalPrice').textContent = formatPrice(book.originalPrice);
    document.getElementById('modalSalePrice').textContent = formatPrice(book.salePrice);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Slider Functions =====
let sliderPosition = 0;
const slideWidth = 240; // card width + gap

function slideNext() {
    const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;
    sliderPosition = Math.min(sliderPosition + slideWidth * 2, maxScroll);
    sliderTrack.scrollTo({ left: sliderPosition, behavior: 'smooth' });
}

function slidePrev() {
    sliderPosition = Math.max(sliderPosition - slideWidth * 2, 0);
    sliderTrack.scrollTo({ left: sliderPosition, behavior: 'smooth' });
}

// ===== Tab Functions =====
function handleTabClick(e) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // 탭 변경 시 데이터 섞기 (시뮬레이션)
    const shuffled = [...booksData.bestsellers].sort(() => Math.random() - 0.5);
    booksData.bestsellers = shuffled;
    renderBestsellers();
}

// ===== Header Scroll Effect =====
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.72)';
    }
}

// ===== Search Function =====
function handleSearch(e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            alert(`"${query}" 검색 결과를 표시합니다. (데모)`);
        }
    }
}

// ===== Hero Slider Auto-play =====
let currentSlide = 0;
const dots = document.querySelectorAll('.dot');

function autoSlide() {
    // 여러 슬라이드가 있을 경우 자동 전환
    // 현재는 1개 슬라이드만 있으므로 dots만 애니메이션
}

// ===== Cart Animation =====
function animateCart() {
    const cartBtn = document.querySelector('.icon-btn[title="장바구니"]');
    const cartCount = cartBtn.querySelector('.cart-count');

    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);

    const currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
}

// ===== Event Listeners =====
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

tabButtons.forEach(btn => btn.addEventListener('click', handleTabClick));

window.addEventListener('scroll', handleScroll);

searchInput.addEventListener('keypress', handleSearch);

// Modal action buttons
document.querySelector('.btn-cart').addEventListener('click', () => {
    animateCart();
    closeModal();
    alert('장바구니에 추가되었습니다!');
});

document.querySelector('.btn-buy').addEventListener('click', () => {
    closeModal();
    alert('구매 페이지로 이동합니다. (데모)');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderBestsellers();
    renderNewReleases();
    renderRecommendations();
    renderReviews();

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
