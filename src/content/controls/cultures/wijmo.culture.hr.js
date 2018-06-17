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
 * Wijmo culture file: hr (Croatian)
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
            name: 'hr',
            displayName: 'Croatian',
            numberFormat: {
                '.': ',',
                ',': '.',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'kn', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
                daysAbbr: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
                months: ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'],
                monthsAbbr: ['sij', 'vlj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['n.e.'],
                patterns: {
                    d: 'd.M.yyyy.', D: 'd. MMMM yyyy.',
                    f: 'd. MMMM yyyy. H:mm', F: 'd. MMMM yyyy. H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM, yyyy', Y: 'MMMM, yyyy',
                    g: 'd.M.yyyy. H:mm', G: 'd.M.yyyy. H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ZATVORI',
            ctc: 'Obratite se GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo dozvola u ovaj program nije valjana za aktivnu domenu. Dozvola domena je <b>{licDomain}</b>; trenutni domena je  <b>{domain}</b>.',
            evl: 'Wijmo procjena inačici ({version})',
            exp: 'Wijmo dozvola u ovoj aplikaciji je prošli. Datum isteka licence je <b>{expDate:d}</b>.',
            hdr: 'Wijmo dozvola',
            lic: 'Wijmo dozvola u tom zahtjevu nije valjan.',
            mss: 'Wijmo dozvola u ovoj aplikaciji nije postavljen.',
            prd: 'Wijmo dozvola u ovaj program nije valjana za <b>{control}</b> kontrolu.',
            ver: 'Wijmo dozvola u ovaj program nije valjana za verziju u uporabi. Dozvola verzija je <b>{licVer}</b>; verziju proizvoda je  <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} stavki odabrano',
            selectAll: 'Odaberi sve'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} stavke)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Filtar Editor za stupac',
            ascending: '\u2191 Uzlazno',
            descending: '\u2193 Silazno',
            apply: 'Primijeni',
            cancel: 'Odustani',
            clear: 'Očisti',
            conditions: 'Filtriraj prema uvjetu',
            values: 'Filtriraj prema vrijednosti',
            // value filter
            search: 'Traži',
            selectAll: 'Odaberi sve',
            null: '(ništa)',
            // condition filter
            header: 'Prikaži stavke gdje je vrijednost',
            and: 'I',
            or: 'Ili',
            stringOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Počinje s', op: 6 },
                { name: 'Završava s', op: 7 },
                { name: 'Sadrži', op: 8 },
                { name: 'Ne sadrži', op: 9 }
            ],
            numberOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Veće od', op: 2 },
                { name: 'Veće od ili jednako', op: 3 },
                { name: 'Manje od', op: 4 },
                { name: 'Manje od ili jednako', op: 5 }
            ],
            dateOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Prije', op: 4 },
                { name: 'Poslije', op: 2 }
            ],
            booleanOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Postavke polja:',
                header: 'Zagl.:',
                summary: 'Sažetak:',
                showAs: 'Prikazati kao:',
                weighBy: 'Vagati po:',
                sort: 'Sortiranje:',
                filter: 'Filtriraj:',
                format: 'Oblik:',
                sample: 'Uzorak:',
                edit: 'Uredi…',
                clear: 'Očisti',
                ok: 'U redu',
                cancel: 'Odustani',
                none: '(nijedan)',
                sorts: {
                    asc: 'Uzlazno',
                    desc: 'Silazno'
                },
                aggs: {
                    sum: 'Zbroj',
                    cnt: 'Broj',
                    avg: 'Prosjek',
                    max: 'Maks.',
                    min: 'Min.',
                    rng: 'Raspon',
                    std: 'StdDev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Prvo',
                    last: 'Zadnji'
                },
                calcs: {
                    noCalc: 'Bez izračuna',
                    dRow: 'Razlika u odnosu na prethodni redak',
                    dRowPct: '% Razlika u odnosu na prethodni redak',
                    dCol: 'Razlika od prethodnog stupca',
                    dColPct: '% Razlika u odnosu na prethodni stupac',
                    dPctGrand: '% sveukupne vrijednosti',
                    dPctRow: '% redak Ukupno',
                    dPctCol: '% Stupac Ukupno',
                    dRunTot: 'Tekući zbroj',
                    dRunTotPct: 'Tekući zbroj %'
                },
                formats: {
                    n0: 'Cijeli broj (n0)',
                    n2: 'Decimal (n2)',
                    c: 'Valute (c)',
                    p0: 'Postotak (p0)',
                    p2: 'Postotak (p2)',
                    n2c: 'Tisuće (n2,)',
                    n2cc: 'Milijuna (n2,,)',
                    n2ccc: 'Milijarde (n2,,,)',
                    d: 'Datum (d)',
                    MMMMddyyyy: 'Mjesec dan godina (MMMM dd, yyyy)',
                    dMyy: 'Dan mjesec godina (d/M/yy)',
                    ddMyy: 'Dan mjesec godina (dd/M/yy)',
                    dMyyyy: 'Dan mjesec godina (dd/M/yyyy)',
                    MMMyyyy: 'Mjesec godine (MMM yyyy)',
                    MMMMyyyy: 'Mjesec godine (MMMM yyyy)',
                    yyyyQq: 'Godina kvartal (yyyy "Q"q)',
                    FYEEEEQU: 'Tromjesečje fiskalne godine ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Sveukupni zbroj',
                subTotal: 'Podzbroj'
            },
            PivotPanel: {
                fields: 'Odaberite polja koja želite dodati u izvješće:',
                drag: 'Vucite polja između donjih površina:',
                filters: 'Filtri',
                cols: 'Stupci',
                rows: 'Reci',
                vals: 'Vrijednosti',
                defer: 'Odgoditi ažuriranja',
                update: 'Ažuriraj'
            },
            _ListContextMenu: {
                up: 'Premjesti gore',
                down: 'Premjesti dolje',
                first: 'Premjesti na početak',
                last: 'Premjesti na kraj',
                filter: 'Premjesti u filtar izvješća',
                rows: 'Premjesti u natpise redaka',
                cols: 'Premjesti u natpise stupaca',
                vals: 'Premjesti u vrijednosti',
                remove: 'Ukloni polje',
                edit: 'Postavke polja…',
                detail: 'Pokaži detalj…'
            },
            PivotChart: {
                by: 'po',
                and: 'i'
            },
            DetailDialog: {
                header: 'Detalj pogled:',
                ok: 'U redu',
                items: '{cnt:n0} stavke',
                item: '{cnt} stavku',
                row: 'Redak',
                col: 'Stupac'
            }
        },
        Viewer: {
            cancel: 'Odustani',
            ok: 'U redu',
            bottom: 'Donja:',
            top: 'Gornja:',
            right: 'Desna:',
            left: 'Lijeva:',
            margins: 'Margine (inči)',
            orientation: 'Orijentacija:',
            paperKind: 'Vrste papira:',
            pageSetup: 'Postavljanje stranice',
            landscape: 'Pejzaž',
            portrait: 'Portret',
            pageNumber: 'Broj stranice',
            zoomFactor: 'Zumiranja faktor',
            paginated: 'Izgled ispisa',
            print: 'Ispis',
            search: 'Traži',
            matchCase: 'Razlikuj velika i mala slova',
            wholeWord: 'Traži samo cijele riječi',
            searchResults: 'Rezultati pretraživanja',
            previousPage: 'Prethodna stranica',
            nextPage: 'Sljedeća stranica',
            firstPage: 'Prva stranica',
            lastPage: 'Posljednja stranica',
            backwardHistory: 'Unatrag',
            forwardHistory: 'Proslijedi',
            pageCount: 'Broj stranica',
            selectTool: 'Odaberite alat',
            moveTool: 'Pomicanje',
            continuousMode: 'Kontinuirani prikaz stranice',
            singleMode: 'Jedna stranica pogled',
            wholePage: 'Stane cijela stranica',
            pageWidth: 'Prilagodi širinu stranice',
            zoomOut: 'Smanji',
            zoomIn: 'Povećaj',
            rubberbandTool: 'Zumiraj po odabiru',
            magnifierTool: 'povećalo',
            rotatePage: 'Zakreni stranicu',
            rotateDocument: 'Zakreni dokument',
            exports: 'Izvoz',
            fullScreen: 'Cijeli zaslon',
            exitFullScreen: 'Izlaz iz prikaza na cijelom zaslonu',
            hamburgerMenu: 'Alati',
            showSearchBar: 'Prikaži traku pretraživanja',
            viewMenu: 'Mogućnosti rasporeda',
            searchOptions: 'Mogućnosti pretraživanja',
            matchCaseMenuItem: 'Razlikuj velika i mala slova',
            wholeWordMenuItem: 'Traži sve riječi',
            thumbnails: 'Sličice stranica',
            outlines: 'Karta dokumenta',
            loading: 'Učitavanje…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Excel Open XML',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Web-arhiva (MHTML)',
            htmlExportName: 'HTML dokument',
            rtfExportName: 'RTF dokument',
            metafileExportName: 'Stisnut metadatoteke',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF slika',
            bmpExportName: 'BMP slike',
            emfExportName: 'Poboljšana metadatoteka',
            gifExportName: 'GIF slike',
            jpgExportName: 'JPEG slike',
            jpegExportName: 'JPEG slike',
            pngExportName: 'PNG slika',
            abstractMethodException: 'Ovo je apstraktna metoda, molimo ga provesti.',
            cannotRenderPageNoViewPage: 'Nije moguće renderirati stranica bez dokumenta izvor i prikaz stranice.',
            cannotRenderPageNoDoc: 'Nije moguće renderirati stranica bez dokumenta izvor i prikaz stranice.',
            exportFormat: 'Formata izvoza:',
            exportOptionTitle: 'Mogućnosti izvoza',
            documentRestrictionsGroup: 'Dokument ograničenja',
            passwordSecurityGroup: 'Sigurnost lozinke',
            outputRangeGroup: 'Izlazni raspon',
            documentInfoGroup: 'Informacija o dokumentu',
            generalGroup: 'općenito',
            docInfoTitle: 'Naslov',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Upravitelj',
            docInfoOperator: 'Operator',
            docInfoCompany: 'Tvrtka',
            docInfoSubject: 'Predmet',
            docInfoComment: 'Komentirajte',
            docInfoCreator: 'Autor',
            docInfoProducer: 'Producent',
            docInfoCreationTime: 'Vrijeme stvaranja',
            docInfoRevisionTime: 'Vrijeme revizije',
            docInfoKeywords: 'Ključne riječi',
            embedFonts: 'Uloži TrueType fontove',
            pdfACompatible: 'Kompatibilan s PDF/A (stupanj 2B)',
            useCompression: 'Koristi sažimanje',
            useOutlines: 'Generiranje strukture',
            allowCopyContent: 'Omogućuju kopiranje sadržaja ili vađenje',
            allowEditAnnotations: 'Uređivanje primjedbe',
            allowEditContent: 'Uređivanje sadržaja',
            allowPrint: 'Omogućiti ispis',
            ownerPassword: 'Dozvole (vlasnik) lozinku:',
            userPassword: 'Dokument otvori (korisnik) lozinku:',
            encryptionType: 'Razina šifriranja:',
            paged: 'Straničeno',
            showNavigator: 'Prikaz navigatora',
            navigatorPosition: 'Položaj navigatora',
            singleFile: 'Jednu datoteku',
            tolerance: 'Tolerancije kada otkrivanje tekst granica (bodova):',
            pictureLayer: 'Koristite zasebna slika sloj',
            metafileType: 'Metafile tip:',
            monochrome: 'Monokromatski',
            resolution: 'Razlučivost:',
            outputRange: 'Raspon stranica:',
            outputRangeInverted: 'Preokrenut',
            showZoomBar: 'Zoom traka',
            searchPrev: 'Traži prethodnu',
            searchNext: 'Trazi',
            checkMark: '\u2713',
            exportOk: 'Izvoz…',
            cannotSearch: 'Pretraživanje zahtijeva određivanje izvora dokumenta.',
            parameters: 'Parametri',
            requiringParameters: 'Unesite parametre.',
            nullParameterError: 'Vrijednost ne može biti null.',
            invalidParameterError: 'Unos nije valjan.',
            parameterNoneItemsSelected: '(nijedan)',
            parameterAllItemsSelected: '(sve)',
            parameterSelectAllItemText: '(Odaberi sve)',
            selectParameterValue: '(odaberite vrijednost)',
            apply: 'Primijeni',
            errorOccured: 'Dogodila se pogreška.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

