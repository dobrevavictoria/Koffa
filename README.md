# Koffa

<p>Koffa e уеб приложение, базирано на концепцията Reduce, Reuse, Recycle.</p>

<h1>Reduce</h1>
<p>Информира потребителите как да ограничат използваните от тях ресурси и как да намалят количеството отпадъци, които генерират.</p>
<img src="https://i.ibb.co/PNdRmC0/Reduce.png" width="200px"><br>

<h1>Reuse</h1>
<p>Стимулира потребителите да споделят и разменят помежду си ненужни за тях вещи или такива, които са реновирали от стари материали. Всеки продукт има стойност във виртуална валута (еколев), която важи в рамките на приложението и цели да засили преизползването на все още годни и здрави вещи между хората. Обмисляме да добавим и друга категория, в която потребителите могат да даряват еколевове в името на каузи, свързани с опазването на околната среда, като засаждане на дръвчета.</p>
<img src="https://i.ibb.co/60Z1gpk/Reuse.png" width="200px"><br>

<h1>Recycle</h1>
<p>Ако вещите не могат да бъдат преизползвани, потребителят може да намери местата в близост до него, където може да ги даде за рециклиране – пунктове, магазини и др. Служителите там при получаване на материалите използват допълнителното приложение [koffa-generator](https://github.com/m-ignatov/koffa-generator) , в което въвеждат информация за типа и количеството на рециклираните стоки, което по формула изчислява на колко еколева е еквивалентен приноса на потребителя и се генерира QR код с тази информация. 
Този QR код се сканира от потребителя, чрез което той получава виртуалната сума в приложението.</p>   
<img src="https://i.ibb.co/w6500fT/Recycle.png" width="200px"><br>

<h2>Koffa-generator</h2>
<img src="https://i.ibb.co/k8phHPT/koffa-generator.png" width="400px"><br>


<h1>Имплементационни детайли</h1>
<h2>Технологии</h2>
<p><b>Front-end:</b> React Material-UI<br>
<b>Back-end:</b> Express.js, REST API, MongoDB</p>

<h2>Основни функционалности</h2>
<h3>Общи</h3>
  <ul>
    <li>Регистрация на потребител</li>
    <li>Вход на потребител</li>
    <li>Ранглист класация на база еколевове и брой рециклирани вещи</li>
    <li>Сканиране на QR код</li>
    <li>Генериране на QR код (koffa-generator)</li>
    <li>Показване на статистика за рециклираните материали на потребителя</li><br>
    <img src="https://i.ibb.co/mTBcprN/Home.png" width="200px"><br>
  </ul>
  
 <h3>Reuse</h3>
  <ul>
  <li>Добавяне на продукт със следната информация:</li>
    <ul>
      <li>Снимка</li>
      <li>Описание</li>
      <li>Цена (еколев)</li>
      <li>Местоположение</li>
    </ul>
  <li>Купуване на продукт</li>
  <li>Филтриране на вещи по зададени критерии</li>
  <li>Добавяне в списък Любими</li>
  </ul>
  
  <h3>Reduce</h3>
  <ul>
  <li>Отваряне на статии</li>
  </ul>
  
  <h3>Recycle</h3>
  <ul>
  <li>Преглед на места за рециклиране на Google Maps карта</li>
  <li>Предлагане на място за рециклиране към администратор</li>
  </ul>

<h2>Полета в базата данни</h2>
<b>Потребител:</b>
<ul>
  <li>ID</li>
  <li>Email</li>
  <li>Потребителско име</li>
  <li>Парола</li>
  <li>Еколевове</li>
  <li>Добавени продукти</li>
  <li>Любими продукти</li>
  <li>Статистики за рециклирането му</li>
     <ul>
     <li>Преизползвани вещи (Reuse)</li>
     <li>Хартия (Reduce)</li>
     <li>Пластмаса (Reduce)</li>
     <li>Стъкло (Reduce)</li>
     <li>Електроника (Reduce)</li>
     <li>Брой рециклирани вещи (Recycle)</li>
     </ul>
 </ul>
<b>Продукт</b>
<ul>
  <li>ID</li>
  <li>Категория</li>
  <li>Снимка URL</li>
  <li>Описание</li>
  <li>Цена (еколев)</li>
  <li>Местоположение</li>
 </ul>
