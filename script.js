const markAllRead = document.querySelector('.mark-all-as-read');
const allNotifications = document.querySelectorAll('.notification');
const notificationsCount = document.querySelector('.notifications_count');
const unreadNotifications = document.querySelectorAll('.unread');
let unreadArrayLen = Array.from(document.querySelectorAll('.unread')).length;

markAllRead.addEventListener('click', () => {
  allNotifications.forEach(notfication => {
    notfication.classList.add('read')
  })

  unreadNotifications.forEach(unread => {
    unread.classList.remove('unread');

    unreadArrayLen = 0
  })

  if (unreadArrayLen == 0) {
    notificationsCount.classList.add('hide_count')
  }

  else {
    notificationsCount.classList.remove('hide_count')
  }


})

notificationsCount.innerText = unreadArrayLen;

