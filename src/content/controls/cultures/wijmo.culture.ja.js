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
 * Wijmo culture file: ja (Japanese)
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
            name: 'ja',
            displayName: 'Japanese',
            numberFormat: {
                '.': '.',
                ',': ',',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 0, symbol: '¥', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
                daysAbbr: ['日', '月', '火', '水', '木', '金', '土'],
                months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                monthsAbbr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                am: ['午前', '午前'],
                pm: ['午後', '午後'],
                eras: [
                    { name: '平成', symbol: 'H', start: new Date(1989, 0, 8) },
                    { name: '昭和', symbol: 'S', start: new Date(1926, 11, 25) },
                    { name: '大正', symbol: 'T', start: new Date(1912, 6, 30) },
                    { name: '明治', symbol: 'M', start: new Date(1868, 8, 8) }
                ],
                patterns: {
                    d: 'yyyy/MM/dd', D: 'yyyy"年"M"月"d"日"',
                    f: 'yyyy"年"M"月"d"日" H:mm', F: 'yyyy"年"M"月"d"日" H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'M"月"d"日"', M: 'M"月"d"日"',
                    y: 'yyyy"年"M"月"', Y: 'yyyy"年"M"月"',
                    g: 'yyyy/MM/dd H:mm', G: 'yyyy/MM/dd H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
                fiscalYearOffsets: [3, 0]
            }
        },
        Licensing: {
            cls: '閉じる',
            ctc: '弊社までお問い合わせください: <a href="mailto:sales@grapecity.com">sales@grapecity.com</a>.',
            dmn: 'アプリケーションで使用しているWijmoのライセンスは現在のドメインで無効です。このライセンスは<b>{licDomain}</b>に割り当てられています。現在のドメインは <b>{domain}</b>です。',
            evl: 'Wijmo トライアル版({version})',
            exp: 'アプリケーションで使用しているWijmoのライセンス有効期限が終了しました。有効期限日は<b>{expDate:d}</b>です。',
            hdr: 'Wijmoライセンス',
            lic: 'アプリケーションで使用しているWijmoのライセンスは無効です。',
            mss: 'アプリケーションで使用しているWijmoのライセンスが設定されていません。',
            prd: 'アプリケーションで使用しているWijmoのライセンスは<b>{control}</b>コントロールで無効です。',
            ver: 'アプリケーションで使用しているWijmoのライセンスはご利用中のバージョンで無効です。このライセンスのバージョンは<b>{licVer}</b>ですが、ご利用中のバージョンは<b>{version}</b>です。'
        },
        MultiSelect: {
            itemsSelected: '{count:n0} 個の項目を選択中',
            selectAll: 'すべて選択'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value}</b> ({count:n0} 項目)'
        },
        FlexGridFilter: {
            // filter
            ariaLabel: '列のフィルター エディター',
            ascending: '\u2191 昇順',
            descending: '\u2193 降順',
            apply: '適用',
            cancel: 'キャンセル',
            clear: 'クリア',
            conditions: '条件フィルタ',
            values: '値フィルタ',
            // value filter
            search: '検索',
            selectAll: 'すべて選択',
            null: '(なし)',
            // condition filter
            header: '抽出条件の指定',
            and: 'AND',
            or: 'OR',
            stringOperators: [
                { name: '(設定しない)', op: null },
                { name: '指定の値に等しい', op: 0 },
                { name: '指定の値に等しくない', op: 1 },
                { name: '指定の値で始まる', op: 6 },
                { name: '指定の値で終わる', op: 7 },
                { name: '指定の値を含む', op: 8 },
                { name: '指定の値を含まない', op: 9 }
            ],
            numberOperators: [
                { name: '(設定しない)', op: null },
                { name: '指定の値に等しい', op: 0 },
                { name: '指定の値に等しくない', op: 1 },
                { name: '指定の値より大きい', op: 2 },
                { name: '指定の値以上', op: 3 },
                { name: '指定の値より小さい', op: 4 },
                { name: '指定の値以下', op: 5 }
            ],
            dateOperators: [
                { name: '(設定しない)', op: null },
                { name: '指定の値に等しい', op: 0 },
                { name: '指定の値より前', op: 4 },
                { name: '指定の値より後', op: 2 }
            ],
            booleanOperators: [
                { name: '(設定しない)', op: null },
                { name: '指定の値に等しい', op: 0 },
                { name: '指定の値に等しくない', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'フィールドの設定:',
                header: 'ヘッダー:',
                summary: '集計方法:',
                showAs: '計算の種類:',
                weighBy: '基準フィールド:',
                sort: '並べ替え:',
                filter: 'フィルター:',
                format: '表示形式:',
                sample: 'サンプル:',
                edit: '編集…',
                clear: 'クリア',
                ok: 'OK',
                cancel: 'キャンセル',
                none: '(なし)',
                sorts: {
                    asc: '昇順',
                    desc: '降順'
                },
                aggs: {
                    sum: '合計',
                    cnt: '個数',
                    avg: '平均',
                    max: '最大値',
                    min: '最小値',
                    rng: '範囲',
                    std: '標準偏差',
                    var: '標本分散',
                    stdp: '標準偏差',
                    varp: '分散',
                    first: '第 1',
                    last: '最後'
                },
                calcs: {
                    noCalc: '計算なし',
                    dRow: '前の行との差分',
                    dRowPct: '前の行との差分の比率',
                    dCol: '前の列との差分',
                    dColPct: '前の列との差分の比率',
                    dPctGrand: '総合計の %',
                    dPctRow: '行の合計の %',
                    dPctCol: '列の合計の %',
                    dRunTot: '実行中の合計',
                    dRunTotPct: '積算合計の %'
                },
                formats: {
                    n0: '整数 (n0)',
                    n2: '小数 (n2)',
                    c: '通貨 (c)',
                    p0: 'パーセンテージ (p0)',
                    p2: 'パーセンテージ (p2)',
                    n2c: '千 (n2,)',
                    n2cc: '100万 (n2,,)',
                    n2ccc: '10億 (n2,,,)',
                    d: '日付 (d)',
                    MMMMddyyyy: '月 日 年 (MMMM dd, yyyy)',
                    dMyy: '日 月 年 (d/M/yy)',
                    ddMyy: '日 月 年 (dd/M/yy)',
                    dMyyyy: '日 月 年 (dd/M/yyyy)',
                    MMMyyyy: '月 年 (MMM yyyy)',
                    MMMMyyyy: '月 年 (MMMM yyyy)',
                    yyyyQq: '年 四半期 (yyyy "Q"q)',
                    FYEEEEQU: '会計年度 四半期 ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: '総計',
                subTotal: '集計'
            },
            PivotPanel: {
                fields: 'レポートに追加するフィールドを選択:',
                drag: '次のボックス間でフィールドをドラッグ:',
                filters: 'フィルター',
                cols: '列',
                rows: '行',
                vals: '値',
                defer: 'レイアウトの更新を保留',
                update: '更新'
            },
            _ListContextMenu: {
                up: '上へ移動',
                down: '下へ移動',
                first: '先頭へ移動',
                last: '末尾へ移動',
                filter: 'レポートフィルターに移動',
                rows: '行ラベルに移動',
                cols: '列ラベルに移動',
                vals: '値に移動',
                remove: 'フィールドの削除',
                edit: 'フィールドの設定…',
                detail: '詳細の表示…'
            },
            PivotChart: {
                by: ':',
                and: '/'
            },
            DetailDialog: {
                header: '詳細ビュー:',
                ok: 'OK',
                items: '{cnt:n0} 項目',
                item: '{cnt} 項目',
                row: '行',
                col: '列'
            }
        },
        Viewer: {
            cancel: 'キャンセル',
            ok: 'OK',
            bottom: '下:',
            top: '上:',
            right: '右:',
            left: '左:',
            margins: '余白 (インチ)',
            orientation: '向き:',
            paperKind: '用紙の種類:',
            pageSetup: 'ページ設定',
            landscape: '横',
            portrait: '縦',
            pageNumber: 'ページ番号',
            zoomFactor: 'ズーム要素',
            paginated: '印刷レイアウト',
            print: '印刷',
            search: '検索',
            matchCase: '大文字と小文字を区別する',
            wholeWord: '単語単位で探す',
            searchResults: '検索結果',
            previousPage: '前のページ',
            nextPage: '次のページ',
            firstPage: '最初のページ',
            lastPage: '最後のページ',
            backwardHistory: '前へ',
            forwardHistory: '進む',
            pageCount: 'ページ数',
            selectTool: 'ツールを選択します。',
            moveTool: '移動ツール',
            continuousMode: '連続ページ表示',
            singleMode: '1 つのページ ビュー',
            wholePage: 'ページ全体',
            pageWidth: 'ページ幅に合わせる',
            zoomOut: '縮小',
            zoomIn: '拡大',
            rubberbandTool: '選択によるズーム',
            magnifierTool: '拡大鏡',
            rotatePage: 'ページを回転',
            rotateDocument: 'ドキュメントを回転',
            exports: 'エクスポート',
            fullScreen: '全画面表示',
            exitFullScreen: '全画面表示の終了',
            hamburgerMenu: 'ツール',
            showSearchBar: '検索バーを表示する',
            viewMenu: 'レイアウト オプション',
            searchOptions: '検索オプション',
            matchCaseMenuItem: '大文字と小文字を区別する',
            wholeWordMenuItem: '一致する単語',
            thumbnails: 'ページのサムネイル',
            outlines: '見出しマップ',
            loading: '読み込んでいます…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML ワード',
            xlsxExportName: 'オープン XML Excel',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Web アーカイブ (MHTML)',
            htmlExportName: 'HTML ドキュメント',
            rtfExportName: 'Rtf 形式のドキュメント',
            metafileExportName: '圧縮されたメタファイル',
            csvExportName: 'CSV',
            tiffExportName: 'Tiff イメージ',
            bmpExportName: 'BMP 画像',
            emfExportName: '拡張メタファイル',
            gifExportName: 'GIF 画像',
            jpgExportName: 'JPEG 画像',
            jpegExportName: 'JPEG 画像',
            pngExportName: 'Png 形式の画像',
            abstractMethodException: 'これは、抽象メソッドは、それを実装してください。',
            cannotRenderPageNoViewPage: 'ドキュメント ソースなしページ、ビュー ページをレンダリングできません。',
            cannotRenderPageNoDoc: 'ドキュメント ソースなしページ、ビュー ページをレンダリングできません。',
            exportFormat: 'エクスポート形式:',
            exportOptionTitle: 'エクスポート オプション',
            documentRestrictionsGroup: 'ドキュメントの制限',
            passwordSecurityGroup: 'パスワードのセキュリティ',
            outputRangeGroup: '出力範囲',
            documentInfoGroup: 'ドキュメント情報',
            generalGroup: '概要',
            docInfoTitle: '表題',
            docInfoAuthor: '作成者',
            docInfoManager: '管理者',
            docInfoOperator: '演算子',
            docInfoCompany: '会社',
            docInfoSubject: '件名',
            docInfoComment: '備考',
            docInfoCreator: '作成者',
            docInfoProducer: 'プロデューサー',
            docInfoCreationTime: '作成時刻',
            docInfoRevisionTime: 'リビジョンの時間',
            docInfoKeywords: 'キーワード',
            embedFonts: 'TrueType フォントを埋め込む',
            pdfACompatible: 'PDF/A 互換性のある (レベル 2 b)',
            useCompression: '圧縮を使用します。',
            useOutlines: 'アウトラインを生成します。',
            allowCopyContent: 'コンテンツのコピーまたは抽出を許可します。',
            allowEditAnnotations: 'アノテーションの編集を許可します。',
            allowEditContent: 'コンテンツの編集を許可します。',
            allowPrint: '印刷を許可します。',
            ownerPassword: '権限 (所有者) のパスワード:',
            userPassword: 'ドキュメントを開く (ユーザー) パスワード:',
            encryptionType: '暗号化のレベル:',
            paged: 'ページ',
            showNavigator: 'ナビゲータの表示',
            navigatorPosition: 'ナビゲータの位置',
            singleFile: '1 つのファイル',
            tolerance: '許容範囲 (ポイント) のテキストの境界を検出するとき:',
            pictureLayer: '別々 の画像を使用して層',
            metafileType: 'メタファイルの種類:',
            monochrome: 'モノクロ',
            resolution: '解像度:',
            outputRange: 'ページ範囲:',
            outputRangeInverted: '反転',
            showZoomBar: 'ズームバー',
            searchPrev: '前を検索',
            searchNext: '次を検索',
            checkMark: '\u2713',
            exportOk: 'エクスポート.',
            cannotSearch: '検索するにはドキュメントソースを指定する必要があります。',
            parameters: 'パラメーター',
            requiringParameters: 'パラメーターを入力してください。',
            nullParameterError: '値を null にすることはできません。',
            invalidParameterError: '入力が無効です。',
            parameterNoneItemsSelected: '(下線なし)',
            parameterAllItemsSelected: '(すべて)',
            parameterSelectAllItemText: '(すべての選択)',
            selectParameterValue: '(値を選択)',
            apply: '適用',
            errorOccured: 'エラーが発生しました。'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

