//#region Variablen
var master_vol_test_count = 0;
var ui_vol_test_count = 0;
//Controls
var currentSettings = "General";
var controls_array;
//Default-Player-1-Controls
var player_1_default_forward = 87;
var player_1_default_backward = 83;
var player_1_default_turn_left = 65;
var player_1_default_turn_right = 68;
var player_1_default_shoot = 67;
//Player-1-Controls
var player_1_forward = player_1_default_forward;
var player_1_backward = player_1_default_backward;
var player_1_turn_left = player_1_default_turn_left;
var player_1_turn_right = player_1_default_turn_right;
var player_1_shoot = player_1_default_shoot;
//Default-Player-2-Controls
var player_2_default_forward = 73;
var player_2_default_backward = 75;
var player_2_default_turn_left = 74;
var player_2_default_turn_right = 76;
var player_2_default_shoot = 78;
//Player-2-Controls
var player_2_forward = player_2_default_forward;
var player_2_backward = player_2_default_backward;
var player_2_turn_left = player_2_default_turn_left;
var player_2_turn_right = player_2_default_turn_right;
var player_2_shoot = player_2_default_shoot;
//Menu-Background
const menu_background_img = 'url("Assets/Images/Background/menu_background.jpg")';
game_canvas.style.backgroundImage = menu_background_img;
game_canvas.style.backgroundSize = 'cover';
//Images
const muted_img = 'url("Assets/Images/UI/Mute.png")';
const unmuted_img = 'url("Assets/Images/UI/Unmute.png")';
const pause_img = 'url("Assets/Images/UI/Pause.png")';
const play_img = 'url("Assets/Images/UI/Play.png")';
//Audios
const click_sound = new Audio('Assets/Audios/UI/Click-Sound.mp3');
const backgroundmusic = new Audio('Assets/Audios/Music/backgroundmusic.mp3');
const shoot_sound = new Audio("Assets/Audios/Effects/shoot.mp3");
//Audio-Volume
var master_volume = 50;
var music_volume = 50;
var effect_volume = 50;
var ui_volume = 50;
//#endregion

master_volume_input_field.value = master_volume;
music_volume_input_field.value = music_volume;
effect_volume_input_field.value = effect_volume;
ui_volume_input_field.value = ui_volume;

player_dropdown_changed();
volume_changed();

//#region Menu
play_btn.onclick = function(){
    play_Button_click();
    menu_div.style.visibility = 'hidden';
    ctx.beginPath();
    console.log(ctx_width);
    console.log(ctx_height);
    ctx.rect(0, 0, ctx_width, ctx_height);
    ctx.fillStyle = 'rgba(51, 39, 39, 0.74)';
    ctx.fill();
    ctx.closePath();
    game_div_1.style.visibility = 'visible';
}
settings_btn.onclick = function(){
    play_Button_click();
    menu_div.style.visibility = 'hidden';
    ctx.beginPath();
    ctx.rect(0, 0, ctx_width, ctx_height);
    ctx.fillStyle = 'rgba(51, 39, 39, 0.74)';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(0, 0, ctx_width, ctx_height * 0.15);
    ctx.fillStyle = 'rbga(51, 39, 39, 0.90)';
    ctx.fill();
    settings_div.style.visibility = 'visible';
    settings_Manager();
}
//#endregion


