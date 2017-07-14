(
    function (){
        var app=angular.module("MobileStore",[]);
        var iphone={
            name:"iphone 7 plus",
            color:"rose gold",
            memory:"3GB RAM,128GB internal storage",
            price:75999.00,
            image:"img/samsung1.jpg",
            isSoldOut:false
        };
        var samsung={
            name:"samsung s8",
            color:"grey",
            memory:"6GB RAM,64GB internal storage",
            price:56000.00,
            image:"img/samsung.png",
            isSoldOut:true
        };
        var note={
            name:"redmi note4",
            color:"gold",
            memory:"2GB RAM,64GB internal storage",
            price:10000.00,
            image:"img/iphone6.jpg",
            isSoldOut:true
        };
        var nokia= {
            name: "nokia edge 2017",
            color: "grey",
            memory: "3GB RAM,32GB internal storage",
            price: 50000.00,
            image: "img/iphone1.png",
            isSoldOut: true
        };
        var yu= {
            name: "yureka plus",
            color: "white",
            memory: "2GB RAM,32GB internal storage",
            price: 12000.00,
            image: "img/iphone.png",
            isSoldOut: false

        };
        var cool= {
            name: "coolpad max",
            color: "rose gold",
            memory: "2GB RAM,64GB internal storage",
            price: 15000.00,
            image: "img/floor2.png",
            isSoldOut: false
            activeTab:"Description"
        };
        app.controller("StoreController",function() {
            this.mobiles=[iphone,samsung,note,nokia,yu,cool];

            this.setActiveTab=function(mobile,tab){
                mobile.activeTab=tab;
            }
        });
    })();