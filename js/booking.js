// 统一处理所有预订按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
  const bookButtons = document.querySelectorAll('.book-button');
  
  bookButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 跳转到contact.html（自动适应相对路径）
      window.location.href = '../contact.html'; 
    });
  });
});
