import {Tabulator, FormatModule, EditModule} from 'https://unpkg.com/tabulator-tables@5.5.2/dist/js/tabulator_esm.min.js';
Tabulator.registerModule([FormatModule, EditModule]);

var table = new Tabulator("#classes-in-event", {
    columns:[
        {title:"番号", field:"name"},
        {title:"種目", field:"class"},
        {title:"性別", field:"gender"},
        {title:"級", field:"grade"},
        {title:"人数", field:"number"},
        {title:"グループ分け", field:"grouping"},
        {title:"グループ数", field:"group-number"},
        {title:"課題", field:"type", hozAlign:"center"},
        {title:"WU時間", field:"warm-up-time", hozAlign:"center"},
        {title:"加算時間", field:"off-ice-time", hozAlign:"center"},
        {title:"所要時間", field:"total-time", hozAlign:"center"},
        {title:"開始時刻", field:"start-time", hozAlign:"center"},
        {title:"終了時刻", field:"end-time", hozAlign:"center"},
    ],
});