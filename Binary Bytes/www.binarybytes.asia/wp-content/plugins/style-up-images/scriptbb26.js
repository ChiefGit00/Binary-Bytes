jQuery.noConflict(); jQuery(function(e){ var desc; e('img').each(function() { if( e(this).hasClass("style-up-img") ){ e(this).wrap('<div class="style-up-wrap"></div>'); e(this).after('<div class="style-up-hover"><span>'+e(this).attr("alt")+'</span></div>'); e(".style-up-wrap").hover( function(){ var w = e(this).find("img").width(); var h = e(this).find("img").height(); e(this).find(".style-up-hover").addClass("display-inline"); e(this).css("width", w+"px"); e(this).css("height", h+"px"); }, function(){ e(this).find(".style-up-hover").removeClass("display-inline"); } ); } }); });