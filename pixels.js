
//jQuery.getScript('//media.paciolan.com/evenue/Common/pixels/Pixel_Lib.js',function(){
jQuery.getScript('/www/ev_global-wachovia/ss/evenue/customize/ev_global-wachovia/script/Pixel_Lib_old.js',function(){


    //cc#516804
    
    var AEG_RogerWatersPixel = {
        ver:'9',
        rb:'28252',
        ca:'20754443',
        Conver:'9',
        Conrb:'28252',
        Conca:'20754444'
    }
    pixel_lib.AEG_RogerWatersPixel(AEG_RogerWatersPixel);
    
    var GooglePixel = {
        id:'1062540359',
        label:'uLg7CL-AxlkQx6jU-gM',
        filter_in:{
            page:'OrderOk.html'
        }
    }
    pixel_lib.GoolgePixel(GooglePixel);

    var doubleclick = {
        pixelId:"5725008", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"aegli0", //INSERT Confirm_typeId NUMBER HERE
        Confirm_catId:"ticke00", //INSERT Confirm_catId NUMBER HERE
        filter_in:{
            page:'OrderOk.html'
        }
    }
    pixel_lib.DoubleClickPixel(doubleclick);

});

//Pixel from media server
jQuery.getScript('//media.paciolan.com/evenue/Common/pixels/Pixel_Lib.js',function(){
    //cc#571972
    pixel_lib.filterProcess({
        debug:true,
        filter:{
            state:1,//(1:filter in,0:filter out)
            //page:["OrderOk.html","OrderWait.html"],//Insert page name ex:OrderOk.html
            ev:[':WA2017:BS0317:']//(season and event codes required for events; season code for season; packgame name for package)
        }
    },function(){
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js', a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init','nxa0d');
        twq('track','PageView');  
    });
    pixel_lib.GooglePixel({
        debug:true, //show console (optional)
        id:'854631222',//provide by client
        remar_label:'',
        conv_label:'ROKtCN2Z3nAQtsbClwM',
        currency:'USD',
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:["OrderOk.html","OrderWait.html"],//Insert page name ex:OrderOk.html
            ev:[':WA2017:BS0317:']//(season and event codes required for events; season code for season; packgame name for package)
            //group:['Single']//(evenlist page only)
        }
    });
    //combine 516804 and 571972
	pixel_lib.FBPixel({
	    debug:true,
	    id:'217011611820041'/*,//provide by client
	    filter:{
	        state:1,//(1:filter in,0:filter out)
	        page:["OrderOk.html","OrderWait.html"]//Insert page name ex:OrderOk.html
	        //ev:['F16','F',':F16:EV:','Package Name'],//(season and event codes required for events; season code for season; packgame name for package)
	        //group:['Single']//(evenlist page only)
	    }*/
	},function(){
        if(/DisplayEventInfo/i.test(pageName) && /:WA2017:BS0317:/i.test(eventInfo.eventCode)){
            jQuery('body').append('<iframe src="https://6719212.fls.doubleclick.net/activityi;src=6719212;type=transact;cat=univers0;qty=1;cost=;u1='+eventInfo.description+';u4=;u5=;u6=19148;u7=;u8=;u9=;u10=;u11=;u12=;u13=Philadelphia;u14=;u15=;u16=;u18=;u19=;u20=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
            
        }
        if(/OrderOk/i.test(pageName)){
            var itemDetailInfo = {
                idxId:[],
                revenue:[],
                qty:[],
                orderId:[],
                eventName:[],
                currentDateTime:[],
                productCode:[],
                fullCode:[],
                type:[]
            };
            pixel_lib.evTagsLoop(evTags,itemDetailInfo,{
                filter:{
                    state:1,//(1:filter in,0:filter out)
                    ev:[':WA2017:BS0317:']//(season and event codes required for events; season code for season; packgame name for package)
                }
            });
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');
            if(/:WA2017:BS0317:/i.test(itemDetailInfo.fullCode[0])){
                fbq('track', 'Purchase_BS0317', {
                    value: itemDetailInfo.revenue,
                    currency: 'USD',
                    qty: itemDetailInfo.qty,
                    pageType: 'purchase complete',
                    eventName: 'Blake Shelton: Country Music Freaks Tour',
                    venueZip: '19148',
                    venueCity: 'Philadelphia',
                    venueGeoRegion: 'us'});
            }

        }
    });

    //cc#516804
	pixel_lib.TwitterPixel({
	    debug:true,
	    id:'nvk33',//provide by client
	    filter:{
	        state:1,//(1:filter in,0:filter out)
	        page:["OrderOk.html","OrderWait.html"]//Insert page name ex:OrderOk.html
	        //ev:['F16','F',':F16:EV:','Package Name'],//(season and event codes required for events; season code for season; packgame name for package)
	        //group:['Single']//(evenlist page only)
	    }
	});



    //cc#518942
    pixel_lib.DoubleClickPixel({
        debug:false,
        pixelId:"6174155", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"sales", //INSERT Confirm_typeId NUMBER HERE
        typeId:"sales", //INSERT typeId NUMBER HERE
        Confirm_catId:"zbv8li8y", //INSERT Confirm_catId NUMBER HERE
        catId:"zbv8li89", //INSERT catId NUMBER HERE//,
        filter:{
            state:1,
            ev:[":FELD16:RB0215P:",
             ":FELD16:RB0216A:", 
             ":FELD16:RB0216P:", 
             ":FELD16:RB0217A:", 
             ":FELD16:RB0217P:", 
             ":FELD16:RB0218A:", 
             ":FELD16:RB0218M:", 
             ":FELD16:RB0218P:", 
             ":FELD16:RB0219A:", 
             ":FELD16:RB0219M:", 
             ":FELD16:RB0219P:",  
             ":FELD16:RB0220M:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            group:["RB"] //INSERT GROUP CODE for EventList Page.
        }
    });

    //cc#525938
    pixel_lib.DoubleClickPixel({
        debug:false,
        pixelId:"6278701", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"sale", //INSERT Confirm_typeId NUMBER HERE
        Confirm_catId:"ameri003", //INSERT Confirm_catId NUMBER HERE
        filter:{
            state:1,
            ev:[":WA2016:CQ0308P:",
             ":WA2016:CQ0309P:", 
             ":WA2016:CQ0310P:", 
             ":WA2016:CQ0311M:", 
             ":WA2016:CQ0311P:", 
             ":WA2016:CQ0312M", 
             ":WA2016:CQ0312P:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            group:["TORUK"], //INSERT GROUP CODE for EventList Page.
            page:["OrderOk.html","OrderWait.html"]
        }
    });
    pixel_lib.BS_ServingPixel({
        debug:false,
        id:955043,
        filter:{
            state:1,
            ev:[':WA2016:HG0304M:',':WA2016:HG0305M:',':WA2016:HG0305P:'],//INSERT EVENT CODE (EVENT NAME for Package) or HERE for EventInfo and OrderOk Page. ex:ev:[":OA050616:",":OA050816:"]
            page:["OrderOk.html","OrderWait.html"]
        }
    });

    //cc#531015
    pixel_lib.additionalGAPixel({
        debug:false,
        id:'UA-72099146-1',//provide by client
        tracker:'Brooks',//named by developer
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:['DisplayEventInfo.html','DisplayEventList.html'],//Insert page name ex:OrderOk.html
            ev:[':WA2016:GB0322P:',
                ':WA2016:GB0323P:',
                ':WA2016:GB0324P:',
                ':WA2016:GB0324E:',
                ':WA2016:GB0325M:',
                ':WA2016:GB0325P:',
                ':WA2016:GB0326M:',
                ':WA2016:GB0326P:'],//(season and event codes required for events; season code for season; packgame name for package)
            group:['GB']//(evenlist page only)
        }
    });

    //cc#534488
    pixel_lib.DoubleClickPixel({
        debug:true,
        pixelId:"189445", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"gabm2698", //INSERT Confirm_typeId NUMBER HERE
        Confirm_catId:"smeosphl", //INSERT Confirm_catId NUMBER HERE
        filter:{
            state:1,
            ev:[":WA2017:SM0822:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            //group:[""], //INSERT GROUP CODE for EventList Page.
            page:["OrderOk.html","OrderWait.html"]
        }
    });

    //cc#534595
	pixel_lib.GooglePixel({
	    debug:true, //show console (optional)
	    id:'988188579',//provide by client
	    remar_label:'',
	    conv_label:'5XU4CIWKqgkQo5-a1wM',
	    currency:'USD',
        filter:{
            state:1,
            ev:[":WA2017:SM0822:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            //group:[""], //INSERT GROUP CODE for EventList Page.
            page:["OrderOk.html","OrderWait.html"]
        }
	});

	pixel_lib.TwitterPixel({
	    debug:true,
	    id:'nve1f',//provide by client
	    filter:{
	        state:1,//(1:filter in,0:filter out)
	        page:["OrderOk.html","OrderWait.html"]//Insert page name ex:OrderOk.html
	        //ev:['F16','F',':F16:EV:','Package Name'],//(season and event codes required for events; season code for season; packgame name for package)
	        //group:['Single']//(evenlist page only)
	    }
	});

    //cc#538511 
    pixel_lib.TwitterPixel({
        debug:true,
        id:'nw5xa',//provide by client
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:["OrderOk.html","OrderWait.html"],//Insert page name ex:OrderOk.html
            ev:[':WA2017:ES0711:',':WA2017:S0712:']//(season and event codes required for events; season code for season; packgame name for package)
            //group:['Single']//(evenlist page only)
        }
    });

    //Already  has this iid and label fire sitewide below. I commented out the one below and move to here for tracking on orderok page. 
    //cc#538511 
    pixel_lib.GooglePixel({
        debug:true, //show console (optional)
        id:'988188579',//provide by client
        remar_label:'',
        conv_label:'GFuaCM2d61YQo5-a1wM',
        currency:'USD',
        filter:{
            state:1,
            //ev:[":WA2017:ES0711:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            //group:[""], //INSERT GROUP CODE for EventList Page.
            page:["OrderOk.html","OrderWait.html"]
        }
    });

    //cc#518942
    pixel_lib.DoubleClickPixel({
        debug:false,
        pixelId:"6174155", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"sales", //INSERT Confirm_typeId NUMBER HERE
        typeId:"sales", //INSERT typeId NUMBER HERE
        Confirm_catId:"zbv8li8y", //INSERT Confirm_catId NUMBER HERE
        catId:"zbv8li89", //INSERT catId NUMBER HERE//,
        filter:{
            state:1,
            ev:[":FELD16:RB0215P:",
             ":FELD16:RB0216A:", 
             ":FELD16:RB0216P:", 
             ":FELD16:RB0217A:", 
             ":FELD16:RB0217P:", 
             ":FELD16:RB0218A:", 
             ":FELD16:RB0218M:", 
             ":FELD16:RB0218P:", 
             ":FELD16:RB0219A:", 
             ":FELD16:RB0219M:", 
             ":FELD16:RB0219P:",  
             ":FELD16:RB0220M:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            group:["RB"] //INSERT GROUP CODE for EventList Page.
        }
    });

    //cc#537339
    pixel_lib.DoubleClickPixel({
        debug:true,
        pixelId:"189445", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"gabm2698", //INSERT Confirm_typeId NUMBER HERE
        Confirm_catId:"eseosphl", //INSERT Confirm_catId NUMBER HERE
        filter:{
            state:1,
            ev:[":WA2017:ES0711:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            //group:[""], //INSERT GROUP CODE for EventList Page.
            page:["OrderOk.html","OrderWait.html"]
        }
    });
    

    //cc#561019
    pixel_lib.DoubleClickPixel({
        debug:false,
        pixelId:"8020133", //INSERT pixelId NUMBER HERE
        Confirm_typeId:"sale", //INSERT Confirm_typeId NUMBER HERE
        Confirm_catId:"cwtpyjwb", //INSERT Confirm_catId NUMBER HERE
        filter:{
            state:1,
            ev:[":FELD17:WD1223A:",
             ":FELD17:WD1223M:",
             ":FELD17:WD1223P:",
             ":FELD17:WD1224A:",
             ":FELD17:WD1224M:",
             ":FELD17:WD1226A:",
             ":FELD17:WD1226M:",
             ":FELD17:WD1226P:",
             ":FELD17:WD1227A:",
             ":FELD17:WD1227M:",
             ":FELD17:WD1227P:",
             ":FELD17:WD1228A:",
             ":FELD17:WD1228M:",
             ":FELD17:WD1228P:",
             ":FELD17:WD1229A:",
             ":FELD17:WD1229M:",
             ":FELD17:WD1229P:",
             ":FELD17:WD1230A:",
             ":FELD17:WD1230M:",
             ":FELD17:WD1230P:",
             ":FELD17:WD0101A:",
             ":FELD17:WD0101M:"],//INSERT EVENT CODE (EVENT NAME for Package)or  HERE for EventInfo and OrderOk Page
            //group:["DOI"], //INSERT GROUP CODE for EventList Page.
            page:["DisplayEventList.html","DisplayEventInfo.html","CartDisplay.html"]
        }
    });

    //cc#561019
    pixel_lib.FBPixel({
        debug:true,
        id:'1423130507957883',//provide by client
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:["DisplayEventList.html","DisplayEventInfo.html","CartDisplay.html"],//Insert page name ex:OrderOk.html
            ev:[":FELD17:WD1223A:", ":FELD17:WD1223M:", ":FELD17:WD1223P:", ":FELD17:WD1224A:", ":FELD17:WD1224M:", ":FELD17:WD1226A:", ":FELD17:WD1226M", ":FELD17:WD1226P", ":FELD17:WD1226P", ":FELD17:WD1227A", ":FELD17:WD1227M", ":FELD17:WD1227P", ":FELD17:WD1228A", ":FELD17:WD1228M", ":FELD17:WD1228P", ":FELD17:WD1229A", ":FELD17:WD1229M", ":FELD17:WD1229P", ":FELD17:WD1230A", ":FELD17:WD1230M", ":FELD17:WD1230P", ":FELD17:WD0101A", ":FELD17:WD0101M"]//(season and event codes required for events; season code for season; packgame name for package)
            //group:['Single']//(evenlist page only)
        }
    });

    //custom code - cc#561019
    pixel_lib.FBPixel({
        debug:true,
        id:'1423130507957883',//provide by client
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:["OrderOk.html","OrderWait.html"],//Insert page name ex:OrderOk.html
            ev:[":FELD17:WD1223A:",
             ":FELD17:WD1223M:",
             ":FELD17:WD1223P:",
             ":FELD17:WD1224A:",
             ":FELD17:WD1224M:",
             ":FELD17:WD1226A:",
             ":FELD17:WD1226M:",
             ":FELD17:WD1226P:",
             ":FELD17:WD1227A:",
             ":FELD17:WD1227M:",
             ":FELD17:WD1227P:",
             ":FELD17:WD1228A:",
             ":FELD17:WD1228M:",
             ":FELD17:WD1228P:",
             ":FELD17:WD1229A:",
             ":FELD17:WD1229M:",
             ":FELD17:WD1229P:",
             ":FELD17:WD1230A:",
             ":FELD17:WD1230M:",
             ":FELD17:WD1230P:",
             ":FELD17:WD0101A:",
             ":FELD17:WD0101M:"]
            //group:['Single']//(evenlist page only)
        }
    },function(){
        var itemDetailInfo = {
            idxId:[],
            revenue:[],
            qty:[],
            orderId:[],
            eventName:[],
            currentDateTime:[],
            productCode:[],
            fullCode:[],
            type:[]
        };
        pixel_lib.evTagsLoop(evTags,itemDetailInfo,{
            filter:{
                state:1//(1:filter in,0:filter out)//(season and event codes required for events; season code for season; packgame name for package)
            }
        });
        fbq('init', '1423130507957883'); // Insert your pixel ID here. 
        fbq('track', 'PageView'); 
        fbq('track', 'Purchase_1423130507957883', { 
            content_ids: '1599972', 
            content_type: 'product', 
            value: cartCharges.total, 
            currency: 'USD' 
        });
    });
    //cc#557598
    pixel_lib.MOGO({
        debug:true,
        sw1:{
            pixelId:'8110029',//provide by client
            typeId:'counter',//provide by client
            catId:'pagev0'
        },//provide by client
        sw2:{
            pixelId:'8110029',//provide by client
            typeId:'counter',//provide by client
            catId:'sitev0'
        },//provide by client
        cart:{
            pixelId:'8110029',//provide by client
            typeId:'count0',//provide by client
            catId:'cart-0'
        },//provide by client 
        orderok:{
            pixelId:'8110029',//provide by client
            Confirm_typeId:'conve0',//provide by client
            Confirm_catId:'conve0'
        }//provide by client
    });
    
    //CC00570273
    pixel_lib.FBPixel({
        debug:true,
        id:'326618644438190',
        filter:{
            state:1,
            page:["OrderOk.html","OrderWait.html"],
            ev:[':WA2017:JB1206:']
        }
    });
    pixel_lib.GooglePixel({
        debug:true,
        id:'851536647',
        remar_label:'',
        conv_label:'XXxrCPW2tHYQh9aFlgM',
        currency:'USD',
        filter:{
            state:1,
            page:["OrderOk.html","OrderWait.html"],
            ev:[':WA2017:JB1206:']
        }
    });
    pixel_lib.TwitterPixel({
        debug:true,
        id:'nxv1m',//provide by client
        filter:{
            state:1,
            page:["OrderOk.html","OrderWait.html"],
            ev:[':WA2017:JB1206:']
        }
    });
    pixel_lib.filterProcess({
        debug:true,
        filter:{
            state:1,
            page:["OrderOk.html","OrderWait.html"],
            ev:[':WA2017:JB1206:']
        }
    }, function() {
      (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5772324"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
    });
    


    pixel_lib.FELD_V2({
        debug:true,
        TTD:{
            id:'f0yzdx2', //TTD_ADVERTISER_ID (provided from case) 
            RT_ID:'f3d11sx', //TTD_RT_PIXEL_ID (provided from case)
            ConvID:'mpog0sy' //TTD_CONV_PIXEL_ID (provided from case)
        },
        Nie:{
            id:'1599972'//ARTIST_ID (provided from case)
        },
        FB_ID:{
            remar:'1423130507957883',
            conv:'1423130507957883',
            customTrack:{
                artist_id: '1599972'//ARTIST_ID (provided from case)
            }
        },
        DC:{
            pixelId:'8020133',//FL_SRC_ID (provided from case)
            Confirm_typeId:'sales',
            typeId:'invmedia',
            Confirm_catId:'cwtpyjwb',//FL_CONV_CAT_ID (provided from case)
            catId:'oqde4cjc'//FL_RT_CAT_ID (provided from case)
        },
        filter:{
            state:1,
            page:["DisplayEventList.html","DisplayEventInfo.html","CartDisplay.html","OrderOk.html","OrderWait.html"],
            ev:[":FELD17:WD1223A:", ":FELD17:WD1223M:", ":FELD17:WD1223P:", ":FELD17:WD1224A:", ":FELD17:WD1224M:", ":FELD17:WD1226A:", ":FELD17:WD1226M:", ":FELD17:WD1226P:", ":FELD17:WD1227A:", ":FELD17:WD1227M:", ":FELD17:WD1227P:", ":FELD17:WD1228A:", ":FELD17:WD1228M:", ":FELD17:WD1228P:", ":FELD17:WD1229A:", ":FELD17:WD1229M:", ":FELD17:WD1229P:", ":FELD17:WD1230A:", ":FELD17:WD1230M:", ":FELD17:WD1230P:", ":FELD17:WD0101A:", ":FELD17:WD0101M:"],
            group:["DOI"] //INSERT GROUP CODE for EventList Page. ex:group:["OAEVENTS"]
        }
    });
    //cc#573348
    pixel_lib.FELD_V2({
        debug:true,
        TTD:{
            id:'b6g2lvl', //TTD_ADVERTISER_ID (provided from case) 
            RT_ID:'l9zmvq7', //TTD_RT_PIXEL_ID (provided from case)
            ConvID:'18z2abx' //TTD_CONV_PIXEL_ID (provided from case)
        },
        Nie:{
            id:'1936934'//ARTIST_ID (provided from case)
        },
        FB_ID:{
            remar:'1423130507957883',
            conv:'1423130507957883',
            customTrack:{
                artist_id: '1936934'//ARTIST_ID (provided from case)
            }
        },
        DC:{
            pixelId:'8009372',//FL_SRC_ID (provided from case)
            Confirm_typeId:'sales',
            typeId:'invmedia',
            Confirm_catId:'lckzjodn',//FL_CONV_CAT_ID (provided from case)
            catId:'3ajwsdoz'//FL_RT_CAT_ID (provided from case)
        },
        filter:{
            state:1,
            page:["DisplayEventList.html","DisplayEventInfo.html","CartDisplay.html","OrderOk.html","OrderWait.html"],
            ev:[":FELD17:MUL0216P:", ":FELD17:MUL0217A:", ":FELD17:MUL0217M:", ":FELD17:MUL0217P:", ":FELD17:MUL0218A:", ":FELD17:MUL0218M:", ":FELD17:MUL0219M:"],
            group:["MUL"] //INSERT GROUP CODE for EventList Page. ex:group:["OAEVENTS"]
        }
    });
    //cc#538511 
    fbq('init', '254160501424327'); // Insert your pixel ID here. 
    fbq('track', 'PageView'); 
    fbq('init', '262981697413856'); // Insert your pixel ID here. 
    fbq('track', 'PageView'); 
    pixel_lib.SPECTRA_FB({
        debug:true,
        id:'545241602346179'
    });

    //cc#579388
    pixel_lib.filterProcess({
        debug:true,
        filter:{
            state:1,//(1:filter in,0:filter out)
            page:["OrderOk.html","OrderWait.html"],//Insert page name ex:OrderOk.html
            ev:[':WA2017:HG0304M:',':WA2017:HG0304P:']//(season and event codes required for events; season code for season; packgame name for package)
        }
    },function(){
        var itemDetailInfo = {
            idxId:[],
            revenue:[],
            qty:[],
            orderId:[],
            eventName:[],
            currentDateTime:[],
            productCode:[],
            fullCode:[],
            type:[]
        };
        pixel_lib.evTagsLoop(evTags,itemDetailInfo,{
            filter:{
                state:1,//(1:filter in,0:filter out)
                ev:[':WA2017:HG0304M:',':WA2017:HG0304P:']//(season and event codes required for events; season code for season; packgame name for package)
            }
        });
        //console.log(itemDetailInfo.revenue)
        jq('body').append('<iframe src="https://8001586.fls.doubleclick.net/activityi;src=8001586;type=globe;cat=globe00;qty=1;cost='+itemDetailInfo.revenue+';u1='+itemDetailInfo.qty+';u2='+itemDetailInfo.eventName+';u4='+itemDetailInfo.currentDateTime+';u5='+itemDetailInfo.currentDateTime+';u6='+itemDetailInfo.type+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord='+itemDetailInfo.orderId+'?" width="1" height="1" frameborder="0" style="display:none"></iframe> ');
    });
});


/************************
    Other pixels 
*************************/
(function(){
    var pixel_map = {
        pixel_fire: false,
        ev_tag_array: {
            idxId:[],
            revenue:[],
            qty:[],
            orderId:[],
            eventName:[],
            currentDateTime:[]
        }
    }
    if(typeof(evTags)!='undefined'){
        for (var i in evTags){
            if (evTags.hasOwnProperty(i)){
                //for (var fi=0; fi<FELD.filter_in.ev.length;fi++){
                    //if(i.indexOf(FELD.filter_in.ev[fi])>-1 || (i.substring(0, 3)=="PK:" && FELD.filter_in.ev[fi] == evTags[i].eventName)){
                        pixel_map.ev_tag_array.orderId.push(evTags[i].orderId);
                        pixel_map.ev_tag_array.eventName.push(evTags[i].eventName);
                        pixel_map.ev_tag_array.qty.push(evTags[i].qty);
                        pixel_map.ev_tag_array.revenue.push(evTags[i].revenue);
                        pixel_map.ev_tag_array.currentDateTime.push(evTags[i].currentDateTime);
                        //if (pageName=="OrderOk.html"){
                            //pixel_map.pixel_fire = true;
                        //}
                    //}
                //}
            }
        }
    }
    //Twitter single-event website tag code 
    if (typeof(pageName)!='undefined' && pageName=="OrderOk.html"){
        twttr.conversion.trackPid('nvdd2', { tw_sale_amount: pixel_map.ev_tag_array.revenue, tw_order_quantity: pixel_map.ev_tag_array.qty });
        jQuery('body').append('<img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nvdd2&p_id=Twitter&tw_sale_amount='+pixel_map.ev_tag_array.revenue+'&tw_order_quantity='+pixel_map.ev_tag_array.qty+'" />');
        jQuery('body').append('<img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nvdd2&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />');
        /*
        <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nvdd2&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
        <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nvdd2&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
        */
    }
    if (typeof(pageName)!='undefined' && pageName=="DisplayEventInfo.html"){
        twttr.conversion.trackPid('nvbfw', { tw_sale_amount: 0, tw_order_quantity: 0 }); 
        jQuery('body').append('<img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nvbfw&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />');
        jQuery('body').append('<img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nvbfw&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />');
        /*
        <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nvbfw&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
        <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nvbfw&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
        */
    }

    // End Twitter single-event website tag code 

    //cc#561019
    if (typeof(pageName)!='undefined' && pageName=="OrderOk.html"){ 
        var rd = {
            fire:false,
            filter_in :{
                ev:[":FELD17:WD1223A:",
                 ":FELD17:WD1223M:",
                 ":FELD17:WD1223P:",
                 ":FELD17:WD1224A:",
                 ":FELD17:WD1224M:",
                 ":FELD17:WD1226A:",
                 ":FELD17:WD1226M:",
                 ":FELD17:WD1226P:",
                 ":FELD17:WD1227A:",
                 ":FELD17:WD1227M:",
                 ":FELD17:WD1227P:",
                 ":FELD17:WD1228A:",
                 ":FELD17:WD1228M:",
                 ":FELD17:WD1228P:",
                 ":FELD17:WD1229A:",
                 ":FELD17:WD1229M:",
                 ":FELD17:WD1229P:",
                 ":FELD17:WD1230A:",
                 ":FELD17:WD1230M:",
                 ":FELD17:WD1230P:",
                 ":FELD17:WD0101A:",
                 ":FELD17:WD0101M:"]
            }
        }  
        if(typeof(evTags)!='undefined'){
            for (var i in evTags){
                if (evTags.hasOwnProperty(i)){
                    for (var rdfi=0; rdfi<rd.filter_in.ev.length;rdfi++){
                        if(i.indexOf(rd.filter_in.ev[rdfi])>-1 || (i.substring(0, 3)=="PK:" && rd.filter_in.ev[rdfi] == evTags[i].eventName)){
                            rd.fire = true;                        
                        }
                    }
                }
            }
        }        
        if(rd.fire){
            jQuery('body').append('<iframe src="https://8020133.fls.doubleclick.net/activityi;src=8020133;type=sales;cat=cwtpyjwb;qty='+pixel_map.ev_tag_array.qty+';cost='+pixel_map.ev_tag_array.revenue+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord='+pixel_map.ev_tag_array.orderId+'?" width="1" height="1" frameborder="0" style="display:none"></iframe> ');
            jQuery('body').append('<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/conv/?adv=f0yzdx2&ct=0:mpog0sy&fmt=3&v='+pixel_map.ev_tag_array.revenue+'&vf=USD"/>');
        }        
    }

    //Double click
    if (typeof(pageName)!='undefined' && pageName=="OrderOk.html"){
        jQuery('body').append('<iframe src="https://5725008.fls.doubleclick.net/activityi;src=5725008;type=aegli0;cat=ticke00;qty=1;cost='+pixel_map.ev_tag_array.revenue+';u1='+pixel_map.ev_tag_array.eventName+';u2=[Event Date];u3='+pixel_map.ev_tag_array.currentDateTime+';u4=[Event ID];u5=[Venue Name];u6=[Venue Zip];u7=[Venue ID];u8=[Artist Name];u9=[Artist ID];u10=[Tickets Purchased];u11=[Face Value];u12=[Billing State of Purchaser];u13=[Billing Zip of Purchaser];u14=[Order Confirmation Code];u15=[Country];u16=[Purchase Date];u17=[Purchase Time];u18=[Page Name];u19=[Major Category];u20=[Minor Category];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord='+pixel_map.ev_tag_array.orderId+'?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
    }

    //cc#517290
    if (typeof(pageName)!='undefined' && pageName=="OrderOk.html"){ 
        var rw = {
            fire:false,
            filter_in :{
                ev:[':WA2017:RW0808:',
                'Roger Waters - Diamond Package (Aug 8)',
                ':WA2017:PLRW0808:',
                'Roger Waters - Emerald Package (Aug 8)',
                'Roger Waters - Sapphire Package (Aug 8)',
                'Roger Waters - Ruby Package (Aug 8)',
                'Roger Waters - Gold Package (Aug 8)',
                'Roger Waters - Silver Package (Aug 8)',
                ':WA2017:RW0809:',
                'Roger Waters - Diamond Package (Aug 9)',
                ':WA2017:PLRW0809:',
                'Roger Waters - Emerald Package (Aug 9)',
                'Roger Waters - Sapphire Package (Aug 9)',
                'Roger Waters - Ruby Package (Aug 9)',
                'Roger Waters - Gold Package (Aug 9)',
                'Roger Waters - Silver Package (Aug 9)',
                '']
            }
        }  
        if(typeof(evTags)!='undefined'){
            for (var i in evTags){
                if (evTags.hasOwnProperty(i)){
                    for (var rwfi=0; rwfi<rw.filter_in.ev.length;rwfi++){
                        if(i.indexOf(rw.filter_in.ev[rwfi])>-1 || (i.substring(0, 3)=="PK:" && rw.filter_in.ev[rwfi] == evTags[i].eventName)){
                            rw.fire = true;                        
                        }
                    }
                }
            }
        }        
        if(rw.fire){
            jq('body').append('<img src="https://www.omwpx.com/640c8edb4e00e8070361316b14c58bbc/c/?sub1=philgenpubtic" height="1px" width="1px" />');
        }        
    }

    // custom code - cc#561019
    if (typeof(pageName)!='undefined' && pageName=="DisplayEventInfo.html"){
    
        //DisplayEventList / DisplayEventInfo / CartDisplay
        if(/:FELD17:WD0101M:|:FELD17:WD0101A:|:FELD17:WD1230P:|:FELD17:WD1229M:|:FELD17:WD1229P:|:FELD17:WD1230A:|:FELD17:WD1230M:|:FELD17:WD1229A:|:FELD17:WD1228A:|:FELD17:WD1228M:|:FELD17:WD1228P:|:FELD17:WD1227A:|:FELD17:WD1227M:|:FELD17:WD1227P:|:FELD17:WD1223A:|:FELD17:WD1223M:|:FELD17:WD1223P:|:FELD17:WD1224A:|:FELD17:WD1224M:|:FELD17:WD1226A:|:FELD17:WD1226M:|:FELD17:WD1226P:|:FELD17:WD1226P:/i.test(eventInfo.eventCode)) {
            document.write('<img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=f0yzdx2&ct=0:f3d11sx&fmt=3"/>');
        }
    }
    
}());


if(pageName == 'CartDisplay.html'){
    jQuery(window).load(function(){
        if(typeof CartAbandonment === 'function'){
            jq(function() {
                /*var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_XML_Conversion_6.8.17');
                cartPixels.launch();
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_XML_Conversion_6.15.17');
                cartPixels.launch();
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_7.26.17');
                cartPixels.launch();
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_9.19.17');
                cartPixels.launch();*/
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_XML_Conversion_9.29.17');
                cartPixels.launch();
                //cc#575818
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_11.20.17');
                cartPixels.launch();
                var cartPixels = new CartAbandonment('WFC_Cart_Abandonment_12.11.17');
                cartPixels.launch();
                //
            });
        }     
    });
}