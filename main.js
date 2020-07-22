var applicationName = 'SAAVpedia'; //please provide a name for your application
var clientInfo='KBSI';
var nx = new Nextprot.Client(applicationName, clientInfo);
var searchData = [];
var codeName = "";

// Request json data from SAAVpedia.
function makeSearch(uniprotName) {
    $.ajax({
        url: 'https://www.saavpedia.org/api/SAAVretriever/json/?input='+uniprotName,
        method: "GET",
        dataType: "json",
        success: function(Data, status, jqxhr){
            // If there is no data in SAAVpedia,
            if (Data.length == 0){
                noData();
            }
            // else,
            else{
                Data.sort(sortData);
                setData(Data);
                $("#loading").remove();
                makeTable(Data);
            }
        },
        error: function(jqxhr, status, error){
            console.log(error);
        }
    })
    return false;
}

// Sort by ID.
function sortData(a, b){
    if (a.ID == b.ID){return 0} return a.ID > b.ID ? 1 : -1;
}

// No data indication.
function noData(){
    $("#tableDiv").append("<div id='noDataDiv' style='height:50vh'><h1 style='text-align:center;position: relative; top: 50%;'>There is no data you searched.</h1></div>")
}

function setData(Data){
    for (var i = 0; i<Data.length; i++){
        var Ref_Alt = Data[i]['SAAV_Ref'].split(':');
        Data[i]['SAAV_Ref'] = Ref_Alt[0];
        Data[i]['SAAV_Alt'] = Ref_Alt[1];
    }
    searchData = Data;
    return Data;
}

// Make table by Bootstrap Table.
function makeTable(jsonData){
    $('#table-bootstrap').bootstrapTable({
        data: jsonData,
        cache: false,
        pagination: true,
        search: true,
        pageSize: 10,
        pageList: [10, 15, 20],
        minimumCountColumns: 2,
        clickToSelect: true,
        columns: [{
            field: 'ID', title: 'SAAVpedia ID', align: 'center',  sortable:"true"
            // visible: false
        },{
            field: 'SNV_Chr', title: 'SNV_Chr', align: 'center',  sortable:"true"
        },{
            field: 'SNV_Pos', title: 'SNV_Pos', align: 'center',  sortable:"true"
        },{
            field: 'SNV_Ref', title: 'SNV_Ref', align: 'center',  sortable:"true"
        },{
            field: 'SNV_Alt', title: 'SNV_Alt', align: 'center',  sortable:"true"
        },{
            field: 'SNV_ID', title: 'SNV_ID', align: 'center',  sortable:"true"
        },{
            field: 'SNV_VT', title: 'SNV_VT', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_Pos', title: 'SAAV_Pos', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_Ref', title: 'SAAV_Ref', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_Alt', title: 'SAAV_Alt', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_RS', title: 'SAAV_RS', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_AS', title: 'SAAV_AS', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_filter', title: 'SAAV_filter', align: 'center',  sortable:"true"
        },{
            field: 'SAAV_SDM', title: 'SAAV_SDM', align: 'center',  sortable:"true"
        },{
            field: 'PROTEIN_Nextprot', title: 'PROTEIN_Nextprot', align: 'center',  sortable:"true"
        },{
            field: 'Info', title: 'Info', align: 'center',  sortable:"true"
        },{
            field: 'Confirmed by LC-MS/MS', title: 'Confirmed by LC-MS/MS', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_OC', title: 'SNV_1000G_OC', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_T_MAF', title: 'SNV_1000G_T_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_EAS_MAF', title: 'SNV_1000G_EAS_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_AMR_MAF', title: 'SNV_1000G_AMR_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_EUR_MAF', title: 'SNV_1000G_EUR_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_AFR_MAF', title: 'SNV_1000G_AFR_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_1000G_SAS_MAF', title: 'SNV_1000G_SAS_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_ESP_OC', title: 'SNV_ESP_OC', align: 'center',  sortable:"true"
        },{
            field: 'SNV_ESP_AF_MAF', title: 'SNV_ESP_AF_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_ESP_EU_MAF', title: 'SNV_ESP_EU_MAF', align: 'center',  sortable:"true"
        },{
            field: 'SNV_ExAC_OC', title: 'SNV_ExAC_OC', align: 'center',  sortable:"true"
        },{
            field: 'PTM', title: 'PTM', align: 'center',  sortable:"true"
        },{
            field: 'PTM_Class', title: 'PTM_Class', align: 'center',  sortable:"true"
        },{
            field: 'VSC_Phenotype', title: 'VSC_Phenotype', align: 'center',  sortable:"true"
        },{
            field: 'VSC_Source', title: 'VSC_Source', align: 'center',  sortable:"true"
        },{
            field: 'VSC_OID', title: 'VSC_OID', align: 'center',  sortable:"true"
        },{
            field: 'VSC_Phe_CLS', title: 'VSC_Phe_CLS', align: 'center',  sortable:"true"
        },{
            field: 'VSC_Phe_CLS_ID', title: 'VSC_Phe_CLS_ID', align: 'center',  sortable:"true"
        },{
            field: 'PROTEIN_UniProt', title: 'PROTEIN_UniProt', align: 'center',  sortable:"true"
        },{
            field: 'BRP_PDB', title: 'BRP_PDB', align: 'center',  sortable:"true"
        },{
            field: 'BRP_Ensembl_Pro', title: 'BRP_Ensembl_Pro', align: 'center',  sortable:"true"
        },{
            field: 'BRT_Ensembl_Tra', title: 'BRT_Ensembl_Tra', align: 'center',  sortable:"true"
        },{
            field: 'BRG_Ensembl_Gen', title: 'BRG_Ensembl_Gen', align: 'center',  sortable:"true"
        },{
            field: 'BRG_GF', title: 'BRG_GF', align: 'center',  sortable:"true"
        },{
            field: 'BRG_GD', title: 'BRG_GD', align: 'center',  sortable:"true"
        },{
            field: 'BRG_GS', title: 'BRG_GS', align: 'center',  sortable:"true"
        },{
            field: 'BRG_HGNC', title: 'BRG_HGNC', align: 'center',  sortable:"true"
        },{
            field: 'BRG_UCSC', title: 'BRG_UCSC', align: 'center',  sortable:"true"
        },{
            field: 'BRG_Entrez', title: 'BRG_Entrez', align: 'center',  sortable:"true"
        },{
            field: 'BRG_RefSeq', title: 'BRG_RefSeq', align: 'center',  sortable:"true"
        },{
            field: 'BRG_ERA', title: 'BRG_ERA', align: 'center',  sortable:"true"
        },{
            field: 'BRG_GCosmic', title: 'BRG_GCosmic', align: 'center',  sortable:"true"
        },{
            field: 'BRPH_Omim', title: 'BRPH_Omim', align: 'center',  sortable:"true"
        },{
            field: 'BRDR_PharmGKB', title: 'BRDR_PharmGKB', align: 'center',  sortable:"true"
        },{
            field: 'BRDR_CHEMBL', title: 'BRDR_CHEMBL', align: 'center',  sortable:"true"
        },{
            field: 'BRL_PMID', title: 'BRL_PMID', align: 'center',  sortable:"true"
        },{
            field: 'BRB_STRING', title: 'BRB_STRING', align: 'center',  sortable:"true"
        },{
            field: 'BRB_Vega', title: 'BRB_Vega', align: 'center',  sortable:"true"
        },{
            field: 'BRB_ENA', title: 'BRB_ENA', align: 'center',  sortable:"true"
        },{
            field: 'VSD_DN', title: 'VSD_DN', align: 'center',  sortable:"true"
        },{
            field: 'VSD_DT', title: 'VSD_DT', align: 'center',  sortable:"true"
        },{
            field: 'VSD_PGT', title: 'VSD_PGT', align: 'center',  sortable:"true"
        },{
            field: 'VSD_DB', title: 'VSD_DB', align: 'center',  sortable:"true"
        },{
            field: 'VSA_EC', title: 'VSA_EC', align: 'center',  sortable:"true"
        },{
            field: 'SNV_Strand', title: 'SNV_Strand', align: 'center',  sortable:"true"
        },{
            field: 'VSC_Phe_Top_CLS', title: 'VSC_Phe_Top_CLS', align: 'center',  sortable:"true"
        }
    ]
    });
    $("#exportExcelButton").append('<input type="button" id="excelFileExport" class="btn btn-secondary" value="Download xlsx file(JSON)" />');
}

