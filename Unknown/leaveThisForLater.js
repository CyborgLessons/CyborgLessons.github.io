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
    
    
     obj[0] = new pinWheel(1,0,100,100,50,255,0,0,null,1);
     obj[1] = new pinWheel(0,1,50,50,50,0,255,0,null,2);
     
    
    
    for (i=0;i<obj.length;i++) {
        document.getElementById("body").innerHTML+= obj[i].getElement;
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