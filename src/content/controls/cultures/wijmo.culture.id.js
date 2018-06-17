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
 * Wijmo culture file: id (Indonesian)
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
            name: 'id',
            displayName: 'Indonesian',
            numberFormat: {
                '.': ',',
                ',': '.',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 0, symbol: 'Rp', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': '.',
                firstDay: 0,
                days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                daysAbbr: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                monthsAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['M'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd, dd MMMM yyyy',
                    f: 'dddd, dd MMMM yyyy HH.mm', F: 'dddd, dd MMMM yyyy HH.mm.ss',
                    t: 'HH.mm', T: 'HH.mm.ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH.mm', G: 'dd/MM/yyyy HH.mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        Licensing: {
            cls: 'TUTUP',
            ctc: 'Hubungi GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Lisensi Wijmo dalam aplikasi ini ini tidak berlaku untuk domain saat ini. Domain lisensi  <b>{licDomain}</b>; domain saat ini adalah <b>{domain}</b>.',
            evl: 'Wijmo evaluasi ({version})',
            exp: 'Lisensi Wijmo dalam aplikasi ini telah kedaluwarsa. Tanggal kadaluarsa lisensi adalah <b>{expDate:d}</b>.',
            hdr: 'Lisensi Wijmo',
            lic: 'Lisensi Wijmo dalam aplikasi ini tidak valid.',
            mss: 'Lisensi Wijmo dalam aplikasi ini tidak diatur.',
            prd: 'Lisensi Wijmo dalam aplikasi ini ini tidak berlaku untuk kontrol <b>{control}</b>  .',
            ver: 'Lisensi Wijmo dalam aplikasi ini ini tidak berlaku untuk versi digunakan. Versi lisensi <b>{licVer}</b>; versi produk adalah  <b>{version}</b>.'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} item yang dipilih',
            selectAll: 'Pilih Semua'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}:  <b> {value} </b>  ({count:n0} item)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: 'Filter Editor untuk kolom',
            ascending: '\u2191 Menaik',
            descending: '\u2193 Menurun',
            apply: 'Terapkan',
            cancel: 'Batal',
            clear: 'Bersihkan',
            conditions: 'Filter berdasarkan Kondisi',
            values: 'Filter berdasarkan Nilai',
            // value filter
            search: 'Cari',
            selectAll: 'Pilih Semua',
            null: '(tidak ada)',
            // condition filter
            header: 'Tampilkan item dengan nilai',
            and: 'Dan',
            or: 'Atau',
            stringOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Dimulai dengan', op: 6 },
                { name: 'Diakhiri dengan', op: 7 },
                { name: 'Berisi', op: 8 },
                { name: 'Tidak berisi', op: 9 }
            ],
            numberOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Besar dari', op: 2 },
                { name: 'Besar dari atau sama dengan', op: 3 },
                { name: 'Kurang dari', op: 4 },
                { name: 'Kurang dari atau sama dengan', op: 5 }
            ],
            dateOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'sebelum', op: 4 },
                { name: 'Setelah', op: 2 }
            ],
            booleanOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Pengaturan bidang:',
                header: 'Header:',
                summary: 'Ringkasan:',
                showAs: 'Tampilkan sebagai:',
                weighBy: 'Menimbang oleh:',
                sort: 'Urutkan:',
                filter: 'Filter:',
                format: 'Format:',
                sample: 'Contoh:',
                edit: 'Mengedit…',
                clear: 'Bersihkan',
                ok: 'OK',
                cancel: 'Batal',
                none: '(tidak ada)',
                sorts: {
                    asc: 'Naik',
                    desc: 'Turun'
                },
                aggs: {
                    sum: 'Jumlah',
                    cnt: 'Hitung',
                    avg: 'Rata-Rata',
                    max: 'Maks',
                    min: 'Min',
                    rng: 'Rentang',
                    std: 'StdDev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Pertama',
                    last: 'Terakhir'
                },
                calcs: {
                    noCalc: 'Tidak ada Perhitungan',
                    dRow: 'Perbedaan dari baris sebelumnya',
                    dRowPct: '% Perbedaan dari baris sebelumnya',
                    dCol: 'Perbedaan dari kolom sebelumnya',
                    dColPct: '% Perbedaan dari kolom sebelumnya',
                    dPctGrand: '% dari grand total',
                    dPctRow: '% dari total baris',
                    dPctCol: '% dari total kolom',
                    dRunTot: 'Menjalankan total',
                    dRunTotPct: 'menjalankan total %'
                },
                formats: {
                    n0: 'Bulat (n0)',
                    n2: 'Desimal (n2)',
                    c: 'Mata uang (c)',
                    p0: 'Persentase (p0)',
                    p2: 'Persentase (p2)',
                    n2c: 'Ribuan (n2,)',
                    n2cc: 'Jutaan (n2,,)',
                    n2ccc: 'Miliaran (n2,,,)',
                    d: 'Tanggal (d)',
                    MMMMddyyyy: 'Bulan hari tahun (MMMM dd, yyyy)',
                    dMyy: 'Hari bulan tahun (d/M/yy)',
                    ddMyy: 'Hari bulan tahun (dd/M/yy)',
                    dMyyyy: 'Hari bulan tahun (dd/M/yyyy)',
                    MMMyyyy: 'Bulan tahun (MMM yyyy)',
                    MMMMyyyy: 'Bulan tahun (MMMM yyyy)',
                    yyyyQq: 'Kuartal tahun (yyyy "Q"q)',
                    FYEEEEQU: 'Kuartal fiskal tahun ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Total Keseluruhan',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Memilih bidang untuk menambahkan ke laporan:',
                drag: 'Seret bidang antara area di bawah:',
                filters: 'Filter',
                cols: 'Kolom',
                rows: 'Baris',
                vals: 'Nilai',
                defer: 'Menunda update',
                update: 'Perbarui'
            },
            _ListContextMenu: {
                up: 'Pindah ke Atas',
                down: 'Pindah ke Bawah',
                first: 'Pindahkan ke Awal',
                last: 'Pindah ke Akhir',
                filter: 'Pindahkan ke Filter Laporan',
                rows: 'Pindahkan ke Label Baris',
                cols: 'Pindahkan ke Label Kolom',
                vals: 'Pindahkan ke Nilai',
                remove: 'Hapus Bidang',
                edit: 'Setelan Bidang…',
                detail: 'Tampilkan Detail…'
            },
            PivotChart: {
                by: 'oleh',
                and: 'dan'
            },
            DetailDialog: {
                header: 'Tampilan detail:',
                ok: 'OK',
                items: '{cnt:n0} item',
                item: '{cnt} item',
                row: 'Baris',
                col: 'Kolom'
            }
        },
        Viewer: {
            cancel: 'Batal',
            ok: 'OK',
            bottom: 'Bawah:',
            top: 'Paling atas:',
            right: 'Kanan:',
            left: 'Kiri:',
            margins: 'Margin (inci)',
            orientation: 'Orientasi:',
            paperKind: 'Jenis kertas:',
            pageSetup: 'Penyetelan Halaman',
            landscape: 'Lanskap',
            portrait: 'Potret',
            pageNumber: 'Nomor Halaman',
            zoomFactor: 'Faktor zoom',
            paginated: 'Tata letak cetak',
            print: 'Cetak',
            search: 'Cari',
            matchCase: 'Cocokkan huruf besar/kecil',
            wholeWord: 'Cocok keseluruhan kata',
            searchResults: 'Hasil Pencarian',
            previousPage: 'Halaman Sebelumnya',
            nextPage: 'Halaman Berikutnya',
            firstPage: 'Halaman Pertama',
            lastPage: 'Halaman Terakhir',
            backwardHistory: 'Mundur',
            forwardHistory: 'Teruskan',
            pageCount: 'Hitung Halaman',
            selectTool: 'Pilih Alat',
            moveTool: 'Memindahkan alat',
            continuousMode: 'Terus-menerus tampilan halaman',
            singleMode: 'Tampilan Halaman tunggal',
            wholePage: 'Cocok seluruh halaman',
            pageWidth: 'Sesuai lebar halaman',
            zoomOut: 'Perkecil',
            zoomIn: 'Perbesar',
            rubberbandTool: 'Zoom oleh Seleksi',
            magnifierTool: 'Kaca pembesar',
            rotatePage: 'Putar Halaman',
            rotateDocument: 'Putar Dokumen',
            exports: 'Ekspor',
            fullScreen: 'Layar penuh',
            exitFullScreen: 'Keluar dari layar penuh',
            hamburgerMenu: 'Alat',
            showSearchBar: 'Bar pencarian Tampilkan',
            viewMenu: 'Opsi Tata Letak',
            searchOptions: 'Opsi Pencarian',
            matchCaseMenuItem: 'Cocokkan huruf',
            wholeWordMenuItem: 'Cocokkan dengan seluruh kata',
            thumbnails: 'Halaman thumbnail',
            outlines: 'Peta Dokumen',
            loading: 'Memuat…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML Word',
            xlsxExportName: 'Open XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Web Arsip (MHTML)',
            htmlExportName: 'Dokumen HTML',
            rtfExportName: 'RTF dokumen',
            metafileExportName: 'Terkompresi metafiles',
            csvExportName: 'CSV',
            tiffExportName: 'Gambar TIFF',
            bmpExportName: 'Gambar BMP',
            emfExportName: 'Enhanced metafile',
            gifExportName: 'Gambar GIF',
            jpgExportName: 'Gambar JPEG',
            jpegExportName: 'Gambar JPEG',
            pngExportName: 'Gambar PNG',
            abstractMethodException: 'Ini adalah metode yang abstrak, harap menerapkannya.',
            cannotRenderPageNoViewPage: 'Tidak dapat membuat halaman tanpa dokumen sumber dan pemandangan halaman.',
            cannotRenderPageNoDoc: 'Tidak dapat membuat halaman tanpa dokumen sumber dan pemandangan halaman.',
            exportFormat: 'Format ekspor:',
            exportOptionTitle: 'Ekspor opsi',
            documentRestrictionsGroup: 'Pembatasan dokumen',
            passwordSecurityGroup: 'Password keamanan',
            outputRangeGroup: 'Berbagai output',
            documentInfoGroup: 'Dokumen info',
            generalGroup: 'Umum',
            docInfoTitle: 'Gelar',
            docInfoAuthor: 'Penulis',
            docInfoManager: 'Manajer',
            docInfoOperator: 'Operator',
            docInfoCompany: 'Perusahaan',
            docInfoSubject: 'Topik',
            docInfoComment: 'Komentar',
            docInfoCreator: 'Pembuat',
            docInfoProducer: 'Produser',
            docInfoCreationTime: 'Waktu penciptaan',
            docInfoRevisionTime: 'Revisi waktu',
            docInfoKeywords: 'Kata kunci',
            embedFonts: 'Menanamkan font tipe Asli',
            pdfACompatible: 'PDF A kompatibel (tingkat 2B)',
            useCompression: 'Menggunakan kompresi',
            useOutlines: 'Menghasilkan garis',
            allowCopyContent: 'Memungkinkan menyalin konten atau ekstraksi',
            allowEditAnnotations: 'Memungkinkan mengedit anotasi',
            allowEditContent: 'Memungkinkan mengedit konten',
            allowPrint: 'Memungkinkan pencetakan',
            ownerPassword: 'Sandi izin (pemilik):',
            userPassword: 'Dokumen terbuka (user) sandi:',
            encryptionType: 'Tingkat enkripsi:',
            paged: 'Tersimpan di halaman',
            showNavigator: 'Navigator Tampilkan',
            navigatorPosition: 'Posisi Navigator',
            singleFile: 'File tunggal',
            tolerance: 'Toleransi ketika mendeteksi teks batas (poin):',
            pictureLayer: 'Gunakan gambar terpisah lapisan',
            metafileType: 'Metafile jenis:',
            monochrome: 'Monokrom',
            resolution: 'Resolusi:',
            outputRange: 'Rentang Halaman:',
            outputRangeInverted: 'Terbalik',
            showZoomBar: 'Zoom Bar',
            searchPrev: 'Cari sebelumnya',
            searchNext: 'Pencarian selanjutnya',
            checkMark: '\u2713',
            exportOk: 'Ekspor…',
            cannotSearch: 'Pencarian memerlukan sumber dokumen yang akan ditentukan.',
            parameters: 'Parameter',
            requiringParameters: 'Silahkan masukan parameter.',
            nullParameterError: 'Nilai tidak boleh null.',
            invalidParameterError: 'Valid masukan.',
            parameterNoneItemsSelected: '(tidak ada)',
            parameterAllItemsSelected: '(semua)',
            parameterSelectAllItemText: '(Pilih Semua)',
            selectParameterValue: '(pilih nilai)',
            apply: 'Terapkan',
            errorOccured: 'Sebuah kesalahan telah terjadi.'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

