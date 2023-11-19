import './Ripple.css';

export default function Ripple({ children, className, style }) {
  function createRipple(event) {
    const button = event.currentTarget;
    // console.log(button);
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    // circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    // circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.style.left = `${event.nativeEvent.offsetX - radius}px`;
    circle.style.top = `${event.nativeEvent.offsetY - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }
  return (
    <span
      onClick={createRipple}
      className={`ripple-btn ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
