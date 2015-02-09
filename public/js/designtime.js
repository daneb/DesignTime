$(document).ready(function() {
  $(".ace_content").click(function() {
    $(".diagram").sequenceDiagram({theme: 'hand'});
  })
});