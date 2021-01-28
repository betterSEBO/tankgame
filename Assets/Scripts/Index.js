//#region Variablen
//Canvas
const ratio = 16/9;
var canvas_width;
var canvas_height;
const game_canvas = document.querySelector('canvas');

canvas_height = window.innerWidth;
canvas_width = window.innerHeight;

if(canvas_height < canvas_width / ratio){
    canvas_width = canvas_height * ratio;
}
else{
    canvas_height = canvas_width / ratio;
}
game_canvas.width = canvas_width;
game_canvas.height = canvas_height;
var ctx_width = canvas_width;
var ctx_height = canvas_height;
console.log(game_canvas.width);
console.log(game_canvas.height);
var ctx = game_canvas.getContext('2d');
//Canvas -- Eigenschaften
//Images
const blue_tank_img = 'url("Assets/Images/Player/tank_blue.png")';
const red_tank_img = 'url("Assets/Images/Player/tank_red.png")';
const green_tank_img = 'url("Assets/Images/Player/tank_green.png")';
const dark_tank_img = 'url("Assets/Images/Player/tank_dark.png")';
//Divs
const menu_div = document.getElementById("Menu_Div");
const settings_div = document.getElementById("Settings_Div");
const game_div_1 = document.getElementById("Game_Div_1");
//Menu-Items
const game_title = document.getElementById("Game_Title");
const author = document.getElementById("Author");
const play_btn = document.getElementById("Play_Button");
const settings_btn = document.getElementById("Settings_Button");
//Game_Div_1-Items
const game_div_1_back_btn = document.getElementById("Game_Div_1_Back_Button");
const game_div_1_next_btn = document.getElementById("Game_Div_1_Next_Button");
const player_1_blue_tank_btn = document.getElementById("Player_1_Blue_Tank_Button");
const player_1_red_tank_btn = document.getElementById("Player_1_Red_Tank_Button");
const player_1_green_tank_btn = document.getElementById("Player_1_Green_Tank_Button");
const player_1_dark_tank_btn = document.getElementById("Player_1_Dark_Tank_Button");
const vs_text = document.getElementById("VS_Text");
const player_1_img = document.getElementById("Player_1_img");
const player_2_img = document.getElementById("Player_2_img");
const player_2_blue_tank_btn = document.getElementById("Player_2_Blue_Tank_Button");
const player_2_red_tank_btn = document.getElementById("Player_2_Red_Tank_Button");
const player_2_green_tank_btn = document.getElementById("Player_2_Green_Tank_Button");
const player_2_dark_tank_btn = document.getElementById("Player_2_Dark_Tank_Button");
var player_1_tank = blue_tank_img;
var player_2_tank = red_tank_img;
player_1_img.style.backgroundImage = player_1_tank;
player_2_img.style.backgroundImage = player_2_tank;
//Settings
const settings_back_btn = document.getElementById("Settings_Back_Button");
const general_settings_btn = document.getElementById("General_Settings_Button");
const audio_settings_btn = document.getElementById("Audio_Settings_Button");
const controls_settings_btn = document.getElementById("Controls_Settings_Button");
const general_settings_div = document.getElementById("General_Settings_Div");
const controls_settings_div = document.getElementById("Controls_Settings_Div");
const audio_settings_div = document.getElementById("Audio_Settings_Div");
const settings_title = document.getElementById("Settings_Title");
//General
const fullscreen_checkbox = document.getElementById("Fullscreen_Checkbox");
const fullscreen_label = document.getElementById("Fullscreen_Label");
//Controls
const player_dropdown = document.getElementById("Player_Dropdown");
const default_controls_btn = document.getElementById("Default_Controls_Button");
const move_forward_controls_text = document.getElementById("Move_Forward_Controls_Text");
const move_forward_controls_btn = document.getElementById("Forward_Controls");
const move_backward_controls_text = document.getElementById("Move_Backward_Controls_Text");
const move_backward_controls_btn = document.getElementById("Backward_Controls");
const turn_right_controls_text = document.getElementById("Turn_Right_Controls_Text");
const turn_right_controls_btn = document.getElementById("Turn_Right_Controls");
const turn_left_controls_text = document.getElementById("Turn_Left_Controls_Text");
const turn_left_controls_btn = document.getElementById("Turn_Left_Controls");
const shoot_controls_text = document.getElementById("Shoot_Controls_Text");
const shoot_controls_btn = document.getElementById("Shoot_Controls");
const controls_feedback_text = document.getElementById("Controls_Feedback_Text");
//Audio
const master_volume_text = document.getElementById("Master_Volume_Text");
const music_volume_text = document.getElementById("Music_Volume_Text");
const effect_volume_text = document.getElementById("Effect_Volume_Text");
const ui_volume_text = document.getElementById("UI_Volume_Text");
const master_volume_input_field = document.getElementById("Master_Volume_Input_Field");
const music_volume_input_field = document.getElementById("Music_Volume_Input_Field");
const effect_volume_input_field = document.getElementById("Effect_Volume_Input_Field");
const ui_volume_input_field = document.getElementById("UI_Volume_Input_Field");
const mute_master_volume_btn = document.getElementById("Mute_Master_Volume_Button");
const mute_music_volume_btn = document.getElementById("Mute_Music_Volume_Button");
const mute_effect_volume_btn = document.getElementById("Mute_Effect_Volume_Button");
const mute_ui_volume_btn = document.getElementById("Mute_UI_Volume_Button");
const test_master_volume_btn = document.getElementById("Test_Master_Volume_Button");
const test_music_volume_btn = document.getElementById("Test_Music_Volume_Button");
const test_effect_volume_btn = document.getElementById("Test_Effect_Volume_Button");
const test_ui_volume_btn = document.getElementById("Test_UI_Volume_Button");
//Game-Div
const game_div = document.getElementById("Game_Div");
const pause_menu_button = document.getElementById("Pause_Menu_Button");
const player_1_tank_img = document.getElementById("Player_1_Tank_Img");
const player_2_tank_img = document.getElementById("Player_2_Tank_Img");
const player_1_health_text = document.getElementById("Player_1_Health_Text");
const player_2_health_text = document.getElementById("Player_2_Health_Text");
const reload_site_btn = document.getElementById("Reload_Site_Button");
const death_screen_text = document.getElementById("Death_Screen_Text");
const death_div = document.getElementById("Death_Div");
const continue_btn = document.getElementById("Continue_Button");
//#endregion


