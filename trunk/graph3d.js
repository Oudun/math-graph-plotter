
	var	startX = -2;
	var	endX = 2;

	var	startY = -1.5;
	var	endY = 1.5;

	var	startTheta = -Math.PI/2;
	var	endTheta = Math.PI/2;

	var	startPhi = 0;
	var	endPhi = 2*Math.PI;

	var gran = 32;

	var stepTheta = (endTheta-startTheta)/gran;
	var stepPhi = (endPhi-startPhi)/gran;

	var	matrix3D = [[1,0,0],[0,1,0],[0,0,1]];
	
	var identityMatrix3D = [[1,0,0],[0,1,0],[0,0,1]];

	var rotationStep = Math.PI/12;

	var	matrixRotZ = new Array();
	
	matrixRotZ[0] = new Array();
	matrixRotZ[1] = new Array();
	matrixRotZ[2] = new Array();

	matrixRotZ[0][0] = Math.cos(rotationStep);
	matrixRotZ[0][1] = -Math.sin(rotationStep);
	matrixRotZ[0][2] = 0;

	matrixRotZ[1][0] = Math.sin(rotationStep);
	matrixRotZ[1][1] = Math.cos(rotationStep);
	matrixRotZ[1][2] = 0;

	matrixRotZ[2][0] = 0;
	matrixRotZ[2][1] = 0;
	matrixRotZ[2][2] = 1;


	var	matrixRotY = new Array();
	
	matrixRotY[0] = new Array();
	matrixRotY[1] = new Array();
	matrixRotY[2] = new Array();

	matrixRotY[0][0] = Math.cos(rotationStep);
	matrixRotY[0][1] = 0;
	matrixRotY[0][2] = -Math.sin(rotationStep);

	matrixRotY[1][0] = 0;
	matrixRotY[1][1] = 1;
	matrixRotY[1][2] = 0;

	matrixRotY[2][0] = Math.sin(rotationStep);
	matrixRotY[2][1] = 0;
	matrixRotY[2][2] = Math.cos(rotationStep);


	var	matrixRotX = new Array();
	
	matrixRotX[0] = new Array();
	matrixRotX[1] = new Array();
	matrixRotX[2] = new Array();

	matrixRotX[0][0] = 1;
	matrixRotX[0][1] = 0;
	matrixRotX[0][2] = 0;

	matrixRotX[1][0] = 0;
	matrixRotX[1][1] = Math.cos(rotationStep);
	matrixRotX[1][2] = -Math.sin(rotationStep);

	matrixRotX[2][0] = 0;
	matrixRotX[2][1] = Math.sin(rotationStep);
	matrixRotX[2][2] = Math.cos(rotationStep);


	var	ZoomInMatrix3D = new Array();
	
	ZoomInMatrix3D[0] = new Array();
	ZoomInMatrix3D[1] = new Array();
	ZoomInMatrix3D[2] = new Array();

	ZoomInMatrix3D[0][0] = 1.25;
	ZoomInMatrix3D[0][1] = 0;
	ZoomInMatrix3D[0][2] = 0;

	ZoomInMatrix3D[1][0] = 0;
	ZoomInMatrix3D[1][1] = 1.25;
	ZoomInMatrix3D[1][2] = 0;

	ZoomInMatrix3D[2][0] = 0;
	ZoomInMatrix3D[2][1] = 0;
	ZoomInMatrix3D[2][2] = 1.25;


	var	ZoomOutMatrix3D = new Array();
	
	ZoomOutMatrix3D[0] = new Array();
	ZoomOutMatrix3D[1] = new Array();
	ZoomOutMatrix3D[2] = new Array();

	ZoomOutMatrix3D[0][0] = 0.8;
	ZoomOutMatrix3D[0][1] = 0;
	ZoomOutMatrix3D[0][2] = 0;

	ZoomOutMatrix3D[1][0] = 0;
	ZoomOutMatrix3D[1][1] = 0.8;
	ZoomOutMatrix3D[1][2] = 0;

	ZoomOutMatrix3D[2][0] = 0;
	ZoomOutMatrix3D[2][1] = 0;
	ZoomOutMatrix3D[2][2] = 0.8;



	function axis() {

		context.strokeStyle = '#000000';

		var startPoint = new Array();
		var endPoint = new Array();

		startPoint = getScreenPoint(0, 0, 0);
		endPoint = getScreenPoint(0, 0, 1.5);

		context.beginPath();
      		context.moveTo(startPoint[0],startPoint[1]);
	      	context.lineTo(endPoint[0], endPoint[1]);
		context.stroke();	
		context.closePath();

		context.fillText("X", endPoint[0], endPoint[1]);

		startPoint = getScreenPoint(0, 0, 0);
		endPoint = getScreenPoint(0, Math.PI/2, 1.5);

		context.beginPath();
      		context.moveTo(startPoint[0],startPoint[1]);
	      	context.lineTo(endPoint[0], endPoint[1]);
		context.stroke();	
		context.closePath();

		context.fillText("Y", endPoint[0], endPoint[1]);

		startPoint = getScreenPoint(0, 0, 0);
		endPoint = getScreenPoint(Math.PI/2, 0, 1.5);

		context.beginPath();
      		context.moveTo(startPoint[0],startPoint[1]);
	      	context.lineTo(endPoint[0], endPoint[1]);
		context.stroke();	
		context.closePath();

		context.fillText("Z", endPoint[0], endPoint[1]);

	}


	function func(theta, phi) {

		var result;

		//result = Math.cos(theta);//2*(Math.cos(2*theta)*Math.cos(2*phi)*Math.cos(theta));

		result = rootFunc.calculate(theta, phi);

		if (result < 0) {
			result = 0;
		}

		return result;

	}

	var startPoint = new Array();
	var endPoint = new Array();

	function graph3D() {

		context.clearRect(0, 0, canvas.width, canvas.height); 

		axis();

		context.strokeStyle = 'RED';

		var theta;
		var phi;

		for (theta=startTheta; theta<endTheta; theta+=stepTheta) {
			for (phi=startPhi; phi<endPhi; phi+=stepPhi) {

				startPoint = getScreenPoint(theta, phi, func(theta,phi));
				endPoint = getScreenPoint(theta, phi+stepPhi, func(theta, phi+stepPhi));

				context.beginPath();
		      		context.moveTo(startPoint[0],startPoint[1]);
			      	context.lineTo(endPoint[0], endPoint[1]);
      				context.stroke();	
				context.closePath();

			}
		}


		context.strokeStyle = 'GREEN';

		for (phi=startPhi; phi<endPhi; phi+=stepPhi) {
			for (theta=startTheta; theta<endTheta; theta+=stepTheta) {

				startPoint = getScreenPoint(theta, phi, func(theta,phi));
				endPoint = getScreenPoint(theta+stepTheta, phi, func(theta+stepTheta, phi));

				context.beginPath();
		      		context.moveTo(startPoint[0],startPoint[1]);
			      	context.lineTo(endPoint[0], endPoint[1]);
      				context.stroke();	
				context.closePath();


			}
		}




	}



	// Transforms point defined by spheric coordinates into screen point

	function getScreenPoint(theta, phi, rad) {

		var ThreeDimResult = new Array();
		var TwoDimResult = new Array();

		ThreeDimResult = translateToRect(theta, phi, rad);
		ThreeDimResult = transform3D(ThreeDimResult);
		TwoDimResult = project(ThreeDimResult);
		TwoDimResult = mapToScreen(TwoDimResult);

		return TwoDimResult;

	}


	// Translates three speric coordinates into rectangular 
	// coordinates

	function translateToRect(theta, phi, rad) {

		var rectPoint = new Array();

		rectPoint[0] = rad*Math.cos(theta)*Math.cos(phi);
		rectPoint[1] = rad*Math.cos(theta)*Math.sin(phi);
		rectPoint[2] = rad*Math.sin(theta);

		return rectPoint;

	}


	// Transforms between rectangular axis
	
	function transform3D (origPoint) {

		resultPoint = new Array();

		resultPoint[0] = origPoint[0]*matrix3D[0][0];
		resultPoint[0] += origPoint[1]*matrix3D[0][1];
		resultPoint[0] += origPoint[2]*matrix3D[0][2];		

		resultPoint[1] = origPoint[0]*matrix3D[1][0];
		resultPoint[1] += origPoint[1]*matrix3D[1][1];
		resultPoint[1] += origPoint[2]*matrix3D[1][2];		

		resultPoint[2] = origPoint[0]*matrix3D[2][0];
		resultPoint[2] += origPoint[1]*matrix3D[2][1];
		resultPoint[2] += origPoint[2]*matrix3D[2][2];		
	
		return resultPoint;
	}


	// Projects three dimentional point into plane

	function project(threeDimPoint) {

		var twoDimPoint = new Array();

		twoDimPoint[0] = threeDimPoint[0];
		twoDimPoint[1] = threeDimPoint[1];

		return twoDimPoint;

	}



	// Maps graph point to screen coordinates

	function mapToScreen3D(point) {

		var mappedPoint = new Array();

		var A1 = canvas.width/(endX-startX);
		var B1 = -A1 * startX;

		var A2 = canvas.height/(startY-endY);
		var B2 = -A2 * endY;

		mappedPoint[0] = A1*point[0] + B1;
		mappedPoint[1] = A2*point[1] + B2;

		return mappedPoint;

	}


	// Multiplies two matrixes
	
	function multiplyMatrixes3D(firstMatrix, secondMatrix) {

		resultMatrix = new Array();

		resultMatrix[0] = new Array();
		resultMatrix[1] = new Array();
		resultMatrix[2] = new Array();

		var i;
		var j;

		for (i=0; i<3; i++) {
			for (j=0; j<3; j++) {
				resultMatrix[i][j] = firstMatrix[i][0]*secondMatrix[0][j];
				resultMatrix[i][j] += firstMatrix[i][1]*secondMatrix[1][j];
				resultMatrix[i][j] += firstMatrix[i][2]*secondMatrix[2][j];
			}
		}

		return resultMatrix;

	}



