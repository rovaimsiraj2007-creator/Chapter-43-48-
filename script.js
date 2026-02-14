// Answer 01
function clickLink(){
    alert("Welcome in Mobile Store!")
};

// Answer 02
function firstMob(){
    alert("IPhone 17 Pro Max !")
};

function secondMob(){
    alert("Samsung S25 Ultra !")
};

function thirdMob(){
    alert("Google Pixel 10 Xl !")
};

// Answer 03
let students = []

        function addStudent(){
            let studentName = document.getElementById("studentName").value;
            let studentBatch = document.getElementById("studentBatch").value;
            let studentObj = {
                name: studentName,
                batch: studentBatch
            }
            students.push(studentObj)
            printTable()
        }

        function deleteStudent(index){
            students.splice(index, 1)

            printTable()
        }

        function printTable(){
            let rows = ""
            for(let i=1; i < students.length; i++){
                rows += `
                    <tr>
                        <td>${i}</td>
                        <td>${students[i].name}</td>
                        <td>${students[i].batch}</td>
                        <td>
                            <button class="deletebtn" onClick="deleteStudent(${i})">Delete</button>
                        </td>
                    </tr>
                `
            }

            document.getElementById("tbody").innerHTML = rows
        }


// Answer 04
        function changeSource(type){
            if(type == 'new'){
                document.getElementById("myImg").src = "images/Google-Pixel-10-Pro-XL-Qmart-2.jpg"
            }else{
                document.getElementById("myImg").src = "images/samsung-galaxy-s25-ultra-pakistan-priceoye-zmuf1-270x270.webp"
            }
        }


// Answer 05
let number = []
for(let i=0 ; i <= number.length ; i++){
    console.log(number.push([i]));
     break
    
}         