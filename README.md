# reusable-component-react

Реактивный компонент для отображения списка с автоматическим переносом и попапом для скрытых элементов.

## Установка

```bash
npm install
npm run start
# или
yarn install
yarn start
```

## Сборка

```bash
npm run build
# или
yarn build
```

## Использование

```typescript
import { ChipList } from './ChipList';

const items = [
  { id: '1', label: 'React' },
  { id: '2', label: 'TypeScript' },
  { id: '3', label: 'CSS' },
  { id: '4', label: 'HTML' },
];

<ChipList items={items} />;
```

## Функционал

- Автоматическое скрытие элементов, если они не помещаются в контейнер
- Кнопка ```...``` для отображения скрытых элементов через попап
- Выбор элемента (выделение выбранного)
- Адаптивность при изменении ширины экрана

## Скрипты

```npm run format``` — форматирование кода с помощью Prettier

```npm start``` — запуск проекта

```npm run build``` — сборка проекта

## Технологии
- React + TypeScript
- ResizeObserver для динамического расчета видимых элементов