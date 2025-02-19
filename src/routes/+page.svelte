<div class="container">
    <h1>Üdvözöljük!</h1>
    <p>Kedves látogató, nézzen körül akadémiánk honlapján.</p>
    <p>Ajánljuk figyelmébe rendszeres eseményeinket, nyílt napjainkat. 
      Nyitottak vagyunk látogatókra és feltörekvő művészek és szüleik tájékoztatására is.</p>
    <hr>
    <a href="/events" class="button">Tudj meg többet az eseményeknél</a>
  </div>   


<style>
    @font-face {
      font-family: 'Albertus';
      src: local('Albertus'), url('https://fonts.cdnfonts.com/s/16690/Albertus-Medium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  
    /* Alapbeállítások */
    :global(body) {
      background-color: #1a1a1a;
      color: #e0e0e0;
      font-family: 'Albertus', serif;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  
    /* Fejléc */
    h1 {
      font-size: 2.5rem;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
    }
  
    /* Szövegek */
    p {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 15px auto;
      line-height: 1.6;
    }
  
    /* Díszítő vonalak */
    hr {
      border: none;
      height: 2px;
      background: linear-gradient(to right, transparent, #e0e0e0, transparent);
      width: 50%;
      margin: 20px auto;
    }
  
    /* Gomb */
    .button {
      display: inline-block;
      background: #2c3e50;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: bold;
      transition: all 0.3s ease;
      border: 2px solid #ffffff;
    }
  
    .button:hover {
      background: #34495e;
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }
  
    /* Tartalomkeret */
    .container {
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 10px;
      width: 90%;
      max-width: 900px;
      margin: auto;
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
    }
  </style>