(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('濮阳', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410902","properties":{"name":"华龙区","cp":[115.074151,35.777346],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AQICAGCMGGIFEDECAEACEEBAG@@EMEDA@AEICGBC@GYAIBK@CQGAA@@CAEAC@CAC@E@CB@@C@ABCBCBA@E@CBE@A@@BBDC@@DG@@DE@@D@BIB@DI@GBCBABA@EGAB@@FL@@B@B@@CB@@DADBF@DB@@H@FC@@D@B@FH@@F@@HF@@HBJAD@@BDL@@@@D@FFD@@FBFCB@DJB@D@B@BCB@DDDD@B@B@JBBB@B@@BB@DAHHB@@@DBD@@@BAHBDG@BHE@@FA@@DA@@FSC@D@J@@@FLA@@F@@@@BB@BBB@@BAB@B@@@@CDAA@D@H@@@DA@@@BB@BC@@DE@@BB@@@@B@@@D@@E@@BA@@DA@@@@@@FE@AAE@@DC@@B@@ECA@ADABBD@B@BA@@@@@@F@@@JC@@D@B@@@FABBD@BA@@BB@@BAB@BDA@B@@A@@BBBB@B@D@@AD@@A@@@@B@@@B@BDB@@BB@BFBB@@B@@@B@BBB@BB@@@@ABBFJ@@BA@@BBBD@@DB@D@@@BF@FBBFA@CH@DDD@@BF@@BFA@DB@EBB@@@HB@@D@@BF@@HBB@@B@@BA@BNBHC@BD@B@BDBD@@BBDA@@@HB@B@FEA@BB@@D@BC@@BA@@D@@A@@BEDA@G@AEE@@DB@@@AB@BC@@@BNBBBB@B@FCF@BB@F@@BA@@D@@A@C@@B@B@D@B@@B@@B@@HBBB@@B@@@@BL@@B@B@BB@@CB@@AD@B@@BB@@BB@@A@@@@@@BBB@@AB@@DB@@BB@@@@@B@B@@@BDBBB@BADCBAB@B@JAD@D@DADAB@BABAB@@@B@@@BBBBBBB@D@D@@@DADCD@D@DBHAB@DBD@@@BBBD@@DBH@F@F@D@B@B@@AB@BC@CBCBAD@F@JAF@H@B@D@D@B@@@@ABAB@B@BAA@AACACEACAE@@@ABAFC@AAG@A@U@@D@BBB@D@BB@@H@FA@AD@BBD@@AB@@@AA@AD@J@AAB@B@AE@@B@@@BF@@HE@BF@BDDAAEB@BF@@@CB@@ABBHAF@@@@JBF@DB@@@D@D@@AJ@@BDAD@@@VC@A@@@E@CB@B@TA@E@@AA@AB@AC@IJ@@@@@F@@AFA@BD@BHD@@DBFA@BDB@@BD@@AB@@@@@@BDA@@@@FA@@B@FA@B@@DAB@@@JAB@BAJ@@BD@B@DBADHDB@F@@B@@D@@AH@@@B@BA@@BBB@AEA@ACB@@AD@@@@B@BBBB@@BDA@BF@@@F@BDBA@@@@FCA@B@AGB@AKAAAA@A@AH@AAB@@CD@AC@ABAB@B@B@@@@BD@B@@B@BB@B@@@@@DBB@BBB@BB@ABD@@B@BD@@DABB@@BABB@A@@B@@AFA@C@CBADDAE@@AE@AA@A@@@@ACCACA@ACC@GIAAGEA@@@AB@A@DAAABAB@@@BACK@@@DA@E@A@A@@ACAAI@@@AABA@@@C@@C@@BA@AAE@@AA@@@A@ACA@@BC@@BABB@ABA@A@@G@AG@@A@AABA@C@@@AA@@A@@BA@@@@C@AC@@CC@@CA@@DCDA@@@@CA@AA@@@BA@@F@@A@AAADA@@CGA@B@@A@IA@@C@AAA@@@A@@DCB@@@BB@ABBD@DDDB@@DE@BBCB@@A@@B@BA@EC@@@@A@@D@AA@@BABCCE@AAC@ABE@C@@@ABC@EB@AEC@E@@OB@EMAAAB@@@F@@EA@A@@A@ACBCC@@CBAE@@C@@@CEE@CBBHC@ACA@@B@@AAA@BDOBCB@EGA@EE@BFI@@AB@@CB@@EXCBF@ADHDA@CD@AGAK@A@@G@AEAA@EA@C@IBA@@BA@AAA@C@I@ABBBCB@@E@AAA@AB@@A@@@E@@@@BC@@DA@@BEA@@@BAA@BAA@@A@A@C@ABC@@BE@@@AE@@A@@BAAA@@BC@@H@@@@A@BDA@@DA@AAAAC@@B@@CE@@DAAGA@C@AIC@@CA@A@@AQAAB@B@@@B@DA@C@A@C@AAAA@AAAE@@AA@A@@AE@@DCB@A@AA@@@@A@@@ACBAB@@@ECBAA@@BCGD@@A@@AAAB@HAH@@CB@AE@AH@@@@CB@@EEBAAC@A@@@C@@BC@@@A@CA@AAA@AB@@AD@D@@BF@BBD@ACB@@B@BB@ACD@@DF@@ANABA@@NA@@@@ACAAACBAAEA@BACGDCDKLIEO@@E@MIA@"],"encodeOffsets":[[117755,36516]]}},{"type":"Feature","id":"410922","properties":{"name":"清丰县","cp":[115.104389,35.88518],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AC@BAAA@AAA@CA@@@@A@A@@A@AA@C@@A@@A@A@A@AB@BBDC@@DA@BBG@@B@BBBBBBLA@BHA@B@ED@@@@ABACE@@@E@@ACB@AA@AA@A@A@@C@@BA@BDB@BFA@AA@@ABA@@@G@@BC@@@@AE@A@GCBCCAA@C@@AI@ABA@IB@@A@CB@@@AEBA@@@EB@@@@CB@A@@@@A@@BC@@AA@ACB@AE@CC@AGC@@AEB@BE@@@@@I@@JBDA@@BBB@@@FSBA@A@@D@F@@@BUD@@C@CB@AI@@BC@C@@@A@@CAE@I@@E@GBAA@BA@@D@@AEA@BFCBACE@@AGF@@AE@@A@@@BFA@A@BBI@C@@BBB@@A@@BC@AAC@@BEBG@@@AAC@A@AAC@@@@V@BBH@BEDAB@B@@BFBDDFDBBBB@ABA@A@AB@B@@A@C@C@A@G@E@IBE@C@ABAD@DADA@@BA@A@C@E@E@G@CA@@ACAA@@C@CAA@GBCAC@C@CDCB@@C@C@A@AAAAAA@@A@@@A@ABABA@CBCBC@C@IBA@A@ABCDAB@BAB@@BB@BB@@@@BBBAB@@DJD@@@BJA@@DF@@B@@@AB@BDB@@BB@BFA@@BA@@D@FA@@BB@BFD@BH@@A@@BB@DFD@@DB@@@BDC@BBABA@@@@DC@@@@B@@BFA@@B@@C@BBGBBD@FBFE@@B@BF@@D@B@@A@@@@B@@B@@FFB@B@@EB@@@BB@HABFDH@@DFAB@BB@BFA@@@@@BD@BC@@DFA@DC@@BF@@@@@AB@@B@@@@@DJA@@@BFAB@D@@@@@BA@@AA@@D@@@AA@@B@DC@@@BD@@CB@BAB@BB@DFEB@@B@BB@BBBB@@@@@BB@HA@@FA@BBAB@CA@@DA@@@@@BBBFC@AECC@BBBBF@@@B@@CGAAA@@A@BACAB@@@@CB@@AB@@B@B@BJA@@@CBB@BH@@@BBDD@@@@@DFBD@ABBAB@@B@FB@HBFA@@@@@A@@B@@UHEBBBA@GB@AA@CB@AA@DFODA@@@A@@@@AA@BBABAAC@@@E@@AC@ABAAEB@BGB@DC@BBBD@@A@A@AB@B@@A@BFA@AAIBB@F@D@BBBB@B@B@DBBBBB@DBB@BBBBBDBBD@B@D@@@B@B@B@BDBDBBB@B@D@B@F@BBB@BBB@B@BBB@@@BAB@BA@@@AB@B@DAD@B@B@B@BAD@H@D@B@B@BBB@DBDBDB@@HHDDDDFDB@B@BA@AHA@@B@@@BAA@B@AEB@@BBA@@DAB@B@CCJC@@@@DA@CBCBA@A@@@AAC@@@@HEAEBAGODAAAB@@@@@DABBD@@BC@BB@@BBD@@@DABDB@B@D@B@B@@BFA@HNCB@BE@@BFD@H@@AB@H@@EBA@A@@B@@A@AB@AC@@B@B@BFF@@DDABDJADF@@LABFH@@AD@@CB@@@@CD@AEHA@AC@AAFA@AH@AEDA@@@AF@@CD@@@EO@@DABB@AD@@@@@B@BDFJA@B@@@FFBA@BD@@BFDFBB@NA@@DF@@BDAB@@@@FAB@B@B@REBDBABE@@CEAA@@DAGK@@B@@ABA@AD@@AD@@AF@AI@@B@BBB@@BD@@CF@ACH@B@AK@AF@@@@DH@@@BDBA@AD@@BD@@FB@BDDABFF@@DFA@BB@@@BD@@LABA@CD@AEEC@@@AEBAAA@@CACA@AC@AF@@@@EB@@AA@AAB@@AC@@CA@@ED@@ABAAGAEHABFNA@ANA@C@@B@@AD@B@D@BFD@@@@BF@B@A@BH@@@@@BI@@BD@@BCB@HB@@B@@@BD@@DB@@B@@E@@A@@B@@AA@A@CBIBAB@BC@@BABE@LLBB@@@BB@BBB@ACLA@@A@@AB@B@B@B@@ADAB@@BF@@AF@ACD@BHF@AEA@@CB@BABDD@BFABBD@@D@@@@AF@@BFA@A@@BAJAAG@@AC@@@@ZEBBBABB@@@@B@@@ACBBDA@@BDDAB@@B@@@@D@@@BB@@BAB@@@@@LA@ANAB@@BB@@@BDA@@@BJ@B@@BBB@BDDBD@@DAB@DD@@@BHB@BDB@LA@@LC@@AED@BAAA@@@AA@@ADA@@B@BDFAD@@BD@AAB@BDF@BDJC@@JA@AD@FA@@B@ACD@@@F@AABA@BBBB@@AJAAA@AB@@DBABDFAF@JA@@@ABBB@DAB@@@B@@AH@@CF@ACB@D@@AD@B@@A@AA@EECCAI@@@G@AAAAAA@AAUB@@I@GACA@@A@AAAE@@@CA@AGCI@AAEEQ@GAA@@@A@ABADEDADA@@DCDCFG@CBC@AAO@@@CAC@@AU@GCGA@@GAIACCAAE@E@CA@A@@AWF@CG@@@AI@AHA@AB@AANAAI@CAG@CC@A@B@AIE@@@@@DEBC@@@AAAEK@ACKAAAKAE@O@GAG@@@@ECC@@AA@CG@CBAACCBAAABACC@@A@@CG@BACC@@A@@@A@@@@CBAAABA@ACC@@DA@@AA@@AGAI@BFA@@DB@BBA@BFA@BBA@@F@B@@@DA@@@AB@FC@@CC@@@@@A@@B@@@B@@@@MEAA@@@@BAA@A@@AAAAC@AC@@I@AA@@E@AC@AAC@@BE@AAC@@AA@@AC@@EC@@EA@A@@DA@ADA@@AI@@@EBBBAB@@AB@BC@@@C@@@CB@BABBDDD@B@@B@B@@BBF@@BFCCAB@D@DEB@BA@@@@BAAAB@@AACB@@ACA@"],"encodeOffsets":[[118000,36653]]}},{"type":"Feature","id":"410923","properties":{"name":"南乐县","cp":[115.204675,36.069476],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@C@@BA@@@@DMB@BMBAEGBBFBHAB@BC@@FB@@DD@@BA@BBB@@BA@@F@@E@@BBDB@BD@DB@BBFA@B@@FDBFC@@DABKB@@AC@@A@@AEB@CE@AECBACA@@EC@@AC@@BABAC@@G@@C@@E@@BBLA@G@BDE@@DC@@AA@AAA@@@BJE@@BC@@BC@@BAB@BA@@@HLCB@@BBDF@@AFABACQFA@A@A@EB@@@@BAAC@@CE@@MBA@EAEC@AC@@AABEE@@A@B@EIACA@@@@@C@@BAACB@@FP@@C@@DE@@B@@CBBFG@@BEBBBD@@BGBBFC@@D@@A@@DC@@BG@AEKB@@CEIBACCB@CE@AEA@A@@@BDA@@B@BA@@@@BAB@FG@A@@BG@C@AE@@AFA@MD@GEB@AA@A@C@A@A@ACCB@@C@AA@@AAD@@AC@AACB@@@@A@BBCBHPABBFGF@@@@BD@B@@@BABAD@DCB@@@@IDDDA@A@CB@@AB@AA@BFA@B@AB@@A@@@GB@BABA@A@DFFDBBLJBBHHHHHHDBFFDDDBFDB@@B@B@@@B@BBDABCJ@H@FBBBJDLBD@F@FADAH@FBFBDDDJJBFFDFFBBD@H@ZEDA^GH@DB@@BDBR@BBNBF@BDJDHFFHDJDHA@@N@H@H@D@JCB@DCB@FG@CAC@CBAFCNAHAHBBBD@B@H@BDBABB@@B@B@B@@BB@BFD@@D@@B@B@BA@FD@@FB@@@@@@BB@@BC@@FB@BBFB@C@A@@@B@@@AB@@@LB@AK@@AFB@AE@@@@@@A@@@A@@@AB@ACB@@BDA@@@BJ@FADAFCJEB@NC@@B@TG@APIDGFELOBGBABI@ABCDG@@JODAFIBAFCBAHCF@B@LCB@FAFCBE@IACCOCG@C@EBAFG@@DGFEDCJCLAJABBJDHBB@HC@@D@BAD@JDBBFBPHLH@@HHFLBHBPBH@BBDDBR@H@BBB@DFBFD@@@ADBB@@BDB@BDA@@B@@BBGFB@AB@@B@@@D@BH@@BDB@DJ@B@@D@@@A@@CA@@CDA@CB@@A@@@A@@ACFAA@CCAAAA@CDB@CB@@CF@@@DAFABBH@FDLNDDFBF@D@JAF@BBD@BD@F@@@F@LBLBBDBHB@@LABA@KBKBCDGB@FCF@FAJABO@A@K@CAM@@ACAA@@AC@A@A@@@A@CAA@AAA@AAA@@AC@EACACAC@A@AAAEEAC@A@C@@A@@CB@AGA@C@@ABA@A@AG@EB@AAAACAEAA@CB@@CF@@C@A@EGB@ECBAAA@BBC@AEC@@AC@@EGB@AAED@@EB@@CD@@D@@@@BB@ED@@@@A@A@C@C@@@A@A@A@A@@@A@C@CBA@AAA@CAA@@@C@C@A@A@C@C@@@A@C@A@A@@CCEAAAMAG@EAA@OCEAGEMGGCGCA@@BA@C@@BC@A@BDE@@DG@@BA@@@A@CBA@AA@B@@IBE@EBACAB@CA@@BBBIB@BA@AA@AABBBE@@@C@BDA@@@EBC@@BIB@@IDACE@ACA@BBC@@AC@EBACA@@@CB@BB@@B@@BBABC@BF@@KD@@KBA@ACA@AG@@C@@CBA@CC@CAACA@AA@@@AAI@@B@AC@@A@@AA@MB@BKB@@@@A@AB@@AA@@C@@@@@@AA@CBAC@@CBAABD@@A@@@@@AAABAAYF@@@@BD@@BHIBAB@@@BEB@AE@@B@@C@@@ACBAAEC@ACABA@@DB@BFE@AGC@BDE@@BE@@AA@CB@BA@A@A@A@@BB@@@KBBDA@AAA@@A@@AAKKF@BA@AD@@ABAJADAB@B@@BA@@@@BF@@@@AA@@CC@@A@@@AA@@GDA@AC@@AJ@@A@@@@AGB@A@E@@A@@C@AEC@"],"encodeOffsets":[[117987,36840]]}},{"type":"Feature","id":"410926","properties":{"name":"范县","cp":[115.504201,35.851906],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@EA@D@@@B@@@B@B@B@BC@A@C@E@E@@DF@F@@DBBB@B@B@@@FBHRNAA@BAAAA@@AAA@@@@ACAB@@@@@AC@@@A@@AAA@CD@@A@@@A@@@A@A@@@AB@@A@@A@@AA@@A@CC@"],["@@DADABBFHDFBBFDDBDBDDDBFDDBFBDDD@HFFDBBHF@@B@DDBFHJFJDF@BJNFHBBFHHFDFHF@@@BLJB@BB@@BBFDBBFBLFHDJFFBHD@@B@BBNDFDBBPHHDFDNBD@B@PDD@RDB@HBLB@BJBB@@@@@LHFDDBLHDDRLB@JHDBDBHBF@FBD@B@JBB@FBB@FAPA@@F@NAB@F@B@@ABA@@DAB@D@B@D@D@B@B@DDBB@@FH@DbQ@@L@@@@CC@@@@@H@@@A@@FB@@AHA@GB@@E@@DA@EA@@ADB@E@@@BB@@CB@@A@CB@ADDBBAABH@@@ADBB@AB@AB@@@@BAB@ABJB@AB@DGBIBA@@D@@AD@@AAA@A@CA@@BEA@BA@A@@AC@AEG@@AH@@AB@DA@@@CD@AIF@AC@@LA@EB@@E@@BF@@@E@@BFB@ACB@@DB@@C@@@CB@@@B@@@B@@CB@@@@A@@@C@@BD@@ACDAAA@@EFA@DC@@E@BDA@EKCE@AA@CG@@BBB@CA@A@@A@@AA@AE@@@@@FG@A@C@@@@AB@@@A@@@AEAAD@@@FGBFB@@BDAJ@CGZEB@@AFA@AH@@BHA@@AABA@AH@B@AICB@AAGEMOB@@ACAE@AD@AGCGC@QD@@AKAE@OA@O@@@@KDABG@C@A@ME@@@@A@EC@@A@A@OSAQAIAC@E@EAKAAAKCCAICOAG@KA@AA@C@@AC@AAIBG@K@G@SAC@AGAEAACAABGBOHEBA@IDA@A@AAEKCACAKDA@CBI@@@KBE@C@CC@AAGCAKBM@@@SKGCWQCEIIIKGIGIIKAEGOCIACAEKMACA@CGGIGC@@CCA@CEEC@@GECEEA@AGBAJQB@B@@@DE@@BA@@@CB@@IBA@BF@BB@@@ABA@DDCBD@DFC@@FA@@B@@@@@BA@@CA@@DA@@@@CI@@CCB@@@@@@C@@CA@@BA@@CA@@@CE@DA@AEA@@AE@@E@@@@@@AAAA@@@ACBE@A@@@@@BB@@A@BDCB@JDB@BA@@BA@@B@FB@@D@@@BA@@AC@@AA@@@@@@HD@@BB@@D@@@@B@@DB@@D@H@@@D@@@@@AA@@FA@@CA@@@@DEBBDA@@BA@@BC@G@@BA@@J@@@F@@DDBABBB@@BFAA@DA@BB@BA@B@@@CC@@@DABDJA@AB@BABAAADAAA@AB@BBB@AC@@BDDAACC@ACDA@@B@B@B@B@@D@@B@@B@BB@@@B@@BD@@BFA@@@DB@@BF@BH@BB@@BCBA@E@@BADE@BBA@AA@@@B@BAAA@@B@@@AC@@@A@@BA@@@C@A@A@EB@D@@ACCBAAA@@B@@A@A@A@BBC@AB@A@BABBBA@BDA@@BBJE@@DEBB@D@@BC@CB@H@BALB@@B@B@@BDCB@B@BBBBAD@@@@BE@@DBBFABHG@AEIB@@@@@BBBB@@BA@@BHABJD@@@@@C@BFC@@@D@@BC@@@D@@@CB@@@@D@@@@BB@BDAB@DC@@@@BC@@BC@@BC@@BAB@@E@@BA@AB@BPHBBABA@@@DFDCDDDALFAL@B@B"]],"encodeOffsets":[[[118271,36760]],[[118129,36641]]]}},{"type":"Feature","id":"410927","properties":{"name":"台前县","cp":[115.871906,35.96939],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DDBBDB@@B@BBB@@@@@FBB@B@@@DBB@B@BB@@@@B@B@BBB@HBB@B@DAFAB@B@D@BAB@BAB@B@F@@@H@@@@@@@DBF@FBB@JBB@D@B@D@B@FBB@D@DBFBFBB@@D@L@@HFFDJJG@A@@@ADA@BBBBBBBBDBDBB@@BBBBBB@B@@BB@BBBB@@BBBBD@BBHBJBFBBB@@B@B@DBFAB@@@D@@@FAB@J@@@H@D@JGBADAB@@AHAH@F@F@DDB@@BDBBBB@BFBFBBFDHBDBHDRFJDF@FAD@NEFCD@D@B@B@HDBBB@VRHDRFHDPDHBDB@@XBJBHBF@HDBBDBFD@@VNDBHDBBFDJJHHB@BBJLFHFF@@NPBBHHBDFHLDJ@RD^DPBBACA@A@@BC@@BCAAE@@ADAAABAAK@A@AA@A@@@ACC@@AA@BE@A@GIA@ABE@@@@C@BE@CB@BE@@@AB@@CI@AE@@@AC@@AA@@CA@@@@AR@D@CCGCE@GB@BEB@CB@@C@@@C@@DCB@@G@CAAB@AEA@@A@AAA@A@A@C@@@A@@AA@AACA@@A@AODEBAA@@@ACKCEAGAEAC@CCIAE@C@GCW@@@ICM@@AAAAA@@@A@AAA@C@A@G@ABOBIBSDGBC@KB@@E@K@K@A@A@EAAAG@AAA@@@MAOCC@A@CAG@OCG@KACAMAE@GAA@IABC@@CA@GC@@A@C@C@A@ECB@EDG@ABCBC@EACAAAAAAAAA@CA@@@@E@CAG@C@G@@@CAC@EAEAC@A@CACCAC@AB@B@@IH@RA@C@CBA@CFG@@GCCA@@@A@G@G@E@GEB@EABA@@IA@@DA@@I@GAOGABT@JE@@GG@@EACA@AOEC@HC@WAI@@@@MM@C@UFCM@@E@@CK@ABC@@FC@C@E@GBMBA@@BOBA@ODCEEGEGAIW@BI@AC@U@K@@AA@G@@BABBB@@GB@AG@@BEB@BA@YFDHI@CB@AA@AEEH@@C@BBBF@@B@@@A@@B@@D@B@H@@E@@@@BFB@@BB@@@@BDBA@AA@@DHB@@BDFFLB@ACF@@@CDB@FE@@BBCBBD@@AC@@@D@@@B@@A@@DA@@@A@@@A@@D@@@DA@@CA@BDA@AE@@@F@@AE@@@FA@@FKB@@BDE@BJC@@D@@CBA@@BG@@BH@BFD@@BB@B@@AFB@AB@@D@BBB@BC@@BC@@@ABAJCHA@@BIABAA@AB@@@@BAA@@BAABC@@G@BAABCABCA@@D@BA@@DA@@A@@@FCA@BB@@FCB@@@FA@@HGB@BA@@EB@@@G@@@@@D@@D@@K@@@aRBBFDDBB@FBFDD@BBPBDBDB@BBBFBBDB@@D@DBD@D@BBDDFDD@@ABB@B@"],"encodeOffsets":[[118469,36825]]}},{"type":"Feature","id":"410928","properties":{"name":"濮阳县","cp":[115.029078,35.712193],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@BB@@@AB@BDD@AGDAF@DF@@D@@@BFDA@@DDDA@B@BB@B@@FE@@@A@BBNB@FPA@@@FFD@BFAD@BA@@D@F@BAD@BBF@DDBA@AB@@B@CB@@@@@FDB@@A@AB@@@DAAAF@@CA@CC@CACBAA@@A@@DA@CB@@@B@BBD@@@JBB@@@@AHB@DB@BCBBB@@@@EB@@A@@BBB@@D@@B@DC@CB@@DD@@DD@@B@D@@B@@AB@@@BB@@D@B@BA@B@BH@@B@HB@B@BAA@BA@AD@@AB@BDB@@@B@@BF@BBB@@AD@@@@D@@ABBB@@J@BBBD@@@B@B@FCB@@L@BD@A@@BABABB@C@BBA@@B@HFBBHJD@BDB@BA@ADA@@D@@@D@@ABA@@BAAAFA@@J@@BB@BCB@@CB@B@@FD@@FD@@BB@@BD@BBF@@AD@BBD@@B@FB@@B@JD@@BBDBB@BB@B@AB@@@@BBNF@@@@@A@@@AB@@@@@D@@DD@@EBA@@B@@C@@@A@EB@AAB@AEB@AAA@@CB@AEJ@HB@BB@@BB@@CD@BDB@BABBDA@@@@@B@@@BD@BD@ADH@@@BD@BDBABBDABDAB@DDHB@@BD@FDBCNGBAB@LGDAHEHC@A@ABKKECBCCCDCE@@B@BAAAOG@ABAB@@AF@@@BA@AD@@AD@@AD@@A@@D@@CBAACA@@A@@C@@@@@DA@@C@@@D@@AC@@@D@AED@@@@@C@AIGB@AB@@AA@AA@A@@@@JABFH@AGEBAA@CF@@A@@C@ABAA@A@ADAAC@@@A@AA@BK@A@GDAD@@AC@A@FA@CF@AI@AB@ACB@AABA@A@BBAD@AAB@B@B@@@@AB@BBDABD@@@CFAB@B@D@@@B@@AB@@@D@@B@@@AB@BB@A@A@@BBB@AAF@BC@AF@B@DA@AA@@AAGE@@AA@@C@@EB@AC@@AA@@@A@@A@AA@@@@CA@A@A@A@@@CBBDD@BDCBAC@@BDA@AAA@@BBBCBBBABABA@@BIBACCB@@D@@D@@@AABA@@ACBB@EB@AA@AAABCC@@@E@@@IB@@AH@D@@AB@@AB@ACFA@C@@B@@DB@@EB@@B@@@@@C@@@G@CA@@CA@@@@@@CA@@AC@@G@@@@B@@BD@@BB@@A@@@CA@@E@AB@@AB@@ACA@IDAACB@@@AA@@@@B@F@DA@B@@BBBB@@@@@@@FF@@BB@BFB@@CDF@@B@@DB@@AB@@DD@@@@@@@DA@DJ@@D@@B@@CB@@DB@@A@@@@@AB@@ED@CEC@DACCB@BA@@A@@AAEB@JA@@DA@@B@@AF@@C@@@ARABIHACC@ACO@AEUCEMIEEII@AAAACAC@AACACM@@@@A@OYD@CAQE@@FA@MF@MAGE@EEMB@ABG@A@@^GCE@CIDAEEO@ADIBIDKDG@ABCBEAC@EACCAOCOEEA@@OEA@EAOEC@ICEAUMMKEE@@I@EC@AA@EECACA@A@@BEBC@CAAGGGECAEECAIGECA@UMEAEAC@I@SDG@C@MAAAGACBKHC@KBO@C@G@A@IAE@KASCMAA@IAAAGA@SEAAOI@@D@FBXADA@CA@C@WI@G@GDGFCF@DCD@@C@ABAC@@ACAAC@CCBEDGBI@IEGIKCECEACCAG@_@[BM@@@MCEA@@EK@CAE@CAG@A@@@EAI@MAE@@AI@@M@QF@@@@AA@AE@AD@@@@A@@@A@@@A@@A@AA@AD@FA@@BE@@BEBAB@@@DC@BJA@CB@AC@AB@@CB@@BBIB@B@@@@ICBBBBC@@@BDA@BDA@AA@@@B@DCDBB@DA@BF@@A@AE@@BDA@@AEB@BA@A@@AMDBBA@@AAB@@EBBBDLBBBABDC@@BDFBHF@AAB@HJ@@BBB@BDB@@AB@BF@@@B@@BA@B@@CB@@BF@@HA@@DDF@BBF@@@EB@@@@F@@@A@BF@@FB@@BDBA@BA@BBFA@F@@A@@BB@@@A@@BEB@B@@D@@@C@BH@BBB@@BD@B@B@@A@@B@@A@@AC@@B@@ABADBB@B@D@BE@@BCB@B@@ACCB@@@@ACEB@AA@@@@DE@@DC@@@@HBDBDA@@D@BD@@BBABD@BB@@@BBAB@@@DA@@@BD@@A@AB@@@@@FBJ@FB@@DB@@BD@BJ@BC@A@BBC@@A@@@@C@AB@@A@@@BBGB@@@AI@A@@AA@AC@@A@A@IB@AEBA@CACBBFE@A@@BBDBBDFDL@FB@H@BD@@B@B@HA@B@BD@@@B@@@@@@BD@@@@@DA@DB@@@B@BDD@BAB@@B@B@@@B@BB@BA@@@FB@@B@B@@G@BH@@D@@BBF@@AB@D@@AD@@BB@BC@BD@@E@@FD@@BB@@@@@@L@D@@A@@BCB@B@@@BA@@B@@@@A@BFA@BDED@B@@CB@DA@BF@@@DBF@@C@@F@@D@@DD@@@@D@@@DAAAHADABE@GBGHMBCDIB@@EFBBRH@DALBJHZD@HAJDBFB@FCFN@@BHFADFFBDBCFEFHJNHHDDBRJ@BB@NJF@@@FPKJCLCDDHABB@BFABBDBBBD@@@@MB@@ABMB@BE@@CC@BDA@@A@AA@BDC@AAE@@AC@C@@BA@@BBB@BDBB@@@D@@AD@@@B@D@BBFA@FA@@D@@G@@BBFA@@DG@GBA@BB@BB@@@HCAD@@BBDA@F@@BADA@B@@@B@@B@@B@BDA@CF@@BB@B@@BF@BB@BBBBBD@B@D@B@@C@A@@@ABARB@BB@B@@DD@BJD@B@BHCB@@DF@@@AD@BBBBB@@CB@ACB@@@@@@GD@@AB@BB@AB@@@BF@@F@@AD@BAD@B@B@@@BB@ABB@A@@FB@AB@@CD@@A@@F@@@B@@@BAB@BBF@@@DAAABAJ@D@B@BBB@@AB@JAD@B@@FBBBFH@@@@BBLBHC@@DCBCG@BAEWD@FA@@DA@@BJ@AEF@@FHB@FDAPAAC"],"encodeOffsets":[[117852,36605]]}}],"UTF8Encoding":true});}));