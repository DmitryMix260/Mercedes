const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsHeaderElems = document.querySelectorAll('[data-header]')

for (let btn of tabsHandlerElems){
btn.addEventListener('click', () => {
    tabsHandlerElems.forEach( item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')
    //Меняет элементы
    tabsContentElems.forEach(content => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler){
            content.classList.remove('hidden')
        }
        else {content.classList.add('hidden')}
    })
    //Меняет заголовок
    tabsHeaderElems.forEach(content => {
        if (content.dataset.header === btn.dataset.tabsHandler){
            content.classList.remove('hidden')
            console.log('true')
        }
        else {content.classList.add('hidden')}
        console.log('false')
    })

})
}