
// Функция стиля блока
function styleHtml()
{
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position = "absolute";
document.getElementById("Txt").style.top ="1%";
document.getElementById("Txt").style.right = "1%";
document.getElementById("Txt").style.width ="62%";
document.getElementById("Txt").style.height = "91%";
document.getElementById("Txt").style.overflow = "scroll";
document.getElementById("Txt").style.border = "2px solid #777777";
document.getElementById('Txt').style.fontSize='100%';
document.getElementById('Txt').style.textIndent="30px"; //* Отступ первой строки *//
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="3%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
}
//
function Div()
{
ColorLi()
document.getElementById("liDiv").style.backgroundColor="Gainsboro";
document.title="Div";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60Div>&#60Div>\
<Br>\
<Br>&#60Div Class="">&#60Div>\
<Br>\
<Br>&#60Div Id="">&#60Div>\
<Br>\
<Br>&#60Div Class="" Id="">&#60Div>\
<Br>\
'
}
//
function Span()
{
ColorLi()
document.getElementById("liSpan").style.backgroundColor="Gainsboro";
document.title="Span";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60Span>&#60/Span>\
<Br>\
<Br>&#60Span Class="">&#60/Span>\
<Br>\
<Br>&#60Span Id="">&#60/Span>\
<Br>\
<Br>&#60Span Class=""  Id="">&#60/Span>\
<Br>\
'
}
//
function A()
{
ColorLi()
document.getElementById("liA").style.backgroundColor="Gainsboro";
document.title="A";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60a>&#60/a>\
<Br>\
<Br>&#60a Class="">&#60/a>\
<Br>\
<Br>&#60a Id="">&#60/a>\
<Br>\
<Br>&#60a Class="" Id="">&#60/a>\
'
}
// Button
function Buton()
{
ColorLi()
document.getElementById("liButon").style.backgroundColor="Gainsboro";
document.title="Button";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60button>&#60/button>\
<Br>\
<Br>&#60button Class="">&#60/button>\
<Br>\
<Br>&#60button Id="">&#60/button>\
<Br>\
<Br>&#60button Class="" Id="">&#60/button>\
'
}
function tags()
{
ColorLi()
document.getElementById("liTag").style.backgroundColor="Gainsboro";
document.title="Alphabet";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>Строковые теги:\
<Br>&#60abbr>&#60/abbr>\
<Br>Определяет аббревиатуру.\
<Br>\
<Br>&#60article>&#60/article>\
<Br>Определяет статью.\
<Br>\
<Br>&#60blockquote>&#60/blockquote>\
<Br>Определяет длинную цитату.\
<Br>\
<Br>&#60br>&#60/br>\
<Br>Вставка одного разрыва строки.\
<Br>\
<Br>&#60bdo>&#60/bdo>\
<Br>Определяет направление отображения текста.\
<Br>\
<Br>&#60comment>&#60/comment>\
<Br>Определяет комментарий.\
<Br>\
<Br>&#60code>&#60/code>\
<Br>Определяет, что текст является программным кодом.\
<Br>\
<Br>&#60cite>&#60/cite>\
<Br>Определяет цитату или сноску на материал.\
<Br>\
<Br>&#60dd>&#60/dd>\
<Br>Определяет описание определения.\
<Br>\
<Br>&#60dfn>&#60/dfn>\
<Br>Определяет определение термина.\
<Br>\
<Br>&#60h1>&#60/h1>\
<Br>&#60h2>&#60/h2>\
<Br>&#60h3>&#60/h3>\
<Br>&#60h4>&#60/h4>\
<Br>&#60h5>&#60/h5>\
<Br>&#60h6>&#60/h6>\
<Br>Определяет заголовок с 1 по 6 заголовок.\
<Br>\
<Br>&#60b>&#60/b>\
<Br>Определяет жирный текст.\
<Br>\
<Br>&#60big>&#60/big>\
<Br>Не поддерживается. Определяет большой текст.\
<Br>\
<Br>&#60del>&#60/del>\
<Br>Определяет удаленный текст.\
<Br>\
<Br>&#60em>&#60/em>\
<Br>Определяет выделенный текст.\
<Br>\
<Br>&#60font>&#60/font>\
<Br>Устаревший. Определяет шрифт текста, размер и цвет.\
<Br>\
<Br>&#60i>&#60/i>\
<Br>Определяет курсив.\
<Br>\
<Br>&#60ins>&#60/ins>\
<Br>Определяет вставленный (обновленный) текст.\
<Br>\
<Br>&#60kbd>&#60/kbd>\
<Br>Определяет текст, набранный на клавиатуре.\
<Br>\
<Br>&#60mark>&#60/mark>\
<Br>Определяет выделенный текст.\
<Br>\
<Br>&#60p>&#60/p>\
<Br>Определяет параграф (абзац).\
<Br>\
<Br>&#60pre>&#60/pre>\
<Br>Определяет выровненный (форматированный) текст.\
<Br>\
<Br>&#60q>&#60/q>\
<Br>Определяет краткую цитату.\
<Br>\
<Br>&#60s>&#60/s>\
<Br>Не поддерживается. Определяет зачеркнутый текст.\
<Br>\
<Br>&#60samp>&#60/samp>\
<Br>Определяет образец программного кода.\
<Br>\
<Br>&#60small>&#60/small>\
<Br>Определяет мелкий текст.\
<Br>\
<Br>&#60strike>&#60/strike>\
<Br>Не поддерживается. Определяет зачеркнутый текст.\
<Br>\
<Br>&#60strong>&#60/strong>\
<Br>Определяет выделенный жирный текст.\
<Br>\
<Br>&#60sub>&#60/sub>\
<Br>Определяет индексным текст.\
<Br>\
<Br>&#60sup>&#60/sup>\
<Br>Определяет надстрочным текст.\
<Br>\
<Br>&#60tt>&#60/tt>\
<Br>Не поддерживается. Определяет телетайп текст.\
<Br>\
<Br>&#60u>&#60/u>\
<Br>Не поддерживается. Определяет подчеркнутый текст.\
<Br>\
<Br>&#60xmp>&#60/xmp>\
<Br>Не поддерживается. Определяет выровненный текст.\
<Br>Теги пространства\
<Br>&#60center>&#60/center>\
<Br>Не поддерживается. Определяет текст по центру.\
<Br>\
<Br>&#60thead>&#60/thead>\
<Br>Определяет заголовок таблицы.\
<Br>\
<Br>&#60tbody>&#60/tbody>\
<Br>Определяет тело таблицы.\
<Br>\
<Br>&#60col>&#60/col>\
<Br>Определяет атрибуты для столбцов таблицы.\
<Br>\
<Br>&#60colgroup>&#60/colgroup>\
<Br>Определяет групп столбцов таблицы.\
<Br>\
<Br><frame></frame>\
<Br>Не поддерживается. Определяет фрейм.\
<Br>\
<Br>&#60frameset>&#60/frameset>\
<Br>Не поддерживается. Определяет набор фреймов.\
<Br>\
<Br>&#60noframes>&#60/noframes>\
<Br>Не поддерживается. Определяет секцию, не поддерживающую фрейм.\
<Br>Стили\
<Br>\
<Br>&#60basefont>&#60/basefont>\
<Br>Не поддерживается. Используетя вместо CSS для задания шрифта.\
<Br>\
<Br>&#60acronym>&#60/acronym>\
<Br>Не поддерживается. Определяет акроним.\
<Br>\
<Br>&#60address>&#60/address>\
<Br>Определяет элемент с адресом.\
<Br>\
<Br>&#60applet>&#60/applet>\
<Br>Не поддерживается. Определяет апплет.\
<Br>\
<Br>&#60area>&#60/area>\
<Br>Определяет область внутри изображения карты.\
<Br>\
<Br>&#60aside>&#60/aside>\
<Br>Определяет контент в стороне от основного контента страницы.\
<Br>\
<Br>&#60audio>&#60/audio>\
<Br>Определяет аудио контент.\
<Br>\
<Br>&#60base>&#60/base>\
<Br>Определяет базовый URL для всех относительных ссылок на странице.\
<Br>\
<Br>&#60command>&#60/command>\
<Br>Определяет командную кнопку.\
<Br>\
<Br>&#60datagrid>&#60/datagrid>\
<Br>Определяет данные в упорядоченный список.\
<Br>\
<Br>&#60datalist>&#60/datalist>\
<Br>Определяет выпадающий список.\
<Br>\
<Br>&#60datatemplate>&#60/datatemplate>\
<Br>Определяет шаблон данных.\
<Br>\
<Br>&#60details>&#60/details>\
<Br>Определяет детали элемента.\
<Br>\
<Br>&#60dialog>&#60/dialog>\
<Br>Определяет диалог (разговор).\
<Br>\
<Br>&#60dir>&#60/dir>\
<Br>Не поддерживается.\
<Br>Определяет список директорий.\
<Br>\
<Br>&#60dl>&#60/dl>\
<Br>Определяет список определений.\
<Br>\
<Br>&#60dt>&#60/dt>\
<Br>Определяет определение термина в списке.\
<Br>\
<Br>&#60embed>&#60/embed>\
<Br>Определяет внешний интерактивный контент или плагин.\
<Br>\
<Br>&#60eventsource>&#60/eventsource>\
<Br>Определяет цель события, отправляемого по серверу.\
<Br>\
<Br>&#60fieldset>&#60/fieldset>\
<Br>Определяет сгруппированный набор полей формы.\
<Br>\
<Br>&#60figure>&#60/figure>\
<Br>Определяет группу медиа-контента, и их подписи.\
<Br>\
<Br>&#60footer>&#60/footer>\
<Br>Определяет нижний колонтитул для раздела или страницы.\
<Br>\
<Br>&#60form>&#60/form>\
<Br>Определяет форму.\
<Br>\
<Br>&#60header>&#60/header>\
<Br>Определяет область заголовка раздела или страницы.\
<Br>\
<Br>&#60hr>&#60/hr>\
<Br>Определяет горизонтальную линию.\
<Br>\
<Br>&#60iframe>&#60/iframe>\
<Br>Определяет встроенный фрейм.\
<Br>\
<Br>&#60img>&#60/img>\
<Br>Определяет изображение.\
<Br>\
<Br>&#60input>&#60/input>\
<Br>Определяет поле ввода.\
<Br>\
<Br>&#60isindex>&#60/isindex>\
<Br>Не поддерживается. Определяет поисковый индекс в документе.\
<Br>\
<Br>&#60label>&#60/label>\
<Br>Определяет метку для элемента формы.\
<Br>\
<Br>&#60legend>&#60/legend>\
<Br>Определяет заголовок группы элементов формы.\
<Br>\
<Br>&#60map>&#60/map>\
<Br>Определяет изображение карты.\
<Br>\
<Br>&#60menu>&#60/menu>\
<Br>Определяет список меню.\
<Br>\
<Br>&#60meter>&#60/meter>\
<Br>Определяет измерения в течение заранее определенного диапазона.\
<Br>\
<Br>&#60nav>&#60/nav>\
<Br>Определяет навигационные ссылки.\
<Br>\
<Br>&#60nest>&#60/nest>\
<Br>Определяет вложенную точку в шаблоне данных.\
<Br>\
<Br>&#60object>&#60/object>\
<Br>Определяет внедренный объект.\
<Br>\
<Br>&#60ol>&#60/ol>\
<Br>Определяет упорядоченный список.\
<Br>\
<Br>&#60optgroup>&#60/optgroup>\
<Br>Определяет группу вариантов в раскрывающемся списке.\
<Br>\
<Br>&#60option>&#60/option>\
<Br>Определяет вариант в раскрывающемся списке.\
<Br>\
<Br>&#60output>&#60/output>\
<Br>Определяет некоторые виды результата.\
<Br>\
<Br>&#60param>&#60/param>\
<Br>Определяет параметр для объекта.\
<Br>\
<Br>&#60progress>&#60/progress>\
<Br>Определяет ход выполнения задачи любого рода.\
<Br>\
<Br>&#60rule>&#60/rule>\
<Br>Определяет правила для обновления шаблонов.\
<Br>\
<Br>&#60section>&#60/section>\
<Br>Определяет раздел (секцию).\
<Br>\
<Br>&#60select>&#60/select>\
<Br>Определяет список для выбора.\
<Br>\
<Br>&#60source>&#60/source>\
<Br>Определяет медиа-ресурсы.\
<Br>\
<Br>&#60textarea>&#60/textarea>\
<Br>Определяет область ввода текста.\
<Br>\
<Br>&#60tfoot>&#60/tfoot>\
<Br>Определяет колонтитул таблицы.\
<Br>\
<Br>&#60time>&#60/time>\
<Br>Определяет дату/время.\
<Br>\
<Br>&#60var>&#60/var>\
<Br>Определяет переменную.\
<Br>\
<Br>&#60video>&#60/video>\
<Br>Определяет видео.\
<Br>\
<Br>'
}
