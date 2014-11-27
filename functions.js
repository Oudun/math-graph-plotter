var basicHeight = 32;
var baselineOffset = basicHeight * (3/4);

var charX = basicHeight/8;
var charY = basicHeight/2;
var gapX = basicHeight/16;
var gapY = basicHeight/16;
var counter = 0;

var lineWidth = basicHeight/32;
var showRect = false;

var fullSizeFontNormal = "normal " + basicHeight + "px Georgia";
var fullSizeFont = "italic " + basicHeight + "px Georgia";
var halfSizeFont = "italic " + 2*basicHeight/3 + "px Georgia";
var functions = new Array();

var selectedId = 0;

///////////////////////////////
//                           //
//   ONE ARG FUNCTION        //
//                           //
///////////////////////////////

function ONE_ARG_FUNCTION () {    

    this.arg = null;
    this.argOffsetX = null;
    this.argOffsetY = null;


    this.plot = function  (offsetX, offsetY, ctx) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        ctx.strokeStyle = "red";

        if (showRect) {ctx.strokeRect(offsetX, offsetY, this.width(), this.height());}

        this.innerPlot(offsetX, offsetY, ctx);
        this.arg.plot(this.argOffsetX, this.argOffsetY, ctx);
        functions[this.id] = this;

    }

    this.replaceChild = function(_id, func) {
        if (this.arg.id==_id) {
            this.arg.remove();
            this.arg = func;
        } else {
            this.arg.replaceChild(_id, func);
        }
    }

    this.remove = function() {
        this.arg.remove();
        functions[this.arg.id]=null;
        functions[this.id] = null;
    }

    this.innerPlot = function(offsetX, offsetY, ctx) { }

    this.calculate = function (x, y) {}

    this.width = function () {}

    this.height = function () {}


}

///////////////////////////////
//                           //
//   TWO_ARGS_FUNCTION       //
//                           //
///////////////////////////////

function TWO_ARGS_FUNCTION() {

    this.id = counter++;
    this.argFirst = null;
    this.argSecond = null;
    this.offsetX = null;
    this.offsetY = null;
    this.firstOffsetX = null;
    this.firstOffsetY = null;
    this.secondOffsetX = null;
    this.secondOffsetY = null;

}    

TWO_ARGS_FUNCTION.prototype.plot = function  (offsetX, offsetY, ctx) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    if (showRect) {ctx.strokeRect(offsetX, offsetY, this.width(), this.height());}

    this.innerPlot(offsetX, offsetY, ctx);
    this.argFirst.plot(this.firstOffsetX, this.firstOffsetY, ctx);
    this.argSecond.plot(this.secondOffsetX, this.secondOffsetY, ctx);
    functions[this.id] = this;

}

TWO_ARGS_FUNCTION.prototype.replaceChild = function(_id, func) {
    if (this.argFirst.id==_id) {
        this.argFirst.remove();
        this.argFirst=func;
    } else if (this.argSecond.id==_id) {
        this.argSecond.remove();
        this.argSecond=func;
    } else {
        this.argFirst.replaceChild(_id, func);
        this.argSecond.replaceChild(_id, func);
    }
}

TWO_ARGS_FUNCTION.prototype.remove = function() {
    this.argFirst.remove();
    this.argSecond.remove();
    this.argFirst = null;
    this.argSecond = null;
    functions[this.id] = null;
}

TWO_ARGS_FUNCTION.prototype.innerPlot = function (offsetX, offsetY, ctx) {};

TWO_ARGS_FUNCTION.prototype.calculate = function (x, y) { return null;}

TWO_ARGS_FUNCTION.prototype.width = function () {return null;}

TWO_ARGS_FUNCTION.prototype.height = function () {return null;}


///////////////////////////////
//                           //
//   THREE_ARGS_FUNCTION       //
//                           //
///////////////////////////////

function THREE_ARGS_FUNCTION() {

    this.id = counter++;
    this.argFirst = null;
    this.argSecond = null;
    this.argThird = null;
    this.offsetX = null;
    this.offsetY = null;
    this.firstOffsetX = null;
    this.firstOffsetY = null;
    this.secondOffsetX = null;
    this.secondOffsetY = null;
    this.thirdOffsetX = null;
    this.thirdOffsetY = null;

}    

