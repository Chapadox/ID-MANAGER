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

Gui.settings.window.title = "ID MANAGER"; // set window title
Gui.settings.window.centered = true; // GUI starts at the center of the screen
Gui.settings.window.external = false; // GUI opens up externally

// CRIANDO GUI
Gui.addPage("Main", `
  <div class="formbuilder-button form-group field-button-1">
        <button type="button" class="btn-outline-success  btn" name="button-1" access="false" style="default" id="button-1">Iniciar recarregamento</button>
   </div>
    <div class="formbuilder-button form-group field-button-2">
        <button type="button" class="btn-outline-danger btn" name="button-2" access="false" style="default" id="button-2">Parar recarregamento</button>
   </div>
`);

Gui.addPage('Helps', `
  <div class="formbuilder-button form-group field-button-procedimentos">
    <button type="button" class="btn-outline-primary btn" name="button-procedimentos" access="false" style="default" id="button-procedimentos">Procedimentos</button>
  </div>

  <div class="formbuilder-button form-group field-button-planos">
    <button type="button" class="btn-outline-primary btn" name="button-planos" access="false" style="default" id="button-planos">Planos</button>
  </div>

  <div class="formbuilder-button form-group field-button-planos">
       <div id="stf"> </div>
   </div>"
`);
// VALOR PADRÃO DO REINICIO
let value = 10000
const inter = setInterval(() => {window.location.reload()}, value);

// INICIANDO GUI E ADICIONANDO FUNÇÃO AOS BOTÕES.
Gui.open(() =>{
    Gui.event("button-1", 'click', () => {
        setInterval(() => {window.location.reload()}, value);
        Gui.window.alert(`Recarregamento automatico inicido com ${value} milisegundos`)
    });

    Gui.event("button-2", 'click', () => {
    clearInterval(inter);
    Gui.window.alert(`Recarregamento Automatico parado.`)
    });

    Gui.event("button-procedimentos", 'click', () => {
        window.open('https://drive.google.com/drive/folders/1KWG9DHHR3AH5sm2UGLOrjsDKQoziPoLS', '_blank')
    })

    Gui.event("button-planos", 'click', () => {
       const TypeOfPlans = +window.prompt(`Selecione o tipo de plano:
            1 - Residencial
            2 - Empresarial
       `);
       copyPlans(TypeOfPlans)
    })
})

const mock = [`ID TELECOM
COM FIDELIDADE de 24 meses
TAXA DE ADESÃO + 3 MESES GRATRIS 
- 200 Mega por apenas R$ 95,90 por mês
- 400 Mega por apenas R$ 119,90 por mês
- 600 Mega por apenas R$ 165,90 por mês

COM FIDELIDADE de 12 meses
APENAS A TAXA DE ADESÃO É GRATIS
- 200 Mega por apenas R$ 95,90 por mês
- 400 Mega por apenas R$ 119,90 por mês
- 600 Mega por apenas R$ 165,90 por mês

SEM FIDELIDADE
COBRADA TAXA DE ADESÃO - R$ 300,00.
- 200 Mega por R$ 175,90 por mês
- 400 Mega por R$ 199,90 por mês
- 600 Mega por R$ 245,90 por mês`, 

`BANDA LARGA EMPRESARIAL
Contrato 24 meses

200 MB - R$119,00
400 MB - R$149,00
600 MB - R$169,00 (IP fixo incluso)

Contrato 12 meses

200 MB - R$149,00
400 MB - R$179,00
600 MB - R$209,00 (IP fixo incluso)


🛑TAXA DE INSTALAÇÃO GRATUITA🛑
`]

function copyPlans(TypeOfPlans) {
    if(TypeOfPlans == 1) {
        const copyToClickBoard = navigator.clipboard;
        copyToClickBoard.writeText(mock[0]).then (() => {
            alert('Planos copiados.')
        }) 
    } else {
        copyToClickBoard.writeText(mock[1]).then (() => {
            alert('Planos copiados.')
        }) 
    }
}