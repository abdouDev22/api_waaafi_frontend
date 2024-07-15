import './ticke.scss';



document.querySelector('#app').innerHTML = `
<div class="content">
      <h3>Payment successful!</h3>
      <h1>DJF 500.00</h1>
      <p class="date">18.06.24</p>
      <div class="carreblack">
        <p>Sender name <span>Abdourahman Abdillahi Abdi</span></p>
        <p>Sender <span>25377320261</span> </p>
        <p>Merchant name  <span>E-vignette</span></p>
        <p>Merchant ID <span>12</span></p>
        <p>Total  <span>DJF500.00</span></p>
      </div>
    </div>
`;


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', () => {

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    
  });
});