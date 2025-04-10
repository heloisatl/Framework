var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configHTMLCabecalho() {
    let aux = document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>' + aux + '</h1>';
    return ctxCabecalho;
}

function configHtmlLinks() {
    links = document.querySelector("#links").value;
    vetLinks = links.split(";");
    ctxLinks = "";
    for (let i = 0; i < vetLinks.length; i++) {
        ctxLinks += '<a href="#">' + vetLinks[i] + '</a>';
    }
    return ctxLinks;
}

function configEstiloCabecalho() {
    const bg = document.getElementById("corFundo").value;
    const corFonte = document.getElementById("corFonte").value;
    const tamFonte = document.getElementById("tamFonte").value;
    const alinhamento = document.getElementById("alinhamentoTextoCabecalho").value;
    const fonteCabecalho = document.getElementById("fonteCorpo").value;

    ctxCabecalho = "#cabecalho{\n";
    ctxCabecalho += " background-color:" + bg + ";\n";
    ctxCabecalho += " color:" + corFonte + ";\n";
    ctxCabecalho += " font-size:" + tamFonte + "px;\n";
    ctxCabecalho += " font-family: '" + fonteCabecalho + "', sans-serif;\n";
    ctxCabecalho += " text-align: " + alinhamento + ";\n";
    ctxCabecalho += "}\n";

    return ctxCabecalho;
}



// Estilo do body do site
function configEstiloCorpo() {

    const bg = document.getElementById("corFundoCorpo").value;
    const corFonte = document.getElementById("corFonteCorpo").value;
    const tamFonte = document.getElementById("tamFonteCorpo").value;

    ctxBody = "body {\n";
    ctxBody += " background-color: " + bg + ";\n";
    ctxBody += " color: " + corFonte + ";\n";

    ctxBody += " font-size: " + tamFonte + "px;\n";
    ctxBody += "}\n";

    return ctxBody;
}
//texto do body
function configHTMLCorpo() {
    let texto = document.getElementById("textoCorpo").value;
    return "<h1 id='textoCorpoTexto'>" + texto + "</h1>";
}


function configEstiloTextoCorpo() {
    const corTexto = document.getElementById("corFonteCorpo").value;
    const tamTexto = document.getElementById("tamFonteCorpo").value;
    const alinhamento = document.getElementById("alinhamentoTexto").value;
    const fonteCorpo = document.getElementById("fonteCorpo").value;

    let estilo = "#textoCorpoTexto {\n";
    estilo += " color: " + corTexto + ";\n";
    estilo += " font-size: " + tamTexto + "px;\n";
    estilo += " font-family: '" + fonteCorpo + "', sans-serif;\n";
    estilo += " text-align: " + alinhamento + ";\n";
    estilo += "}\n";

    return estilo;
}

function configEstiloLinks() {
    const corLink = document.getElementById("corLinks").value;
    const estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    const hoverAtivo = document.getElementById("ativarHover").checked;
    const corHover = document.getElementById("corHover").value;
    const tamFonteLinks = document.getElementById("tamFonteLinks").value;


    ctxLinks = "a{\n color:" + corLink + ";\n";
    ctxLinks += " font-size: " + tamFonteLinks + "px;\n";
    ctxLinks += " text-decoration: " + (estiloLinks === "0" ? "none" : "underline") + "\n";
    let aux = estiloLinks == "0" ? "none" : "underline";
    ctxLinks += "}\n";

    //hover ativado:
    if (hoverAtivo) {
        ctxLinks += "a:hover {\n";
        if (corHover) {
            ctxLinks += "color: " + corHover + ";\n";
            ctxLinks += " font-size: " + tamFonteLinks + "px;\n";

        } ctxLinks += "text-decoration: underline;\n"; //fallback
        ctxLinks += "}\n";
    }

    return ctxLinks;
}

function gerarCodigo() {
    console.log("Função gerarCodigo chamada");
    //Código para CSS
    let codeCSS = document.querySelector("#codeCSS");

    let css = "";
    try {
        css += configEstiloCabecalho();
        css += configEstiloCorpo();
        css += configEstiloTextoCorpo();
        css += configEstiloLinks();
    } catch (e) {
        console.error("Erro ao gerar CSS:", e);
    }

    codeCSS.value = css;
    //Código para HTML
    let codeHTML = document.querySelector("#codeHTML");
    ctxHTML = "<html>\n<head>\n" +
        "<link rel='stylesheet' href='estilo.css'>\n" +
        "<title>Minha página</title>\n" +
        "</head>\n<body>" +
        "<div id='cabecalho'>" + configHTMLCabecalho() + "</div>\n" +
        "<nav id='links'>\n" + configHtmlLinks() + "\n</nav>\n" +
        "<div id='conteudo'>" + configHTMLCorpo() + "</div>\n" +

        "</body>\n</html>";

    console.log("HTML gerado:", ctxHTML);
    codeHTML.value = ctxHTML;
}

function download(campo, arquivo) {
    var text = document.getElementById(campo).value;
    var blob = new Blob([text], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = arquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
