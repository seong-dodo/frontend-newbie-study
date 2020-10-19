const data = ["a","b","c"];
data.forEach(d=>console.log(d));
console.log(data)

// 1week-js-basic
// 미션 1. 배열 (page 108~117)

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