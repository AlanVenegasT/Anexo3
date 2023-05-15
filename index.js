//Importar libreria para generar pdfs a treves de plantillas
const pdf = require('html-pdf');
const generarPDF = () => {
    //Se va a guadar el html
    const contenido = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      .container {
        display: flex;
        width: 100%;
      }



      .column {
        height: auto;
        flex: 1;
      }
      
      .column-1 {
        background-color: #3B3838;
        color: white;
        border-top: 1px solid black;
        border-bottom: 0px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
        padding-right: 10px;
        font-weight: 600;
        font-size: 12px;
      }
      
      .column-2 {
        background-color: #D9D9D9;
        text-align: center;
        font-size: 9px; 
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid black;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .tituloysub{
        font-size: 10px; 
        text-align: center; 
        line-height: 0px;
      }

      .segundatablablanca{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #FFFFFF; 
      }

      .segundatablablanca2{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
      }
       
      .seccionIyII {
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }



      .fondbordseccI{
        background-color: #FFFFFF; 
        border-color: #A6A6A6;
      }

      .trestitulosSeccionII{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .titulosseccionII{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

        .tresopciones{
          width: 10%; 
          background-color: #ffffff; 
          border-color: #A6A6A6; 
          padding-left: 0px; 
          padding-right: 0px; 
          padding-top: 0px;
        }
        

        .contenedortresopciones{
          height: 100%; 
          display: flex; 
          justify-content: 
          space-between; 
          align-items: center;
        }



      .primeraopcion{
          width: 100%; 
          background-color: white; 
          height: 33.33%; 
          border-bottom: 1px solid #A6A6A6; 
          padding-bottom: 0px;
      }

      .segundaopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        border-bottom: 1px solid #A6A6A6; 
        padding-top: 0px; 
        padding-bottom: 4px;
      }

     

      .terceraopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        padding-top: 0px; 
        padding-bottom: 0px; 
        margin-bottom: 0px; 
      }

      .margendospx{
        margin-left: 2px;
      }

      .margendospxsize{
        margin-left: 2px;
        font-size: 6px;
      }

      .paddingtrecepx{
        padding-left: 13px;
      }

      .paddingcincopx{
        padding-left: 5px;
      }

      .diseñocolumnahojados{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .bodytablahojauno{
        width: 100%; 
        background-color: #ffffff; 
        border-color: #A6A6A6;
      }

      .espaciotabladearriba{
        margin-top: 12px;
      }

      .primerparrafo{
        font-size: 5.5px; 
        font-weight: 600; 
        text-align: center; 
        line-height: 8px; 
        padding-top: 35px;
      }

  

      .tituloseccionII{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .seccionIIsubtitulos3{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .temasseccionII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filaseccionII{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .casillaenblancoseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .contenedortresopcionesseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .tresopcionesseccionIII{
        height: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
      }

      .casillascirculos{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .tituloseccionIV{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .opcionesseccionIV{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .filasseccionIV{
        font-size: 8px; 
        text-align: center; 
        line-height: 4px;
      }

      .casillascirculostexto{
        width: 70%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: start; 
        line-height: 8px; 
        padding-left: 5px;
      }

      .firmasynombre{
        width: 50%; 
        height: 45px; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filafirmasynombre{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .parrafodos{
        font-size: 8px; 
        font-weight: 400; 
        text-align: justify; 
        line-height: 10px;
      }

      .interlineadodiezpx{
        line-height: 11px;
      }

      .interlineadoochopx{
        line-height: 8px;
      }

      .container2 {
        width: 100%;
        overflow: auto;
      }

      .seccion1{
        float: left;
        width: 49%; 
      }
      .seccion2{
        float: right;
        width: 49%;
        
        text-align: center;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
  
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        height: 0px;
      }
  
      th {
        background-color: #ddd;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      
      .container3 {
        position: absolute;
        display: flex;
        height: 80px; /* altura del 100% del viewport */
        width: 100%; /* ancho del 100% del viewport */

      }
      
      .tablacompleta {
        page-break-inside: avoid;
      }

      .seccion1columnrelleno{
        text-align: center; 
        line-height: 8px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; padding: 0;
      }

      .seccion1columnallenar{
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 0;
      }

      .seccion2columnrelleno{
        text-align: center; 
        line-height: 8px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 2px 2px 0 2px;
      }

      .seccion3columnrelleno{
        text-align: center; 
        line-height: 8px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 2px 2px 0 2px;
      }

      .seccion4columnrelleno{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6;  
        font-size: 7px;  
        padding: 2px 2px 0 2px; 
      }

      </style>
    


      <title>Document</title>
    </head>

    


  <body >

  

    <div> <!----------------------------------Hoja 1 ----------------------->

    <div class="container">
        <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
        <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
        Unidad de Gestión Industrial</div>
    </div>
 
    <div class="container">
        <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo III</h2>
    
        <p class="tituloysub" style="  padding-top: 0px; padding-bottom: 3px; line-height: 11px;" >Formato programa de Detección y Reparación de Fugas (PPCIEM)</p>
        </div>
    
    <div class="container2 ">
       <div class="seccion1"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2">Homoclave del formato</td>
       </tr>
       <tr>
         <td class="segundatablablanca">FF-ASEA-031</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Lugar de elaboración</td>
       </tr>
       <tr>
         <td class="segundatablablanca"> Hola </td>
       </tr>
     </table>
       </div>

       <div class="seccion2"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
       </tr>
       <tr>
         <td class="segundatablablanca"> 06 11 2018</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Fecha de elaboración</td>
       </tr>
       <tr ">
         <td class="segundatablablanca">DD MM AAAA</td>
       </tr>
     </table>
    </div>

    
    
    <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección I. Instrumentos</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 10%;" class="seccion1columnrelleno" >Instrumento de detección y/o medición</td>
                <td style="width: 11%;" class="seccion1columnrelleno" >Tipo de detección</td>
                <td style="width: 9%; " class="seccion1columnrelleno" >Principio de cuantificación</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Países en los cuales se permite el uso del instrumento y las aplicaciones en las que se emplea</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Límites de detección (ppm)</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Limitaciones</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Restricciónes de su uso</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Margen de error</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Uso de instrumentos y/o técnica complementaria</td>
                <td style="width: 10%;" class="seccion1columnrelleno" >En su caso, indicar el instrumento y/o técnica complementaria</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="text-align: center; width: 10%; " class="seccion1columnallenar" ></td>
                <td style="text-align: start;  width: 11%; " class="seccion1columnallenar" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6;" >
                  <label class=""><input type="radio"  name="estado">Cualitativa</label>
                  </div>

                  <div>
                  <label class=""><input type="radio"  name="estado">Cuantitativa</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 9%; " class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" >
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="text-align: center; width: 10%; " class="seccion1columnallenar"></td>
                <td style="text-align: start;  width: 11%; " class="seccion1columnallenar">
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6;" >
                  <label class=""><input type="radio"  name="estado">Cualitativa</label>
                  </div>

                  <div>
                  <label class=""><input type="radio"  name="estado">Cuantitativa</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 9%; " class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" >
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="text-align: center; width: 10%; "class="seccion1columnallenar" ></td>
                <td style="text-align: start;  width: 11%; " class="seccion1columnallenar">
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6;" >
                  <label class=""><input type="radio"  name="estado">Cualitativa</label>
                  </div>

                  <div>
                  <label class=""><input type="radio"  name="estado">Cuantitativa</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 9%; " class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" >
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="text-align: center; width: 10%;" class="seccion1columnallenar" ></td>
            </tr>
        </table>
    </div>
</div>




<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección II. Procedimientos</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion2columnrelleno" >Instrumento de detección y/o medición</td>
                <td style="width: 12%; " class="seccion2columnrelleno" >Procedimiento de prueba</td>
                <td style="width: 12%; " class="seccion2columnrelleno" >Procedimiento para determinar la distancia máxima de observación</td>
                <td style="width: 12%; " class="seccion2columnrelleno" >Procedimiennto para determinar la velocidad máxima del viento</td>
                <td style="width: 13%; " class="seccion2columnrelleno" >Procedimiennto para asegurar un entorno térmico adecuado</td>
                <td style="width: 13%; " class="seccion2columnrelleno" >Procedimiento para enfrentar interferencias en la detección adversas</td>
                <td style="width: 13%; " class="seccion2columnrelleno" >Procedimiento para enfrentar interferencias en la detección</td>
                <td style="width: 13%; " class="seccion2columnrelleno" >Procedimiento de detección de las Fugas</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion2columnrelleno" >Instrumento de detección y/o medición</td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion2columnrelleno" >Instrumento de detección y/o medición</td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion2columnrelleno" >Instrumento de detección y/o medición</td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 12%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
                <td style="width: 13%; " class="seccion2columnrelleno" ></td>
            </tr>
            
        </table>
    </div>
</div>
    

<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección III. Metodologías de estimación</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion3columnrelleno" >Metodología de estimación</td>
                <td style="width: 12%; " class="seccion3columnrelleno" >Procedimientos de cuantificación</td>
                <td style="width: 12%; " class="seccion3columnrelleno" >Nivel de confianza de la metodología</td>
                <td style="width: 12%; " class="seccion3columnrelleno" >Limitaciones</td>
                <td style="width: 13%; " class="seccion3columnrelleno" >Restricciones de su uso</td>
                <td style="width: 13%; " class="seccion3columnrelleno" >Países en los que se permite el uso de la metodología</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion3columnrelleno" >Metodología de estimación</td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 13%; " class="seccion3columnrelleno" ></td>
                <td style="width: 13%; " class="seccion3columnrelleno" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%; " class="seccion3columnrelleno" >Metodología de estimación</td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 12%; " class="seccion3columnrelleno" ></td>
                <td style="width: 13%; " class="seccion3columnrelleno" ></td>
                <td style="width: 13%; " class="seccion3columnrelleno" ></td>
            </tr>

            
            
        </table>
    </div>
</div>
    



     <div class="container">
        <p class="primerparrafo" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
        Federación (DOF).</p>
    </div>

   
  
  </div> <!----------------------------------Hoja 1 Fin ----------------------->

  <div> <!----------------------------------Hoja 2  -------------------------->


  <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="11" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección IV. Calendario del programa de Detección y Reparación de Fugas</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 9%; " class="seccion4columnrelleno" >Id del equipo o Componente</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Tipo de equipo o Componente</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Equipo crítico</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Inspección técnica de riesgo</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Es visible desde el sendero de observación</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Instrumento de detecciónn y/o medición</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Metodología de estimación</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Fecha en que se llevará a cabo la detección del primer trimestre (dd/mm)</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Fecha en que se llevará a cabo la detección del segundo trimestre (dd/mm)</td>
                <td style="width: 9%; " class="seccion4columnrelleno" >Fecha en que se llevará a cabo la detección del tercer trimestre (dd/mm)</td>
                <td style="width: 10%;" class="seccion4columnrelleno" >Fecha en que se llevará a cabo la detección del cuarto trimestre (dd/mm)</td>
            </tr>
            
            <tr style="width: 100%; ">
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style="height: auto; display: flex; flex-direction: column; width: 100%;">
                  <div style="height: 50%; display: flex; flex-direction: column; ">
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;" >
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                    </div>
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
                    </div>
                  </div>

                  <div style="height: 50%;">
                  <p style="border-bottom: 1px solid #A6A6A6; padding-bottom: 20px;">Interferencias</p>    
                  </div>
                </div>
                </td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 10%;" class="seccion4columnrelleno" ></td>
            </tr>


            <tr style="width: 100%; ">
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style="height: auto; display: flex; flex-direction: column; width: 100%;">
                  <div style="height: 50%; display: flex; flex-direction: column; ">
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;" >
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                    </div>
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
                    </div>
                  </div>

                  <div style="height: 50%;">
                  <p style="border-bottom: 1px solid #A6A6A6; padding-bottom: 20px;">Interferencias</p>    
                  </div>
                </div>
                </td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 10%;" class="seccion4columnrelleno" ></td>
            </tr>

            
            <tr style="width: 100%; ">
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" ></td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style=" display: flex; flex-direction: column;">
                  <div style="border-bottom: 1px solid #A6A6A6; margin-bottom: 14px; padding-bottom: 14px;" >
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div>
                  <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                
                </td>
                <td style="width: 9%;" class="seccion4columnrelleno" >
                <div style="height: auto; display: flex; flex-direction: column; width: 100%;">
                  <div style="height: 50%; display: flex; flex-direction: column; ">
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;" >
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                    </div>
                    <div style="border-bottom: 1px solid #A6A6A6; padding-bottom: 4px; padding-top: 4px;">
                    <label class="margendospxsize"><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
                    </div>
                  </div>

                  <div style="height: 50%;">
                  <p style="border-bottom: 1px solid #A6A6A6; padding-bottom: 20px;">Interferencias</p>    
                  </div>
                </div>
                </td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 9%; " class="seccion4columnrelleno" ></td>
                <td style="width: 10%;" class="seccion4columnrelleno" ></td>
            </tr>

        </table>
    </div>
</div>


  

  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td colspan="4" class="tituloseccionIV" >Sección V. Documentos anexos al formato</td>
      </tr>
      <tr class="filasseccionIV">
        <td class="opcionesseccionIV" >Si</td>
        <td class="opcionesseccionIV" >No</td>
        <td class="opcionesseccionIV" >No aplica</td>
        <td style="background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; text-align: start; line-height: 4px; padding-left: 5px;">Documento</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Documentación probatoria de la calibración del instrumento utilizado.</td>
      </tr>
     
      <tr class="filasseccionIV" >
        <td class="casillascirculos" style="padding: 0px; padding-top: 6px; padding-bottom: 6px;"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos" style="padding: 0px; padding-top: 6px; padding-bottom: 6px;"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos" style="padding: 0px; padding-top: 6px; padding-bottom: 6px;"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" style="padding: 0px; padding-top: 6px; padding-bottom: 6px; padding-left: 5px;">Documentación probatoria de la eficiencia de detección del instrumento homólogo.</td>
      </tr>

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td  class="seccionIyII" >Nombre del responsable técnico</td>
        <td  class="seccionIyII" >Firma del responsable técnico</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filafirmasynombre" >
        <td class="firmasynombre"> <label class="margendospx"> </td>
        <td class="firmasynombre"> <label class="margendospx"> </td>
      </tr>
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <div>
    <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
    LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
    Federación el 30 de septiembre de 2005.
     </p>
  <div>

  </div> <!----------------------------------Hoja 2 Fin ----------------------->

  <div> <!----------------------------------Hoja 3 --------------------------->


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo III </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 9px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        
        <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>
          <ol type="a" style=" font-size: 9px ">
                <li class="interlineadodiezpx" >Esta solicitud deberá ser llenada en computadora.</li>
                <li class="interlineadodiezpx" >Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.</li>
            </ol>

        <div style=" position: relative; width: 100%;">
        <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
        <div>
        <ol type="I" start="1" >
          <li>Sección I: Instrumentos</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadodiezpx" > Se deberá llenar un renglón por cada instrumento.</li>
                <li class="interlineadodiezpx" > Indicar el instrumento de detección y/o medición.</li>
                <li class="interlineadodiezpx" > Marcar con una X el tipo de detección según corresponda, cualitativo o cuantitativo.</li>
                <li class="interlineadodiezpx" > En caso de ser un instrumento de detección cuantitativa, describir el principio de cuantificación del instrumento.</li>
                <li class="interlineadodiezpx" > Indicar los países en los cuales se permite el uso del instrumento y en las aplicaciones en las que este se emplea.</li>
                <li class="interlineadodiezpx" > Indicar los límites de detección del instrumento establecidos por el fabricante en partes por millón.</li>
                <li class="interlineadodiezpx" > Describir las limitaciones del instrumento.</li>
                <li class="interlineadodiezpx" > Describir las restricciones del uso del instrumento.</li>
                <li class="interlineadodiezpx" > Indicar el margen de error del instrumento.</li>
                <li class="interlineadodiezpx" > Indicar si se utilizará un instrumento o una técnica complementaria adicionalmente al uso del instrumento.</li>
                <li class="interlineadodiezpx" > En su caso, especificar el instrumento o la técnica complementaria que se usará de acuerdo con lo establecido en el artículo 73 de
                las presentes Disposiciones.</li>
            </ol>
          <li>Sección II: Procedimientos</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Se deberá llenar un renglón por cada instrumento.</li>
                <li class="interlineadodiezpx" >Indicar el instrumento de detección y/o medición.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento de prueba del instrumento.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento para determinar la distancia máxima del personal para llevar a cabo la detección de las emisiones de
                metano.</li>
                <li class="interlineadodiezpx" > Describir el procedimiento para determinar la velocidad máxima de viento a la cual se puede llevar a cabo la detección de las emisiones
                de metano.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento para asegurar que la detección de las Fugas ocurra en un entorno térmico adecuado.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento para enfrentar condiciones de detección adversas.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento para enfrentar interferencias en la detección de Fugas.</li>
                <li class="interlineadodiezpx">Describir el procedimiento para llevar a cabo la detección de las Fugas.</li>
            </ol>
          <li>Sección III: Metodología de la estimación
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Se deberá llenar un renglón por cada metodología de estimación.</li>
                <li class="interlineadodiezpx" >Indicar la metodología de estimación utilizada.</li>
                <li class="interlineadodiezpx" >Describir el procedimiento de cuantificación de emisiones de metano de la metodología utilizada.</li>
                <li class="interlineadodiezpx" >Indicar el nivel de confianza de la metodología.</li>
                <li class="interlineadodiezpx" >Describir las limitaciones de la metodología.</li>
                <li class="interlineadodiezpx" >Describir las restricciones del uso de la metodología.</li>
                <li class="interlineadodiezpx" >Indicar los países en los cuales se permite el uso de la metodología utilizada y en las aplicaciones en las que esta se emplea.</li>
            </ol>
          </li>
          <li style=" padding-top: 5px;" >Sección IV: Calendario del programa de Detección y Reparación de Fugas
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Anotar el Id del equipo o Componente.</li>
                <li class="interlineadodiezpx" >Especificar el tipo de equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar con una X si se trata de equipo crítico o no.</li>
                <li class="interlineadodiezpx" >Indicar con una X si el equipo o Componente implica una Inspección técnica de riesgo.</li>
                <li class="interlineadodiezpx" >Indicar con una X si el equipo o Componente es visible desde el sendero de observación. En caso de existir interferencias,
                especificarlas.</li>
                <li class="interlineadodiezpx" >Indicar el instrumento con el que se inspeccionará dicho equipo o Componente</li>
                <li class="interlineadodiezpx" >Indicar la metodología utilizada para estimar las emisiones de metano derivadas de la Fuga. En caso de utilizarse más de una por
                equipo o Componente se deberá llenar un renglón por cada una.</li>
                <li class="interlineadodiezpx" >Indicar el día y mes en el que se llevará a cabo la detección en el primer trimestre.</li>
            </ol>
          </li>
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo III </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 9px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        <div style=" position: relative; width: 100%;">

        <div>
        <ol type="I" start="1" >
          <ol type="a" start="9" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Indicar el día y mes en el que se llevará a cabo la detección en el segundo trimestre.</li>
                <li class="interlineadodiezpx" >Indicar el día y mes en el que se llevará a cabo la detección en el tercer trimestre.</li>
                <li class="interlineadodiezpx" >Indicar el día y mes en el que se llevará a cabo la detección en el cuarto trimestre.</li>
            </ol>
          
          <li>Sección V: Documentos anexos al formato
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Adjuntar la documentación probatoria de la de la calibración del instrumento utilizado, de conformidad con lo establecido en el primer
                párrafo del artículo 73 de las presentes Disposiciones.</li>
                <li class="interlineadodiezpx" >Adjuntar la documentación probatoria de la eficiencia de detección del instrumento homólogo, de conformidad con lo establecido en
                el segundo párrafo del artículo 73 de las presentes Disposiciones.</li>
            </ol>
          </li>
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>
  
  </div> <!----------------------------------Hoja 3 Fin ----------------------->

  


 
   
  <!--Footer 1--> 
  <div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
  <div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="100px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
  <div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="60px" height="auto"  style="padding-bottom: 11px;"> </div>
  <div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="60px" height="auto"  style="padding-bottom: 15px;"> </div>
  <div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="60px" height="auto" style="padding-bottom: 15px;" > </div>
  <div style="width:39%; height: auto; display:inline-block; left:80%;"> 
      <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 8px; font-weight: 600; ">Contacto: </p>  
      <p style=" line-height: 9px; font-size: 7px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
      Colonia Jardines en la Montaña, C.P. 14210,
      Delegación Tlalpan, Ciudad de México,
      Teléfono (+52.55) 9126-0100</p>
  </div>


  </body>
  
  </html>
    `;

    const opciones = {
        "format": "A4", //A3, A4, A5, Legal, Letter 
        "orientation": "portrait",
        "border": {
            "top": ".8cm",
            "right": ".6cm",
            "bottom": ".6cm",
            "left": ".6cm",
        },
        childProcessOptions : {
          env : {
            OPENSSL_CONF : '/dev/null' ,
          } ,
        }
    }

    const directorio = "./public/files/constancia.pdf";

    pdf.create(contenido, opciones).toFile(directorio, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('archivo creado');
        }
    });
}

generarPDF();
