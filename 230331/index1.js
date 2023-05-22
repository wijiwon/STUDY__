//Class ES6부터 지원했고
//Class를 사용하면 상속을 지원한다.
//코드의 재사용을 더 높일 수 있다.

function aa(){
    this.name = name;
}

//클래스의 생성자 함수
class student{
    
    //constructor: 클래스의 생성자 함수
    //constructor() 생성자 함수를 작성하지 않으면
    //constructor()의 빈 생성자 함수가 묵시적으로 발생한다.
    constructor(age, phone, city){
        this.age = age;
        this.phone = phone;
        this.city = city;
    }
    getInfo(){
        return "나이는 : " + this.age + "살이고 핸드폰 번호는 " + this.phone + " 사는 곳 : " + this.city + "이야"
    }
}

let st = new student(30,"010-0000-0000","서울");
console.log(st);
console.log(st.age);    //키값 접근
console.log(st.phone);
console.log(st.getInfo());

class Character{
    constructor(hp, mp, atk){
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
    }
    getState(){
        return this.hp + this.mp + this.atk;
    }
    //정적 메소드: 일반적으로 공용함수를 만들기 위해 사용.
    //클래스의 인스턴스에서 호출하지 않음
    //static메소드는 클래스를 동적할당 할때마다 생성되지 않는다.
    //한개만 있다.
    //인스턴스를 생성할 때 더 생성되지 않는다.
    static getAtk(n){
        return n.atk;
    }
}

let ca = new Character(100,100,100);
console.log(ca);
//이렇게 생성한 인스턴스에서 호출하면 안된다.
//console.log(ca.getAtk(1));// 결과가 불러와지지 않는다.
console.log(Character.getAtk(ca));

class Product{
    constructor(name, price){      //생성자 함수 만들고 시작하자.
        this.name = name;
        this.price = price;
    }
    //getter setter
    //get: 값을 호출할 때 네이밍
    //set: 값을 수정할 때 네이밍
    //클래스의 값을 가져오거나 설정할 때 getter와 setter를 제공해준다.
    //클래스의 값에 접근할 때 직접 변수에 접근하는 형태가 아닌 get과
    //set을 통한 접근방법
    //내부구조를 캡슐화 하는데 좋다.
    //전역적으로 데이터가 사용되지 않게 위험성을 방지해준다.
    //객체지향

    get getName(){
        return "제품이름 : " + this.name;
    }
    set setPrice(price){
        this.price = price;
    }
}

let pr = new Product("갤럭시 노트", 1000000);
console.log(pr);
//getter를 확인해보자
console.log(pr.getName);
//setter를 확인해보자
pr.setPrice = 2000;     //price 값이 수정된다.
console.log(pr);    