//#region Settings
settings_back_btn.onclick = function(){
    play_Button_click();
    console.log(ctx_width);
    console.log(ctx_height);
    ctx.clearRect(0, 0, ctx_width, ctx_height);
    general_settings_div.style.visibility = 'hidden';
    controls_settings_div.style.visibility = 'hidden';
    audio_settings_div.style.visibility = 'hidden';
    settings_div.style.visibility = 'hidden';
    menu_div.style.visibility = 'visible';
}
controls_settings_btn.onclick = function(){
    play_Button_click();
    if(currentSettings != "Controls"){
        play_Button_click();
        currentSettings = "Controls";
        settings_Manager();
    }
}
controls_settings_btn.onmouseenter = function(){
    controls_settings_btn.style.backgroundColor = '#D97706';
}
controls_settings_btn.onmouseleave = function(){
    if(currentSettings != "Controls"){
        controls_settings_btn.style.backgroundColor = '#F59E0B';    
    }
}
audio_settings_btn.onmouseenter = function(){
    audio_settings_btn.style.backgroundColor = '#D97706';
}
audio_settings_btn.onmouseleave = function(){
    if(currentSettings != "Audio"){
        audio_settings_btn.style.backgroundColor = '#F59E0B';
    }
}
general_settings_btn.onmouseenter = function(){
    general_settings_btn.style.backgroundColor = '#D97706';
}
general_settings_btn.onmouseleave = function(){
    if(currentSettings != "General"){
        general_settings_btn.style.backgroundColor = '#F59E0B';
    }
}
function settings_Manager(){
    if(currentSettings == "General"){
        controls_settings_div.style.visibility = 'hidden';
        controls_settings_btn.style.backgroundColor = '#F59E0B';
        audio_settings_div.style.visibility = 'hidden';
        audio_settings_btn.style.backgroundColor = '#F59E0B';
        general_settings_div.style.visibility = 'visible';
        general_settings_btn.style.backgroundColor = '#D97706';
    }else if(currentSettings == "Audio"){
        general_settings_div.style.visibility = 'hidden';
        general_settings_btn.style.backgroundColor = '#F59E0B';
        controls_settings_div.style.visibility = 'hidden';
        controls_settings_btn.style.backgroundColor = '#F59E0B';
        audio_settings_div.style.visibility = 'visible';
        audio_settings_btn.style.backgroundColor = '#D97706';
    }else if(currentSettings == "Controls"){
        general_settings_div.style.visibility = 'hidden';
        general_settings_btn.style.backgroundColor = '#F59E0B';
        audio_settings_div.style.visibility = 'hidden';
        audio_settings_btn.style.backgroundColor = '#F59E0B';
        controls_settings_div.style.visibility = 'visible';
        controls_settings_btn.style.backgroundColor = '#D97706';
    }
}


//#region General Settings
fullscreen_checkbox.onchange = function(){
    if(fullscreen_checkbox.checked == true){
        document.documentElement.requestFullscreen();  
    }else{
        document.exitFullscreen();
    }
}
general_settings_btn.onclick = function(){
    if(currentSettings != "General"){
        play_Button_click();
        currentSettings = "General";
        settings_Manager();
    }
}
//#endregion


