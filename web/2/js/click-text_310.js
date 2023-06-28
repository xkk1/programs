// 基于 jQuery 的点击彩色文字显示
var click_text = function() {
    // 单击的次数
    var num = 0;
    // 显示的文字
    var text_array = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    // 显示的颜色
    var color_array = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500"];
    return {
        "add_num": function() {
            num++;
            return num;
        },
         "num": function() {
            return num;
        },
        "text": function() {
            return text_array[click_text.num() % text_array.length];
        },
        "color": function() {
            return color_array[click_text.num() % color_array.length];
        }
    };
}();
$(document).ready(function () {
    $("body").click(function (e) {
        var $i = $("<span/>").text(click_text.text());
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": click_text.color(),
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
        }); 
        click_text.add_num();
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
    });
});