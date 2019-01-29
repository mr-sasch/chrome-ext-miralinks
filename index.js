// ******************** ФУНКЦИИ ********************

var addBtn = document.querySelector('.tabs__ul-add');

// создание таба
var createTab = () => {
  var ul = document.querySelector('.tabs__ul');

  // создание таба
  var tab = document.createElement('li');
  tab.classList.add('tabs__ul-tab');
  tab.innerHTML = 'Новая вкладка';
  ul.insertBefore(tab, addBtn);
}
// /создание таба

// создание новой статьи
var createArticle = () => {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = "<div class='article__id'>#1</div>" +
  "<section class='article-fields'>" +
  "<input type='text' class='article-fields__input' placeholder='Название статьи'>" +
  "<input type='text' class='article-fields__input' placeholder='meta-title'>" +
  "<input type='text' class='article-fields__input' placeholder='meta-description'>" +
  "<textarea class='article-fields__textarea' placeholder='Содержимое статьи'></textarea>" +
  "<input type='text' class='article-fields__source' placeholder='Площадка'>" +
  "</section>" +
  "<div class='article-button'>" +
  "<button class='article-button__save'>Сохранить статью</button>" +
  "</div>" +
  "</article>";
  var extBtn = document.querySelector('.ext-button');
  form.insertBefore(newArticle, extBtn);
}
// /создание новой статьи

// добавляем Id
var addId = () => {
  // добавляем Id к табу
  var tab = document.querySelectorAll('.tabs__ul-tab');
  var tabsLength = tab.length;
  tab[tabsLength-1].setAttribute('id', 'extTab-' + tabsLength);
  // /добавляем Id к табу

  // добавляем Id к статье
  var article = document.querySelectorAll('.article');
  article[tabsLength-1].setAttribute('id', 'extArticle-' + tabsLength);
  // /добавляем Id к статье

  // добавляем порядковый номер статьи
  var articleId = document.querySelectorAll('.article__id');
  console.log(tabsLength);
  articleId[tabsLength - 1].innerHTML = '#' + tabsLength;
  // /добавляем порядковый номер статьи
}

// /добавляем Id

// делаем новый таб активным
var lastTabActive = () => {
  var allTabs = document.querySelectorAll('.tabs__ul-tab');
  var allArticles = document.querySelectorAll('.article');
  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove('active');
    allArticles[i].classList.remove('active');
  }
  allTabs[allTabs.length - 1].classList.add('active');
  allArticles[allTabs.length - 1].classList.add('active');
}
// /делаем новый таб активным

// переключение активных табов
var changeActive = (e) => {
  var tabItem = document.querySelectorAll('.tabs__ul-tab');
  var article = document.querySelectorAll('.article');
  var target = e.target;
  if (!target.classList.contains('tabs__ul-tab')) return ;
  for (var i = 0; i < tabItem.length; i++) {
    if (target == tabItem[i]) {
      for (var q = 0; q < tabItem.length; q++) {
        tabItem[q].classList.remove('active');
        article[q].classList.remove('active');
      }
      tabItem[i].classList.add('active');
      article[i].classList.add('active');
      break;
    }
  }
}
// /переключение активных табов

// удаление таба
var deleteTab = (e) => {
  var target = e.target;
  var deleteTabBtn = document.querySelectorAll('.tabs__ul-tab:after');
  console.log(deleteTabBtn.length);
  var tab = document.querySelectorAll('.tabs__ul-tab');
  var article = document.querySelectorAll('.article');
  for (var i = 0; i < deleteTabBtn.length; i++) {
    if (target == deleteTabBtn[i]) {
      console.log(tab[i]);
      tab[i].remove();
      article[i].remove();
      break;
    }
  }
}

// /удаление таба

// ******************** /ФУНКЦИИ ********************



// ******************** СОБЫТИЯ ********************

// Добавление таба и статьи
addBtn.onclick = () => {
  createTab();
  createArticle();
  addId();
  lastTabActive();
}
// /Добавление таба и статьи

// Перемещение формы
var form = document.querySelector('.ext');
var formHeader = document.querySelector('.ext-header');

form.ondragstart = () => false;

formHeader.onmousedown = (e) => {
  form.style.position = 'absolute';

  var formX = form.getBoundingClientRect().left;
  var formY = form.getBoundingClientRect().top;
  var shiftX = e.pageX - formX;
  var shiftY = e.pageY - formY;

  document.onmousemove = (e) => {
    var x = e.pageX - shiftX;
    var y = e.pageY - shiftY;

    form.style.left = x + 'px';
    form.style.top = y + 'px';

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
}
// /Перемещение формы

// переключение активных табов
var tabsContainer = document.querySelector('.tabs__ul');
tabsContainer.onclick = (e) => {
  changeActive(e);

  // удаление таба:
  deleteTab(e);
}
// /переключение активных табов

// ******************** /СОБЫТИЯ ********************
