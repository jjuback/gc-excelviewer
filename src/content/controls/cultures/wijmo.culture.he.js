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
 * Wijmo culture file: he (Hebrew)
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
            name: 'he',
            displayName: 'Hebrew',
            numberFormat: {
                '.': '.',
                ',': ',',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₪', pattern: ['$-n', '$ n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'שבת'],
                daysAbbr: ['יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה', 'יום ו', 'שבת'],
                months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                monthsAbbr: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['לספירה'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd dd MMMM yyyy',
                    f: 'dddd dd MMMM yyyy HH:mm', F: 'dddd dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'dd MMMM', M: 'dd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'סגור',
            ctc: 'אנא צרו קשר עם GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'הרשיון Wijmo ביישום זה אינו חוקי עבור התחום הנוכחי. התחום רשיון <b> {domain}</b>; התחום הנוכחי הוא <b> {licDomain}</b>.',
            evl: 'גירסאת הערכה Wijmo ({version})',
            exp: 'פג התוקף של הרשיון Wijmo ביישום זה. תאריך התפוגה הרישיון הוא <b> {expDate:d}</b>.',
            hdr: 'רשיון Wijmo',
            lic: 'הרשיון Wijmo ביישום זה אינו חוקי.',
            mss: 'הרשיון Wijmo ביישום זה אינו מוגדר.',
            prd: 'הרשיון Wijmo ביישום זה אינו חוקי עבור הפקד  <b> {control} </b>  .',
            ver: 'הרשיון Wijmo ביישום זה אינו חוקי עבור הגירסה בשימוש. גירסת רשיון <b>{version}</b>; גירסת המוצר הוא <b> {licVer}</b>.'
        },
        MultiSelect: {
            itemsSelected: 'פריטים שנבחרו  {count:n0}',
            selectAll: 'בחר הכל'
        },
        FlexGrid: {
            groupHeaderFormat: '(פריטים {count:n0}) <b>{value}</b> :{name}'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'עורך מסנן עבור עמודה',
            ascending: '\u2191 ‏‏סדר עולה',
            descending: '\u2193 ‏‏סדר יורד',
            apply: 'החל',
            cancel: 'ביטול',
            clear: 'נקה',
            conditions: 'סנן לפי תנאי',
            values: 'סנן לפי ערך',
            // value filter
            search: 'חפש',
            selectAll: 'בחר הכל',
            null: '(כלום)',
            // condition filter
            header: 'הצג פריטים כאשר הערך',
            and: 'וכן',
            or: 'או',
            stringOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 },
                { name: 'מתחיל ב-', op: 6 },
                { name: 'מסתיים ב-', op: 7 },
                { name: 'מכיל', op: 8 },
                { name: 'לא מכיל', op: 9 }
            ],
            numberOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 },
                { name: 'גדול מ-', op: 2 },
                { name: 'גדול או שווה ל-', op: 3 },
                { name: 'קטן מ-', op: 4 },
                { name: 'קטן או שווה ל-', op: 5 }
            ],
            dateOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לפני', op: 4 },
                { name: 'אחרי', op: 2 }
            ],
            booleanOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'הגדרות שדה:',
                header: 'כותרת:',
                summary: 'תקציר:',
                showAs: 'להראות כמו:',
                weighBy: 'שוקל על-ידי:',
                sort: 'מיון:',
                filter: 'מסנן:',
                format: 'תבנית:',
                sample: 'לדוגמה:',
                edit: 'עריכה…',
                clear: 'נקה',
                ok: 'אישור',
                cancel: 'ביטול',
                none: '(ללא)',
                sorts: {
                    asc: '‏‏סדר עולה',
                    desc: '‏‏סדר יורד'
                },
                aggs: {
                    sum: 'סכום',
                    cnt: '‏‏ספירה',
                    avg: 'ממוצע',
                    max: 'מקסימום',
                    min: 'Min',
                    rng: 'טווח',
                    std: 'סטיית_תקן_נאמדת',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'ראשון',
                    last: 'אחרון'
                },
                calcs: {
                    noCalc: 'ללא חישוב',
                    dRow: 'ההבדל בין השורה הקודמת',
                    dRowPct: '% מן השורה הקודמת',
                    dCol: 'ההבדל מעמודה הקודם',
                    dColPct: '% הבדל בינו לבין דף קודמות עמודה',
                    dPctGrand: '% מן הסכום הכולל',
                    dPctRow: '% סה כ שורה',
                    dPctCol: '% של עמודה מוחלטת',
                    dRunTot: 'הסכום המצטבר',
                    dRunTotPct: '% הסכום השוטף'
                },
                formats: {
                    n0: 'מספר שלם (n0)',
                    n2: 'לצוף (n2)',
                    c: 'מטבע (c)',
                    p0: 'אחוז (p0)',
                    p2: 'אחוז (p2)',
                    n2c: 'אלפים (,n2)',
                    n2cc: 'מיליונים (,,n2)',
                    n2ccc: 'מיליארדים (,,,n2)',
                    d: 'תאריך (d)',
                    MMMMddyyyy: 'חודש יום שנה (MMMM dd, yyyy)',
                    dMyy: 'יום חודש שנה (d/M/yy)',
                    ddMyy: 'יום חודש שנה (M/dd/yy)',
                    dMyyyy: 'יום חודש שנה (M/dd/yyyy)',
                    MMMyyyy: 'חודש שנה (MMM yyyy)',
                    MMMMyyyy: 'חודש שנה (MMMM yyyy)',
                    yyyyQq: 'רבעון שנת (q yyyy "Q")',
                    FYEEEEQU: 'רבעון שנת הכספים ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'סכום כולל',
                subTotal: 'סכום ביניים'
            },
            PivotPanel: {
                fields: 'בחר שדות כדי להוסיף לדוח:',
                drag: 'גרור שדות בין האזורים שלהלן:',
                filters: 'מסננים',
                cols: 'טורים',
                rows: 'שורות',
                vals: 'ערכים',
                defer: 'דחה את העדכונים',
                update: 'עדכון'
            },
            _ListContextMenu: {
                up: 'הזז למעלה',
                down: 'הזז למטה',
                first: 'העבר להתחלה',
                last: 'העבר לסוף',
                filter: 'העבר אל מסנן דוחות',
                rows: 'העבר אל תוויות שורה',
                cols: 'העבר אל תוויות עמודה',
                vals: 'העבר אל ערכים',
                remove: 'הסר שדה',
                edit: 'הגדרות שדה…',
                detail: 'הצג פירוט…'
            },
            PivotChart: {
                by: 'לפי',
                and: 'לבין'
            },
            DetailDialog: {
                header: 'תצוגת הפרטים:',
                ok: 'אישור',
                items: '{cnt:n0} פריטים',
                item: 'הפריט {cnt}',
                row: 'Row',
                col: 'Column'
            }
        },
        Viewer: {
            cancel: 'ביטול',
            ok: 'אישור',
            bottom: 'תחתונים:',
            top: 'עליון:',
            right: 'ימין:',
            left: 'שמאל:',
            margins: 'שוליים (אינצ\'ים)',
            orientation: 'כיוון:',
            paperKind: 'סוג נייר:',
            pageSetup: 'הגדרת עמוד',
            landscape: 'לרוחב',
            portrait: 'לאורך',
            pageNumber: 'מספר עמוד',
            zoomFactor: 'זום פקטור',
            paginated: 'פריסת הדפסה',
            print: 'הדפסה',
            search: 'חפש',
            matchCase: 'התאם רישיות',
            wholeWord: 'אתר מילים שלמות בלבד',
            searchResults: 'תוצאות חיפוש',
            previousPage: 'הדף הקודם',
            nextPage: 'העמוד הבא',
            firstPage: 'עמוד ראשון',
            lastPage: 'דף אחרון',
            backwardHistory: 'אחורה',
            forwardHistory: 'קדימה',
            pageCount: 'ספירת דפים',
            selectTool: 'בחרו בכלי',
            moveTool: 'הכלי הזזה',
            continuousMode: 'תצוגת עמוד רציף',
            singleMode: 'התצוגה \' עמוד בודד \'',
            wholePage: 'התאם עמוד שלם',
            pageWidth: 'התאם רוחב עמוד',
            zoomOut: 'הקטן תצוגה',
            zoomIn: 'הגדל תצוגה',
            rubberbandTool: 'זום על ידי בחירה',
            magnifierTool: 'זכוכית מגדלת',
            rotatePage: 'סובב דף',
            rotateDocument: 'סובב מסמך',
            exports: 'ייצוא',
            fullScreen: 'מסך מלא',
            exitFullScreen: 'צא ממסך מלא',
            hamburgerMenu: 'כלים',
            showSearchBar: 'הצג את סרגל החיפוש',
            viewMenu: 'אפשרויות פריסה',
            searchOptions: 'אפשרויות חיפוש',
            matchCaseMenuItem: 'התאם רישיות',
            wholeWordMenuItem: 'משחק מילים שלמות',
            thumbnails: 'תמונות עמוד ממוזערות',
            outlines: 'מפת מסמך',
            loading: 'טוען…',
            pdfExportName: 'PDF של Adobe',
            docxExportName: 'המילה open XML',
            xlsxExportName: 'Excel open XML',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'ארכיון אינטרנט (MHTML)',
            htmlExportName: 'מסמך HTML',
            rtfExportName: 'מסמך RTF',
            metafileExportName: 'קבצי metafile דחוס',
            csvExportName: 'CSV',
            tiffExportName: 'תמונות tiff',
            bmpExportName: 'תמונות BMP',
            emfExportName: 'קבצי metafile משופרים',
            gifExportName: 'תמונות GIF',
            jpgExportName: 'תמונות JPEG',
            jpegExportName: 'תמונות JPEG',
            pngExportName: 'תמונות PNG',
            abstractMethodException: 'זוהי שיטה אבסטרקטית, בבקשה ליישם את זה.',
            cannotRenderPageNoViewPage: 'לא רינדור העמוד ללא מסמך מקור והעמוד תצוגה.',
            cannotRenderPageNoDoc: 'לא רינדור העמוד ללא מסמך מקור והעמוד תצוגה.',
            exportFormat: 'תבנית ייצוא:',
            exportOptionTitle: 'אפשרויות ייצוא',
            documentRestrictionsGroup: 'המסמך הגבלות',
            passwordSecurityGroup: 'אבטחת סיסמה',
            outputRangeGroup: 'טווח פלט',
            documentInfoGroup: 'פרטי מסמך',
            generalGroup: 'כללי',
            docInfoTitle: 'תואר',
            docInfoAuthor: 'מחבר',
            docInfoManager: 'מנהל',
            docInfoOperator: 'אופרטור',
            docInfoCompany: 'חברה',
            docInfoSubject: 'Subject',
            docInfoComment: 'תגובה',
            docInfoCreator: 'Creator',
            docInfoProducer: 'מפיק',
            docInfoCreationTime: 'זמן יצירה',
            docInfoRevisionTime: 'זמן התיקון',
            docInfoKeywords: 'Keywords',
            embedFonts: 'הטבע גופני TrueType',
            pdfACompatible: 'תואם PDF/A (רמת 2B)',
            useCompression: 'השתמש בדחיסה',
            useOutlines: 'יצירת קווי מתאר',
            allowCopyContent: 'לאפשר העתקת תוכן או חילוץ',
            allowEditAnnotations: 'אפשר עריכה ביאור',
            allowEditContent: 'אפשר עריכת תוכן',
            allowPrint: 'אפשר הדפסה',
            ownerPassword: 'סיסמת ההרשאות (בעל):',
            userPassword: 'המסמך הפתוח (המשתמש) סיסמה:',
            encryptionType: 'רמת הצפנה:',
            paged: 'בקובץ החלפה',
            showNavigator: 'הצג נווט',
            navigatorPosition: 'נווט מיקום.',
            singleFile: 'קובץ יחיד',
            tolerance: 'עמידות בעת זיהוי גבולות מלל (נקודות):',
            pictureLayer: 'שכבת תמונה נפרדים שימוש',
            metafileType: 'סוג קובץ Metafile:',
            monochrome: 'חד-צבעי',
            resolution: 'רזולוציה:',
            outputRange: 'טווח עמודים:',
            outputRangeInverted: 'הפוך',
            showZoomBar: 'שארק',
            searchPrev: 'חפש את הקודם',
            searchNext: 'חפש את הבא',
            checkMark: '\u2713',
            exportOk: 'ייצוא…',
            cannotSearch: 'החיפוש מחייב מקור מסמך שייקבע.',
            parameters: 'Parameters',
            requiringParameters: 'בבקשה פרמטרים של קלט.',
            nullParameterError: 'הערך אינו יכול להיות Null.',
            invalidParameterError: 'לא חוקי קלט.',
            parameterNoneItemsSelected: '(ללא)',
            parameterAllItemsSelected: '(הכל)',
            parameterSelectAllItemText: '(בחר הכל)',
            selectParameterValue: '(בחר ערך)',
            apply: 'החל',
            errorOccured: 'אירעה שגיאה.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

