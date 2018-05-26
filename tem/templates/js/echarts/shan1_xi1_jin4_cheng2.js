(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('晋城', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140502","properties":{"name":"城区","cp":[112.853555,35.501571],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@AAACCBABABCBABA@A@A@@A@@AA@A@ABAAABACB@AAACAAAA@AA@@@A@ABABCBA@ABAF@DABBDAD@DDDB@BDD@@@@BCBC@GBAAA@CBAA@AA@A@@BCB@@CDE@@BGBCBCDBB@FBB@D@D@H@@@@DBFBHBB@DB@@@@@@B@BBB@DBBBBB@@B@AB@@@@@@@B@@@BA@@BBDABBBE@G@BFA@C@A@@A@@A@@AC@A@AA@@A@AA@@CAA@@@CBC@E@A@EFABAB@BCJEJA@CFA@@BC@M@@@G@@@A@QAOBEBCDIVAH@DBB@@DBB@@@@@D@F@B@DBBBDH@HBH@DBH@F@BBL@@@@BBF@HAnCR@NAD@B@J@F@D@DDB@DHDBDBDBD@HAAB@D@D@JADADAFBBBB@DDBBBDBB@H@FAF@J@H@HFHDDFDBD@BBDAB@B@@AFEB@HGFADANEBGAACEBANELCLE@ABA@A@GAEAE@@@GAAACCA@AACAC@AAE@AACAI@@AA@A@@@@AA@AA@AAA@A@C@MDA@A@EBA@ABA@A@A@C@A@@@@@@@A@@@A@E@@I@@@A@A@C@@@A@AF@BAB@DA@@@AFG@@@I@ABA@A@EAEACFAB@B@DADCD@BA@@@ACAAABA@C@AAEACECAA@AGEBE@C@E@C@@@A@@BKBI@ABGBCBIGCKAA@CBA@ABBBAB@B@@@HA@GHB@@BC@ABCF@FA@ACDE@AA@A@A@ADA@@BA@C@GAC@@BABA@@AAA"],"encodeOffsets":[[115565,36297]]}},{"type":"Feature","id":"140521","properties":{"name":"沁水县","cp":[112.186738,35.690141],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C[@MKYQIYGWA@DCDIHQHQBKBOLUROVCHCR@LAVGPENCHGPEDKXETFLDDHHHFDBHHEb@H@DDRDP@DKLM@GFABAbA\\AFETAF@JLFLJJLBZ@L@DJH\\DFBRD\\RLLBBRRRLHNFT@BDJEJQRERFL@B\\RTJLNCTGPGJQRINCL@DBDBFFDDJALAPDXFJNFJI`[NEHCB@DAZKPEPEPE\\ITAVCJ@H@TAfBdJPDH@NLAPEPKNQHSRE@GDABABADCFCDABCBE@C@GCMIEAAB@DEJCXAHEDABI@C@@B@DAJ@DBB@DBBBBFCDAD@FAJ@J@BBB@BBD@BBF@F@D@F@@@B@BDBDBBFDBBB@D@DADADADCDAHEHA@AHCLAF@DB@ARGREP@XFLFXBVCVGZCVAJ@XJPBTANAVCPA\\B`RLJNBJDFJ@JTLLF`RfNhP`NRNBBFFBBDVCPAFAB@FAP@L@H@FCJGLJHJHRDDBRDND@@ND`HHBPDRBF@RFRJRALIVGLKJGBG@@@@@@FIBGPOHG@AFEHMNEJDLDTFLFPEFIDALMNIDAJCHANAJAJAFARABOFQBODU@U@EGUEWAIAKBOEEGAGCUBMCGAKGGM@GFSJ[NO@CBIACAC@@IQGIGIMCOAMGOIEEFIRKJIFCLIB@@AEKEEGGCI@@AGPQFIFIBAASKOIEY@MCOCKCCAEAICA@@@C@C@A@ABCB@BC@CAA@A@CAA@@@CAA@A@AA@@A@@A@A@A@A@@@A@C@A@@AC@@AA@A@@@C@A@@BCB@DA@@BAF@BAB@FA@AB@B@@A@@BCGQECGGIMCKAE@A@U@EBM@E@EAMAGAECIEGIGEEECOKACECEGEOBMBOAWBQGAC@EAM@ABADABAL@F@BBFLPBJMJ_C@@C@GEC@EBC@EBCCEAE@CBCBK@_MA@ICK@A@EDA@EFADMNMDE@MCGCIC@@BEBCAEAAABE@E@CF@BFHEBEFABADEFA@ELBF@LBFBDHF@PKFMHEVCZAHCLCNGRKJOPEFMDSFSDEBOBGBOBGBQAA@G@]@I@Q@W@SCYG@ECEEEG@EICGGOMIGCUCM@_LIDOFGDODQEIGISHUNOJMJ]AWBOBILULKXYDCHE@EBCEMEAOCIBGBMBC@OAUEKIOS@cKGQCSDWFU@SAOCSIQMIOQ]GWEMCO"],"encodeOffsets":[[114764,36282]]}},{"type":"Feature","id":"140522","properties":{"name":"阳城县","cp":[112.414738,35.486029],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MJGDEBGBIFA@AAAAEEAAABEBCBKFGBG@CCECCAKDABSHUFKDKBK@KDIBK@IEKMIGCECAIEGAQBIAGAQ@K@IDE@GCE@IBEBC@G@MCKCI@A@@BADDFDFVhDLABCBI@CAOOAAECI@aAWEGCEAKBWDKBCB@@A@BDBBDDBDGNEB[@SDQHMFCBQBMBYFMDE@A@MEEAICA@A@@@@@@A@@@@@@A@@@@@@B@@A@@@A@@@A@@@@B@@A@@B@@@@AB@@A@@@@B@@@@@B@@@@@@B@@@@@B@B@@@BB@@B@@B@@@@@B@@@@A@@@ABA@C@KBIDKDGBE@CAIAIAQBODAJCH@BB@FBFBBDHNDL@D@JAFAFGFCDGDCBABAFDJ@D@BEFGBUHIBG@GBCBADAF@B@BBLFLHHBH@LDNXBZHRJLZ@ND\\DPFNHXR^JPRNTJPDTBV@XETCRDLH@dPTLJVFPBD@NAHAJAPDFBFNAD@FGFCDWZKLKVAJAPBXI^INMPGVJTJHRFPCHCPEJC`KN@VDHDNJHPDHFJH@FFDF@FZHTDX@R@J@^@H@B@RBHAPAHAPAFATCTENCFEPOLIHQDMDKBGDYFUNGLE@OGEACAE@KAEFKB@FEBCBAFEFAEG@ADEF@F@BABBBFADAF@@JDHDNDF@NCNMBCFEB@FCB@L@JDB@`NL@DADAF@FBDDFAD@FAD@HFD@@@`DNIAIKOAE@A@EBKBABCBAN@FBD@HB@Q@C@K@@@A@K@K@IAG@A@A@A@AEOEGACACCEACCGBCDG@ADERKHGDCBKCEAAUEBADKGMCCAA@K@WOD_JWG@S@G@@eHEIbOH@HCHGHGB@DAFBBDDA@@DEEEGEAKAGBCF@NAFBDB@FAFAB@DBDDDFDH@BCACCCCCAA@CFADC@@BCAEGACAIGBCBC@CFMDGFMFGBAJEB@@C@ACAAA@ADEJGFEFAB@BBBBBDHF@@BAB@BAACCCACBC@@FAFCDA@AAACACBYLEBC@A@AAACAEAEAAA@A@C@EHCBC@AA@A@EJEDC@A@AIG@ABAB@RHD@D@BABEBG@GAAAACAGBAA@ABAHGBI@CBCJCJ@LABA@AB@DMBEAAAAEAOEEAEAC@E@MBEDE@WAOAG@I@CAEAAA@E@EAAC@E@CBC@ABA@OHIFGFE@A@C@MAQCCACAC@"],"encodeOffsets":[[115214,36064]]}},{"type":"Feature","id":"140524","properties":{"name":"陵川县","cp":[113.280688,35.775685],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EG@GDCHABCEG@E@AB@B@D@@BB@D@B@DCBADA@@B@FABAB@@A@CA@E@E@C@E@A@CAA@A@AAA@CAA@AAAA@A@@@C@AB@@ABAB@B@D@FD@@BBB@B@@A@A@C@ABEBCBABAB@BE@G@AAACSGIGOCEBMHQFKDGFI@@BABABI@@AC@CAAACCA@@CACCA@@A@C@@@AB@VEVK@@PQBEEC@@CCBC@C@C@@BA@ABADA@@@ABC@@@A@A@@@G@C@K@A@A@C@A@@BCAC@@@AA@GAC@CBA@CBA@C@C@AAA@A@A@I@C@A@G@A@ABA@G@A@CBA@A@C@AB@@CD@@@BAB@@@BAB@B@F@D@@ABCAA@AAA@C@A@AB@BA@@BBBAB@BAB@B@@@BAB@B@@@DAB@B@BA@@BC@A@CACAAAA@AAA@@@AA@A@@BA@A@AAA@A@A@@@ABA@CBABA@CB@BA@CB@@ABC@C@A@E@A@AB@BA@A@ABA@A@@BA@A@@ACA@AAE@C@CAA@@A@AAG@@AGAAAA@A@@A@AA@A@C@ABA@A@A@@AACACAC@E@EMIICASOKMAACO@G@CDGEOEKCC@ATQ@EAEAAW@E@EDEFSEA@CA@@C@CAEAG@A@@@CAAAA@A@AAAAAB@@@@C@A@A@AAAAEAGACAE@CB@@AB@@ABA@@BABABAB@@A@@AC@CAA@A@A@@@ADCBABA@@@CCCAIEEEA@A@A@A@C@AAC@CBA@ECAAAAEKAEAACC@@ACAAAAA@AC@@A@@CA@@@@AAA@AA@@@AA@@CAA@A@C@@@ABA@G@A@@AAAA@AA@@AC@@@AA@@AAAAA@AA@@AA@AAE@A@E@A@@@ABA@CAEBAACBA@G@CDIPMDICWOAC@CP@NAZIDG@E@AKCE@ELEHEA@IEGGCCK@I@AB@BAFEDCBC@A@AAAAAA@A@EBA@IFMFEBEBA@I@EAA@C@A@CBAB@B@D@@ABABA@A@IAC@ABABAB@@EDEHCBA@A@C@AD@@EHMNGLEVALAFCDKRGDKHMNGNGPMPA@gNQFGRGTCDEJ@@UNIBA@C@@@ABKBSDGBGBQJIPADDRABC@AAAAAAA@@@A@IJGHGJEBE@KFCBIHCL@BFPB@CF@BDBF@B@DBFHB@B@B@BBDB@BBB@@BBB@BBBBBBB@DBDBDJF@D@@FBFDHAJDAF@BKHCHGFOBADKDET@BFDLA@ABGDCBCF@B@DBBFFVFDDBBFDB@DBFBJBB@BBDBDB@BABA@ABA@@BA@A@ABCDAB@BAB@B@B@BCJGF@JBDPHZFBBNHHFHH@@BLCHAF@@KJQJ@@ABIDEDEDOJKJGN@D@FAH@BALCJ@BCFCFAH@DLHBLNBHKRFB@LNBH@DBDBPEB@DBBHB@LBHDPBJHBBDBFHLFDHBFBBBFBFDDBFBHBFBD@HDB@HDBB@@BBDGDID@DAJ@PDDAB@FAFBB@BBBD@F@DB@J@B@B@D@D@@ABA@CAA@C@@FE@@DCDCHIBCBAJKBCBALCNABAJDHBJHFBJHB@DBFDHAHD@DA@DDFBFBFBJDH@P@FAHCJAHCNIHMFMCGAK@EBGBAFENK@@@@LCFAPARAH@LBLBNLFLBDBDDFJNHHJDRBB@PAJAPCD@FCB@HE@@LCLEPAV@LBJBREFCFCPMHCDABALEJEJE@@FAD@B@@@R@"],"encodeOffsets":[[116312,36686]]}},{"type":"Feature","id":"140581","properties":{"name":"高平市","cp":[112.92392,35.797997],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MIMEEAA@G@QCA@E@A@E@C@C@@@C@YDA@C@CBK@GB@@@@@@@FCDCBG@BIEBA@MDIBKDABMNAJCHKJMDGBIBJFLPBTABEJEJORBH@@DJHHFFFL@BA@KJEDIJQLEJFFPJNHPBNDHJHJJR@@BDBDAJ@DMPI\\ET@HHNLHHBNDVAHDHBFFAPBLBJFXHV@F@VCVAPERAPJCDAFAHCJCL@BBLDDBLHNBJ@RCLEB@DAFCHALAT@HAFE@CDIBO@CAC@CEIAC@ACE@KHKBAFCJCJAPAZAD@R@H@B@J@PBJBRDVDHDBAHELARBDANAJAFABAHAD@B@DAHBD@H@JCHCPC@@DADEFEBAJQDAJGD@JCF@D@N@N@N@F@B@R@NAFALABAD@FEFEFCJGDCFCFCD@FAAICOAG@KGAAA@CFAAOAC@CAGKMA@QEGLMAAKKG@CBGDEDE@ADIBK@ABG@E@CHMLIPIFCFCJCBA@@RILI@@BEDGAK@@GGGEMGAAYEOGAC@IHEDI@A@A@ABA@ABADCBAB@B@@AB@BAB@BA@ACACAAAA@IAEACAA@ECAACCUEEEAA@C@ADEDAHCBAB@CKAES@CFCLABEPGHGDALE@CBBICGAE@EC@E@CICACAA@AAAAA@@BA@ABC@E@A@C@A@AAA@A@C@G@A@AAEAAACAAAEAE@ABCB@B@@ABGD@B@@@B@BBBB@@BD@FBD@B@D@BAB@B@B@F@DAD@B@B@D@B@B@D@@BB@@BAB@@@BABABABCBA@ABA@ABA@@BA@CBEBEBC@GDEBCBCBCB@BA@@BAB@@ABAB@BABABABAB@@AB@@ABCDC@AB@@A@GEMKAC@@@@CACIMEAAAAQEA@A@G@AEABA@ABA@ABE@A@E@UFGBEBA@ABC@@BKDQDODULEBCBABIFEDABIFEDE@I@MKKS"],"encodeOffsets":[[115562,36545]]}},{"type":"Feature","id":"140525","properties":{"name":"泽州县","cp":[112.899137,35.617221],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@AEGU]@OFQJQJCBGB[FOBA@IAC@KBE@I@EAUEE@EGCEA@EAAAA@A@O@ABOLA@O@A@EAA@@@A@CA@@_E@H@BAB@BKFKDMFABDFBBAHMFCBEBGHA@EF@BA@A@CBAAC@CACEGCGEG@I@E@EBG@A@CAAACA@CAAAABEBCBC@I@C@CBAGBC@CACACACGA@CCC@E@I@A@C@MBQ@mDGBE@AA@@@@AK@A@EAG@CAG@GCGAACAA@E@C@@@@@A@CA@@AA@CBGJUDCIGGGIGMICAGEGCYQ@@OK]QEAA@CCMDKBKBIFGAGCMOCAAOCM@GIAyICLABVFBBDFALCDGHQLCF@BCHADDHBDDFBDBDFHFP@B@B@B@BBH@J@L@L@B@@@L@D@RARBXAPANFPFHFDBDPLFDFFJHFHDJBFBHBN@F@FAN@F@V@BBFDLJNHHFDHRAD@@@BA@A@@BEBA@ABE@AB@@CBA@AD@@@B@D@@@BBB@@BD@@@B@D@B@@@B@B@B@BB@@@BBB@B@DB@@B@DBB@B@DBD@@ADABAB@D@D@@@B@JDFBDBLDPDNDZ@JAHANCLIDGBINMBALCJANCB@FAAJH@DADC@E@@@@@@HAL@DAD@B@ZCD@@@D@D@F@B@F@B@RDH@B@FBNFNJLTNLJ@F@FCJEBAFCJEBADAFAVKPCRCLC@AD@BAB@FAHAVEF@B@F@BAB@BAB@BABFH@B@B@RFBBBBNFDJDB@@@@BDNLHFB@@@BAD@DCBA@@BA@@BABABABA@ABABA@@BA@AB@@ADADADAFAHCD@FAFADAB@@AB@BAB@BAB@DABABABA@A@@BA@AA@@AC@A@A@C@A@A@C@CBE@A@A@A@ABC@A@C@EAC@@AA@AA@A@A@@@AHCBA@@@ADABAF@FBBBDBBBFBBBB@H@D@B@B@BBB@D@B@F@D@BAB@@AB@AAA@AA@@AA@ACAAAA@A@A@EGCAA@E@CA@ADEA@EO@ADKJGDALEF@FAHIHGJIB@@@B@BBBBBBD@BACQBCJORIHAHAIY@AEO"],["@@A@I@GAKEISCKAGE@AFKXBPJJ@BADQ@CB@@A@SPCB@HAFQ@A@CFIFGBABAB@BA@C@A@@@A@AB@D@J@BCJADGBCBAACACICMA@A@@BCJ@D@DDLABABC@ICCEEEIECEGHAB@BBBHADBBBBB@HAHAFABC@C@QGA@AB@BJH@B@BCDIF@F@BBBD@DAFGD@B@B@BBBFBFBDBBB@D@FAZKDADBBB@BCBEDEB@@ADBDDDBDABA@AB@@GEACAAAAA@EBEFIHCF@BBBDB@B@DA@IFABEHENCHEN@DADADJHDBHBBFAD@@CDEB@DBBDDDDBDADG@ECCCAC@CBABE@ECAEAMBE@ADBHBLHFFFCF@@CBACEACBA@GHGHGDG@aPFJfG@@@H@TXH`IPC@X@LBBDDHNzJJB@HDNBPDBNPHDHBJELALANCDDB@FB^RPL@@ZRHDHFDBNJJHHHJHFAPARBB@@@H@@@N@D@@AB@DEB@FIDI@ABABAFEB@F@D@DA@@B@DB@@BBB@@@BBB@D@@BB@@@@BB@D@B@AEH@F@AABAAC@AB@@A@@@A@@@@@@BAA@@@AAAACAA@AAA@@@@@@@CAA@GAEACA@@@@@G@C@CAA@EAADCDAHA@AF@DC@@DA@AB@B@@BBBDAB@BBHAD@DA@A@@C@ACA@CC@CBCACBA@CBEBAB@DABABAB@@@B@@BBBBBBDBBA@BDBABBBAB@B@@BB@@@@B@BABABADABABDDBB@BB@BB@BB@BA@AD@HBD@B@@AB@BCB@B@B@@BCFBDB@@EDEBAD@@AA@HGB@@G@@@ABAAABAB@DAB@LBHDAJADAH@BAJAL@@@B@@@D@F@DAFHF@BBBFDBDBF@B@DABBBDB@B@@ABC@CDCBA@A@EBBDBF@F@BAB@B@J@@EH@B@@CBA@ABE@@B@B@@@D@B@B@@@JF@B@@@B@@@@@@@B@D@B@B@B@BAB@FAB@B@NCD@B@B@BBB@@BBB@@@@@BBB@@BJBD@BBF@BBDBD@BDBBDBB@H@@BFBF`F@@DBB@@@B@FBB@P@B@PKBAP@B@B@BBFBB@DFFHF@VFFBJ@F@LAD@JBB@PA\\EHADARIRIPE^@HVBFFP@BJZTCLABA@@D@B@JAVM@@FIDCHSHQREhMB@NOHOHMNMLGHCLQDCBEBKFUHKNMFG@@BCA@CFC@GBOCGCKCGAKDG@Q@AAA@BAD@@CAIBKAGCA@@@CDCBA@@@@AA@@A@EBA@@@@@@@@@A@@@@@@@@@@A@@B@@A@@@@AA@A@@@A@A@@@@BA@@@@B@D@@AB@@@@A@@A@AA@@A@@AB@@@@@@@B@@A@@@@@A@@@@AA@@AA@@AA@@@@@B@@A@@@@@@@@@AB@@@B@@A@@@AB@@@@A@A@ABA@ABA@@@A@AAAAAAA@AA@@@@@B@@@B@@@B@@A@ABABA@@@@A@@AA@@BA@@@AB@@@@A@@@@@AA@A@@AA@B@@@@@B@@@B@@A@@B@BA@@@A@@@@@@@@@@@@@A@@B@@@@A@@A@@A@@@@B@@A@@@@@@@AA@@@A@@@A@@@@@BA@@B@@ABA@@@@BA@@B@@A@@B@@B@@@BBB@BB@@@@BB@@@@AB@@@AA@@A@@A@@B@@@B@@@@@B@@@@@@A@@@AAA@@@@A@@@A@@@AA@@@@@A@@@AAAA@@AA@@@A@@@AA@@@@@AB@@@@@B@@A@@@@@@AA@@A@@@@@@@A@@@A@@@@B@@@@A@@@@@A@@AA@@@AA@@A@A@@A@@@@@@AA@@@A@@@@@A@@B@@@@@BA@@AA@@@AA@@@@AA@@@@@@B@@A@@B@@@@A@@@@B@B@@@@@@A@A@@@@@@A@@@@@A@@B@@A@@A@@A@@@@@A@@@A@A@@BAA@@A@@@@@A@@@A@@@AA@@@@@A@@BA@@@A@A@A@@@@A@A@AA@@AA@@A@A@@B@BA@@@A@A@AAA@A@A@A@A@ABE@A@@@A@@@@C@@@A@A@GAC@CA@@AA@ABA@@BABC@A@A@C@AAAA@@AC@E@CAAAEAA@A@C@@@CB@BGDKFCBA@EBCAECAAC@A@A@AB@@C@GBGBEB@@EFEFCDCBA@ABEF@@C@AAAAA@A@A@ABABGBGDKDIB@@ABC@CAA@A@AAA@C@A@@@AACAA@EAA@A@EBIBA@@@@@A@@@A@@@A@AB@@@@ABA@ABA@@BA@A@A@ABA@AA@@@@AA@@@A@A@@AAEAAA@@@ABEBCBABC@@@AAAECGEAA@@AABC@C@I@I@G@A@A@A@A@C@A@AAA@@@@@@@A@@B@@@@@@@@@BA@BB@@@@ABA@ABCBCBC@E@C@A@CAAACACA@@AC@@@AA@@A@A@@@A@ABA@C@CBA@A@CDCBCBC@C@CACAICCAAAA@GCC@GAC@C@C@AAAC@G@@BA@ABABA@A@AAA@CA@@A@A@@@CACACCCCCCCAAA@@A@AA@CAEAECCAEAEAC@C@ABC@EBCBA@A@A@CAIAA@AAAA@A@@C@G@A@G@I@A@ABC@A@ABC@CBCBA@@B@D@BAD@@ABA@@AAAA@A@A@CBCBCBC@C@A@@@A@C@A@@@CBKBIBC@A@C@AA@@AA@@ACAC@A@A@@CCA@@ACACAA@@@CEEC@@AA@@@@AAA@C@C@C@@@A@AACAEC@@@C@CBCBA@@@CAAACAAA@CAACAGEGEGGCCCA@E@@@E@ABA@G@@@A@@@AAA@EBA@EBCBCBABGD"]],"encodeOffsets":[[[115810,36413]],[[115442,36056]]]}}],"UTF8Encoding":true});}));