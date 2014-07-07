function generateTOC(heading) {
  var container = jQuery('<section class="panel panel-default"></section>');
  var div = jQuery("<ul id='toc'></ul>");
  var content = jQuery('.sidebar');

  if (heading != undefined && heading != null) {
    container.append('<div class="panel-heading"><h3 class="panel-title">' + heading + '</h3></div>');
  }

  div.tableOfContents("#content",{startLevel: 2});
  container.append(div);
  content.prepend(container);
}