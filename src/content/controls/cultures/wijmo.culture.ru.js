/*
    *
    * Wijmo Library 5.20183.567
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: ru (Russian)
 */
var wijmo;
(function (wijmo) {
    // process the scenario where "wijmo" !== "window['wijmo']", for example when culture file is loaded
    // using 'import' statement in a WebPack bundled app, where "wijmo" will be local to this module.
    if (!window['wijmo']) {
        window['wijmo'] = wijmo;
    }
    wijmo.culture = window['wijmo'].culture = {
        Globalize: {
            name: 'ru',
            displayName: 'Russian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₽', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                daysAbbr: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsAbbr: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['н.э.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'd MMMM yyyy "г."',
                    f: 'd MMMM yyyy "г." H:mm', F: 'd MMMM yyyy "г." H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy H:mm', G: 'dd.MM.yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ЗАКРЫТЬ',
            ctc: 'Пожалуйста, свяжитесь с GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Лицензия Wijmo в этом приложении недействительна для текущего домена. Домен лицензии <b>{licDomain}</b>; текущий домен <b>{domain}</b>.',
            evl: 'Пробная версия Wijmo ({version})',
            exp: 'Лицензия Wijmo в этом приложении истекла. Срок действия лицензии <b>{expDate:d}</b>.',
            hdr: 'Лицензия Wijmo',
            lic: 'Лицензия Wijmo в этом приложении недействительна.',
            mss: 'Лицензия Wijmo в этом приложении не установлена.',
            prd: 'Лицензия Wijmo в этом приложении недействительна для элемента управления <b>{control}</b>.',
            ver: 'Лицензия Wijmo в этом приложении недействительна для используемой версии. Версия лицензии <b>{licVer}</b>; версия продукта <b>{version}</b>.'
        },
        Calendar: {
            ariaLabels: {
                calendar: 'Календарь',
                monthView: 'По месяцам',
                yearView: 'Представление "Год"',
                prvMo: 'Предыдущий месяц',
                today: 'Сегодня',
                nxtMo: 'Следующий месяц',
                prvYr: 'Предыдущий год',
                currMo: 'Текущий месяц',
                nxtYr: 'Следующий год',
            }
        },
        DropDown: {
            ariaLabels: {
                tgl: 'Переключить раскрывающийся список'
            }
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} наименований)',
            ariaLabels: {
                toggleDropDown: 'Переключить раскрывающийся список',
                toggleGroup: 'Переключение группы'
            }
        },
        FlexGridDetailProvider: {
            ariaLabels: {
                toggleDetail: 'Переключить строку детализации'
            }
        },
        FlexGridFilter: {
            // aria labels
            ariaLabels: {
                edit: 'Редактирование фильтра для столбца',
                dialog: 'Редактор фильтров для столбца',
                asc: 'Столбец для сортировки в порядке возрастания',
                dsc: 'Столбец для сортировки в порядке убывания',
                search: 'Поиск элемента списка',
                op1: 'Первое условие оператора',
                val1: 'Первое условие-значение',
                and: 'Требуются оба условия',
                or: 'Требуется либо условие',
                op2: 'Второе условие-оператор',
                val2: 'Второе условие-значение'
            },
            // filter
            ascending: '\u2191 По возрастанию',
            descending: '\u2193 По убыванию',
            apply: 'Применить',
            cancel: 'Отмена',
            clear: 'Очистить',
            conditions: 'Фильтр по условию',
            values: 'Фильтр по значению',
            // value filter
            search: 'поиск',
            selectAll: 'Выбрать все',
            null: '(ничего)',
            // condition filter
            header: 'Показать элементы, значение которых',
            and: 'И',
            or: 'или',
            stringOperators: [
                { name: '(не задано)', op: null },
                { name: 'Равно', op: 0 },
                { name: 'не равно', op: 1 },
                { name: 'начинается с', op: 6 },
                { name: 'заканчивается на', op: 7 },
                { name: 'содержит', op: 8 },
                { name: 'Не содержит', op: 9 }
            ],
            numberOperators: [
                { name: '(не задано)', op: null },
                { name: 'Равно', op: 0 },
                { name: 'не равно', op: 1 },
                { name: 'Больше, чем', op: 2 },
                { name: 'Больше или равно', op: 3 },
                { name: 'меньше, чем', op: 4 },
                { name: 'Меньше или равно', op: 5 }
            ],
            dateOperators: [
                { name: '(не задано)', op: null },
                { name: 'Равно', op: 0 },
                { name: 'до', op: 4 },
                { name: 'после', op: 2 }
            ],
            booleanOperators: [
                { name: '(не задано)', op: null },
                { name: 'Равно', op: 0 },
                { name: 'не равно', op: 1 }
            ]
        },
        InputDateTime: {
            ariaLabels: {
                tglDate: 'Переключить календарь',
                tglTime: 'Список переключения времени'
            }
        },
        InputNumber: {
            ariaLabels: {
                incVal: 'Увеличить значение',
                decVal: 'Уменьшение значения'
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} пунктов выбрано',
            selectAll: 'Выбрать все'
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Настройки поля:',
                header: 'Заголовок:',
                summary: 'Итог:',
                showAs: 'Показывать как:',
                weighBy: 'Вес:',
                sort: 'Сортировка:',
                filter: 'Фильтр:',
                format: 'Формат:',
                sample: 'Пример:',
                edit: 'Редактировать…',
                clear: 'Отменить',
                ok: 'ОК',
                cancel: 'Отказаться',
                none: '(нет)',
                sorts: {
                    asc: 'По возрастанию',
                    desc: 'По убыванию'
                },
                aggs: {
                    sum: 'Сумма',
                    cnt: 'Количество',
                    avg: 'Среднее',
                    max: 'Максимум',
                    min: 'Минимум',
                    rng: 'Интервал',
                    std: 'СтдОткл',
                    var: 'Дисп',
                    stdp: 'СтдОтклГенСов',
                    varp: 'ДиспГенСов',
                    first: 'Первый',
                    last: 'Последний'
                },
                calcs: {
                    noCalc: 'Без вычислений',
                    dRow: 'Разница с предыдущей строкой',
                    dRowPct: 'Разница с предыдущей строкой в %',
                    dCol: 'Разница с предыдущей колонкой',
                    dColPct: 'Разница с предыдущей колонкой в %',
                    dPctGrand: '% от всего',
                    dPctRow: '% всего строк',
                    dPctCol: '% всего столбца',
                    dRunTot: 'Нарастающий итог',
                    dRunTotPct: '% работает всего'
                },
                formats: {
                    n0: 'Целое (n0)',
                    n2: 'Дробное (n2)',
                    c: 'Валюта (c)',
                    p0: 'Процент (p0)',
                    p2: 'Процент (p2)',
                    n2c: 'Тысячи (n2,)',
                    n2cc: 'Миллионы (n2,,)',
                    n2ccc: 'Миллиарды (n2,,,)',
                    d: 'Дата (d)',
                    MMMMddyyyy: 'Месяц День Год (MMMM dd, yyyy)',
                    dMyy: 'День Месяц Год (d/M/yy)',
                    ddMyy: 'День месяц год (dd/M/yy)',
                    dMyyyy: 'День Месяц Год (dd/M/yyyy)',
                    MMMyyyy: 'Месяц Год (MMM yyyy)',
                    MMMMyyyy: 'Месяц Год (MMMM yyyy)',
                    yyyyQq: 'Год Квартал (yyyy "Q"q)',
                    FYEEEEQU: 'Фискальный год Квартал ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Общий итог',
                subTotal: 'Подытог'
            },
            PivotPanel: {
                fields: 'Выберите поля отчета:',
                drag: 'Перетаскивайте поля между областями:',
                filters: 'Фильтры',
                cols: 'Колонки',
                rows: 'строки',
                vals: 'Значения',
                defer: 'Отложить обновление',
                update: 'Обновить'
            },
            _ListContextMenu: {
                up: 'Вверх',
                down: 'Вниз',
                first: 'В начало',
                last: 'В конец',
                filter: 'В Фильтры',
                rows: 'В Строки',
                cols: 'В Колонки',
                vals: 'В Значения',
                remove: 'Удалить поле',
                edit: 'Настройки поля…',
                detail: 'Детализация…'
            },
            PivotChart: {
                by: 'по',
                and: 'и'
            },
            DetailDialog: {
                header: 'Детализация:',
                ok: 'ОК',
                items: '{cnt:n0} строк',
                item: '{cnt} строка',
                row: 'Строка',
                col: 'Колонка'
            },
            Slicer: {
                multiSelect: 'Множественный выбор',
                clearFilter: 'Очистить фильтр'
            }
        },
        Viewer: {
            cancel: 'Отмена',
            ok: 'ОК',
            bottom: 'Снизу:',
            top: 'Сверху:',
            right: 'Справа:',
            left: 'Слева:',
            margins: 'Поля (дюймы)',
            orientation: 'Ориентация:',
            paperKind: 'Вид бумаги:',
            pageSetup: 'Параметры страницы',
            landscape: 'Альбомная',
            portrait: 'Книжная',
            pageNumber: 'Номер страницы',
            zoomFactor: 'Коэффициент масштабирования',
            paginated: 'Разбить на страницы',
            print: 'Печать',
            search: 'Поиск',
            matchCase: 'С учетом регистра',
            wholeWord: 'Слово целиком',
            searchResults: 'Результаты поиска',
            previousPage: 'Предыдущая страница',
            nextPage: 'Следующая страница',
            firstPage: 'Первая страница',
            lastPage: 'Последняя страница',
            backwardHistory: 'Назад',
            forwardHistory: 'Вперед',
            pageCount: 'Число страниц',
            selectTool: 'Выберите инструмент',
            moveTool: 'Инструмент "Переместить"',
            continuousMode: 'Непрерывное представление страницы',
            singleMode: 'Одностраничный вид',
            wholePage: 'Масштабировать по размеру страницы',
            pageWidth: 'Масштабировать по ширине',
            zoomOut: 'Уменьшить',
            zoomIn: 'Увеличить',
            rubberbandTool: 'Масштабирование выделением',
            magnifierTool: 'Лупа',
            rotatePage: 'Повернуть страницу',
            rotateDocument: 'Повернуть документ',
            exports: 'Экспорт',
            fullScreen: 'Во весь экран',
            exitFullScreen: 'Выйти из полноэкранного режима',
            hamburgerMenu: 'Инструменты',
            showSearchBar: 'Показать строку поиска',
            viewMenu: 'Параметры макета',
            searchOptions: 'Параметры поиска',
            matchCaseMenuItem: 'С учетом регистра',
            wholeWordMenuItem: 'Слово целиком',
            thumbnails: 'Миниатюры страниц',
            outlines: 'Схема документа',
            loading: 'Загрузка…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Веб-архив (MHTML)',
            htmlExportName: 'HTML-документ',
            rtfExportName: 'Документ RTF',
            metafileExportName: 'Сжатые метафайлы',
            csvExportName: 'CSV',
            tiffExportName: 'Изображения TIFF',
            bmpExportName: 'Изображения BMP',
            emfExportName: 'Расширенный метафайл',
            gifExportName: 'Изображения GIF',
            jpgExportName: 'Изображения JPEG',
            jpegExportName: 'Изображения JPEG',
            pngExportName: 'Изображения PNG',
            abstractMethodException: 'Абстрактный метод не может быть вызван.',
            cannotRenderPageNoViewPage: 'Невозможно отобразить страницу: активная страница не найдена.',
            cannotRenderPageNoDoc: 'Невозможно отобразить страницу: не найден источник документа.',
            exportFormat: 'Формат экспорта:',
            exportOptionTitle: 'Параметры экспорта',
            documentRestrictionsGroup: 'Ограничения документа',
            passwordSecurityGroup: 'Безопасность паролей',
            outputRangeGroup: 'Выходные страницы',
            documentInfoGroup: 'Информация о документе',
            generalGroup: 'Общие',
            docInfoTitle: 'Заголовок',
            docInfoAuthor: 'Автор',
            docInfoManager: 'Руководитель',
            docInfoOperator: 'Оператор',
            docInfoCompany: 'Организация',
            docInfoSubject: 'Тема',
            docInfoComment: 'Комментарий',
            docInfoCreator: 'Создатель',
            docInfoProducer: 'Производитель',
            docInfoCreationTime: 'Время создания',
            docInfoRevisionTime: 'Время модификации',
            docInfoKeywords: 'Ключевые слова',
            embedFonts: 'Внедрять шрифты TrueType',
            pdfACompatible: 'PDF/A-совместимый (уровень 2B)',
            useCompression: 'Использовать сжатие',
            useOutlines: 'Создать структуру документа',
            allowCopyContent: 'Разрешить копирование и извлечение содержимого',
            allowEditAnnotations: 'Разрешить редактирование аннотации',
            allowEditContent: 'Разрешить редактирование',
            allowPrint: 'Разрешить печать',
            ownerPassword: 'Пароль для изменения прав доступа (главный):',
            userPassword: 'Пароль для открытия документа (пользовательский):',
            encryptionType: 'Уровень шифрования:',
            paged: 'Разбить на страницы',
            showNavigator: 'Показать навигатор',
            navigatorPosition: 'Положение навигатора',
            singleFile: 'Один файл',
            tolerance: 'Допуск при обнаружении границ текста (в пунктах):',
            pictureLayer: 'Использовать отдельный слой изображения',
            metafileType: 'Тип метафайла:',
            monochrome: 'Монохромный',
            resolution: 'Разрешение:',
            outputRange: 'Диапазон страниц:',
            outputRangeInverted: 'Инвертировать порядок следования',
            showZoomBar: 'Панель увеличения',
            searchPrev: 'Назад',
            searchNext: 'Далее',
            checkMark: '\u2713',
            exportOk: 'Экспорт…',
            cannotSearch: 'Поиск невозможен, нет источника документа.',
            parameters: 'Параметры',
            requiringParameters: 'Пожалуйста, введите параметры.',
            nullParameterError: 'Значение не может быть равно NULL.',
            invalidParameterError: 'Недопустимый ввод.',
            parameterNoneItemsSelected: '(нет)',
            parameterAllItemsSelected: '(все)',
            parameterSelectAllItemText: '(Выбрать все)',
            selectParameterValue: '(выберите значение)',
            apply: 'Применить',
            errorOccured: 'Произошла ошибка.'
        },
        FlexSheet: {
            insertRow: 'Вставить строку',
            deleteRow: 'Удалить строку',
            insertCol: 'Вставить столбец',
            deleteCol: 'Delete Column',
            convertTable: 'Преобразовать таблицу',
            copyCells: 'Копировать ячейки',
            fillSeries: 'Заполнить',
            fillFormat: 'Заполнить только форматирования',
            fillWithoutFormat: 'Заполнить только значения'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

