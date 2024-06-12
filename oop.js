
                              // "OBJECT ORIANTED PROGRAME (OOP)";  \\

let demo= document.querySelector("#demo");

let student={
    full_name : "Asad",
    Batch_code : "202309B",
    Marks : "90",
    Class : "ACCP" ,
    printmarks :(full_name,Batch_code,Marks,Class)=>{
        this.full_name=full_name;
        this.Batch_code=Batch_code;
        this.Marks=Marks;
        this.Class=Class;
        // console.log("hi");
        // console.log(s);
        let x= `${this.full_name} is the student of ${this.Class} & his Batch Code is ${this.Batch_code} & he got ${this.Marks} marks in over all subjects.`
        demo.innerHTML=x;
    }
}
// demo.innerHTML+=student.full_name;
let x=student.printmarks(student.full_name,student.Batch_code,student.Marks,student.Class)


// let demo= document.querySelector("#demo");
// class Employes{
//     constructor (n,e,p,s){
//         this.name=n;
//         this.email=e;
//         this.phone=p;
//         this.salary=s;
//     }
//     dutyshift(s){
//         let h1=`<h1>${this.name} is working in the ${s} shift & his Salary is ${this.salary}.</h1>`
//         demo.innerHTML=h1;
//     }
// }
// class developers extends Employes{
//     constructor(name,email,phone,salary,jobstatus){
//         super(name,email,phone,salary);
//         this.jobstatus=jobstatus;
//     }
//     skills(skill){
//         let x=`<h1>${this.name} is the student of ${skill} & he is working in the softwear house & his salary is ${this.salary}.</h1>`;
//         demo.innerHTML+=x;
//     }
// }
// let a=new developers("ali","adcd@gmail.com","090291212","50k");
// a.dutyshift("morning");
// a.skills("Frontend Developer");