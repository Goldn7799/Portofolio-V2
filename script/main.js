//url
const opens = (act)=>{
  if (act == 1){
    window.open("https://www.instagram.com/syeifsultan/")
  }else if (act == 2){
    window.open("https://wa.me/+6281228020195/")
  }else if (act == 3){
    window.open("https://web.facebook.com/syeifsultoni.akbar/")
  }else if (act == 4){
    window.open("https://github.com/Goldn7799/")
  }else if (act == 5){
    window.open("https://riverzgm.netlify.app/")
  }else if (act == 6){
    window.open("https://github.com/Goldn7799/MyShell/")
  }else if (act == 7){
    alert("Kamu Sudah berada di WEB")
  }else if (act == 8){
    window.open("https://github.com/Goldn7799/MTK")
  }else if (act == 9){
    window.open("https://sgstudios.vercel.app/")
  }else if (act == 10){
    window.open("https://github.com/Goldn7799/GamesWabot-Monitor")
  }else if (act == 11){
    window.open("https://gatotkacae.vercel.app/")
  }else if (act == 12){
    window.open("https://github.com/Goldn7799/sgbrowser")
  }
  else {
    console.log("Not Found")
  }
}
//end url

//utility
document.getElementById("devider").style.height = `${screen.height - 500}px`;
setInterval(()=>{
  if (screen.width < 450){
    document.getElementById("iconmed").style.display = "none";
    document.getElementById("mobile-btn").style.display = "block";
    document.getElementById("iconmed").classList.remove("d-flex")
  }else {
    document.getElementById("iconmed").style.display = "block";
    document.getElementById("mobile-btn").style.display = "none";
    document.getElementById("iconmed").classList.add("d-flex")
    if (sdbar){
      document.getElementById("sidebar").classList.remove("n-sidebar-show")
      sdbar = false;
    };
  }
}, 500)
//end utility

//text animation
let key = 0, lock = false;
var text1 = "Iam Full Stack Developer"
var text2 = "Coder`s Or Game`s?"
var text3 = "YT : Syeif Gamer1015"
var text4 = "Visit : syeifsultan.vercel.app"
var sub1 = "Visit : github.com/Goldn7799"
var sub2 = "Visit : syeifsultan.netlify.app"
var text = text1;
const desc = document.getElementById("desc");
const cursor = document.getElementById("cursor-desc");
const subsRun = ()=>{
  const sub = setInterval(()=>{
    if (lock){
      key--;
      desc.innerText = `${text.substring(0, key)}`;
    }else {
      key++;
      desc.innerText = `${text.substring(0, key)}`;
    };
    if (key == text.length){
      lock = true;
      clearInterval(sub);
      setTimeout(()=>{
        subsRun()
      }, 800)
    };
    if (key == 7){
      lock = false;
      if (text == sub1){
        text = sub2;
      }else if (text == sub2){
        clearInterval(sub);
        const subContiue = setInterval(()=>{
          key--;
          desc.innerText = `${text.substring(0, key)}`;
          if (key == 0){
            clearInterval(subContiue);
            text = text1;
            runs()
          };
        }, 100)
      }else { console.log("err") }
    };
  }, 100)
}
const runs = ()=>{
  const start = setInterval(()=>{
    if(lock){
      if (text === text4&&key === 7){
        clearInterval(start);
        text = sub1;
        lock = false;
        subsRun();
      }else {
        key--;
        desc.innerText = `${text.substring(0, key)}`;
      }
    }else {
      key++;
      desc.innerText = `${text.substring(0, key)}`;
    }
    if (key == text.length){
      lock = true;
      clearInterval(start)
      setTimeout(() => {
        if(text == text1){
          desc.classList.add("n-desc-block")
          cursor.style.display = "none";
          setTimeout(()=>{
            key = 0;
            lock = false;
            text = text2;
            desc.innerText = `${text.substring(0, key)}`;
            cursor.style.display = "block";
            setTimeout(()=>{
              desc.classList.remove("n-desc-block")
              runs()
            }, 400)
          }, 500)
        }else { runs() }
      }, 800);
    };
    if (key == 0){
      lock = false;
      if (text == text2){
        text = text3;
      }else if (text == text3){
        text = text4;
      }else if (text == text4){
        text = text1;
      };
    };
  }, 100)
}
runs()
//end text animation

//arrow
let arLock = false;
const arrow = document.getElementById("arrow");
setInterval(() => {
  if(arLock){
    arrow.classList.remove("n-arrow-down")
    arLock = false;
  }else {
    arrow.classList.add("n-arrow-down")
    arLock = true;
  }
  
}, 250);
//end arrow

//sidebar
let sdbar = false;
const sidebar = ()=>{
  if(sdbar){
    document.getElementById("sidebar").classList.remove("n-sidebar-show")
    sdbar = false;
  }else {
    document.getElementById("sidebar").classList.add("n-sidebar-show")
    sdbar = true;
  }
}
//end sidebar

//animation
// Remove the transition class
const anim = document.querySelector('.about-anim');
anim.classList.remove('about-show');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anim.classList.add('about-show');
      anim.classList.remove('about-hidden');
      return;
    }

    anim.classList.add('about-hidden');
    anim.classList.remove('about-show');
  });
});

observer.observe(document.querySelector('.about'));

// Remove the transition class
const skill = document.querySelector('.skill-anim');
skill.classList.remove('skill-show');

// Create the observer, same as before:
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skill.classList.add('skill-show');
      skill.classList.remove('skill-hidden');
      return;
    }

    skill.classList.add('skill-hidden');
    skill.classList.remove('skill-show');
  });
});

observers.observe(document.querySelector('.skill'));

// Remove the transition class
const project = document.querySelector('.project-anim');
project.classList.remove('project-show');

// Create the observer, same as before:
const observerss = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      project.classList.add('project-show');
      project.classList.remove('project-hidden');
      return;
    }

    project.classList.add('project-hidden');
    project.classList.remove('project-show');
  });
});

observerss.observe(document.querySelector('.project'));

// Remove the transition class
const hobby = document.querySelector('.hobby-anim');
hobby.classList.remove('hobby-show');

// Create the observer, same as before:
const observersss = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hobby.classList.add('hobby-show');
      hobby.classList.remove('hobby-hidden');
      return;
    }

    hobby.classList.add('hobby-hidden');
    hobby.classList.remove('hobby-show');
  });
});

observersss.observe(document.querySelector('.hobby'));
//end animation