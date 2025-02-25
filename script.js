const map = [[[0,1,1,0],[0,1,0,1],[0,1,0,2],[1,1,0,1],[1,0,1,0],[1,0,1,0]],[[1,0,1,0],[0,1,1,0],[0,2,0,0],[1,1,0,0],[1,0,1,0],[1,0,1,2]],[[1,0,0,0],[0,0,1,1],[0,0,0,1],[1,0,0,1],[1,0,1,0],[0,2,1,0]],[[3,0,1,0],[0,1,3,0],[0,1,0,0],[1,1,0,0],[2,0,1,0],[1,0,2,1]],[[1,0,1,0],[0,0,1,0],[0,0,0,0],[1,0,0,0],[1,0,1,0],[0,1,1,0]],[[1,0,1,2],[0,0,1,1],[0,0,0,1],[3,0,0,1],[1,0,1,0],[1,0,1,0]]]
let x = 0;
let y = 0;
let d = 3;
function dxf(a) {
	if (a == 0) {
		var dx = 1;
	}else if (a == 2) {
		var dx = -1;
	}else {
		var dx = 0;
	}
	return dx;
}
function dyf(a) {
	if (a == 3) {
		var dy = 1;
	}else if (a == 1) {
		var dy = -1;
	}else {
		var dy = 0;
	}
	return dy;
}
function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const context = canvas.getContext("2d");		
		context.fillStyle = "#000000";
		context.fillRect(0,0,768,720);
		context.strokeStyle = "#FFFFFF";
		var lf = 0;
		var rf = 0;
		var ff = 0;
		if (map[y][x][d] != 0) {
			ff = 1;
			context.beginPath();
			context.moveTo(144,120);
			context.lineTo(624,120);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(624,120);
			context.lineTo(624,600);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(624,600);
			context.lineTo(144,600);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(144,600);
			context.lineTo(144,120);
			context.closePath();
			context.stroke();
			if (map[y][x][d] == 2) {
				context.beginPath();
				context.moveTo(264,240);
				context.lineTo(504,240);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(264,240);
				context.lineTo(264,600);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(504,240);
				context.lineTo(504,600);
				context.closePath();
				context.stroke();
			}else if (map[y][x][d] == 3 && Math.random() < 0.20) {
				context.beginPath();
				context.moveTo(264,240);
				context.lineTo(504,240);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(264,240);
				context.lineTo(264,600);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(504,240);
				context.lineTo(504,600);
				context.closePath();
				context.stroke();
			}
		}
		if (map[y][x][(d + 3) % 4] != 0) {
			lf = 1;
			context.beginPath();
			context.moveTo(48,24);
			context.lineTo(144,120);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(144,120);
			context.lineTo(144,600);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(144,600);
			context.lineTo(48,696);
			context.closePath();
			context.stroke();
			if (map[y][x][(d + 3) % 4] == 2) {			
				context.beginPath();
				context.moveTo(24,180);
				context.lineTo(96,216);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(96,216);
				context.lineTo(96,648);
				context.closePath();
				context.stroke();
			}else if (map[y][x][(d + 3) % 4] == 3 && Math.random() < 0.20) {			
				context.beginPath();
				context.moveTo(24,180);
				context.lineTo(96,216);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(96,216);
				context.lineTo(96,648);
				context.closePath();
				context.stroke();
			}
		}
		if (map[y][x][(d + 1) % 4] != 0) {
			rf = 1;
			context.beginPath();
			context.moveTo(720,24);
			context.lineTo(624,120);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(624,120);
			context.lineTo(624,600);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(624,600);
			context.lineTo(720,696);
			context.closePath();
			context.stroke();
			if (map[y][x][(d + 1) % 4] == 2) {			
				context.beginPath();
				context.moveTo(746,180);
				context.lineTo(672,216);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(672,216);
				context.lineTo(672,648);
				context.closePath();
				context.stroke();
			}else if (map[y][x][(d + 1) % 4] == 3 && Math.random() < 0.20) {			
				context.beginPath();
				context.moveTo(746,180);
				context.lineTo(672,216);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(672,216);
				context.lineTo(672,648);
				context.closePath();
				context.stroke();
			}
		}
		if (ff == 1) {
			if (lf == 0 && map[(y + dyf((d + 3) % 4) + 6) % 6][(x + dxf((d + 3) % 4) + 6) % 6][d] != 0) {
				context.beginPath();
				context.moveTo(24,120);
				context.lineTo(144,120);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(24,600);
				context.lineTo(144,600);
				context.closePath();
				context.stroke();
			}else if (lf == 0) {
				if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] != 0) {
					context.beginPath();
					context.moveTo(24,240);
					context.lineTo(144,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(24,480);
					context.lineTo(144,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(24,240);
					context.lineTo(24,480);
					context.closePath();
					context.stroke();
					if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 2) {
						context.beginPath();
						context.moveTo(84,300);
						context.lineTo(144,300);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(84,300);
						context.lineTo(84,480);
						context.closePath();
						context.stroke();
					}else if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(84,300);
						context.lineTo(144,300);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(84,300);
						context.lineTo(84,480);
						context.closePath();
						context.stroke();
					}
				}
			}			
			if (rf == 0 && map[(y + dyf((d + 1) % 4) + 6) % 6][(x + dxf((d + 1) % 4) + 6) % 6][d] != 0) {
				context.beginPath();
				context.moveTo(744,120);
				context.lineTo(624,120);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(744,600);
				context.lineTo(624,600);
				context.closePath();
				context.stroke();
			}else if (rf == 0) {
				if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] != 0) {
					context.beginPath();
					context.moveTo(744,240);
					context.lineTo(624,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(744,480);
					context.lineTo(624,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(744,240);
					context.lineTo(744,480);
					context.closePath();
					context.stroke();
					if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 2) {
						context.beginPath();
						context.moveTo(684,300);
						context.lineTo(624,300);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(684,300);
						context.lineTo(684,480);
						context.closePath();
						context.stroke();
					}else if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(684,300);
						context.lineTo(624,300);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(684,300);
						context.lineTo(684,480);
						context.closePath();
						context.stroke();
					}
				}
			}
		}else {
			if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][d] != 0) {				
				context.beginPath();
				context.moveTo(264,240);
				context.lineTo(504,240);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(504,240);
				context.lineTo(504,480);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(504,480);
				context.lineTo(264,480);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(264,480);
				context.lineTo(264,240);
				context.closePath();
				context.stroke();
				if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][d] == 2) {				
					context.beginPath();
					context.moveTo(324,300);
					context.lineTo(444,300);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(444,300);
					context.lineTo(444,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(324,300);
					context.lineTo(324,480);
					context.closePath();
					context.stroke();
				}else if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {				
					context.beginPath();
					context.moveTo(324,300);
					context.lineTo(444,300);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(444,300);
					context.lineTo(444,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(324,300);
					context.lineTo(324,480);
					context.closePath();
					context.stroke();
				}
			}
			if (lf == 1) {
				if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] != 0) {
					lf = 2;
					context.beginPath();
					context.moveTo(144,120);
					context.lineTo(264,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(264,240);
					context.lineTo(264,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(264,480);
					context.lineTo(144,600);
					context.closePath();
					context.stroke();
					if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] == 2) {
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(174,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(234,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(234,285);
						context.lineTo(234,510);
						context.closePath();
						context.stroke();
					}else if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(174,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(234,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(234,285);
						context.lineTo(234,510);
						context.closePath();
						context.stroke();
					}
				}else {
					if(map[(y + dyf((d + 3) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(144,240);
						context.lineTo(264,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(144,480);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(264,240);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						if(map[(y + dyf((d + 3) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(144,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}else if(map[(y + dyf((d + 3) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(144,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}
					}
				}
			}else {
				if (map[(y + dyf((d + 3) % 4) + 6) % 6][(x + dxf((d + 3) % 4) + 6) % 6][d] != 0) {
					lf += 1
					context.beginPath();
					context.moveTo(24,120);
					context.lineTo(144,120);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(24,600);
					context.lineTo(144,600);
					context.closePath();
					context.stroke();
					context.moveTo(144,120);
					context.lineTo(144,600);
					context.closePath();
					context.stroke();
				}
				if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] != 0) {
					lf += 2;
					context.beginPath();
					context.moveTo(144,120);
					context.lineTo(264,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(264,240);
					context.lineTo(264,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(264,480);
					context.lineTo(144,600);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(144,120);
					context.lineTo(144,600);
					context.closePath();
					context.stroke();
					if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] == 2) {
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(174,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(234,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(234,285);
						context.lineTo(234,510);
						context.closePath();
						context.stroke();
					}else if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 3) % 4] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(174,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(174,255);
						context.lineTo(234,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(234,285);
						context.lineTo(234,510);
						context.closePath();
						context.stroke();
					}
				}if(lf == 0) {
					if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(24,240);
						context.lineTo(264,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(24,480);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(24,240);
						context.lineTo(24,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(264,240);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(84,480);
							context.closePath();
							context.stroke();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(84,480);
							context.closePath();
							context.stroke();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}
					}
				}else if (lf == 1) {
					if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(144,240);
						context.lineTo(264,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(144,480);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(264,240);
						context.lineTo(264,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(144,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(144,300);
							context.lineTo(204,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(204,300);
							context.lineTo(204,480);
							context.closePath();
							context.stroke();
						}
					}
				}else if (lf == 2) {
					if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(24,240);
						context.lineTo(144,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(24,480);
						context.lineTo(144,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(24,240);
						context.lineTo(24,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(144,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(84,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 3) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 3) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(144,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(84,300);
							context.lineTo(84,480);
							context.closePath();
							context.stroke();
						}
					}					
				}
			}
			if (rf == 1) {
				if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] != 0) {
					rf = 2;
					context.beginPath();
					context.moveTo(624,120);
					context.lineTo(504,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(504,240);
					context.lineTo(504,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(504,480);
					context.lineTo(624,600);
					context.closePath();
					context.stroke();
					if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] == 2) {
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(594,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(534,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(534,285);
						context.lineTo(534,510);
						context.closePath();
						context.stroke();
					}else if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(594,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(534,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(534,285);
						context.lineTo(534,510);
						context.closePath();
						context.stroke();
					}
				}else {
					if(map[(y + dyf((d + 1) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(624,240);
						context.lineTo(504,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(624,480);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(504,240);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						if(map[(y + dyf((d + 1) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(624,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}else if(map[(y + dyf((d + 1) % 4)+ dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(624,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}
					}
				}
			}else {
				if (map[(y + dyf((d + 1) % 4) + 6) % 6][(x + dxf((d + 1) % 4) + 6) % 6][d] != 0) {
					rf += 1
					context.beginPath();
					context.moveTo(744,120);
					context.lineTo(624,120);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(744,600);
					context.lineTo(624,600);
					context.closePath();
					context.stroke();
					context.moveTo(624,120);
					context.lineTo(624,600);
					context.closePath();
					context.stroke();
				}
				if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] != 0) {
					rf += 2;
					context.beginPath();
					context.moveTo(624,120);
					context.lineTo(504,240);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(504,240);
					context.lineTo(504,480);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(504,480);
					context.lineTo(624,600);
					context.closePath();
					context.stroke();
					context.beginPath();
					context.moveTo(624,120);
					context.lineTo(624,600);
					context.closePath();
					context.stroke();
					if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] == 2) {
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(594,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(534,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(534,285);
						context.lineTo(534,510);
						context.closePath();
						context.stroke();
					}else if(map[(y + dyf(d) + 6) % 6][(x + dxf(d) + 6) % 6][(d + 1) % 4] == 3 && Math.random() < 0.20) {
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(594,570);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(594,255);
						context.lineTo(534,285);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(534,285);
						context.lineTo(534,510);
						context.closePath();
						context.stroke();
					}
				}if(rf == 0) {
					if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(744,240);
						context.lineTo(504,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(744,480);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(744,240);
						context.lineTo(744,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(504,240);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(684,480);
							context.closePath();
							context.stroke();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(684,480);
							context.closePath();
							context.stroke();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}
					}
				}else if (rf == 1) {
					if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(624,240);
						context.lineTo(504,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(624,480);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(504,240);
						context.lineTo(504,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(624,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(624,300);
							context.lineTo(564,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(564,300);
							context.lineTo(564,480);
							context.closePath();
							context.stroke();
						}
					}
				}else if (rf == 2) {
					if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] != 0) {
						context.beginPath();
						context.moveTo(744,240);
						context.lineTo(624,240);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(744,480);
						context.lineTo(624,480);
						context.closePath();
						context.stroke();
						context.beginPath();
						context.moveTo(744,240);
						context.lineTo(744,480);
						context.closePath();
						context.stroke();
						if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 2) {
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(624,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(684,480);
							context.closePath();
							context.stroke();
						}else if (map[(y + dyf((d + 1) % 4) + dyf(d) + 6) % 6][(x + dxf((d + 1) % 4) + dxf(d) + 6) % 6][d] == 3 && Math.random() < 0.20) {
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(624,300);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(684,300);
							context.lineTo(684,480);
							context.closePath();
							context.stroke();
						}
					}					
				}
			}
		}
	}
}
function manipulation(e) {
	if (e.key === "a") {
		d = (d + 3) % 4;
		draw();
	}
	if (e.key === "d") {
		d = (d + 1) % 4;
		draw();
	}
	if (e.key === "s") {
		d = (d + 2) % 4;
		draw();
	}
	if (e.key === "w") {
		if(map[y][x][d] != 1) {
			x = (x + dxf(d) + 6) % 6;
			y = (y + dyf(d) + 6) % 6;
			draw();
		} 
		else {
			alert("いてっ！");
		}
	}
}
draw();
document.addEventListener("keydown", manipulation);