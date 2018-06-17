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
 * Wijmo culture file: hi (Hindi)
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
            name: 'hi',
            displayName: 'Hindi',
            numberFormat: {
                '.': '.',
                ',': ',',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₹', pattern: ['$ -n', '$n'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
                daysAbbr: ['रवि.', 'सोम.', 'मंगल.', 'बुध.', 'गुरु.', 'शुक्र.', 'शनि.'],
                months: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्तूबर', 'नवम्बर', 'दिसम्बर'],
                monthsAbbr: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्तूबर', 'नवम्बर', 'दिसम्बर'],
                am: ['पूर्वाह्न', 'प'],
                pm: ['अपराह्न', 'अ'],
                eras: ['A.D.'],
                patterns: {
                    d: 'dd-MM-yyyy', D: 'dd MMMM yyyy',
                    f: 'dd MMMM yyyy HH:mm', F: 'dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'dd MMMM', M: 'dd MMMM',
                    y: 'MMMM, yyyy', Y: 'MMMM, yyyy',
                    g: 'dd-MM-yyyy HH:mm', G: 'dd-MM-yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
                fiscalYearOffsets: [3, 3]
            }
        },
        Licensing: {
            cls: 'बंद करें',
            ctc: 'कृपया संपर्क GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'इस अनुप्रयोग में Wijmo लायसेंस वर्तमान डोमेन के लिए मांय नहीं है । लायसेंस डोमेन <b>{licDomain}है</b>; वर्तमान डोमेन <b> {domain} है</b>.',
            evl: 'Wijmo मूल्यांकन संस्करण ({version})',
            exp: 'इस अनुप्रयोग में Wijmo लायसेंस की समयसीमा समाप्त हो गई है । लायसेंस समय सीमा समाप्ति दिनांक <b>{expDate:d}है</b>.',
            hdr: 'Wijmo लायसेंस',
            lic: 'इस अनुप्रयोग में Wijmo लायसेंस अमांय है ।',
            mss: 'इस अनुप्रयोग में Wijmo लायसेंस सेट नहीं है ।',
            prd: 'इस अनुप्रयोग में Wijmo लायसेंस  <b>{control}</b> नियंत्रण के लिए मांय नहीं है ।',
            ver: 'इस अनुप्रयोग में Wijmo लायसेंस उपयोग में संस्करण के लिए मांय नहीं है । लायसेंस संस्करण <b>{licVer}है</b>; उत्पाद संस्करण <b> {version} है</b>।'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} आइटम चयनित',
            selectAll: 'सभी का चयन करे'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} आइटम)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'स्तंभ के लिए फ़िल्टर संपादक',
            ascending: '\u2191 आरोही',
            descending: '\u2193 अवरोही',
            apply: 'लागू करें',
            cancel: 'रद्द करें',
            clear: 'साफ़ करें',
            conditions: 'शर्त के अनुसार फ़िल्टर करें',
            values: 'मान के अनुसार फ़िल्टर करें',
            // value filter
            search: 'खोज',
            selectAll: 'सभी का चयन करे',
            null: '(कुछ नहीं)',
            // condition filter
            header: 'वे आइटम दिखाएँ जहाँ मान',
            and: 'और',
            or: 'या',
            stringOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 },
                { name: 'इससे आरंभ होता है', op: 6 },
                { name: 'इससे समाप्त होता है', op: 7 },
                { name: 'जिसमें शामिल है', op: 8 },
                { name: 'जिसमें शामिल नहीं है', op: 9 }
            ],
            numberOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 },
                { name: 'इससे अधिक है', op: 2 },
                { name: 'इससे अधिक या बराबर है', op: 3 },
                { name: 'इससे कम है', op: 4 },
                { name: 'इससे कम या बराबर है', op: 5 }
            ],
            dateOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'इससे पहले है', op: 4 },
                { name: 'इसके बाद है', op: 2 }
            ],
            booleanOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'फ़ील्ड सेटिंग्स:',
                header: 'हैडर:',
                summary: 'सारांश:',
                showAs: 'के रूप में दिखाएँ:',
                weighBy: 'द्वारा वजन:',
                sort: 'सॉर्ट:',
                filter: 'फ़िल्टर करें:',
                format: 'स्वरूप:',
                sample: 'नमूना:',
                edit: 'संपादित करें …',
                clear: 'साफ़ करें',
                ok: 'ठीक',
                cancel: 'रद्द करें',
                none: '(कोई नहीं)',
                sorts: {
                    asc: 'आरोही',
                    desc: 'अवरोही'
                },
                aggs: {
                    sum: 'योग',
                    cnt: 'गिनती',
                    avg: 'औसत',
                    max: 'मैक्स',
                    min: 'मिनट',
                    rng: 'रेंज',
                    std: 'मानक विचलन',
                    var: 'प्रसरण',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'पहला',
                    last: 'अंतिम'
                },
                calcs: {
                    noCalc: 'कोई परिकलन नहीं',
                    dRow: 'पिछली पंक्ति से अंतर',
                    dRowPct: '% अंतर पिछले पंक्ति से',
                    dCol: 'पिछले स्तंभ से अंतर',
                    dColPct: '% अंतर पिछले स्तंभ से',
                    dPctGrand: 'महायोग का %',
                    dPctRow: 'कुल पंक्ति का %',
                    dPctCol: 'स्तंभ कुल का %',
                    dRunTot: 'चल कुल',
                    dRunTotPct: '% कुल'
                },
                formats: {
                    n0: 'पूर्णांक (n0)',
                    n2: 'दशमलव (n2)',
                    c: 'मुद्रा (c)',
                    p0: 'प्रतिशत (p0)',
                    p2: 'प्रतिशत (p2)',
                    n2c: 'हजारों (n2,)',
                    n2cc: 'लाखों (n2,,,)',
                    n2ccc: 'अरबों (n2,)',
                    d: 'दिनांक (d)',
                    MMMMddyyyy: 'महीने के दिन के वर्ष (MMMM dd, yyyy)',
                    dMyy: 'दिन महीने साल (d/M/yy)',
                    ddMyy: 'दिन महीने साल (dd/M/yy)',
                    dMyyyy: 'दिन महीने साल (dd/M/yyyy)',
                    MMMyyyy: 'माह वर्ष (MMM yyyy)',
                    MMMMyyyy: 'माह वर्ष (MMMM yyyy)',
                    yyyyQq: 'वर्ष तिमाही (yyyy "Q"q)',
                    FYEEEEQU: 'वित्तीय वर्ष तिमाही (\'FY\'EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'महायोग',
                subTotal: 'उप-योग'
            },
            PivotPanel: {
                fields: 'रिपोर्ट करने के लिए जोड़ने के लिए फ़ील्ड्स का चयन करें:',
                drag: 'नीचे दिए गए क्षेत्रों के बीच फ़ील्ड्स खींचें:',
                filters: 'फ़िल्टर',
                cols: 'स्तंभ',
                rows: 'पंक्तियाँ',
                vals: 'मान',
                defer: 'अद्यतन रोकें',
                update: 'अद्यतन'
            },
            _ListContextMenu: {
                up: 'ऊपर ले जाएँ',
                down: 'नीचे ले जाएँ',
                first: 'प्रारंभ पर ले जाएँ',
                last: 'अंत करने के लिए ले जाएँ',
                filter: 'रिपोर्ट फ़िल्टर तक ले जाएँ',
                rows: 'पंक्ति लेबल्स तक ले जाएँ',
                cols: 'स्तंभ लेबल्स तक ले जाएँ',
                vals: 'मानों तक ले जाएँ',
                remove: 'फ़ील्ड निकालें',
                edit: 'फ़ील्ड सेटिंग…',
                detail: 'विवरण दिखाएँ…'
            },
            PivotChart: {
                by: 'द्वारा',
                and: 'and'
            },
            DetailDialog: {
                header: 'विस्तार से देखें:',
                ok: 'ठीक',
                items: '{cnt:n0} आइटम',
                item: '{cnt} आइटम',
                row: 'पंक्ति',
                col: 'COLUMN'
            }
        },
        Viewer: {
            cancel: 'रद्द करें',
            ok: 'ठीक',
            bottom: 'नीचे:',
            top: 'ऊपर:',
            right: 'अधिकार:',
            left: 'बाएँ:',
            margins: 'हाशिए (इंच)',
            orientation: '方向:',
            paperKind: 'कागज प्रकार:',
            pageSetup: 'पृष्ठ सेटअप',
            landscape: 'लैंडस्केप',
            portrait: 'पोर्ट्रेट',
            pageNumber: 'पृष्ठ क्रमांक',
            zoomFactor: 'ज़ूम के कारक',
            paginated: 'लेआउट मुद्रित करें',
            print: 'मुद्रण',
            search: 'खोज',
            matchCase: 'केस मिलाएँ',
            wholeWord: 'केवल पूरे शब्द मिलाएँ',
            searchResults: 'खोज परिणाम',
            previousPage: 'पिछला पृष्ठ',
            nextPage: 'अगला पृष्ठ',
            firstPage: 'प्रथम पृष्ठ',
            lastPage: 'अंतिम पृष्ठ',
            backwardHistory: 'पश्चगामी',
            forwardHistory: 'अग्रेषित करें',
            pageCount: 'पृष्ठ गणना',
            selectTool: 'उपकरण का चयन करें',
            moveTool: 'उपकरण ले जाएँ',
            continuousMode: 'सतत पृष्ठ दृश्य',
            singleMode: 'एकल पृष्ठ दृश्य',
            wholePage: 'फिट पूरे पृष्ठ',
            pageWidth: 'पृष्ठ चौड़ाई पर फ़िट',
            zoomOut: 'ज़ूम आउट करें',
            zoomIn: 'ज़ूम इन करें',
            rubberbandTool: 'चयन द्वारा ज़ूम करें',
            magnifierTool: 'आवर्धक',
            rotatePage: 'पेज घुमाएँ',
            rotateDocument: 'दस्तावेज़ घुमाएं',
            exports: 'निर्यात करें',
            fullScreen: 'फ़ुल स्क्रीन',
            exitFullScreen: 'पूर्ण स्क्रीन से बाहर निकलें',
            hamburgerMenu: 'उपकरण',
            showSearchBar: 'खोज पट् टी दिखाएँ',
            viewMenu: 'लेआउट विकल्प',
            searchOptions: 'खोज विकल्प',
            matchCaseMenuItem: 'केस मिलाएँ',
            wholeWordMenuItem: 'पूरे शब्द मिलाएँ',
            thumbnails: 'पृष्ठ थंबनेल',
            outlines: 'दस्तावेज़ मैप',
            loading: 'लोड हो रहा है…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'वेब संग्रह (MHTML)',
            htmlExportName: 'HTML दस्तावेज़',
            rtfExportName: 'RTF दस्तावेज़',
            metafileExportName: 'संपीड़ित मेटाफ़ाइलें',
            csvExportName: 'CSV',
            tiffExportName: 'Tiff छवियाँ',
            bmpExportName: 'BMP छवियों',
            emfExportName: 'एनहांस्ड मेटाफ़ाइल',
            gifExportName: 'GIF छवियाँ',
            jpgExportName: 'JPEG छवियों',
            jpegExportName: 'JPEG छवियों',
            pngExportName: 'PNG छवियों',
            abstractMethodException: 'यह एक अमूर्त विधि है, कृपया इसे लागू।',
            cannotRenderPageNoViewPage: 'पृष्ठ दस्तावेज़ स्रोत के बिना और सारे पेज रेंडर नहीं कर सकता।',
            cannotRenderPageNoDoc: 'पृष्ठ दस्तावेज़ स्रोत के बिना और सारे पेज रेंडर नहीं कर सकता।',
            exportFormat: 'निर्यात स्वरूप:',
            exportOptionTitle: 'निर्यात विकल्प',
            documentRestrictionsGroup: 'दस्तावेज़ प्रतिबंध',
            passwordSecurityGroup: 'पासवर्ड सुरक्षा',
            outputRangeGroup: 'आउटपुट श्रेणी',
            documentInfoGroup: 'दस्तावेज़ जानकारी',
            generalGroup: 'सामान्य',
            docInfoTitle: 'शीर्षक',
            docInfoAuthor: 'लेखक',
            docInfoManager: 'प्रबंधक',
            docInfoOperator: 'ऑपरेटर',
            docInfoCompany: 'कंपनी',
            docInfoSubject: 'subject|विषय',
            docInfoComment: 'टिप्पणी करें',
            docInfoCreator: 'निर्माता',
            docInfoProducer: 'निर्माता',
            docInfoCreationTime: 'निर्माण समय',
            docInfoRevisionTime: 'संशोधन समय',
            docInfoKeywords: 'कीवर्ड्स',
            embedFonts: 'ट्रू टाइप फ़ॉन्ट एम्बेड करें',
            pdfACompatible: 'PDF/A संगत (स्तर 2B)',
            useCompression: 'संपीड़न का उपयोग करें',
            useOutlines: 'रूपरेखा उत्पन्न',
            allowCopyContent: 'सामग्री की प्रतिलिपि बनाने या निकासी की अनुमति दें',
            allowEditAnnotations: 'एनोटेशन का संपादन की अनुमति दें',
            allowEditContent: 'सामग्री संपादन की अनुमति दें',
            allowPrint: 'मुद्रण की अनुमति',
            ownerPassword: 'अनुमति (स्वामी) पासवर्ड:',
            userPassword: 'दस्तावेज़ खोलें (उपयोगकर्ता) पासवर्ड:',
            encryptionType: 'एन्क्रिप्शन स्तर:',
            paged: 'पेज्ड',
            showNavigator: 'नेविगेटर दिखाएँ',
            navigatorPosition: 'नेविगेटर स्थिति',
            singleFile: 'एकल फ़ाइल',
            tolerance: 'पाठ सीमा (अंक) का पता लगाने, जब सहिष्णुता:',
            pictureLayer: 'उपयोग अलग चित्र परत',
            metafileType: 'मेटाफ़ाइल प्रकार:',
            monochrome: 'मोनोक्रोम',
            resolution: 'रिज़ॉल्यूशन:',
            outputRange: 'पृष्ठ श्रेणी:',
            outputRangeInverted: 'उल्टे',
            showZoomBar: 'ज़ूम पट्टी',
            searchPrev: 'पिछली खोज',
            searchNext: 'अगली खोज',
            checkMark: '\u2713',
            exportOk: 'निर्यात…',
            cannotSearch: 'खोज को दस्तावेज़ स्रोत निर्दिष्ट करने की आवश्यकता है',
            parameters: 'पैरामीटर',
            requiringParameters: 'कृपया इनपुट पैरामीटर्स।',
            nullParameterError: 'मान नल नहीं हो सकते.',
            invalidParameterError: 'अमान्य इनपुट।',
            parameterNoneItemsSelected: '(कोई नहीं)',
            parameterAllItemsSelected: '(सभी)',
            parameterSelectAllItemText: '(सभी का चयन करें)',
            selectParameterValue: '(मान का चयन करें)',
            apply: 'लागू करें',
            errorOccured: 'कोई त्रुटि हो गई है.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

