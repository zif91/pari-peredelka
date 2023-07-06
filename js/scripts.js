// Custom Scripts
// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();

function setupHero() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null;
  }

  const link1 = document.querySelector('.hero__link--green');
  const link2 = document.querySelector('.hero__link--transparent');
  const link3 = document.querySelector('.hero__link--transparent span');
  const link12 = document.querySelector('.hero__link--green--2');

  const navbar = document.querySelector('.nav');
  const menuItems = document.querySelectorAll('.menu__item-link');

  function addEventListeners() {
    link1.addEventListener('mouseenter', handleMouseEnter);
    link1.addEventListener('mouseout', handleMouseOut);

    link2.addEventListener('mouseenter', handleMouseEnter2);
    link2.addEventListener('mouseout', handleMouseOut);

    link3.addEventListener('mouseenter', handleMouseEnter);
    link3.addEventListener('mouseout', handleMouseOut);

    if (link12) {
      link12.addEventListener('mouseenter', handleMouseEnter12);
      link12.addEventListener('mouseout', handleMouseOut);
    }
  }

  function handleMouseEnter() {
    container.classList.add('green');
    navbar.style.background = 'transparent';
    menuItems.forEach(element => {
      element.style.color = '#343a40';
    });
    
  }

  function handleMouseEnter2() {
    container.classList.add('transparent');
    navbar.style.background = 'transparent';
    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });
  }

  function handleMouseEnter12() {
    container.classList.add('green2');
    navbar.style.background = 'transparent';
    menuItems.forEach(element => {
      element.style.color = '#343a40';
    });
  }

  function handleMouseOut() {
    container.classList.remove('green');
    container.classList.remove('green2');
    container.classList.remove('transparent');
    navbar.style.background = 'white';
    menuItems.forEach(element => {
      element.style.color = '#343a40';
    });
  }

  addEventListeners();
}

setupHero();
/*document.getElementsByClassName("accordion__content-open")[0].style.display = "flex";*/

const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion(event) {
  // Проверяем, содержит ли кликнутый элемент класс "accordion__header-btn"
  if (
    event.target.classList.contains('accordion__header-btn') ||
    event.target.classList.contains('accordion__header-btn2') ||
    event.target.classList.contains('teststudy')
  ) {
    return; // Прерываем выполнение функции
  }

  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
      try { openAccordion.getElementsByClassName("accordion__content-open")[0].style.display = "none"; } catch { }
    }
  }

  this.classList.toggle('active'); // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
      this.getElementsByClassName("accordion__content-open")[0].style.display = "none";
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + 'px';
      this.getElementsByClassName("accordion__content-open")[0].style.display = "flex";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}

if (accordionItems.length > 1) {
  accordionItems.forEach((item) => item.addEventListener('click', toggleAccordion));
}





const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

function testSlider() {
  const container = document.querySelector('.test__slider');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".test__slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".test__slider-next",
      prevEl: ".test__slider-prev",
    },
  });

}

testSlider();

function charSlider() {
  const container = document.querySelector('.char__info-slider');

  if (!container) {
    return null
  }
  // Получаем список всех элементов char__select-item
  const selectItems = document.querySelectorAll('.char__select-item');

  // Получаем swiper
  const swiper = new Swiper('.char__info-slider', {
    slidesPerView: 1,
  });

  // Добавляем обработчик события клика на каждый элемент char__select-item
  selectItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Активируем соответствующий слайд в swiper
      swiper.slideTo(index);
    });
  });
}

charSlider();

AOS.init({
  disable: 'phone',
});

