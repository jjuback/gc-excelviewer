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
 * Wijmo culture file: ar-AE (Arabic (U.A.E.))
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
            name: 'ar-AE',
            displayName: 'Arabic (U.A.E.)',
            numberFormat: {
                '.': '.',
                ',': ',',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'د.إ.‏', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 6,
                days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
                daysAbbr: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
                months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                monthsAbbr: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                am: ['ص', 'ص'],
                pm: ['م', 'م'],
                eras: ['م'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dd MMMM, yyyy',
                    f: 'dd MMMM, yyyy hh:mm tt', F: 'dd MMMM, yyyy hh:mm:ss tt',
                    t: 'hh:mm tt', T: 'hh:mm:ss tt',
                    m: 'dd MMMM', M: 'dd MMMM',
                    y: 'MMMM, yyyy', Y: 'MMMM, yyyy',
                    g: 'dd/MM/yyyy hh:mm tt', G: 'dd/MM/yyyy hh:mm:ss tt',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'قم بإغلاق',
            ctc: 'يرجى الاتصال جرابيسيتي:  <a href="mailto:us.sales@grapecity.com"> us.sales@grapecity.com</a>.',
            dmn: 'الترخيص ويجمو في هذا التطبيق غير صالح للمجال الحالي. مجال الترخيص هي  <b> {domain}</b>؛ والمجال الحالي هو  <b> {licDomain}</b>.',
            evl: 'ويجمو التقييم النسخة ({version})',
            exp: 'انتهت مدة صلاحية الترخيص ويجمو في هذا التطبيق. تاريخ انتهاء صلاحية الترخيص هو  <b> {expDate:d}</b>.',
            hdr: 'رخصة ويجمو',
            lic: 'الترخيص ويجمو في هذا التطبيق غير صالح.',
            mss: 'لم يتم تعيين ترخيص ويجمو في هذا التطبيق.',
            prd: 'الترخيص ويجمو في هذا التطبيق غير صالح لعنصر التحكم  <b> {control} </b>  .',
            ver: 'الترخيص ويجمو في هذا التطبيق غير صالحة للإصدار قيد الاستخدام. يتم إصدار ترخيص  <b> {version}</b>؛ وهو إصدار المنتج  <b> {licVer}</b>.'
        },
        MultiSelect: {
            itemsSelected: 'العناصر المحددة  {count:n0}',
            selectAll: 'تحديد الكل'
        },
        FlexGrid: {
            groupHeaderFormat: '(العناصر {count:n0})<b>{value}</b> :{name}'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'تحرير عامل تصفية لعمود',
            ascending: '\u2191 تصاعديًا',
            descending: '\u2193 تنازليًا',
            apply: 'تطبيق',
            cancel: 'إلغاء الأمر',
            clear: 'مسح',
            conditions: 'تصنيف حسب الحالة',
            values: 'تصنيف حسب القيمة',
            // value filter
            search: 'بحث',
            selectAll: 'تحديد الكل',
            null: '(لا شيء)',
            // condition filter
            header: 'عرض العناصر حيث توجد القيمة',
            and: 'و',
            or: 'أو',
            stringOperators: [
                { name: '(لم يتم التعيين)', op: null },
                { name: 'تساوي', op: 0 },
                { name: 'لا تساوي', op: 1 },
                { name: 'يبدأ بـ', op: 6 },
                { name: 'ينتهي بـ', op: 7 },
                { name: 'يحتوي على', op: 8 },
                { name: 'لا يحتوى على', op: 9 }
            ],
            numberOperators: [
                { name: '(لم يتم التعيين)', op: null },
                { name: 'تساوي', op: 0 },
                { name: 'لا تساوي', op: 1 },
                { name: 'أكبر من', op: 2 },
                { name: 'أكبر من أو يساوي', op: 3 },
                { name: 'أقل من', op: 4 },
                { name: 'أقل من أو يساوي', op: 5 }
            ],
            dateOperators: [
                { name: '(لم يتم التعيين)', op: null },
                { name: 'تساوي', op: 0 },
                { name: 'قبل', op: 4 },
                { name: 'بعد', op: 2 }
            ],
            booleanOperators: [
                { name: '(لم يتم التعيين)', op: null },
                { name: 'تساوي', op: 0 },
                { name: 'لا تساوي', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'إعدادات الحقل:',
                header: 'الرأس:',
                summary: 'موجز:',
                showAs: 'إظهار ك:',
                weighBy: 'تزن بها:',
                sort: 'الفرز:',
                filter: 'عامل التصفية:',
                format: 'التنسيق:',
                sample: 'العينة:',
                edit: 'تحرير…',
                clear: 'واضحة',
                ok: 'موافق',
                cancel: 'إلغاء الأمر',
                none: '(بلا)',
                sorts: {
                    asc: 'تصاعديًا',
                    desc: 'تنازليًا'
                },
                aggs: {
                    sum: 'مجموع',
                    cnt: 'العد',
                    avg: 'في المتوسط',
                    max: 'ماكس',
                    min: 'دقيقة',
                    rng: 'النطاق',
                    std: 'الانحراف المعياري',
                    var: 'فأر',
                    stdp: 'ستديفبوب',
                    varp: 'فاربوب',
                    first: 'الأولى',
                    last: 'الماضي'
                },
                calcs: {
                    noCalc: 'لا يوجد حساب',
                    dRow: 'الفرق من الصف السابق',
                    dRowPct: '% الفرق من الصف السابق',
                    dCol: 'الفرق من العمود السابق',
                    dColPct: '% الفرق من العمود السابق',
                    dPctGrand: '% من المجموع الكلي',
                    dPctRow: '% من مجموع الصف',
                    dPctCol: '% من إجمالي العمود',
                    dRunTot: 'إجمالي قيد التشغيل',
                    dRunTotPct: '% إجمالي قيد التشغيل'
                },
                formats: {
                    n0: 'عدد صحيح (n0)',
                    n2: 'عدد عشري (n2)',
                    c: '(c) تحويل العملات',
                    p0: 'النسبة المئوية (p0)',
                    p2: 'النسبة المئوية (p2)',
                    n2c: 'آلاف (,n2(',
                    n2cc: 'الملايين (,,n2)',
                    n2ccc: 'البلايين (2,,,n)',
                    d: '(d) تاريخ',
                    MMMMddyyyy: 'يوم شهر "سنة" (MMMM dd, yyyy)',
                    dMyy: 'يوم شهر سنة (d/M/yy)',
                    ddMyy: 'يوم شهر سنة (dd/M/yy)',
                    dMyyyy: 'يوم شهر سنة (dd/M/yyyy)',
                    MMMyyyy: 'الشهر السنة (MMM yyyy)',
                    MMMMyyyy: 'الشهر السنة (MMMM yyyy)',
                    yyyyQq: 'ربع السنة (q"Q"yyyy)',
                    FYEEEEQU: 'ربع السنة المالية (EEEE "Q"U"FY")'
                }
            },
            PivotEngine: {
                grandTotal: 'المجموع الكلي',
                subTotal: 'المجموع الفرعي'
            },
            PivotPanel: {
                fields: 'اختر الحقول المراد إضافتها إلى التقرير:',
                drag: 'اسحب الحقول بين المجالات الواردة أدناه:',
                filters: 'عوامل التصفية',
                cols: 'الأعمدة',
                rows: 'الصفوف',
                vals: 'القيم',
                defer: 'تأجيل التحديثات',
                update: 'التحديث'
            },
            _ListContextMenu: {
                up: 'تحريك لأعلى',
                down: 'تحريك لأسفل',
                first: 'الانتقال إلى بداية',
                last: 'الانتقال إلى نهاية',
                filter: 'الانتقال إلى تقرير التصفية',
                rows: 'الانتقال إلى تسميات الصفوف',
                cols: 'الانتقال إلى تسميات الأعمدة',
                vals: 'الانتقال إلى القيم',
                remove: 'إزالة حقل',
                edit: 'إعدادات الحقل…',
                detail: 'إظهار التفاصيل…'
            },
            PivotChart: {
                by: 'قبل',
                and: 'و'
            },
            DetailDialog: {
                header: 'عرض التفاصيل:',
                ok: 'موافق',
                items: 'العناصر {cnt:n0}',
                item: 'البند {cnt}',
                row: 'الصف',
                col: 'العمود'
            }
        },
        Viewer: {
            cancel: 'إلغاء الأمر',
            ok: 'موافق',
            bottom: 'أسفل:',
            top: 'أعلى:',
            right: 'الحق:',
            left: 'اليسار:',
            margins: 'هوامش (بوصة)',
            orientation: 'الاتجاه:',
            paperKind: 'نوع الورق:',
            pageSetup: 'إعداد الصفحة',
            landscape: 'المناظر الطبيعية',
            portrait: 'صورة',
            pageNumber: 'رقم الصفحة',
            zoomFactor: 'عامل التكبير/التصغير',
            paginated: 'تخطيط الطباعة',
            print: 'طباعة',
            search: 'بحث',
            matchCase: 'مطابقة حالة الأحرف',
            wholeWord: 'مطابقة الكلمة بأكملها فقط',
            searchResults: 'نتائج البحث',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية',
            firstPage: 'الصفحة الأولى',
            lastPage: 'الصفحة الأخيرة',
            backwardHistory: 'إلى الخلف',
            forwardHistory: 'إلى الأمام',
            pageCount: 'عدد الصفحات',
            selectTool: 'حدد أداة',
            moveTool: 'أداة التحريك',
            continuousMode: 'استمرار عرض الصفحة',
            singleMode: 'عرض صفحة واحدة',
            wholePage: 'احتواء صفحة كاملة',
            pageWidth: 'تلائم عرض الصفحة',
            zoomOut: 'التصغير',
            zoomIn: 'تكبير',
            rubberbandTool: 'التكبير/التصغير بالتحديد',
            magnifierTool: 'المكبر',
            rotatePage: 'استدارة الصفحة',
            rotateDocument: 'استدارة المستند',
            exports: 'تصدير',
            fullScreen: 'كامل الشاشة',
            exitFullScreen: 'إنهاء وضع ملء الشاشة',
            hamburgerMenu: 'أدوات',
            showSearchBar: 'إظهار شريط البحث',
            viewMenu: 'خيارات التخطيط',
            searchOptions: 'خيارات البحث',
            matchCaseMenuItem: 'مطابقة حالة الأحرف',
            wholeWordMenuItem: 'مطابقة الكلمة بأكملها',
            thumbnails: 'مصغرات الصفحة',
            outlines: 'خريطة المستند',
            loading: 'تحميل…',
            pdfExportName: 'أدوبي قوات الدفاع الشعبي',
            docxExportName: 'Word XML المفتوحة',
            xlsxExportName: 'تنسيق xml المفتوح Excel',
            docExportName: 'مايكروسوفت وورد',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'أرشيف ويب (MHTML)',
            htmlExportName: 'مستند HTML',
            rtfExportName: 'المستند RTF',
            metafileExportName: 'ضغط ملفات التعريف',
            csvExportName: 'CSV',
            tiffExportName: 'صور tiff',
            bmpExportName: 'صور BMP',
            emfExportName: 'ملف تعريف محسن',
            gifExportName: 'صور GIF',
            jpgExportName: 'صور JPEG',
            jpegExportName: 'صور JPEG',
            pngExportName: 'صور PNG',
            abstractMethodException: 'وهذا أسلوب مجرد، يرجى تنفيذه.',
            cannotRenderPageNoViewPage: 'لا يمكن تقديم الصفحة بدون مصدر المستند وعرض الصفحة.',
            cannotRenderPageNoDoc: 'لا يمكن تقديم الصفحة بدون مصدر المستند وعرض الصفحة.',
            exportFormat: 'تنسيق التصدير:',
            exportOptionTitle: 'خيارات التصدير',
            documentRestrictionsGroup: 'قيود وثيقة',
            passwordSecurityGroup: 'أمان كلمة المرور',
            outputRangeGroup: 'نطاق الإخراج',
            documentInfoGroup: 'معلومات المستند',
            generalGroup: 'العام',
            docInfoTitle: 'العنوان',
            docInfoAuthor: 'كاتب',
            docInfoManager: 'مدير',
            docInfoOperator: 'عامل التشغيل',
            docInfoCompany: 'الشركة',
            docInfoSubject: 'هذا الموضوع',
            docInfoComment: 'التعليق',
            docInfoCreator: 'الخالق',
            docInfoProducer: 'منتج',
            docInfoCreationTime: 'وقت الإنشاء',
            docInfoRevisionTime: 'وقت مراجعة',
            docInfoKeywords: 'الكلمات الرئيسية',
            embedFonts: 'تضمين خطوط تروتايب',
            pdfACompatible: 'متوافق مع PDF/A (مستوى 2B)',
            useCompression: 'استخدام ضغط',
            useOutlines: 'إنشاء مخططات',
            allowCopyContent: 'السماح بنسخ المحتوى أو استخراج',
            allowEditAnnotations: 'السماح بتحرير التعليق التوضيحي',
            allowEditContent: 'السماح بتحرير المحتوى',
            allowPrint: 'السماح بالطباعة',
            ownerPassword: 'كلمة مرور الصلاحيات (المالك):',
            userPassword: 'كلمة مرور فتح (المستخدم) الوثيقة:',
            encryptionType: 'مستوى التشفير:',
            paged: 'مقسم إلى صفحات',
            showNavigator: 'إظهار المستكشف',
            navigatorPosition: 'موقف المستكشف',
            singleFile: 'ملف واحد',
            tolerance: 'التسامح عند الكشف عن حدود النص (نقاط):',
            pictureLayer: 'استخدام صورة منفصلة طبقة',
            metafileType: 'نوع ملف التعريف:',
            monochrome: 'أحادية اللون',
            resolution: 'القرار:',
            outputRange: 'نطاق الصفحات:',
            outputRangeInverted: 'مقلوب',
            showZoomBar: 'شريط التكبير/التصغير',
            searchPrev: 'البحث السابقة',
            searchNext: 'البحث عن التالي',
            checkMark: '\u2713',
            exportOk: 'تصدير…',
            cannotSearch: 'يتطلب البحث عن مصدر مستند المطلوب تحديدها.',
            parameters: 'معلمات',
            requiringParameters: 'الرجاء إدخال المعلمات.',
            nullParameterError: 'لا يمكن أن تكون القيمة فارغة.',
            invalidParameterError: 'صالح الإدخال.',
            parameterNoneItemsSelected: '(بلا)',
            parameterAllItemsSelected: '(الكل)',
            parameterSelectAllItemText: '(تحديد الكل)',
            selectParameterValue: '(حدد قيمة)',
            apply: 'تطبيق',
            errorOccured: 'لقد حدث خطأ.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