//#region Start-Aufruf
resize_Canvas();
player_Tank_Color_Buttons();
//#endregion


//#region Canvasgröße
window.onresize = function(){
    resize_Canvas();
}
function resize_Canvas(){
    if(window.innerHeight == screen.height && window.innerWidth == screen.width){
        fullscreen_checkbox.checked = true;
    }else{
        fullscreen_checkbox.checked = false;
    }

    canvas_width = window.innerWidth;
    canvas_height = window.innerHeight;

    //Sorgt für 16/9 Format durch berechnen der Länge/Breite
    if(canvas_height < canvas_width / ratio){
        canvas_width = canvas_height * ratio;
    }
    else{
        canvas_height = canvas_width / ratio;
    }

    game_canvas.style.width = '' + canvas_width + "px";
    game_canvas.style.height = '' + canvas_height + "px";

    game_Items();
}
//#endregion


//#region Markiert ausgewählte Panzer
function player_Tank_Color_Buttons(){
    disable_Button_Border();
    //Player-1
    if(player_1_tank == blue_tank_img){
        player_1_blue_tank_btn.style.borderColor = 'black';
        player_1_blue_tank_btn.style.borderWidth = '' + canvas_height * 0.001 + "px";
    }else if(player_1_tank == red_tank_img){
        player_1_red_tank_btn.style.borderColor = 'black';
        player_1_red_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";    
    }else if(player_1_tank == green_tank_img){
        player_1_green_tank_btn.style.borderColor = 'black';
        player_1_green_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";
    }else if(player_1_tank == dark_tank_img){
        player_1_dark_tank_btn.style.borderColor = 'black';
        player_1_dark_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";
    }
    //Player-2
    if(player_2_tank == blue_tank_img){
        player_2_blue_tank_btn.style.borderColor = 'black';
        player_2_blue_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";
    }else if(player_2_tank == red_tank_img){
        player_2_red_tank_btn.style.borderColor = 'black';
        player_2_red_tank_btn.style.borderWidth =  '' + canvas_width * 0.001 + "px";
    }else if(player_2_tank == green_tank_img){
        player_2_green_tank_btn.style.borderColor = 'black';
        player_2_green_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";
    }else if(player_2_tank == dark_tank_img){
        player_2_dark_tank_btn.style.borderColor = 'black';
        player_2_dark_tank_btn.style.borderWidth = '' + canvas_width * 0.001 + "px";
    }
}
function disable_Button_Border(){
    player_1_blue_tank_btn.style.borderWidth = "0px";
    player_1_red_tank_btn.style.borderWidth = "0px";
    player_1_green_tank_btn.style.borderWidth = "0px";
    player_1_dark_tank_btn.style.borderWidth = "0px";
    player_2_blue_tank_btn.style.borderWidth = "0px";
    player_2_red_tank_btn.style.borderWidth = "0px";
    player_2_green_tank_btn.style.borderWidth = "0px";
    player_2_dark_tank_btn.style.borderWidth = "0px";
}
//#endregion