//#region Audio-Settings
audio_settings_btn.onclick = function(){
    if(currentSettings != "Audio"){
        play_Button_click();
        currentSettings = "Audio";
        settings_Manager();
    }
}
master_volume_input_field.onchange = function(){
    if(master_volume_input_field.value < 0){
        master_volume_input_field.value = 0;
        master_volume = 0;
    }else if(master_volume_input_field.value > 100){
        master_volume_input_field.value = 100;
        master_volume = 1;
    }else if(master_volume_input_field.value == ""){
        master_volume_input_field.value = master_volume;
    }else{
        master_volume = master_volume_input_field.value;
    }
    volume_changed();
}
music_volume_input_field.onchange = function(){
    if(music_volume_input_field.value < 0){
        music_volume_input_field.value = 0;
        music_volume = 0;
    }else if(music_volume_input_field.value > 100){
        music_volume_input_field.value = 100;
        music_volume = 1;
    }else if(music_volume_input_field.value == ""){
        music_volume_input_field.value = music_volume;
    }else{
        music_volume = music_volume_input_field.value;
    }
    volume_changed();
}
effect_volume_input_field.onchange = function(){
    if(effect_volume_input_field.value < 0){
        effect_volume_input_field.value = 0;
        effect_volume = 0;
    }else if(effect_volume_input_field.value > 100){
        effect_volume_input_field.value = 100;
        effect_volume = 1;
    }else if(effect_volume_input_field.value == ""){
        effect_volume_input_field.value = effect_volume;
    }else{
        effect_volume = effect_volume_input_field.value;
    }
    volume_changed();
}
ui_volume_input_field.onchange = function(){
    if(ui_volume_input_field.value < 0){
        ui_volume_input_field.value = 0;
        ui_volume = 0;
    }else if(ui_volume_input_field.value > 100){
        ui_volume_input_field.value = 100;
        ui_volume = 1;
    }else if(ui_volume_input_field.value == ""){
        ui_volume_input_field.value = ui_volume;
    }else{
        ui_volume = ui_volume_input_field.value;
    }
    volume_changed();
}
function volume_changed(){
    backgroundmusic.volume = music_volume / 100 * master_volume / 100;
    click_sound.volume = ui_volume / 100 * master_volume / 100;
    shoot_sound.volume = effect_volume / 100 * master_volume / 100;
}
mute_effect_volume_btn.onclick = function(){
    if(effect_volume == 0){
        mute_effect_volume_btn.style.backgroundImage = muted_img;
        effect_volume = effect_volume_input_field.value;
    }else{
        mute_effect_volume_btn.style.backgroundImage = unmuted_img;
        effect_volume = 0;
    }
    volume_changed();
}
mute_ui_volume_btn.onclick = function(){
    if(ui_volume == 0){
        mute_ui_volume_btn.style.backgroundImage = muted_img;
        ui_volume = ui_volume_input_field.value;
    }else{
        mute_ui_volume_btn.style.backgroundImage = unmuted_img;
        ui_volume = 0;
    }
    volume_changed();
}
mute_music_volume_btn.onclick = function(){
    if(music_volume == 0){
        mute_music_volume_btn.style.backgroundImage = muted_img;
        music_volume = music_volume_input_field.value;
    }else{
        mute_music_volume_btn.style.backgroundImage = unmuted_img;
        music_volume = 0;
    }
    volume_changed();
}
mute_master_volume_btn.onclick = function(){
    if(master_volume == 0){
        mute_master_volume_btn.style.backgroundImage = muted_img;
        master_volume = master_volume_input_field.value;
    }else{
        mute_master_volume_btn.style.backgroundImage = unmuted_img;
        master_volume = 0;
    }
    volume_changed();
}
test_master_volume_btn.onmouseenter = function(){

    test_master_volume_btn.style.backgroundImage = pause_img;
    if(master_vol_test_count == 1 && music_volume != 0){
        backgroundmusic.loop == true;
        backgroundmusic.play();
    }
    else if(music_volume == 0 && master_vol_test_count == 1){master_vol_test_count++;}
    if(master_vol_test_count == 2 && effect_volume != 0){
        shoot_sound.loop = true;
        shoot_sound.play();
    }
    else if(effect_volume == 0 && master_vol_test_count == 2){master_vol_test_count = 0;}
    if(master_vol_test_count == 0 && ui_volume != 0){
        click_sound.loop = true;
        click_sound.play();
    }
    else if(ui_volume == 0 && master_vol_test_count == 0){master_vol_test_count++;}
}
test_master_volume_btn.onmouseleave = function(){
    test_master_volume_btn.style.backgroundImage = play_img;
    master_vol_test_count++;
    click_sound.loop = false;
    click_sound.pause();
    click_sound.currentTime = 0;
    backgroundmusic.loop = false;
    backgroundmusic.pause();
    backgroundmusic.currentTime = 0;
    shoot_sound.loop = false;
    shoot_sound.pause();
    shoot_sound.currentTime = 0;
    if(master_vol_test_count == 3){
        master_vol_test_count = 0;
    }
    
}
test_music_volume_btn.onmouseenter = function(){
    test_music_volume_btn.style.backgroundImage = pause_img;
    backgroundmusic.loop = true;
    backgroundmusic.currentTime = 0;
    backgroundmusic.play();
}
test_music_volume_btn.onmouseleave = function(){
    test_music_volume_btn.style.backgroundImage = play_img;
    backgroundmusic.loop = false;
    backgroundmusic.pause();
}
test_effect_volume_btn.onmouseenter = function(){
    test_effect_volume_btn.style.backgroundImage = pause_img;
    shoot_sound.loop = true;
    shoot_sound.currentTime = 0;
    shoot_sound.play();

}
test_effect_volume_btn.onmouseleave = function(){
    test_effect_volume_btn.style.backgroundImage = play_img;
    shoot_sound.loop = false;
    shoot_sound.pause();
}
test_ui_volume_btn.onmouseenter = function(){
    test_ui_volume_btn.style.backgroundImage = pause_img;
    if(ui_vol_test_count == 0){
        //ui_vol_test_count++;
        click_sound.loop = true;
        click_sound.play();
    }
}
test_ui_volume_btn.onmouseleave = function(){
    test_ui_volume_btn.style.backgroundImage = play_img;
    click_sound.loop = false;
    click_sound.pause();
    click_sound.currentTime = 0;
}
//#endregion


