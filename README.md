Установка:

1. Установить NodeJS https://nodejs.org/en/download/prebuilt-installer
2. установить глобально sharp `npm i -g sharp`
3. установить глобально путь до node_modules
3.1 для mac os `export NODE_PATH=$(npm root -g)` 
3.2 для windows `npm root -g`, затем `set NODE_PATH=путь`

impose:

Имена столбцов таблицы:
1. 'Название альбома',
2. 'Имя участника',
3. 'Разворот' с любым префиком или постфиксом. Пример: 'Разворот1', 'Разворот 1', '1 Разворот', '1Разворот'

Создать релиз
1. git tag v.***
1. git push origin v.***