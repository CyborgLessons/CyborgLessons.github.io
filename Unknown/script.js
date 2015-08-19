function pinWheel(x, y, width, height, circle /*percentage*/,r,g,b, id, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.circle = circle;
    
    this.width = width;
    this.height = height;
    
    this.color = 'rgb('+r+','+g+','+b+')';
    
    this.id = id;
    
    this.getY = -y-(height/2);
    this.getX = x-(width/2);
    this.getIndex = index;
    this.getCircle = circle+'%';
    
    this.getElement = '<div id="'+this.id+'" style="margin-left:'+this.getX+'px'+';margin-top:'+this.getY+'px'+';width:'+this.width+';height:'+this.height+';background-color:'+this.color+';z-index:'+this.getIndex+';left:50%;top:50%;position:fixed;"></div>';
    
    this.pushElement = function() {
        document.getElementById("body").innerHTML+=this.getElement;
    }
    
}

var obj = [];

    var number = 1;

function preInit() {
    
    var i;
    
    /*
     obj[0] = new pinWheel(0,0,100,100,50,255,0,0,null,1);
     obj[1] = new pinWheel(0,0,50,50,50,0,255,0,null,2);
     */
    
    
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

    obj[number] = new pinWheel(x,y,1,1,0,Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255),null,1);
    obj[number].pushElement();
    
    x+=Math.round(Math.random()*2-1);
    y+=Math.round(Math.random()*2-1);
}

function postInit() {
    
}

window.onload(preInit());