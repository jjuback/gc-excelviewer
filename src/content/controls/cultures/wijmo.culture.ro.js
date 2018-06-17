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
 * Wijmo culture file: ro (Romanian)
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
            name: 'ro',
            displayName: 'Romanian',
            numberFormat: {
                '.': ',',
                ',': '.',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'lei', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
                daysAbbr: ['dum.', 'lun.', 'mar.', 'mie.', 'joi', 'vin.', 'sâm.'],
                months: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
                monthsAbbr: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['d.Hr.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy HH:mm', F: 'dddd, d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ÎNCHIDERE',
            ctc: 'Vă rugăm să contactaţi GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo de licenţă în această aplicație nu este validă pentru domeniul curent. Domeniul de licenţă este <b>{licDomain}</b>;  <b>{domain}</b>de domeniu curent este.',
            evl: 'Versiunea de evaluare Wijmo ({version})',
            exp: 'Wijmo licenţa în această cerere a expirat. Data de expirare a licenţei este <b>{expDate:d}</b>.',
            hdr: 'Licenta Wijmo',
            lic: 'Wijmo de licenţă în această aplicație nu este validă.',
            mss: 'Wijmo de licenţă în această aplicație nu este setată.',
            prd: 'Wijmo de licenţă în această aplicație nu este validă pentru controlul <b>{control}</b>  .',
            ver: 'Wijmo de licenţă în această aplicație nu este validă pentru versiunea în uz. Versiunea de licenţă este <b>{licVer}</b>; versiunea produsului este <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} articole selectat',
            selectAll: 'Selectare totală'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} articole)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Editor filtrul pentru coloană',
            ascending: '\u2191 Crescător',
            descending: '\u2193 Descrescător',
            apply: 'Aplicare',
            cancel: 'Anulare',
            clear: 'Golire',
            conditions: 'Filtrare după stare',
            values: 'Filtrare după valoare',
            // value filter
            search: 'Căutare',
            selectAll: 'Selectare totală',
            null: '(nimic)',
            // condition filter
            header: 'Indică articolele unde valoarea',
            and: 'Și',
            or: 'Sau',
            stringOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 },
                { name: 'Începe cu', op: 6 },
                { name: 'Se încheie cu', op: 7 },
                { name: 'Conține', op: 8 },
                { name: 'Nu conține', op: 9 }
            ],
            numberOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 },
                { name: 'Este mai mare decât', op: 2 },
                { name: 'Este mai mare decât sau egală cu', op: 3 },
                { name: 'Este mai mică decât', op: 4 },
                { name: 'Este mai mică decât sau egală cu', op: 5 }
            ],
            dateOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Este înainte de', op: 4 },
                { name: 'este după', op: 2 }
            ],
            booleanOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Setările de câmp:',
                header: 'Antet:',
                summary: 'Rezumat:',
                showAs: 'Arată ca:',
                weighBy: 'Cântărească:',
                sort: 'Sortare:',
                filter: 'Filtru:',
                format: 'Format:',
                sample: 'Eşantion:',
                edit: 'Editare…',
                clear: 'Golire',
                ok: 'OK',
                cancel: 'Revocare',
                none: '(nici unul)',
                sorts: {
                    asc: 'Ascendent',
                    desc: 'Descendent'
                },
                aggs: {
                    sum: 'SUMĂ',
                    cnt: 'Contor',
                    avg: 'Medie',
                    max: 'Max',
                    min: 'Min',
                    rng: 'Interval',
                    std: 'StdDev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Prima',
                    last: 'Ultima'
                },
                calcs: {
                    noCalc: 'Fără calcule',
                    dRow: 'Diferenţa din rândul precedent',
                    dRowPct: '% Diferența din rândul precedent',
                    dCol: 'Spre deosebire de coloană anterioară',
                    dColPct: '% Diferența din coloană anterioară',
                    dPctGrand: '% din total general',
                    dPctRow: '% din total rând',
                    dPctCol: '% din total coloana',
                    dRunTot: 'Total cumulat',
                    dRunTotPct: 'Total cumulat %'
                },
                formats: {
                    n0: 'Întreg (n0)',
                    n2: 'Zecimal (n2)',
                    c: 'Moneda (c)',
                    p0: 'Procent (p0)',
                    p2: 'Procent (p2)',
                    n2c: 'Mii (n2,)',
                    n2cc: 'Milioane de oameni (n2,,)',
                    n2ccc: 'Miliarde (n2,,,)',
                    d: 'Data (d)',
                    MMMMddyyyy: 'Luna ziua anul (MMMM dd, yyyy)',
                    dMyy: 'Ziua luna anul (d/M/yy)',
                    ddMyy: 'Zi lună an (dd/M/yy)',
                    dMyyyy: 'Ziua luna anul (dd/M/yyyy)',
                    MMMyyyy: 'Lună an (MMM yyyy)',
                    MMMMyyyy: 'Lună an (MMMM yyyy)',
                    yyyyQq: 'Anul vechi (yyyy "Q"q)',
                    FYEEEEQU: 'Anul fiscal trimestru ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Total general',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Alegere câmpuri pentru a adăuga la raport:',
                drag: 'Glisați câmpuri între zonele de mai jos:',
                filters: 'Filtre',
                cols: 'Coloane',
                rows: 'Rânduri',
                vals: 'Valorile',
                defer: 'Amâna actualizări',
                update: 'Actualizare'
            },
            _ListContextMenu: {
                up: 'Mutare în sus',
                down: 'Mutare în jos',
                first: 'Mutare la început',
                last: 'Mutare la sfârșit',
                filter: 'Se mută la filtrul de raport',
                rows: 'Se mută la etichetele de rând',
                cols: 'Se mută la etichetele de coloană',
                vals: 'Se mută la valori',
                remove: 'Eliminare câmp',
                edit: 'Setări câmp…',
                detail: 'Arată detalii…'
            },
            PivotChart: {
                by: 'după',
                and: 'și'
            },
            DetailDialog: {
                header: 'Vezi detalii:',
                ok: 'OK',
                items: '{cnt:n0} elemente',
                item: 'element {cnt}',
                row: 'Rând',
                col: 'Coloană'
            }
        },
        Viewer: {
            cancel: 'Revocare',
            ok: 'OK',
            bottom: 'Partea de jos:',
            top: 'Top:',
            right: 'Dreapta:',
            left: 'Stânga:',
            margins: 'Margini (in)',
            orientation: 'Orientare:',
            paperKind: 'Tip hârtie:',
            pageSetup: 'Configurare pagină',
            landscape: 'Vedere',
            portrait: 'Portret',
            pageNumber: 'Număr de pagină',
            zoomFactor: 'Factor de zoom',
            paginated: 'Aspect pagină imprimată',
            print: 'Imprimare',
            search: 'Căutare',
            matchCase: 'Potrivire litere',
            wholeWord: 'Potrivire cuvinte complete',
            searchResults: 'Rezultate căutare',
            previousPage: 'Pagina anterioară',
            nextPage: 'Pagina următoare',
            firstPage: 'Prima pagină',
            lastPage: 'Ultima pagină',
            backwardHistory: 'Desiş de pădure',
            forwardHistory: 'Înainte',
            pageCount: 'Contor de pagini',
            selectTool: 'Selectaţi instrumentul',
            moveTool: 'Instrumentul deplasare',
            continuousMode: 'Continuă vizualizare de pagină',
            singleMode: 'Vizualizarea unei singure pagini',
            wholePage: 'Potrivire toată pagina',
            pageWidth: 'Potrivire lăţime de filme',
            zoomOut: 'Micșorare',
            zoomIn: 'Mărire',
            rubberbandTool: 'Măriți prin Selecție',
            magnifierTool: 'Lupă',
            rotatePage: 'Rotiți pagina',
            rotateDocument: 'Rotiți documentul',
            exports: 'Export',
            fullScreen: 'Ecran complet',
            exitFullScreen: 'Ieșire ecran complet',
            hamburgerMenu: 'Instrumente',
            showSearchBar: 'Afișare bară de căutare',
            viewMenu: 'Opţiuni de aspect',
            searchOptions: 'Opțiuni căutare',
            matchCaseMenuItem: 'Potrivire litere mari și mici',
            wholeWordMenuItem: 'Cuvintele întregi',
            thumbnails: 'Miniaturi de pagini',
            outlines: 'Plan document',
            loading: 'Incarcare…',
            pdfExportName: 'PDF Adobe',
            docxExportName: 'Cuvântul de deschidere XML',
            xlsxExportName: 'Excel Open XML',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Arhivă web (MHTML)',
            htmlExportName: 'HTML document',
            rtfExportName: 'Document RTF',
            metafileExportName: 'Metafişierele comprimat',
            csvExportName: 'CSV',
            tiffExportName: 'Imagini TIFF',
            bmpExportName: 'Imaginile BMP',
            emfExportName: 'Metafișier extins',
            gifExportName: 'Imagini GIF',
            jpgExportName: 'Imagini JPEG',
            jpegExportName: 'Imagini JPEG',
            pngExportName: 'PNG imagini',
            abstractMethodException: 'Aceasta este o metoda abstracta, vă rugăm să pună în aplicare.',
            cannotRenderPageNoViewPage: 'Nu se poate reda filme fără documentul sursă şi Vezi pagina.',
            cannotRenderPageNoDoc: 'Nu se poate reda filme fără documentul sursă şi Vezi pagina.',
            exportFormat: 'Format export:',
            exportOptionTitle: 'Opțiuni export',
            documentRestrictionsGroup: 'Restricţii de document',
            passwordSecurityGroup: 'Securitate parolă',
            outputRangeGroup: 'Gama de ieşire',
            documentInfoGroup: 'Document info',
            generalGroup: 'General',
            docInfoTitle: 'Funcție',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Manager',
            docInfoOperator: 'Operatorul',
            docInfoCompany: 'Firmă',
            docInfoSubject: 'Subiect',
            docInfoComment: 'Comentariu',
            docInfoCreator: 'Creator',
            docInfoProducer: 'Producător',
            docInfoCreationTime: 'Momentul creării',
            docInfoRevisionTime: 'Timp de revizuire',
            docInfoKeywords: 'Cuvinte cheie',
            embedFonts: 'Încorporare fonturi TrueType',
            pdfACompatible: 'Compatibil cu PDF/A (nivelul 2B)',
            useCompression: 'Utilizare comprimare',
            useOutlines: 'Genera contururi',
            allowCopyContent: 'Permite conţinut sau extragere',
            allowEditAnnotations: 'Permite editarea de adnotare',
            allowEditContent: 'Permite editarea conţinutului',
            allowPrint: 'Permite imprimarea',
            ownerPassword: 'Permisiuni (proprietarul) parola:',
            userPassword: 'Document deschis (utilizator) parola:',
            encryptionType: 'Nivel de criptare:',
            paged: 'Paginat',
            showNavigator: 'Arată Navigator',
            navigatorPosition: 'Poziția navigatorului',
            singleFile: 'Singur fişier',
            tolerance: 'Toleranta atunci când detectează limitele de text (puncte):',
            pictureLayer: 'Strat de poze separate pentru utilizarea',
            metafileType: 'Tipul metafişier',
            monochrome: 'Monocrom',
            resolution: 'Rezoluţie:',
            outputRange: 'Zonă pagină:',
            outputRangeInverted: 'Inversat',
            showZoomBar: 'Bara de zoom',
            searchPrev: 'Căutaţi anterioare',
            searchNext: 'Cautare Next',
            checkMark: '\u2713',
            exportOk: 'Export…',
            cannotSearch: 'Căutarea necesită specificarea unei surse de document.',
            parameters: 'Parametri',
            requiringParameters: 'Vă rugăm să intrare parametrii.',
            nullParameterError: 'Valoarea nu poate fi NULL.',
            invalidParameterError: 'Nevalidă de intrare.',
            parameterNoneItemsSelected: '(nici unul)',
            parameterAllItemsSelected: '(toate)',
            parameterSelectAllItemText: '(Selectați tot)',
            selectParameterValue: '(selectaţi valoarea)',
            apply: 'Aplicare',
            errorOccured: 'A apărut o eroare.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

