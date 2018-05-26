(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('枣庄', {"type":"FeatureCollection","features":[{"type":"Feature","id":"370403","properties":{"name":"薛城区","cp":[117.263164,34.795062],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CCB@@C@AE@B@@@B@@AA@@@@@@DLABCDEFAD@BCBGFEB@@GCC@A@EFC@EEA@K@C@E@I@A@@DBBDBB@BDABEB@ACC@@G@@BDB@B@DABG@IAA@A@CAMCCAAFAB@@CBABMF@LADC@A@ABBF@BAHCBEBC@CAGCABAB@HEFA@GFAB@B@B@@@BA@@@ABA@AB@DABCB@BC@C@@B@DCDA@CFKJA@@BKDIBCCCGIFQ@BFR^J@B@DBNJHJ@@DD@DBBBBCDABEB@@@@BFDAHHBBFF@@BBB@V@BBBD@@@@BDBDBBB@BD@HB@H@JA@@@FAHHBD@BBB@@@@@FBLBFBD@@N@B@@@@H@HB@@@@@@BD@DBFBBH@HAB@FCF@B@DBH@F@BBBBBDDDJEF@F@BBB@BBHJB@BBF@B@@@B@@@BBDDDD@BLF@BHBF@H@FAHCND@@DB@@@@@@D@D@F@DBF@HD@@@@D@DDDFDHJ@HBB@@@@@AA@CBA@AD@BAD@D@@@LBB@B@F@@@B@B@D@BBDBFFB@DDBBBBFBBBB@D@D@BABBF@@@BBB@BDB@@DBD@BB@@@F@JBL@@@D@@@BDFJBFBF@BBFBBDBDBD@DABAFCFK@AB@BA@@FIDE@A@G@E@A@@@CBCDE@@@@B@@AFK@A@@@@BA@AACECCEA@@@AACE@@ACAE@@@E@A@@@A@@@ABA@AFELKHCBABA@ABA@@AC@EA@@CAA@E@G@EAAKC@@@AA@@@@@QGCC@@@EAW@G@CAqC@A@GAE@AAA@CAAAAAEC@AA@A@@BADABADA@ABA@A@A@C@AA@@AAA@@@A@@@EHA@A@A@A@A@A@EAIEAACACACAA@CACAA@CCCGCEAA@C@EBG@EBK@@HAHAD@HAF@DA@ECK@C@CBKBAB@J@J@B@B@DABEDEBA@@HCCEAAAAECECA@@AAAAAACBCBA@ABC@@@AAACA@A@C@A@ABAB@DAB@DAB@BAB@BABABI@E@@@E@@@C@@@@@@@E@E@@@A@A@A@A@EBEAC@@@@AAAC@ACAECA@@A@A@ADG@ADG@C@A@AAACAEAMEIAA@ABEDABA@A@A@AAI@A@@@A@@@AD@FC@O@K@C@A@AG@@@AMA@B@BAPCHAD@@@@ABAB@@AF@DADCFCBCBK@ED@B@@@BFF@FA@ABCDABEFEFKBKB@@@BID@BDDHP@B@@@@@@@@BBB@A@B@@B@@@BBB@@@@BB@@CDEFCBADA@"],"encodeOffsets":[[120147,35534]]}},{"type":"Feature","id":"370402","properties":{"name":"市中区","cp":[117.556139,34.863554],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@E@A@CCE@M@EBOFGFABA@CACACCA@AFEDABC@A@Br@D@HBX@F@@DDRH@@@@B@@B@@LDBB@F@H@FBB@DB@@FBD@@AB@BABABGDKLEF@BAB@B@@@B@@@B@F@@BFBD@@DFBB@@B@DFFDBD@BAB@@@@@BEL@BA@@@@@CFAD@D@@@B@F@H@BCFEJ@@ABA@DBFBBBB@BF@BBBDBD@HDDDD@HDDBPFPBFCDABAD@BBDB@B@@BFDDB@L@DABAHELGD@HAD@DB@@HBLBB@D@HBLDHBF@JEBAHIHQBEFC@@FGB@B@@@B@PCB@HANCH@@@@@F@JBB@@@BBBLDNHH@BBNDDBBBBBBF@N@D@B@J@H@JDJDFDFD@@B@RLB@LFJDFDBA@CBABCDC@A@A@@ACCEECEEAA@A@ABCBE@AACAACC@@IAA@A@@@@@A@AA@@@@AACCCE@@@A@AAA@@@ABA@A@A@@@ABABABAB@B@BC@A@E@C@A@A@@DCB@@@DCHCB@@A@@@A@@@@@@@ABCBCFEBAHK@AHG@ABA@@DAFAF@FADADADCBADGBEDEDCBAHEFEBABABADAFAFAKKAACAUQCAC@A@ABADE@G@K@I@@@A@M@K@A@AGCBBBEBA@C@A@A@MDC@C@EAC@AAAEAEAK@CBCBC@CACGGCECBC@CFEDCBC@C@A@CACC@CAA@C@A@A@AECECEACCGIKKCCAAGE@@@@EEC@O@A@E@A@A@CBMHIH@B@F@H@BBDB@@B@BAF@@@BB@@@@@CBA@I@@@A@GA@@A@IBCBAFABABEBCAA@CAABC@MBIB@S@C@@IGIE@ACG@ACA@@CCS@EACBA@ED@@CE@AAA"],"encodeOffsets":[[120339,35610]]}},{"type":"Feature","id":"370405","properties":{"name":"台儿庄区","cp":[117.734414,34.56244],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AC@@OSAACGCAG@M@G@EBEBCD@@CDADGFGDEBA@E@E@CAEGGEE@MBCDG@C@IBEBg@BAEIA@E@@@AL@F@NEFCBI@E@A@GAE@A@@@@BKTINEHCDA@@@@@@@@@CFCDIDCBDFABC@IBABGFAB@BAH@H@BABABABIBABCBEBEBIHAF@\\@LA@OHCBEDKFIDCDPDLBHB@A@MLEH@L@DBD@D@L@D@@@@@D@JAJAPBL@D@F@BAHAJANCB@D@ZDJ@RDRBB@B@HBH@B@B@B@B@F@P@D@H@B@B@DBHDDBFBB@D@FBD@JBRB@@B@DAF@PEB@HAB@DAB@F@D@HBB@@@EBAD@B@@@@@B@BBF@F@BBDAFAFAB@@AHAHAN@B@F@@@N@@@BADANABABLFB@F@F@B@@@BB@@@@@B@@@F@D@BBF@@BD@B@BAB@FBBFBD@J@@P@PBHcBK@AD@BALDFB@DBTAF@F@NA@@@@N@L@D@FBHH@@DDFDFFJH@@@@@@BBDBD@HB@@H@B@\\@B@D@DDHFLEF@F@JBD@B@D@HC@@FADAHAD@FABAD@JAF@H@H@PBDC@CJGDA@@HEBA@IDE@ABA@CDKBC@CBC@@AOAG@IPARE@E@ABCBABMAIAEAIHEBAAMAGAE@CAGAE@A@K@A@AAEAC@CBEBE@C@A@C@C@CBC@C@A@A@C@ABABA@ABA@@@AAAAAACAA@@@@@@@A@@@@@@@ABA@@@@@A@@@@@@BABA@@@A@@@@@@A@@@@A@@@@@@@A@@@AA@@A@@B@@@@@BA@@@@BABA@@@AB@@@@A@@@@@A@@@@@A@@A@@@@A@@@@@@@@@A@@@AB@@EAA@@@@@A@@B@@A@@@A@@BA@@@@B@@@@@@@@A@@@@@A@@B@@A@@@@A@@@A@E@A@@BA@A@A@@@A@@AA@@@@@A@KHCDGDCB@@EDIBGDaHCBA@SFQDGB@@@@@@@@@@@@C@GBMBE@G@E@A@@@A@@@A@GBG@C@CBC@@EAQAKCEGKAA@A@@CEGGGCAAECACAC@CA@KICAGEC@@BA@CFABA@A@@@A@AC@AECCCEC@@EAE@CDABA@K@G@CC@AGQ"],"encodeOffsets":[[120427,35307]]}},{"type":"Feature","id":"370404","properties":{"name":"峄城区","cp":[117.590816,34.773263],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@YCC@A@MDIBGBABE@C@K@OAIBIBC@@@@@C@K@C@C@CAK@G@KF@N@BJBAL@@@@@D@B@D@H@B@@HFBD@BD@FB@@@F@BBBBBBJ@B@BBBB@B@B@BAFCBAB@JBNFFBDBBB@B@B@DCH@BCH@B@B@BB@FDDB@BBDBB@@@@BDAF@F@B@B@B@B@@@F@F@@@@@@@D@@@F@@@FAJABABA@ABA@CBA@CBA@AB@B@B@D@BDBBB@B@@AD@BABADBDBBBB@BB@FDFDBBBBDFGD@@ABCFAFCBA@A@I@I@A@ABAL@D@DDL@FCBE@GBC@GBGB@@AL@FAH@F@DBBDFDHDDB@DBDBB@DBDBDBBBJFFBB@B@B@B@B@B@FG@@B@@@B@BB@@BBD@B@B@B@BAB@BCBABC@AB@B@@BFDBBBBDBB@BBF@HBB@D@B@D@BAFCBEB@DDDBDBB@BAHEPEFAN@F@DDB@F@B@@@BB@BDF@@FCB@DAFBT@DD@@DB@BDH@BJFJH@@@D@TJANAD@BADBB@DBFABABABEDAJAB@@@HBB@@@J@B@DA@@@@A@@A@@BE@A@AA@AC@A@G@E@AJGNGDAB@B@F@B@P@D@FF@@@@HFBBDDLLHJDDFBFDFD@B@B@B@DBB@DDDDBB@D@D@DAFCDED@DADFHHBD@DADAD@DBLBFBFBBD@FBD@D@NCB@B@D@B@FAAADABHB@L@N@B@@@J@L@H@F@BCBAB@D@DBVRDBBBLLHCFADAHANEDADAF@F@B@@ABG@@@CAEAC@C@C@CAGACAAAA@@EAKEA@ICGCAAAA@C@@@@@C@@BAH@DADA@A@CAC@@AA@C@CBEBAFCDCDAFC@@BADC@AB@FAB@JCJCD@FALADABCD@@BD@DC@ACI@@@A@ABC@A@A@@@AAA@@AGAEEGCG@A@GDCBA@A@A@@AA@AA@@E@ABADADADC@CAK@@CK@@AIAEAG@ADGAA@@AEAGEB@GA@A@AEA@GB@CC@C@AGE@@C@@MC@GNI@CMBBHMBQFOB@JBHBP@@AD@DADCL@DAB@BCF@JABGF@@CBIH@DCDOAG@G@E@IBC@ABEBC@GBCBEB@@GDC@A@C@IAE@E@KFGECCC@A@[@A@G@@@GAC@CAAA@@@@@@IGEEECCC@@GGEAC@K@M@@@@@MBE@E@SBCAA@CEBK@ABCL@dAAG@O@OI@C@EAAA@EBA@A@AAC@@AE@A@C@E@@@A@@@@AA@@A@E@E@A@KEBABABMBC@A@@@M@@@E@ABMBGBG@@BABEBEAC@A@EAE@A@A@@@@@ABCFA@@A@GAC@E@A@CBA@GBA@OFE@CBA@@@QAIAC@EAC@A@EACAGCCAA@A@G@C@O@E@A@A@A@A@G@GAA@A@QAQCI@"],"encodeOffsets":[[120306,35404]]}},{"type":"Feature","id":"370406","properties":{"name":"山亭区","cp":[117.461517,35.099528],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@OECAGCC@CCGCC@CAAA@AAEA@AAEACA@BELEDABCBC@CACAAAAE@AAEAEEIAC@@C@@@K@IAE@@@A@@AAC@CA@ACA@AA@@E@AAABC@C@A@AAEAAAAACCA@EECAAAC@A@A@@@E@A@A@KA@@C@C@ABC@@BAB@DBB@@@@A@GAI@BDCFILAD@@@BADAH@L@D@@BBBD@DBB@B@D@B@BBBDB@@D@LB@@@@@@J@D@FDBB@D@BDJ@@DV@BBHBFBJBB@@BBBD@BFFFDDBB@DB@@DD@@@DBFA@@BCBEBAB@@BFBB@@ABAF@D@F@@@BABBDABADCBA@@@A@@BE@CBADADA@@FB@B@AB@@@@CDCDAFEF@B@D@BA@@B@B@@CBA@A@ADAH@BABE@EAEAA@GAMAE@@@CAG@G@C@KAI@G@CBEFCDADABG@EBC@A@AAC@@@AACAAAC@@@C@A@CBC@EBCDIHCDAF@J@DBD@F@JAB@BCH@D@@@DABA@@@@@AB@BB@@B@@ABCDA@EBA@ABCBAB@@CB@B@@AB@@AB@F@B@B@BBDFD@B@BA@@@A@@@@@C@IA@B@HG@EBAB@@AD@DBD@@@BDH@BBB@@@@JBDA@@FADA@@H@D@D@@@D@F@@@DBBBD@DBB@D@BBBBDBBBD@BBB@FDDDBBJFDBBBD@RFFB@@HPI@IBAJ@@@D@@@BAD@@@BABA@EDKD@@A@IAA@C@A@C@@@A@A@I@@@@@A@@B@@@HB@B@@A@@@@B@B@BB@@BBA@@BB@@BB@@A@@BB@DB@BF@@BFB@BD@BAB@@B@BD@BBFHBDBFDLFDDHJBBBDBB@BADAL@B@B@FBFB@@F@B@BCJCFADAHAJADADAF@DAHAPDDBB@@BN@B@B@F@BABCBCDABAD@D@B@B@BD@@B@@FBDBBB@DBBB@DBD@D@BAB@B@HAB@FADAF@FAHAB@D@HDDBD@F@DAB@BAB@DAFAH@@@B@HAFAD@BCDCF@FAB@B@D@D@DABABADEBE@A@A@AAE@EBEBEDCFCFIFAF@AEBEFEHC@AFADAF@F@FA@CBABEBCLGBABA@C@CCCAEAA@C@ABAB@FAFAFAB@BAD@J@B@@@B@@@D@DCDAFAHAHIBADABGBCDCFENELGB@F@JAD@DBHBBBD@@O@EBG@CBABADADABC@@@C@ABAFEDELIDCH@FAB@DDDBBBJFJBB@@AD@DAH@B@B@DCBE@E@CBA@CBAB@BAFBB@BABCBIDE@EDCBCDAD@BABAHGDEDGDATQTQFCDAFCFAFEDCBCBCHUJEDCDADADAHEFAFAFADAF@FCFAFCLEH@DE@EAA@CACAC@C@@AG@EBE@@DAH@D@JBDBFA@@BCBABAD@B@BBB@B@ABB@B@@BA@@@D@B@BDB@FAFCBCDG@C@CAAAAIGAACAGCCAA@@@@AAC@G@K@A@E@CAE@CBG@A@@EEEGCI@@ECICKEA@QKA@@@ECECICICG@I@A@C@M@E@AAAAAACCAM@AGGCMAKAA@@A@IAE@@@@@G@MDGBA@ODA@@@A@A@EH@@EDAFGRGJABIFE@GAKCGAC@A@KAGA@@CAC@GBC@KHGFABCBK@A@CCAE@@@ACAAAC@ABCBEDOA"],"encodeOffsets":[[120329,35785]]}},{"type":"Feature","id":"370481","properties":{"name":"滕州市","cp":[117.165824,35.114155],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GGCBQDGHGB@@IBGBID@@EBCDIFABCBABGF@@CBAB@D@@EBBD@A@BB@@@B@@B@@D@B@@@BDCBA@A@EBC@A@A@CBEBADAF@@@F@B@B@B@B@DA@@B@D@H@BAD@D@D@FAFAF@NADED@BOC@JA@@BA@@B@@BFA@@@@BF@@D@D@BA@AF@@@JC@@D@@@@@DC@@HC@BBCBCA@AQA@DE@C@@CG@@CEAGIA@@BA@@E@@C@@BG@@DC@@BC@@BE@@AAAC@@AC@@AC@@BGAMAC@@D@@@BB@@FB@@B@BE@@DC@@FA@EDEBE@CBG@IBKAA@A@EAKAEAI@E@A@A@@@@CGAAC@@SA@DC@@B@BBF@@@L@@IHABCFCDAFABADABE@C@M@ADAHD@ADCB@BCHBFDFDDDFDDBB@B@BDD@D@@BD@@@@BJC@@DA@@DC@@BD@@J@BC@AB@DA@@BE@@AA@@B@@@FA@@DED@BA@A@A@@BCDEDEDCDCBCDEDIFEBCDCBCBABABAHADAA@A@@CFAB@D@DQCADE@@@MCAJLBFBDBFBNDGLABAACHAAGPHBCF@JEBGCUCS@ONKLQPCF@D@DCFGDABAB@@@DAFAD@FADAD@B@LADCBC@CBCB@@ABABAJCDDRBDAFCDCB@BH@HBHDDBBBD@FBDBD@DADCBABADABADABADA@AFCBADCD@HBHBDDDFDFBFBDBD@DDFHDPHJAFCDCBABADADCBCDCDADADAF@DBB@@@B@B@FBHBFCFCDCDEFAJ@BB@@B@DBFDDBF@B@B@@@F@B@D@DB@@BBDDBD@B@B@B@BB@FBBBD@FBFBFDFB@@FDBBD@BBD@HDBB@@DDDD@@DFBB@@BBDDBBDBBBDBDBB@FDFBHDJBDBL@F@D@F@DBD@HBDBFBFBF@D@LAHAFAHCDADAFAH@F@F@DBFHBBF@FFD@B@DBHBD@B@J@H@N@F@D@DBH@DBB@DBDBFDFBFDFBJFF@J@H@FBB@FBDBDBDD@DBDDF@BBBDDFBDBDDF@HB@@@@B@D@DAF@F@F@@@H@LAF@F@N@LAFAH@@F@DAD@B@@CDADADAFAF@D@@AFBDFBF@BBB@BBDBB@BBD@D@D@@@HDDDHFB@B@HAFAFAHAJSBOBG@CBEBCBCBIBGBCDEDI@A@A@EA@AE@E@A@ABKBC@AAAACAAGICCKEECCAGAAE@AACA@@@BA@AACA@AE@@AEA@@CAA@@@BA@@AA@@AB@AA@@AAA@A@@@@@@BA@A@@G@@@AB@@@@@J@B@B@@@D@B@D@B@JBB@@@LCFCB@BA@A@@BC@A@@@C@@BIJAJ@GO@@EAQEC@AACAIEAACCECA@AAC@AACAAAAAC@A@CAC@AACA@@E@C@@@C@C@G@@@CBEB@@CBIA@@@@AA@ACG@A@@AC@CBC@@BAFAH@@G@AJBD@@@@@B@@@B@@A@AECAC@A@A@A@EBA@@BA@@@ADA@@BADABAB@FAB@DCBA@@@AA@@ABA@@@@B@BA@C@@@CDG@ABA@I@EAC@C@IBEDCJGDCFAD@DAB@D@@@D@BBDBBB@@D@BBB@D@FAH@BABCDCFEDAH@J@LBD@H@H@DB@@F@NBHBB@FBFBF@BA@ABGBCB@B@DA@@@A@AB@@A@C@AFEBEDCDC@@@@BAA@A@@EB@BCBCDAF@@AB@@@B@DABCBAACBA@A@@@E@CBEBA@@AAAE@@BAFADA@AB@AE@C@@CC@@CAA@CAECEE@AACAA@@AAAIAEAG@ACU@@CI@A@CAAECC@I@@@@@@@KAC@@@CAAA@A@A@C@AAA@CACAA@@@C@KBGBC@A@@BCJKDEACCGCECCC@@@@@GCE@CAE@C@C@@@@@@@CA@@MCGDEBG@E@GA@AKE@ACCCCAA@@A@@@A@E@AAA@GIAAA@AAE@E@IFCCACAAAAE@G@CAA@E@EDA@GBG@AAAE@CAC@@@@@@GAG@@@@@@A@MC@EAKAEA@@@@A@AAC@GABG@E@@IBG@A@@GACA@AAACAC@@@@ACAAU@A@AA@@EEAA"],"encodeOffsets":[[120009,35662]]}}],"UTF8Encoding":true});}));