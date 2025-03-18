const map = [0,
	[
		[[1,0,0,1,0,0],[1,0,1,1,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,2,0,0],[0,0,1,0,0,1],[1,1,0,1,0,1],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,0,1,2,0,0],[0,0,1,0,0,1]],
		[[1,1,0,1,0,0],[3,1,1,3,0,0],[2,0,3,1,0,2],[1,0,2,1,0,2],[3,0,1,1,0,2],[0,0,3,0,0,2],[1,0,0,1,0,2],[1,2,1,1,0,2],[0,0,1,1,0,2],[0,1,0,1,0,0],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,2,0,1,0,2],[0,0,1,1,0,2]],
		[[0,1,0,1,0,0],[1,3,0,2,0,2],[0,1,1,0,0,2],[1,1,0,2,0,2],[1,1,1,0,0,2],[0,0,1,0,0,2],[1,1,0,0,0,2],[1,1,1,0,0,2],[0,1,1,0,0,2],[0,1,0,1,0,0],[1,1,0,0,0,2],[0,1,1,3,0,2],[1,1,2,0,0,2],[0,1,1,3,0,2],[1,1,2,0,0,2],[0,1,1,3,0,2],[1,1,2,0,0,2],[0,1,1,3,0,2],[1,1,2,0,0,2],[0,1,1,0,0,2]],
		[[0,1,0,1,0,0],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,0,0,1,0,2],[1,0,1,1,0,2],[0,2,1,1,0,2],[2,0,0,0,0,2],[2,0,2,0,0,2],[3,0,2,0,0,2],[0,1,3,1,0,0],[1,0,0,1,0,2],[2,0,1,1,0,2],[1,3,0,1,0,2],[2,0,1,1,0,2],[1,3,0,1,0,2],[2,0,1,1,0,2],[1,3,0,1,0,2],[2,0,1,1,0,2],[1,3,0,1,0,2],[0,0,1,1,0,2]],
		[[0,1,0,1,0,0],[1,1,0,1,0,2],[3,1,1,1,0,2],[1,1,3,0,0,2],[1,1,1,3,0,2],[2,1,1,0,0,2],[1,0,2,0,0,0],[1,0,1,2,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[1,1,0,0,0,2],[0,1,1,2,0,2],[1,1,0,0,0,2],[0,1,1,2,0,2],[1,1,0,0,0,2],[0,1,1,2,0,2],[1,1,0,0,0,2],[0,1,1,2,0,2],[1,1,0,0,0,2],[0,1,1,2,0,2]],
		[[0,1,0,1,0,0],[1,1,0,0,0,2],[0,1,1,2,0,2],[1,0,0,1,0,2],[0,3,1,1,0,2],[1,0,0,1,0,2],[0,0,1,1,0,2],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,1,0,1,0,1],[1,0,1,0,0,0],[1,2,1,0,0,0],[1,0,1,0,0,0],[1,2,1,0,0,0],[1,0,1,0,0,0],[1,2,1,0,0,0],[1,0,1,0,0,0],[1,2,1,0,0,0],[1,0,1,0,0,0],[0,2,1,0,0,1]],
		[[2,1,0,1,0,0],[1,0,2,1,0,2],[0,2,1,1,0,2],[1,1,0,1,0,2],[2,1,1,1,0,2],[1,1,2,0,0,2],[2,1,1,0,0,2],[1,1,2,1,0,2],[0,1,1,1,0,2],[0,1,0,1,0,0],[1,0,0,1,0,0],[1,0,1,1,0,0],[1,0,1,3,0,0],[1,0,1,2,0,0],[3,0,1,1,0,0],[1,0,3,3,0,2],[2,0,1,3,0,2],[0,0,2,1,0,1],[3,0,0,0,0,2],[0,0,3,1,0,2]],
		[[0,1,0,1,0,0],[1,1,0,0,0,2],[3,1,1,0,0,2],[1,1,3,0,0,2],[0,1,1,0,0,2],[0,0,0,2,0,2],[3,0,0,1,0,1],[1,1,0,0,0,2],[0,1,1,0,0,2],[0,1,0,1,0,0],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,3,0,0,0,2],[0,2,0,0,0,2],[0,1,0,2,0,0],[0,3,0,0,0,2],[0,3,0,0,0,2],[0,1,0,1,0,0],[3,0,0,0,0,2],[0,1,3,2,0,2]],
		[[1,1,0,1,0,1],[1,0,1,0,0,0],[1,0,1,3,0,0],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,2,1,0,0,0],[1,1,1,0,0,1],[1,0,1,2,0,0],[1,0,1,0,0,0],[1,1,1,1,0,1],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[0,2,1,2,0,1],[1,0,0,2,0,1],[1,0,1,0,0,0],[1,1,1,1,0,0],[1,0,1,0,0,0],[0,2,1,0,0,1]],
		[[0,1,0,1,0,0],[1,0,0,2,0,2],[0,3,1,0,0,2],[0,2,0,0,0,2],[1,0,0,1,0,2],[2,0,1,1,0,2],[1,0,2,1,0,2],[1,2,1,1,0,2],[3,0,1,1,0,2],[0,1,3,1,0,0],[1,0,0,1,1,1],[1,0,1,0,1,0],[1,0,1,2,1,0],[1,0,1,0,1,0],[0,2,0,1,1,1],[3,2,0,1,0,2],[0,0,3,0,0,2],[0,1,0,1,0,0],[0,0,0,3,0,2],[0,0,0,3,0,2]],
		[[0,1,0,1,0,0],[1,2,0,1,0,2],[2,0,1,1,0,2],[0,0,2,1,0,1],[1,1,0,1,0,2],[0,1,1,1,0,2],[1,1,0,1,0,2],[1,1,1,1,0,2],[0,1,1,1,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[2,0,0,0,0,2],[2,2,2,1,0,2],[0,0,2,0,0,2],[0,1,0,1,1,0],[3,1,0,3,0,2],[0,0,3,0,0,2],[2,1,0,0,0,1],[1,3,2,0,0,2],[0,3,1,0,0,2]],
		[[0,1,0,1,0,0],[1,1,0,0,0,2],[0,1,1,0,0,2],[0,1,0,1,0,0],[1,1,0,0,0,2],[3,1,1,2,0,2],[1,1,3,0,0,2],[1,1,1,0,0,2],[0,1,1,3,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[1,0,0,0,0,2],[1,1,1,1,0,2],[0,0,1,0,0,2],[0,1,0,1,1,0],[0,3,0,1,0,1],[1,0,0,1,0,2],[0,0,1,1,0,2],[1,0,0,1,0,2],[0,0,1,1,0,2]],
		[[0,1,0,1,0,0],[1,0,0,2,0,1],[1,0,1,0,0,0],[1,1,1,1,0,0],[1,0,1,0,0,0],[0,2,1,0,0,1],[1,3,0,1,0,2],[1,0,1,1,0,2],[0,0,1,1,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[2,0,0,0,0,2],[2,1,2,1,0,2],[0,0,2,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,1,0,1,0,2],[2,1,1,1,0,2],[1,1,2,1,0,2],[0,1,1,1,0,2]],
		[[0,1,0,1,0,0],[1,2,0,1,0,2],[0,0,1,1,0,2],[0,1,0,1,0,0],[2,0,0,0,0,2],[0,0,2,1,0,1],[1,1,0,1,0,2],[1,1,1,1,0,2],[0,1,1,1,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[1,0,0,0,0,2],[1,1,1,1,0,2],[0,0,1,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,1,0,2,0,2],[0,1,1,0,0,2],[1,1,0,0,0,2],[0,1,1,0,0,2]],
		[[3,1,0,1,0,0],[1,1,3,0,0,2],[0,1,1,3,0,2],[2,1,0,0,0,1],[0,0,2,0,0,2],[2,1,0,1,0,0],[1,1,2,0,0,2],[1,1,1,0,0,2],[2,1,1,0,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[2,0,0,0,0,2],[2,1,2,1,0,2],[0,0,2,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,2,0,1,0,0],[1,0,1,1,0,0],[3,0,1,1,0,0],[0,0,3,0,0,2]],
		[[1,1,1,1,0,1],[1,0,1,1,0,1],[1,3,1,1,0,1],[1,0,1,0,0,0],[1,0,1,1,0,0],[1,1,1,2,0,0],[1,0,1,1,0,0],[3,0,1,1,0,0],[0,0,3,0,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[1,0,0,0,0,2],[1,1,1,1,0,2],[0,0,1,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,1,0,2,0,0],[1,1,1,0,0,0],[1,1,1,0,0,0],[1,0,1,0,0,0]],
		[[0,1,0,1,0,0],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,0,0,2,0,2],[2,1,0,0,0,0],[2,2,2,2,0,0],[1,1,2,0,0,0],[1,1,1,0,0,1],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,1,0,1,1,0],[2,0,0,0,0,2],[2,1,2,1,0,2],[0,0,2,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,2,0,1,0,2],[0,0,1,1,0,2],[1,0,0,1,0,2],[0,0,1,1,0,2]],
		[[2,1,0,1,0,0],[1,0,0,0,0,1],[1,0,1,0,0,0],[1,0,1,0,0,0],[2,0,1,0,0,1],[0,2,2,2,0,2],[1,0,3,1,0,2],[1,0,1,0,0,2],[0,0,1,1,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[1,0,0,0,0,2],[1,1,1,1,0,2],[0,0,1,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,1,0,1,0,2],[2,1,1,1,0,2],[1,1,2,1,0,2],[0,1,1,1,0,2]],
		[[0,1,0,1,0,0],[1,0,0,1,0,1],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[0,0,1,0,0,1],[3,1,0,1,0,2],[0,0,3,0,0,2],[0,1,0,1,0,2],[0,1,0,1,0,0],[0,1,0,1,1,0],[2,0,0,0,0,2],[2,1,2,0,0,2],[0,0,2,0,0,2],[0,1,0,1,1,0],[0,1,0,1,0,0],[1,1,0,0,0,2],[0,1,1,0,0,2],[1,1,0,0,0,2],[0,1,1,2,0,2]],
		[[0,1,0,0,0,1],[1,1,0,0,0,1],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,1,1,0,0,0],[2,0,1,0,0,1],[1,1,0,0,0,2],[1,0,1,0,0,2],[0,1,1,0,0,2],[0,1,3,1,0,0],[1,1,0,0,1,1],[1,0,1,0,1,0],[1,0,1,0,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[1,1,0,0,0,1],[1,0,1,0,0,0],[1,0,1,0,0,0],[1,0,1,0,0,0],[3,2,1,0,0,1]]
	]
]
let x = 0;
let y = 0;
let z = 1;
let d = 3;
let l = 0;
let m = 20;
function dice (a,b) {
	let d = 0;
	for (let c = 0; c < a; c ++) {
		d += b - Math.trunc(Math.random() * b);
	}
	return d;
}
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
		context.fillStyle = "#FFFFFF";
		context.fillRect(33,51,702,6);
		context.fillRect(33,663,702,6);
		context.fillRect(30,54,6,6);
		context.fillRect(30,660,6,6);
		context.fillRect(732,54,6,6);
		context.fillRect(732,660,6,6);
		context.fillRect(27,57,6,606);
		context.fillRect(735,57,6,606);
		if (map[z][y][x][4] == 0) {
			if (l == 1) {
				if (map[z][(y + 3 * dyf(d) + dyf((d + 3) % 4) + m) % m][(x + 3 * dxf(d) + dxf((d + 3) % 4)+ m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(315,336,48,48);
					context.fillStyle = "#FFFFFF";
					context.fillRect(315,336,48,3);
					context.fillRect(315,381,48,3);
					context.fillRect(315,339,3,42);
					context.fillRect(360,339,3,42);
					if (map[z][(y + 3 * dyf(d) + dyf((d + 3) % 4)+ m) % m][(x + 3 * dxf(d) + dxf((d + 3) % 4)+ m) % m][d] >= 2) {
						context.fillRect(327,348,24,3);
						context.fillRect(327,351,3,30);
						context.fillRect(348,351,3,30);
					}
				}
				if (map[z][(y + 3 * dyf(d) + dyf((d + 1) % 4) + m) % m][(x + 3 * dxf(d) + dxf((d + 1) % 4)+ m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(405,336,48,48);
					context.fillStyle = "#FFFFFF";
					context.fillRect(405,336,48,3);
					context.fillRect(405,381,48,3);
					context.fillRect(405,339,3,42);
					context.fillRect(450,339,3,42);
					if (map[z][(y + 3 * dyf(d) + dyf((d + 1) % 4)+ m) % m][(x + 3 * dxf(d) + dxf((d + 1) % 4)+ m) % m][d] >= 2) {
						context.fillRect(417,348,24,3);
						context.fillRect(417,351,3,30);
						context.fillRect(438,351,3,30);
					}
				}
				if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(360,336,48,48);
					context.fillStyle = "#FFFFFF";
					context.fillRect(360,336,48,3);
					context.fillRect(360,381,48,3);
					context.fillRect(360,339,3,42);
					context.fillRect(405,339,3,42);
					if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][d] >= 2) {
						context.fillRect(372,348,24,3);
						context.fillRect(372,351,3,30);
						context.fillRect(393,351,3,30);
					}
				}
				if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][(d + 3) % 4] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(336,72,27,576);
					context.fillStyle = "#FFFFFF";
					context.fillRect(336,315,3,90);
					context.fillRect(360,339,3,42);
					for (let n = 0; n < 9; n++) {
						context.fillRect(336 + 3 * n,312 + 3 * n,3,3);
						context.fillRect(336 + 3 * n,405 - 3 * n,3,3);
					}
					if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][(d + 3) % 4] >= 2) {
						context.fillRect(345,342,3,54);
						context.fillRect(354,345,3,42);
						context.fillRect(348,342,3,3);
						context.fillRect(351,345,3,3);		
					}
				}
				if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][(d + 1) % 4] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(405,72,27,576);
					context.fillStyle = "#FFFFFF";
					context.fillRect(429,315,3,90);
					context.fillRect(405,339,3,42);
					for (let n = 0; n < 9; n++) {
						context.fillRect(429 - 3 * n,312 + 3 * n,3,3);
						context.fillRect(429 - 3 * n,405 - 3 * n,3,3);
					}
					if (map[z][(y + 3 * dyf(d) + m) % m][(x + 3 * dxf(d) + m) % m][(d + 1) % 4] >= 2) {
						context.fillRect(420,342,3,54);
						context.fillRect(411,345,3,42);
						context.fillRect(417,342,3,3);
						context.fillRect(414,345,3,3);		
					}
				}
				if (map[z][(y + 2 * dyf(d) + dyf((d + 3) % 4) + m) % m][(x + 2 * dxf(d) + dxf((d + 3) % 4) + m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(243,312,96,96);
					context.fillStyle = "#FFFFFF";
					context.fillRect(243,312,96,3);
					context.fillRect(243,405,96,3);
					context.fillRect(243,315,3,90);
					context.fillRect(336,315,3,90);
					if (map[z][(y + 2 * dyf(d) + dyf((d + 3) % 4) + m) % m][(x + 2 * dxf(d) + dxf((d + 3) % 4) + m) % m][d] >= 2) {
						context.fillRect(267,336,48,3);
						context.fillRect(267,339,3,66);
						context.fillRect(312,339,3,66);
					}
				}
				if (map[z][(y + 2 * dyf(d) + dyf((d + 1) % 4) + m) % m][(x + 2 * dxf(d) + dxf((d + 1) % 4) + m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(429,312,96,96);
					context.fillStyle = "#FFFFFF";
					context.fillRect(429,312,96,3);
					context.fillRect(429,405,96,3);
					context.fillRect(429,315,3,90);
					context.fillRect(522,315,3,90);
					if (map[z][(y + 2 * dyf(d) + dyf((d + 1) % 4) + m) % m][(x + 2 * dxf(d) + dxf((d + 1) % 4) + m) % m][d] >= 2) {
						context.fillRect(453,336,48,3);
						context.fillRect(453,339,3,66);
						context.fillRect(498,339,3,66);
					}
				}
				if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][d] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(336,312,96,96);
					context.fillStyle = "#FFFFFF";
					context.fillRect(336,312,96,3);
					context.fillRect(336,405,96,3);
					context.fillRect(336,315,3,90);
					context.fillRect(429,315,3,90);
					if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][d] >= 2) {
						context.fillRect(360,336,48,3);
						context.fillRect(360,339,3,66);
						context.fillRect(405,339,3,66);
					}
				}
				if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][(d + 3) % 4] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(288,72,51,576);
					context.fillStyle = "#FFFFFF";
					context.fillRect(288,267,3,186);
					context.fillRect(336,315,3,90);
					for (let n = 0; n < 17; n++) {
						context.fillRect(288 + 3 * n,264 + 3 * n,3,3);
						context.fillRect(288 + 3 * n,453 - 3 * n,3,3);
					}
					if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][(d + 3) % 4] >= 2) {
						context.fillRect(306,324,3,111);
						context.fillRect(327,330,3,84);
						for (let n = 0; n < 4; n++) {
							context.fillRect(306 + 6 * n,321 + 3 * n,6,3);
						}		
					}
				}
				if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][(d + 1) % 4] != 1) {
					context.fillStyle = "#000000";
					context.fillRect(429,72,51,576);
					context.fillStyle = "#FFFFFF";
					context.fillRect(477,267,3,186);
					context.fillRect(429,315,3,90);
					for (let n = 0; n < 17; n++) {
						context.fillRect(477 - 3 * n,264 + 3 * n,3,3);
						context.fillRect(477 - 3 * n,453 - 3 * n,3,3);
					}
					if (map[z][(y + 2 * dyf(d) + m) % m][(x + 2 * dxf(d) + m) % m][(d + 1) % 4] >= 2) {
						context.fillRect(459,324,3,111);
						context.fillRect(438,330,3,84);
						for (let n = 0; n < 4; n++) {
							context.fillRect(456 - 6 * n,321 + 3 * n,6,3);
						}		
					}
				}
			}
			if (map[z][(y + dyf(d) + dyf((d + 3) % 4) + m) % m][(x + dxf(d) + dxf((d + 3) % 4) + m) % m][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(99,264,192,192);
				context.fillStyle = "#FFFFFF";
				context.fillRect(99,264,192,3);
				context.fillRect(99,453,192,3);
				context.fillRect(99,267,3,186);
				context.fillRect(288,267,3,186);
				if (map[z][(y + dyf(d) + dyf((d + 3) % 4) + m) % m][(x + dxf(d) + dxf((d + 3) % 4) + m) % m][d] == 2 || map[z][(y + dyf(d) + dyf((d + 3) % 4) + m) % m][(x + dxf(d) + dxf((d + 3) % 4) + m) % m][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(147,312,96,3);
					context.fillRect(147,315,3,138);
					context.fillRect(240,315,3,138);
				}
			}
			if (map[z][(y + dyf(d) + dyf((d + 1) % 4) + m) % m][(x + dxf(d) + dxf((d + 1) % 4) + m) % m][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(477,264,192,192);
				context.fillStyle = "#FFFFFF";
				context.fillRect(477,264,192,3);
				context.fillRect(477,453,192,3);
				context.fillRect(477,267,3,186);
				context.fillRect(666,267,3,186);
				if (map[z][(y + dyf(d) + dyf((d + 1) % 4) + m) % m][(x + dxf(d) + dxf((d + 1) % 4) + m) % m][d] == 2 || map[z][(y + dyf(d) + dyf((d + 1) % 4) + m) % m][(x + dxf(d) + dxf((d + 1) % 4) + m) % m][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(525,312,96,3);
					context.fillRect(525,315,3,138);
					context.fillRect(618,315,3,138);
				}
			}
			if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(288,264,192,192);
				context.fillStyle = "#FFFFFF";
				context.fillRect(288,264,192,3);
				context.fillRect(288,453,192,3);
				context.fillRect(288,267,3,186);
				context.fillRect(477,267,3,186);
				if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][d] == 2 || map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(336,312,96,3);
					context.fillRect(336,315,3,138);
					context.fillRect(429,315,3,138);
				}
			}
			if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 3) % 4] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(192,72,99,576);
				context.fillStyle = "#FFFFFF";
				context.fillRect(192,171,3,378);
				context.fillRect(288,267,3,186);
				for(let n = 0; n < 33; n++) {
					context.fillRect(192 + 3 * n,168 + 3 * n,3,3);
					context.fillRect(192 + 3 * n,549 - 3 * n,3,3);

				}
				if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 3) % 4] == 2 || map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 3) % 4] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(228,285,3,231);
					context.fillRect(273,306,3,162);
					for(let n = 0; n < 8; n++) {
						context.fillRect(228 + 6 * n,282 + 3 * n,6,3);
					} 
				}
			}
			if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 1) % 4] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(477,72,99,576);
				context.fillStyle = "#FFFFFF";
				context.fillRect(573,171,3,378);
				context.fillRect(477,267,3,186);
				for(let n = 0; n < 33; n++) {
					context.fillRect(573 - 3 * n,168 + 3 * n,3,3);
					context.fillRect(573 - 3 * n,549 - 3 * n,3,3);

				}
				if (map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 1) % 4] == 2 || map[z][(y + dyf(d) + m) % m][(x + dxf(d) + m) % m][(d + 1) % 4] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(537,285,3,231);
					context.fillRect(492,306,3,162);
					for(let n = 0; n < 8; n++) {
						context.fillRect(534 - 6 * n,282 + 3 * n,6,3);
					} 
				}
			}
			if (map[z][(y + dyf((d + 3) % 4) + m) % m][(x + dxf((d + 3) % 4) + m) % m][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(48,168,147,384);
				context.fillStyle = "#FFFFFF";
				context.fillRect(48,168,147,3);
				context.fillRect(48,549,147,3);
				context.fillRect(192,171,3,378);
				if (map[z][(y + dyf((d + 3) % 4) + m) % m][(x + dxf((d + 3) % 4) + m) % m][d] == 2 || map[z][(y + dyf((d + 3) % 4) + m) % m][(x + dxf((d + 3) % 4) + m) % m][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(48,264,51,3);
					context.fillRect(96,267,3,282);
				}
			}
			if (map[z][(y + dyf((d + 1) % 4) + m) % m][(x + dxf((d + 1) % 4) + m) % m][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(573,168,147,384);
				context.fillStyle = "#FFFFFF";
				context.fillRect(573,168,147,3);
				context.fillRect(573,549,147,3);
				context.fillRect(573,171,3,378);
				if (map[z][(y + dyf((d + 1) % 4) + m) % m][(x + dxf((d + 1) % 4) + m) % m][d] == 2 || map[z][(y + dyf((d + 1) % 4) + m) % m][(x + dxf((d + 1) % 4) + m) % m][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(669,264,51,3);
					context.fillRect(669,267,3,282);
				}
			}
			if (map[z][y][x][d] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(192,168,384,384);
				context.fillStyle = "#FFFFFF";
				context.fillRect(192,168,384,3);
				context.fillRect(192,549,384,3);
				context.fillRect(192,171,3,378);
				context.fillRect(573,171,3,378);
				if (map[z][y][x][d] == 2 || map[z][y][x][d] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(288,264,192,3);
					context.fillRect(288,267,3,282);
					context.fillRect(477,267,3,282);
				}
			}
			if (map[z][y][x][(d + 3) % 4] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(48,72,147,576);
				context.fillStyle = "#FFFFFF";
				context.fillRect(192,171,3,378);
				for (let n = 0; n < 33; n++) {
					context.fillRect(192 - 3 * n,168 - 3 * n,3,3);
					context.fillRect(192 - 3 * n,549 + 3 * n,3,3);
				}
				if (map[z][y][x][(d + 3) % 4] == 2 || map[z][y][x][(d + 3) % 4] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(138,240,3,363);
					for (let n = 0; n < 13; n++) {
						context.fillRect(135 - 6 * n,237 - 3 * n,6,3);
					}
				}
			}
			if (map[z][y][x][(d + 1) % 4] != 1) {
				context.fillStyle = "#000000";
				context.fillRect(573,72,147,576);
				context.fillStyle = "#FFFFFF";
				context.fillRect(573,171,3,378);
				for (let n = 0; n < 33; n++) {
					context.fillRect(573 + 3 * n,168 - 3 * n,3,3);
					context.fillRect(573 + 3 * n,549 + 3 * n,3,3);
				}
				if (map[z][y][x][(d + 1) % 4] == 2 || map[z][y][x][(d + 1) % 4] == 3 && (Math.random() < 0.20 || l == 1)) {
					context.fillRect(627,240,3,363);
					for (let n = 0; n < 13; n++) {
						context.fillRect(627 + 6 * n,237 - 3 * n,6,3);
					}
				}
			}
		}else if (map[z][y][x][4] == 1) {
			l = 0;
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
		if (map[z][y][x][d] != 0) {
			x = (x + dxf(d) + m) % m;
			y = (y + dyf(d) + m) % m;
			draw();
			let redraw = 0;
			if (z == 1 && (x == 4 && y == 14 || x == 13 && y == 14 || x == 16 && y == 9)) {
				x = 7;
				y = 3;
				redraw = 1;
			}else if (z == 1 && (x == 4 & y == 13 || x == 6 && y == 3 || x == 18 && y == 7)) {
				x = 5;
				y = 1;
				redraw = 1;
			}else if (z == 1 && x == 15 && y == 7) {
				x = 3;
				y = 16;
				redraw = 1;
			}else if (z == 1 && x == 17 && y == 10) {
				x = 3;
				y = 14;
				redraw = 1;
			}else if (z == 1 && x == 11 && y == 14) {
				x = 19;
				y = 10;
				redraw = 1;
			}
			if (z == 1 && (x == 11 && y == 10 || x == 13 && (y == 7 || y == 18))) {
				d = dice(1,4) - 1;
				redraw = 1;
			}
			if (redraw == 1) {
				setTimeout(function(){draw();},100);
			}
		}
		else {
			const canvas = document.getElementById("canvas");
			if (canvas.getContext) {
				const context = canvas.getContext("2d");
				context.fillStyle = "#FFFFFF";
				context.fillRect(297,219,174,6);
				context.fillRect(297,303,174,6);
				context.fillRect(294,222,6,6);
				context.fillRect(468,222,6,6);
				context.fillRect(294,300,6,6);
				context.fillRect(468,300,6,6);
				context.fillRect(294,222,6,6);
				context.fillRect(291,225,6,78);
				context.fillRect(471,225,6,78);
				setTimeout(function(){draw();},100);
			}		
		}
	}
	if (e.key === "m") {
		l = (l + 1) % 2;
		draw();
	}
	if (e.key === "h") {
		if (d == 0) {
			var dx = "東";
		}else if (d == 1) {
			var dx = "南";
		}else if (d == 2) {
			var dx = "西";
		}else {
			var dx = "北"
		}
		alert(dx + "を向いている　東に"+ x + "　北に" + y + "　地下"+ z +"階にいる");
	}
}
draw();
document.addEventListener("keydown", manipulation);
