cordova.define("jp.wizcorp.phonegap.plugin.wizAssetsPlugin", function (require, exports, module) {
    /* Download and show, PhoneGap Example
     *
     * @author Ally Ogilvie
     * @copyright Wizcorp Inc. [ Incorporated Wizards ] 2014
     * @file - wizAssets.js
     * @about - JavaScript download and update asset example for PhoneGap
     *
     *
     */
    var exec = require("cordova/exec");
    var wizAssets = { 
        downloadFile: function (url, filePath, s, f) {
            window.setTimeout(
                function () {
                    exec(s, f, "WizAssetsPlugin", "downloadFile", [url, filePath]);
                }, 0);
        },
        deleteFile: function (uri, s, f) {
            return exec(s, f, "WizAssetsPlugin", "deleteFile", [uri]);
        },
        deleteFiles: function (uris, s, f) {
            return exec(s, f, "WizAssetsPlugin", "deleteFiles", uris );
        },
        getFileURIs: function (s, f) {
            return exec(s, f, "WizAssetsPlugin", "getFileURIs", [] );
        },
        getFileURI: function (uri, s, f) {
            return exec(s, f, "WizAssetsPlugin", "getFileURI", [uri] );
        }        
    };
    module.exports = wizAssets;
});