//#region Anpassen der Objektgrößen
function game_Items(){
    //#region Game-Div
    //Continue Button
    continue_btn.style.height = '' + canvas_height * 0.15 + "px";
    continue_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.25) + "px";
    continue_btn.style.fontSize = '' + canvas_height * 0.1 + "px";
    continue_btn.style.width = '' + canvas_width * 0.4 + "px";
    continue_btn.style.borderWidth = '' + canvas_width * 0.005 + "px";
    continue_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + (canvas_width - canvas_width * 0.4) / 2) + "px";
    //Death-Screen Text
    death_screen_text.style.width = '' + canvas_width + "px";
    death_screen_text.style.height = '' + canvas_height * 0.3 + "px";
    death_screen_text.style.fontSize = '' + canvas_height * 0.2 + "px";
    death_screen_text.style.left = '' + ((window.innerWidth - canvas_width) / 2) + "px";
    death_screen_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.2) + "px";
    //Death-Screen Button
    reload_site_btn.style.height = '' + canvas_height * 0.15 + "px";
    reload_site_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.45) + "px";
    reload_site_btn.style.fontSize = '' + canvas_height * 0.1 + "px";
    reload_site_btn.style.width = '' + canvas_width * 0.4 + "px";
    reload_site_btn.style.borderWidth = '' + canvas_width * 0.005 + "px";
    reload_site_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + (canvas_width - canvas_width * 0.4) / 2) + "px";
    //Pause-Menu Button
    pause_menu_button.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.005) + "px";
    pause_menu_button.style.width = '' + canvas_width * 0.05 + "px";
    pause_menu_button.style.height = pause_menu_button.style.width;
    pause_menu_button.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width / 2 - canvas_width * 0.05 / 2) + "px";
    //Player-1 Image
    player_1_tank_img.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_height * 0.005) + "px";
    player_1_tank_img.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.005) + "px";
    player_1_tank_img.style.width = pause_menu_button.style.width;
    player_1_tank_img.style.height = pause_menu_button.style.height;
    //Player-2 Image
    player_2_tank_img.style.right = '' + ((window.innerWidth - canvas_width) / 2 + canvas_height * 0.005) + "px";
    player_2_tank_img.style.top = player_1_tank_img.style.top;
    player_2_tank_img.style.width = player_1_tank_img.style.width;
    player_2_tank_img.style.height = player_2_tank_img.style.width;
    //Player-1-Health Text
    player_1_health_text.style.width = '' + canvas_width * 0.35 + "px";
    player_1_health_text.style.height = '' + canvas_height * 0.1 + "px";
    player_1_health_text.style.fontSize = '' + canvas_height * 0.09 + "px";
    player_1_health_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.003) + "px"
    player_1_health_text.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.088)+ "px";
    //Player-2-Health Text
    player_2_health_text.style.width = player_1_health_text.style.width;
    player_2_health_text.style.height = player_1_health_text.style.height;
    player_2_health_text.style.fontSize = player_1_health_text.style.fontSize;
    player_2_health_text.style.top = player_1_health_text.style.top;
    player_2_health_text.style.right = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.088) + "px"; 
    //#endregion
    //#region Menu-Items
    //Game Title
    game_title.style.width = '' + canvas_width + "px";
    game_title.style.height = '' + canvas_height * 0.15 + "px";
    game_title.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.05) + "px";
    game_title.style.fontSize = game_title.style.height;
    //Author
    author.style.width = '' + canvas_width + "px";
    author.style.height = '' + canvas_height * 0.05 + "px";
    author.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.05 + canvas_height * 0.15) + "px";
    author.style.fontSize = author.style.height;
    //Play Button
    play_btn.style.width = '' + canvas_width * 0.55 + "px";
    play_btn.style.height = '' + canvas_height * 0.15 + "px";
    play_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.05 + canvas_height * 0.15 + canvas_height * 0.05 + canvas_height * 0.08) + "px";
    play_btn.style.left = '' + ((canvas_width - canvas_width * 0.55) / 2 + (window.innerWidth - canvas_width) / 2) + "px";
    play_btn.style.fontSize = '' + canvas_height * 0.1 + "px";
    play_btn.style.borderWidth = '' + canvas_width * 0.005 + "px";
    //Settings Button
    settings_btn.style.width = '' + canvas_width * 0.55 + "px";
    settings_btn.style.height = '' + canvas_height * 0.15 + "px";
    settings_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.05 + canvas_height * 0.15 + canvas_height * 0.05 + canvas_height * 0.08 + canvas_height * 0.15 + canvas_height * 0.04) + "px";
    settings_btn.style.left = '' + ((canvas_width - canvas_width * 0.55) / 2 + (window.innerWidth - canvas_width) / 2) + "px";
    settings_btn.style.fontSize = '' + canvas_height * 0.1 + "px";
    settings_btn.style.borderWidth = '' + canvas_width * 0.005 + "px";
    //#endregion
    //#region Game_Div_1-Items
    //Back Button
    game_div_1_back_btn.style.width = '' + canvas_width * 0.15 + "px";
    game_div_1_back_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.01) + "px"
    game_div_1_back_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_height * 0.01) + "px";
    game_div_1_back_btn.style.height = '' + canvas_height * 0.1 + "px";
    game_div_1_back_btn.style.fontSize = '' + canvas_height * 0.05 + "px";
    game_div_1_back_btn.style.borderWidth = '' + canvas_width * 0.005 + "px";
    //Next Button
    game_div_1_next_btn.style.width = '' + canvas_width * 0.3 + "px";
    game_div_1_next_btn.style.height = '' + canvas_height * 0.1 + "px";
    game_div_1_next_btn.style.fontSize = '' + canvas_height * 0.05 + "px";
    game_div_1_next_btn.style.borderWidth = canvas_width * 0.005 + "px";
    game_div_1_next_btn.style.left = '' + ((canvas_width - canvas_width * 0.3) / 2 + (window.innerWidth - canvas_width) / 2) + "px";
    game_div_1_next_btn.style.bottom = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.05) + "px";
    //Player_1_Blue_Tank Button
    player_1_blue_tank_btn.style.width = '' + canvas_height * 0.1 + "px";
    player_1_blue_tank_btn.style.height = player_1_blue_tank_btn.style.width; 
    player_1_blue_tank_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065) + "px";
    player_1_blue_tank_btn.style.bottom = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.2) + "px";
    //Player_1_Red_Tank Button
    player_1_red_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_1_red_tank_btn.style.height = player_1_red_tank_btn.style.width;
    player_1_red_tank_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.1 + canvas_width * 0.005) + "px";
    player_1_red_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    //Player_1_Green_Tank Button
    player_1_green_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_1_green_tank_btn.style.height = player_1_blue_tank_btn.style.width;
    player_1_green_tank_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.2 + canvas_width * 0.01) + "px";
    player_1_green_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    //Player_1_Dark_Tank Button
    player_1_dark_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_1_dark_tank_btn.style.height = player_1_blue_tank_btn.style.width;
    player_1_dark_tank_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.3 + canvas_width * 0.015) + "px";
    player_1_dark_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    //VS - Text
    vs_text.style.width = '' + canvas_width + "px";
    vs_text.style.height = '' + canvas_height * 0.45 + "px";
    vs_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + (canvas_height - canvas_height * 0.45) / 2 - canvas_height * 0.05) + "px";
    vs_text.style.fontSize = vs_text.style.height;
    //
    player_Tank_Color_Buttons();
    //Player_1 - Image
    player_1_img.style.left = player_1_blue_tank_btn.style.left;
    player_1_img.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.2) + "px";
    player_1_img.style.width = '' + (canvas_height * 0.4 + canvas_width * 0.015) + "px";
    player_1_img.style.height = player_1_img.style.width;
    //Player_2_Blue_Tank Button
    player_2_blue_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    player_2_blue_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_2_blue_tank_btn.style.height = player_1_blue_tank_btn.style.height;
    player_2_blue_tank_btn.style.right =  '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.3 +canvas_width * 0.015) + "px";
    //Player_2_Red_Tank Button
    player_2_red_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    player_2_red_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_2_red_tank_btn.style.height = player_1_blue_tank_btn.style.height;
    player_2_red_tank_btn.style.right =  '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.2 +canvas_width * 0.01) + "px";
    //Player_2_Green_Tank_Button
    player_2_green_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    player_2_green_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_2_green_tank_btn.style.height = player_1_blue_tank_btn.style.height;
    player_2_green_tank_btn.style.right = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065 + canvas_height * 0.1 +canvas_width * 0.005) + "px";
    //Player_2_Dark_Tank_Button
    player_2_dark_tank_btn.style.bottom = player_1_blue_tank_btn.style.bottom;
    player_2_dark_tank_btn.style.width = player_1_blue_tank_btn.style.width;
    player_2_dark_tank_btn.style.height = player_1_blue_tank_btn.style.height;
    player_2_dark_tank_btn.style.right = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.065) + "px";
    //Player_2 - Image
    player_2_img.style.top = player_1_img.style.top;
    player_2_img.style.width = player_1_img.style.width;
    player_2_img.style.height = player_1_img.style.height;
    player_2_img.style.right = player_2_dark_tank_btn.style.right;
    //#endregion
    //#region Settings-Items
    //Settings-Back Button
    settings_back_btn.style.top = game_div_1_back_btn.style.top;
    settings_back_btn.style.left = game_div_1_back_btn.style.left;
    settings_back_btn.style.borderWidth = game_div_1_back_btn.style.borderWidth;
    settings_back_btn.style.width = game_div_1_back_btn.style.width;
    settings_back_btn.style.height = game_div_1_back_btn.style.height;
    settings_back_btn.style.fontSize = game_div_1_back_btn.style.fontSize;
    //General-Settings Button
    general_settings_btn.style.height = settings_back_btn.style.height;
    general_settings_btn.style.width = '' + canvas_width / 3 + "px";
    general_settings_btn.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.11 + canvas_height * 0.02) + "px";
    general_settings_btn.style.fontSize = settings_back_btn.style.fontSize;
    general_settings_btn.style.borderWidth = settings_back_btn.style.borderWidth;
    //Controls-Settings Button
    controls_settings_btn.style.height = settings_back_btn.style.height;
    controls_settings_btn.style.width = '' + canvas_width / 3 + "px";
    controls_settings_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width / 3) + "px";
    controls_settings_btn.style.top = general_settings_btn.style.top;
    controls_settings_btn.style.fontSize = settings_back_btn.style.fontSize;
    controls_settings_btn.style.borderWidth = settings_back_btn.style.borderWidth;
    //Audio-Settings Button
    audio_settings_btn.style.height = settings_back_btn.style.height;
    audio_settings_btn.style.width = '' + canvas_width / 3 + "px";
    audio_settings_btn.style.top = general_settings_btn.style.top;
    audio_settings_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width / 3 * 2) + "px";
    audio_settings_btn.style.fontSize = settings_back_btn.style.fontSize;
    audio_settings_btn.style.borderWidth = settings_back_btn.style.borderWidth;
    //Settings-Title
    settings_title.style.height = settings_back_btn.style.height;
    settings_title.style.fontSize = settings_back_btn.style.height;
    settings_title.style.width = '' + canvas_width - canvas_width * 0.17 + "px";
    settings_title.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.15 + canvas_height * 0.05) + "px";
    settings_title.style.top = settings_back_btn.style.top;
    //Fullscreen Label
    fullscreen_label.style.height = '' + canvas_height * 0.06 + "px";
    fullscreen_label.style.fontSize = fullscreen_label.style.height;
    fullscreen_label.style.width = '' + canvas_width * 0.2 + "px";
    fullscreen_label.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.25) + "px";
    fullscreen_label.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_height * 0.01) + "px";
    //Fullscreen Checkbox
    fullscreen_checkbox.style.height = '' + canvas_height * 0.06 + "px";
    fullscreen_checkbox.style.width = '' + canvas_height * 0.06 + "px";
    fullscreen_checkbox.style.top = fullscreen_label.style.top;
    fullscreen_checkbox.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.22) + "px";
    //Player Dropdown
    player_dropdown.style.top = fullscreen_label.style.top;
    player_dropdown.style.left = fullscreen_label.style.left;
    player_dropdown.style.height = fullscreen_label.style.height;
    player_dropdown.style.width = '' + canvas_width * 0.18 + "px";
    player_dropdown.style.fontSize = '' + canvas_height * 0.050 + "px";
    //Default_Controls Button
    default_controls_btn.style.height = player_dropdown.style.height;
    default_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    default_controls_btn.style.borderWidth = '' + canvas_height * 0.005 + "px";
    default_controls_btn.style.top = player_dropdown.style.top;
    default_controls_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.20) + "px";
    //
    var controls_text_height = '' + canvas_height * 0.06 + "px";
    var controls_text_width = '' + canvas_width * 0.27    + "px";
    var controls_text_left = fullscreen_label.style.left;
    //Move_Forward Text
    move_forward_controls_text.style.width = controls_text_width;
    move_forward_controls_text.style.height = controls_text_height;
    move_forward_controls_text.style.fontSize = controls_text_height;
    move_forward_controls_text.style.left = controls_text_left;
    move_forward_controls_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.35) + "px";
    //Move_Forward Button
    move_forward_controls_btn.style.top = move_forward_controls_text.style.top;
    move_forward_controls_btn.style.height = controls_text_height;
    move_forward_controls_btn.style.width = '' + canvas_width * 0.1 + "px";
    move_forward_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    move_forward_controls_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.29) + "px";
    //Move_Backward Text
    move_backward_controls_text.style.width = controls_text_width;
    move_backward_controls_text.style.height = controls_text_height;
    move_backward_controls_text.style.fontSize = controls_text_height;
    move_backward_controls_text.style.left = controls_text_left;
    move_backward_controls_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.42) + "px";
    //Move_Backward Button
    move_backward_controls_btn.style.height = controls_text_height;
    move_backward_controls_btn.style.width = '' + canvas_width * 0.1 + "px";
    move_backward_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    move_backward_controls_btn.style.left = move_forward_controls_btn.style.left;
    move_backward_controls_btn.style.top = move_backward_controls_text.style.top;
    //Turn_Right Text
    turn_right_controls_text.style.height = controls_text_height;
    turn_right_controls_text.style.width = controls_text_width;
    turn_right_controls_text.style.fontSize = controls_text_height;
    turn_right_controls_text.style.left = controls_text_left;
    turn_right_controls_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.49) + "px";
    //Turn_Right Button
    turn_right_controls_btn.style.height = controls_text_height;
    turn_right_controls_btn.style.width = move_backward_controls_btn.style.width;
    turn_right_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    turn_right_controls_btn.style.left = move_forward_controls_btn.style.left;
    turn_right_controls_btn.style.top = turn_right_controls_text.style.top;
    //Turn_Left Text
    turn_left_controls_text.style.height = controls_text_height;
    turn_left_controls_text.style.width = controls_text_width;
    turn_left_controls_text.style.left = controls_text_left;
    turn_left_controls_text.style.fontSize = controls_text_height;
    turn_left_controls_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.56) + "px"; 
    //Turn_Left Button
    turn_left_controls_btn.style.height = controls_text_height;
    turn_left_controls_btn.style.width = move_backward_controls_btn.style.width;
    turn_left_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    turn_left_controls_btn.style.left = move_forward_controls_btn.style.left;
    turn_left_controls_btn.style.top = turn_left_controls_text.style.top;
    //Shoot Text
    shoot_controls_text.style.height = controls_text_height;
    shoot_controls_text.style.width = controls_text_width;
    shoot_controls_text.style.left = controls_text_left;
    shoot_controls_text.style.fontSize = controls_text_height;
    shoot_controls_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.63) + "px";
    //Shoot Button
    shoot_controls_btn.style.height = controls_text_height;
    shoot_controls_btn.style.width = move_backward_controls_btn.style.width;
    shoot_controls_btn.style.left = move_forward_controls_btn.style.left;
    shoot_controls_btn.style.top = shoot_controls_text.style.top;
    shoot_controls_btn.style.fontSize = '' + canvas_height * 0.055 + "px";
    //Controls-Feedback Text
    controls_feedback_text.style.height = audio_settings_btn.style.height;
    controls_feedback_text.style.width = '' + canvas_width + "px";
    controls_feedback_text.style.fontSize = controls_feedback_text.style.height;
    controls_feedback_text.style.left = '' + (window.innerWidth - canvas_width) / 2 + "px";
    controls_feedback_text.style.bottom = '' + ((window.innerHeight - canvas_height) / 2 + canvas_width * 0.05) + "px";
    //Master-Volume Text
    master_volume_text.style.width = controls_text_width;
    master_volume_text.style.height = controls_text_height;
    master_volume_text.style.fontSize = controls_text_height;
    master_volume_text.style.top = player_dropdown.style.top;
    master_volume_text.style.left = controls_text_left;
    //Mute-Master-Volume Button
    mute_master_volume_btn.style.height = controls_text_height;
    mute_master_volume_btn.style.width = controls_text_height;
    mute_master_volume_btn.style.left = shoot_controls_btn.style.left;
    mute_master_volume_btn.style.top = master_volume_text.style.top;
    //Master-Volume Input-Field
    master_volume_input_field.style.width = player_dropdown.style.width;
    master_volume_input_field.style.height = controls_text_height;
    master_volume_input_field.style.top = mute_master_volume_btn.style.top;
    master_volume_input_field.style.fontSize = controls_text_height;
    master_volume_input_field.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.29 + canvas_height * 0.06) + "px";
    //Test-Master-Volume Button
    test_master_volume_btn.style.height = controls_text_height;
    test_master_volume_btn.style.width = controls_text_height;
    test_master_volume_btn.style.top = mute_master_volume_btn.style.top;
    test_master_volume_btn.style.left = '' + ((window.innerWidth - canvas_width) / 2 + canvas_width * 0.47 + canvas_height * 0.06) + "px";
    //Music-Volume Text
    music_volume_text.style.height = controls_text_height;
    music_volume_text.style.width = controls_text_width;
    music_volume_text.style.left = controls_text_left;
    music_volume_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.32) + "px";
    music_volume_text.style.fontSize = controls_text_height;
    //Mute-Music-Volume Button
    mute_music_volume_btn.style.height = controls_text_height;
    mute_music_volume_btn.style.width = controls_text_height;
    mute_music_volume_btn.style.left = shoot_controls_btn.style.left;
    mute_music_volume_btn.style.top = music_volume_text.style.top;
    //Music-Volume Input-Field
    music_volume_input_field.style.width = player_dropdown.style.width;
    music_volume_input_field.style.height = controls_text_height;
    music_volume_input_field.style.top = mute_music_volume_btn.style.top;
    music_volume_input_field.style.fontSize = controls_text_height;
    music_volume_input_field.style.left = master_volume_input_field.style.left;
    //Test-Music-Volume Button
    test_music_volume_btn.style.height = controls_text_height;
    test_music_volume_btn.style.width = controls_text_height;
    test_music_volume_btn.style.top = mute_music_volume_btn.style.top;
    test_music_volume_btn.style.left = test_master_volume_btn.style.left;
    //Effect-Volume Text
    effect_volume_text.style.height = controls_text_height;
    effect_volume_text.style.width = controls_text_width;
    effect_volume_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.39) + "px";
    effect_volume_text.style.left = controls_text_left;
    effect_volume_text.style.fontSize = controls_text_height;
    //Mute-Effect-Volume Button
    mute_effect_volume_btn.style.height = controls_text_height;
    mute_effect_volume_btn.style.width = controls_text_height;
    mute_effect_volume_btn.style.left = shoot_controls_btn.style.left;
    mute_effect_volume_btn.style.top = effect_volume_text.style.top;
    //Effect-Volume Input-Field
    effect_volume_input_field.style.width = player_dropdown.style.width;
    effect_volume_input_field.style.height = controls_text_height;
    effect_volume_input_field.style.left = master_volume_input_field.style.left;
    effect_volume_input_field.style.top = mute_effect_volume_btn.style.top;
    effect_volume_input_field.style.fontSize = controls_text_height;
    //Test-Effect-Volume Button
    test_effect_volume_btn.style.height = controls_text_height;
    test_effect_volume_btn.style.width = controls_text_height;
    test_effect_volume_btn.style.top = mute_effect_volume_btn.style.top;
    test_effect_volume_btn.style.left = test_master_volume_btn.style.left;
    //UI-Volume Text
    ui_volume_text.style.height = controls_text_height;
    ui_volume_text.style.width = controls_text_width;
    ui_volume_text.style.top = '' + ((window.innerHeight - canvas_height) / 2 + canvas_height * 0.46) + "px";
    ui_volume_text.style.left = controls_text_left;
    ui_volume_text.style.fontSize = controls_text_height;
    //UI-Effect-Volume Button
    mute_ui_volume_btn.style.height = controls_text_height;
    mute_ui_volume_btn.style.width = controls_text_height;
    mute_ui_volume_btn.style.left = shoot_controls_btn.style.left;
    mute_ui_volume_btn.style.top = ui_volume_text.style.top;
    //UI-Volume Input-Field
    ui_volume_input_field.style.width = player_dropdown.style.width;
    ui_volume_input_field.style.height = controls_text_height;
    ui_volume_input_field.style.left = master_volume_input_field.style.left;
    ui_volume_input_field.style.fontSize = controls_text_height;
    ui_volume_input_field.style.top = mute_ui_volume_btn.style.top;
    //Test-UI-Volume Button
    test_ui_volume_btn.style.height = controls_text_height;
    test_ui_volume_btn.style.width = controls_text_height;
    test_ui_volume_btn.style.top = mute_ui_volume_btn.style.top;
    test_ui_volume_btn.style.left = test_master_volume_btn.style.left;
    //#endregion
}
//#endregion