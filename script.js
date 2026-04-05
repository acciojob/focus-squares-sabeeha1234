//your JS code here. If required.
const squares = document.querySelectorAll(".square")

        for(let square of squares){
            square.addEventListener("mouseover",(e)=>addBgColor(e))

            square.addEventListener("mouseout",(e)=>addDefaultColor(e))


        }
        //add color
        function addBgColor(e){
            // e.target.style.backgroundColor="blue"
            let selectedBox = e.target.id
            for(let i=0;i<squares.length;i++){
                if(squares[i].id!=selectedBox){
                    squares[i].style.backgroundColor="#6F4E37"

                }
            }



        }
        //add default
        function addDefaultColor(e){
            // e.target.style.backgroundColor="aquamarine"
            let selectedBox=e.target
               for(let i=0;i<squares.length;i++){
                if(squares[i].id!=selectedBox){
                    squares[i].style.backgroundColor="#E6E6FA"

                }
            }

        }