THREE_ARGS_FUNCTION.prototype.plot = function  (offsetX, offsetY, ctx) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    if (showRect) {ctx.strokeRect(offsetX, offsetY, this.width(), this.height());}

    this.innerPlot(offsetX, offsetY, ctx);
    this.argFirst.plot(this.firstOffsetX, this.firstOffsetY, ctx);
    this.argSecond.plot(this.secondOffsetX, this.secondOffsetY, ctx);
    this.argThird.plot(this.thirdOffsetX, this.thirdOffsetY, ctx);
    functions[this.id] = this;

}

THREE_ARGS_FUNCTION.prototype.replaceChild = function(_id, func) {
    if (this.argFirst.id==_id) {
        this.argFirst.remove();
        this.argFirst=func;
    } else if (this.argSecond.id==_id) {
        this.argSecond.remove();
        this.argSecond=func;
    } else if (this.argThird.id==_id) {
        this.argThird.remove();
        this.argThird=func;
    } else {
        this.argFirst.replaceChild(_id, func);
        this.argSecond.replaceChild(_id, func);
        this.argThird.replaceChild(_id, func);
    }
}

THREE_ARGS_FUNCTION.prototype.remove = function() {
    this.argFirst.remove();
    this.argSecond.remove();
    this.argThird.remove();
    this.argFirst = null;
    this.argSecond = null;
    this.argThird = null;
    functions[this.id] = null;
}

THREE_ARGS_FUNCTION.prototype.innerPlot = function (offsetX, offsetY, ctx) {};

THREE_ARGS_FUNCTION.prototype.calculate = function (x, y) { return null;}

THREE_ARGS_FUNCTION.prototype.width = function () {return null;}

THREE_ARGS_FUNCTION.prototype.height = function () {return null;}


///////////////////////////////
//                           //
//   NO_ARGS_FUNCTION       //
//                           //
///////////////////////////////

function NO_ARGS_FUNCTION() {

    this.id = counter++;
    this.offsetX = null;
    this.offsetY = null;

}    

NO_ARGS_FUNCTION.prototype.plot = function  (offsetX, offsetY, ctx) {

    alert("proto");

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    if (showRect) {ctx.strokeRect(offsetX, offsetY, this.width(), this.height());}

    this.innerPlot(offsetX, offsetY, ctx);
    this.argFirst.plot(this.firstOffsetX, this.firstOffsetY, ctx);
    this.argSecond.plot(this.secondOffsetX, this.secondOffsetY, ctx);
    functions[this.id] = this;

}

NO_ARGS_FUNCTION.prototype.replaceChild = function(_id, func) {}

NO_ARGS_FUNCTION.prototype.remove = function() {functions[this.id] = null;}

NO_ARGS_FUNCTION.prototype.calculate = function (x, y) { return null;}

NO_ARGS_FUNCTION.prototype.width = function () {return null;}

NO_ARGS_FUNCTION.prototype.height = function () {return null;}

///////////////////////////////
//                           //
//   ROOT FUNCTION           //
//                           //
///////////////////////////////

function ROOT_FUNCTION () {    

    this.id = counter++;
    
    this.plot = function  (offsetX, offsetY, ctx) {

        this.offsetX = 0;
        this.offsetY = 0;
        ctx.strokeStyle = "red";

        if (showRect) {ctx.strokeRect(offsetX, offsetY, this.width(), this.height());}

        this.innerPlot(offsetX, offsetY, ctx);
        
        this.arg.plot(this.argOffsetX, this.argOffsetY, ctx);
        functions[this.id] = this;

    }

    this.innerPlot = function(offsetX, offsetY, ctx) {

        var marginX = (this.width()- ctx.measureText("y(x)=").width -this.arg.width()-gapX)/2;
        this.argOffsetX = marginX + ctx.measureText("y(x)=").width + gapX;
        this.argOffsetY = (this.height()-this.arg.height())/2;
        ctx.fillText("y(x)=", marginX, baselineOffset+(this.height()-basicHeight)/2);

    }

    this.calculate = function (x, y) {
        return this.arg.calculate(x, y);
    }

    this.width = function () {
        return c.width;
    }

    this.height = function () {
        return c.height;
    }

}

ROOT_FUNCTION.prototype = new ONE_ARG_FUNCTION();

