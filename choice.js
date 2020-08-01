var one = 0;
var two = 0;

function hide() {
    document.getElementById("buttonB1").style.display = "none";
    document.getElementById("buttonA1").style.display = "none"; 

    document.getElementById("restart").style.display = "block";

} 


function start() {
    document.getElementById("start").style.display="none";
    document.getElementById("subTitle").style.display="none";
    document.getElementById("buttonA1").style.display="block";
    document.getElementById("buttonB1").style.display="block";

    document.getElementById("buttonA1").innerText = "Walk to Coast?";
    document.getElementById("buttonB1").innerText = "Go to Cliff?";
    
    document.getElementById("mainText").innerText = "You wake up with a strange case of memory loss. You look around and notice you are in a forest. You can not remeber how you got here. You decide the best thing to do is to look around. You notice a tall cliff over looking the woods. You also see a coast line up ahead.";
}

function restart() {
    alert("This is Your ending!! Try again and see if you can get a different ending. There are 16 different possible endings.");
    location.reload();
}

function buttonA1() {
    one = one + 1;

    if (one == 1 && two == 0) {
    document.getElementById("mainText").innerText = "You went to the coast. You look at the horizon and you can see no airplane, boat, or any sign of humans anywhere. Water for miles. The beach is sandy and smooth.";

    document.getElementById("buttonA1").innerText = "Find Shelter?";
    document.getElementById("buttonB1").innerText = "Walk the shore line?";
    }
    else if (one == 2 && two == 0) {
        document.getElementById("mainText").innerText = "You went to find some a good place for shelter on the tree line. You make a nice litte fort out of sticks and leaves. You spend the night but unfortunalty there is high tide while you are sleeping. The tide washed away your shelter and you are left exposed to the outside. Because of this, nature takes you and you end your journey here.";
        hide();
    }
    else if (one == 1 && two == 1) {
        document.getElementById("mainText").innerText = "You make an attempt to climb the cliff. It is way steeper than it looked like. You feel yourself slipping but you catch yourselve right before it's too late. You keep climbing but the second time you slip you aren't so lucky. RIP.";
        hide();
    }
    else if (one == 2 && two == 1) {
        document.getElementById("mainText").innerText = "You slept in the cave through a strong storm. Deciding to get shelter in the cave was a good choice. After the night you realize it could be a good idea to make a fire. Or you think getting food may be a good option.";

        document.getElementById("buttonA1").innerText = "Look for Food?";
        document.getElementById("buttonB1").innerText = "Start a Fire?";
    }
    else if (one == 3 && two == 1) {
        document.getElementById("mainText").innerText = "You went to look for food. After searching the woods for a while you find a bush filled with berrys. You are no berry expert but you are also very hungry";

        document.getElementById("buttonA1").innerText = "Eat nothing?";
        document.getElementById("buttonB1").innerText = "Eat the Berrys?";
    }
    else if (one == 4 && two == 1) {
        document.getElementById("mainText").innerText = "You ate nothing. This seemed like a good choice at the time but sadly you were unable to find food later. You did not die of poisonous berrys but you did in fact die of starvation.";
        hide();
    }
    else if (one == 3 && two == 2) {
        document.getElementById("mainText").innerText = "You looked for food. You did not have much luck, and while searching the brush for coconuts a snake popped out of no where. The snake got you and a little while on the poison was too much for your body. You did enjoy some coconuts though.";
        hide();
    }
    else if (one == 3 && two == 3) {
        document.getElementById("mainText").innerText = "You signaled for the boat. They saw your signal and they start their way to the shore. You are filled with relief and hope to find answers as to why you were deserted on the island once you get back to the real world. The ship arrives at shore and judging the crew by their looks you determine that they are a rough crowd.";

        document.getElementById("buttonA1").innerText = "Run Away?";
        document.getElementById("buttonB1").innerText = "Go With Them?";
    }
    else if (one == 4 && two == 3) {
        document.getElementById("mainText").innerText = "You ran away from the boat. Too intimidated by the crew, so you decide to try your luck with the island. You live the rest of you life time on the island and even make a cool treehouse. You live a long life but still wonder what you left behind, and why you were on the island in the first place.";
        hide();
    }
    else if (one == 4 && two == 4) {
        document.getElementById("mainText").innerText = "You escaped at the port. You decide to try your chance at an escape. You can't seem to stand staying with the pirates anymore. It is a risky choice but you find a perfect time to run. While the crew is distracted partying after departing the port, you jump off the boat. No one seems to notice and you make your way to shore. You start your new life here and settle down in a house. You are glad you made the decision to escape from the pirate's prison.";
        hide();
    }
    else if (one == 1 && two == 2) {
        document.getElementById("mainText").innerText = "After making your way to the top of the cliff you are quite tired, and still fatuiged from however you arrived on this island. You decide that it is best fit to go to sleep on this mountain and you rest peacfully. Sadly there is a big storm overnight and you start sliding down. You lose your grip and start going down the mountain...";
        hide();
    }
    else if (one == 1 && two == 3) {
        document.getElementById("mainText").innerText = "You made a smoke signal in the fire by burning a bunch of leaves. There is a plane nearby and it sees your call. After a couple hours of waiting a coast guard ship arrives to save you. You go back to your normal life, but you never learn the mystery of why you were stuck in the first place.";
        hide();
    }
    else if (one == 1 && two == 4) {
        document.getElementById("mainText").innerText = "You went for the hunt. Even though you are a simple human going up against a wild bear you still think you can handle the fight. You grab a stick off the ground and hope for the best. You don't even get one blow on the bear before it strikes.";
        hide();
    }
    else if (one == 1 && two == 5) {
        document.getElementById("mainText").innerText = "You climbed the tree. You realize that you can not go up against a wild bear with nothing but your hands. You scurry up a tree just in time to get away from the animal. It gives up and leaves you alone. Hopfully you will not run into it again later on....that night the bear sadly returns to your campsite but this time with its pack. You can not find any trees to climb.";
        hide();
    }
    else if (one == 1 && two == 6) {
        document.getElementById("mainText").innerText = "You dove down for the parts. You think that they may be the answer to how you got here on this island. You find a working radio that was somehow intact. You call everything nearby that you can and after a little waiting you get a response. After being recovered a crew examined the plane wreck and its black box and determined that you were the one flying it when it went down. The weather was too much to handle. You live your life back home and feel fufilled that you are no longer confused.";
        hide();
    }
}

