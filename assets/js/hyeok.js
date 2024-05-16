$('.nav li').hover(function () {
    $(this).children('ul').stop().slideToggle(500);
});

// 모바일 필터 생성

const filter = document.querySelector('.filter');
const filterCon = document.querySelector('.filter_con');
const closeFilter = document.querySelector('.closeFilter');

if (filter) {
    filter.addEventListener('click', () => {
        filterCon.classList.add('show');
    });
}

if (closeFilter) {
    closeFilter.addEventListener('click', () => {
        filterCon.classList.remove('show');
    });
}

// 대표결제수단

const method = document.querySelector('.method');
const methodCon = document.querySelector('.method_con');
const methodCancel = document.querySelector('.btn_box .cancel');

if (method) {
    method.addEventListener('click', () => {
        methodCon.classList.add('show');
    });
}

if (methodCancel) {
    methodCancel.addEventListener('click', () => {
        methodCon.classList.remove('show');
    });
}

// 카드추가

const addBtn = document.querySelector('.addBtn');
const addCard = document.querySelector('.add_card');
const addCancel = document.querySelector('.add_card .btn_box .cancel');

if (addBtn) {
    addBtn.addEventListener('click', () => {
        addCard.classList.add('show');
    });
}

if (addCancel) {
    addCancel.addEventListener('click', () => {
        addCard.classList.remove('show');
    });
}

// 예치금 충전하기

const deposit = document.querySelector('.deposit');
const depositBtn = document.querySelector('.depositBtn');
const depositCancel = document.querySelector('.deposit .btn_box .cancel');

if (depositBtn) {
    depositBtn.addEventListener('click', () => {
        deposit.classList.add('show');
    });
}

if (depositCancel) {
    depositCancel.addEventListener('click', () => {
        deposit.classList.remove('show');
    });
}
