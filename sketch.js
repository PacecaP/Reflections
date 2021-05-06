let mirror, shadow, crack, reality;
var fade;
var fade2;
var fadeAmount = 1;
var mirw = 50; 
var mirh = 50;
let dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9, dia10, dia11, dia12, dia13, dia14, dia15 = false;
var crkw = 50;
var crkh = 50;
function preload(){
  mirror = loadImage('mirror.png');
  shadow = loadImage('shadow.png');
  crack = loadImage('glassbreak.png');
  reality = loadImage('reality.jpg');}
function setup() {
  createCanvas(500, 500);
  background('black');
  frameRate(30);
  fade = 0;
  fade2 = 0;
  imageMode(CENTER);
  textAlign(CENTER);
   let inp = createInput('');
    inp.position(170, 500);
    inp.input(InputEvents);}
function draw() {
  fill('white');
  textSize(10);
  textFont('Georgia');
  text('This is a place of absolute darkness.', 250, 40); text('Like the walls of a closet you hid in as a child, no light pierces this landscape of absolute solitude.', 250, 60); text('You are shrouded in complete, incomprehensible shadow.', 250, 80); text('You hold your hand out in front of you and see no form, no body, no you.', 250, 100); text('There is no horrible vessel to be perceived, no judgement, no work.', 250, 120); text('You could just exist like this, untethered and unbothered for the rest of time.', 250, 140); text('Weightless...', 250, 160); text('Motionless...', 250, 180); fill(fade + 50); text('...Lifeless.', 250, 300);
  tint (255, fade); image (mirror, 250, 250, mirw, mirh); 
  if (fade < 0){
    fadeAmount = 1;}
  if (fade > 50){
    fadeAmount = -1;}
  fade += fadeAmount;
  if (mouseIsPressed){
    dia2 = true;}
  if (dia2 == true){
    clear();
    background('black');
    image (mirror, 250, 250, mirw, mirh);
    fill('white');
    text ('Oh that? Thats merely a mirage. A figment of your imagination flickering in the distance.', 250, 300); text('If you were to focus on it, perhaps it could stabilize, but its better left ignored.', 250, 320); text('-[Focus]', 250, 340);
     if (dia3 == true){
      clear();
      background('black');
        tint(255, 255);
        image(mirror, 250, 250, mirw, mirh);
      text('The figment stabilizes in your vision, but it is still in the distance. It radiates an aura of hostility.', 250, 300); text('You arent sure why, but you can almost sense that if you choose to pursue this, there will be no turning back.', 250, 320); text('Your peace will be stolen', 250, 340); text('- [Approach]', 250, 360);
      if (dia4 == true){
        clear();
        background('black');
        mirw = 300;
        mirh = 300;
        image(mirror, 250, 250, mirw, mirh);
        text('Despite your better judgement, you approach. Before you is a silver-backed mirror with an intricate cast-iron', 250, 40); text('frame. You can feel that something is off- that this isnt how mirrors are supposed to look.', 250, 60); text('Something is terribly wrong.', 250, 80); text('1) The mirror is fine. I like it better this way.', 250, 420); text('2) Mirrors are supposed to reflect things. Why cant I see myself?', 250, 440);
      if (dia5 == true){
        clear();
        background('black');
        image(mirror, 250, 250, mirw, mirh);
        text('True. It is nice, in a way. You feel truly formless. Still, you cant shake the feeling that this isnt right.', 250, 40); text('The mirror is broken, and its your fault.', 250, 60); text('2) Mirrors are supposed to reflect things. Why cant I see myself?', 250, 440); }
      if (dia6 == true){reload();
        text('Why indeed... Have you stopped to consider that just maybe you dont want to?', 250, 50); text('-I want to see myself. [Appear]', 250, 440);
      if (dia7 == true){ reload();
        text('Bad. Choice.', 250, 40); text('A muddled grey form manifests within the mirror. It posesses no discernable details.', 250, 60); text('Yet its monsterous in appearance', 250, 80); text('1) Thats not me!', 250, 420); text('3) Why do I look like that?', 250, 460); text('2) I dont want to do this anymore. Make it go away.', 250, 440);
        if (dia8 == true){ reload();
          text('Unfortunately, due to the nature of how mirrors work, it has to be.', 250, 40); text('3) Why do I look like that?', 250, 460); text('2) I dont want to do this anymore. Make it go away.', 250, 440);}
          if (dia9 == true){clear(); background('black'); noTint(); image(mirror, 250, 250, mirw, mirh); tint(255, fade); image(shadow, 250, 200, 150, 150);
            text('Despite your best efforts, all you can manage to do is make it fade slightly. It is here to stay.', 250, 40); text('1) Thats not me!', 250, 420); text('3) Why do I look like that?', 250, 460);}
        if (dia10 == true){ clear();reload();
      text('You were warned.', 250, 40); text('Youve never liked the way you looked, and neither has anyone else.', 250, 60); text('Why did you think that would change now?', 250, 80); text('1) Ive been trying to love myself more...', 250, 420); text('2) I took a lot of pills.', 250, 440);
          if (dia11 == true){ reload();
            text('Love yourself? You mean your pitiful attempts at "self care"?', 250, 40); text('The habits you tried to adopt for a month and then completely dropped? Your fad diets? Your self-help books?', 250, 60); text('God, please. You cant even love house plants properly. Be honest with yourself.', 250, 80); text('- You dont have to be so mean[...]', 250, 420);
            if (dia13 == true){ reload();
              text('And where has nice ever gotten you?', 250, 40); text('Everyone around you, giving you compliments and affirmations, lying through their teeth.', 250, 60); text('Everyone lies to you. Not like the mirror. The mirror shows your true self.', 250, 80); text('And your true self is wrong. You are wrong. Everything you touch breaks.', 250, 100); text('- [Touch the mirror]', 250, 420); }}
          if (dia12 == true){reload();
            text('Yeah. You took a LOT of pills.', 250, 40); text('Meds, diets, drugs, and a whole bottle just an hour ago, and look where you are now.', 250, 60); text('Even innebriated you cant convince yourself that you arent disgusting.', 250, 80); text('Your mind is just as fucked as your body.', 250, 100); text('- I want to look better. [Try]', 250, 420);
            if (dia14 == true){reload();
              text('You cant.', 250, 40); text('We have been over this before. Every time you try, you fail.', 250, 60); text('Everything you touch breaks.', 250, 80); text('-[Touch the mirror]', 250, 420);} }
            if (dia15 == true){
            reload();
            noTint();
            image(crack, 250, 200, crkw, crkh);
            text('Wait, stop!', 250, 40);
            text('You really dont wanna do that.', 250, 60);
              if (mouseIsPressed){
                crkw = crkw + 50;
                crkh = crkh +50; }
              if (crkw >= 50){text('Think about what youre doing! You know whats waiting for you out there', 250, 80);}
              if (crkw >= 100){text('Please, I dont want to go back, its so much better here!', 250, 100);}
              if (crkw >= 200){text('I cant do it anymore! I cant look at myself- my body is wrong! IM wrong!', 250, 420);}
              if (crkw >= 250){text('wrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrong', 250, 440);}
              if (crkw >= 300){text('wrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrong', 250, 450);}
              if (crkw >= 350){text('wrongwrongwrongwrongwrongwrongwrongwrong', 250, 460);}
              if (crkw >= 400){text('wrongwrongwrongwrongwrongwrongwrongwrong', 250, 470);}
              if (crkw >= 450){
                text('wrongwrongwrongwrongwrongwrongwrongwrong', 250, 460);
                textSize(50);
                text('NO-', 250, 480);}
              if (crkw >= 500){
                clear();
                background('white');
                tint(255, fade2);
                fade2 += fadeAmount;
                fadeAmount = 50;
                if (fade2 >= 255){
                  fadeAmount = 0;
                }
                image(reality, 250, 250, 500, 500);
                textSize(10);
                text('Thank you for playing', 250, 250);} } } } } } } } }
