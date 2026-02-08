let  marks = [10,20,25,30,40,45,60]
let result=marks.find(getmarks);

function getmarks(element) {
        return element > 10
}
console.log(result)




let names=["aiza","azka","ayat","shanzy"]
let newNames=names.find(stu);
function stu(val) {
        return val.length >=5       
}
console.log(newNames)