function ROOT_FUNCTION_SPHERIC() {
    this.innerPlot = function(offsetX, offsetY, ctx) {
        var marginX = (this.width()- ctx.measureText("ρ(θ,φ)=").width -this.arg.width()-gapX)/2;
        this.argOffsetX = marginX + ctx.measureText("ρ(θ,φ)=").width + gapX;
        this.argOffsetY = (this.height()-this.arg.height())/2;
        ctx.fillText("ρ(θ,φ)=", marginX, baselineOffset+(this.height()-basicHeight)/2);
    }
}

ROOT_FUNCTION_SPHERIC.prototype = new ROOT_FUNCTION();

function ROOT_FUNCTION_CYLINDRIC () {
    this.innerPlot = function(offsetX, offsetY, ctx) {
        var marginX = (this.width()- ctx.measureText("ρ(h,φ)=").width -this.arg.width()-gapX)/2;
        this.argOffsetX = marginX + ctx.measureText("ρ(h,φ)=").width + gapX;
        this.argOffsetY = (this.height()-this.arg.height())/2;
        ctx.fillText("ρ(h,φ)=", marginX, baselineOffset+(this.height()-basicHeight)/2);
    }
}

ROOT_FUNCTION_CYLINDRIC.prototype = new ROOT_FUNCTION();

function ROOT_FUNCTION_RECT3D() {

    this.innerPlot = function(offsetX, offsetY, ctx) {
        var marginX = (this.width()- ctx.measureText("z(x,y)=").width -this.arg.width()-gapX)/2;
        this.argOffsetX = marginX + ctx.measureText("z(x,y)=").width + gapX;
        this.argOffsetY = (this.height()-this.arg.height())/2;
        ctx.fillText("z(x,y)=", marginX, baselineOffset+(this.height()-basicHeight)/2);
    }

}

ROOT_FUNCTION_RECT3D.prototype = new ROOT_FUNCTION();

///////////////////////////////
//                           //
//   INTEGRAL                //
//                           //
///////////////////////////////



function INTEGRAL () {

    this.id = counter++;
    this.text1 = "⌠";
    this.text2 = "⌡";
    this.text3 = "dx";
        
    this.innerPlot = function(offsetX, offsetY, ctx) {

        var int_width = Math.max(Math.max(this.argFirst.width(), this.argSecond.width()), ctx.measureText(this.text1).width);
        var int_height = 2*basicHeight + this.argFirst.height() + this.argSecond.height();

        this.firstOffsetX = offsetX;
        this.firstOffsetY = offsetY;

        this.secondOffsetX = offsetX;
        this.secondOffsetY = offsetY + 2*basicHeight + this.argFirst.height();

        this.thirdOffsetX = offsetX + int_width;
        this.thirdOffsetY = offsetY + (int_height - this.argThird.height())/2;
        ctx.font=fullSizeFontNormal;
        ctx.fillText(this.text1, offsetX, offsetY+this.argFirst.height()+baselineOffset);
        ctx.fillText(this.text2, offsetX, offsetY+this.argFirst.height()+basicHeight+baselineOffset);
        ctx.font=fullSizeFont;
        ctx.fillText(this.text3, this.thirdOffsetX+this.argThird.width(), this.thirdOffsetY+baselineOffset);        


    }

    this.width = function() {
        return Math.max(
            Math.max(this.argFirst.width(), this.argSecond.width()), ctx.measureText(this.text1).width) 
        + this.argThird.width() + ctx.measureText(this.text3).width;
    }

    this.height = function() {
        return  this.argFirst.height() + this.argSecond.height() + 2*basicHeight;
    }

    this.calculate = function(x, y) {
        var start = this.argSecond.calculate(x,y);
        var end = this.argFirst.calculate(x,y);
        var step = (end-start)/10;
        var value = 0;
        console.log("x="+ x +"start="+start+" end="+end+" step="+step);
        
        if (end<=start) {return 0;}

        for (i=start;i<=end;i+=step) {
            value += step*(this.argThird.calculate(i,y) + this.argThird.calculate(i+step, y))/2
            console.log("x="+ x +"adding 1/2("+this.argThird.calculate(i,y)+"+"+this.argThird.calculate(i+step, y)+")*"+step);
            console.log("x="+ x +"value="+value);
        }
        return value;
    }

}



INTEGRAL.prototype = new THREE_ARGS_FUNCTION();


///////////////////////////////
//                           //
//   BRACKETS                //
//                           //
///////////////////////////////

