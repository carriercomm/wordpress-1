jQuery(document).ready(function(b){var a=function(){var f=b("#TB_window"),e=b(window).width(),d=b(window).height(),c=(720<e)?720:e;if(f.size()){f.width(c-50).height(d-45);b("#TB_iframeContent").width(c-50).height(d-75);f.css({"margin-left":"-"+parseInt(((c-50)/2),10)+"px"});if(!(b.browser.msie&&b.browser.version.substr(0,1)<7)){f.css({top:"20px","margin-top":"0"})}}return b("a.thickbox").each(function(){var g=b(this).attr("href");if(!g){return}g=g.replace(/&width=[0-9]+/g,"");g=g.replace(/&height=[0-9]+/g,"");b(this).attr("href",g+"&width="+(c-80)+"&height="+(d-85))})};a().click(function(){b("#TB_title").css({"background-color":"#222",color:"#cfcfcf"});b("#TB_ajaxWindowTitle").html("<strong>"+plugininstallL10n.plugin_information+"</strong>&nbsp;"+b(this).attr("title"));return false});b("#install-plugins tbody.plugins tr").click(function(){b(this).find(".action-links a.onclick").click();return false});b("#plugin-information #sidemenu a").click(function(){var c=b(this).attr("name");b("#plugin-information-header a.current").removeClass("current");b(this).addClass("current");b("#section-holder div.section").hide();b("#section-"+c).show();return false})});