function buttonB1() {
    two = two + 1;

    if (one == 0 && two == 1) {
    document.getElementById("mainText").innerText = "You went to check out the high cliff over looking the woods. You can either try and make your way up the cliff on a pretty steep edge, or you can search the other side for a safer way up.";

    document.getElementById("buttonA1").innerText = "Try to Climb?";
    document.getElementById("buttonB1").innerText = "Find another way up?";
    }
    else if (one == 0 && two == 2) {
        document.getElementById("mainText").innerText = "You went to find another way up. You do not want to try your luck with the one edge of the cliff. You make it up the other side of the cliff with no trouble.";

        document.getElementById("buttonA1").innerText = "Camp Out?";
        document.getElementById("buttonB1").innerText = "Build a Campfire?";
    }
    else if (one == 1 && two == 1) {
        document.getElementById("mainText").innerText = "You walked the shore line. You think this will give you a good idea of where you are and the size of the islan. After walking the entire island you notice that it is not that big. You passed a shallow cave on the way around the shore line.";

        document.getElementById("buttonA1").innerText = "Sleep in Cave?";
        document.getElementById("buttonB1").innerText = "Sleep Outside?";
    }
    else if (one == 1 && two == 2) {
        document.getElementById("mainText").innerText = "You slept outside. You chose the worst night to do so. There was a terrible storm last night and a lot of flooding. You were lucky to be at the top of the cliff but also unlucky beacuse the rain made the rock very slippery...";
        hide();
    }
    else if (one == 2 && two == 2) {
        document.getElementById("mainText").innerText = "You started a fire in your cave. You are very cozy and you think of the next task at hand.";

        document.getElementById("buttonA1").innerText = "Look for Food?";
        document.getElementById("buttonB1").innerText = "Build a Shelter?";
    }
    else if (one == 3 && two == 2) {
        document.getElementById("mainText").innerText = "You ate the berrys. You thought that even though you know nothing about berrys the chances of them being poisonous are very low...right? You were wrong.";
        hide();
    }
    else if (one == 2 && two == 3) {
        document.getElementById("mainText").innerText = "You built a shelter. To make your cave even better you decide to make a small shelter out of logs on the opening to protect from wind, rain or animals coming in. Very nice indeed. While crafting your fort a glimer catches your eye on the horizon. It's a boat! And it also could be your way off the island, and back home.";

        document.getElementById("buttonA1").innerText = "Signal Boat?";
        document.getElementById("buttonB1").innerText = "Do not Signal?";
    }
    else if (one == 2 && two == 4) {
        document.getElementById("mainText").innerText = "You did not signal the boat. You felt that it was not the right time to signal a boat. You assume there will be another time to get off this island. You are very wrong. After a three days the air travel and boat travel goes to zero because people stop looking for you. You live the rest of your days on the island and you live at peace.";
        hide();
    }
    else if (one == 3 && two == 4) {
        document.getElementById("mainText").innerText = "You went with the ship. You decide that running is not the best option. You would rather get a chance at getting off this island then risk staying on it forever. One day, after many others at sea, the crew stops at a port. You have to make a crucial decision for the future of yourself.";

        document.getElementById("buttonA1").innerText = "Escape?";
        document.getElementById("buttonB1").innerText = "Stay?";
    }
    else if (one == 3 && two == 5) {
        document.getElementById("mainText").innerText = "Your choice was to stay on the boat. Even though you had a chance to get away from the rough pirates that make you work, you decided the risk of being caught was too much. You live as a shipmate until eventually, one of the pirtates gets mad at you and makes you walk the plank...";
        hide();
    }
    else if (one == 0 && two == 3) {
        document.getElementById("mainText").innerText = "You made a fire at the top point of the cliff. You get comfy on the fire and decide where your priorities lie.";

        document.getElementById("buttonA1").innerText = "Make a smoke Signal?";
        document.getElementById("buttonB1").innerText = "Look for Food";
    }
    else if (one == 0 && two == 4) {
        document.getElementById("mainText").innerText = "You go on the hunt for food. Your hunger is greater than making yourself seen from above with a smoke signal. You are creeping in the woods and you come across a bear. What should you do?";

        document.getElementById("buttonA1").innerText = "Hunt the Animal?";
        document.getElementById("buttonB1").innerText = "Run Away?";
    }
    else if (one == 0 && two == 5) {
        document.getElementById("mainText").innerText = "You ran from the bear. You make the choice to run as far as you can from the bear. Unfortunatly it spots you...you are terrified but need to think of a decision quickly.";

        document.getElementById("buttonA1").innerText = "Climb a Tree?";
        document.getElementById("buttonB1").innerText = "Run to the Water?";
    }
    else if (one == 0 && two == 6) {
        document.getElementById("mainText").innerText = "You ran to the Water! This was a bold choice because you had to beat the bear to the shore. You had a headstart so you made it into the water. The bear does not want to trudge into the water to eat you so you are luky and it runs away. You then notice something underneath you in the water. It seems to be a planewreck. It may have important parts in it that you can use to get off the island.";

        document.getElementById("buttonA1").innerText = "Dive?";
        document.getElementById("buttonB1").innerText = "Go Back?";
    }
    else if (one == 0 && two == 7) {
        document.getElementById("mainText").innerText = "You went back to shore. You determine that you are not going to dive down into the water unless you are 100% sure that the parts are down there. Sadly you will never know because you never come back to the site again. You live the rest of your life on the island and are never found or seen by anyone ever again...";
        hide();
    }
}
