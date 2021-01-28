//Images
const grass_map_img = 'url("Assets/Images/Background/Maps/grass_background.png")';
const red_tank = document.getElementById("Red_Tank_Image");
const blue_tank = document.getElementById("Blue_Tank_Image");
const green_tank = document.getElementById("Green_Tank_Image");
const dark_tank = document.getElementById("Dark_Tank_Image");
const explosion_img = document.getElementById("Explosion_Image");
const metal_crate_img = document.getElementById("Metal_Crate");
const wood_crate_img = document.getElementById("Wood_Crate");
//Player Variables
var default_player_health = 100;

var player_1_img_tank;
var player_2_img_tank;
var player_1_img_bullet;
var player_2_img_bullet;

var rotation_speed = 0.04;
var movementspeed = 1;
var bulletspeed = 3;
var damage = 20;
var reload_time = 3000;

var game_ended = false;

class Player{
    constructor(tank_img, health, x, y, angle, reload_time){
        this.x = x;
        this.y = y;
        this.health = health;
        this.angle = angle;
        this.tank_img = tank_img;
        this.reload_time = reload_time;
    }
    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.tank_img, -21, -23, 42, 46);
        ctx.restore();
    }
}

class Bullet{
    constructor(x, y, radius, angle){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.angle = angle;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'black';
        ctx.fill();
    }
    update(){
        this.draw();
        this.x += bulletspeed * Math.cos(this.angle);
        this.y += bulletspeed * Math.sin(this.angle);
    }
}

var player_1;
var player_2;

var can_shoot_1 = true;
var can_shoot_2 = true;

const bullet_List_1 = [];
const bullet_List_2 = [];

var player_1_turn_left_pressed = false;
var player_1_turn_right_pressed = false;
var player_1_forward_pressed = false;
var player_1_backward_pressed = false;
var player_1_shoot_pressed = false;
var player_2_turn_left_pressed = false;
var player_2_turn_right_pressed = false;
var player_2_forward_pressed = false;
var player_2_backward_pressed = false;
var player_2_shoot_pressed = false;

function start_Game(){
    if(game_ended == false){
        game_div_1.style.visibility = 'hidden';
        game_div.style.visibility = "visible";

        backgroundmusic.loop = true;
        backgroundmusic.currentTime = 0;
        backgroundmusic.play();

        game_canvas.style.backgroundImage = grass_map_img;
    
        player_1_tank_img.style.backgroundImage = player_1_tank;
        player_2_tank_img.style.backgroundImage = player_2_tank;
        if(player_1_tank == blue_tank_img){player_1_img_tank = blue_tank;}
        else if(player_1_tank == red_tank_img){player_1_img_tank = red_tank;}
        else if(player_1_tank == green_tank_img){player_1_img_tank = green_tank;}
        else if(player_1_tank == dark_tank_img){player_1_img_tank = dark_tank;}
        if(player_2_tank == blue_tank_img){player_2_img_tank = blue_tank;}
        else if(player_2_tank == red_tank_img){player_2_img_tank = red_tank;}
        else if(player_2_tank == green_tank_img){player_2_img_tank = green_tank;}
        else if(player_2_tank == dark_tank_img){player_2_img_tank = dark_tank;}
    
        player_1 = new Player(player_1_img_tank, default_player_health, 100, ctx_height / 2, 270 * Math.PI / 180);
        player_2 = new Player(player_2_img_tank, default_player_health, ctx_width - 100, ctx_height / 2, 90 * Math.PI / 180);
        bullet = new Bullet(player_1.x, player_1.y, 5);
        draw_GUI();
    
        this.addEventListener("keydown", function key_Down_handler(e){
            console.log(e.keyCode);
            if(e.keyCode == player_1_turn_left){
                player_1_turn_left_pressed = true;
            }
            else if(e.keyCode == player_1_turn_right){
                player_1_turn_right_pressed = true;
            }
            else if(e.keyCode == player_1_backward){
                player_1_backward_pressed = true;
            }
            else if(e.keyCode == player_1_forward){
                player_1_forward_pressed = true;
            }
            else if(e.keyCode == player_1_shoot){
                player_1_shoot_pressed = true;
            }
            else if(e.keyCode == player_2_turn_left){
                player_2_turn_left_pressed = true;
            }
            else if(e.keyCode == player_2_turn_right){
                player_2_turn_right_pressed = true;
            }
            else if(e.keyCode == player_2_backward){
                player_2_backward_pressed = true;
            }
            else if(e.keyCode == player_2_forward){
                player_2_forward_pressed = true;
            }
            else if(e.keyCode == player_2_shoot){
                player_2_shoot_pressed = true;
            }
        });
        this.addEventListener("keyup", function key_Up_handler(e){
            if(e.keyCode == player_1_turn_left){
                player_1_turn_left_pressed = false;
            }
            else if(e.keyCode == player_1_turn_right){
                player_1_turn_right_pressed = false;
            }
            else if(e.keyCode == player_1_backward){
                player_1_backward_pressed = false;
            }
            else if(e.keyCode == player_1_forward){
                player_1_forward_pressed = false;
            }
            else if(e.keyCode == player_1_shoot){
                player_1_shoot_pressed = false;
            }
            else if(e.keyCode == player_2_turn_left){
                player_2_turn_left_pressed = false;
            }
            else if(e.keyCode == player_2_turn_right){
                player_2_turn_right_pressed = false;
            }
            else if(e.keyCode == player_2_backward){
                player_2_backward_pressed = false;
            }
            else if(e.keyCode == player_2_forward){
                player_2_forward_pressed = false;
            }
            else if(e.keyCode == player_2_shoot){
                player_2_shoot_pressed = false;
            }
        });
        draw_player();
    }
    else{
        this.removeEventListener("keydown", key_Down_handler())
    }

}


