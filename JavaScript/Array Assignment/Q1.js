/*
1.Write a simple JavaScript program to join all elements of the following array into a string.
 Go to the editorSample array :
  myColor = ["Red", "Green", "White", "Black"];
  Expected Output :"Red,Green,White,Black"
                    "Red,Green,White,Black"
                    "Red+Green+White+Black"
                    */
 
                    myColor=["Red","Green","white","Blue"];
                    console.log(myColor.toString());
                    console.log(myColor.join());
                    console.log(myColor.join('+'))