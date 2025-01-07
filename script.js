document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
  
    const countdown = document.querySelector('.countdown');
    const startDate = new Date(2022, 0, 10); // 10 января 2022 года
  
    const updateTimeTogether = () => {
      const now = new Date();
      const diff = now - startDate;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      countdown.textContent = `прикинь, мы вместе уже ${days} дней, ${hours} часов, ${minutes} минут и ${seconds} секунд`;
  
      console.log('Current time:', now);
      console.log('Time together in days:', days);
    };
  
    updateTimeTogether();
    setInterval(updateTimeTogether, 1000); // Обновление каждую секунду
  });
  