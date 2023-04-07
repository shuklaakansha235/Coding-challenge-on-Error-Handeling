class employee{

    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
       
    }

    
}

const employee1 = new employee("Akansha","CEO","10000000");
console.log(employee1.getSalary());