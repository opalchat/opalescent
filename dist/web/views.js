/* OPAL VIEWS
 * 
 * Compiled views.
 */
$.views = {
 "modules.apps.main": "<nav class=\"apps\">\n <table>\n  <tbody>\n   <tr>\n    <td> \n  <ul>\n   {{ $.apps.forEach(function(app){ }}\n   <li class=\"app {{=app.class}}\" data-appname=\"{{=app.name}}\" data-appid=\"{{=app.id}}\">\n    <span class=\"icon {{=app.icon}}\"></span>\n    <span class=\"name text\">{{=app.name}}</span>\n   </li>\n   {{ }); }}\n  </ul> \n </td>\n   </tr>\n  </tbody>\n </table></nav>",
 "modules.contextmenu.main": "{{ function generateMenu(obj){ }}\n <li><label>{{=obj.label-}}</label>\n  {{ if (obj.menu){ }} <ul> {{ generateMenu(obj.menu) }} </ul> {{ } }}\n </li>\n{{ }; }}\n\n<!--\n[\n {\n  \"label\": \"Cut\"\n },\n {\n  \"label\": \"Copy\"\n },\n {\n  \"label\": \"More\",\n  \"menu\": [\n   {\n    \"label\": \"Test\"\n   },\n   {\n    \"label\": \"Another Test.\"\n   }\n  ]\n }\n]\n-->\n\n<nav class=\"context\"> {{ generateMenu(menu) }}</nav>"
}