//new fullpage('#fullpage', {
    //options here
  //  autoScrolling:true,
    //sectionSelector: 'section',
  //  scrollHorizontally: true
 // });
  // JavaScript-код


 /*$(document).ready(function() {

    var link = $(".accordion__header-btn");

    link.click(function(e) {
      e.preventDefault();

      var vacancy = link.data("vacancy");
      var tz = link.data("tz");

      var formName = (tz === "No") ? "#form1" : "#form2";

      // Set the value in the vacancy input field
      $(formName).find("#vacancy").val(vacancy);

      // Open FancyBox with the corresponding form
      $.fancybox.open({
        src: formName,
        type: "inline"
      });
    });
  });*/

 // JavaScript code
 document.addEventListener("DOMContentLoaded", function() {
  var fileInput = document.getElementById("resume");
  var fileNameDisplay = document.getElementById("file-name");

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", function() {
      var files = fileInput.files;

      if (files.length > 0) {
        fileNameDisplay.textContent = "Selected file: " + files[0].name;
      } else {
        fileNameDisplay.textContent = ""; // Clear the display if no file is selected
      }
    });
  }
});

  
  var formActionButtons = document.querySelectorAll('[data-url^="/formvac.html"]');
  if (formActionButtons) {
    formActionButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Выполняем асинхронный запрос на сервер
        var xhr = new XMLHttpRequest();
        var url = button.getAttribute('data-url');
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Получаем содержимое страницы
            var response = xhr.responseText;
  
            // Заменяем содержимое элемента ajax-form
            var ajaxForm = document.querySelector('.ajax-form');
            ajaxForm.innerHTML = response;
  
            // Получаем значение data-title
            var dataTitle = button.getAttribute('data-title');
  
            // Находим поле вакансии внутри формы
            var vacancyInput = ajaxForm.querySelector('.input.vacancy');
  
            // Подставляем значение data-title в поле вакансии
            vacancyInput.value = dataTitle;
  
            // Делаем поле вакансии неактивным (disable)
            vacancyInput.disabled = true;
  
            // Выполняем прокрутку до формы
            ajaxForm.scrollIntoView({ behavior: 'smooth' });

            var fileInput = ajaxForm.querySelector('.input.file');
          if (fileInput) {
            fileInput.addEventListener('change', handleFileChange);
          }
          }
        };
        xhr.send();
      });
    });
  }
  function handleFileChange(event) {
    var fileInput = event.target;
    var selectedFile = fileInput.files[0];
    var fileNameDisplay = document.getElementById('file-name');
    if (fileNameDisplay) {
      fileNameDisplay.textContent = selectedFile ? selectedFile.name : '';
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var testInput = document.getElementById("test");
    var testValueDisplay = document.getElementById("test-value");
  
    if (testInput && testValueDisplay) {
      testInput.addEventListener("input", function() {
        var value = testInput.value;
  
        testValueDisplay.textContent = "Selected value: " + value;
      });
    }
  
    // Привязываем обработчик событий для поля выбора файла при загрузке страницы
    var fileInput = document.querySelector('.input.file');
    if (fileInput) {
      fileInput.addEventListener('change', handleFileChange);
    }
  });
  var formActionButtons = document.querySelectorAll('[data-url^="/forma-bez-fajla.html"]');
if (formActionButtons) {
  formActionButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Выполняем асинхронный запрос на сервер
      var xhr = new XMLHttpRequest();
      var url = button.getAttribute('data-url');
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Получаем содержимое страницы
          var response = xhr.responseText;

          // Заменяем содержимое элемента ajax-form
          var ajaxForm = document.querySelector('.ajax-form');
          ajaxForm.innerHTML = response;

          // Получаем значение data-title
          var dataTitle = button.getAttribute('data-title');

          // Находим поле вакансии внутри формы
          var vacancyInput = ajaxForm.querySelector('.input.vacancy');

          // Подставляем значение data-title в поле вакансии
          vacancyInput.value = dataTitle;

          // Делаем поле вакансии неактивным (disable)
          vacancyInput.disabled = true;

          // Выполняем прокрутку до формы
          ajaxForm.scrollIntoView({ behavior: 'smooth' });

          var fileInput = ajaxForm.querySelector('.input.file');
          if (fileInput) {
            fileInput.addEventListener('change', handleFileChange);
          }
        }
      };
      xhr.send();
    });
  });
}
document.addEventListener("DOMContentLoaded", function() {
  var testInput = document.getElementById("test");
  var testValueDisplay = document.getElementById("test-value");

  if (testInput && testValueDisplay) {
    testInput.addEventListener("input", function() {
      var value = testInput.value;

      testValueDisplay.textContent = "Selected value: " + value;
    });
  }
});


