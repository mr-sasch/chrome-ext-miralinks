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

// добавление Айдишников
var arrayIds = [];
var numberForId = 0;

  // функции
    // предлагаем номер, которого еще нет в массиве
var proposeNumber = () => {
  var elements = document.querySelectorAll('.tabs__ul-tab');
  for (var number = 0; number < elements.length; number++) {
    if (doesNumberExist(arrayIds, number) === false) {
      return number;
    }
  }
  return number;
}
    // /предлагаем номер, которого еще нет в массиве

    // проверяем, есть ли номер в массиве
var doesNumberExist = (arrayIds, number) => {
  if (arrayIds.indexOf(number) === -1) {
    return false;
  } else {
    return true;
  }
}
    // /проверяем, есть ли номер в массиве

    // добавляем айдишники элементам
var addIdsToNewElements = (number) => {
  var tabsId = document.querySelectorAll('.tabs__ul-tab');
  var tabsTitle = document.querySelectorAll('.tabs__ul-tab-tab');
  var articleId = document.querySelectorAll('.article');
  var articleTitle = document.querySelectorAll('.article__id');

  var lastElement = tabsId.length - 1;
  tabsId[lastElement].setAttribute('id', 'extTab-' + number);
  tabsTitle[lastElement].innerHTML = '#' + number;
  articleId[lastElement].setAttribute('id', 'extArticle-' + number);
  articleTitle[lastElement].innerHTML = '#' + number + '. ';
}
    // /добавляем айдишники элементам

    // обновляем массив с номерами
!* var numbersArrayUpdate = () => {
  var tabsTitle = document.querySelectorAll('.tabs__ul-tab-tab');
  var arrayId = [];
  for (var i = 0; tabsTitle.length; i++) {
    var number = tabsTitle[i].String().split('').splice(0, 1).join('');
  }
}

    // /обновляем массив с номерами


  // /функции

var addId = () => {
  var number = proposeNumber();
  addIdsToNewElements(number);
  numbersArrayUpdate();




// //
// есть массив номеров элементов
// добавление:
// предлагается номер 1
// если уже есть в массиве - предлагается следующий
// если его еще нет, принимается. и на его основе формируются айдишники
// обновляется массив номеров()
//
// удаление:
// удаляется элемент
// обновляется массив номеров()
//
// функции:
// addId()
//   proposeNumber()
//     doesNumberExist(number) рекурсия
//       return number;
//   // numbersArrayUpdate(arrayId)
//     return arrayId;
//   addIdsToNewElements(number)
// //

}
// /добавление Айдишников





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
  // numbersArrayUpdate(); // обновляем массив номеров элементов
}

// /удаление таба

// ******************** /ФУНКЦИИ ********************



// ******************** СОБЫТИЯ ********************

// Добавление таба и статьи
addBtn.onclick = () => {
  createTab();
  createArticle();
  lastTabActive();
  addId();
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
