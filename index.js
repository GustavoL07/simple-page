function randomizer(){
    document.getElementById("audio-1").play()
    
    const ToonList = [
        ["/Toons/Astro_Render.webp", 'Astro'],
        ["/Toons/Bobette_Render.webp", 'Bobette'],
        ["/Toons/Boxten_Render.webp", 'Boxten'],
        ["/Toons/Brightney_Render.webp", 'Brightney'],
        ["/Toons/Coal_Render.webp", 'Coal'],
        ["/Toons/Connie_Render.webp", 'Connie'],
        ["/Toons/Cosmo_Render.webp", 'Cosmo'],
        ["/Toons/Finn_Render.webp", 'Finn'],
        ["/Toons/Flutter_Render.webp", 'Flutter'],
        ["/Toons/Gigi_Render.webp", 'Gigi'],
        ["/Toons/Ginger_Render.webp", 'Ginger'],
        ["/Toons/Glisten_Render.webp", 'Glisten'],
        ["/Toons/Goob_Render.webp", 'Goob'],
        ["/Toons/Looey_Render.webp", 'Looey'],
        ["/Toons/Pebble_Render.webp", 'Pebble'],
        ["/Toons/Poppy_Render.webp", 'Poppy'],
        ["/Toons/Razzle_Dazzle_Render.webp", 'Razzle & Dazzle'],
        ["/Toons/Rodger_Render.webp", 'Rodger'],
        ["/Toons/Rudie_Render.webp", 'Rudie'],
        ["/Toons/Scraps_Render.webp", 'Scraps'],
        ["/Toons/Shelly_Render.webp", 'Shelly'],
        ["/Toons/Shrimpo_Render.webp", 'Shrimpo'],
        ["/Toons/Sprout_Render.webp", "Sprout"],
        ["/Toons/Teagan_Render.webp", 'Teagan'],
        ["/Toons/Tisha_Render.webp", 'Tisha'],
        ["/Toons/Toodles_Render.webp", 'Toodles'],
        ["/Toons/Vee_Render.webp", 'Vee'],
        ["/Toons/Yatta_Render .webp", 'Yatta'],
    ];

    const Trinkets = [
        "/Trinkets/Alarm.webp",
        "/Trinkets/Blue_Bandana.webp",
        "/Trinkets/Bone.webp",
        "/Trinkets/Brick.webp",
        "/Trinkets/Cardboard_Armor.webp",
        "/Trinkets/Clown_Horn.webp",
        "/Trinkets/Coin_Purse.webp",
        "/Trinkets/Crayon_Set.webp",
        "/Trinkets/Dandy_Plush.webp",
        "/Trinkets/Diary.webp",
        "/Trinkets/Dog_Plush.webp",
        "/Trinkets/Fancy_Purse.webp",
        "/Trinkets/Feather_Duster.webp",
        "/Trinkets/Festive_Lights.webp",
        "/Trinkets/Fishing_Rod.webp",
        "/Trinkets/Friendship_Bracelet.webp",
        "/Trinkets/Ghost_Snakes_In_A_Can.webp",
        "/Trinkets/Lucky_Coin.webp",
        "/Trinkets/Machine_Manual.webp",
        "/Trinkets/Magnifying_Glass.webp",
        "/Trinkets/Megaphone.webp",
        "/Trinkets/Night_Cap.webp",
        "/Trinkets/Participation_Award.webp",
        "/Trinkets/Party_Popper.webp",
        "/Trinkets/Peppermint_Icing.webp",
        "/Trinkets/Pink_Bow.webp",
        "/Trinkets/Pop_Pack.webp",
        "/Trinkets/Pull_Toy.webp",
        "/Trinkets/Ribbon_Spool.webp",
        "/Trinkets/Rock.webp",
        "/Trinkets/Savory_Charm.webp",
        "/Trinkets/Spare_Bulb.webp",
        "/Trinkets/Speedometer.webp",
        "/Trinkets/Speedy_Shoes.webp",
        "/Trinkets/Sweet_Charm.webp",
        "/Trinkets/Thermos.webp",
        "/Trinkets/Thinking_Cap.webp",
        "/Trinkets/Toy_Kit.webp",
        "/Trinkets/Vanity_Mirror.webp",
        "/Trinkets/Vee_Remote.webp",
        "/Trinkets/Water_Cooler.webp",
        "/Trinkets/Wrench.webp",
    ]

    const Items = [
        "Items/Air_Horn.webp",
        "Items/Bandage.webp",
        "Items/Bottle_O_Pop.webp",
        "Items/Box_O_Chocolates.webp",
        "Items/Chocolate.webp",
        "Items/Eject_Button.webp",
        "Items/Extraction_Speed_Candy.webp",
        "Items/Gumballs.webp",
        "Items/Health_Kit.webp",
        "Items/Instructions.webp",
        "Items/Jawbreaker.webp",
        "Items/Jumper_Cable.webp",
        "Items/Pop.webp",
        "Items/Protein_Bar.webp",
        "Items/Skill_Check_Candy.webp",
        "Items/Smoke_Bomb.webp",
        "Items/Speed_Candy.webp",
        "Items/Stamina_Candy.webp",
        "Items/Stealth_Candy.webp",
        "Items/Stopwatch.webp",
        "Items/Valve.webp",
    ]

    var random_number = Math.floor(Math.random() * ToonList.length);
    var image = ToonList[random_number][0];
    var name = ToonList[random_number][1];
    var floor = Math.floor(Math.random() * 20) + 10;

    var image_trinket_1 = Trinkets[Math.floor(Math.random() * Trinkets.length)];
    var image_trinket_2 = Trinkets[Math.floor(Math.random() * Trinkets.length)];
    var image_item_1 = Items[Math.floor(Math.random() * Items.length)];
    var image_item_2 = Items[Math.floor(Math.random() * Items.length)];
    var image_item_3 = Items[Math.floor(Math.random() * Items.length)];

    while(image_trinket_1 == image_trinket_2){
        image_trinket_2 = Trinkets[Math.floor(Math.random() * Trinkets.length)];
    }

    var toon_image = document.getElementById("random-toon-image");
    var toon_name = document.getElementById("random-toon-name");
    var target_floor = document.getElementById("random-floor")
    var trinket_1 = document.getElementById("random-trinket-1");
    var trinket_2 = document.getElementById("random-trinket-2");
    var item_1 = document.getElementById("random-item-1");
    var item_2 = document.getElementById("random-item-2");
    var item_3 = document.getElementById("random-item-3");

    toon_image.style.opacity = 0;
    toon_image.style.scale = 0.5

    toon_name.style.opacity = 0;
    toon_name.style.scale = 0.5;

    target_floor.style.opacity = 0;
    target_floor.style.scale = 0;

    trinket_1.style.opacity = 0;
    trinket_1.style.scale = 0;
    trinket_2.style.opacity = 0;
    trinket_2.style.scale = 0;

    item_1.style.opacity = 0;
    item_1.style.scale = 0;
    item_2.style.opacity = 0;
    item_2.style.scale = 0;
    item_3.style.opacity = 0;
    item_3.style.scale = 0;


    setTimeout(() => 
    {
        toon_image.style.opacity = 1;
        toon_image.style.scale = 1;

        toon_name.style.opacity = 1;
        toon_name.style.scale = 1;

        target_floor.style.opacity = 1;
        target_floor.style.scale = 1;

        trinket_1.style.opacity = 1;
        trinket_1.style.scale = 1;
        trinket_2.style.opacity = 1;
        trinket_2.style.scale = 1;

        item_1.style.opacity = 1;
        item_1.style.scale = 1;
        item_2.style.opacity = 1;
        item_2.style.scale = 1;
        item_3.style.opacity = 1;
        item_3.style.scale = 1;

        document.getElementById("random-toon-image").src = image;
        document.getElementById("random-toon-name").innerHTML = name;
        document.getElementById("random-floor").innerHTML = String("Target Floor: " + floor);

        document.getElementById("random-trinket-1").src = image_trinket_1;
        document.getElementById("random-trinket-2").src = image_trinket_2;

        document.getElementById("random-item-1").src = image_item_1;
        document.getElementById("random-item-2").src = image_item_2;
        document.getElementById("random-item-3").src = image_item_3;

    }, 0.5*1000);

    
}

function displayHardModeDiv(){
    const checkbox = document.getElementById("hard-mode-checkbox");
    const hardModeDiv = document.getElementById("hard-mode");

    console.log(checkbox.checked);
    console.log(hardModeDiv);
    

    if (checkbox.checked){
        hardModeDiv.style.display = "block";
    }
    else{
        hardModeDiv.style.display = "none";
    }
}