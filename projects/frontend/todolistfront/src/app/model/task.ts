export class Task{
public id:number=0;
public task:string;
public day:number;
public register:Date;
public category:Category;
public status:string='Həll olunmayıb';
constructor(){
    this.category=new Category();
}

}




export class Category{
public id:number;
public name:string;
}



export class StatusModel{
    public id:number;
    public status:string;
    }
