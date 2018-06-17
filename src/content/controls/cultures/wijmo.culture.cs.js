/*
    *
    * Wijmo Library 5.20181.462
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
 * Wijmo culture file: cs (Czech)
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
            name: 'cs',
            displayName: 'Czech',
            numberFormat: {
                '.': ',',
                ',': ' ',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'Kč', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                daysAbbr: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                monthsAbbr: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
                am: ['dop.', 'd'],
                pm: ['odp.', 'o'],
                eras: ['n. l.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd d. MMMM yyyy',
                    f: 'dddd d. MMMM yyyy H:mm', F: 'dddd d. MMMM yyyy H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy H:mm', G: 'dd.MM.yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ZAVŘÍT',
            ctc: 'Obraťte se na GrapeCity:  <a href="mailto:us.sales@grapecity.com"> us.sales@grapecity.com</a>.',
            dmn: 'Wijmo licence v této aplikaci není platný pro aktuální doménu. Licence na doménu  <b> {licDomain}</b>; aktuální doména je  <b> {domain}</b>.',
            evl: 'Wijmo vyhodnocení verze ({version})',
            exp: 'Wijmo licence v této aplikaci již vypršela. Datum vypršení platnosti licence je <b>{expDate:d}</b>.',
            hdr: 'Wijmo licence',
            lic: 'Wijmo licence v této aplikaci je neplatná.',
            mss: 'Není nastavena Wijmo licenci v této aplikaci.',
            prd: 'Wijmo licence v této aplikaci není platný pro kontrolu <b>{control}</b>  .',
            ver: 'Wijmo licence v této aplikaci není platné pro verzi v provozu. Verze licence je  <b> {licVer}</b>; <b>{version}</b>je verze produktu.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} položek vybraného',
            selectAll: 'Vybrat vše'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} položky)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Editor filtrů pro sloupec',
            ascending: '\u2191 Vzestupně',
            descending: '\u2193 Sestupně',
            apply: 'Použít',
            cancel: 'Storno',
            clear: 'Vymazat',
            conditions: 'Filtrovat podle podmínky',
            values: 'Filtrovat podle hodnoty',
            // value filter
            search: 'Hledat',
            selectAll: 'Vybrat vše',
            null: '(nic)',
            // condition filter
            header: 'Zobrazit položky s hodnotou',
            and: 'A',
            or: 'NEBO',
            stringOperators: [
                { name: '(nenastaveno)', op: null },
                { name: 'Rovná se', op: 0 },
                { name: 'Nerovná se', op: 1 },
                { name: 'Začíná na', op: 6 },
                { name: 'Končí na', op: 7 },
                { name: 'Obsahuje', op: 8 },
                { name: 'Neobsahuje', op: 9 }
            ],
            numberOperators: [
                { name: '(nenastaveno)', op: null },
                { name: 'Rovná se', op: 0 },
                { name: 'Nerovná se', op: 1 },
                { name: 'Je větší než', op: 2 },
                { name: 'Je větší než nebo se rovná', op: 3 },
                { name: 'Je menší než', op: 4 },
                { name: 'Je menší než nebo se rovná', op: 5 }
            ],
            dateOperators: [
                { name: '(nenastaveno)', op: null },
                { name: 'Rovná se', op: 0 },
                { name: 'Je před', op: 4 },
                { name: 'Je po', op: 2 }
            ],
            booleanOperators: [
                { name: '(nenastaveno)', op: null },
                { name: 'Rovná se', op: 0 },
                { name: 'Nerovná se', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Nastavení pole:',
                header: 'Záhlaví:',
                summary: 'Shrnutí:',
                showAs: 'Zobrazit jako:',
                weighBy: 'Hmotnost od:',
                sort: 'Řazení:',
                filter: 'Filtr:',
                format: 'Formát:',
                sample: 'Příklad:',
                edit: 'Upravit…',
                clear: 'Vymazat',
                ok: 'OK',
                cancel: 'Storno',
                none: '(nikdy)',
                sorts: {
                    asc: 'Vzestupně',
                    desc: 'Sestupně'
                },
                aggs: {
                    sum: 'Součet',
                    cnt: 'Počet',
                    avg: 'Průměr',
                    max: 'Maximum',
                    min: 'Minimum',
                    rng: 'Oblast',
                    std: 'Směrodatná odchylka',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'První',
                    last: 'Poslední'
                },
                calcs: {
                    noCalc: 'Bez výpočtu',
                    dRow: 'Rozdíl od předchozího řádku',
                    dRowPct: '% Rozdíl z předchozího řádku',
                    dCol: 'Rozdíl od předchozího sloupce',
                    dColPct: '% Rozdíl z předchozího sloupce',
                    dPctGrand: '% z celkového součtu',
                    dPctRow: '% řádku celkem',
                    dPctCol: '% sloupce celkem',
                    dRunTot: 'Průběžný součet',
                    dRunTotPct: '% celkové'
                },
                formats: {
                    n0: 'Celé číslo (n0)',
                    n2: 'Desetinný (n2)',
                    c: 'Měna (c)',
                    p0: 'Procento (p0)',
                    p2: 'Procento (p2)',
                    n2c: 'Tisíc (n2,)',
                    n2cc: 'Miliony (n2,,)',
                    n2ccc: 'Miliardy (n2,,,)',
                    d: 'Datum (d)',
                    MMMMddyyyy: 'Měsíc den rok (MMMM dd, yyyy)',
                    dMyy: 'Den měsíc rok (d/M/RR)',
                    ddMyy: 'Den měsíc rok (M/dd/rr)',
                    dMyyyy: 'Den měsíc rok (dd/M/rrrr)',
                    MMMyyyy: 'Měsíc rok (MMM yyyy)',
                    MMMMyyyy: 'Měsíc rok (MMMM yyyy)',
                    yyyyQq: 'Čtvrtletí rok (yyyy "Q"q)',
                    FYEEEEQU: 'Čtvrtletí fiskálního roku ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Celkový součet',
                subTotal: 'Mezisoučet'
            },
            PivotPanel: {
                fields: 'Zvolte pole, které chcete přidat do sestavy:',
                drag: 'Přetáhněte pole do jedné z následujících oblastí:',
                filters: 'Filtry',
                cols: 'Sloupce',
                rows: 'Řádky',
                vals: 'Hodnoty',
                defer: 'Odložení aktualizací',
                update: 'Aktualizovat'
            },
            _ListContextMenu: {
                up: 'Přesunout nahoru',
                down: 'Dolů',
                first: 'Přesunout na začátek',
                last: 'Přesunout na konec',
                filter: 'Přejít k filtru sestavy',
                rows: 'Přesunout k popiskům řádků',
                cols: 'Přesunout k popiskům sloupců',
                vals: 'Přejít k hodnotám',
                remove: 'Odebrat pole',
                edit: 'Nastavení pole…',
                detail: 'Zobrazit Detail…'
            },
            PivotChart: {
                by: 'podle',
                and: 'and'
            },
            DetailDialog: {
                header: 'Detailní pohled:',
                ok: 'OK',
                items: '{cnt:n0} položek',
                item: 'položka {cnt}',
                row: 'Řádek',
                col: 'Sloupec'
            }
        },
        Viewer: {
            cancel: 'Storno',
            ok: 'OK',
            bottom: 'Dolní:',
            top: 'Nahoře:',
            right: 'Vpravo:',
            left: 'Vlevo:',
            margins: 'Okraje (palce)',
            orientation: 'Orientace:',
            paperKind: 'Druh papíru:',
            pageSetup: 'Nastavení stránky',
            landscape: 'Na šířku',
            portrait: 'Na výšku',
            pageNumber: 'Číslo stránky',
            zoomFactor: 'Faktor zvětšení',
            paginated: 'Rozložení při tisku',
            print: 'Tisk',
            search: 'Hledat',
            matchCase: 'Rozlišovat malá a velká písmena',
            wholeWord: 'Pouze celá slova',
            searchResults: 'Výsledky hledání',
            previousPage: 'Předchozí stránka',
            nextPage: 'Další stránka',
            firstPage: 'První stránka',
            lastPage: 'Poslední stránka',
            backwardHistory: 'Zpět',
            forwardHistory: 'Vpřed',
            pageCount: 'Počet stránek',
            selectTool: 'Vyberte nástroj',
            moveTool: 'Nástroj pro přesun',
            continuousMode: 'Souvislé zobrazení celé stránky',
            singleMode: 'Zobrazení Jedna stránka',
            wholePage: 'Přizpůsobit celé stránky',
            pageWidth: 'Přizpůsobit šířce stránky',
            zoomOut: 'Oddálit',
            zoomIn: 'Přiblížit',
            rubberbandTool: 'Zvětšení podle výběru',
            magnifierTool: 'Lupa',
            rotatePage: 'Otočení stránky',
            rotateDocument: 'Otočit dokument',
            exports: 'Exportovat',
            fullScreen: 'Celá obrazovka',
            exitFullScreen: 'Ukončit režim celé obrazovky',
            hamburgerMenu: 'Nástroje',
            showSearchBar: 'Zobrazit panel hledání',
            viewMenu: 'Možnosti rozložení',
            searchOptions: 'Možnosti hledání',
            matchCaseMenuItem: 'Rozlišovat malá a velká písmena',
            wholeWordMenuItem: 'Celá slova',
            thumbnails: 'Miniatury stránek',
            outlines: 'Rozložení dokumentu',
            loading: 'Načítání…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Webový archiv (MHTML)',
            htmlExportName: 'Dokument HTML',
            rtfExportName: 'Dokument RTF',
            metafileExportName: 'Komprimované soubory',
            csvExportName: 'CSV',
            tiffExportName: 'Obrázky TIFF',
            bmpExportName: 'Obrázky BMP',
            emfExportName: 'Rozšířený metasoubor',
            gifExportName: 'GIF obrázky',
            jpgExportName: 'Obrázky ve formátu JPEG',
            jpegExportName: 'Obrázky ve formátu JPEG',
            pngExportName: 'PNG obrázky',
            abstractMethodException: 'Jedná se o abstraktní metodu, implementovat jej.',
            cannotRenderPageNoViewPage: 'Nelze vykreslit stránku bez zdrojový dokument a zobrazit stránku.',
            cannotRenderPageNoDoc: 'Nelze vykreslit stránku bez zdrojový dokument a zobrazit stránku.',
            exportFormat: 'Formát exportu:',
            exportOptionTitle: 'Možnosti exportu',
            documentRestrictionsGroup: 'Omezení dokumentu',
            passwordSecurityGroup: 'Zabezpečení hesla',
            outputRangeGroup: 'Výstupní oblast',
            documentInfoGroup: 'Informace o dokumentu',
            generalGroup: 'Obecné',
            docInfoTitle: 'Název',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Nadřízený',
            docInfoOperator: 'Operátor',
            docInfoCompany: 'Společnost',
            docInfoSubject: 'Předmět',
            docInfoComment: 'Poznámka',
            docInfoCreator: 'Vytvořil',
            docInfoProducer: 'Producent',
            docInfoCreationTime: 'Čas vytvoření',
            docInfoRevisionTime: 'Čas Revize',
            docInfoKeywords: 'Klíčová slova',
            embedFonts: 'Vložit písma TrueType',
            pdfACompatible: 'Kompatibilní s PDF/A (úrovně 2B)',
            useCompression: 'Použít kompresi',
            useOutlines: 'Generovat obrysy',
            allowCopyContent: 'Povolit kopírování obsahu nebo extrakce',
            allowEditAnnotations: 'Povolit úpravy poznámek',
            allowEditContent: 'Povolit úpravy obsahu',
            allowPrint: 'Povolit tisk',
            ownerPassword: 'Heslo oprávnění (majitel):',
            userPassword: 'Heslo pro otevření (uživatel) dokumentu:',
            encryptionType: 'Úroveň šifrování:',
            paged: 'Stránkováno',
            showNavigator: 'Zobrazit navigátor',
            navigatorPosition: 'Poloha navigátoru',
            singleFile: 'Jeden soubor',
            tolerance: 'Tolerance při zjišťování hranice textu (body):',
            pictureLayer: 'Použití samostatných obrázek vrstva',
            metafileType: 'Obrázky formátu Metafile:',
            monochrome: 'Monochromatický',
            resolution: 'Řešení:',
            outputRange: 'Rozsah stránek:',
            outputRangeInverted: 'Obrácený',
            showZoomBar: 'Zvětšovací lišta',
            searchPrev: 'Hledat předchozí',
            searchNext: 'Hledat další',
            checkMark: '\u2713',
            exportOk: 'Exportujte…',
            cannotSearch: 'Vyhledávání vyžaduje zadání zdroje dokumentu.',
            parameters: 'Parametry',
            requiringParameters: 'Prosím vstupní parametry.',
            nullParameterError: 'Hodnota nemůže být null.',
            invalidParameterError: 'Neplatný vstup.',
            parameterNoneItemsSelected: '(nikdy)',
            parameterAllItemsSelected: '(vše)',
            parameterSelectAllItemText: '(Vybrat vše)',
            selectParameterValue: '(vyberte hodnotu)',
            apply: 'Použít',
            errorOccured: 'Došlo k chybě.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

