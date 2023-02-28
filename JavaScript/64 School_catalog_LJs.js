class Student{
    
    constructor(name, level,numberOfStudent){
        this._name=name;
        this._level=level;
        this._numberOfStudent=numberOfStudent;
    }
    get name(){
        return this._name;
    }
    get level(){
        
       return this._level;

   }
    set level(l){
        if(l=="primary"||l=="middle"||l=="high"){
           return this._level=l   
        }else{
          return dhdh;
        }
    }
    get numberOfStudent(){
        return this._numberOfStudent
    }
    set numberOfStudent(n){
        this._numberOfStudent=n;
    }
    show(){
        console.log(this._name)
        console.log(this._level)
        console.log(this._numberOfStudent)
       // console.log(aa)

    }
}
let st=new Student("aakanksha")

st.level="primary"
//let aa=st.level




st.numberOfStudent=1

st.show()