const data = ["a","b","c"];
data.forEach(d=>console.log(d));
console.log(data)

// 1week-js-basic
// 미션 1. 배열 (page 108~117)      2020.10.19

//배열 : 여러 값이 연속으로 저장된 공간


var 객체 = {name: "홍길동",  age: 20, height: 185.2};  //객체: 속성 이름과 그에 대응하는 집합 , 배열: 값의 나열

var arr = [1, 2, 3, 4, 5];
console.log(arr)


//실습 배열만들기
//step1 길이가 5인 배열 arr을 만들고 원하는 값으로 초기화해 보세요.
var arr= [1, 2, 3, 4, 5];

//step2 firtElement() 함수를 수정해서 매개변수로 받는 배열 arr의 첫 번째 엘리먼트를 반환하도록 만들어 보세요
function firstElement(arr) {
    return arr[0];
}
console.log( firstElement(arr) );


/**배열에서 활용할 수 있는 명령
 * pop()  명령 : 배열의 맨 뒤에 있는 엘리먼트를 뺴서 반환
 * shift() 명령 :  배열의 맨 앞에 있는 엘리먼트를 뺴서 반환
 * push() 명령 : 배열의 맨 뒤에 엘리먼트를 추가하는 명령
 * unshift() 명령 : 배열의 맨 앞에 엘리먼트를 추가하는 명령
 * reverse() 명령 : 배열 엘리먼트의 순서를 거꾸로 뒤집는 명령
 * sort() 명령 : 배열 안의 원소들을 오름차순으로 정렬
 * concat() 명령 : 두 배열을 합쳐서 반환
 */


 var arr= [1, 2, 3, 4, 5];
 console.log(arr.pop())
 console.log(arr)
 
 console.log(arr.shift())
 console.log(arr)
 
 console.log(arr.push(6))
 console.log(arr)
 
 console.log(arr.unshift(0))
 console.log(arr)
 
 console.log(arr.reverse())
 
 console.log(arr.sort())
 


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log( arr1.concat(arr2) )
console.log(arr1)
console.log(arr2)
console.log( arr3= arr1.concat(arr2) )

// concat()와 push()  명령 차이

console.log( arr1.concat(arr2) )
console.log( arr1.push(arr2) )
console.log(arr1)


// indexOf()   와  lastIndexOf()   명령 역시 사용법은 문자열과 같습니다.

var arr4 = [1, 2, 3, 4, 1, 2, 3];
console.log(arr4.indexOf(2))   // indexOf()명령을 이용해서 2를 찾으면 2가 처음 나오는 곳의 위치(인덱스)인 1을 반환
console.log(arr4.lastIndexOf(2)) // lastIndexOf()명령을 이용해서 2를 검색하면 2가 마지막에 나오는 곳의 위치인 5를 반환

//문자열 명령
// split() 명령 : 문자열을 구분자(separator)로 나누고 나뉘진 각 문자열을 배열에 넣어 봔한
var str = "1, 2, 3, 4, 5";
console.log(str.split(","))


/**
 * 실습.배열사용하기
 * step1 배열 arr의 맨 앞에는 "begin", 맨 뒤에는 "end" 문자열을 엘리먼트로 추가하세요. 
 */
var arr = [1, 2, 3];
console.log(arr.push("end"))
console.log(arr)
console.log(arr.unshift("begin"))
console.log(arr)




/**
 * 1. 정수 a, 정수 B를 매개변수로 받아서 두 수의 합을 구하는 함수를 작성하세요
 *
 */

function sum(a,b) {
    let c = a + b ;
    return c ;
}

console.log(sum(1,2))

function multiplication(a, b, c) {
    let g = a * b * c ;
    return g ;
}

console.log(multiplication(1,2,3))

/**
 * 2. 1,2,3,4,5의 평균을 구하는 함수를 작성하세요
 */
function average1() {
    return (1+2+3+4+5) / 5 ;
}


console.log(average1())


function average(a,b,c) {
    return (a+b+c) / 3 ;
}


console.log(average(2,5,7))



/**
 * 김아무개의 월급은 230만원 입니다.
 * 김아무개의 휴대폰 비용은 한달에 5만원. 월세 한달에 10만원, 주유비는달에 10만원 입니다.
 * 이 금액을 고정치출비라고 할때 김아무개의 고정지출비를 제외한 나머지 금액을 구한느 함수를 작성하세요
 * 입니다.
 */

 function amount(){
     let fixedmoney = 5 + 10 + 10 ;
     let money = 230 - fixedmoney ;
     return money ;
 }
 console.log(amount())




 /**
  * 2week-js-basic.md
  * 반복문 : for 문  ,  for/ in 문
  */

          var cost = [85, 30, 25, 10, 5];
          var total_cost = 0 ;
          //i = 0, total_cost = 0 -> 0 + 85 = 85
          //i= 1, total_cost = 85 -> 85 + 30 = 115
          //i= 2, total_cost = 115 -> 115 + 25 = 140
          //i= 3, total_cost = 140 -> 140 + 10 = 150
          //i= 4, total_cost = 150 -> 150 + 5 = 155

          for (i = 0; i < cost.length; i++) {
            total_cost = total_cost + cost[i];
          }

          console.log(total_cost)



  //반복문 연습문제 1. 1부터 100까지 더하는 코드를 만들어라
   /// var number = {i = 1, j = 100};
  
/**
 * for(초기값 선언; 종료조건; 초기값 변경문)
 */
 var total_sum = 0 ;

 for (var i =1, j = 100; i < j; i++, j--){
     
     total_sum = total_sum + (i + j) ;
  }
  console.log(total_sum)


  /**
   * 간단한 방법
   */
  var result = 0;
  for(var i =1; i <= 100; i++) {
    result = result + i;
  }
  console.log(result);

  /**
   * 한줄로 줄이는 방법
   */
let arr1111 = [];
for(var i = 1; i <= 100; i++) {
    arr1111.push(i);
}
var result2 = 0;
arr1111.map(i=> result2 = result2+i);
console.log(result2);

//반복문 연습문제 2. 1부터 100까지 곱하는 코드를 만들어라

var number_multi = 1;
for (var i =1; i<=100; i++) {
    number_multi = number_multi * i;
}
console.log(number_multi)
/**
 * 1*2*3*4* ....*100
 * i=1, 1* 1=1
 * i=2, 1*2 =2
 * i=3, 2*3=6
 * 
 */

 //반복문 연습문제 3. [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서 최대값과 최소값을 찾는 코드를 만들어라
/**
 * for(초기값 선언; 종료조건; 초기값 변경문)
 */
 var arr10 = [52, 273, 103, 32, 57, 103, 31, 2];
 
 var max = Math.max(...arr10);
 var min = Math.min(...arr10);

console.log(max)
console.log(min)