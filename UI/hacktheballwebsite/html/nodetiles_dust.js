(function(){dust.register("nodetiles.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row-fluid\"><div class=\"filter-box\"><button type=\"button\" class=\"btn btn-filter\" data-toggle=\"collapse\" data-target=\".isotope-sort\">Filter</button><ul class=\"isotope-sort categories\"><li class=\"isotope-sort-item\"><a href=\"#\" id=\"TileDefaultFilter\" class=\" badge all active \" data-filter=\"\">All</a></li><li class=\"isotope-sort-item\"><a href=\"#\"  class=\"badge news\" data-filter=\".OurStory\">Our Story</a></li><li class=\"isotope-sort-item\"><a href=\"#\"  class=\"badge projects\" data-filter=\".Projects\">Projects</a></li><li class=\"isotope-sort-item\"><a href=\"#\"  class=\"badge products\" data-filter=\".ProductsAndSolutions\">Products And Solutions</a></li><li class=\"isotope-sort-item\"><a href=\"#\"  class=\"badge maps\" data-filter=\".Maps\">Maps</a></li><li class=\"isotope-sort-item\"><a href=\"#\"  class=\"badge about\" data-filter=\".About\">About</a></li></ul></div>").section(ctx.get("Nodes"),ctx,{"block":body_1},null).write("</div><script src='../assets/js/jquery.isotope.min.js'></script><!--filter and masonry script--><script src='../assets/js/jquery.isotope.init.js'></script><!--custom settings--><script>$(function() {OipOpenMap = function () {var htmlContent = '</div><div id=\"map\" style=\"height:522px;\"></div>';/*$(\"#SelectedContentContainer\").html(htmlContent);*/OipShowHtmlInDetailPaneWithClose(htmlContent);OipSetupDefaultMap('map', false);$(document).scrollTop(0);return true;};$(\".oipclicktoview\").on('click', OipOpenArticle);$(\".mapclicktoview\").on('click', OipOpenMap);$(\"#TileDefaultFilter\").trigger('click');OipSetupDefaultMap('smalldefaultmap');var getOIParticleUrl = function (type, id) {var prefix;var suffix = \"_DefaultView.phtml\";switch (type) {case \"news\":prefix = \"AaltoGlobalImpact.OIP.Blog_\";break;case \"activity\":prefix = \"AaltoGlobalImpact.OIP.Activity_\";break;}return prefix + id + suffix;};var getURLParameter = function (name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, \"\"])[1].replace(/\\+/g, '%20')) || null;};var typePar = getURLParameter(\"type\");var idPar = getURLParameter(\"id\");if (typePar != null && idPar != null) {var oipArticleUrl = getOIParticleUrl(typePar, idPar);OipOpenArticle(oipArticleUrl);window.history.pushState(\"string\", \"Aalto Global Impact\", \"oip-layout-landing.phtml\");}});</script>");}function body_1(chk,ctx){return chk.write("<ul class=\"gallery four_col\"><!-- three_col four_col two_col -->").section(ctx.get("CollectionContent"),ctx,{"block":body_2},null).write("<li class=\"Maps\"><a class=\"hover mapclicktoview\" href=\"#\"><div style=\"height:220px;width:220px;\" id=\"smalldefaultmap\"></div><span class=\"plus\"></span></a><div class=\"entry-summary\"><h4><a class=\"mapclicktoview\" href=\"#\">Overview Map of Earth House Systems' Activities</a></h4><div>Recent Earth House Systems' activities presented on a map.</div><div><a href=\"#Maps\" class=\"badge maps\">Maps</a></div><!--horizontal description --><p class=\"w5\"><a href=\"#Maps\" class=\"badge maps\">Maps</a><br><i class=\"icon-group\"></i>").section(ctx.get("Authors"),ctx,{"block":body_10},null).write("<br><i class=\"icon-calendar\"></i>").reference(ctx.get("TimestampText"),ctx,"h").write("</p></div><!--close entry-summary--></li></ul>");}function body_2(chk,ctx){return chk.write("<li class=\"").section(ctx.get("Categories"),ctx,{"block":body_3},null).write("\">").exists(ctx.get("ImageBaseUrl"),ctx,{"block":body_5},null).write("<div class=\"entry-summary\"><h4><a class=\"oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\">").reference(ctx.get("Title"),ctx,"h").write("</a></h4><div>").reference(ctx.get("Excerpt"),ctx,"h").write("</div><p class=\"w5\">").section(ctx.get("Categories"),ctx,{"block":body_6},null).write("<br><span class=\"badge\"><i class=\"icon-group\"></i></span> ").section(ctx.get("Authors"),ctx,{"block":body_8},null).write("<br><span class=\"badge\"><i class=\"icon-calendar\"></i></span>").reference(ctx.get("TimestampText"),ctx,"h").write("</p></div></li>");}function body_3(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_4},null);}function body_4(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}function body_5(chk,ctx){return chk.write("<a class=\"hover oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\"><img src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop.jpg\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_6(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_7},null);}function body_7(chk,ctx){return chk.write("<a href=\"#\" class=\"badge ").reference(ctx.get("Content"),ctx,"h").write("\">").reference(ctx.get("Content"),ctx,"h").write("</a>");}function body_8(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_9},null);}function body_9(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}function body_10(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_11},null);}function body_11(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}return body_0;})();