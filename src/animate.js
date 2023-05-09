function animation(){

    document.addEventListener('DOMContentLoaded', function() {

        const animation = document.querySelector('#animation');
        const text = document.querySelector('#text');
        const logo = document.querySelector("#github");
    
        const phrases = ['GitHub',"Linux","Python","Tailwind"];
        let currentPhrase = 0;
        let currentLetter = 0;
        let isDeleting = false;
        let request;
        
        const startDelay = 1000;
        const phraseDelay = 2000;
        const typingSpeed = 50;
        const deletingSpeed = 100;
        
        function animate() {
          const currentText = text.textContent;
          const currentPhraseText = phrases[currentPhrase].slice(0, currentLetter);
        
          if (currentText !== currentPhraseText) {
            text.textContent = currentPhraseText;
            checkGithub();  // wywołanie funkcji checkGithub() podczas aktualizacji tekstu
            request = requestAnimationFrame(animate);
          } else if (!isDeleting && currentLetter === phrases[currentPhrase].length) {
            isDeleting = true;
            setTimeout(() => request = requestAnimationFrame(animate), phraseDelay);
          } else if (isDeleting && currentLetter === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(() => {
              currentLetter = 0;
              request = requestAnimationFrame(animate);
            }, phraseDelay);
          } else {
            if (!isDeleting) {
              currentLetter++;
            } else {
              currentLetter--;
            }
            setTimeout(() => {
              request = requestAnimationFrame(animate);
            }, isDeleting ? deletingSpeed : typingSpeed);
          }
        }
        
        function checkGithub(){
          if(text.innerHTML == "GitHub" && !isDeleting){
            logo.style.opacity = '1';
            logo.classList.remove('hide');
          }else{
            logo.style.opacity = '0';
            logo.classList.add('hide');
          }
        }
        
        setTimeout(() => request = requestAnimationFrame(animate), startDelay);
    });
    
    
}
module.exports = animation;