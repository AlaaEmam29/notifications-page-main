const btnReadAll = document.querySelector(".readit")
const dots = document.querySelectorAll(".dot")
const notificationAll = document.querySelectorAll(".notification")
const notifications = document.querySelector(".notifications-body")
const num = document.querySelector(".num")
btnReadAll.addEventListener("click", function (e) {
    notificationAll.forEach((notification) => {
        notification.style.backgroundColor = 'transparent'
    })
    dots.forEach((dot) => {
        dot.style.backgroundColor = 'transparent'
    })
    num.textContent = 0
})
const message = document.querySelector(".message")
message.addEventListener("click", function (e) {
   message.classList.toggle("block")
})
notifications.addEventListener("click", function (e) {
    const notification = e.target.closest(".now")
    if (!notification) return
    const dot = notification.querySelector(".dot")
    notification.style.backgroundColor = 'transparent'
    dot.style.backgroundColor = 'transparent'
    decrement(num)
})
function decrement(num){
    const value = parseInt(num.textContent)
    if (value >0) {
        const newValue = value - 1
        num.textContent = newValue
        return newValue
    }
    else {
        return
    }
}
