# SkleoNittoNux

Это форматер для конфигурации рецептов плагина Brewery в Markdawn таблицу.

Подготовка:

```bash
# Установите зависимости
npm install
```

Использование:

1. Добавьте вашу конфигурацию плагина (протестировано на v3.1)
2. Запустите скрипт:

```bash
npm run start
```

3. Результат в файле `res.md` (желательнно его потом отформатировать, но этого я пока не сделал)

Вы получите что-то типа такого:

```markdown
# РЕЗУЛЬТАТ

| Название         | Ингридиенты                     | Время приготовления | Время дистилляции | Древесина | Возраст | Точность | Алкогольность |
| ---------------- | ------------------------------- | ------------------- | ----------------- | --------- | ------- | -------- | ------------- |
| Яблочный сидр    | Apple x14                       | 7                   | Нет               | 0         | 3       | 4        | 7             |
| Глорп            | dandelion x1, grass x2          | 3                   | 1                 | Нет       | Нет     | Нет      | 0             |
| Картофельный суп | Potato x5, Grass x3             | 3                   | Нет               | Нет       | Нет     | 1        | 0             |
| Квас             | Wheat x4                        | 5                   | 2                 | Нет       | Нет     | Нет      | 4             |
| Медовый коктель  | milk_bucket x1, honey_bottle x3 | 6                   | 3                 | Нет       | Нет     | Нет      | -2            |
```
