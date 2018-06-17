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
 * Wijmo culture file: lt (Lithuanian)
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
            name: 'lt',
            displayName: 'Lithuanian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
                daysAbbr: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
                months: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
                monthsAbbr: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
                am: ['priešpiet', 'priešpiet'],
                pm: ['popiet', 'popiet'],
                eras: ['po Kr.'],
                patterns: {
                    d: 'yyyy-MM-dd', D: 'yyyy "m". MMMM d "d"., dddd',
                    f: 'yyyy "m". MMMM d "d"., dddd HH:mm', F: 'yyyy "m". MMMM d "d"., dddd HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'MMMM d "d".', M: 'MMMM d "d".',
                    y: 'yyyy "m". MMMM', Y: 'yyyy "m". MMMM',
                    g: 'yyyy-MM-dd HH:mm', G: 'yyyy-MM-dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'CLOSE',
            ctc: 'Susisiekite su GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo licencijos šiai paskirčiai netinka į esamą domeną. Licencijos domenas yra <b>{licDomain}</b>; dabartinė domenas yra  <b>{domain}</b>.',
            evl: 'Wijmo vertinimo versija ({version})',
            exp: 'Baigėsi Wijmo licencijos šiai paskirčiai. Licencijos galiojimo data yra <b>{expDate:d}</b>.',
            hdr: 'Wijmo licencija',
            lic: 'Neleistinas Wijmo licencijos šiai paskirčiai.',
            mss: 'Wijmo licencijos šiai paskirčiai nenustatytas.',
            prd: 'Wijmo licencijos šiai paskirčiai netinka <b>{control}</b> valdymo.',
            ver: 'Wijmo licencijos šiai paskirčiai netinka naudoti redakcijos. Licencijos versija yra <b>{licVer}</b>; produkto versija yra  <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} vnt pasirinktas',
            selectAll: 'Pasirinkti viską'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} elementai)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Stulpelio redaktorius filtras',
            ascending: '\u2191 Didėjimo tvarka',
            descending: '\u2193 Mažėjimo tvarka',
            apply: 'Taikyti',
            cancel: 'Atšaukti',
            clear: 'Valyti',
            conditions: 'Filtruoti pagal sąlygą',
            values: 'Filtruoti pagal reikšmę',
            // value filter
            search: 'Ieškoti',
            selectAll: 'Pasirinkti viską',
            null: '(nieko)',
            // condition filter
            header: 'Rodyti elementus, kur reikšmė',
            and: 'Ir',
            or: 'Arba',
            stringOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Prasideda', op: 6 },
                { name: 'Pasibaigia', op: 7 },
                { name: 'Apima', op: 8 },
                { name: 'Neapima', op: 9 }
            ],
            numberOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Didesnis nei', op: 2 },
                { name: 'Didesnis arba lygus', op: 3 },
                { name: 'Mažesnis nei', op: 4 },
                { name: 'Mažesnis arba lygus', op: 5 }
            ],
            dateOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'yra prieš', op: 4 },
                { name: 'yra po', op: 2 }
            ],
            booleanOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Lauko parametrai:',
                header: 'Antraštė:',
                summary: 'Santrauka:',
                showAs: 'Rodyti kaip:',
                weighBy: 'Pasveriama iš:',
                sort: 'Rūšiuoti:',
                filter: 'Filtruoti:',
                format: 'Formatas:',
                sample: 'Imties dydis:',
                edit: 'Redaguoti…',
                clear: 'Valyti',
                ok: 'Gerai',
                cancel: 'Atšaukti',
                none: '(nereikia)',
                sorts: {
                    asc: 'Didėjimo tvarka',
                    desc: 'Mažėjimo tvarka'
                },
                aggs: {
                    sum: 'Suma',
                    cnt: 'Skaičiuoti',
                    avg: 'Vidurkis',
                    max: 'Maks',
                    min: 'Min',
                    rng: 'Diapazonas',
                    std: 'Standartinis nuokrypis nuo vidurkio',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Pirmas',
                    last: 'Paskutinis'
                },
                calcs: {
                    noCalc: 'Neskaičiuojama',
                    dRow: 'Skirtumas nuo ankstesnės eilės',
                    dRowPct: '% Skirtumas nuo ankstesnės eilės',
                    dCol: 'Skirtumas nuo ankstesnio stulpelio',
                    dColPct: 'Skirtumas nuo ankstesnio stulpelio %',
                    dPctGrand: '% iš viso',
                    dPctRow: 'eilės iš viso proc.',
                    dPctCol: 'stulpelio suma %',
                    dRunTot: 'Veikia iš viso',
                    dRunTotPct: 'veikia iš viso %'
                },
                formats: {
                    n0: 'Sveikasis skaičius (n0)',
                    n2: 'Dešimtainis (n2)',
                    c: '(C) valiuta',
                    p0: 'Procentas (p0)',
                    p2: 'Procentas (p2)',
                    n2c: 'Tūkstančiai (n2,)',
                    n2cc: 'Milijonai (n2,,)',
                    n2ccc: 'Milijardus (n2,,,)',
                    d: '(D) data',
                    MMMMddyyyy: 'Metai mėnuo diena (MMMM dd, yyyy)',
                    dMyy: 'Diena mėnuo metai (d/M/yy)',
                    ddMyy: 'Diena mėnuo metai (dd/M/yy)',
                    dMyyyy: 'Diena mėnuo metai (dd/M/yyyy)',
                    MMMyyyy: 'Mėnuo metai (MMM yyyy)',
                    MMMMyyyy: 'Mėnuo metai (MMMM yyyy)',
                    yyyyQq: 'Metų ketvirtį (yyyy "Q"q)',
                    FYEEEEQU: 'Fiskalinių metų ketvirtis ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Bendroji suma',
                subTotal: 'Tarpinė suma'
            },
            PivotPanel: {
                fields: 'Pasirinkite laukus pridėti ataskaitoje:',
                drag: 'Vilkti laukus tarp toliau esančių sričių:',
                filters: 'Filtrai',
                cols: 'Stulpeliai',
                rows: 'eilutės',
                vals: 'Vertės',
                defer: 'Atidėti naujinimus',
                update: 'Naujinti'
            },
            _ListContextMenu: {
                up: 'Perkelti aukštyn',
                down: 'Perkelti žemyn',
                first: 'Perkelti į pradžią',
                last: 'Pereiti prie pabaigos',
                filter: 'Perkelti į ataskaitos filtrą',
                rows: 'Perkelti į eilutės etiketes',
                cols: 'Perkelti į stulpelių etiketes',
                vals: 'Perkelti į reikšmes',
                remove: 'Pašalinti lauką',
                edit: 'Lauko parametrai…',
                detail: 'Detalios…'
            },
            PivotChart: {
                by: 'pagal',
                and: 'iki'
            },
            DetailDialog: {
                header: 'Išsamios informacijos rodinys:',
                ok: 'Gerai',
                items: '{cnt:n0} elementus',
                item: '{cnt} elementas',
                row: 'Eilutė',
                col: 'Stulpelis'
            }
        },
        Viewer: {
            cancel: 'Atšaukti',
            ok: 'Gerai',
            bottom: 'Apačioje:',
            top: 'Viršus:',
            right: 'Teisę:',
            left: 'Kairėje:',
            margins: 'Paraštės (coliais)',
            orientation: 'Orientacija:',
            paperKind: 'Popieriaus rūšis:',
            pageSetup: 'Puslapio parametrai',
            landscape: 'Gulsčias',
            portrait: 'Stačias',
            pageNumber: 'Puslapio numeris',
            zoomFactor: 'Padidinimo koeficientas',
            paginated: 'Spaudinio maketas',
            print: 'Spausdinimas',
            search: 'Ieškoti',
            matchCase: 'Skirti ABC nuo abc',
            wholeWord: 'Atsižvelgti tik į visą žodį',
            searchResults: 'Ieškos rezultatai',
            previousPage: 'Ankstesnis puslapis',
            nextPage: 'Paskesnis puslapis',
            firstPage: 'Pirmasis puslapis',
            lastPage: 'Paskutinis puslapis',
            backwardHistory: 'Nuo pabaigos datos',
            forwardHistory: 'Persiųsti',
            pageCount: 'Puslapių skaičius',
            selectTool: 'Pasirinkite įrankį',
            moveTool: 'Perkelti įrankis',
            continuousMode: 'Nepertraukiamas puslapio rodinys',
            singleMode: 'Vieno puslapio rodinį',
            wholePage: 'Talpinti visą puslapį',
            pageWidth: 'Tinka puslapio Plotis',
            zoomOut: 'Mažinti mastelį',
            zoomIn: 'Didinti mastelį',
            rubberbandTool: 'Padidinti parenkant',
            magnifierTool: 'Didinamasis stiklas',
            rotatePage: 'Pasukti tinklalapis',
            rotateDocument: 'Pasukti dokumento',
            exports: 'Eksportuoti',
            fullScreen: 'Visas ekranas',
            exitFullScreen: 'Išeiti iš viso ekrano režimo',
            hamburgerMenu: 'Įrankiai',
            showSearchBar: 'Rodyti ieškos juostą',
            viewMenu: 'Maketo variantai',
            searchOptions: 'Ieškos parinktys',
            matchCaseMenuItem: 'Skirti ABC nuo abc',
            wholeWordMenuItem: 'Žodį',
            thumbnails: 'Puslapių miniatiūros',
            outlines: 'Dokumento struktūra',
            loading: 'Įkeliama…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Žiniatinklio archyvas (MHTML)',
            htmlExportName: 'HTML dokumento',
            rtfExportName: 'RTF dokumentas',
            metafileExportName: 'Suspaustas metafailai',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF vaizdus',
            bmpExportName: 'BMP formate',
            emfExportName: 'Išplėstinio metafailo',
            gifExportName: 'GIF vaizdai',
            jpgExportName: 'JPEG vaizdus',
            jpegExportName: 'JPEG vaizdus',
            pngExportName: 'PNG atvaizdai',
            abstractMethodException: 'Tai yra metodas, abstrakti, prašome jį įgyvendinti.',
            cannotRenderPageNoViewPage: 'Negali padaryti be dokumento šaltinio puslapį ir peržiūrėti puslapį.',
            cannotRenderPageNoDoc: 'Negali padaryti be dokumento šaltinio puslapį ir peržiūrėti puslapį.',
            exportFormat: 'Eksporto formatą:',
            exportOptionTitle: 'Eksportavimo parinktys',
            documentRestrictionsGroup: 'Dokumento apribojimų',
            passwordSecurityGroup: 'Slaptažodžio sauga',
            outputRangeGroup: 'Produkcijos asortimentas',
            documentInfoGroup: 'Dokumento informacija',
            generalGroup: 'Bendra',
            docInfoTitle: 'Antraštė',
            docInfoAuthor: 'Autorius',
            docInfoManager: 'Tvarkymo priemonė',
            docInfoOperator: 'Operatorius',
            docInfoCompany: 'Įmonė',
            docInfoSubject: 'Subject',
            docInfoComment: 'Komentuoti',
            docInfoCreator: 'Kūrėjas',
            docInfoProducer: 'Prodiuseris',
            docInfoCreationTime: 'Sukūrimo laikas',
            docInfoRevisionTime: 'Laiko peržiūra',
            docInfoKeywords: 'Raktažodžiai',
            embedFonts: 'Įtraukti TrueType šriftus',
            pdfACompatible: 'PDF/A suderinamus (2B lygio)',
            useCompression: 'Naudoti sutraukimą',
            useOutlines: 'Generuoti kontūrai',
            allowCopyContent: 'Turinio kopijavimas arba gavyba',
            allowEditAnnotations: 'Ar leisti redaguoti komentaro',
            allowEditContent: 'Leidžia turinio redagavimas',
            allowPrint: 'Leisti spausdinti',
            ownerPassword: '(Savininko) teisių slaptažodis:',
            userPassword: 'Dokumento atidaryti (vartotojo) slaptažodį:',
            encryptionType: 'Šifravimo lygį:',
            paged: 'Numeruoti psl.',
            showNavigator: 'Rodyti Navigator',
            navigatorPosition: 'Navigatorius pozicijos',
            singleFile: 'Vieno failo',
            tolerance: 'Nuokrypis, kai aptikti teksto ribų (balai):',
            pictureLayer: 'Naudoti atskirą nuotraukų sluoksnis',
            metafileType: 'Metafile tipas:',
            monochrome: 'Monochrominis',
            resolution: 'Skiriamoji geba:',
            outputRange: 'Puslapių diapazonas:',
            outputRangeInverted: 'Apverstas',
            showZoomBar: 'Mastelio keitimo juosta',
            searchPrev: 'Ieškoti ankstesnio',
            searchNext: 'Ieškoti pirmyn',
            checkMark: '\u2713',
            exportOk: 'Eksportuoti…',
            cannotSearch: 'Paieška reikalauja dokumento šaltinis turi būti nurodytas.',
            parameters: 'Parametrus',
            requiringParameters: 'Prašome įvesti parametrus.',
            nullParameterError: 'Ypatybė negali būti neapibrėžta.',
            invalidParameterError: 'Neleistina įvestis.',
            parameterNoneItemsSelected: '(nereikia)',
            parameterAllItemsSelected: '(visi)',
            parameterSelectAllItemText: '(Pažymėti viską)',
            selectParameterValue: '(pasirinkite vertę)',
            apply: 'Taikyti',
            errorOccured: 'Įvyko klaida.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

