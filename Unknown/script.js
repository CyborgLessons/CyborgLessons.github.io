function pinWheel(x, y, width, height, circle /*percentage*/,r,g,b, id, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.circle = circle;
    
    this.width = width;
    this.height = height;
    
    this.color = 'rgb('+r+','+g+','+b+')';
    
    this.id = id;
    
    this.getY = -(y*(window.innerHeight/2))-(height/2);
    this.getX = (x*(window.innerWidth/2))-(width/2);
    this.getIndex = index;
    this.getCircle = circle+'%';
    
    this.getElement = '<div id="'+this.id+'" style="margin-left:'+this.getX+'px'+';margin-top:'+this.getY+'px'+';width:'+this.width+';height:'+this.height+';background-color:'+this.color+';z-index:'+this.getIndex+';left:50%;top:50%;position:fixed;"></div>';
    
    this.pushElement = function() {
        document.getElementById("body").innerHTML+=this.getElement;
    }
    
}

var obj = [];

function preInit() {
    
    var i;
    
    
     obj[0] = new pinWheel(0,0,100,10,0,10,10,10,"id",1);
     
    
    
    for (i=0;i<obj.length;i++) {
        obj[i].getElement;
    }
    
    for (i=0;i<obj.length;i++) {
        
    }
    
    setInterval(init,1);
}

var x=0;
var y=0;

function init() {

}

function postInit() {
    
}

window.onload(preInit());