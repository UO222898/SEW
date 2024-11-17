"use script";
class Noticias {
    constructor() {
        if (window.File && window.FileReader && window.FileList && window.Blob) 
        {  
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else {document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        }


    }

    readInputFile(files){
        var file = files[0];
        var tipoTexto = /text.*/;
        if (file.type.match(tipoTexto)) 
          {
            var lector = new FileReader();
            lector.onload = function (evento) {
                lector.result.split("\n").forEach(item =>{
                    var noticia = item.split("_")
                    var article = document.createElement("article")
                    var encabezado = document.createElement("h3")
                    encabezado.textContent = noticia[0]
                    var cuerpo = document.createElement("p")
                    cuerpo.textContent = noticia[1]
                    var autor = document.createElement("p")
                    autor.textContent = noticia[2]

                    article.append(encabezado)
                    article.append(cuerpo)
                    article.append(autor)
                    document.querySelector("main").appendChild(article)
                })
            }      
            lector.readAsText(file)

            }
        else {
            errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
            }   

    }
}