(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阿克苏地区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"652901","properties":{"name":"阿克苏市","cp":[80.263387,41.167548],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@|@V@®@ĎAĠ@¼^|P~NĊBRKVQJE@AHGBC@ğBÇAa@m@c@@uBq@Aw@@ǙBů@¥@ßAI@O@c@O@mK@O@@]@Ï@į@aB¹@¹A»B@u@¹@¹ABs@ŭAñA@lP˂Hž@R@F]äO WÎƔKhELMXOZJ@Ø@¦@ @@VNdT\\RFBHFHFDBVHJD@@ĆFj@Z@"],["@@ABABA@@D@B@BBDBFFFB@BBB@@D@FAHCLABCDCDEBGBEBCDEBMDEBC@A@ADCDC@ADCDGHCDCBGHCDCJADABMNAFCJCF@@@BGHIHIDABCD@BGLADGHGDIDIDGDQFIDABEDCFAHGJ@@CJCFCDEBIFAB@@@D@@@@A@EBC@K@E@G@KDCBC@ABA@@BCBIJAB@DABADA@A@C@C@CBEBC@C@CBA@A@CBADAB@D@BABA@ABCD@@CB@@EAA@C@ACAAAACCAAII@@E@AAC@CCAA@@GCA@GACACA@AAA@ABA@C@@@AAA@AA@C@AAG@CBC@A@EBABA@G@A@A@@AA@@A@AAC@EAEACCG@@@@CAA@CCAAAA@@@AFGBABAOMECMGA@A@@BABCBA@CB@@@B@BDBBD@B@DCD@D@DBHBB@BFBDBDDDFBD@B@DAD@@@BBFBD@B@@EHCD@B@F@BA@CBA@A@A@AD@B@D@BABABABCBABAB@BCBAB@@@DBBFB@B@@@@@BC@A@C@@@AB@@ABAB@DBBBBDB@B@BA@@BEBC@@B@@BBBBBBABCHADBBDD@D@@@@@@ABA@E@A@@@@BCDAB@@A@C@C@GBA@EBC@A@CBGBG@CBG@E@C@EBE@@@O@AAI@C@CAG@E@CAE@G@E@A@AAAACAAAAAA@ECGEGC@A@@@A@@@BA@@@@@@A@@A@@@@@@@A@@@@B@@@@A@@@@@@@A@@@@@@A@@@@@@@A@@A@@A@@@@@@@@@@AAAA@@AAA@A@@AA@A@A@@@A@@@A@@CA@@AA@A@GCCC@@@A@@A@@@@@@B@@@@@@@A@@@@@@AA@BA@@A@@@@@@@A@@@@@A@@@@@@A@@@@@A@AA@@@@@@@@A@@@@@B@@@@@@@@@@A@@@@@@@@AA@@AA@@A@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@AB@@@@@@@A@@@@B@@@@@@@AA@@B@@@A@@@@@@@@@A@@B@@@@AB@@@@@@@AB@@@@@@A@@@@@@@@BA@@@A@@@BA@@@@A@@B@AA@@@B@@@BA@@@@@@@@BA@@@@@BA@@@A@@@@@B@@@A@@@A@@@A@@@@@@@@@@@B@@A@@@@@@A@@@@@A@@A@AA@@@@@@@@@@A@@@@@@AA@A@A@@AA@ABA@@@A@@BA@@B@@A@@B@@AB@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@A@@@@B@@@@A@@A@@B@@@@@@@AB@@@@@BA@@@A@@@@@@@@A@@@@@@@@@@@A@B@@@@@@@@A@@@@@@@@@@A@@@@@@@@@A@B@@@@@BA@@@@@ABA@A@@@@@A@@@@@@@A@ACA@@@A@@@@@AA@@AA@@A@AA@@@@@A@AAA@@@A@EAC@AAKCA@@A@ABA@@@ABA@@BAF@BAB@B@@@BCDCB@@@@AECCCAEAAAA@CA@@CBC@AB@@ABA@A@AB@BA@@BABABEAA@@CACC@A@CAA@AA@@A@C@A@@AC@@AA@A@AB@J@BA@@BA@@@@@A@@ACA@BABA@ABC@A@A@A@@DA@@DAHAB@B@B@BAFCBCFC@AB@@CAC@@@C@A@C@A@A@ABCBA@ABABCBC@C@KBG@A@A@G@C@CCC@CAA@ABCBADE@ABA@@@CAC@@AA@@AAA@CAG@A@KBA@EBA@C@@AA@AAAC@@@CB@@ABADCJC@ADABABEBABCBC@A@A@C@G@@AE@A@E@AAA@@@E@E@AAEAI@CAA@AA@@@A@KB@@ABADADABAB@@A@G@@@CBCBA@C@A@@AAABC@@AA@CAAAAEE@A@@@A@A@A@C@AAAAEEG@AACACACAA@@AC@@A@@AC@A@@A@@B@BAB@@@BA@A@@ACEEAAA@AAA@@A@@@EBCBA@A@A@@@ABAD@B@B@D@B@@@BA@A@C@A@AA@AAAAA@A@CAIC@@@A@@@@BAD@BA@ABA@AA@@@@AB@@@B@@A@@@CBA@A@A@AAA@ACA@@@A@ABA@@B@DADCB@BA@@@@@A@@AAA@@A@@BABA@@@@FB@@@@BA@@@EAA@@@G@A@CCGEKAACE@@BG@@ACACECAACE@C@@@C@A@@@A@@AAE@M@K@A@A@C@GAA@GCEAECECCAAAAAGE@@AA@ACE@AAA@@ACEGCEACAAEGAAAC@ACCACCECCAA@@AAACA@EGA@G@ABE@CBCBA@ABA@A@A@EBA@A@A@@BA@@B@@AB@@E@@@ABEDGHABABONEDGHABEDKHKHIFGDIDCBGBC@IBA@E@Q@G@]ASABA@A@GBCBEDE@ADCDCDABAD@LCNADAB@BABADEBGBCBC@EBEBCBEDCBCDCHGHEJCFCB@NIDEDE@ABABCLIDEDCDCDAFCHAHAFCDC@@FIBCBIBCBG@C@ABOAAE@IBE@K@CBGBC@IBOBIBIBEBMDGBQDEBC@IFEBUHEBWHKDSDOFGBMBYFIBQBC@S@G@G@E@A@AB@@@B@@F@b@B@z@L@R@@@H@D@J@pJ@AR@f@L@J@VhBTD@BABGLEFOTCDDDDB@DFFBBDBBBHDDFLJFHDDBDBFBD@F@BBD@HBF@F@LAH@@@BBD@D@H@F@D@H@FAHAFCHEJEFILKJABABA@ABGFABADCB@B@BADCBADCDCBC@ADCDCDAJ@B@BAB@@@B@BADCN@DAFADBBF@B@B@BBFBDBFBDBFB@@BBFDBBBBDBB@@BB@DBB@D@@@@@@BAB@@@B@B@BBD@@BDBB@BB@B@B@B@@@BB@BBD@BBFDBBD@@DDB@BDB@DFDBDDDBDBBBHBJBB@D@HBB@D@BB@D@B@@@@ADABAB@D@BAB@B@@ADA@@DCDADADADELENADEJABKTAD@@@@BB@BB@FDHFJF@BDBFFB@FB@BDBB@B@BB@@B@BB@@@B@@BBDBB@@@B@B@B@DBBBB@BDD@BBDBB@@@DBB@BBBBDB@@DBB@DBHBFDB@DBB@D@@@BBBBDB@BB@DB@@B@B@B@B@FDBBB@F@DBB@DBB@DBB@DB@@B@B@HDD@@BD@B@@@HFF@BB@@BBDDF@B@DBB@B@HBDBBBBB@BD@DBDB@BB@DDFDB@BBB@BBDBBBB@DDDBB@DDDBNHFDDBB@BBBBB@BBDBDBB@DBDDB@DBDDB@FDDBBBDBD@BBLFHB@@DBB@@BBB@@BBDB@BD@FFFDB@BBDDB@BBDFHHHFTJBB@HCD@HFDCJEFKJONCHCLBJDJCLMJEFCJHLPLDHAFIFEHBNBJFHEH@JEH@F@FDBD@B@B@HHDBFBDDDFDDDBFBD@LFBB@D@D@BABAB@DDBHJB@@B@DBBB@BBF@FAF@D@FBDBFBJBDBDBDDDBFBHAF@HCJCHEFEB@DBJJPJBBNDND@FDHBFDBB@N@JFLHF@HBRBPBRBHBRFRB@@HDHIDCHIBCFDHFDFDDBFB@LEHIJCDBBFBD@DAD@JBFBH@TBHFFB@FB@BFDBLDHH@BBHDFD@F@HABCTFJPPFHHLCFEDQDSDKB@FAXAL@@JA`EACj@HPD@HATBJJBX@HGJQLMXWJGVCJIJOJGFODGHOHEJKZUNKJIHWAEAMCKKGIKEKEKAKIKGMAGCKCGG_@EHGBECE@I@MAEKGGKCCCYAOCCCCGCIEAAA@@ADE@A@AC@@A@CBABAAACAGKACAEACIEA@EBA@ACCEACCCAC@CBC@@@AACBADE@@BCDAPALG@ADAFCB@FIBEDEDGDQBOJMBMBODQ@UBABCBABADCDCB@DCDABAB@BA@@BAB@@ADA@@@@BA@AB@@ADA@A@AB@@A@A@@BAB@BABA@@@@B@@A@A@A@AB@@A@@@@BAA@BA@C@AB@@ABABA@ABA@A@A@@@@BA@A@A@AB@@A@@@@@CB@@AB@@A@@@AB@@@@A@@B@B@@A@ABA@@BA@@BABCBG@@@C@CBAJQPKFABAXOLGBEBAFWBO@@DO@ADM@CBG@A@CDGDK@CFQDCDC@ABC@EDEDKDEDC@@BABCB@DEHGFCHEPKFEBADAB@DALAXEF@B@tGKHUhHD@HFR@J@VC\\ApA\\@V@T@P@hDJ@ZFJBbJxTfdNbNXJNFfPXLnV^NNHXJZJNDDBLBPFTNRPVTDNH^FZĸÖDABABADAB@HBBAB@B@@A@@B@@AB@B@@@D@@AB@AA@@@A@@BABAB@BAB@@AB@@@B@@@B@B@@@DCBAB@B@BB@@B@B@@@@A@@@@B@B@@@@B@@@@B@@@BABAB@B@B@B@@@B@BAB@@@@@@@@@@BB@@@@AB@@@@@B@@A@@@AB@BABAB@BCB@B@B@DAD@BAB@B@B@@@B@@@B@B@@@BAB@@@@A@@B@DADAB@B@B@D@D@DAD@D@BAB@D@@@B@@AB@BAB@@@BBDBB@BBB@@@@A@@A@@A@@B@@@@@D@@@B@@@@A@A@@B@D@BABA@@BAB@@BB@@@B@@@BA@@B@@@BA@@B@@AB@@@@@BB@ABB@@@@BA@@B@B@B@@@B@@@@A@@@@@@@AB@@@B@BABAB@@@@BB@@@@@@@@@B@@@B@@@B@@@B@@AB@B@@@@@@@AA@@@@B@B@DA@@BA@@@A@@@@BA@@D@FAB@@@BBB@@AB@@@@@BAB@@@F@B@@@B@@@B@@@@A@@B@@@D@B@@@@@@@@A@@@AB@@@B@@@@@@@D@DADA@@B@@@@@@B@@@@B@@@BABAB@@@@@BB@@B@@@B@@A@@@@D@BBBA@@B@B@@AB@@BB@@@B@@@@A@@@@B@@@B@@@B@@C@AB@@@B@@@@A@@@A@@@@B@@@@@@@BAB@@@B@@@B@@@B@@AB@B@@@B@BAD@D@D@BAB@B@B@B@ÔXLJJnHb@ZAL@B@@@@@@@@@B@@@B@BAB@D@B@@@@@ZAŢG@IF_JSHWZgFGDKBCTYDCBEPWDCLKDCLGFCFCFADA×sWȍÛ[KµgÑh»gHÃmqOÝumOÉDéDĉqQURIHEDMLCBOPGFCBEBABEBC@CBA@ABEBEBCBA@IDGBC@A@CBE@CAE@C@A@C@G@EAA@EAGAO@I@A@GAA@A@A@E@A@A@A@E@CBGBCBA@ugCK@AC@A@AA@@OKECE@IAC@G@CAECCEAA@AGAC@A@@@A@@@KB@A@K@CkSQIACAAECACCCCAGCWE@BBBDD@@@B@@ABC@ABABA@@B@F@@BBAB@BCDABCB@B@D@D@@BBFDFDB@BB@@@D@D@BCB@B@BBD@DABABABCBCBABA@A@C@A@@@EEA@@@A@AAAAAAAAAAA@@C@@AAEAEAC@C@C@CBA@CDAD"]],"encodeOffsets":[[[83365,41410]],[[82484,41635]]]}},{"type":"Feature","id":"652924","properties":{"name":"沙雅县","cp":[82.781818,41.221666],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HENMLGRCFABABA@ACEGWEQCKBCBAVDRBL@FALGRGJAD@HFPHFFFE@CBGBGFIHEDE@IAEAIKeCOAGDGDKFWHQJSHMLOXYVQJGHALCNCNCHAHCHIHCNANEN@PCPIZIfKJADBDBB@FAB@B@BABAB@PGLEHADADAB@HAFAH@LAFAD@DAB@D@BAD@@@DA@@@@IÇEAUCi@OGOûA_[ŵCw@@AACuMëCyI¯EÙMqA@GCECKICGU_qy[Ygaeaeaic_]keUQGG]Yeaa]IIa[QOwc_KIWS@@@@iemgyQOysMKCA@@c_QOGGOKQOecCAQOGGMKAAg@}BC@A@E@O@aAk@qBđ@BeA×@o@«@§@@½Bï@U@g@kA@q@e@{@k@o@q@¿BÓ@@Ż@á@y@ÃA@n@P@d@PBJ@à@¦AŰ@ǚ@Bx@Ar@v@@d@nBbAÈ@ĠADGH@BIFURQLKƠåAUVwv@Č·XPTBDDDFJBDFJ@DHP@DDHDLBFFLDFFNBFBD@BFN@BRhBDBBBFFJFH@BABB@@@BBDDLP@B@BBBNPJHBDFDBDHJDDBDPTLLNLTLRPRNNNJNLL\\dNZVVVZJRDT\\ZNN^TvjbLdH|PjP^NN^PnXphTTNJDRTFbJDBF@F@JBD@B@V@F@J@hBTANCD@F@PFBBF@H@F@FBHD@BDBB@BDBBJJFNHNBBBHDFDDFBHFBBNHHFHHHRHHFFJBP@VAD@HBJ@FBPJPHNJHHFPAHBDDJ@HBL@N@HAHAF@BBFDFBFDLDNPHHHBJAR@PDTBFDJFDDBh@HB@@FJ@D@H@HAHADEHBN@B@JBJBBBBD@F@H@D@JCxkDAJGLCDALCF@LALGRCHAVAB@J@JBB@N@L@PEVAD@LAHFB@JBHAN@FAFB@B@D@HAFADDBDBTBV@HBDBH@HAHELEFCHCLCFCHMLELGBADARGTITGJAFCB@FATITM`GHCHEHEDGHIDCFEDGFEJAHEDEJGBC@MDKBQBO@MBGB@BCDCDEDEBI@MBKAG@SBIFGLGHGJODGBELEHGFMJKJENAHINCJAHCDCFGJAL@J@HDHAL@J@P@LCNEPQJITKbUTGLOTOXKjONEFEFEFOBAFGHCFALCPEJE\\BRDRFFBLFJDF@LBFFD@DCP@TBP@H@DADAFMBEHEZAHAB@@EGGACDAHEDEFIHOBICEAEDCFEDGDGBCLAXCLAH@LFXHB@BD@@@B@B@BBB@BADAB@D@B@L@BCPAJ@DAB@@OHCB@@@B@@BH@@DFBD@BAPADCDA@@@C@@@AH@B@B@@@@DAF@NCB@L@@@BB@@BB@BB@B@B@@@BB@@BB@@@@BA@AB@BCB@BAB@BADE@@B@D@DB@@BB@D@@AD@@B@BBFBJBB@@@BCB@@@BB@BB@FBFBBB@@BBBBFBB@@@BABC@@@@BB@BD@D@B@B@FDBDBB@B@@AD@@@B@@B@BA@@H@@@BCB@B@BAB@HEBCB@@@B@FDB@D@DBFAB@BB@@FADBB@FDBB@B@B@BBBB@@B@@B@BBF@D@B@D@BAB@@@@ACBAA@@AAAMBCHGNIDC@A@A@G@IBGBGNOLIRIPIn[XKHEJCB@BA@AA@C@@@AABA@A@A@@BAB@AC@A@ACAAA@AA@@A@@@A@A@@AA@A@ABA@A@@AA@AAA@AGAAAA@@@A@@@A@@A@@AABCBABABAB@DAB@@@B@@AB@DABAD@B@B@@@BABAB@BADC@@B@B@@@BA@C@@BC@@AA@@DCBA@A@@DB@@B@@BF@B@B@BBDBBBB@FBB@F@DDB@BBDBD@DBDB@AB@@@@A@A@E@ABBFBBBB@B@B@D@B@B@BB@B@B@@@B@@@@@B@BBBBABBBAB@BADA"],"encodeOffsets":[[85759,42014]]}},{"type":"Feature","id":"652922","properties":{"name":"温宿县","cp":[80.238959,41.276688],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CDGJGC@@QAQEGAQAOAQAGAE@KGIEM@A@CAAECG@EMCMCAAOIIICAA@EFGFIDGDE@GBEACACCCACAIAEACAEAC@E@EBE@AAA@AA@C@AA@GICA@CBABA@A@C@CAAKEC@EACACCCECCEACAGGA@A@C@CAC@A@CBABABA@CAAACAG@CA@AA@C@AAACEAECCAEA@AACAEAACAC@EBABEBG@KCMAE@ADABCBC@CBEBGDI@GAE@CCGCE@ABCDIDC@CAACAAAAC@CDEDC@GC@AG@I@EBADCBIFMFGHCBIDKDMFGFILAFABCAEBE@EAABADCFEBEDCBCDABA@EDEACCAAA@@@A@ABADCBCAA@AB@DAHEDGBGB@@EBGDABCB@BCDGHKHABCDCBABC@@@A@GDABADAD@BBDBH@@@B@@ABC@C@CAABEJAFCDGDCFCBABCB@B@B@BABCBC@CBCBCFABE@GDIHEDCBOJKNA@GFEDGFA@A@AJ@DHHHDFFBRBJFZDXN^ALBJVbLXJJLDRCHCHANBJAHEHILCTBNBtAP@TAL@FJJLPFL@B@nJ`BR@LBPA^DN@JBT@NDHFDF@D@DEFCDKFMLSHIDEBSNUPWLSHWLQFQFQJSLKLOLGFKJMBIDMH_\\KHOFMHOVADGBGFEBKAKBCCI@ECYHKBIAODSVEB[AODELCDMT@HGRINK\\IFODGDK`IDSDMH@FTPBLDDADABC@CB@BDD@BCBCBCBDBB@FBBBIFADCBE@CBCBAB@DBFBFBB@DDBDB@BABGFCD@BBFCDCBGJ@PGL@@DFCFEFADAHAD@H@HCFCF@@IDE@I@IAKIEAAD@BFF@@ABIDEBCFKL@DAD@B@DADCACBABONCF@DB@DBFBF@D@B@DC@CB@D@FDDD@BABABE@A@@DAFBBDBD@DADAB@B@DHDFG@CD@@BD@BFDFCFDAF@BAB@DBBCBA@AAC@ABCFKFCB@DBDB@DBLEPGPANALAJ@JBV@R@RFJBD@HBJBVHRFTFLFLJJPHLLJJLJHR@J@VDX@VBRFVBPFTDV@ZBP@HAVKHBD@BDBDBDLNLJJPHNFPP\\BPHHNLPHPJNFLJFH@LAJCF@H@P@DDHHDHDdNFBJFDBJFZFJDHDHBJBB@J@J@J@D@V@H@FAD@H@LAH@PDN@JBN@PA\\DND\\B`BT@X@TA\\M`EVCZATFL@JBITDJJHHHTNTRLJORYDIJGNENELEJMXKPGTJBX@PB@FBd@ZBVFHVFTDRALBLBB@LBRBPDPFPHNHLFH@PDHDLFHDBFBF@HBLBLDJENUTEDGHCLBJBF@HDFDHFFDFBFBFBFHA@AHCB@NBJ@D@B@LEHAH@FBB@PNDBB@D@PCVED@DBNLFDF@HAJAHETEBA@CBCBALEB@B@JCBCFAB@B@HD@@D@FANAB@HF@P@BAB@@BBDBRBJAB@HBHBPAB@BBHJFHDBBHFHHD@BFBF@BAD@H@@BFFBBB@D@B@DAFAD@B@DDFFFPFDJBJ@JBP@NDB@F@H@RFF@@@FC@@H@BBR@VCJEN@JCHELE@EBEBE@CCGBEBCFCDGBMFEBAD@B@DEB@FADABC@EBAFCLGJ@PBB@BC@AHEF@J@TEF@B@HEBCFCHEDABA@C@CEIAGAC@ABEBC@A@CAGAC@@AAEM@AAEAGA@@A@A@CCE@G@GCG@G@C@CAG@@AA@C@ACCCE@EAE@IEO@ABGBGAAFCBAB@BI@K@A@CBABE@EBC@AAAB@BCFCLCDADCBEBAFA@ABEFAHCFEB@@@FBB@@@BABCBEBAFCFCFABABABC@@LEBCFCDABA@A@GBABC@AD@BE@AFE@@HABAHEDADAB@FCBA@ABEBAJCFAR@FAHCHADA@@DCDGDCN@DALAFCB@BE@GAA@@AC@CFKBADABAJGDADABADCBC@C@CDI@E@CBADC@EBEB@FGHGDEDIAA@@@AAAAABA@CDCDADCDEBCAEAA@A@ABA@GAEBCBA@C@C@AAAIE@@@@AK@MDC@KFK@@@ABGAGAA@CDGBA@CBC@ADCBAAK@ABAAAB@@CDAFADCBA@ABAAG@CHIAA@C@@@E@ACG@@BE@A@CDCBG@@FKBC@A@C@CBCLMHGD@N@B@NGHCBABBF@F@D@BBJ@BABAAAB@B@F@F@D@PBD@BAB@B@FAFCFEB@FAD@BAHCD@D@B@B@B@@@DABAB@D@B@@@DAB@D@B@HAH@TENEHEDE@C@A@ABCHEDEBC@CBEAMAE@A@C@KAEEU@@CK@AAIEE@E@CAGCEECEIACOQEEA@@ACGCE@CBEAMBO@ABCLC@ABCAIBKAEDG@EBADEEMGKAMHYFGEEECEBGECGCEII@IHMFMDGFE@IAIDGFCHANCLG\\IMQQÜgFCRENGXATBRF`PRBXA\\GHADI@G@GHIJEHG@CLCHAHCJCHAFIBGDEBIFEFCV@rBXAR@ZBZAT@@C@A@U@eAÉBIQOMăs}QĳUW}_e_K_GmSE[EYG]CMUSQOSMOEKACAMCYIWIMG]MmUWKeOMEWIaMcMewSaIIAYEI@gCO@S@U@[@oB[BUDI@Q@GEC@gGGVLsHA@E@WFKBCBA@CBABEFOLGFEDGHCFA@ADAB@@CDCFCLCF@FAD@BCDCDER@DCLCH@D@BAH@DCN@BCP@@APEXABAFKHWPABEBOLIRAB@D@D@@AHADAB@@AB@@AB@B@BA@A@@@@B@@A@@B@@@BA@@BA@@D@@@@@BA@@B@B@BAB@@@@@B@BAB@BABAB@BA@@B@DABB@AB@@@@@BA@@B@B@B@BA@@@@@ABABA@AB@@@B@BA@@B@BCB@BA@@BAB@@@@CB@BA@AB@@ABA@ABCBCDA@CDCDABABADAB@VCRAPANINAPCRCHCFAFEJA@EDCB@BKHOBCBAD@@CFABBD@B@@AD@DBDDDBDDFBDB@FAB@JFBDBFBDHLDBBBABAB@D@BD@@B@BCF@BB@BBJFHDDDDDBPDZDDHLLHBF@N@JDFAFGH@FH`DHDLBHHNJLBLFLFLJLLHDLBNBFGXIJMLYVILGFGPCHEPIHIPIJUDIHWXKNIRGHW@IAAIBS@GOC@GDiBFB_@IK@WBB@ELATCRCFCDEGKEGOOEIDSBA@G@EECGCAAG@CGAKEC@AEAA@EEAG@SAGAE@IBC@CACAECAIDGJKFA@AECCCEGEECADGJ"],"encodeOffsets":[[82146,42209]]}},{"type":"Feature","id":"652923","properties":{"name":"库车县","cp":[82.987312,41.714696],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CL@NADIHCFGFIBEFCHEFCDGJCHGFGFGD_HSNSJEBA@EDIBSHSJQHCBABKHKFGNEDKDGDEDKFGFGBG@CAGAU@SACACABCBE@G@C@AEAEBM@GBIAA@GEKBC@UBOFK@M@A@IAI@A@UBGBQDKHKBE@KDCBKDIHFFJRBFDLFJ@FAFADADAD@D@BBBDDNLBBDFBF@J@F@BEHADMLONMHC@IJEDAFAF@DBDLJDJDFFJBJ@B@JAR@TBFFXBL@JCTAH@BBBHB@BDFDDBBBH@BBF@J@@ABABC@EDCBEDCBABABADAL@DAD@@ABA@KDCBA@@BAB@@ABA@A@EBCAC@AAECCA@AACA@@@AAC@C@E@CBAAC@AAAAACAAAAA@A@A@A@ABA@A@@B@B@BAD@BAB@BAB@@A@A@@@CCCAAAA@A@@@ABAFCF@F@B@BB@B@@A@@B@DBB@B@B@BA@@BAB@@A@@BAFADCH@BBFB@BB@@@BBB@@@BD@B@@AB@@@F@DDD@BAB@@AB@B@@BBBBFFBBB@B@B@D@DBB@D@B@B@DBB@HH@@FBVHJFBF@HFFFLBJBDB@FGFED@HDLHBDBBDFDDDBHBF@JAJENEHCJ@FBJHHFJFJDD@HDDBBBAFEPBDDJFFFFDBJFFBJDFDNLLFFDHHFHJJHFHFBBBDBB@DCDCFCD@FDBJDFDLHNBT@F@N@F@D@FBF@BDDDFLBFLJRFLDHBJBNBP@L@R@LBLBH@JBFBFBHDJHNLDH@F@JAHAFDHBTC\\IR@@GVBN@BAF@DDFBDFD@B@DADADBHBJBJGV@FBF@DABCDGFGJAFABE@I@KAO@EB@FBFHLFNBH@FBFDDBB@FKFAD@BBTADAJCDCHAFADCJCLIZAL@JFJL\\DTARAH@HDHBD@BDJBLALBR@JFRAHCJ@BDJ@DADCDCF@B@B@BBBDBHDB@@DBJ@HAPAFCDEL@JDJDHBF@F@B@FFHHHHDBFFBBDHDH@JBBFDDF@NBF@DAFBHBND`B@@@BONAH@BDJDHNNHFDDBDBH@FAFKNCDWLGDI@SAGBGHDN@FBF@FABMHIFEDSFKFQFEBG@E@CAMGEAEBGFBL@NGFGDGBC@CB@LBDFFDBFH@DGHKHEJCFEBBJDDDFBJ@FCL@DCHEHKJGHGDQDIBCBCBDF@BDBFF@JLHL@@BTFXFRBPHDHCL@TTNRHPFX@VEXMNMJKHKHOJMPCVIROLENEFEH@TMJGHAFAHBTDRHbJXDVBXBTFVNTHPFX@V@R@TCNGPITGRELIFCNGP@JJZLRFTEPIJKBGLIHMAUCU@SLGHCJCTAXCZKVA`BTALENGPILGNCJA\\CTBRF`RZLVFN@R@T@PD`PZFJAP@VDNJPJPDJATGPEX@LJ@PEPJNRDVDTAVCZA\\C\\ATFLBLGTGT@NDPFP@XCLCLC\\CTAZBREN@NDNFLDPDFBFCIGGCCC@E@EBE@AGSAE@AJKJMDEBEAICCIKCIAC@EBKBEAC@AACBCJK@G@G@ECGAC@CBE@AACMMAA@KDSBM@A@CBC@AAGBAB@N@@@DCDGDAHA@@HADAHGFC@CCGAIAE@ADEBADG@CBC@AAA@@DIDC@@BADEFCBC@CEG@AB@DABC@CCOEEUOCGUUAAQ@_B]@EAKA@@UEOCAA@CBCLM@C@OAKAA@AHIDM@MAGEIIOAA@AFC@ACEAC@CFCZQ`WBCACCEDCFCNEFGFMJ[HcDQBM@OASJSL[J]FWN]DENKFE@C@ABCDEBEBC@I@ABA@EAE@EBCACBA@ABABA@@@A@@@A@A@@BA@AHGBOAYE[IWEOKWCIAGAIBKFMFSBKAMCICICQGWCEGIIGKIOIIKIMEKK[GSE[CQ@]AQCKEOAO@KDI@GCQAICK@E@MAIBMAGAK@K@K@E@EDEFKHMJMDEDAFAHCVCLALAFADA@A@EAGAGAEAE@CAO@C@E@CBEDC@ADCDCFCFCHCHAFCJADCDCDEBEDEBGFSDEJQFIFEBABCDADEBADCDA@ADCBABE@A@A@C@A@A@E@EAM@A@ABC@E@A@A@@@@@GBIBM@CBE@GBG@EBC@@@@@IBG@C@@BGBCBE@@BE@EBC@A@@BA@C@@@ABC@@BA@A@GBK@@@A@A@C@A@AAMAG@C@EAI@A@EAE@G@EAC@I@KAK@MAI@M@E@KAaBS@@@MBWBK@@@EBIBC@@@CBEBIDIDEBG@@BA@@DI@@DCBCJMBCHI@@DCFE@@@ADCDA@@BAFA@@DABADCDABADAFABA@@NABABA@@@@BAB@@@@@@A@@@CAECECCEGEI[Y@@AAACAAAC@A@EBC@ABA@CBA@A@ABC@ABI@A@C@C@A@C@A@E@AAC@@@@@AA@@@@A@ABAAA@AAAAC@@AC@@@@@AA@AAA@BE@@DGFEBABC@AB@@C@CAG@C@A@A@M@C@@@@BE@CBEDIBEBWB[@E@CBWBI@S@I@G@]@g@c@eA_@ECe@E@UAOAI@S@@CB@@C@ABC@A@CBC@EBKBG@EBGBA@CBCBGBKFOHA@ABABA@A@EBA@CACAIBeLYJOJODM@MFMBGDGJGDGBMDMDKDGBIHURWZKPGNITGREXCLCHBHDPLfBJBF@JCFGFEJAHAH@DEFEEOGGEC@IBQHKHEBK@QAUCABADDLFRHXDF@BABABEBQDKHMNGFCBABA@ABAAABAA@A@A@@@@@A@@@A@AAAA@A@C@A@A@A@AAEAAA@B@F@B@B@@A@@BCACAC@CAAAA@CCE@A@EAA@AACAAAA@A@E@@AA@@@CA@@@BABCD@@BB@@AD@@@DAB@@A@A@@@CDABA@ABAB@@A@A@C@ABCBA@@BA@@@A@CBA@ABABABADBB@@@BB@@@B@@@B@BBHB@BBB@BBB@@@BAB@B@BBB@@@B@B@@@BB@@BBBDB@B@BBDA@AB@@@B@BABBB@@D@B@@BABA@IDGFWLm\\OJQJKJMPAHAH@J@H@B@BCDMJGHADBNBB@@BBDA@B@@A@ABC@A@C@E@AAA@@@@AA@AA@A@A@AAAECA@CAEB@@AAA@EBCAC@A@ECA@@@A@ADGFA@ABA@A@AD@@G@@@ABA@@@@A@@BC@@@AAAACECA@A@C@C@@AAA@@@@ADAB@@A@EAAAAA@@AAEAEAA@@AAA@@A@AD@@A@IAEAAAA@@@BC@@@CAA@@CAC@A@@@CFABA@ABA@ADA@@BAB@@@@AA@@AA@@A@A@A@@AAA@@AA@@K@A@MDE@CB@@@@@A@ABG@@D@@@B@DCBCBO@AACCE@@AG@@@A@@DAPG@@BA@CBIDO@A@K@A@CBABC@AAA@A@A@A@@ACA@WGKEG@KBWDKBADCHCHEFCDBFDFAJGPEJCFGFCBBDHH@FA@GBYBGFAFENCBCBG@O@SAO@CDC@EEKAE@ICKEEAQEQC[AIFOFKDEBGDEHABEPEFEFMFiPWLSPKPSHaVSLIJORMFKDO@I@K@GBGCI@K@IBEHCDGDIBMDGJMBIFILENGHKFAFCHIPGHKHEHAJ@TBHAL@NAJCFCFCDADA@AH@NAPAR"],"encodeOffsets":[[85011,42356]]}},{"type":"Feature","id":"652925","properties":{"name":"新和县","cp":[82.618736,41.551206],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@SEQICSMgSomW]OMM]iO{OcGaKui]SMM[YCSIQUYUUMY[cKKIMMMQMQOSKMKKKOSACG@E@C@GBE@ABEBA@CBEBEDEDKHCDKLCDOXAFCDSZADCLEHYhGXITE`@JšHYB@@@@A@C@A@ABA@@@A@@@@@@@@@A@K@YBa@mGIIKÓWA@A@A@A@ABC@C@C@ABA@@@A@A@@BA@@@A@@@A@@@A@AB@@@@@@A@@@@@@B@@@B@@A@@@A@@B@DA@@@A@@@A@@@@@@B@@A@@@A@@AA@@BA@A@@@ABAAC@@@@@@BA@@@A@@@AA@@@@A@ABAB@@A@@@@@@A@@@@A@@@CBCBC@@@@@@@A@@@A@@B@@@B@@@@@@A@C@@@A@@@@B@@A@@@A@@@A@E@@@A@AB@@@@A@@BA@AA@@A@EBC@@@AB@@@@@B@@AB@@CBA@A@@@@@BB@@@@@@A@A@@BA@@@A@@@A@@@A@@@@@@@@@A@@A@@A@ABABA@@@A@@B@@@@@@@B@@A@@@A@A@A@@@AB@@@@AA@BAA@@@@A@@BA@@@AB@@A@@@AB@@A@@@A@@AA@AB@@ABABC@A@@@@B@B@@A@@@C@@@@@A@@@@BB@@@@B@@A@AAA@CAAA@@A@ABA@@BA@@@C@A@ABC@C@CBC@C@A@A@A@CBCBA@@@@B@@A@AB@@A@A@@@A@@@A@A@A@ABC@CBA@A@A@ADA@ABABA@@B@@@BA@@@@@A@@B@@A@@A@@@@@@@@A@ABA@@@A@A@A@A@ABAB@@A@@@@@@A@@A@A@@@@@@B@@A@A@@@AAA@A@ABCD@@A@A@@@A@@@A@@BA@ABA@ABAB@@@B@@BBA@@BC@@@A@A@@BA@@@@BA@A@ABGAA@CBABABCBķÕF\\THnL`f`~`XVĴ~RĄtPNJRABÊ@f@V@B@DJhBTHX@PBLEPGLEPCH@^FPTR^NNDTCH@HFHB^AZC`DPF\\BDFTBBFB@VAPJTHRDNFXL\\FbLFBDBnJXAZMnMbFZAfFTNPATBHBJFNDFHLHHBJEH@PFXFXLHBLBLHHFH@F@NDrPRF\\HdFXHTBNFLDVDP@HANAHFDDLHDBFADEFAXCJ@L@\\BR@`DNDLHTJZFLJLD@CGIDCJGL@PBFFVDJAL@BFBFLDLFFBB@X@dNhPVLT@tGLAdH\\TVP^JNDXLXDRBZJTNHFPHTDBBJ@HBL@HAD@HBDBDFHDF@PAJBL@DBFBDB@@B@FAD@LAD@B@BBDBBBJAHAHBF@HD@@BAB@B@B@B@DBB@DBB@B@@@@A@@BA@@AA@@AA@ABA@@FCB@DAB@H@FAF@B@@@B@BCBCFIBCBC@AAA@@AACCA@@@C@A@AB@@ADA@@B@BCDABABA@E@C@CAA@@AAC@@@A@A@EDEBEBA@@B@B@BBDBDD@@B@B@@@BA@ABA@ABC@A@A@AB@B@BAB@B@B@B@BBBBBDBBBBD@BBDAF@D@D@BB@@B@BD@BDBFDBBD@DBFAB@B@BA@@BA@AB@DALCB@BA@@BC@CBKBCBABADAFCDAFCD@BABA@@@IAE@AAGAACCCE@AGAAA@ABGDS@IAKEWAE@SBQ@I@AAIEICECIKIAC@CBEBEFCJID@NGPMNKBCFG@A@E@IAECEAAMKCCAA@A@CBCBCBCBE@EEICKAEIQEECBwlIDC@G@E@C@AAAAAI@I@AAMFGBCBG@G@G@CEI@@GAg@CAECCIAECS@OBQAIGGOGCMCKAECEAE@ABEBG@G@MAK@GCIACBGEOGGMIOGOIEAI@GAC@UBO@IAEEGGGQGGGEMGAAGEEACCCEAGAAGMEMIIAAACA@CA@AGCEAE@G@E@AAOEE@C@MDSBgAI@E@U@A@C@IAE@E@CAaI"],"encodeOffsets":[[84320,42237]]}},{"type":"Feature","id":"652927","properties":{"name":"乌什县","cp":[79.224616,41.222319],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@EFG@IFGEGAIAMFGJEBECGOKGKDIFENIDKCIAIDKDGPMLIFEDIEC@GDC@GAASIGEGGCEAAA@CCAAA@ECEEC@@ACAAA@@AA@AA@CA@@GAKEAAC@CAAACAECA@CCCAA@CCCAA@CACAAAA@AAAAA@CAECMGCACCA@CACCA@AACAAAA@AAA@ECCCA@@ACACAC@@AAAAACAGAA@A@CAA@E@CCAA@@AAE@GE@@A@C@@AC@GCA@A@@@CAA@CAA@CAA@CAE@A@AAECA@A@A@A@@@CAA@@ACAAAAA@@C@A@CAA@ECGACAA@CA@@CAAAAAA@CA@@A@CAAAC@ACA@AACAA@A@A@@@A@CAAA@@@A@@AAA@@@AAA@A@CA@AEAA@EECA@AIEGEECA@@AAA@@@@BCLSBAFIBCFMFKBCBCBCDC@CB@BC@@@ABA@A@CBABABC@@@@@A@CAAC@A@GAC@A@IAGAAACACACCCACEA@ACA@CC@@ACCAAE@AAC@AAA@@A@A@A@A@@AAAAC@@AC@A@A@A@@BA@A@@@@C@A@CAA@@AA@CAAAAAECAA@@EACAEACAEAAAA@A@E@AAE@A@G@CAI@A@CAECAB@@A@ICIAMAAAEBA@MGAA@@AAAC@CA@@A@@A@EFA@ABA@A@C@@@AACAAAG@EAAAA@CAA@CCA@C@MCEAGAGAQCKAEAC@@@GDA@A@C@A@@@M@GA@@AAAAAAAA@A@C@A@@@ACBC@A@ABAB@BA@@BABA@BB@B@BA@@BA@@@CAABAD@@BB@@@DAB@BA@@BBB@BABABA@A@AB@@@@@D@BBB@@@@CBA@AAC@CACAAAA@@@@@AAA@@@A@A@A@@@A@@@AAA@@@@@ABA@@A@AAAAA@@@@A@E@@@CCA@@@@@@DAB@@BB@B@@A@@@A@EACAECE@A@A@ABA@C@@@AAC@@AA@A@AEAAE@E@EAAAG@E@EBABBDDD@DCBA@GAKCK@K@OHSDYAQDIDGDI@MBQJIBGHGJGDIJEBWHEHEBSEWCK@ABCNC@IBG@KBO@O@MFWBM@Q@IAKBMBIBIDQDUFUFWJIDMFMHMJKBI@EBGAIBGFAJID@DBDJHDFDF@DCFCDC@GBABEHAFGJABEBUDEBABCHCBCBEBCAE@CACCC@AA@@@BABADCDADAFAB@DADABA@C@ADCFAD@BADCDADCDA@GHCDAB@@CAA@AAA@@@AB@@C@G@E@I@C@CDC@GBA@E@IEICIACAA@CBEFEJEL@@CAGAC@A@C@C@IIEICACC@A@@BAF@FABAB@@E@CAEKGAA@ADCBA@ACE@AC@E@EBEBIBU@E@IFKBM@YDOAIAIBOAMCKAE@@FCJCFEDEHEBEFBDJFBDBFBN@HBFNJHNBNBNBHDPDH@JCHCHIHGDI@I@GAGEOAMAGDIHAFABA@@BABCDCDEDABA@AB@@KNCFAFADADGJAD@BB@@B@@DB@B@F@FABADAD@B@D@B@BABADAD@@ABA@GLGH@BSRA@MLAFALEHENKLADAH@HGN@DAF@JEHEPADAH@LABCFMLMLEFCHADCDGDCDMJQHQHGDCFCFSPGDIJOHKBURIFABCHGFOJCFKHMJGFEFEDEBC@A@A@CBKNGHMDQDIDOHIHCFA@OBIBMDEBUPA@CHMLCBEHKJABCJKDQHUXGL@DEF@DGFEDKHEFGDUFG@A@AB@@@B@@AB@B@@@BBB@@@BAB@@ABAB@@@B@@@@SPH@FBbBLDJ@N@PAP@LBHBHDHDDDHFJ@JBHBJDHBHDHDDBHBJDHDDBHBHDFDHFB@DFFHDJDFLNNHFHB@HDJDD@JDJBHAJGDCHCFAHCJ@D@HDB@JDHBLBF@JALERIDJDFDFDJ@BFHFFFFJHFJHDHFFDHDDDJDHDJDBFCFCFCDGJ@NFFHDFDHBJDJ@JBJBHBJBB@JBJBJBH@J@@@BBH@H@JBH@JAJDHJDFPGDAHEDANALBHJDFFFJFHBHBHFHLBDHFFFJDHAJ@B@J@DBHDHDHDNLVNFDFHHFLFFD@H@DBFLBHDDBRRJHDBF@LBLB@@HFHBJDHFHBLAPELAPCH@HHFFBHBH@FB@DFHDDBTFRBJBHBTFTFH@D@BBHBHBHDLDLJHLDLJHNFbBPBN@N@L@jEH@FDFBJ@DB@BHFHFFDFFBBHDBBFFFFDBHFDBFFDDBFRHDBFDDDBHALFDtZ\\NHFFF@@FF@@HBTMVIHAFCJBDHJHFDFDFDFFbZFFHDFFJBHDHDB@JBJB@@JBHBFBJBJBBBHDJ@B@J@D@HAH@FCJCFACAA@AC@CDALEDEBAD@BBB@DAAA@CBA@ABEECEDEC@AAC@@DCH@CECGA@A@CBCBC@CAAABE@CB@F@BABA@ACCECC@A@@DCDA@C@E@EACAA@@CDEPMBADADBBC@C@ABC@CLKDEFAJCBA@@EE@ABCFBLJJBJ@F@JC@@DEDE@G@GBCBGBCFEDECE@@HK@OHIDADCAE@ADCHEBA@ACACA@CAAAEAE@CBADADAF@DABCJEAAEAA@CADADADA@ACC@ADAD@BABCCCAKSO@ENGTCJCL_HCPCJEL[JMHQ@GNSDCFKPC\\BFATUPCJBLAZGFDJ@DDLALBFAHEHABCPUNGPELG`[NGJCNALIHEPKLKTKRIREREXKTGXKVOTMFAJCTGNKLEDCFE@C@CCEGEMCS@IAM@]COBKAQ@_AmIA@K@OEIKEIK@SBO@sBMASAKDGJGFIBMAGBGDQDKCIIKWUaAIBKM]CWEYAIAQEEGCGG@CBIB@B@HEFCHEB@LMPIDAFCJGHCF@BADEDADAD@DABA@A@A@ADABADADEHCDCBEFIBADBD@D@BA@@@A@@AGAC@ABCBCBAHCB@@@D@BADADCBALGHGDC@ADABAHCFA@@HAHAFCBG@CBAB@DBDABCBAB@@@B@BBDDFBFCB@BADCDAFCFADEBCBAFBF@FADBBABEJKHENELCJCDAHGNEJEDABCFAJ@H@@BHDD@FCDCD@BBBBBDDBD@JCDCBAF@HDDDF@HBJ@HCFADAD@DABABCF@NBLDH@FABAFAD@DBBBBFBD@BFBDBFDFBBDBBD@B@@BDBH@DBBBDBB@BABADAB@D@@E"],"encodeOffsets":[[81925,42130]]}},{"type":"Feature","id":"652926","properties":{"name":"拜城县","cp":[81.85148,41.795912],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FDP@H@FHHDJBHEB@DBJJFFHBNALENAJBNBJ@JBH@HPNJF@HDPHJ@JGHGDGBGCEBGFCD@TDFADBBDBDFADAJAN@JAHAJEFGJGB@JBDFPFHBFHJHFBJJFFZ\\JJFDFDPDHANKBCFAHIAKDEHCJAFABAF@L@@BNCBAN@HDJL@DEFAFPH@DIH@LFFLALCJ@H@DAJ@NAZATBREVEN@RDTNPPHFAFBDHD`@b@HAN@NCVENAH@RBHDDFDPJLJDL@VAFANERALBHFLDHP@HCLA@BHFR@F@FAFAJBHDBH@NEBEFCRELERIJENARPHLfTTHRBVETGH@P@HBPELANEJ@LFVHNBPBP@DPDHLFL@XCFFBDEHAJ@DFHBHDF@DABMHABDHHDJ@R@RLXFFCFCFEPOREJC\\JDP\\BdEPBVD\\AXATEPAXHRHR@PELEL@JDHDDHJFN@BBJDBBBNADBFFFJH@FBDDBBD@BCHGHHFNDDABCFABABAD@LAH@HAJEF@HAFDBDDF@DFBH@VANBJ@JAF@LBDF@FBBDBLCHBDDDF@P@BHDDBDFFDD@J@LCJCJ@J@FDBDBHLJHHFHHHHDD@FAJAF@FBF@D@DAFC@CHWDC@CBCDEFCBIGECIBEECGEIMOM@CCGJ@F@LAF@NF@DFABCCWNBFAJ@N@JFLBHB@ACEDADAJARCHCHGLIFGDG@CDK@EAICECCAIFADEFILGHG@CEGCAEEAC@KDAD@HAHCHE@MAKHEFAFBNHDBF@H@FARELETEFCJENGBA@EAE@ECMHGHATBJ@HCXKDCLMBE@EAGACCCGEMMCGCI@ABGPM@A@@_AMCGAEACBE@MAE@CCAEIAG@GCACEAAEGCGGEG@E@A@EAECGCI@IFKDCBEBO@GAI@CA@GCCAAA@A@A@ADEDCBC@CCI@ADIBGEQ@IAQBKAKCI@AACCG@GBGBQCSK[EI@IBKJYDKDIBCBEDGDCBIBCAS@ABCLE@EAACCAE@EAGEMGKAE@EFAP@LBJ@F@BABEHIHEDCBA@CAE@EHUAIAIAGBCBC@C@AECACCE@CBE@AAMHU@@JQD[ASCGBEBG@I@ECGMKIGGCEAEAIAG@KAKAQ@K@O@MAIAGAKCQEKIAEEKCCACE@EAC@E@M@E@S@MAKGECICCA@EDCDEDC@CAAACAAGEGEIIEGGGECKEMKECICEAIECAEEEECIACFOBEAACAGCC@ICIEGEIGEAI@GDMFIFIBE@GACACCCEAAACKGGCC@EFEHA@ACAIEKEE@GAEIEUGEA@@GGA@CAA@A@C@A@CAC@A@A@A@AAEEAAAA@@@ABA@@BA@ACC@C@E@@BA@@@AAC@@A@AA@@A@@AEAAAG@CDEBAB@@@BA@AB@@ABA@A@A@CAA@@@@BA@A@@@BD@BB@DBD@F@B@BABADC@A@AB@BC@@BAB@D@@@B@DDBB@@BB@BADADEJADADA@@@A@E@EBG@A@CBA@ED@@AB@BBB@@BB@@AB@@@B@@A@A@CAA@CAA@A@A@A@AB@@GCE@GAGBIBAACAAAA@C@KBC@EBA@@@CAEACAK@IAOBE@GCCECAGAC@GBK@GAI@AASCOGGESMYIQAWCWKMC]IUO[ScGKBsHS@UKgOcMW@A@EAKEKCAEAEK@IBUCEEOAK@IHCDHJ@DKCKIYESIKGMC_CQ@[AK@I@WDEBCFEBCAKGCCGEMBGBO@UCKCMESAWGcE[GQEqOMCE@G@GEKGKAGAWKWEOEG@IFGAKGEGMCIEGASAOBSMeEYBaEmNYNWBmICAEAaK[EWKMEQCSGOIUBA@AESACE[AOE_CYD]BGAGEG@SDMC]MSQEO@]DGFOHKFOAK@OGWASIgS@YBYAQ@WBqAU@EDEFAJCFAHEJGBIDGDGBKD@DGHIFGJ@H@HCJGB[HWBQA_OQESAWBMHQFEDÛhRRN[JKHMDGBEDCHBJ@JEFCHENGN@JJJDFDHHFFAFDFFEHGZBNHLFNCFAB@FCHBFALBJAD@BKDAD@BAPBNAF@DDFDH@BB@FFPRBDFJFDDFBH@D@FFFBJ@BDL@@FVBF@L@D@BBFBNAF@DADCFGFAD@B@B@DCFGFMFSFG@GBA@C@A@CB@@A@C@A@ABCB@@A@A@A@C@C@GDABC@EBA@EFEDEBA@A@ABC@OAC@E@E@A@A@BBABABI@AAC@E@E@AAABGDMHA@M@C@GHKNAD@D@D@BADEL@@AHCD@D@BAF@@DH@B@F@@@DBBGJ@DBHAB@BABCDEBCB@DA@BBAB@BBLABCD@BAD@DABCH@DBBBHAH@B@@EL@LCD@NBL@@@@JFBB@B@D@DABADBF@HAB@B@BBBBFADCFCDCBCD@DABBBBB@B@@BBCJCFGHEHA@AF@FCDAB@D@FCJ@D@DADCDABCBCBIHABCBABEL@DBD@@BB@HAFA@EDKBCBM@CDCHCD@@CBGBGDEBQ@EBIDABAF@BABEDA@CBCBGFABGB@@EF@BAFC@@BADAB@H@BABCBEDADKF@@ADABABEBEDEDABAFADAB@@A@EA@@A@EFGDEBAF@BEBABAFCDCBKDEDADA@BB@BAD@FAFAB@D@B@LAJA@ABEDBBAHAH@BFP@JBF@FDFDD@B@DBB@@BH@D@D@HDH@H@HDF@D@B@BB@BHBF@BFNBB@@BDBH@D@BADAF@BBDBHFJ@D@DABCBGFEDADGFA@E@SFI@E@GF@BADA@OAI@KHEDAB@FADCBEBA@CFA@C@ABEFANCHEDADAFDH@DAFAF@FLFFHLFBBDBBBDAF@DA@@FDHALCNED@HCJDJ@FDBBD@RABBDBD@TCHCHCD@D@TAB@DDDHB@F@HCPBBE@AJEFEFGLCBAB@@AFAREXAjNBBJHHH@@FCFA@CRLDDBDADB@JBHAD@DBDB@@D@RCD@DBH@JFBBBBFDF@XERED@@CBAHGDBBDDDB@J@J@FANAF@TD@BFL@FBDJHHFD@N@JAB@LI@@ACAAEEDADE@A@ABC@@FBFADEBAB@@AAA@@B@BAB@DCBABADAB@DCBAD@DABABAB@@ABA@C@A@ABC@A@A@AAAB@@@DADCB@BCBE@CHCBCDA@AB@BC@ADC@ABC@C@@AAGECAA@@@@ADCDE@ABEBA@ADEDABAD@B@B@@BB@@BJ@D@D@F@FBF@FBJBJDBBB@@@@AB@B@B@D@BBNALCNE\\SPQLOHARDLCHBAFDRJJDLADEFMBEDBJANCFA\\@D@@@B@BBBB@FBF@@@B@J@D@BBD@D@D@H@DAB@@@@@BDBBBB@HBB@B@BB@DDBBBBBBHDBBBBB@BCDCB@B@@@B@D@B@BBB@FADBB@FAL@D@F@D@B@BBD@B@B@BABABBBBHBBB@@D@D@D@H@D@BAB@@@B@B@BBBBB@D@D@DAB@@@B@D@@ADE@@DAD@D@BADAB@@A@ABC@@BBDBBB@BB@FDDBB@@BBB@@H@H@LLBLHHFBLCDELGPIHILIFCHATBLDJLJNFLBBH@JARBJDFBFAFAFADJBFLABEHAB@FFBBFANBF@HAHBFB@NDFBBJCRSFAF@LCHCVCFABAFBDDLFD@DDDBN@JAD@D@"],"encodeOffsets":[[83499,43377]]}},{"type":"Feature","id":"652929","properties":{"name":"柯坪县","cp":[79.054497,40.501936],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@eBQI@@o@I@C@G@@@Q@K@y@A@a@E@@A@@BAB@F@H@H@T@D@RAJAZENAHAPETCLCXGFAVGFAJED@FARCHANCFAJAJAPAJAD@HADAL@F@JAF@@AAAAACAAAACACAAACAGAIAE@E@A@AAEAIAKCOCYCSCK@EAGAMCME]AMCQ@CCMAGAGAE@ECO@E@E@AAC@CAEAC@EAC@GCKAC@E@CGgIEGCEAEAICKAEACAEAECA@@BIFC@ABC@GBA@AAAAC@K@A@CBE@IBGBE@ABIBC@CB@@A@C@E@AACAE@CBE@@@C@OBA@C@GBA@A@C@AA@C@@A@@@AFAFABAB@@M@UDûfP÷UFiFWDWFWDN«TeHeDaDS@IBGBeBOBKBK@U@WBKAWAY@Q@SDKDKBGAA@eKqKUG]GOAwQ[EWCYCI@K@IDGBUHIDKDOFIFYNKHKBQFKDMHK@QAMEIGCA[KOEWEUEWGIAOEEEIEMCMEMEIGEEEICKCEGIIAMEOCECKEQIWIUGQCGAUIGMICEBO@MAaKQEQCEEEAI@ECCGEKCEDQCAIAWKSEKCAAKIE@CAC@ACA[EQ@ACCEAGCGCGCKCCAWGC@A@E@E@E@CACBC@CBGDIBCBAAAA@AFEDE@A@@AAAAA@ABED@@A@CCAA@A@@CAE@QEEAC@ECCACCC@AA@A@CA@E@C@CBA@C@KCKESGSCG@K@EACAGCACCACACACBEBCBC@CAAB@D@DABWJKDIFKHGJAH@DRJHFCDMFMJGHSJOBM@IBK@WDK@KAQIOEK@ODIHMBYA]AUDOBKDQBEAUGE@K@KAKASBKDG@G@KEEGE@KFGF@HAHOJGBMRKBOCGAKBOLEJALBRBJNLNJHDHHHLDVHLAHWTADBJJPDFBR@JHPHLVPPPFT@RFNAT@JDDDBP@L@RFJFLNH^LZPNNJLHBBHR@JFR@LCRCF@`FHLHRJTNNLJFPJRF^HPFnRtXTDRFRHbVfTPHRJTL\\ZJ\\H\\H^JPNPHRFHDLFdPFFPNJdHJPJPNNPR\\LVJTAJAL@HFZJRNVJLBDBD@DCBK@GAE@KBI@GBCD@NATE^CJIFEBBHDFFHBJKN@DH@LBLFJHDHFHFBJAL@D@JDHFJAHAPBZPPHRJVFP@FANDLHTP\\HXDH@F@PAJCFALFJNFNNFJDPHHHBBHLNLJDLHbVJDTDVHXNDFF@LBNDPBJAJBPBZCN@LAJEF@V@JAFAFAF@D@@BDF@BABCD@BBBLHBF@D@FA@ABEBE@AB@@@BDDDBFJJJD@D@B@D@HBDB@@FKFIFEDAB@DBJBJDJFF@B@HAD@DCD@J@F@H@D@@@BA@@B@BBB@DB@@BADCHGB@DCBCDCBC@ABCDEBCD@B@BABC@CBABEBCDCBCBA@A@@BBD@DDDBF@DBFADADADGBAFAVCFABAHIBEFGBAHAD@DCDE@CCECEIGAC@CJCBIHEJAHBFAJ@LANINGNEJCXIVEVERCJCJANALAJBR@N@XANEP@P@LAH@JAD@DMBAL@XDTFFAFGXGFAJIHCHIHGJARINAJ@HCJCRCZBTCPGL@L@LDHBB@DA@CCCACBAFAF@H@BBFBF@F@BBBFB@B@@BD@BB@@D@B@BAB@B@F@FDDBFBB@@@B@@@@AAA@@BA@C@@@@B@DD@@F@B@@@@@BBBB@B@BB@BA@@@@B@BB@@B@@@B@B@B@@@B@BB@@@@B@BBDBDBD@BBB@DA@@@@AA@A@C@@@@BAB@B@BABA@AAA@AB@@ABA@C@@AA@@BCBADB@@B@@AB@@A@AAAB@BA@AB@@ABABAB@D@DA@B@@@B@D@BBBBBBBBB@@HBN@@@B@D@B@B@HC@@D@FBLBRDHBHBFBNDD@B@DDB@DBB@BBFBH@BBDBBB@@D@B@B@BAB@FEB@@@@BB@@DBDBB@@BBNHB@FABBNBJBJDB@@@BAFDDBB@J@DBH@B@F@BCBE@CDMBC@A@A@@BA@A@ABIDCDCBCD@DADCBCDABC@A@ADABCBAHEBAB@BABALIJKFEFIDGBEBG@E@G@C@E@G@CAC@A@@BG@K@EAE@GAC@A@EACAEACCCEGKICEGCAACAAAEE@CCACCDCPSFEHKBA@ASCgA@U@I@K"],"encodeOffsets":[[81645,41536]]}},{"type":"Feature","id":"652928","properties":{"name":"阿瓦提县","cp":[80.375053,40.643647],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@@BA@AB@@A@CB@@A@@BRDXFR`JB@pNHD\\HD@DB@@D@BBLFJFDBBAAAB@B@@@FBBBBBB@B@B@@BB@@@B@BA@@B@HDBBBD@D@H@BBDDBBBD@BABC@E@ABADAD@FBDDHHHDVHLCB@DBD@D@DAF@FADAB@FAVCPCB@D@B@BAB@@A@A@CFCBADADADAFGDC@ANSPYNWFKLgƓXÍP^ã@E@QGŽOˁ@kmBĥE¯A@ŏEȋIÍAuAu@ǽK\\b¹pËxǍÞDRHvBTF`FdBTHrF^DrBf@NBFRzHVFPRvB@BBBBBBBBHFFDBB@B@B@BA@A@AAGEEC@@EBABADAB@D@BB@BDDD@B@B@@@@A@C@E@EBA@@BA@@BB@@@NBB@AD@@BBB@LFFBBAD@B@BAB@BC@C@A@@@AB@B@B@BBB@BB@DB@@@DAB@@@HBB@BDDB@D@B@@AB@@GBABAB@BAD@B@@B@B@@CB@@@BABB@@@@@D@BABAD@@@D@D@@BBBDB@B@@@B@@CD@DADAD@BADBB@B@@BBBDD@D@D@BBF@B@BAB@@A@@AAAA@AAA@CDA@ABADA@@D@B@BDBBB@B@@CB@D@@BBHFJFB@@B@@@BA@AB@@CF@B@@EDCDEDADADCDA@@@C@ABA@@BGF@BABBH@B@D@B@BAJ@JBB@@FDBBDDD@BB@@BB@BB@@@D@B@FBBBB@B@@BDB@@@Beİ@AA@ABA@@@AAE@@@A@@BFDFBDBFBLBJDFBFBHDJFHh@D@FBDDL@HBD@FBDBF@DBD@B@F@FDP@FBFBHBHDN@DDRBNF^DNBNBH@FDLDTDZDPBLBJBF@B@B@FBFBJBHBDBBBDBDBBDBBBBB@BBBAP@B@DAHADAJADEJ@@CDEDGBGBEDCBCDCDCFKJADAB@BCFCFMJA@EDIDGFGHCDADCDAFADAF@FADADAHCFABABA@CBMBKDC@ABCBCDCD@BCFAFAD@H@BABTB^BH@R@F@B@JAD@HADAJCHCJELGLGFCBAHGFCPMBABAHGFCBA@@F@@@BA@@@AB@@AB@B@B@FAB@B@B@BAB@DADAF@BAH@B@FHB@BDBB@@BBDDDFBDDD@BBDBBFHBBBDDFFHBD@@BB@BDF@BBB@@HFBBBBDBFDFDFBHDB@HBD@B@B@L@N@F@BB@@@B@@@B@D@@@DDFBBFDBDBD@@AH@@DFBBFLDH@D@B@H@@BB@F@@AB@@@@EA@@@@ABAB@@@BB@BB@@@B@@@@ABA@CDCBA@@@AB@B@B@@DB@BBB@B@B@BAB@D@@@BA@@@A@@B@@B@@BAB@BABC@AB@@@@@B@@JDDBB@B@BBBBB@@B@B@D@BAB@@A@C@A@A@C@AB@B@@@B@BABAD@F@@@BB@BBB@BBFFBD@@@BAB@@A@ABA@@@@BB@D@@BB@@@BD@@BBBDBDBD@BFHBFBB@B@D@B@B@B@@@BFFBBBB@DBB@@ADBB@BB@D@B@DADA@@H@B@@@BABABCBCBA@@LAB@@@B@@BBB@DBJBF@B@F@F@@BB@B@F@BBF@@@H@D@B@BADADABAFABCB@BIDCDAB@BA@@D@@BDBBB@@BD@B@FAB@LAB@H@DBB@BB@@BB@@BD@D@@AB@BCFABAD@BBB@DDD@D@D@H@B@BAH@L@DADADAB@BABAD@B@B@B@D@B@D@@BD@DA@@BEDADEDABA@A@A@GBCB@@CB@@@B@B@BAD@BABABB@BD@@@B@@@@AB@@ABI@A@@B@BBB@@BD@@@B@D@BB@@BBB@D@BDDDB@@BBAFABAB@@ABA@@B@BAB@BA@@BAD@DB@@DBBBBBFDDFD@B@@A@CDAD@@A@A@ABE@AB@@AB@B@@AB@B@BB@LDBBD@FBB@@@B@BBB@@@@@B@@B@BB@@BB@@B@@@@@B@@DB@B@B@@@@@@@B@@@@@BAB@B@@@@AB@@@@A@B@@@@@@@@@B@@@@@@@@@@@@B@@@@@@A@B@@@@@@@@@@@B@@@@@@@@@@B@@AB@@@@A@@B@@@@@@@AB@@@@B@@A@@@@@@BA@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@BA@@@AB@@@@AB@@AB@@@B@BAB@@BB@B@B@@B@@@@B@@@@@@@@@@@BBB@@@@B@@@@@B@@@@B@@@@A@@@@@@@@@@@B@@@B@@@B@@@A@@@@@B@@AB@@@@B@@A@@@@@@B@@A@@@A@@BBA@@@@B@@B@@A@@@B@@AB@@@@@@@@@B@@@@A@@B@@@@@@BA@@@@@AB@@@@@@@@@B@@@A@@@BB@@@@@@A@@@@@@B@@@@@@BA@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@B@@@BB@@BB@@@@@@@@@B@@@@@@@@A@@@@@B@@@@@@@@@BBB@@@@@B@@@@@@@@B@@@@@B@@@@@@@BB@@ABB@@@@@@@B@@@@@@@A@@@@B@@@@B@@DDHDB@B@@BB@@DB@@@B@@@B@B@B@@BB@B@BB@@BBBB@@@@@@@@@@@BB@@@@B@@@@@@@B@@@@B@@@@@@@B@@@@@@A@@B@@@@@@@B@@@@B@@@@B@@A@@@B@@@BHDHFFDB@BBBBDBBBBBB@F@H@F@DBF@H@DBD@J@BBP@@@F@FAD@F@H@DAH@HADAB@D@FAB@HAD@D@B@@@BADC@A@@B@F@B@BA@@@@@@@CCCAABCDGBAAAAAAA@@@AD@FA@AB@@A@ACAAAAA@CBABA@@BA@@D@B@D@@A@@@@@AEAAA@C@@BADA@ABABADABABABA@A@C@ABCB@B@B@DAB@@A@E@ADCFG@@@AACAE@A@@BC@C@AACCECCCAEA@AAAAG@C@CDC@C@AACCA@A@A@@DAB@DABA@AB@B@NHFDPNABABEH@B@@BBBBDDB@DB@@@@DHBDBF@FBD@B@BB@@BB@B@H@B@BAFAB@D@DAH@BBD@B@@BBB@B@@@DAB@BBB@BDBDBHBB@HD@@BBDDD@BBF@@@JJBBDDBBBBBDD@B@FB@@DA@@DCBAB@BA@A@CBABCDAB@B@DAD@D@FADAD@D@B@B@BCBA@CBAJIDA@AB@BAD@DALCH@F@L@D@FAB@@@@@@C@@BAJEFADCDEDI@@HIBGDEFCBAJCREHCJCJCHCHGBCHK@ADCBAJCJGHG@A@@DEDIBENMBABCDIDCHGDADCHGDCBCD@DCBCB@D@FANCFADCFAHAFADCDCBADKBG@E@CA@AAA@EEAEAC@A@A@CB@BABABCDCB@DAD@D@D@FBFBBB@@@DB@BBBBBBBBBBB@@@B@FF@@B@D@B@B@BADADABABABA@CAC@A@ADA@A@C@C@@AAA@ECECAA@@@C@C@ADABADC@ABAAA@@@E@AB@BABAD@BA@@@A@@CCAA@A@AAAAAAA@A@ABA@ADABC@A@A@CAA@A@A@@FC@A@@@@@@AA@@@A@@FEDA@A@A@AFCBABAB@@ABC@A@AB@@@D@B@B@@@DCB@BA@@BA@@BABABC@@B@B@B@@AB@@C@CAG@AAACA@@@A@ABCBAB@B@@@HBDBHB@@B@F@@@BBD@DDBB@FB@@@BBJ@B@JBJ@B@@@BBBBB@B@B@FADAB@BABA@AB@@CBA@AF@BAB@@@@AAA@A@@@ADABAB@DAD@H@@@DB@@B@B@DCFEBEDA@A@A@AAACCAA@CAEAA@A@ABA@ADABA@@@AAAAA@@@A@A@@AAAA@A@@@A@@BAF@J@@@DBH@BBB@@BB@DF@BDB@B@B@B@B@@BBDFB@DBB@F@DBB@@@B@D@FAD@DABA@@@@@C@I@GAE@ADCBAB@F@B@D@HADAJEBAB@B@F@BBDAFADAD@DAD@@ABABADA@ABC@AAC@AAGAA@C@ABEDCFCBAHCDAF@D@FAD@L@JAB@BBFBD@D@D@BA@@AA@@CECCACAAAA@AGKB@AA@AA@CAAAAA@@A@@@CBAB@@@BA@AB@BAB@@@BAB@B@@@BABA@AA@@@ABG@A@A@ACECA@@A@C@A@AA@@AAAA@AAA@@C@@@A@@B@@@B@BAB@B@BCBEF@@@@AAA@@ABA@AAAAA@AGAA@A@@@AB@BA@A@CAAACAA@A@A@@B@@AD@BA@@@@@A@@@@@AAAA@@@A@@AAC@CAAAC@@BAB@@@BADABABA@@BC@EAIAI@@D@N@BKv]X@@CBABCBABA@ABA@AB@A@@AA@@@@A@A@A@@@A@@@@@@BA@@@@BA@ABABA@A@C@A@A@@@A@@@@@A@@@AA@@A@@@@@@@@B@@@@@@@BA@@BA@A@@@A@@@@@AB@@AB@@@ABA@A@A@@@@AC@@A@A@AB@B@@@@@@@@@@@@@@@@AB@@ABA@A@@@@@BA@@@A@@@@@@@A@@@@@@A@@@@@@@@@A@@@@@@A@@B@@@@@@@D@BA@@B@@@@@@@@@@A@@@@A@@@@BA@A@A@A@AB@@A@@@AAA@@@AA@@BAA@@A@@ABAA@@@@@@BA@@@@B@@@BA@@@@@@@@@A@@A@@@@@@@@A@@B@@@@@B@@@@@@@@A@@@@@@@AA@B@@@@@@A@@@@A@@A@BA@@@A@@@@A@A@@B@@@BA@@@@BB@@B@@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@A@@A@@@@A@@@@@A@@AAA@@AA@AA@@@@@@@@@@@A@@@@@@@@@BB@@@@@@@@@B@@A@@@@B@@@@@@@@BB@@@@@B@@@B@@@B@@@B@@@B@@@B@@@BA@@B@@@B@B@@@B@D@B@BBB@D@@@B@@@@@B@B@B@B@@@B@B@@@D@@@@@B@B@@AB@B@@@BAB@@@@@BA@@@@@A@@@@AAA@@A@@A@A@@@A@@@A@@A@@A@@AA@@@@@A@@@A@A@@BA@A@@@@@AA@@@@@@B@@A@@A@@@@AB@@@@@B@@A@@@@@A@@@@BA@@@@B@@@B@@A@@B@@@@@@A@@@@@@BA@@@@A@@@@AA@@@@@@@A@@A@@A@@@B@@@@AB@@@@A@@@@C@@@@AA@@A@@@@@@A@@B@@@@A@@@A@A@@BA@A@@@A@A@A@@@@@@@@BA@@@@@AA@@@@A@@@A@C@@@AB@@@@@@A@@@@@@@AA@@@@@@AB@@@@@@AB@@@@AB@@@AA@@@@@AA@@AA@AA@@@@AA@@A@@@A@@A@@@@@@@@B@@@B@@@B@@@@@B@@@@A@A@@@@@A@@A@@AA@AAA@@A@@@@A@@@@@@B@@@@@@A@@@@@@@@@@BA@@A@@A@@A@@@@A@@@@A@@B@AA@@@A@@@@BBBBB@@@B@@@@@@ABA@A@A@@@A@C@@@CD@@A@@@A@A@@@AA@@A@A@@B@@A@@B@@AB@@A@@@@@@@A@@@@AA@@AAA@@CAAA@@@@@@@A@@@@@@@@B@@A@@B@@@B@@@B@@@@@BB@@B@@@@A@@@@AC@A@C@@@A@AB@@@@A@@@@A@@@A@@AA@A@@A@AA@@AACAA@@AA@A@AAC@@@@AAA@A@A@@@A@@@A@@A@@@@@@@AB@@@B@@@@@@@BA@@@@@A@A@@A@@A@@@@@@CAA@AAAAAAAA@@AA@@A@@@A@A@AAA@AAA@A@@A@@@@@A@A@@@@BA@@BA@AB@@@@@B@@AB@@@B@BBB@DBB@B@B@@@B@@A@A@@@@BABABCB@@A@@@A@@B@@@B@BBB@@@B@@A@@@@@A@A@CB@@@@AB@@@@@@@@@BAB@@@@A@@@@A@@@AB@@@@A@AB@@@A@@@@A@@@@@@@@B@@@@AB@@AA@@A@@A@A@@@AB@@@B@@@@@@@@@B@@@@B@@@@@@BA@@@ABA@A@@@@A@A@@@A@@BEBCBCBA@ABA@@@A@A@@@C@@@A@@@@@@@@@BAB@B@@@@@B@@@@@B@B@FABADABAB@B@@AB@B@@@B@@@@@@B@@B@B@@@@@@@AB@@A@@B@@@B@@@B@@@@@@B@@@@AB@@A@@@@B@@@BB@@B@@@B@@BA@@@@@@@@@@BB@@@@@@BB@@@B@B@D@@@B@@@@@@BA@@@AA@BC@ABCBA@@@@B@@B@@@F@@@DB@@@@@@@A@@@@@@B@@@@A@@B@@@@@B@@@B@@@@@@@B@@@@ABB@@@@B@@@@@B@@@B@@AB@B@B@@AB@BBB@B@B@B@B@DADAF@@@D@@@@@@@@@AA@@A@A@A@A@@@@@A@AB@@A@C@A@@@CB@@A@CAA@A@@@@AA@@@@@A@@A@@@@A@@@@@A@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@A@@@@@AAA@@AA@AA@@AA@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@@B@@A@@B@@@@@B@@@B@@BB@@@@@@@B@@@B@@@BA@B@@B@@@@@@@B@@@B@@@B@@B@@@@B@@@BAB@@@B@B@@@B@@@@@@ABAB@D@@@BA@@@A@@AA@@@AB@DA@A@@@@C@CAA@@@@AA@B@@AB@FAHBB@@@@@@@AA@A@@BA@@D@@@B@BA@@@A@@B@BA@@@@@A@@@@@AB@BABAB@@@@@B@@@@A@@BB@@B@@@@A@@@@@@B@@@@BB@@@B@B@D@@@@A@@B@B@@@B@B@@@@A@@@@B@A@@A@@A@@@B@@@B@@B@@BB@@@@BA@@B@@@BB@BD@@B@B@@@@A@A@AA@@@@@@@AB@@AA@@@A@A@@BA@@@@@A@A@@B@@A@@AAB@@A@BB@@@@@B@@B@@BA@@BD@@BB@B@B@B@DBB@D@D@DBB@B@@A@@EAA@A@C@@A@AAA@@@AB@BB@@B@@@@@DBBB@B@@B@B@@@@@BA@@@AAAA@A@AAA@AAA@@@@AAA@@@C@AA@@@A@AB@@A@A@@AA@@AAABA@A@A@A@@B@@@@B@@B@@@@@@DB@@B@@B@@@@@BB@A@@B@@@@B@B@@@@B@B@BABABAB@DB@@@@BBB@BBBB@@BA@@@@B@B@BB@@@A@@@@@@@A@@A@@@A@BAA@@@A@@@@@@@A@A@@@AA@@@@@@B@@@@@@A@@@@@AA@@@@@B@@AB@@BDBFBBBDBFBD@@@@@@@AAC@@@A@@A@@@A@@B@@@BB@@@@BAB@@@B@@@@B@BB@B@B@@@FA@ABA@AB@B@B@DABB@@BAB@@CAAC@C@A@@@ABABAB@@@BABAB@@A@@@A@@ABE@@@@@@B@ABB@@B@@A@@B@B@@B@@ABA@@@A@AB@@ABA@AB@DAB@B@@BA@B@@B@@B@BA@@B@@BB@B@@@B@D@D@BAD@B@@@@B"],"encodeOffsets":[[82689,41338]]}}],"UTF8Encoding":true});}));
