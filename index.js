// ==UserScript==
// @name        ID MANAGER
// @namespace   Destr00
// @match       https://idigitais.digisac.co/
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @version     1.0
// @author      Destr00
// @description GUI CONTROL FOR ID
// @require     https://github.com/AugmentedWeb/UserGui/raw/Release-1.0/usergui.js
// ==/UserScript==

const Gui = new UserGui;
const GuiPlanos = new UserGui;

Gui.settings.window.title = "ID MANAGER"; // set window title
Gui.settings.window.centered = true; // GUI starts at the center of the screen
Gui.settings.window.external = false; // GUI opens up externally

// Configurações da Nova Gui de planos
GuiPlanos.settings.window.title = "Planos";
GuiPlanos.settings.window.centered = true; // GUI starts at the center of the screen

let tempoDeRecarregamento = 120000
const valorDeRecarregamentoEmMinutos = tempoDeRecarregamento / 60000

// CRIANDO GUI
Gui.addPage("Main", `
    <p class="text-center fw-bold">Selecione uma opção:</p>
    <div class="formbuilder-button form-group btn-group-vertical field-button-procedimentos">
        <button type="button" class="btn-outline-primary btn-" name="button-procedimentos" access="false" style="default" id="button-procedimentos">Procedimentos</button>
    </div>
    <div class="formbuilder-button form-group btn-group-vertical field-button-planos">
        <button type="button" class="btn-outline-primary btn-" name="button-planos" access="false" style="default" id="button-planos">Planos</button>
    </div>
    <div class="formbuilder-button form-group btn-group-vertical field-button-sistema">
        <button type="button" class="btn-outline-primary btn-" name="button-sistema" access="false" style="default" id="button-sistema">Sistema</button>
    </div>
    <p class="text-center fs-6 fw-bold"> By: Destr00 (dudu)<p>
`);

Gui.addPage('Refresh', `
    <p class="text-center fw-bold font-monospace">Está pagina serve para desabilitar ou habilitar o recarregamento automatico da pagina.</p>
    <div class="formbuilder-button form-group field-button-1">
        <button type="button" class="btn-outline-success  btn" name="button-1" access="false" style="default" id="button-1">Iniciar recarregamento</button>
    </div>
    <div class="formbuilder-button form-group field-button-2">
        <button type="button" class="btn-outline-danger btn" name="button-2" access="false" style="default" id="button-2">Parar recarregamento</button>
    </div>
    <p class="text-center fs-6 fw-bold"> By: Destr00 (dudu)<p>
  `);

// NEW GUI DE PLANOS
GuiPlanos.addPage("Planos", `
    <div class="container-main">
        <ul class="list-group">
            <li class="list-group-item active">Planos COM FIDELIDADE de 24 meses</li>
            <li class="list-group-item list-group-item-action list-group-item-success">200 Mega por apenas R$ 95,90 por mês</li>
            <li class="list-group-item list-group-item-action list-group-item-success">400 Mega por apenas R$ 119,90 por mês</li>
            <li class="list-group-item list-group-item-action list-group-item-success">600 Mega por apenas R$ 165,90 por mês</li>
            <li class="list-group-item list-group-item-danger">TAXA DE ADESÃO (GRATIS) + 3 MESES (GRATIS)</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action active">Planos COM FIDELIDADE de 12 meses</li>
            <li class="list-group-item list-group-item-action list-group-item-success">200 Mega por apenas R$ 95,90 por mês</li>
            <li class="list-group-item list-group-item-action list-group-item-success">400 Mega por apenas R$ 119,90 por mês</li>
            <li class="list-group-item list-group-item-action list-group-item-success">600 Mega por apenas R$ 165,90 por mês</li>
            <li class="list-group-item list-group-item-action list-group-item-danger">APENAS A TAXA DE ADESÃO É GRATIS</li>
        </ul>
    </div>
    <div class="formbuilder-button form-group btn-group-vertical field-button-empresa">
        <p class="text-center fw-bold font-monospace"> Planos sem Fidelidade é empresariais você pode verificar pelo <span style="color: blue;">site ofical<span><p>
    </div>
`);

// INICIANDO GUI E ADICIONANDO FUNÇÃO AOS BOTÕES.
Gui.open(() =>{
    recarregamentoAutomatico(tempoDeRecarregamento);
    Gui.event("button-planos", 'click', () => {
        MostrarPlanos()
    });
    Gui.event("button-procedimentos", 'click', () => {
        window.open('linkprivXD', '_blank')
    })
    Gui.event("button-sistema", 'click', () => {
        window.open('linkprivXD', '_blank')
    })
})

// FUNCÕES AUXILIARES.
function recarregamentoAutomatico(value) {
    Gui.event("button-1", 'click', () => {
        setInterval(() => {window.location.reload()}, value);
        Gui.window.alert(`Recarregamento automatico inicido com ${valorDeRecarregamentoEmMinutos} minutos`)

    Gui.event("button-2", 'click', () => {
        clearInterval(inter);
        Gui.window.alert(`Recarregamento Automatico parado.`)
        });
    });
};

function MostrarPlanos () {
    GuiPlanos.open(()=> {
        GuiPlanos.event("button-empresa", 'click', () => {
            window.open("linkprivXD", '_blank')
        })
    })
}

const inter = setInterval(() => {window.location.reload()}, tempoDeRecarregamento);

// BY: DESTR00