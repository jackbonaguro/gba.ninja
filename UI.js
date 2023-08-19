(function () {
    "use strict";
    
    
    function VBAUI(el) {
        this.el = el;
        
        this.currentlyBinding = false;
        this.initialHTML = el.innerHTML;
        
        this.el.addEventListener("keydown", this.onKeyDown.bind(this));
        
        this.paused = false;
    }
    VBAUI.prototype = Object.create(Object.prototype);
    VBAUI.prototype.constructor = VBAUI;
    

    VBAUI.prototype.setPausedState = function (paused) {
        this.paused = paused;
        // this.el.querySelector(".load-rom-section").style.display = paused ? "none" : "";
        // this.el.querySelector(".paused-section").style.display = paused ? "" : "none";
    };

    
    VBAUI.prototype.reset = function () {
        this.el.innerHTML = this.initialHTML;
        this.currentlyBinding = false;        
        this.setPausedState(this.paused);
    };
    
    VBAUI.prototype.export = function () {
        vbaSaves.exportSave();
    };
    
    
    VBAUI.prototype.onKeyDown = function (e) {
        if (this.currentlyBinding) {
            var prev = vbaInput.bindings[this.currentlyBinding].codes.join();
            vbaInput.setBinding(this.currentlyBinding, e.code, e.keyCode);
            var current = vbaInput.bindings[this.currentlyBinding].codes.join();

            this.reset();
        }
    };
    
    
    VBAUI.prototype.startRebinding = function (el, name) {
        this.currentlyBinding = name;
        this.el.querySelectorAll(".rebind-key-button").forEach(function (el) {
            el.innerText = "Rebind";
        });
        el.innerText = "Rebinding...";
    };
    
    VBAUI.prototype.resetBindings = function () {
        vbaInput.resetBindings();
        this.reset();
    };
    
    VBAUI.prototype.exportSave = function (romCode) {
        vbaSaves.exportSave(romCode);
        this.reset();
    };
    
    VBAUI.prototype.deleteSave = function (romCode) {

        var modalOpts = modal("Are you sure you want to delete your save for [" + romCode + "] " + require("./romCodeToEnglish")(romCode) + "?", {
            title: "Confirm Deletion",
            leftButtonText: "Delete",
            leftButtonFn: function () {
                
                vbaSaves.deleteSave(romCode);
                this.reset();

            }.bind(this),
            rightButtonText: "Cancel",
            rightButtonFn: function () {
                modalOpts.hideModal();
            },
        });
        
    };
    
    module.exports = VBAUI;
    
    
}());