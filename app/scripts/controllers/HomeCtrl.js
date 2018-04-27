(function() {
    function HomeCtrl() {
        this.mySound = new buzz.sound("/sounds/ding.mp3", {
            preload: true
        });
        
        this.mySound.bind("loadstart", function () {
            console.log("Loading...");
        });
        
        this.mySound.load();
        
        this.mySound.bind("loadeddata", function () {
            console.log("The ding has loaded.");
        });
        
        this.ding = function() {
            this.mySound.play();
            console.log("DING!");
        }
    }

    angular
        .module('Bloctime')
        .controller('HomeCtrl', [HomeCtrl]);
})();
