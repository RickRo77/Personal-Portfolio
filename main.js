document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing');
  const words = ["Web Developer", "Programmer", "Student"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;
  let pauseBetweenWords = 2000;

  function type() {
    const currentWord = words[wordIndex];
    const displayText = isDeleting ? 
        currentWord.substring(0, charIndex - 1) : 
        currentWord.substring(0, charIndex + 1);
    textElement.textContent = `I am a ${displayText}`;

    if (!isDeleting) {
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenWords);
            return;
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  }

  type();
});



// document.addEventListener('scroll', function() {
//   const scrolledHeight = document.documentElement.scrollTop || document.body.scrollTop;
//   const maxHeight = (document.documentElement.scrollHeight - window.innerHeight)*0.3;
//   const scrollFraction = scrolledHeight / maxHeight;

//   // Calculate a new color based on the scroll fraction
//   const red = Math.min(29, 29 * (scrollFraction));
//   const green = Math.min(35, 35 * (scrollFraction));
//   const blue = Math.min(42, 42 * (scrollFraction));

//   const newColor = `rgb(${red}, ${green}, ${blue})`;

//   const colorChangeDiv = document.getElementById('about');
//   colorChangeDiv.style.backgroundColor = newColor;
// });


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              
          }
          else{
            entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  cards.forEach(card => {
      observer.observe(card);
  });
});


document.addEventListener('DOMContentLoaded', function() {
const heartBeatImage = document.getElementById('heartBeat');
let x = 50;
let up=1;
function updateBoxShadow() {
    heartBeatImage.style.boxShadow = `0 0 ${x}px #00a1ff`;
    if(x==300){up=0;}
    if(x==100){up=1;}
    if(up)
      x++;
    else
      x--;

    setTimeout(updateBoxShadow,3);
}

// Start the loop
updateBoxShadow();
})


// Add event listener to the form
// document.getElementById('dataForm').addEventListener('submit', (event)=> {
//   event.preventDefault(); // Prevent the default form submission

//   // Get form data
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData.entries());

//   // Call the post method with form data
//   console.log('Form Data:', data);
// });

function validateForm() {
  // Check that all required fields are filled in
  if (document.getElementById("name").value == "") {
    alert("Please enter your name");
    return false;
  }

  // Check that the email address is in a valid format
  var email = document.getElementById("email").value;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Submit the form if all validation checks pass
  return true;
}