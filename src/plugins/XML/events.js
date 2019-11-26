/*
 * XML Opal Plugin
 *
 */

/*globals $*/

// Listen to channel posts to render text through XML parser.
$.on('chat-channel-post', function(event, payload){
    payload.data.text = $.plugin('xml').render(payload.data.text);

});