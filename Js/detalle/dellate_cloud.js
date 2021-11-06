$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Hola")
    if (searchParams.has('id')){
        console.log("Entre a nube")
        let id = searchParams.get('id')
        consultarByIdCom(id);
    }
});

function consultarByIdCom(id){
    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            
            if (respuesta.items.length==1){
                llenarComputer(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el Computer con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarComputer(item){
    $("#IDC2").val(item.id);
    $("#MARCA2").val(item.brand);
    $("#MODELO2").val(item.model);
    $("#CATEGORY_ID2").val(item.category_id);
    $("#NOMBREC2").val(item.name);
}