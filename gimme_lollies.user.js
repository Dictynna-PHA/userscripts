// ==UserScript==
// @name         Torn: Gimme lollys
// @namespace    shaitin.gimme_lollys
// @version      0.0.1
// @description  Gimme lollys!
// @author       Shaitin (Mod of lugburz beer script)
// @match        https://www.torn.com/shops.php?step=candy*
// @grant        none
// ==/UserScript==

function addButton() {
    if ($('div.content-title > h4').size() > 0 && $('#buylollyBtn').size() < 1) {
        const button = `<button id="buylollyBtn" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Gimme lollys!</button>
                        <span id="buylollyResult" style="font-size: 12px; font-weight: 100;"></span>`;
        $('div.content-title > h4').append(button);
        $('#buylollyBtn').on('click', async () => {
            $('#buylollyResult').text('');
            await getAction({
                type: 'post',
                action: 'shops.php',
                data: {
                    step: 'buyShopItem',
                    ID: 310,
                    amount: 100
                },
                success: (str) => {
                    try {
                        const msg = JSON.parse(str);
                        $('#buylollyResult').html(msg.text).css('color', msg.success ? 'green' : 'red');
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        });
    }
};

(function() {
    'use strict';

    // Your code here...
    addButton();
})();