function BRACKETS () {    

    this.id = counter++;
    this.text1 = "(";
    this.text2 = ")";
    
    this.innerPlot = function(offsetX, offsetY, ctx) {

//        alert("BRACKET offsetX:"+offsetX+"offsetY:"+offsetY);

        this.argOffsetX = offsetX + ctx.measureText(this.text1).width;
        this.argOffsetY = offsetY;
        ctx.fillText(this.text1, offsetX, offsetY + (this.height()-basicHeight)/2 + baselineOffset);
        ctx.fillText(this.text2, offsetX + ctx.measureText(this.text1).width + this.arg.width(), offsetY + (this.height()-basicHeight)/2 + baselineOffset);

    }

    this.calculate = function (x, y) {
        return this.arg.calculate(x, y);
    }

    this.width = function () {
        return ctx.measureText(this.text1).width + this.arg.width() + ctx.measureText(this.text2).width;
    }

    this.height = function () {
        return this.arg.height();
    }

}

BRACKETS.prototype = new ONE_ARG_FUNCTION();

///////////////////////////////
//                           //
//   SQUARE                  //
//                           //
///////////////////////////////

function SQUARE () {    

    this.id = counter++;
    this.text = "²";
    
    this.innerPlot = function(offsetX, offsetY, ctx) {


        this.argOffsetX = offsetX;
        this.argOffsetY = offsetY;
        _offsetX = offsetX + this.arg.width();
        ctx.fillText(this.text, _offsetX, offsetY + baselineOffset);
    }

    this.calculate = function (x, y) {
        return this.arg.calculate(x, y)*this.arg.calculate(x, y);
    }

    this.width = function () {
        var _width = this.arg.width() + ctx.measureText(this.text).width; 
        return  _width;
    }

    this.height = function () {
        return this.arg.height();
    }

}

SQUARE.prototype = new ONE_ARG_FUNCTION();

function SQRT () {    

    this.id = counter++;
    this.text = "√";
    
    this.innerPlot = function(offsetX, offsetY, ctx) {

        var sqrt_width = ctx.measureText(this.text).width;
        this.argOffsetX = offsetX + sqrt_width;
        this.argOffsetY = offsetY + gapY;

        ctx.strokeStyle="black";

        ctx.beginPath();
        ctx.lineWidth= 2*lineWidth
        ctx.moveTo(offsetX, offsetY + this.arg.height()/3);
        ctx.lineTo(offsetX + sqrt_width/3, offsetY + this.arg.height());
        ctx.stroke();

        ctx.lineWidth= lineWidth
        ctx.moveTo(offsetX + sqrt_width/3, offsetY + this.arg.height());
        ctx.lineTo(offsetX + sqrt_width, offsetY);
        ctx.lineTo(offsetX + sqrt_width + this.arg.width(), offsetY);   
        ctx.stroke();


//        ctx.scale(3,3);
//        ctx.fillText(this.text, offsetX, offsetY + baselineOffset);
    }

    this.calculate = function (x, y) {
        return Math.sqrt(this.arg.calculate(x, y));
    }

    this.width = function () {
        var _width = this.arg.width() + ctx.measureText(this.text).width; 
        return  _width;
    }

    this.height = function () {
        return this.arg.height()+gapY;
    }

}

SQRT.prototype = new ONE_ARG_FUNCTION();

///////////////////////////////
//                           //
//   SINUS                   //
//                           //
///////////////////////////////

function SIN () {    

    this.id = counter++;
    this.text1 = "sin(";
    this.text2 = ")";
    
    this.innerPlot = function(offsetX, offsetY, ctx) {

//        alert("BRACKET offsetX:"+offsetX+"offsetY:"+offsetY);

        this.argOffsetX = offsetX + ctx.measureText(this.text1).width;
        this.argOffsetY = offsetY;
        ctx.fillText(this.text1, offsetX, offsetY + (this.height()-basicHeight)/2 + baselineOffset);
        ctx.fillText(this.text2, offsetX + ctx.measureText(this.text1).width + this.arg.width(), offsetY + (this.height()-basicHeight)/2 + baselineOffset);

    }

    this.calculate = function (x, y) {
        return Math.sin(this.arg.calculate(x, y));
    }

    this.width = function () {
        return ctx.measureText(this.text1).width + this.arg.width() + ctx.measureText(this.text2).width;
    }

    this.height = function () {
        return this.arg.height();
    }

}

SIN.prototype = new ONE_ARG_FUNCTION();

