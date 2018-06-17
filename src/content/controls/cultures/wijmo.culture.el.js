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
 * Wijmo culture file: el (Greek)
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
            name: 'el',
            displayName: 'Greek',
            numberFormat: {
                '.': ',',
                ',': '.',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
                daysAbbr: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
                months: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
                monthsAbbr: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
                am: ['πμ', 'π'],
                pm: ['μμ', 'μ'],
                eras: ['μ.Χ.'],
                patterns: {
                    d: 'd/M/yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy h:mm tt', F: 'dddd, d MMMM yyyy h:mm:ss tt',
                    t: 'h:mm tt', T: 'h:mm:ss tt',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd/M/yyyy h:mm tt', G: 'd/M/yyyy h:mm:ss tt',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'ΚΛΕΙΣΙΜΟ',
            ctc: 'Παρακαλούμε επικοινωνήστε με GrapeCity: <a href="mailto:us.sales@grapecity.com"> us.sales@grapecity.com</a>.',
            dmn: 'Η άδεια Wijmo σε αυτή την εφαρμογή δεν είναι έγκυρη για τον τρέχοντα τομέα. Άδεια τομέα <b>{licDomain}</b>, τον τρέχοντα τομέα είναι <b>{domain}</b>.',
            evl: 'Wijmo έκδοση αξιολόγησης ({version})',
            exp: 'Έχει λήξει η άδεια Wijmo σε αυτή την εφαρμογή. Η ημερομηνία λήξης της άδειας χρήσης είναι <b>{expDate:d}</b>.',
            hdr: 'Wijmo άδεια χρήσης',
            lic: 'Η άδεια Wijmo σε αυτή την εφαρμογή δεν είναι έγκυρη.',
            mss: 'Η άδεια Wijmo σε αυτή την εφαρμογή δεν έχει ρυθμιστεί.',
            prd: 'Η άδεια Wijmo σε αυτή την εφαρμογή δεν είναι έγκυρη για το στοιχείο ελέγχου <b>{control}</b>  .',
            ver: 'Η άδεια Wijmo σε αυτή την εφαρμογή δεν είναι έγκυρη για την έκδοση σε χρήση. Την έκδοση άδειας <b>{licVer}</b>, την έκδοση του προϊόντος είναι  <b> {version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} αντικείμενα που επιλέγονται',
            selectAll: 'Επιλογή όλων'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} στοιχεία)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Φίλτρο επεξεργασίας στήλης',
            ascending: '\u2191 Με αύξουσα σειρά',
            descending: '\u2193 Με φθίνουσα σειρά',
            apply: 'Εφαρμογή',
            cancel: 'Άκυρο',
            clear: 'Εκκαθάριση',
            conditions: 'Φιλτράρισμα ανά κατάσταση',
            values: 'Φιλτράρισμα ανά τιμή',
            // value filter
            search: 'Αναζήτηση',
            selectAll: 'Επιλογή όλων',
            null: '(τίποτα)',
            // condition filter
            header: 'Εμφάνιση στοιχείων όπου η τιμή',
            and: 'Και',
            or: 'ή',
            stringOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 },
                { name: 'Αρχίζει με', op: 6 },
                { name: 'Τελειώνει με', op: 7 },
                { name: 'Περιέχει', op: 8 },
                { name: 'Δεν περιέχει', op: 9 }
            ],
            numberOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 },
                { name: 'Είναι μεγαλύτερη από', op: 2 },
                { name: 'Είναι μεγαλύτερη από ή ίση με', op: 3 },
                { name: 'Είναι μικρότερη από', op: 4 },
                { name: 'Είναι μικρότερη από ή ίση με', op: 5 }
            ],
            dateOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Είναι Πριν', op: 4 },
                { name: 'Είναι Μετά', op: 2 }
            ],
            booleanOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Ρυθμίσεις πεδίου:',
                header: 'Κεφαλ.:',
                summary: 'Περίληψη:',
                showAs: 'Εμφάνιση ως:',
                weighBy: 'Ζυγίζουν από:',
                sort: 'Ταξινόμηση:',
                filter: 'Φιλτράρισμα:',
                format: 'Μορφή:',
                sample: 'Δείγμα:',
                edit: 'Επεξεργαστείτε…',
                clear: 'Απαλοιφή',
                ok: 'ΟΚ',
                cancel: 'Άκυρο',
                none: '(καμία)',
                sorts: {
                    asc: 'Αύξουσα',
                    desc: 'Φθίνουσα'
                },
                aggs: {
                    sum: 'Άθροισμα',
                    cnt: 'Πλήθος',
                    avg: 'Μέσος όρος',
                    max: 'Μέγιστη',
                    min: 'Ελάχιστο',
                    rng: 'Περιοχή',
                    std: 'Τυπική απόκλιση',
                    var: 'Διακύμανσης',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Πρώτο',
                    last: 'Τελευταίο'
                },
                calcs: {
                    noCalc: 'Χωρίς υπολογισμό',
                    dRow: 'Διαφορά από την προηγούμενη γραμμή',
                    dRowPct: '% Διαφορά από προηγούμενη γραμμή',
                    dCol: 'Διαφορά από την προηγούμενη στήλη',
                    dColPct: '% Διαφορά από την προηγούμενη στήλη',
                    dPctGrand: '% του γενικού αθροίσματος',
                    dPctRow: '% της γραμμής συνολικού',
                    dPctCol: '% σύνολο της στήλης',
                    dRunTot: 'Τρέχον σύνολο',
                    dRunTotPct: 'λειτουργία της συνολικής'
                },
                formats: {
                    n0: 'Ακέραιος (n0)',
                    n2: 'Αριθμός (n2)',
                    c: 'Νόμισμα (c)',
                    p0: 'Ποσοστό (p0)',
                    p2: 'Ποσοστό (p2)',
                    n2c: 'Χιλιάδες (n2,)',
                    n2cc: 'Εκατομμύρια (n2,,)',
                    n2ccc: 'Δισεκατομμύρια (n2,,,)',
                    d: '(Δ) ημερομηνία',
                    MMMMddyyyy: 'Ημέρα μήνας έτος (ΜΜΜΜ dd, yyyy)',
                    dMyy: 'Ημέρα μήνας έτος (d/M/yy)',
                    ddMyy: 'Ημέρα μήνας έτος (M/dd/yy)',
                    dMyyyy: 'Ημέρα μήνας έτος (dd/Μ/yyyy)',
                    MMMyyyy: 'Μήνας έτος (ΜΜΜ yyyy)',
                    MMMMyyyy: 'Μήνας έτος (ΜΜΜΜ yyyy)',
                    yyyyQq: 'Τέταρτο έτος (yyyy "Q"q)',
                    FYEEEEQU: 'Τρίμηνο του οικονομικού έτους ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Τελικό σύνολο',
                subTotal: 'Μερικό άθροισμα'
            },
            PivotPanel: {
                fields: 'Επιλέξτε τα πεδία για να προσθέσω στην έκθεση:',
                drag: 'Σύρετε τα πεδία μεταξύ των παρακάτω περιοχών:',
                filters: 'Φίλτρα',
                cols: 'Στήλες',
                rows: 'σειρές',
                vals: 'Τιμές',
                defer: 'Αναβάλει ενημερώσεις',
                update: 'Ενημέρωση'
            },
            _ListContextMenu: {
                up: 'Μετακίνηση επάνω',
                down: 'Μετακίνηση κάτω',
                first: 'Μετακίνηση στην αρχή',
                last: 'Μετακίνηση στο τέλος',
                filter: 'Μετακίνηση στο φίλτρο αναφοράς',
                rows: 'Μετακίνηση στις ετικέτες γραμμών',
                cols: 'Μετακίνηση στις ετικέτες στηλών',
                vals: 'Μετακίνηση στις τιμές',
                remove: 'Κατάργηση πεδίου',
                edit: 'Ρυθμίσεις πεδίου…',
                detail: 'Εμφάνιση λεπτομερειών…'
            },
            PivotChart: {
                by: 'κατά',
                and: 'των Windows 10 και τη'
            },
            DetailDialog: {
                header: 'Προβολή λεπτομερειών:',
                ok: 'ΟΚ',
                items: 'στοιχεία {cnt:n0}',
                item: 'το στοιχείο {cnt}',
                row: 'Γραμμή',
                col: 'Στήλη'
            }
        },
        Viewer: {
            cancel: 'Άκυρο',
            ok: 'ΟΚ',
            bottom: 'Κάτω:',
            top: 'Top:',
            right: 'Δεξί:',
            left: 'Αριστ.:',
            margins: 'Περιθώρια (ίντσες)',
            orientation: 'Προσανατολισμός:',
            paperKind: 'Το είδος χαρτιού:',
            pageSetup: 'Διαμόρφωση σελίδας',
            landscape: 'Οριζόντιος',
            portrait: 'Κατακόρυφος',
            pageNumber: 'Αριθμός σελίδας',
            zoomFactor: 'Παράγοντας κλίμακας',
            paginated: 'Διάταξη εκτύπωσης',
            print: 'Εκτύπωση',
            search: 'Αναζήτηση',
            matchCase: 'Ταίριασμα πεζών/κεφαλαίων',
            wholeWord: 'Μόνο ολόκληρες λέξεις',
            searchResults: 'Αποτελέσματα αναζήτησης',
            previousPage: 'Προηγούμενη σελίδα',
            nextPage: 'Επόμενη σελίδα',
            firstPage: 'Πρώτη σελίδα',
            lastPage: 'Τελευταία σελίδα',
            backwardHistory: 'Πίσω',
            forwardHistory: 'Εμπρός',
            pageCount: 'Πλήθος σελίδων',
            selectTool: 'Επιλέξτε το εργαλείο',
            moveTool: 'Εργαλείο μετακίνησης',
            continuousMode: 'Συνεχής Προβολή σελίδας',
            singleMode: 'Ενιαία σελίδα Προβολή',
            wholePage: 'Ολόκληρη σελίδα Fit',
            pageWidth: 'Ταιριάζουν με το πλάτος της σελίδας',
            zoomOut: 'Σμίκρυνση',
            zoomIn: 'Μεγέθυνση',
            rubberbandTool: 'Μεγέθυνση με επιλογή',
            magnifierTool: 'μεγεθυντικός φακός',
            rotatePage: 'Περιστροφή σελίδας',
            rotateDocument: 'Περιστρέψτε το έγγραφο',
            exports: 'Εξαγωγή',
            fullScreen: 'Πλήρης οθόνη',
            exitFullScreen: 'Έξοδος από πλήρη οθόνη',
            hamburgerMenu: 'Εργαλεία',
            showSearchBar: 'Εμφάνιση γραμμής αναζήτησης',
            viewMenu: 'Επιλογές διάταξης',
            searchOptions: 'Επιλογές αναζήτησης',
            matchCaseMenuItem: 'Ταίριασμα Πεζών-Κεφαλαίων',
            wholeWordMenuItem: 'Ταίριασμα ολόκληρης λέξης',
            thumbnails: 'Μικρογραφίες σελίδων',
            outlines: 'Χάρτης εγγράφου',
            loading: 'Φόρτωση…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML του Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Αρχειοθέτηση Web (MHTML)',
            htmlExportName: 'Έγγραφο HTML',
            rtfExportName: 'Έγγραφο RTF',
            metafileExportName: 'Μετα-συμπιεσμένα αρχεία',
            csvExportName: 'CSV',
            tiffExportName: 'Εικόνες του TIFF',
            bmpExportName: 'Εικόνες BMP',
            emfExportName: 'Εμπλουτισμένο μετα-αρχείο',
            gifExportName: 'Εικόνες GIF',
            jpgExportName: 'Εικόνες JPEG',
            jpegExportName: 'Εικόνες JPEG',
            pngExportName: 'Εικόνες PNG',
            abstractMethodException: 'Αυτή είναι μια αφηρημένη μέθοδο, παρακαλούμε να εφαρμόσει.',
            cannotRenderPageNoViewPage: 'Δεν μπορεί να αποδώσει χωρίς έγγραφο προέλευσης και προβολή σελίδας.',
            cannotRenderPageNoDoc: 'Δεν μπορεί να αποδώσει χωρίς έγγραφο προέλευσης και προβολή σελίδας.',
            exportFormat: 'Μορφή εξαγωγής:',
            exportOptionTitle: 'Επιλογές εξαγωγής',
            documentRestrictionsGroup: 'Έγγραφο περιορισμοί',
            passwordSecurityGroup: 'Ασφάλεια κωδικού πρόσβασης',
            outputRangeGroup: 'Περιοχή εξόδου',
            documentInfoGroup: 'Πληροφορίες εγγράφου',
            generalGroup: 'Γενικά',
            docInfoTitle: 'Title',
            docInfoAuthor: 'Συντάκτης',
            docInfoManager: 'Διευθυντής',
            docInfoOperator: 'Τελεστής',
            docInfoCompany: 'Εταιρεία',
            docInfoSubject: 'Θέμα',
            docInfoComment: 'Σχόλιο',
            docInfoCreator: 'Δημιουργός',
            docInfoProducer: 'Παραγωγός',
            docInfoCreationTime: 'Ώρα δημιουργίας',
            docInfoRevisionTime: 'Χρόνου αναθεώρηση',
            docInfoKeywords: 'Λέξεις-κλειδιά',
            embedFonts: 'Ενσωμάτωση γραμματοσειρών TrueType',
            pdfACompatible: 'Συμβατό με PDF/A (επίπεδο 2B)',
            useCompression: 'Χρήση Συμπίεσης',
            useOutlines: 'Δημιουργία περιγραμμάτων',
            allowCopyContent: 'Επιτρέψτε περιεχόμενο αντιγραφή ή εξαγωγή',
            allowEditAnnotations: 'Επιτρέπει την επεξεργασία σχολίου',
            allowEditContent: 'Επιτρέπεται η επεξεργασία περιεχομένου',
            allowPrint: 'Να επιτρέπεται η εκτύπωση',
            ownerPassword: 'Κωδικός εγκρίσεων (κάτοχος):',
            userPassword: 'Έγγραφο ανοιχτό (χρήστη) τον κωδικό πρόσβασης:',
            encryptionType: 'Επίπεδο κρυπτογράφησης:',
            paged: 'Σελιδοποιημένη',
            showNavigator: 'Εμφάνιση πλοήγησης',
            navigatorPosition: 'Θέση πλοηγού',
            singleFile: 'Ενιαίο αρχείο',
            tolerance: 'Ανοχή όταν ανιχνεύει τα όρια του κειμένου (μονάδες):',
            pictureLayer: 'Χρήση ξεχωριστή εικόνα στρώμα',
            metafileType: 'Τύπος μετα-αρχείο:',
            monochrome: 'Μονόχρωμο',
            resolution: 'Επίλυση:',
            outputRange: 'Περιοχή σελίδων:',
            outputRangeInverted: 'Ανεστραμμένη',
            showZoomBar: 'Γραμμή ζουμ',
            searchPrev: 'Αναζήτηση προηγούμενων',
            searchNext: 'Κάνετε αναζήτηση στη συνέχεια',
            checkMark: '\u2713',
            exportOk: 'Εξαγωγή…',
            cannotSearch: 'Η αναζήτηση απαιτεί να προσδιοριστεί πηγή εγγράφου.',
            parameters: 'Παραμέτρων',
            requiringParameters: 'Παρακαλώ παράμετροι εισόδου.',
            nullParameterError: 'Η τιμή δεν πρέπει να είναι null.',
            invalidParameterError: 'Η εισαγωγή δεν είναι έγκυρη.',
            parameterNoneItemsSelected: '(καμία)',
            parameterAllItemsSelected: '(όλα)',
            parameterSelectAllItemText: '(Επιλογή όλων)',
            selectParameterValue: '(επιλέξτε τιμή)',
            apply: 'Εφαρμογή',
            errorOccured: 'Παρουσιάστηκε σφάλμα.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