/*
$(document).ready(function() {
  if ($('.about__icons').length > 0) {
    var aboutInner = $('.about__inner');
    var icons = $('.about__icons');
    
    // Создаем экземпляр Intersection Observer
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        // Проверяем, если элемент стал видимым
        if (entry.isIntersecting) {
          // Применяем класс с плавным переходом
          aboutInner.addClass('align-items-start');
          
          // Отключаем наблюдение после выполнения
          observer.unobserve(entry.target);
        }
      });
    });
  
    // Наблюдаем за элементом
    observer.observe(icons[0]);
  }
});

*/
function testSlider2() {
  const container = document.querySelector('.test-2 .test__slider');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".test-2 .test__slider", {

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

    navigation: {
      nextEl: ".test__slider-next",
      prevEl: ".test__slider-prev",
    },
  });

}
if (document.querySelector('.char__info-slider')) {
  testSlider2();

  function charSlider() {
    const container = document.querySelector('.char__info-slider');

    if (!container) {
      return null;
    }
    // Получаем список всех элементов char__select-item
    const selectItems = document.querySelectorAll('.char__select-item');

    // Получаем swiper
    const swiper = new Swiper('.char__info-slider', {
      slidesPerView: 1,
    });

    // Добавляем обработчик события клика на каждый элемент char__select-item
    selectItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        // Активируем соответствующий слайд в swiper
        swiper.slideTo(index);
      });
    });
  }

  charSlider();
}

AOS.init({
  disable: 'phone',
});

function activateScript() {
  $('.accordion__header-btn').on('click', function(event) {
    event.preventDefault();

    var link = $(this);
    var vacancy = link.data('vacancy');
    var tz = link.data('tz');
    var id = link.data('id');

    tz = tz.toLowerCase(); // Приведение значения к нижнему регистру

    var url;
    if (tz === 'no') {
      url = '/forma-bez-fajla.html';
    } else if (tz === 'yes') {
      url = '/formvac.html';
    } else {
      console.log('Invalid value for data-tz');
      return; // Прекратить выполнение скрипта
    }

    var footerFormInner = $('.ajax-form');
    if (footerFormInner.length > 0) {
      $.ajax({
        url: url + '?rand=' + Math.random(), // Добавление случайного значения в URL запроса
        success: function(response) {
          footerFormInner.html(response);
        
          if (document.querySelector('.test-2')) {
            // Если есть хотя бы один элемент с классом 'test-2', выполнить fullpage_api.moveSectionDown()
            fullpage_api.moveSectionDown();
          } else {
            // В противном случае выполнить прокрутку до footerFormInner
            $('html, body').animate({
              scrollTop: footerFormInner.offset().top
            }, 500);
          }
          
          $('#vakancy2').attr('value', vacancy);
          document.querySelector('#vakancy2').disabled = true;
          $('input[name="vacid"]').val(id);
        },
        
        error: function() {
          console.log('Error occurred during loading the form.');
        }
      });
    } else {
      console.log('Element with class .ajax-form not found.');
    }
  });
}


  // Другой код вашего скрипта

  // ...


// Вызов функции при инициализации документа
$(document).ready(function() {
  activateScript();
});

// Вызов функции при срабатывании события ajaxComplete или ajaxSuccess
$(document).ajaxComplete(function() {
  activateScript();
});

$(document).ajaxSuccess(function() {
  activateScript();
});

document.addEventListener('DOMContentLoaded', function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < anchorLinks.length; i++) {
    var link = anchorLinks[i];

    if (link.id === 'moveSectionDown') {
      // Если ID равен 'moveSectionDown', пропустить обработку
      continue;
    }

    link.addEventListener('click', function(event) {
      event.preventDefault();

      var targetId = this.getAttribute('href');
      var targetElement = null;

      if (targetId && targetId !== '#' && !this.classList.contains('test__pictures-link')) {
        targetElement = document.querySelector(targetId);
      }

      if (targetElement) {
        var offset = targetElement.offsetTop - 100;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var moveSectionDownButton = document.querySelector('#moveSectionDown');
  if (moveSectionDownButton) {
    moveSectionDownButton.addEventListener('click', function(e) {
      e.preventDefault();
      fullpage_api.moveSectionDown();
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var moveSectionDownButton = document.querySelector('#moveSectionDown2');
  if (moveSectionDownButton) {
    moveSectionDownButton.addEventListener('click', function(e) {
      e.preventDefault();
      fullpage_api.moveSectionDown();
    });
  }
});
