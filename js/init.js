import {Tabulator, FormatModule, EditModule} from 'https://unpkg.com/tabulator-tables@5.5.2/dist/js/tabulator_esm.min.js';
Tabulator.registerModule([FormatModule, EditModule]);

var table = new Tabulator("#classes-in-event", {
    columns:[
        {title:"番号", field:"id"},
        {title:"種目", field:"class"},
        {title:"性別", field:"gender"},
        {title:"級", field:"grade"},
        {title:"人数", field:"number"},
        {title:"グループ分け", field:"grouping"},
        {title:"グループ数", field:"group_number"},
        {title:"課題", field:"type", hozAlign:"center"},
        {title:"演技時間", field:"skating_time"},
        {title:"WU時間", field:"warm_up_time", hozAlign:"center"},
        {title:"加算時間", field:"off_ice_time", hozAlign:"center"},
        {title:"所要時間", field:"total_time", hozAlign:"center"},
        {title:"開始時刻", field:"start_time", hozAlign:"center"},
        {title:"終了時刻", field:"end_time", hozAlign:"center"},
    ],
    data:[
        {id: "1", class: "無初級成年女子", gender: "女", grade: "無初級", number: "4", grouping: "4", group_number: "1", type: "JSF0", skating_time: "1", warm_up_time: "4", off_ice_time: "2", total_time: "3", start_time: "8:00", end_time: "9:00"},
        {id: "2", class: "", gender: "", grade: "", number: "", grouping: "", group_number: "", type: "", skating_time: "1", warm_up_time: "", off_ice_time: "", total_time: "", start_time: "", end_time: ""},
    ],
});