console.log(player_1_default_turn_left);
function draw_player(){
    var last_x_1 = player_1.x;
    var last_y_1 = player_1.y;
    var last_x_2 = player_2.x;
    var last_y_2 = player_2.y;

    if(game_ended == false){
        if(player_1_turn_left_pressed == true){
            player_1.angle -= rotation_speed;
        }
        else if(player_1_turn_right_pressed == true){
            player_1.angle += rotation_speed;
        }
        if(player_2_turn_left_pressed == true){
            player_2.angle -= rotation_speed;
        }
        else if(player_2_turn_right_pressed == true){
            player_2.angle += rotation_speed;
        }
        if(player_1_forward_pressed == true){
            player_1.x -= movementspeed * Math.sin(player_1.angle);
            player_1.y += movementspeed * Math.cos(player_1.angle);
        }
        else if(player_1_backward_pressed == true){
            player_1.x += movementspeed * Math.sin(player_1.angle);
            player_1.y -= movementspeed * Math.cos(player_1.angle);
        }
        if(player_2_forward_pressed == true){
            player_2.x -= movementspeed * Math.sin(player_2.angle);
            player_2.y += movementspeed * Math.cos(player_2.angle);
        }
        else if(player_2_backward_pressed == true){
            player_2.x += movementspeed * Math.sin(player_2.angle);
            player_2.y -= movementspeed * Math.cos(player_2.angle);
        }
        if(player_1_shoot_pressed == true){
            if(can_shoot_1 == true){
                shoot_sound.currentTime = 0;
                shoot_sound.play();
                bullet_List_1.push(new Bullet(player_1.x, player_1.y, 5, player_1.angle - 270 * Math.PI / 180));
                can_shoot_1 = false;
                setTimeout(reload_player_1, reload_time);
            }
        }
        if(player_2_shoot_pressed == true){
            if(can_shoot_2 == true){
                shoot_sound.currentTime = 0;
                shoot_sound.play();
                bullet_List_2.push(new Bullet(player_2.x, player_2.y, 5, player_2.angle + 90 * Math.PI / 180));
                can_shoot_2 = false;
                setTimeout(reload_player_2, reload_time);
            }
        }
    
        ctx.clearRect(0, ctx_height * 0.1, ctx_width, ctx_height - ctx_height * 0.1);
    
        draw_GUI();
        
        draw_Map();
        

        //#region  Player-1 Collision
        if(player_1.x < 25){
            player_1.x = 25;
        }
        if(player_1.y < ctx_height * 0.1 + 25){
            player_1.y = ctx_height * 0.1 + 25;
        }
        if(player_1.x > ctx_width - 25){
            player_1.x = ctx_width - 25;
        }
        if(player_1.y > ctx_height - 25){
            player_1.y = ctx_height - 25;
        }
        if(player_1.x < ctx_width * 0.2 + 53 && player_1.x > ctx_width * 0.2 - 25 && player_1.y < ctx_height * 0.1 + 81){
            player_1.x = last_x_1;
            player_1.y = last_y_1;
        }
        if(player_1.x < ctx_width - ctx_width * 0.2 + 53 && player_1.x > ctx_width - ctx_width * 0.2 - 25 && player_1.y > ctx_height - 75){
            player_1.x = last_x_1;
            player_1.y = last_y_1;
        }
        if(player_1.x > ctx_width / 2 - 25 && player_1.x < ctx_width / 2 +25 +28 && player_1.y < ctx_height / 2 + 14+25 +25 && player_1.y > ctx_height / 2 - 14 -28 - 25){
            player_1.x = last_x_1;
            player_1.y = last_y_1;
        }
        //#endregion
        ////#region Player-2 Collision
        if(player_2.x < 25){
            player_2.x = 25;
        }
        if(player_2.y < ctx_height * 0.1 + 25){
            player_2.y = ctx_height * 0.1 + 25;
        }
        if(player_2.x > ctx_width - 25){
            player_2.x = ctx_width - 25;
        }
        if(player_2.y > ctx_height - 25){
            player_2.y = ctx_height - 25;
        }
        if(player_2.x < ctx_width * 0.2 + 53 && player_2.x > ctx_width * 0.2 - 25 && player_2.y < ctx_height * 0.1 + 81){
            player_2.x = last_x_2;
            player_2.y = last_y_2;
        }
        if(player_2.x < ctx_width - ctx_width * 0.2 + 53 && player_2.x > ctx_width - ctx_width * 0.2 - 25 && player_2.y > ctx_height - 75){
            player_2.x = last_x_2;
            player_2.y = last_y_2;
        }
        if(player_2.x > ctx_width / 2 - 25 && player_2.x < ctx_width / 2 +25 +28 && player_2.y < ctx_height / 2 + 14+25 +25 && player_2.y > ctx_height / 2 - 14 -28 - 25){
            player_2.x = last_x_2;
            player_2.y = last_y_2;
        }
        //#region 
        player_2.draw();
        player_1.draw();
        
        bullet_List_1.forEach((bullet, index) => {
            bullet.update();
    
            var distance_x = Math.hypot(bullet.x - player_2.x);
            var distance_y = Math.hypot(bullet.y - player_2.y);
            if(distance_x - 20 - bullet.radius <= 1 && distance_y - 20 - bullet.radius <= 1){
                console.log("Hit");
                bullet_List_1.splice(index, 1);
                player_2.health -= damage;
                player_2_health_text.textContent = player_2.health + "/100";
                draw_GUI();
                if(player_2.health <= 0){
                    player_2.tank_img = explosion_img;
                    player_2.draw();
                    player_2.health = 0;
                    player_2_health_text.textContent = player_2.health + "/100";
                    draw_GUI();
                    setTimeout(end_game, 100);
                }
            }
            else if(bullet.x >= ctx_width / 2 - 14 && bullet.x <= ctx_width / 2 + 14 && bullet.y >= ctx_height / 2 - 42 && bullet.y <= ctx_height / 2 + 42){
                bullet_List_1.splice(index, 1);
            }
            else if(bullet.x >= ctx_width * 0.2 && bullet.x <= ctx_width * 0.2 + 28 && bullet.y <= ctx_height * 0.1 + 56){
                bullet_List_1.splice(index, 1);
            }
            else if(bullet.x >= ctx_width - ctx_width * 0.2 && bullet.x <= ctx_width - ctx_width * 0.2 + 28 && bullet.y <= ctx_height && bullet.y >= ctx_height - 56){
                bullet_List_1.splice(index, 1);
            }
            else if(bullet.x < -10 || bullet.x > ctx_width + 10 || bullet.y < ctx_height * 0.1 || bullet.y > ctx_height + 10){
                bullet_List_1.splice(index, 1);
            }
        });
    
        bullet_List_2.forEach((bullet, index) => {
            bullet.update();
            
            var distance_x = Math.hypot(bullet.x - player_1.x);
            var distance_y = Math.hypot(bullet.y - player_1.y);
            if(distance_x - 20 - bullet.radius <= 1 && distance_y - 20 - bullet.radius <= 1){
                console.log("Hit");
                bullet_List_2.splice(index, 1);
                player_1.health -= damage;
                player_1_health_text.textContent = player_1.health + "/100";
                draw_GUI();
                if(player_1.health <= 0){
                    player_1.tank_img = explosion_img;
                    player_1.draw();
                    player_1.health = 0;
                    player_1_health_text.textContent = player_1.health + "/100";
                    draw_GUI();
                    setTimeout(end_game, 100);
                }
            }
            else if(bullet.x >= ctx_width / 2 - 14 && bullet.x <= ctx_width / 2 + 14 && bullet.y >= ctx_height / 2 - 42 && bullet.y <= ctx_height / 2 + 42){
                bullet_List_2.splice(index, 1);
            }
            else if(bullet.x >= ctx_width * 0.2 && bullet.x <= ctx_width * 0.2 + 28 && bullet.y <= ctx_height * 0.1 + 56){
                bullet_List_2.splice(index, 1);
            }
            else if(bullet.x >= ctx_width - ctx_width * 0.2 && bullet.x <= ctx_width - ctx_width * 0.2 + 28 && bullet.y <= ctx_height && bullet.y >= ctx_height - 56){
                bullet_List_2.splice(index, 1);
            }
            else if(bullet.x < -10 || bullet.x > ctx_width + 10 || bullet.y < ctx_height * 0.1 || bullet.y > ctx_height + 10){
                bullet_List_2.splice(index, 1);
            }
        });
    
    
    }

    requestAnimationFrame(draw_player);
}

