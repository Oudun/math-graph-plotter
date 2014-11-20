///////////////////////////
///////////////////////////
//                       // 
//   GRAPH SECTION       //
//                       //
///////////////////////////
///////////////////////////

    // var startX = -32;
    // var startY = -32;
    // var endX = 32;
    // var endY = 32;

    var ZoomInMatrix2D = [[2,0],[0,2]];
    var ZoomOutMatrix2D = [[0.5,0],[0,0.5]];
    var IdentityMatrix2D = [[1,0],[0,1]];
    var matrix2D = [[1,0],[0,1]];

    function axisX(startX, startY, endX, endY) {

        context.strokeStyle = '#000000';

        context.beginPath();
            context.moveTo(canvas.width/2, 0);
            context.lineTo(canvas.width/2, canvas.height);
            context.stroke();   

        context.beginPath();
            context.moveTo(0, canvas.height/2);
            context.lineTo(canvas.width, canvas.height/2);
            context.stroke();   

    }

    function func(x) {
        return rootFunc.calculate(x, null);
    }

    function funcX(t) {
        return rootFunc.calculateX(t, null);
    }
    
    function funcY(t) {
        return rootFunc.calculateY(t, null);
    }


    function graphParam2D() {

        context.strokeStyle = '#ff0000';

        var t;
    
        for (t=startT; t<endT; t+=stepT) {

            startPoint = getScreenPoint2D(funcX(t), funcY(t));
            endPoint = getScreenPoint2D(funcX(t+stepT), funcY(t+stepT));

            context.beginPath();
                context.moveTo(startPoint[0],startPoint[1]);
                context.lineTo(endPoint[0], endPoint[1]);
                context.stroke();   
            context.closePath();

        }
    }


    function graph2D() {

        context.strokeStyle = '#ff0000';

        var x;
    
        for (x=startX; x<endX; x+=stepX) {

            startPoint = getScreenPoint2D(x, func(x));
            endPoint = getScreenPoint2D(x+stepX, func(x+stepX));

            context.beginPath();
                context.moveTo(startPoint[0],startPoint[1]);
                context.lineTo(endPoint[0], endPoint[1]);
                context.stroke();   
            context.closePath();
        }
    }

    function getScreenPoint2D(x, y) {

        var TwoDimResult = new Array();
        TwoDimResult[0]=x;
        TwoDimResult[1]=y;

        TwoDimResult = transform2D(TwoDimResult);
        TwoDimResult = mapToScreen(TwoDimResult);

        return TwoDimResult;

    }

    function transform2D (origPoint) {

        resultPoint = new Array();

        resultPoint[0] = origPoint[0]*matrix[0][0];
        resultPoint[0] += origPoint[1]*matrix[0][1];
        
        resultPoint[1] = origPoint[0]*matrix[1][0];
        resultPoint[1] += origPoint[1]*matrix[1][1];       
        
        return resultPoint;

    }

    // Multiplies two matrixes
    
    function multiplyMatrixes2D(firstMatrix, secondMatrix) {
     
        resultMatrix = [[0,0],[0,0]];

        var i;
        var j;

        for (i=0; i<2; i++) {
            for (j=0; j<2; j++) {
                resultMatrix[i][j] = firstMatrix[i][0]*secondMatrix[0][j];
                resultMatrix[i][j] += firstMatrix[i][1]*secondMatrix[1][j];
            }
        }

        return resultMatrix;

    }

    // Maps graph point to screen coordinates

    function mapToScreen(point) {
        var mappedPoint = new Array();
        var A1 = canvas.width/(endX-startX);
        var B1 = -A1 * startX;
        var A2 = canvas.height/(startY-endY);
        var B2 = -A2 * endY;
        mappedPoint[0] = A1*point[0] + B1;
        mappedPoint[1] = A2*point[1] + B2;
        return mappedPoint;
    }