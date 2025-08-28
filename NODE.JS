
    // ---- small interactive touches ----
    const confettiRoot = document.getElementById('confettiRoot');
    const btn = document.getElementById('surpriseBtn');
    const nameEl = document.getElementById('friendName');

    // Replace friend name quickly (you can change this to your friend's name)
    const FRIEND_NAME = 'MEGHA';
    nameEl.textContent = FRIEND_NAME;

    let running = false;
    function makeConfetti(){
      const colors = ['#ff7ab6','#ffd166','#7afcff','#9bffb2','#8d7aff','#ffb84d'];
      for(let i=0;i<28;i++){
        const el = document.createElement('div');
        el.className = 'confetti';
        const size = 8 + Math.random()*16;
        el.style.width = size + 'px';
        el.style.height = (size*1.3) + 'px';
        el.style.left = (Math.random()*110 - 5) + '%';
        el.style.background = colors[Math.floor(Math.random()*colors.length)];
        el.style.transform = 'rotate('+ (Math.random()*360) +'deg)';
        el.style.animationDuration = (4 + Math.random()*3) + 's';
        el.style.opacity = 0.95;
        el.style.borderRadius = (Math.random()*30) + '%';
        confettiRoot.appendChild(el);

        // remove after animation
        setTimeout(()=>{ el.remove(); }, 8000);
      }
    }

    btn.addEventListener('click', ()=>{
      // quick text punch
      if(!running){
        running = true; btn.textContent = 'Hooray! 🎉';
        // three bursts
        makeConfetti(); setTimeout(makeConfetti,250); setTimeout(makeConfetti,600);
        // small pulse animation to the name
        nameEl.style.transition = 'transform .5s ease';
        nameEl.style.transform = 'scale(1.06)';
        setTimeout(()=>{ nameEl.style.transform = 'scale(1)'; running = false; btn.textContent = 'Celebrate 🎊'; }, 900);
      }
    });

    // Press 'E' to edit name quickly
    window.addEventListener('keydown', (e)=>{
      if(e.key.toLowerCase()==='e'){
        const val = prompt('Enter your friend\'s name:', FRIEND_NAME);
        if(val!==null && val.trim().length>0) nameEl.textContent = val.trim();
      }
    });

    // auto small confetti now and then
    setInterval(()=>{ makeConfetti(); }, 8000);


    
  