function draw_Map(){
    ctx.beginPath();
    ctx.drawImage(metal_crate_img, ctx_width / 2, ctx_height / 2 - 14, 28, 28);
    ctx.drawImage(metal_crate_img, ctx_width / 2, ctx_height / 2 - 42, 28, 28);   
    ctx.drawImage(metal_crate_img, ctx_width / 2, ctx_height / 2 + 14, 28, 28);
    ctx.drawImage(wood_crate_img, ctx_width * 0.2, ctx_height * 0.1, 28, 28);
    ctx.drawImage(wood_crate_img, ctx_width * 0.2, ctx_height * 0.1 + 28, 28, 28);
    ctx.drawImage(wood_crate_img, ctx_width - ctx_width * 0.2, ctx_height - 28, 28, 28);
    ctx.drawImage(wood_crate_img, ctx_width - ctx_width * 0.2, ctx_height - 56, 28, 28)
    ctx.closePath();
}
function reload_player_1(){
    can_shoot_1 = true;
}
function reload_player_2(){
    can_shoot_2 = true;
}
function end_game(){
    game_ended = true;
    death_div.style.visibility = 'visible';
    reload_site_btn.style.visibility = 'visible';
    if(player_1.health == 0 && player_2.health != 0){
        death_screen_text.textContent = "Player-2 Wins!";
    }
    else if(player_2.health == 0 && player_1.health != 0){
        death_screen_text.textContent = "Player-1 Wins!"
    }
    else if(player_1.health == 0 && player_2.health == 0){
        death_screen_text.textContent = "A Draw!";
    }
}

function draw_GUI(){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(19, 18, 11, 0.95)';
    ctx.rect(0, 0, ctx_width, ctx_height * 0.1);
    ctx.fill();
    ctx.closePath();
    draw_Healthbars();
}

function draw_Healthbars(){
    ctx.beginPath();
    ctx.fillStyle = '#d60202';
    ctx.rect(40, 5, 267, 27);
    ctx.rect(350, 5, 267, 27);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = '#006e0b';
    ctx.rect(40, 5, 267 * player_1.health / 100, 27);
    ctx.rect(350, 5, 267 * player_2.health / 100, 27);
    ctx.fill();
    ctx.closePath();
}

reload_site_btn.onclick = function(){
    window.location.reload();
}

pause_menu_button.onclick = function(){
    if(game_ended == false){
        continue_btn.style.visibility = 'visible';
        reload_site_btn.style.visibility = 'visible';
        game_ended = true;
    }
}

continue_btn.onclick = function(){
    continue_btn.style.visibility = 'hidden';
    reload_site_btn.style.visibility = 'hidden';
    game_ended = false;
}
