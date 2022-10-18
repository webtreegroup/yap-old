## Приложение - Мессенджер
## Прототипы и дизайн

Прототипы находятся в директории ui в корне проекта, в формате .png. При разработке использоваться сервис moqups.com. За основу был взят готовый дизайн.

## Стили

На проекте используется SCSS, исходники находятся в папке `./src/style`

## Типизация

На проекте используется Typescript, файлы `.ts` находятся в папке `./src`

## Тесты

На проекте используется Jest, файлы `.spec.ts` находятся рядом с тестируемыми компонентами и частями приложения. Настройки для тестов находятся в `./testsSetup`. Для запуска тестов необходимо набрать комманду: `npm run test`.  
Т.к. в качестве шаблонизатора на проекте были использованы шаблонные строки, то тесты для шаблонизатора пересекаются с тестами для Block, все вместе лежит тут `src\core\block\Block.spec.ts`. Тестами покрыто только самое необходимое (пара утилит не в счет, остальное будет покрываться между делом, по мере работы над проектом).  
**ВАЖНО - При тестировании АПИ `src\core\api\api.spec.ts`, была необходимость использования `// @ts-ignore` для мокирования АПИ.

## АПИ

Базовый модуль раположен тут `src\core\api\api.ts`, разбит на несколько специализированных сервисов, например `AuthAPI` из `src\core\api\auth.api.ts`. Обращение к АПИ идет через контейнерные компоненты (по типу React, отвечают за бизнес логику) вида `BlockContainer`, лежит рядом с соответствующим презентационными компонентом.

## Структура проекта

```
-- src  
  |-- components (общие компоненты)  
  |-- core (базовые компоненты)  
      |-- api (модуль отправки запросов)
      |-- block (базовый компонент и EvenBus)
      |-- router (модуль маршрутизации)
      |-- store (модуль хранилища)
      |-- websocker (модуль WS)
  |-- pages (компоненты страниц)  
  |-- utils (shared полезные функции)  
  |-- style (shared файлы стилей)  
-- static (содержит build .css и .js)  
-- ui (мокапы проекта)  
```

## Запуск приложения

`npm run start`

## Сборка приложения

`npm run build`

## Доступные страницы

- `/signin` - Вход
- `/signup` - Регистрация
- `/chats` - Список чатов
- `/chats/:id` - Конкретный чат
- `/profile` - Профиль пользователя
- `/profile/edit` - Редактирование данных профиля
- `/profile/edit-pass` - Редактирование пароля профиля
- `/404` - 404 (по сути любой не известный маршрут)

Роутинг осуществляется на стороне клиента, все маршруты завернуты на стр. `./index.html`