function COS () {    

    this.id = counter++;
    this.text1 = "cos(";

    this.calculate = function (x, y) {
        return Math.cos(this.arg.calculate(x, y));
    }

}


COS.prototype = new SIN();

////////////////////
//                //
//   DIVIDE       //
//                //
////////////////////

function DIV () {    

    this.id = counter++;

    this.innerPlot = function(offsetX, offsetY, ctx) {

        this.firstOffsetX = offsetX + ((Math.max(this.argSecond.width(), this.argFirst.width()) - this.argFirst.width()) / 2);
        this.firstOffsetY = offsetY;

        ctx.strokeStyle = "black";
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY + gapY + this.argFirst.height());
        ctx.lineTo(offsetX + Math.max(this.argSecond.width(), this.argFirst.width()), offsetY + this.argFirst.height() + gapY);
        ctx.stroke();

        this.secondOffsetX = offsetX + ((Math.max(this.argSecond.width(), this.argFirst.width()) - this.argSecond.width()) / 2);
        this.secondOffsetY = offsetY + this.argFirst.height() + gapY + gapY;

    }

    this.calculate = function (x, y) {
        return this.argFirst.calculate(x, y) / this.argSecond.calculate(x, y);
    }

    this.width = function () {
        return Math.max(this.argFirst.width(), this.argSecond.width());
    }

    this.height = function () {
        return this.argFirst.height() + gapY + gapY + this.argSecond.height();
    }

}

DIV.prototype = new TWO_ARGS_FUNCTION();

function ROOT_FUNCTION_2PARAM () {    

    this.id = counter++;

    this.innerPlot = function(offsetX, offsetY, ctx) {

        var marginX = (this.width() - ctx.measureText("y(x)=").width - gapX - Math.max(this.argFirst.width(),this.argSecond.width()))/2;
        var marginY = (this.height()- this.argFirst.height() - gapY - this.argSecond.height())/2;

        this.firstOffsetX = marginX + ctx.measureText("y(x)=").width + gapX;
        this.firstOffsetY = marginY;
        
        this.secondOffsetX = marginX + ctx.measureText("y(x)=").width + gapX;
        this.secondOffsetY = marginY + gapY + this.argFirst.height();

        var A1 = this.argFirst.height() + (gapY/2);
        var B1 = this.argSecond.height() + (gapY/2);

        var A2 = (A1 - basicHeight)/2
        var B2 = A1 + (B1 - basicHeight)/2

        ctx.fillText("x(t)=", marginX, marginY + A2 + baselineOffset);
        ctx.fillText("y(t)=", marginX, marginY + B2 + baselineOffset);

    }

    this.calculateX = function (x, y) {
        return this.argFirst.calculate(x, y);
    }

    this.calculateY = function (x, y) {
        return this.argSecond.calculate(x, y);
    }

    this.width = function () {
        return c.width;
    }

    this.height = function () {
        return c.height;
    }

}

ROOT_FUNCTION_2PARAM.prototype = new TWO_ARGS_FUNCTION();

///////////////////
//               //
//   MULTIPLY    //
//               //
///////////////////

function MUL() {

    this.id = counter++;

    this.innerPlot = function(offsetX, offsetY, ctx) {

/*
________________________________________________________________________
          ^
          |  offsetY       |      |      |     |
          V                |      |      |     |secondArg.width|
          _________________|      |      |     |<------------->| 
         |                 |      |      |     |_______________|_
         |                 |      |      |     |               | ^
 offsetX | firstArg.width  |      |  Ж   |     |               | | secondArg.height
<------->|<--------------->| gapX |charX | gapX|_______________|_V_
         |_________________|<----><------><--->|

*/
        var maxHeight = Math.max(this.argSecond.height(), this.argFirst.height());

        this.firstOffsetX = this.offsetX;
        this.firstOffsetY = this.offsetY + ((maxHeight - this.argFirst.height()) / 2);

        charY = Math.min(this.height(), charY);
        charX = ctx.measureText("×").width
        ctx.fillText("×", offsetX + this.argFirst.width() + gapX, offsetY + baselineOffset + (this.height() - basicHeight)/2);

        this.secondOffsetX = this.offsetX + this.argFirst.width() + gapX + charX + gapX;
        this.secondOffsetY = this.offsetY + ((maxHeight - this.argSecond.height()) / 2)

    };

    this.calculate = function (x, y) {
        return this.argFirst.calculate(x, y) * this.argSecond.calculate(x, y);
    }

    this.width = function () {
        return this.argFirst.width() + gapX + charX + gapX + this.argSecond.width();
    }

    this.height = function () {
        return Math.max(this.argFirst.height(), this.argSecond.height());
    }

}

