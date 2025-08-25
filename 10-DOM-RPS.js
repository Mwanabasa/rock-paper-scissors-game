    let score = JSON.parse(localStorage.getItem('score'));
    
    if(score === null){
      score = {
      wins : 0,
      losses : 0,
      ties : 0
    }
    };

    updateScore();
    
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      
     let result = '';

      if (playerMove === 'scissors') {
        if(computerMove === 'rock'){
          result = 'You lost 😥';
        }else if(computerMove === 'scissors'){
          result = 'Tie 🙂';
        }else if(computerMove === 'paper'){
          result = 'You won 😁😀';
        }

      } else if (playerMove === 'paper') {
        if(computerMove === 'rock'){
          result = 'You won 😁😀';
        }else if(computerMove === 'scissors'){
          result = 'You lost 😥';
        }else if(computerMove === 'paper'){
          result = 'Tie 🙂';
        }

      } else if (playerMove === 'rock') {
        if(computerMove === 'rock'){
          result = 'Tie 🙂';
        }else if(computerMove === 'scissors'){
          result = 'You won 😁😀';
        }else if(computerMove === 'paper'){
          result = 'You lost 😥';
        }
      }

      if (result === 'You won 😁😀') {
        score.wins += 1;
      } else if (result === 'Tie 🙂') {
        score.ties += 1;
      } else if (result === 'You lost 😥') {
        score.losses += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.result').innerHTML = result;
      document.querySelector('.moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="emoji">
        <img src="images/${computerMove}-emoji.png" class="emoji">
        Computer`;
      updateScore();

    }

    function updateScore(){
      document.querySelector('.results').innerHTML = `Wins: ${score.wins},  Ties:${score.ties},  Losses: ${score.losses}`;
    }
    
    function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
      console.log(randomNumber);
      console.log(computerMove);

      return computerMove;
    }
