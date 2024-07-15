import './style.scss';



document.querySelector('#app').innerHTML = `
<h1>Welcome to Waafi</h1>
 <div class="form-container">
    <form id="addForm">
      <div class="form-group">
        <label for="phone">Téléphone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de Passe:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">valider</button>
    </form>
  </div>
`;




