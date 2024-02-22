function choose(playerChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('result').innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
