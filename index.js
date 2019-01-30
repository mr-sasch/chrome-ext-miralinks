// ******************** ФУНКЦИИ ********************

var addBtn = document.querySelector('.tabs__ul-add');

// создание таба
var createTab = () => {
  var ul = document.querySelector('.tabs__ul');

  // создание таба
  var tab = document.createElement('li');
  tab.classList.add('tabs__ul-tab');
  ul.insertBefore(tab, addBtn);
  var tabText = document.createElement('div');
  tabText.classList.add('tabs__ul-tab-tab');
  tabText.innerHTML = 'Новая вкладка';
  tab.appendChild(tabText);
  var tabClose = document.createElement('div');
  tabClose.classList.add('tabs__ul-tab-close');
  tabClose.innerHTML = 'x';
  tab.appendChild(tabClose);
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

var counterId = 0;
var arrayId = [];
var addId = () => {
  var tabsId = document.querySelectorAll('.tabs__ul-tab');
  var tabsTtl = document.querySelectorAll('.tabs__ul-tab-tab');

  var articleId = document.querySelectorAll('.article');
  var articleIdTtl = document.querySelectorAll('.article__id');

  counterId++;
  arrayId.push(counterId);

//
  массив номеров айдишников табов

  при удалении таба, массив обновляется:
  1 найти в айдишнике порядковый номер;
  findNumberInId();
  2 обновить массив ноемеров
  arrayIdUpdate();

  при добавлении таба срабатывает цикл:
  предлагается номер 1. если текущий номер есть, предлагается номер + 1
  doesIdExist();

  когда номер утвержден, он добавляется в четыре айдишника
  addIdToBlocks();
//

}





// делаем новый таб активным
var lastTabActive = () => {
  var allTabs = document.querySelectorAll('.tabs__ul-tab-tab');
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
  var tabItem = document.querySelectorAll('.tabs__ul-tab-tab');
  var article = document.querySelectorAll('.article');
  var target = e.target;
  if (!target.classList.contains('tabs__ul-tab-tab')) return ;
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
  var deleteTabBtn = document.querySelectorAll('.tabs__ul-tab-close');
  var tab = document.querySelectorAll('.tabs__ul-tab');
  var article = document.querySelectorAll('.article');
  for (var i = 0; i < deleteTabBtn.length; i++) {
    if (target == deleteTabBtn[i]) {
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
