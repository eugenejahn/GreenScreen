var greenImage;
var backImage;
var output = new SimpleImage();


function doUpload1(){
  var canvas = document.getElementById("greenCanvas");
  var file   = document.getElementById("imageInput1");
  
  greenImage = new SimpleImage(file);
  greenImage.drawTo(canvas);
}

function doUpload2(){
  var canvas = document.getElementById("backCanvas");
  var file   = document.getElementById("imageInput2");
  
  backImage = new SimpleImage(file);
  backImage.drawTo(canvas);
}

function doCombine(){  
  var canvas = document.getElementById("greenCanvas");

  backImage.setSize(greenImage.getWidth(), greenImage.getHeight());
  output.setSize(greenImage.getWidth(), greenImage.getHeight());

  for(var pixel of greenImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    
    if (pixel.getGreen()>220){
      output.setPixel(x,y,backImage.getPixel(x,y));
    }else{
      output.setPixel(x,y,pixel);
    }    
  }  
  output.drawTo(canvas);
}




function doGray(){
  var change = new SimpleImage(output.getWidth(), output.getHeight())
  for(var pixel of output.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    change.setPixel(x,y,pixel);
  }


  for (var pixel of change.values()){
    var color = (pixel.getRed()+ pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(color);
    pixel.setGreen(color);
    pixel.setBlue(color);
  }    
  var canvas = document.getElementById("greenCanvas");
  change.drawTo(canvas);
}

function redo(){
  var canvas = document.getElementById("greenCanvas");
  output.drawTo(canvas);
}

function doClear(canvas) {
  var canvas = document.getElementById(canvas);
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}






