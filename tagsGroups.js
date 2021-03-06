
//
function comentHtml()
{
document.title="Комментарий";
styleHtml()
ColorLi()
document.getElementById("liComentHtml").style.backgroundColor="Gainsboro";
document.getElementById("Txt").innerHTML ='\
<Br>&#60!--  -->\
<Br>\
'
}
function Doctype()
{
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>HTML 4.01\
<Br>\
<Br>&#60;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\
<Br>Строгий синтаксис HTML.\
<Br>\
<Br>&#60;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\
<Br>Переходный синтаксис HTML.\
<Br>\
<Br>&#60;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">\
<Br>В HTML-документе применяются фреймы.\
<Br>\
<Br>HTML 5\
<Br>\
<Br>&#60;!DOCTYPE html>\
<Br>Для всех документов.\
<Br>\
<Br>Синтаксис\
<Br>&#60;!DOCTYPE [Элемент верхнего уровня] [Публичность] "[Регистрация]//[Организация]//[Тип] [Имя]//[Язык]" "[URL]">\
<Br>\
<Br>Параметры\
<Br>\
<Br>Элемент верхнего уровня — указывает элемент верхнего уровня в документе, для HTML это тег <html>.\
<Br>\
<Br>Публичность — объект является публичным (значение PUBLIC) или системным ресурсом (значение SYSTEM), например, таким как локальный файл. Для HTML/XHTML указывается значение PUBLIC. \
<Br>\
<Br>Регистрация — сообщает, что разработчик DTD зарегистрирован в международной организации по стандартизации (International Organization for Standardization, ISO). Принимает одно из двух значений: плюс (+) — разработчик зарегистрирован в ISO и - (минус) — разработчик не зарегистрирован. Для W3C значение ставится «-».\
<Br>\
<Br>Организация — уникальное название организации, разработавшей DTD. Официально HTML/XHTML публикует W3C, это название и пишется в &#60;!DOCTYPE>.\
<Br>\
<Br>Тип — тип описываемого документа. Для HTML/XHTML значение указывается DTD.\
<Br>\
<Br>Имя — уникальное имя документа для описания DTD.\
<Br>\
<Br>Язык — язык, на котором написан текст для описания объекта. Содержит две буквы, пишется в верхнем регистре. Для документа HTML/XHTML указывается английский язык (EN).\
<Br>\
<Br>URL — адрес документа с DTD.\
<Br>\
<Br>Закрывающий тег не требуется.\
<Br>\
<Br>\
'
}
//
function meta()
{
styleHtml()
document.title="meta";
document.getElementById("Txt").innerHTML ='\
<Br>&#60meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\
<Br>Атрибуты\
<Br>\
<Br>charset\
<Br>Задает кодировку документа.\
<Br>\
<Br>content\
<Br>Устанавливает значение атрибута, заданного с помощью name или http-equiv.\
<Br>\
<Br>http-equiv\
<Br>Предназначен для конвертирования метатега в заголовок HTTP.\
<Br>\
<Br>name\
<Br>Имя метатега, также косвенно устанавливает его предназначение.\
<Br>\
<Br>Закрывающий тег не требуется.\
<Br>\
'
}
//
function pageHtml()
{
document.title="Форма страницы HTML";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>&#60html>\
<Br>&#60head>\
<Br>&#60title>&#60/title>\
<Br>&#60/head>\
<Br>&#60body>\
<Br>\
<Br>&#60/body>\
<Br>&#60/html>\
<Br>\
'
}
//
function tagCss()
{
document.title="Теги CSS";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>Стили через link\
<Br>&#60link rel="Stylesheet" href="Style.css" type="text/css">\
<Br>\
<Br>Стили в head\
<Br>&#60style rel="stylesheet" type="text/css">\
<Br>\
<Br>&#60/style>\
<Br>\
<Br>Стили внутри тега\
<Br>&#60;Тег style=\' \'&#62; &#60;Тег&#62;\
<Br>&#60;Тег style=\" \"&#62; &#60;Тег&#62;\
<Br>\
<Br>&#60;style=\' \'&#62; &#60;&#62;\
<Br>&#60;style=\" \"&#62; &#60;&#62;\
<Br>\
'
}
//
function tagJavaScript()
{
document.title="Теги JavaScript";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60Script type="text/JavaScript" src="Script.js"></Script>\
<Br>\
<Br>&#60Script type="text/JavaScript">\
<Br>\
<Br>&#60/Script>\
<Br>\
<Br>&#60body onload="">\
<Br>\
<Br>&#60noscript>&#60/noscript>\
<Br>Определяет секцию, не поддерживающую сценарий (скрипт).\
<Br>\
<Br>&#60canvas>&#60/canvas>\
<Br>Определяет графики.\
'
}
//
function Table()
{
document.title="Table";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>\
<Br>&#60Table>\
<Br>&#60caption>&#60/caption>\
<Br>&#60Tr>\
<Br>&#60Th>&#60/Th>\
<Br>&#60/Tr>\
<Br>&#60Tr>\
<Br>&#60Td>&#60/Td>&#60Td>&#60/Td>\
<Br>&#60/Tr>\
<Br>&#60Tr>\
<Br>&#60Td>&#60/Td>&#60Td>&#60/Td>\
<Br>&#60/Tr>\
<Br>&#60/Table>\
<Br>\
'
}
//
function UlLi()
{
document.title="Теги Ul Li";
styleHtml()
document.getElementById("Txt").innerHTML ='\
<Br>&#60ul>\
<Br>&#60li>&#60/li>\
<Br>&#60li>&#60/li>\
<Br>&#60li>&#60/li>\
<Br>&#60/ul>\
<Br>\
'
}