MUL.prototype = new TWO_ARGS_FUNCTION();

function MUL2() {

    this.id = counter++;

    this.innerPlot = function(offsetX, offsetY, ctx) {

        var maxHeight = Math.max(this.argSecond.height(), this.argFirst.height());

        this.firstOffsetX = this.offsetX;
        this.firstOffsetY = this.offsetY + ((maxHeight - this.argFirst.height()) / 2);
        this.secondOffsetX = this.offsetX + this.argFirst.width();
        this.secondOffsetY = this.offsetY + ((maxHeight - this.argSecond.height()) / 2)

    };


    this.width = function () {
        return this.argFirst.width() + this.argSecond.width();
    }

}

MUL2.prototype = new MUL();


///////////////////
//               //
//   ADD         //
//               //
///////////////////

function ADD() {

  this.id = counter++;
  this.text = "+";

    this.innerPlot = function(offsetX, offsetY, ctx) {

        var maxHeight = Math.max(this.argSecond.height(), this.argFirst.height());

        this.firstOffsetX = this.offsetX;
        this.firstOffsetY = this.offsetY + ((maxHeight - this.argFirst.height()) / 2);

        charX = ctx.measureText(this.text).width
        ctx.fillText(this.text, offsetX + this.argFirst.width() + gapX, offsetY + baselineOffset + (this.height() - basicHeight)/2);

        this.secondOffsetX = this.offsetX + this.argFirst.width() + gapX + charX + gapX;
        this.secondOffsetY = this.offsetY + ((maxHeight - this.argSecond.height()) / 2)

    }

    this.calculate = function (x, y) {
        return this.argFirst.calculate(x, y) + this.argSecond.calculate(x, y);
    }

    this.width = function () {
        return this.argFirst.width() + gapX + ctx.measureText(this.text).width + gapX + this.argSecond.width();
    }

    this.height = function () {
        return Math.max(this.argFirst.height(), this.argSecond.height());
    }

}

ADD.prototype = new TWO_ARGS_FUNCTION();

function DIFF() {

    this.id = counter++;
    this.text = "-";

    this.calculate = function (x, y) {
        return this.argFirst.calculate(x, y) - this.argSecond.calculate(x, y);
    }

}

DIFF.prototype = new ADD();


///////////////////
//               //
//   CONST       //
//               //
///////////////////

function CONST(val) {
    
    this.value = val;
    this.id = counter++;

    this.plot = function (offsetX, offsetY, ctx) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        ctx.strokeStyle = "blue";
        if (showRect)
            ctx.strokeRect(offsetX, offsetY, this.width(), this.height());
        ctx.font = "italic " + this.height() + "px Georgia";
        ctx.fillText(val, offsetX, offsetY + baselineOffset);
        functions[this.id] = this;

    }

    this.calculate = function (x, y) {
        return this.value;
    }

    this.width = function () {
        return ctx.measureText(val).width;
    }

    this.height = function () {
        return basicHeight;
    }

}

CONST.prototype = new NO_ARGS_FUNCTION();

///////////////////
//               //
//   VAR  X     //
//               //
///////////////////

function VARX(ch) {
    this.id = counter++;
    this.ch = ch;

    this.plot = function (offsetX, offsetY, ctx) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        ctx.strokeStyle = "green";
        if (showRect)
            ctx.strokeRect(offsetX, offsetY, this.width(), this.height());
        ctx.font = "italic " + this.height() + "px Georgia";
        ctx.fillText(this.ch, offsetX, offsetY + baselineOffset);

        functions[this.id] = this;

    }

    this.calculate = function (x, y) {
        return x;
    }

    this.width = function () {
        return ctx.measureText(this.ch).width;
    }

    this.height = function () {
        return basicHeight;
    }

}

VARX.prototype = new NO_ARGS_FUNCTION();

///////////////////
//               //
//   VAR  Y     //
//               //
///////////////////

function VARY(ch) {
    this.id = counter++;
    this.ch=ch;
    this.calculate = function (x, y) {
        return y;
    }
}

VARY.prototype = new VARX();
