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
 * Wijmo culture file: th (Thai)
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
            name: 'th',
            displayName: 'Thai',
            numberFormat: {
                '.': '.',
                ',': ',',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '฿', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
                daysAbbr: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                monthsAbbr: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['พ.ศ.'],
                patterns: {
                    d: 'd/M/yyyy', D: 'd MMMM yyyy',
                    f: 'd MMMM yyyy H:mm', F: 'd MMMM yyyy H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd/M/yyyy H:mm', G: 'd/M/yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
                fiscalYearOffsets: [-3, -3]
            }
        },
        Licensing: {
            cls: 'ปิด',
            ctc: 'กรุณาติดต่อ GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>',
            dmn: 'ใบอนุญาต Wijmo ในโปรแกรมประยุกต์นี้ไม่ถูกต้องสำหรับโดเมนปัจจุบัน โดเมนสิทธิ์การใช้งานคือ <b>{licDomain}</b>; <b>{domain}</b>เป็นโดเมนปัจจุบัน',
            evl: 'Wijmo การประเมินรุ่น ({version})',
            exp: 'ใบอนุญาต Wijmo ในโปรแกรมประยุกต์นี้ได้หมดอายุ วันหมดอายุสิทธิ์การใช้งานเป็น <b>{expDate:d}</b>',
            hdr: 'อนุญาตให้ใช้สิทธิของ Wijmo',
            lic: 'ใบอนุญาต Wijmo ในโปรแกรมประยุกต์นี้ไม่ถูกต้อง',
            mss: 'ไม่มีการตั้งค่าสิทธิ์การใช้งาน Wijmo ในโปรแกรมประยุกต์นี้',
            prd: 'ใบอนุญาต Wijmo ในโปรแกรมประยุกต์นี้ไม่ถูกต้องสำหรับตัวควบคุม <b>{control}</b>',
            ver: 'ใบอนุญาต Wijmo ในโปรแกรมประยุกต์นี้ไม่ถูกต้องสำหรับรุ่นที่ใช้ รุ่นใบอนุญาตคือ <b>{licVer}</b>รุ่นผลิตภัณฑ์เป็น <b>{version}</b>'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} รายการที่เลือก',
            selectAll: 'เลือกทั้งหมด'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} รายการ)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'แก้ไขตัวกรองสำหรับคอลัมน์',
            ascending: '\u2191 เรียงขึ้น',
            descending: '\u2193 เรียงลง',
            apply: 'ใช้',
            cancel: 'ยกเลิก',
            clear: 'ล้าง',
            conditions: 'กรองตามเงื่อนไข',
            values: 'กรองตามค่า',
            // value filter
            search: 'ค้นหา',
            selectAll: 'เลือกทั้งหมด',
            null: '(ไม่มี)',
            // condition filter
            header: 'แสดงรายการที่มีค่า',
            and: 'และ',
            or: 'หรือ',
            stringOperators: [
                { name: '(ไม่ได้ตั้งค่า)', op: null },
                { name: 'เท่ากับ', op: 0 },
                { name: 'ไม่เท่ากับ', op: 1 },
                { name: 'ขึ้นต้นด้วย', op: 6 },
                { name: 'ลงท้ายด้วย', op: 7 },
                { name: 'มี', op: 8 },
                { name: 'ไม่มี', op: 9 }
            ],
            numberOperators: [
                { name: '(ไม่ได้ตั้งค่า)', op: null },
                { name: 'เท่ากับ', op: 0 },
                { name: 'ไม่เท่ากับ', op: 1 },
                { name: 'มากกว่า', op: 2 },
                { name: 'มากกว่าหรือเท่ากับ', op: 3 },
                { name: 'น้อยกว่า', op: 4 },
                { name: 'น้อยกว่าหรือเท่ากับ', op: 5 }
            ],
            dateOperators: [
                { name: '(ไม่ได้ตั้งค่า)', op: null },
                { name: 'เท่ากับ', op: 0 },
                { name: 'มาก่อน', op: 4 },
                { name: 'มาหลัง', op: 2 }
            ],
            booleanOperators: [
                { name: '(ไม่ได้ตั้งค่า)', op: null },
                { name: 'เท่ากับ', op: 0 },
                { name: 'ไม่เท่ากับ', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'ตั้งค่าเขตข้อมูล:',
                header: 'หัวข้อ:',
                summary: 'สรุป:',
                showAs: 'แสดงเป็น:',
                weighBy: 'มีน้ำหนักโดย:',
                sort: 'เรียงลำดับ:',
                filter: 'ตัวกรอง:',
                format: 'รูปแบบ:',
                sample: 'ตัวอย่าง:',
                edit: 'แก้ไข…',
                clear: 'ล้าง',
                ok: 'ตกลง',
                cancel: 'ยกเลิก',
                none: '(ไม่มี)',
                sorts: {
                    asc: 'จากน้อยไปหามาก',
                    desc: 'จากมากไปหาน้อย'
                },
                aggs: {
                    sum: 'ผลรวม',
                    cnt: 'จำนวน',
                    avg: 'ค่าเฉลี่ย',
                    max: 'แม็กซ์',
                    min: 'นาที',
                    rng: 'ช่วง',
                    std: 'ส่วนเบี่ยงเบนมาตรฐาน',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'แรก',
                    last: 'สุดท้าย'
                },
                calcs: {
                    noCalc: 'ไม่มีการคำนวณ',
                    dRow: 'ความแตกต่างจากแถวก่อนหน้านี้',
                    dRowPct: '%ความแตกต่างจากแถวก่อนหน้านี้',
                    dCol: 'ความแตกต่างจากคอลัมน์ก่อนหน้า',
                    dColPct: '%ความแตกต่างจากคอลัมน์ก่อนหน้า',
                    dPctGrand: '%ของยอดรวมทั้งหมด',
                    dPctRow: '%ของผลรวมแถว',
                    dPctCol: '%ของผลรวมคอลัมน์',
                    dRunTot: 'ทำงานทั้งหมด',
                    dRunTotPct: 'ทำงานรวม%'
                },
                formats: {
                    n0: 'จำนวนเต็ม (n0)',
                    n2: 'ลอย (n2)',
                    c: 'สกุลเงิน (c)',
                    p0: 'เปอร์เซ็นต์ (p0)',
                    p2: 'เปอร์เซ็นต์ (p2)',
                    n2c: 'พัน (n2,)',
                    n2cc: 'ล้าน (n2,,)',
                    n2ccc: 'พันล้าน (n2,,,)',
                    d: 'วัน (d)',
                    MMMMddyyyy: 'วันเดือนปี (MMMM dd, yyyy)',
                    dMyy: 'วันเดือนปี (d/M/yy)',
                    ddMyy: 'วันเดือนปี (dd/M/yy)',
                    dMyyyy: 'วันเดือนปี (dd/M/yyyy)',
                    MMMyyyy: 'เดือนปี (MMM yyyy)',
                    MMMMyyyy: 'เดือนปี (MMMM yyyy)',
                    yyyyQq: 'ไตรมาสของปี (yyyy "Q"q)',
                    FYEEEEQU: 'ไตรมาสปี ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'ผลรวมทั้งหมด',
                subTotal: 'ผลรวมย่อย'
            },
            PivotPanel: {
                fields: 'เลือกเขตข้อมูลการเพิ่มรายงาน:',
                drag: 'ลากเขตข้อมูลไปมาระหว่างพื้นที่ด้านล่าง:',
                filters: 'ตัวกรอง',
                cols: 'คอลัมน์',
                rows: 'แถว',
                vals: 'ค่า',
                defer: 'เลื่อนการปรับปรุง',
                update: 'ปรับปรุง'
            },
            _ListContextMenu: {
                up: 'ย้ายขึ้น',
                down: 'ย้ายลง',
                first: 'ย้ายไปจุดเริ่มต้น',
                last: 'ย้ายไปจุดสุดท้าย',
                filter: 'ย้ายไปยังตัวกรองรายงาน',
                rows: 'ย้ายไปยังป้ายชื่อแถว',
                cols: 'ย้ายไปยังป้ายชื่อคอลัมน์',
                vals: 'ย้ายไปยังค่า',
                remove: 'เอาเขตข้อมูลออก',
                edit: 'การตั้งค่าเขตข้อมูล…',
                detail: 'แสดงรายละเอียด…'
            },
            PivotChart: {
                by: 'by',
                and: 'และ'
            },
            DetailDialog: {
                header: 'ดูรายละเอียด:',
                ok: 'ตกลง',
                items: 'สินค้า {cnt:n0}',
                item: 'สินค้า {cnt}',
                row: 'แถว',
                col: 'คอลัมน์'
            }
        },
        Viewer: {
            cancel: 'ยกเลิก',
            ok: 'ตกลง',
            bottom: 'ล่าง:',
            top: 'บน:',
            right: 'ขวา:',
            left: 'ซ้าย:',
            margins: 'ระยะขอบ (นิ้ว)',
            orientation: 'การวางแนว:',
            paperKind: 'ชนิดกระดาษ:',
            pageSetup: 'ตั้งค่าหน้ากระดาษ',
            landscape: 'แนวนอน',
            portrait: 'แนวตั้ง',
            pageNumber: 'หมายเลขหน้า',
            zoomFactor: 'การซูมระดับ',
            paginated: 'เค้าโครงเหมือนพิมพ์',
            print: 'พิมพ์',
            search: 'ค้นหา',
            matchCase: 'ตรงตามตัวพิมพ์ใหญ่-เล็ก',
            wholeWord: 'ตรงกันทั้งคำเท่านั้น',
            searchResults: 'ผลลัพธ์การค้นหา',
            previousPage: 'หน้าก่อน',
            nextPage: 'หน้าถัดไป',
            firstPage: 'หน้าแรก',
            lastPage: 'หน้าสุดท้าย',
            backwardHistory: 'กลับหลัง',
            forwardHistory: 'ไปข้างหน้า',
            pageCount: 'จำนวนหน้า',
            selectTool: 'เลือกเครื่องมือ',
            moveTool: 'ย้ายเครื่องมือ',
            continuousMode: 'ดูหน้าอย่างต่อเนื่อง',
            singleMode: 'มองหน้าเดียว',
            wholePage: 'หน้าทั้งหมดพอดี',
            pageWidth: 'พอดีหน้ากว้าง',
            zoomOut: 'ย่อ',
            zoomIn: 'ขยาย',
            rubberbandTool: 'ซูมตามการเลือก',
            magnifierTool: 'แว่นขยาย',
            rotatePage: 'หมุนหน้า',
            rotateDocument: 'หมุนเอกสาร',
            exports: 'ส่งออก',
            fullScreen: 'เต็มหน้าจอ',
            exitFullScreen: 'ออกจากโหมดเต็มหน้าจอ',
            hamburgerMenu: 'เครื่องมือ',
            showSearchBar: 'แสดงแถบค้นหา',
            viewMenu: 'ตัวเลือกเค้าโครง',
            searchOptions: 'ตัวเลือกการค้นหา',
            matchCaseMenuItem: 'ตรงตามตัวพิมพ์ใหญ่-เล็ก',
            wholeWordMenuItem: 'ตรงกันทั้งคำ',
            thumbnails: 'รูปขนาดย่อของหน้า',
            outlines: 'ผังเอกสาร',
            loading: 'กำลังโหลด…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'แฟ้มเก็บถาวรเว็บ (MHTML)',
            htmlExportName: 'เอกสาร HTML',
            rtfExportName: 'เอกสาร RTF',
            metafileExportName: 'บีบอัดแฟ้ม metafile',
            csvExportName: 'CSV',
            tiffExportName: 'รูปภาพ tiff',
            bmpExportName: 'ภาพ BMP',
            emfExportName: 'ขั้นสูง metafile',
            gifExportName: 'ภาพ GIF',
            jpgExportName: 'ภาพ JPEG',
            jpegExportName: 'ภาพ JPEG',
            pngExportName: 'รูปแบบ PNG',
            abstractMethodException: 'นี้เป็นวิธีการนามธรรม โปรดใช้',
            cannotRenderPageNoViewPage: 'ไม่สามารถแสดงหน้า โดยไม่มีเอกสารแหล่งที่มาและมุมมองหน้า',
            cannotRenderPageNoDoc: 'ไม่สามารถแสดงหน้า โดยไม่มีเอกสารแหล่งที่มาและมุมมองหน้า',
            exportFormat: 'รูปแบบการส่งออก:',
            exportOptionTitle: 'ตัวเลือกการส่งออก',
            documentRestrictionsGroup: 'ข้อจำกัดของเอกสาร',
            passwordSecurityGroup: 'ความปลอดภัยของรหัสผ่าน',
            outputRangeGroup: 'ช่วงการแสดงผล',
            documentInfoGroup: 'เอกสารข้อมูล',
            generalGroup: 'ทั่วไป',
            docInfoTitle: 'ชื่อเรื่อง',
            docInfoAuthor: 'ผู้เขียน',
            docInfoManager: 'ผู้จัดการ',
            docInfoOperator: 'ตัวดำเนินการ',
            docInfoCompany: 'บริษัท',
            docInfoSubject: 'ชื่อเรื่อง',
            docInfoComment: 'Comment',
            docInfoCreator: 'ผู้สร้าง',
            docInfoProducer: 'Producer',
            docInfoCreationTime: 'เวลาที่สร้าง',
            docInfoRevisionTime: 'เวลา revision',
            docInfoKeywords: 'คีย์เวิร์ด',
            embedFonts: 'ฝังแบบอักษร TrueType',
            pdfACompatible: 'PDF/A เข้ากันได้ (ระดับที่ 2B)',
            useCompression: 'ใช้การรวมรายการ',
            useOutlines: 'สร้างเค้าร่าง',
            allowCopyContent: 'อนุญาตให้คัดลอกเนื้อหาหรือสกัด',
            allowEditAnnotations: 'อนุญาตให้แก้ไขข้อมูลกำกับ',
            allowEditContent: 'อนุญาตให้แก้ไขเนื้อหา',
            allowPrint: 'อนุญาตการพิมพ์',
            ownerPassword: 'รหัสผ่านที่อนุญาต (เจ้าของ):',
            userPassword: 'เอกสารรหัสผ่านเปิด (ผู้ใช้):',
            encryptionType: 'ระดับการเข้ารหัส:',
            paged: 'ใช้เพจ',
            showNavigator: 'แสดงนำ',
            navigatorPosition: 'ตำแหน่ง Navigator',
            singleFile: 'แฟ้มเดี่ยว',
            tolerance: 'ความอดทนเมื่อตรวจจับขอบเขตข้อความ (จุด):',
            pictureLayer: 'ใช้รูปภาพแยกชั้น',
            metafileType: 'Metafile ชนิด:',
            monochrome: 'ขาวดำ',
            resolution: 'ความละเอียด:',
            outputRange: 'ช่วงหน้ากระดาษ:',
            outputRangeInverted: 'คว่ำ',
            showZoomBar: 'แถบซูม',
            searchPrev: 'ค้นหาก่อนหน้านี้',
            searchNext: 'ค้นหาถัดไป',
            checkMark: '\u2713',
            exportOk: 'ส่งออก…',
            cannotSearch: 'การค้นหาต้องการระบุแหล่งที่มาของเอกสาร',
            parameters: 'พารามิเตอร์',
            requiringParameters: 'โปรดป้อนพารามิเตอร์',
            nullParameterError: 'ค่าต้องไม่เป็น Null',
            invalidParameterError: 'ป้อนข้อมูลไม่ถูกต้อง',
            parameterNoneItemsSelected: '(ไม่มี)',
            parameterAllItemsSelected: '(ทั้งหมด)',
            parameterSelectAllItemText: '(เลือกทั้งหมด)',
            selectParameterValue: '(เลือกค่า)',
            apply: 'ใช้',
            errorOccured: 'มีข้อผิดพลาดเกิดขึ้น'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

