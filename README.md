# node
Проект #4 - Node-Modules

Формулировка на проекта
Да се разработи shapes2D модул за изчисляване на повърхнина и периметър на пространствени фигури (окръжност, правоъгълник и триъгълник). Разработеният модул да бъде качен в регистъра на npm (https://www.npmjs.com), съпроводен с необходимата документация.

Начин на използване:
1. Свалете си проекта
2. Отворете cmd
3. Достъпете съответната папка с проекта
4. Въведете командата node test.js - така ще се изпълни предварително извиканите функции с хардкоднати променливи от файла test.js

Друг вариант за единично достъпване на функции в конзолата:
- node //за да влезем в node mode-a
- var shapes = require("./module") //за да извикаме нужния файл
- shapes //за да видим наличните променливи и функции
- shapes.circleP(3) //за да извикаме функцията circle за периметър с примерен параметър 3
- shapes.rectangleP(2,3) //периметърът на правоъгълника приема 2 агрумента
- shapes.triangleP(2,3,4) //периметърът на триъгълника приема 3 аргумента
- shapes.circleA(3) //повърхнината на окръжността приема 1 аргумент за радиус
- shapes.rectangleA(2,3) //повърхнината на правоъгълника приема 2 агрумента
- shapes.triangleA(2,3,4) //повърхнината на триъгълника приема 3 аргумента
