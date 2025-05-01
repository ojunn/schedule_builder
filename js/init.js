import {TabulatorFull as Tabulator} from 'https://unpkg.com/tabulator-tables@5.5.2/dist/js/tabulator_esm.min.js';

// var table = new Tabulator("#classes-in-event", {
var table = new Tabulator("#classes-in-event", {
    movableRows:true,
    addRowPos:"bottom",
    columns:[
        {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
        {formatter:"rowSelection", titleFormatter:"rowSelection", hozAlign:"center", headerSort:false, cellClick:function(e, cell){
            cell.getRow().toggleSelect();
        }},
        {title:"番号", field:"id"}, // 番号は通常自動採番か固定なので編集不可のままにします
        {title:"種目", field:"class", editor:"input"},
        {title:"性別", field:"gender", editor:"select", editorParams:{values:{"男":"男", "女":"女"}}},
        {title:"級", field:"grade", editor:"input"},
        {title:"人数", field:"number", editor:"number", hozAlign:"right", editorParams:{step:1}}, // 数値入力用エディタ
        {title:"グループ分け", field:"grouping", editor:"input"},
        {title:"グループ数", field:"group_number", editor:"number", hozAlign:"right", editorParams:{step:1}}, // 数値入力用エディタ
        {title:"課題", field:"type", hozAlign:"center", editor:"input"},
        {title:"演技時間", field:"skating_time", editor:"input"}, // 例: "1:30"
        {title:"WU時間", field:"warm_up_time", hozAlign:"center", editor:"input"}, // 例: "4:00"
        {title:"加算時間", field:"off_ice_time", hozAlign:"center", editor:"input"}, // 例: "2:00"
        {title:"所要時間", field:"total_time", hozAlign:"center", editor:"input"}, // 例: "6:00"
        {title:"開始時刻", field:"start_time", hozAlign:"center", editor:"input"}, // 例: "8:00"
        {title:"終了時刻", field:"end_time", hozAlign:"center", editor:"input"}, // 例: "9:00"
    ],
    data:[
        {id: "1", class: "無初級成年女子", gender: "女", grade: "無初級", number: "4", grouping: "4", group_number: "1", type: "JSF0", skating_time: "1", warm_up_time: "4", off_ice_time: "2", total_time: "3", start_time: "8:00", end_time: "9:00"},
        {id: "2", class: "選手権男子", gender: "男", grade: "7級", number: "12", grouping: "6 6", group_number: "2", type: "ISUSr", skating_time: "4", warm_up_time: "6", off_ice_time: "2", total_time: "6", start_time: "9:00", end_time: "10:00"},
        {id: "3", class: "", gender: "", grade: "", number: "", grouping: "", group_number: "", type: "", skating_time: "1", warm_up_time: "", off_ice_time: "", total_time: "", start_time: "", end_time: ""},
        {id: "4", class: "", gender: "", grade: "", number: "", grouping: "", group_number: "", type: "", skating_time: "1", warm_up_time: "", off_ice_time: "", total_time: "", start_time: "", end_time: ""},
    ],
});

//Add row on "Add Row" button click
document.getElementById("add-row").addEventListener("click", function(){
    table.addRow({});
});

//Delete row on "Delete Row" button click
document.getElementById("del-row").addEventListener("click", function(){
    var selectedRows = table.getSelectedRows();
    if(selectedRows.length > 0){
        table.deleteRow(selectedRows);
    } else {
        alert("削除する行を選択してください。");
    }
});

