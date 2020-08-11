const possible_choices = ['R', 'P', 'S'];

const getInput = () => {
    const player_choice = document.getElementById('Input-Value').value;
    play_game(player_choice);
};

const randomly_select_play = () => {
    // Math.random() randomly return a number between [0, 1)
    const random_index = Math.floor(Math.random() * possible_choices.length);
    return possible_choices[random_index];;
}

const play_game = (player_choice) => {
    
    const ai_choice = randomly_select_play();
    console.log(`Player=${player_choice} and AI=${ai_choice}!`);


    // Nine total outcomes:
    // Seven if all ties are equal:
    // Notation: "Player1Choice,Player2Choice -> Winner"
    //  P,R -> P1   AI
    //  R,P -> P2     

    //  S,P -> P1   AI
    //  P,S -> P2

    //  R,S -> P1   AI
    //  S,R -> P2

    //  R,R -> Tie
    //  P,P -> Tie
    //  S,S -> Tie

    // Call Player-1 the computer

    if (ai_choice === player_choice) {
        console.log(`TIE: Player=${player_choice} and AI=${ai_choice}!`);
        console.log('Play again!!!');
    } 
    
    //  P,R -> P1   AI
    //  R,P -> P2
    else if (ai_choice==='P' && player_choice==='R') //  P,R -> P1 (AI)
        console.log(`AI-wins: Paper smothers rock!`);
    else if (ai_choice==='R' && player_choice==='P') //  R,P -> P2
        console.log(`You-win: Paper smothers rock!`);

    //  S,P -> P1   AI
    //  P,S -> P2
    else if (ai_choice==='S' && player_choice==='P') //  S,P -> P1   AI
        console.log(`AI-wins: Scissors cut paper!`);
    else if (ai_choice==='P' && player_choice==='S') //  P,S -> P2
        console.log(`You-win: Scissors cut paper!`);

    //  R,S -> P1   AI
    //  S,R -> P2
    else if (ai_choice==='R' && player_choice==='S') //  R,S -> P1   AI
        console.log(`AI-wins: Rock smashes scissors!`);
    else if (ai_choice==='S' && player_choice==='R') //  S,R -> P2
        console.log(`You-win: Rock smashes scissors!`);
};
