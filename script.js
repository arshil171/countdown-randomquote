let Quotes = [
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
    "Good code is its own best documentation. – Steve McConnell",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "In order to be irreplaceable, one must always be different. – Coco Chanel",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Talk is cheap. Show me the code. – Linus Torvalds"
  ];

  let button = document.getElementById("Gen-Quot")
  let Quotes2 = document.getElementById("Quotes")

//   Quotes2.innerHTML = Quotes[0]

//  button.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random() * Quotes.length)
//     Quotes2.innerHTML = Quotes[randomNumber]
//   })


  let show = document.querySelector("#show")
       
        
      
        button.addEventListener("click" , ()=>{
            let number  = 10;
        let id = setInterval(()=>{
         if(number >0){
            number--
            show.innerHTML = number
          
            if(number == 0){
                let randomNumber = Math.floor(Math.random() * Quotes.length)
                    Quotes2.innerHTML = Quotes[randomNumber]
                      show.innerHTML = ""
                    //   Quotes2.innerHTML = ""
            }
            else{
                
                show.innerHTML = number
                // Quotes2.innerHTML = " "
            }
         }
        },1000)
        })