function reload(){
  clear(); background('black'); noTint(); image(mirror, 250, 250, mirw, mirh); tint(255, 200); image(shadow, 250, 200, 150, 150);
}
function InputEvents(){
  if(this.value() == "Focus" || this.value() == "focus"){dia3 = true;}
  if(this.value() == "Approach" || this.value() == "approach"){dia4 = true;}
  if(this.value() == "2"){dia6 = true;}
  if(this.value() == "1" && dia4 == true){dia5 = true;}
  if(this.value() == "Appear" || this.value() == "appear"){dia7 = true;}
  if (this.value() == "1" && dia7 == true){dia8 = true;}
  if (this.value() == "2" && dia7 == true){dia9 = true;}
  if (this.value() == "3" && dia7 == true){dia10 = true;}
  if (this.value() == "1" && dia10 == true){dia11 = true;}
  if (this.value() == "2" && dia10 == true){dia12 = true;}
  if (this.value() == "..." && dia11 == true){dia13 = true; }
  if (this.value() == "Try" && dia12 == true || this.value() == "try" && dia12 == true){dia14 = true; }
  if (this.value() == "Touch the mirror" && dia13 == true || this.value() == "touch the mirror" && dia13 == true || this.value() == "Touch the mirror" && dia14 == true || this.value() == "touch the mirror" && dia14 == true){dia15 = true;}}
