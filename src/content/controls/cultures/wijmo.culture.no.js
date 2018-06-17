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
 * Wijmo culture file: nb (Norwegian (Bokmål))
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
            name: 'nb',
            displayName: 'Norwegian (Bokmål)',
            numberFormat: {
                '.': ',',
                ',': ' ',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'kr', pattern: ['-$ n', '$ n'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
                daysAbbr: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
                months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
                monthsAbbr: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['e.Kr.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'd. MMMM yyyy',
                    f: 'd. MMMM yyyy HH:mm', F: 'd. MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'LUKK',
            ctc: 'Kontakt GrapeCity:  <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo lisens i dette programmet er ikke gyldig for gjeldende domene. Lisens domenet er <b>{licDomain}</b>, gjeldende domene er <b>{domain}</b>.',
            evl: 'Wijmo bedømmelse versjon ({version})',
            exp: 'Wijmo lisensen i dette programmet er utløpt. Lisens utløpsdatoen er <b>{expDate:d}</b>.',
            hdr: 'Wijmo lisens',
            lic: 'Wijmo-lisensen i dette programmet er ugyldig.',
            mss: 'Wijmo lisens i dette programmet er ikke angitt.',
            prd: 'Wijmo lisens i dette programmet er ikke gyldig for kontrollen <b>{control}</b>.',
            ver: 'Wijmo lisens i dette programmet er ikke gyldig for versjonen i bruk. Lisensen versjon er <b>{licVer}</b>, produktversjonen er  <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} elementer valgt',
            selectAll: 'Velg alle'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} artikler)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Filtrer redaktøren for kolonne',
            ascending: '\u2191 Stigende',
            descending: '\u2193 Synkende',
            apply: 'Bruk',
            cancel: 'Avbryt',
            clear: 'Fjern',
            conditions: 'Filtrer etter tilstand',
            values: 'Filtrer etter verdi',
            // value filter
            search: 'Søk',
            selectAll: 'Velg alle',
            null: '(ingenting)',
            // condition filter
            header: 'Vis elementer der verdien',
            and: 'Og',
            or: 'Eller',
            stringOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 },
                { name: 'Begynner med', op: 6 },
                { name: 'Slutter med', op: 7 },
                { name: 'Inneholder', op: 8 },
                { name: 'Inneholder ikke', op: 9 }
            ],
            numberOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 },
                { name: 'Er større enn', op: 2 },
                { name: 'Er større enn eller lik som', op: 3 },
                { name: 'Er mindre enn', op: 4 },
                { name: 'Er mindre enn eller lik som', op: 5 }
            ],
            dateOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Er før', op: 4 },
                { name: 'Er etter', op: 2 }
            ],
            booleanOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Innstillinger:',
                header: 'Hovedpost:',
                summary: 'Sammendrag:',
                showAs: 'Vis som:',
                weighBy: 'Veie av:',
                sort: 'Sorter:',
                filter: 'Filter:',
                format: 'Format:',
                sample: 'Eksempel:',
                edit: 'Rediger…',
                clear: 'Fjern',
                ok: 'OK',
                cancel: 'Avbryt',
                none: '(ingen)',
                sorts: {
                    asc: 'Stigende',
                    desc: 'Synkende'
                },
                aggs: {
                    sum: 'Sum',
                    cnt: 'Antall',
                    avg: 'Gjennomsnitt',
                    max: 'Maks',
                    min: 'Min',
                    rng: 'Område',
                    std: 'StdAvvik',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Første',
                    last: 'Siste'
                },
                calcs: {
                    noCalc: 'Ingen beregning',
                    dRow: 'Forskjellen fra forrige rad',
                    dRowPct: '% Forskjell fra forrige rad',
                    dCol: 'Forskjellen fra forrige kolonne',
                    dColPct: '% Forskjell fra forrige kolonne',
                    dPctGrand: '% av totalsum',
                    dPctRow: '% av rad totalt',
                    dPctCol: '% av kolonnen total',
                    dRunTot: 'Løpende sum',
                    dRunTotPct: '% løpende totale'
                },
                formats: {
                    n0: 'Heltall (n0)',
                    n2: 'Desimal (n2)',
                    c: 'Valuta (c)',
                    p0: 'Prosent (p0)',
                    p2: 'Prosent (p2)',
                    n2c: 'Tusenvis (n2,)',
                    n2cc: 'Millioner (n2),,',
                    n2ccc: 'Milliarder (n2,,,)',
                    d: 'Dato (d)',
                    MMMMddyyyy: 'Måned dag år (dd MMMM, yyyy)',
                    dMyy: 'Dag måned år (d/M/yy)',
                    ddMyy: 'Dag måned år (dd/M/yy)',
                    dMyyyy: 'Dag måned år (dd/M/yyyy)',
                    MMMyyyy: 'Måned år (MMM-yyyy)',
                    MMMMyyyy: 'Måned år (MMMM yyyy)',
                    yyyyQq: 'År kvartal (yyyy "Q" q)',
                    FYEEEEQU: 'Kvartal i regnskapsår ("FY" EEEE "Q" U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Totalsum',
                subTotal: 'Delsum'
            },
            PivotPanel: {
                fields: 'Velg feltene du vil legge til rapporten:',
                drag: 'Dra felt mellom områdene nedenfor:',
                filters: 'Filtre',
                cols: 'Kolonner',
                rows: 'Rader',
                vals: 'verdiene',
                defer: 'Utsette oppdateringer',
                update: 'Oppdater'
            },
            _ListContextMenu: {
                up: 'Flytt opp',
                down: 'Flytt ned',
                first: 'Flytt til begynnelsen',
                last: 'Flytt til slutten',
                filter: 'Flytt til rapportfilter',
                rows: 'Flytt til radetiketter',
                cols: 'Flytt til kolonneetiketter',
                vals: 'Flytt til verdier',
                remove: 'Fjern felt',
                edit: 'Feltinnstillinger…',
                detail: 'Vise detaljer…'
            },
            PivotChart: {
                by: 'Av',
                and: 'og'
            },
            DetailDialog: {
                header: 'Detaljvisning:',
                ok: 'OK',
                items: '{cnt:n0} elementer',
                item: '{cnt} element',
                row: 'Rad',
                col: 'Kolonne'
            }
        },
        Viewer: {
            cancel: 'Avbryt',
            ok: 'OK',
            bottom: 'Bunn:',
            top: 'Topp:',
            right: 'Høyre:',
            left: 'Venstre:',
            margins: 'Marger (tommer)',
            orientation: 'Sideretning:',
            paperKind: 'Papir type:',
            pageSetup: 'Utskriftsformat',
            landscape: 'Liggende',
            portrait: 'Stående',
            pageNumber: 'Sidetall',
            zoomFactor: 'Zoomfaktor',
            paginated: 'Utskriftsoppsett',
            print: 'Skrive ut',
            search: 'Søk',
            matchCase: 'Skill mellom store og små bokstaver',
            wholeWord: 'Bare hele ord',
            searchResults: 'Søkeresultater',
            previousPage: 'Forrige side',
            nextPage: 'Neste side',
            firstPage: 'Første side',
            lastPage: 'Siste side',
            backwardHistory: 'Bakover',
            forwardHistory: 'Videresend',
            pageCount: 'Sideantall',
            selectTool: 'Velg verktøyet',
            moveTool: 'Flytteverktøyet',
            continuousMode: 'Kontinuerlig sidevisning',
            singleMode: 'Enkeltside Vis',
            wholePage: 'Passe hele siden',
            pageWidth: 'Passe sidebredde',
            zoomOut: 'Zoome ut',
            zoomIn: 'Zoome inn',
            rubberbandTool: 'Zoom etter utvalg',
            magnifierTool: 'Forstørrer',
            rotatePage: 'Roter side',
            rotateDocument: 'Roter dokumentet',
            exports: 'Eksporter',
            fullScreen: 'Full skjerm',
            exitFullScreen: 'Avslutt full skjerm',
            hamburgerMenu: 'Verktøy',
            showSearchBar: 'Vis søkelinje',
            viewMenu: 'Oppsettalternativer',
            searchOptions: 'Søkealternativer',
            matchCaseMenuItem: 'Skill mellom store og små bokstaver',
            wholeWordMenuItem: 'Hele ord',
            thumbnails: 'Sideminiatyrer',
            outlines: 'Dokumentkart',
            loading: 'Laster inn…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Åpne XML-ordet',
            xlsxExportName: 'Åpne XML-Formatet Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Webarkiv (MHTML)',
            htmlExportName: 'HTML-dokument',
            rtfExportName: 'RTF-dokument',
            metafileExportName: 'Komprimert metafiler',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF-bilder',
            bmpExportName: 'BMP-bilder',
            emfExportName: 'Utvidet metafil',
            gifExportName: 'GIF-bilder',
            jpgExportName: 'JPEG-bilder',
            jpegExportName: 'JPEG-bilder',
            pngExportName: 'PNG-bilder',
            abstractMethodException: 'Dette er en abstract-metode, implementeres kan.',
            cannotRenderPageNoViewPage: 'Kan ikke gjengis uten dokumentet kilde og visningsside.',
            cannotRenderPageNoDoc: 'Kan ikke gjengis uten dokumentet kilde og visningsside.',
            exportFormat: 'Eksportformat:',
            exportOptionTitle: 'Eksportalternativer',
            documentRestrictionsGroup: 'Dokumentet restriksjoner',
            passwordSecurityGroup: 'Passordsikkerhet',
            outputRangeGroup: 'Utdataområdet',
            documentInfoGroup: 'Dokumentinformasjon',
            generalGroup: 'Generelt',
            docInfoTitle: 'Tittel',
            docInfoAuthor: 'Forfatter',
            docInfoManager: 'overordnet',
            docInfoOperator: 'Operatør',
            docInfoCompany: 'Firma',
            docInfoSubject: 'Subject',
            docInfoComment: 'Kommentar',
            docInfoCreator: 'Oppretter',
            docInfoProducer: 'Produsent',
            docInfoCreationTime: 'Opprettelsestidspunkt',
            docInfoRevisionTime: 'Revisjon tid',
            docInfoKeywords: 'Søkeord',
            embedFonts: 'Bygg inn TrueType-skrifter',
            pdfACompatible: 'PDF/A-kompatible (nivå 2B)',
            useCompression: 'Bruk komprimering',
            useOutlines: 'Generere disposisjoner',
            allowCopyContent: 'Tillate innhold kopiering eller utvinning',
            allowEditAnnotations: 'Tillat merknad redigering',
            allowEditContent: 'Tillate innhold redigering',
            allowPrint: 'Tillate utskrift',
            ownerPassword: 'Tillatelser (eier) passord:',
            userPassword: 'Dokumentet åpent (bruker) passord:',
            encryptionType: 'Krypteringsnivå:',
            paged: 'Sidevekslet',
            showNavigator: 'Vis Navigator',
            navigatorPosition: 'Navigatorposisjon',
            singleFile: 'Enkelt fil',
            tolerance: 'Toleranse å oppdage tekst grensene (poeng):',
            pictureLayer: 'Bruk separate bilde laget',
            metafileType: 'Metafil Type:',
            monochrome: 'Monokrom',
            resolution: 'Oppløsning:',
            outputRange: 'Sideområde:',
            outputRangeInverted: 'Invertert',
            showZoomBar: 'Zoomlinjen',
            searchPrev: 'Søk etter forrige',
            searchNext: 'Søke etter neste',
            checkMark: '\u2713',
            exportOk: 'Eksport…',
            cannotSearch: 'Søk krever at en dokumentkilde blir spesifisert.',
            parameters: 'Parametre',
            requiringParameters: 'Skriv inn parametrene.',
            nullParameterError: 'Verdien kan ikke være null.',
            invalidParameterError: 'Ugyldige inndata.',
            parameterNoneItemsSelected: '(ingen)',
            parameterAllItemsSelected: '(alle)',
            parameterSelectAllItemText: '(Velg alle)',
            selectParameterValue: '(Velg verdi)',
            apply: 'Bruk',
            errorOccured: 'Det har oppstått en feil.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

