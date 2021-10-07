// userChrome.css/userContent.cssを反映
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",true);

// 消えたUI 密度コンパクト復活
user_pref("browser.compactmode.show",true);

// ホームページと新しいウインドウ
user_pref("browser.startup.homepage","https://www.google.co.jp/");

// 最後のタブを閉じてもFirefoxを終了させない
user_pref("browser.tabs.closeWindowWithLastTab",false);

// 複数のタブを閉じる時に確認しない
user_pref("browser.tabs.warnOnClose",false);

// ブックマークを新しいタブで開く
user_pref("browser.tabs.loadBookmarksInTabs",true);

// アドレスバークリックで出る履歴を非表示
user_pref("browser.urlbar.suggest.history",false);

// アドレスバークリックで出るブックマーク非表示
user_pref("browser.urlbar.suggest.bookmark",false);

// アドレスバークリックで出るショートカット非表示
user_pref("browser.urlbar.suggest.topsites",false);

// 既定のブラウザか確認しない
user_pref("browser.shell.checkDefaultBrowser",false);

// 右クリックで画像の情報を表示を復活
user_pref("browser.menu.showViewImageInfo",true);

// ポップアップをブロックするとき、このメッセージを表示しない
user_pref("privacy.popups.showBrowserMessage",false);

// アドレスバーに検索候補を表示しない
user_pref("browser.urlbar.suggest.searches",false);

// 検索候補を使用しない
user_pref("browser.search.suggest.enabled",false);

// トラッキング拒否機能を有効にする
user_pref("privacy.donottrackheader.enabled",true);

// 位置情報へのアクセスの要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.geo",2);

// カメラへのアクセスの要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.camera",2);

// マイクへのアクセスの要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.microphone",2);

// 通知の許可の要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.desktop-notification",2);

// 自動再生
// 0: 許可, 1: 音声ブロック, 5: 音声と動画をブロック
user_pref("media.autoplay.default",5);

// VR デバイスへのアクセスの要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.xr",2);

// 日付、時刻、数値、寸法の書式に、OS の”日本語(日本)”の設定を使う
user_pref("intl.regional_prefs.use_os_locales",true);

// 自動スペルチェック機能を使用しない
user_pref("layout.spellcheckDefault",0);

// ファイルごとに保存先を指定する
user_pref("browser.download.useDownloadDir",false);

// 自動スクロールを使用しない
user_pref("general.autoScroll",false);

// 必要であればタッチキーボードを表示する を無効
user_pref("ui.osk.enabled",false);

// おすすめの拡張機能を紹介する を無効
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",false);

// おすすめの機能を紹介する を無効
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",false);

// ページをPocketに保存 を無効
user_pref("extensions.pocket.enabled",false);

// Firefox Home コンテンツを全て無効にする
user_pref("browser.newtabpage.activity-stream.showSearch",false);                                 // ウェブ検索
user_pref("browser.newtabpage.activity-stream.feeds.topsites",false);                             // ショートカット
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",false);                      // 広告ショートカット
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights",false);                   // 最近のアクティビティ
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",false);          // 訪れたページ
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",false);        // ブックマーク
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads",false);        // 最近のダウンロード
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",false);           // Pocketに保存されたページ
user_pref("browser.newtabpage.activity-stream.feeds.snippets",false);                             // スニペット

// 音量調整で出てくる左上のポップアップ非表示
user_pref("media.hardwaremediakeys.enabled",false);

// 位置情報の送信を無効
user_pref("geo.enabled",false);
