function convertToPix(x, y){
	return screenWidth*x/roomWidth, screenHeight*y/roomHeight;
}

function convertToWorld(x, y){
	return roomWidth*x/screenWidth, roomHeight*y/screenHeight;
}

function createArrow(x, y, ang, value, maxvalue, width, height, trgWidth=undefined, trgHeight=undefined){
    if (trgWidth === undefined){
        trgWidth = 0.8*width;
    }

    if (trgHeight === undefined){
        trgHeight = 1.2*height;
    }

    
}