var excelHandler = {
    getExcelFileName : function(){
        return codeName+'.xlsx';
    },
    getSheetName : function(){
        return codeName+' Sheet';
    },
    getExcelData : function(){
        return searchData; 
    },
    getWorksheet : function(){
        return XLSX.utils.json_to_sheet(this.getExcelData());
    }
}


function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

// Sort in the same order as the table showing the key order.
function sortKey(){
    let keys = ["ID", "SNV_Chr", "SNV_Pos", "SNV_Ref", "SNV_Alt", "SNV_ID", "SNV_VT", "SAAV_Pos", "SAAV_Ref", "SAAV_Alt", "SAAV_RS", "SAAV_AS", "SAAV_filter", "SAAV_SDM", "PROTEIN_Nextprot", "Info", "Confirmed by LC-MS/MS", "SNV_1000G_OC", "SNV_1000G_T_MAF", "SNV_1000G_EAS_MAF", "SNV_1000G_AMR_MAF", "SNV_1000G_EUR_MAF", "SNV_1000G_AFR_MAF", "SNV_1000G_SAS_MAF", "SNV_ESP_OC", "SNV_ESP_AF_MAF", "SNV_ESP_EU_MAF", "SNV_ExAC_OC", "PTM", "PTM_Class", "VSC_Phenotype", "VSC_Source", "VSC_OID", "VSC_Phe_CLS", "VSC_Phe_CLS_ID", "PROTEIN_UniProt", "BRP_PDB", "BRP_Ensembl_Pro", "BRT_Ensembl_Tra", "BRG_Ensembl_Gen", "BRG_GF", "BRG_GD", "BRG_GS", "BRG_HGNC", "BRG_UCSC", "BRG_Entrez", "BRG_RefSeq", "BRG_ERA", "BRG_GCosmic", "BRPH_Omim", "BRDR_PharmGKB", "BRDR_CHEMBL", "BRL_PMID", "BRB_STRING", "BRB_Vega", "BRB_ENA", "VSD_DN", "VSD_DT", "VSD_PGT", "VSD_DB", "VSA_EC", "SNV_Strand", "VSC_Phe_Top_CLS"];
    var newData = [];
    for (var i = 0; i<searchData.length; i++){
        var tmpData = {};
        for (var j = 0; j<keys.length; j++){
            tmpData[keys[j]] = searchData[i][keys[j]];
        }
        newData[i] = tmpData;
    }
    // console.log(newData);
    searchData = newData;
}

// Save file
function exportExcel(){ 
    sortKey();
    
    var wb = XLSX.utils.book_new();
    var newWorksheet = excelHandler.getWorksheet();

    XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName());
    
}

// button click event
$(document).ready(function() { 
    $("#exportExcelButton").click(function(){
        exportExcel();
    });
});

$.getJSON("https://api.nextprot.org/entry/" + nx.getEntryName() + "/identifier.json", function (data) {
    makeSearch(data.entry.uniprotName);
    codeName = data.entry.uniprotName;
});