//#region Controls-Settings
player_dropdown.onchange = function(){
    player_dropdown_changed();
}
function player_dropdown_changed(){
    if(player_dropdown.value == "player_1"){
        move_forward_controls_btn.textContent = String.fromCharCode(player_1_forward);
        move_backward_controls_btn.textContent = String.fromCharCode(player_1_backward);
        turn_right_controls_btn.textContent = String.fromCharCode(player_1_turn_right);
        turn_left_controls_btn.textContent = String.fromCharCode(player_1_turn_left);
        shoot_controls_btn.textContent = String.fromCharCode(player_1_shoot);
    }else{
        move_forward_controls_btn.textContent = String.fromCharCode(player_2_forward);
        move_backward_controls_btn.textContent = String.fromCharCode(player_2_backward);
        turn_right_controls_btn.textContent = String.fromCharCode(player_2_turn_right);
        turn_left_controls_btn.textContent = String.fromCharCode(player_2_turn_left);
        shoot_controls_btn.textContent = String.fromCharCode(player_2_shoot);
    }
}
default_controls_btn.onclick = function(){
    play_Button_click();
    if(player_dropdown.value == "player_1"){
        player_1_forward = player_1_default_forward;
        player_1_backward = player_1_default_backward;
        player_1_turn_left = player_1_default_turn_left;
        player_1_turn_right = player_1_default_turn_right;
        player_1_shoot = player_1_default_shoot;
    }else{
        player_2_forward = player_2_default_forward;
        player_2_backward = player_2_default_backward;
        player_2_turn_left = player_2_default_turn_left;
        player_2_turn_right = player_2_default_turn_right;
        player_2_shoot = player_2_default_shoot;
    }
    player_dropdown_changed();
}
move_forward_controls_btn.onclick = function(){
    on_change_controls_btn_clicked(move_forward_controls_btn);
}
move_backward_controls_btn.onclick = function(){
    on_change_controls_btn_clicked(move_backward_controls_btn);
}
shoot_controls_btn.onclick = function(){
    on_change_controls_btn_clicked(shoot_controls_btn);
}
turn_left_controls_btn.onclick = function(){
    on_change_controls_btn_clicked(turn_left_controls_btn);
}
turn_right_controls_btn.onclick = function(){
    on_change_controls_btn_clicked(turn_right_controls_btn);
}
function on_change_controls_btn_clicked(button){
    play_Button_click();
    controls_array = [player_1_forward, player_1_backward, player_1_shoot, player_1_turn_left, player_1_turn_right, player_2_backward, player_2_forward, player_2_shoot, player_2_turn_left, player_2_turn_right];
    this.addEventListener("keydown", function change_Controls(e){
        if(e.keyCode == 27){
            this.removeEventListener("keydown", change_Controls);
        }
        else if(controls_array.includes(e.keyCode) == false && controls_settings_div.style.visibility == "visible"){
            if(player_dropdown.value == "player_1"){
                if(button == move_forward_controls_btn){player_1_forward = e.keyCode;}
                else if(button == move_backward_controls_btn){player_1_backward = e.keyCode;}
                else if(button == turn_left_controls_btn){player_1_turn_left = e.keyCode;}
                else if(button == turn_right_controls_btn){player_1_turn_right = e.keyCode;}
                else if(button == shoot_controls_btn){player_1_shoot = e.keyCode;}
            }
            else if(player_dropdown.value == "player_2"){
                if(button == move_forward_controls_btn){player_2_forward = e.keyCode;}
                else if(button == move_backward_controls_btn){player_2_backward = e.keyCode;}
                else if(button == turn_left_controls_btn){player_2_turn_left = e.keyCode;}
                else if(button == turn_right_controls_btn){player_2_turn_right = e.keyCode;}
                else if(button == shoot_controls_btn){player_2_shoot = e.keyCode;}
            }
            controls_feedback_text.style.visibility = 'hidden';
            button.textContent = String.fromCharCode(e.keyCode);
            this.removeEventListener("keydown", change_Controls);
        }else if(controls_array.includes(e.keyCode) == true) {
            controls_feedback_text.textContent = "Key already in use!";
            controls_feedback_text.style.visibility = 'visible';
        }
    })
}
//#endregion


