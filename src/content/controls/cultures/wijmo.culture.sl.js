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
 * Wijmo culture file: sl (Slovenian)
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
            name: 'sl',
            displayName: 'Slovenian',
            numberFormat: {
                '.': ',',
                ',': '.',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '. ',
                ':': ':',
                firstDay: 1,
                days: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
                daysAbbr: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
                months: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'],
                monthsAbbr: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
                am: ['dop.', 'd'],
                pm: ['pop.', 'p'],
                eras: ['po Kr.'],
                patterns: {
                    d: 'd. MM. yyyy', D: 'dddd, dd. MMMM yyyy',
                    f: 'dddd, dd. MMMM yyyy HH:mm', F: 'dddd, dd. MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd. MM. yyyy HH:mm', G: 'd. MM. yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ZAPRI',
            ctc: 'Obrnite se na GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo licence v tem programu ni veljavna za trenutno domeno. Licenco domene je <b> {licDomain}</b>, trenutni domeni je  <b>{domain}</b>.',
            evl: 'Wijmo vrednotenje prevod ({version})',
            exp: 'Wijmo licenca v tem programu je potekla. Datum poteka licence je <b>{expDate:d}</b>.',
            hdr: 'Wijmo licenco',
            lic: 'Wijmo licenca v tem programu ni veljavna.',
            mss: 'Wijmo licence v tem programu ni nastavljen.',
            prd: 'Wijmo dovoljenje v ta program ni veljaven za nadzor <b>{control}</b>  .',
            ver: 'Wijmo dovoljenje v ta program ni veljaven za prevod v uporabi. Dati dovoljenje prevod je <b>{licVer}</b>; različico izdelka, ki je <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} postavke izbrali',
            selectAll: 'Izberi vse'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} artikli)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Urednik filter za stolpec',
            ascending: '\u2191 Naraščajoče',
            descending: '\u2193 Padajoče',
            apply: 'Uporabi',
            cancel: 'Prekliči',
            clear: 'Počisti',
            conditions: 'Filtriraj glede na pogoj',
            values: 'Filtriraj glede na vrednost',
            // value filter
            search: 'Iskanje',
            selectAll: 'Izberi vse',
            null: '(prazno)',
            // condition filter
            header: 'Prikaži elemente, kjer je vrednost',
            and: 'In',
            or: 'Ali',
            stringOperators: [
                { name: '(ni določeno)', op: null },
                { name: 'Je enako', op: 0 },
                { name: 'Ni enako', op: 1 },
                { name: 'Se začne z', op: 6 },
                { name: 'Se konča z', op: 7 },
                { name: 'Vsebuje', op: 8 },
                { name: 'Ne vsebuje', op: 9 }
            ],
            numberOperators: [
                { name: '(ni določeno)', op: null },
                { name: 'Je enako', op: 0 },
                { name: 'Ni enako', op: 1 },
                { name: 'Je večje od', op: 2 },
                { name: 'Je večje ali enako', op: 3 },
                { name: 'Je manjše od', op: 4 },
                { name: 'Je manjše ali enako', op: 5 }
            ],
            dateOperators: [
                { name: '(ni določeno)', op: null },
                { name: 'Je enako', op: 0 },
                { name: 'Je pred', op: 4 },
                { name: 'Je po', op: 2 }
            ],
            booleanOperators: [
                { name: '(ni določeno)', op: null },
                { name: 'Je enako', op: 0 },
                { name: 'Ni enako', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Nastavitve polja:',
                header: 'Glava:',
                summary: 'Povzetek:',
                showAs: 'Pokaži kot:',
                weighBy: 'Stehtamo z:',
                sort: 'Vrsta:',
                filter: 'Filter:',
                format: 'Oblika:',
                sample: 'Vzorec:',
                edit: 'Urejanje…',
                clear: 'Počisti',
                ok: 'OK',
                cancel: 'Prekliči',
                none: '(nič)',
                sorts: {
                    asc: 'Naraščajoče',
                    desc: 'Padajoče'
                },
                aggs: {
                    sum: 'Vsota',
                    cnt: 'Število',
                    avg: 'Povprečje',
                    max: 'Maks',
                    min: 'Min',
                    rng: 'Obseg',
                    std: 'StdOdk',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Prvi',
                    last: 'Zadnji'
                },
                calcs: {
                    noCalc: 'Brez izračuna',
                    dRow: 'Razlika od prejšnje vrstice',
                    dRowPct: '% Razlika od prejšnje vrstice',
                    dCol: 'Razliko od prejšnjega stolpca',
                    dColPct: '% Razlike od prejšnjega stolpca',
                    dPctGrand: '% od vsote',
                    dPctRow: '% celotne vrstice',
                    dPctCol: '% celotnega stolpca',
                    dRunTot: 'Kumulativna vsota',
                    dRunTotPct: 'Kumulativna vsota %'
                },
                formats: {
                    n0: 'Celo število (n0)',
                    n2: 'Decimalno (n2)',
                    c: 'Valute (c)',
                    p0: 'Odstotek (p0)',
                    p2: 'Odstotek (p2)',
                    n2c: 'Tisoč (n2,)',
                    n2cc: 'Milijone (n2,,)',
                    n2ccc: 'Milijard (n2,,,)',
                    d: 'Datum (d)',
                    MMMMddyyyy: 'Mesec dni na leto (MMMM dd, yyyy)',
                    dMyy: 'Dan mesec leto (d/M/yy)',
                    ddMyy: 'Dan mesec leto (dd/M/yy)',
                    dMyyyy: 'Dan mesec leto (dd/M/yyyy)',
                    MMMyyyy: 'Mesec leto (MMM LLLL)',
                    MMMMyyyy: 'Mesec leto (MMMM yyyy)',
                    yyyyQq: 'Četrtletju leta (yyyy "Q"q)',
                    FYEEEEQU: 'Četrtina proračunskega leta ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Skupna vsota',
                subTotal: 'Delna vsota'
            },
            PivotPanel: {
                fields: 'Izberite polja dodati v poročilo:',
                drag: 'Povlecite polja med spodnjimi območji:',
                filters: 'Filtri',
                cols: 'Stolpci',
                rows: 'Vrstice',
                vals: 'Vrednosti',
                defer: 'Odloži posodobitve',
                update: 'Posodobi'
            },
            _ListContextMenu: {
                up: 'Premakni navzgor',
                down: 'Premakni navzdol',
                first: 'Premakni na začetek',
                last: 'Premakni na konec',
                filter: 'Premakni v filter poročila',
                rows: 'Premakni v oznake vrstic',
                cols: 'Premakni v oznake stolpcev',
                vals: 'Premakni v vrednosti',
                remove: 'Odstrani polje',
                edit: 'Nastavitve polja …',
                detail: 'Pokaži podrobnosti…'
            },
            PivotChart: {
                by: 'po',
                and: 'in'
            },
            DetailDialog: {
                header: 'Podrobnost, ogled:',
                ok: 'OK',
                items: '{cnt:n0} elementov',
                item: 'element {cnt}',
                row: 'Vrstica',
                col: 'Stolpec'
            }
        },
        Viewer: {
            cancel: 'Prekliči',
            ok: 'OK',
            bottom: 'Na dnu:',
            top: 'Zgoraj:',
            right: 'Pravico:',
            left: 'Levo:',
            margins: 'Robovi (palci)',
            orientation: 'Usmerjenost:',
            paperKind: 'Vrste papirja:',
            pageSetup: 'Priprava strani',
            landscape: 'pokrajina',
            portrait: 'Pokončno',
            pageNumber: 'Številka strani',
            zoomFactor: 'Faktor povečave',
            paginated: 'Postavitev tiskanja',
            print: 'Tiskanje',
            search: 'Iskanje',
            matchCase: 'Razlikuj',
            wholeWord: 'Samo cele besede',
            searchResults: 'Rezultati iskanja',
            previousPage: 'Prejšnja stran',
            nextPage: 'Naslednja stran',
            firstPage: 'Prva stran',
            lastPage: 'Zadnja stran',
            backwardHistory: 'Vzvratno',
            forwardHistory: 'Naprej',
            pageCount: 'Število strani',
            selectTool: 'Izberite orodje',
            moveTool: 'Premaknite orodje',
            continuousMode: 'Povezane strani Ogledujete si',
            singleMode: 'Ena stran ogledujete',
            wholePage: 'Prilagodi celoten stran',
            pageWidth: 'Zdrav širina strani',
            zoomOut: 'Pomanjšaj',
            zoomIn: 'Povečaj',
            rubberbandTool: 'Zoom, ki jih Izbor',
            magnifierTool: 'Lupa',
            rotatePage: 'Zavrti stran',
            rotateDocument: 'Zavrti dokument',
            exports: 'Izvozi',
            fullScreen: 'Celoten zaslon',
            exitFullScreen: 'Zapri celozaslonski način',
            hamburgerMenu: 'Orodja',
            showSearchBar: 'Pokaži iskalno vrstico',
            viewMenu: 'Možnosti postavitve',
            searchOptions: 'Možnosti iskanja',
            matchCaseMenuItem: 'Razlikovanje velikih in malih črk',
            wholeWordMenuItem: 'Cele besede',
            thumbnails: 'Sličice strani',
            outlines: 'Zgradba dokumenta',
            loading: 'Nalaganje…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Spletni arhiv (MHTML)',
            htmlExportName: 'HTML dokumenta',
            rtfExportName: 'Dokument RTF',
            metafileExportName: 'Stisnjen metadatoteke',
            csvExportName: 'CSV',
            tiffExportName: 'Slike TIFF',
            bmpExportName: 'BMP slik',
            emfExportName: 'Izboljšana metadatoteka',
            gifExportName: 'GIF slike',
            jpgExportName: 'JPEG slike',
            jpegExportName: 'JPEG slike',
            pngExportName: 'PNG slike',
            abstractMethodException: 'To je način abstraktna, prosim izvedbo.',
            cannotRenderPageNoViewPage: 'Strani brez izvor dokumenta in ogled strani ni mogoče upodobiti.',
            cannotRenderPageNoDoc: 'Strani brez izvor dokumenta in ogled strani ni mogoče upodobiti.',
            exportFormat: 'Izvozne oblike zapisa:',
            exportOptionTitle: 'Možnosti izvoza',
            documentRestrictionsGroup: 'Dokument omejitve',
            passwordSecurityGroup: 'Varnost gesel',
            outputRangeGroup: 'Izhodni obseg',
            documentInfoGroup: 'Informacij dokumenta',
            generalGroup: 'Splošno',
            docInfoTitle: 'Naslov',
            docInfoAuthor: 'Avtor',
            docInfoManager: 'Vodja',
            docInfoOperator: 'Operator',
            docInfoCompany: 'Podjetje',
            docInfoSubject: 'Nosilec',
            docInfoComment: 'Opomba',
            docInfoCreator: 'Ustvaril',
            docInfoProducer: 'Producent',
            docInfoCreationTime: 'Ustvarjeno ob',
            docInfoRevisionTime: 'Revizija čas',
            docInfoKeywords: 'Ključne besede',
            embedFonts: 'Vdelaj TrueType pisave',
            pdfACompatible: 'PDF/A združljiv (ravni 2B)',
            useCompression: 'Uporaba stiskanja',
            useOutlines: 'Ustvarjanje opisuje',
            allowCopyContent: 'Omogoča kopiranje vsebine ali ekstrakcijo',
            allowEditAnnotations: 'Ali želite dovoliti urejanje pripisov',
            allowEditContent: 'Omogoča urejanje vsebin',
            allowPrint: 'Omogočajo tiskanje',
            ownerPassword: 'Dovoljenja (lastnik) geslo:',
            userPassword: 'Dokument plan (uporabnik) parola:',
            encryptionType: 'Raven šifriranja:',
            paged: 'Ostranjen',
            showNavigator: 'Pokaži Navigator',
            navigatorPosition: 'Navigator Položaj',
            singleFile: 'Kolona',
            tolerance: 'Strpnost, ko zazna besedilo meje (točk):',
            pictureLayer: 'Uporabo ločenih slika plast',
            metafileType: 'Vrste metadatoteka:',
            monochrome: 'Enobarvno',
            resolution: 'Ločljivost:',
            outputRange: 'Obseg strani:',
            outputRangeInverted: 'Obrnjen',
            showZoomBar: 'Zoom Bar',
            searchPrev: 'Iskanje prejšnjih',
            searchNext: 'Iskanje naslednja',
            checkMark: '\u2713',
            exportOk: 'Izvozi…',
            cannotSearch: 'Iskanje zahteva vir dokumenta, da se določeno.',
            parameters: 'Parametri',
            requiringParameters: 'Prosimo, vnesite parametre.',
            nullParameterError: 'Vrednost ne more biti nič.',
            invalidParameterError: 'Neveljaven vnos.',
            parameterNoneItemsSelected: '(nič)',
            parameterAllItemsSelected: '(vse)',
            parameterSelectAllItemText: '(Izberi vse)',
            selectParameterValue: '(izberite vrednost)',
            apply: 'Uporabi',
            errorOccured: 'Prišlo je do napake.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

