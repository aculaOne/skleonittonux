YAML = require('yamljs');

// Load yaml file using YAML.load
const brc = YAML.load('config.yml');

const fs = require('fs');

fs.writeFileSync('res.md', "\# РЕЗУЛЬТАТ\n\n| Название | Ингридиенты | Время приготовления | Время дистилляции | Древесина | Возраст | Точность | Алкогольность |\n| -------- | ----------- | ------------------- | ------- | -------- | ------------- |\n");
for (const [key, value] of Object.entries(brc.recipes).sort((a, b) => a[1].name.localeCompare(b[1].name))) {
    if (key === 'ex') continue;

    let rName = value.name;
    const rNames = value.name.split("/");
    if (rNames.length === 3) rName = rNames[1];
    value.ingredients = value.ingredients.map(i => i.replace('/', ' x'));

    fs.appendFileSync('res.md', `| ${rName} | ${value.ingredients.join(", ")} | ${value.cookingtime} | ${value.distilltime ?? "Нет"} | ${value.wood ?? "Нет"} | ${value.age ?? "Нет"} | ${value.difficulty ?? "Нет"} | ${value.alcohol ?? 0} |\n`);
}