//#region Auswahl der Panzer
game_div_1_back_btn.onclick = function(){
    play_Button_click();
    ctx.clearRect(0, 0, ctx_width, ctx_height);
    game_div_1.style.visibility = 'hidden';
    menu_div.style.visibility = 'visible';
}
game_div_1_next_btn.onclick = function(){
    play_Button_click();
    ctx.clearRect(0, 0, ctx_width, ctx_height);
    start_Game();
}
player_1_blue_tank_btn.onclick = function(){
    if(player_1_tank != blue_tank_img && player_2_tank != blue_tank_img){
        play_Button_click();
        player_1_tank = blue_tank_img;
        player_1_img.style.backgroundImage = player_1_tank;
        player_Tank_Color_Buttons();
    }
}
player_1_red_tank_btn.onclick = function(){
    if(player_1_tank != red_tank_img && player_2_tank != red_tank_img){
        play_Button_click();
        player_1_tank = red_tank_img;
        player_1_img.style.backgroundImage = player_1_tank;
        player_Tank_Color_Buttons();
    }
}
player_1_green_tank_btn.onclick = function(){
    if(player_1_tank != green_tank_img && player_2_tank != green_tank_img){
        click_sound.currentTime = 0;
        click_sound.play();
        player_1_tank = green_tank_img;
        player_1_img.style.backgroundImage = player_1_tank;
        player_Tank_Color_Buttons();
    }
}
player_1_dark_tank_btn.onclick = function(){
    if(player_1_tank != dark_tank_img && player_2_tank != dark_tank_img){
        play_Button_click();
        player_1_tank = dark_tank_img;
        player_1_img.style.backgroundImage = player_1_tank;
        player_Tank_Color_Buttons();
    }
}
player_2_blue_tank_btn.onclick = function(){
    if(player_2_tank != blue_tank_img && player_1_tank != blue_tank_img){
        play_Button_click();
        player_2_tank = blue_tank_img;
        player_2_img.style.backgroundImage = player_2_tank;
        player_Tank_Color_Buttons();
    }
}
player_2_red_tank_btn.onclick = function(){
    if(player_2_tank != red_tank_img && player_1_tank != red_tank_img){
        play_Button_click();
        player_2_tank = red_tank_img;
        player_2_img.style.backgroundImage = player_2_tank;
        player_Tank_Color_Buttons();
    }
}
player_2_green_tank_btn.onclick = function(){
    if(player_2_tank != green_tank_img && player_1_tank != green_tank_img){
        play_Button_click();
        player_2_tank = green_tank_img;
        player_2_img.style.backgroundImage = player_2_tank;
        player_Tank_Color_Buttons();
    }
}
player_2_dark_tank_btn.onclick = function(){
    if(player_2_tank != dark_tank_img && player_1_tank != dark_tank_img){
        play_Button_click();
        player_2_tank = dark_tank_img;
        player_2_img.style.backgroundImage = player_2_tank;
        player_Tank_Color_Buttons();
    }
}
//#endregion


//#endregion


//Spielt Click-Sound ab
function play_Button_click(){
    click_sound.currentTime = 0;
    click_sound.play();
}