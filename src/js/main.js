import $ from "jquery";
import '../css/index.css';

$(function() {
    $("li:even").css("backgroundColor", "pink");
    $("li:odd").css("backgroundColor", "green");
})