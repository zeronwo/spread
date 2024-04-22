const circleItems = document.querySelectorAll('.circle_item');
const controller = new ScrollMagic.Controller();

circleItems.forEach((circleItem) => {
  const scene = new ScrollMagic.Scene({
    triggerElement: circleItem,
    triggerHook: 'onLeave',
    duration: '100%'
  })
  .on('leave', () => {
    circleItem.classList.remove('active'); // 解除各自的 .active 狀態
  })
  .addTo(controller);
});