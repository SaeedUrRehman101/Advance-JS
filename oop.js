let demo= document.querySelector("#demo");
class Employes{
    constructor (n,e,p,s){
        this.name=n;
        this.email=e;
        this.phone=p;
        this.salary=s;
    }
    dutyshift(s){
        let h1=`<h1>${this.name} is working in the ${s} shift & his Salary is ${this.salary}.</h1>`
        demo.innerHTML=h1;
    }
}
class developers extends Employes{
    constructor(name,email,phone,salary,jobstatus){
        super(name,email,phone,salary);
        this.jobstatus=jobstatus;
    }
    skills(skill){
        let x=`<h1>${this.name} is the student of ${skill} & he is working in the softwear house & his salary is ${this.salary}.</h1>`;
        demo.innerHTML+=x;
    }
}
let a=new developers("ali","adcd@gmail.com","090291212","50k");
a.dutyshift("morning");
a.skills("Frontend Developer");