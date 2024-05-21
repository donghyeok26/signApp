$('.nav li').hover(function () {
    $(this).children('ul').stop().slideToggle(500)
})

// 모바일 필터 생성

const filter = document.querySelector('.filter')
const filterCon = document.querySelector('.filter_con')
const closeFilter = document.querySelector('.closeFilter')

if (filter) {
    filter.addEventListener('click', () => {
        filterCon.classList.add('show')
    })
}

if (closeFilter) {
    closeFilter.addEventListener('click', () => {
        filterCon.classList.remove('show')
    })
}

// 대표결제수단

const method = document.querySelector('.method')
const methodCon = document.querySelector('.method_con')
const methodShow = document.querySelector('.method_con.show')
const methodCancel = document.querySelector('.btn_box .cancel')
const methodAdd = document.querySelector('.method_con .addBtn')

if (method) {
    method.addEventListener('click', () => {
        methodCon.classList.add('show')
    })
}

if (methodAdd) {
    methodAdd.addEventListener('click', () => {
        if (methodCon.classList.contains('show')) {
            methodCon.classList.remove('show')
            addCard.classList.add('show')
        }
    })
}

if (methodCancel) {
    methodCancel.addEventListener('click', () => {
        methodCon.classList.remove('show')
    })
}

// 카드추가

const addBtn = document.querySelector('.second .addBtn')
const addCard = document.querySelector('.add_card')
const addCancel = document.querySelector('.add_card .btn_box .cancel')

if (addBtn) {
    addBtn.addEventListener('click', () => {
        method.classList.remove('show')
        addCard.classList.add('show')
    })
}

if (addCancel) {
    addCancel.addEventListener('click', () => {
        addCard.classList.remove('show')
    })
}

// 예치금 충전하기

const deposit = document.querySelector('.deposit')
const depositBtn = document.querySelector('.depositBtn')
const depositCancel = document.querySelector('.deposit .btn_box .cancel')

if (depositBtn) {
    depositBtn.addEventListener('click', () => {
        deposit.classList.add('show')
    })
}

if (depositCancel) {
    depositCancel.addEventListener('click', () => {
        deposit.classList.remove('show')
    })
}

// 예치금 내역

const depositHis = document.querySelector('.deposit_his')
const depositHisBtn = document.querySelector('.payment .history')
const depositHisClose = document.querySelector('.deposit_his .closeBtn')

if (depositHisBtn) {
    depositHisBtn.addEventListener('click', () => {
        depositHis.classList.add('show')
    })
}

if (depositHisClose) {
    depositHisClose.addEventListener('click', () => {
        depositHis.classList.remove('show')
    })
}

// 대표 결제 수단

const account = document.querySelector('.payment .account')
const represent = document.querySelector('.payment .represent')

if (account) {
    account.addEventListener('click', () => {
        alert('대표 결제 수단으로 적용됩니다.')
        represent.classList.add('show')
    })
}

// 알림용 이메일 정규식

const email = document.querySelector('email')
const emailInput = document.querySelector('.email .email_input')
const cautionTxt = document.querySelector('.email .caution')

emailInput.addEventListener('keyup', () => {
    let emailValue = emailInput.value
    let emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

    if (emailValue == '') {
        emailInput.style.border = '1px solid var(--bs-danger)'
        cautionTxt.style.color = 'var(--bs-danger)'
        cautionTxt.innerText = '이메일을 입력해주세요.'
    } else if (!emailFormat.test(emailValue)) {
        emailInput.style.border = '1px solid var(--bs-danger)'
        cautionTxt.style.color = 'var(--bs-danger)'
        cautionTxt.innerText = '이메일 형식이 아닙니다.'
    } else if (emailFormat.test(emailValue)) {
        emailInput.style.border = '1px solid green'
        cautionTxt.style.color = 'green'
        cautionTxt.innerText = '이메일 입력완료.'
    }
})
